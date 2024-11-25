import path from "path";
import { Router } from "express";
import multer from "multer";
import fs from "fs";

const router = Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    const folderName = req.body.category;
    const dir = path.join("uploads", folderName);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename(req, file, cb) {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

function fileFilter(req, file, cb) {
  const filetypes = /jpe?g|png|webp/;
  const mimetypes = /image\/jpe?g|image\/png|image\/webp/;

  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = mimetypes.test(file.mimetype);

  if (extname && mimetype) {
    cb(null, true);
  } else {
    cb(new Error("Images only!"), false);
  }
}

const upload = multer({ storage, fileFilter });
export const uploadSingleImage = upload.single("image");
export const uploadMultipleImages = upload.array("images", 6);

router.post("/", (req, res) => {
  if (req.body.singleUpload) {
    uploadSingleImage(req, res, function (err) {
      if (err) {
        return res.status(400).send({ message: err.message });
      }
      res.status(200).send({
        message: "Image uploaded successfully",
        image: `/${req.file.path}`,
      });
    });
  } else {
    uploadMultipleImages(req, res, function (err) {
      if (err) {
        return res.status(400).send({ message: err.message });
      }
      const filePaths = req.files.map((file) => `/${file.path}`);
      console.log('filePaths :>> ', filePaths);
      res.status(200).send({
        message: "Images uploaded successfully",
        images: filePaths,
      });
    });
  }
});

export default router;
