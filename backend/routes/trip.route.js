import express from "express";
import {
  addTripReview,
  createTrip,
  deleteTripById,
  getAllTrips,
  getTopTrip,
  getTripByCategoryName,
  getTripById,
  updateTrip,
} from "../controllers/TripController.js";
import { admin, protect } from "../middleware/authMiddleware.js";
import checkObjectId from "../middleware/checkObjectId.js";
import { uploadMultipleImages } from "./upload.route.js";

const router = express.Router();
router.route("/").get(getAllTrips).post(uploadMultipleImages, createTrip);
router.route("/top").get(getTopTrip);
router.route("/category").get(getTripByCategoryName);

router
  .route("/:id")
  .get(checkObjectId, getTripById)
  .delete(protect, admin, deleteTripById)
  .put(protect, admin, updateTrip);

router.route("/:id/reviews").post(protect, addTripReview);
export default router;
