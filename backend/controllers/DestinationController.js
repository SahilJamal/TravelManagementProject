import Destination from "../models/Destination.model.js";
import User from "../models/User.model.js";


const getAllDestinations = async (req, res, next) => {
  try {
    const destinationsData = await Destination.find({}).populate({
      model: User,
      path: "user",
      select: "name email",
    });
    if (destinationsData) {
      res.status(200).json(destinationsData);
    } else {
      throw new Error("No Data Found");
    }
  } catch (error) {
    next(error);
    console.log("error", error);
  }
};

const getDestinationById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const destination = await Destination.findById(id).populate({
      path: "user",
      model: User,
      select: "name email",
    });
    if (destination) {
      res.status(200).json(destination);
    } else {
      res.status(404);
      throw new Error("Destination Not found");
    }
  } catch (error) {
    next(error);
    console.log("error", error);
  }
};


const updateDestinationItems = async (req, res, next) => {
  const { id } = req.params;
  const { price, title, category, description } = req.body;
  try {
    const destination = await Destination.findById(id);
    if (destination) {
      destination.price = price,
      destination.title = title,
      destination.category = category,
      destination.description = description
      const images = req.file ? req.file.path : [];
      destination.thumbnail_image = images
      const updatedDestination = await destination.save();
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

const updateDetailDestination = async (req, res, next) => {
  const { id } = req.params;  // Destination ID
  const { detail_id, detail_price, detail_title, detail_description, duration } = req.body;  // Details for the update

  try {
    // Find the destination by ID
    const destination = await Destination.findById(id);
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }

    // Find the specific detail by detail_id within the destination.details array
    const detailToUpdate = destination.details.find(detail => detail._id.toString() === detail_id);
    if (!detailToUpdate) {
      return res.status(404).json({ message: 'Detail not found' });
    }

    // Update the specific detail's fields if they exist in the request
    if (detail_price) detailToUpdate.detail_price = detail_price;
    if (detail_title) detailToUpdate.detail_title = detail_title;
    if (detail_description) detailToUpdate.detail_description = detail_description;
    if (duration) detailToUpdate.duration = duration;
    console.log('detailToUpdate :>> ', detailToUpdate);

    // Handle the images if provided
    if (req.files && req.files.length > 0) {
      const images = req.files.map((file) => `/${file.path}`);
      detailToUpdate.images = images;  // Replace existing images with new ones
    }

    // Save the updated destination
    const updatedDestination = await destination.save();

    // Send the updated destination back as the response
    res.json(updatedDestination);
  } catch (error) {
    console.error("Error updating destination detail:", error);
    next(error);  // Pass the error to the error handling middleware
  }
};


const createDetailDestinationItems = async (req, res, next) => {
  try {
    // Destructure the fields from the request body
    const { id } = req.params;
    const destination = await Destination.findById(id);
    const { detail_price, detail_title, detail_description, duration } = req.body;

    if (destination) {
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
      if (!Array.isArray(destination.details) || destination.details.length === 0) {
        // If details is empty or not an array, initialize it with the new detailItem
        destination.details = [detailItem];
      } else {
        // If details exist, push the new detailItem to the existing array
        destination.details.push(detailItem);
      }

      // Save the updated destination
      const updatedDestination = await destination.save();
      res.json(updatedDestination);
    } else {
      res.status(404).json({ message: 'Destination not found' });
    }
  } catch (error) {
    console.error("Error creating destination:", error);
    next(error);  // Pass the error to the error handling middleware
  }
};


const createDestinationItems = async (req, res, next) => {
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
    const createdDestination = await Destination.create(destinationData);
    return res.status(201).json(createdDestination);
  } catch (error) {
    console.error("Error creating destination:", error);
    next(error);
  }
};

const deleteDestination = async (req, res, next) => {
  const { id } = req.params;
  const destination = await Destination.findById(id);
  if (destination) {
    const deleteDestination = await Destination.deleteOne({ _id: id });
    res.status(200).json("Deleted successfully");
  } else {
    res.status(404);
    throw new Error("Destination not found");
  }
}

export {
  getAllDestinations,
  getDestinationById,
  createDestinationItems,
  createDetailDestinationItems,
  updateDestinationItems,
  updateDetailDestination,
  deleteDestination
};
