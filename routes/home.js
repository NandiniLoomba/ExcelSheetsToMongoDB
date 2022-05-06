const express = require("express");
const router = express.Router();
const getController = require("../controllers/getData");
const postController = require("../controllers/postData");
const multer = require("multer");

//for extracting multiform data
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });


router.get("/", getController.getData);
router.post("/", upload.single("excel"), postController.postData);

module.exports = router;
