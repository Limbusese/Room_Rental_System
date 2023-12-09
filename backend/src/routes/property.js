const express = require('express');

const propertyController = require("../controller/property");
const nearestProperty = require("../controller/nearProperty")

const router = express.Router();

const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/src/images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const uploads = multer({ storage: storage });

router
.post("/properties", uploads.single("images"), propertyController.createProperty)
.get("/allProperties", propertyController.getAllProperties)
.get("/mainProperties", propertyController.getMainProperties)
.get("/property/:_id", propertyController.getProperty)
.patch("/updateProperty/:_id", uploads.single("images"), propertyController.updateProperty)
.delete("/deleteProperty/:_id", propertyController.deleteProperty)
.get("/userData", propertyController.userDataDetails)

.post("/nearestProperties", nearestProperty.nearProperty);

exports.router = router;
