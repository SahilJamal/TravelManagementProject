import express from "express";
const router = express.Router();

import { admin, protect } from "../middleware/authMiddleware.js";
import { uploadMultipleImages,uploadSingleImage } from "./upload.route.js";

import {
getAllDestinations,
getDestinationById,
createDestinationItems,
createDetailDestinationItems,
updateDestinationItems,
updateDetailDestination,
deleteDestination 
} from "../controllers/DestinationController.js";

router.route("/").get(getAllDestinations);
router.route("/:id").get(protect, getDestinationById);
router.route("/").post(protect,uploadSingleImage,createDestinationItems); //edit get(getAllDestinations)
router.route("/detail/:id").post(protect,uploadMultipleImages,createDetailDestinationItems);  
router.route("/:id").put(protect,uploadSingleImage, updateDestinationItems);
router.route("/:id/detail").put(protect,uploadMultipleImages, updateDetailDestination);
router.route("/:id").delete(protect, deleteDestination);
export default router;
