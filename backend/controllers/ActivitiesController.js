import Package from "../models/package.model.js";
import User from "../models/User.model.js";


const getAllPackage = async (req, res, next) => {
    try {
        const packageData = await Package.find({}).populate({
            model: User,
            path: "user",
            select: "name email",
        });
        if (packageData) {
            res.status(200).json(packageData);
        } else {
            throw new Error("No Data Found");
        }
    } catch (error) {
        next(error);
        console.log("error", error);
    }
};

const getPackageById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const packageData = await Package.findById(id).populate({
            path: "user",
            model: User,
            select: "name email",
        });
        if (packageData) {
            res.status(200).json(packageData);
        } else {
            res.status(404);
            throw new Error("Order Not found");
        }
    } catch (error) {
        next(error);
        console.log("error", error);
    }
};


const updatePackage = async (req, res, next) => {
    const { id } = req.params;
    const { price, title, category, description } = req.body;
    try {
        const packageData = await Package.findById(id);
        if (packageData) {
            packageData.price = price,
            packageData.title = title,
            packageData.category = category,
            packageData.description = description
            const images = req.file ? req.file.path : [];
            packageData.thumbnail_image = images
            const updatedDestination = await packageData.save();
            res.json(updatedDestination);
        } else {
            res.status(404);
            throw new Error("Destination not found");
        }
    } catch (error) {
        console.log("error", error);
        next(error);
    }
};

const createPackage = async (req, res, next) => {
    try {
        const { price, title, category, description } = req.body;
        const images = req.file ? req.file.path : [];
        const destinationData = {
            price,
            description,
            title,
            category,
            thumbnail_image: images,
            user: req.user._id
        };
        const createdPackage = await Package.create(destinationData);
        return res.status(201).json(createdPackage);
    } catch (error) {
        console.error("Error creating destination:", error);
        next(error);
    }
};

const deletePackage = async (req, res, next) => {
    const { id } = req.params;
    try {
        const destination = await Package.findById(id);
        if (destination) {
            const deletePackage = await Package.deleteOne({ _id: id });
            res.status(200).json("Deleted successfully");
        } else {
            res.status(404);
            throw new Error("Destination not found");
        }
    } catch (error) {
        console.error("Error while delete destination:", error);
        next(error);
    }
}

export {
    getAllPackage,
    getPackageById,
    updatePackage,
    createPackage,
    deletePackage
};
