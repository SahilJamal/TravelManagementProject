import express from "express";
const router = express.Router();

import { admin, protect } from "../middleware/authMiddleware.js";
import { uploadMultipleImages,uploadSingleImage } from "./upload.route.js";

import {
    getAllPackages,
    getPackageById,
    updatePackageItems,
    updateDetailPackage,
    createDetailPackageItems,
    createPackageItems,
    deletePackage
} from "../controllers/PackageController.js";

router.route("/").get(getAllPackages);
router.route("/:id").get(protect, getPackageById);
router.route("/").post(protect,uploadSingleImage,createPackageItems);
router.route("/:id/detail").post(protect,uploadMultipleImages,createDetailPackageItems);  
router.route("/:id").put(protect,uploadSingleImage, updatePackageItems);
router.route("/:id/detail").put(protect,uploadMultipleImages, updateDetailPackage);
router.route("/:id").delete(protect, deletePackage);
export default router;
