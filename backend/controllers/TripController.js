import Trip from "../models/Trip.model.js";

const getAllTrips = async (req, res, next) => {
  const pageSize = process.env.PAGE_SIZE || 6;
  const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? { name: { $regex: req.query.keyword, $options: "i" } }
    : {};
  try {
    const count = await Trip.countDocuments({ ...keyword });
    const Trips = await Trip.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    if (Trips) {
      return res.json({ Trips, page, pages: Math.ceil(count / pageSize) });
    }
    throw new Error("Trips not found try again");
  } catch (error) {
    next(error);
    console.log("error", error);
  }
};

const getTripById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const TripData = await Trip.findById(id);
    if (TripData) {
      return res.json(TripData);
    }
    res.status(404);
    throw new Error("Trip Not Found");
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

const getTripByCategoryName = async (req, res, next) => {
  const { category } = req.query;

  try {
    const trips = await Trip.findOne({ category });
    if (trips.length > 0) {
      return res.json(trips);
    }
    res.status(404);
    throw new Error("No trips found for this category");
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

const createTrip = async (req, res, next) => {
  try {
    // Extract trip data from request body
    const { name, price, description, category, numReviews } = req.body;
    // Extract image paths from uploaded files
    const images = req.files ? req.files.map((file) => `/${file.path}`) : [];

    // Create a new trip object
    const tripData = {
      name,
      price,
      description,
      category,
      numReviews,
      image: images,
      // user: req.user._id, // Uncomment if user authentication is implemented
    };

    const createdTrip = await Trip.create(tripData);
    return res.status(201).json(createdTrip);
  } catch (error) {
    console.error("Error creating trip:", error);
    next(error);
  }
};

const updateTrip = async (req, res, next) => {
  const { id } = req.params;
  const { name, description, category, brand, price, image, countInStock } =
    req.body;
  try {
    const Trip = await Trip.findById(id);

    if (Trip) {
      Trip.name = name;
      Trip.price = price;
      Trip.description = description;
      Trip.image = image;
      Trip.brand = brand;
      Trip.category = category;
      Trip.countInStock = countInStock;

      const updatedTrip = await Trip.save();
      res.json(updatedTrip);
    } else {
      res.status(404);
      throw new Error("Trip not found");
    }
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

const deleteTripById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const deletedTrip = await Trip.findByIdAndDelete(id);
    return res.json(deletedTrip);
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

const addTripReview = async (req, res, next) => {
  const { rating, comment } = req.body;
  const { id } = req.params;
  try {
    const Trip = await Trip.findById(id);
    if (Trip) {
      const alreadyReviewd = Trip.reviews?.find(
        (review) => review.user.toString() === req.user._id.toString()
      );
      console.log("alreadyReviewd", alreadyReviewd);
      if (alreadyReviewd) {
        throw new Error("Trip already reviwed");
      }
      const review = {
        name: req.user.name,
        rating,
        comment,
        user: req.user._id,
      };
      Trip.reviews.push(review);

      Trip.numReviews = Trip.reviews.length;

      Trip.rating = Trip.reviews?.reduce(
        (acc, review) => acc + review.rating,
        0
      );

      await Trip.save();
      res.status(201).json({ message: "Review Added" });
    }
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

const getTopTrip = async (req, res, next) => {
  try {
    const Trips = await Trip.find({}).sort({ rating: -1 }).limit(3);
    if (Trips) {
      return res.json(Trips);
    }
    res.status(404);
    throw new Error("Trip Not Found");
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};

export {
  getAllTrips,
  getTripById,
  deleteTripById,
  createTrip,
  updateTrip,
  addTripReview,
  getTopTrip,
  getTripByCategoryName,
};
