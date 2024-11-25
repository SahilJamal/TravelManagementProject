import Package from "../models/package.model.js";
import User from "../models/User.model.js";

const getAllPackages = async (req, res, next) => {
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
      throw new Error("Package Not found");
    }
  } catch (error) {
    next(error);
    console.log("error", error);
  }
};

const updatePackageItems = async (req, res, next) => {
  const { id } = req.params;
  const { price, title, category, description } = req.body;
  try {
    const packageData = await Package.findById(id);
    if (packageData) {
      (packageData.price = price),
        (packageData.title = title),
        (packageData.category = category),
        (packageData.description = description);
      const images = req.file ? req.file.path : [];
      packageData.thumbnail_image = images;
      const updatedPackage = await packageData.save();
      res.json(updatedPackage);
    } else {
      res.status(404);
      throw new Error("Package not found");
    }
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

const updateDetailPackage = async (req, res, next) => {
  const { id } = req.params; // Destination ID
  const {
    detail_id,
    detail_price,
    detail_title,
    detail_description,
    duration,
  } = req.body; // Details for the update

  try {
    // Find the destination by ID
    const packageData = await Package.findById(id);
    if (!Package) {
      return res.status(404).json({ message: "Package not found" });
    }

    // Find the specific detail by detail_id within the Package.details array
    const detailToUpdate = packageData.details.find(
      (detail) => detail._id.toString() === detail_id
    );
    if (!detailToUpdate) {
      return res.status(404).json({ message: "Detail not found" });
    }

    // Update the specific detail's fields if they exist in the request
    if (detail_price) detailToUpdate.detail_price = detail_price;
    if (detail_title) detailToUpdate.detail_title = detail_title;
    if (detail_description)
      detailToUpdate.detail_description = detail_description;
    if (duration) detailToUpdate.duration = duration;
    // Handle the images if provided
    if (req.files && req.files.length > 0) {
      const images = req.files.map((file) => `/${file.path}`);
      detailToUpdate.images = images; // Replace existing images with new ones
    }

    // Save the updated destination
    const updatedDestination = await packageData.save();

    // Send the updated destination back as the response
    res.json(updatedDestination);
  } catch (error) {
    console.error("Error updating destination detail:", error);
    next(error); // Pass the error to the error handling middleware
  }
};

const createDetailPackageItems = async (req, res, next) => {
  try {
    // Destructure the fields from the request body
    const { id } = req.params;
    const packageData = await Package.findById(id);
    const { detail_price, detail_title, detail_description, duration } =
      req.body;

    if (packageData) {
      // Handle the images
      const images = req.files ? req.files.map((file) => `/${file.path}`) : [];

      // Create a single object with all the details
      const detailItem = {
        detail_price: detail_price,
        detail_title: detail_title,
        detail_description: detail_description,
        images: images,
        duration: duration,
      };

      // Check if destination.details is an array and not empty
      if (
        !Array.isArray(packageData.details) ||
        packageData.details.length === 0
      ) {
        // If details is empty or not an array, initialize it with the new detailItem
        packageData.details = [detailItem];
      } else {
        // If details exist, push the new detailItem to the existing array
        packageData.details.push(detailItem);
      }

      // Save the updated destination
      const updatedPackage = await packageData.save();
      res.json(updatedPackage);
    } else {
      res.status(404).json({ message: "Destination not found" });
    }
  } catch (error) {
    console.error("Error creating destination:", error);
    next(error); // Pass the error to the error handling middleware
  }
};

const createPackageItems = async (req, res, next) => {
  try {
    const {
      price,
      title,
      category,
      description,
      pickUp_drop,
      duration,
      inclusions,
      itinerary,
      inclusionDetail,
      exclusionDetail,
    } = req.body;
    const images = req.file ? req.file.path : [];
    const packageData = {
      price,
      description,
      title,
      category,
      thumbnail_image: images,
      user: req.user._id,
      pickUp_drop,
      duration,
      inclusions,
      itinerary,
      inclusionDetail,
      exclusionDetail,
    };
    const createdDestination = await Package.create(packageData);
    return res.status(201).json(createdDestination);
  } catch (error) {
    console.error("Error creating destination:", error);
    next(error);
  }
};

const deletePackage = async (req, res, next) => {
  const { id } = req.params;
  const destination = await Package.findById(id);
  if (destination) {
    const deleteDestination = await Package.deleteOne({ _id: id });
    res.status(200).json("Deleted successfully");
  } else {
    res.status(404);
    throw new Error("Destination not found");
  }
};

export {
  getAllPackages,
  getPackageById,
  updatePackageItems,
  updateDetailPackage,
  createDetailPackageItems,
  createPackageItems,
  deletePackage,
};
