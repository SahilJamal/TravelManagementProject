import express from "express";
const router = express.Router();

import { admin, protect } from "../middleware/authMiddleware.js";
import { uploadMultipleImages,uploadSingleImage } from "./upload.route.js";

import {
    getAllPackage,
    getPackageById,
    updatePackage,
    createPackage,
    deletePackage
} from "../controllers/PackageController.js";

router.route("/").get(getAllPackage);
router.route("/:id").get(protect, getPackageById);
router.route("/").post(protect,uploadSingleImage,createPackage);
// router.route("/detail").post(protect,uploadMultipleImages,createDetailDestinationItems);  
router.route("/:id").put(protect,uploadSingleImage, updatePackage);
// router.route("/:id/detail").put(protect,uploadMultipleImages, updatePackage);
router.route("/:id").delete(protect, deletePackage);
export default router;
