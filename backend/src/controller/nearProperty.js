const model = require("../models/property");
const property = model.Property;

exports.nearProperty = async (req, res) => {
  try {
    const longitude = parseFloat(req.body.longitude);
    const latitude = parseFloat(req.body.latitude);

    console.log(latitude, longitude)

    if (!latitude || !longitude) {
      return res.status(400).send({
        success: false,
        msg: "Latitude and longitude are required in the request.",
      });
    }

    const showProperty = await property.aggregate([
      {
        $geoNear: {
          near: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)],
          },
          key: "location",
          distanceField: "dist.calculated",
          spherical: true,
          maxDistance: 4000,
        },
      },
    ]);

    if (showProperty.length > 0) {
      return res.json(showProperty)
    } else {
      return res
        .status(400)
        .send({ success: false, msg: "No nearby Properties Found!" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send({ success: false, msg: "Internal Server Error" });
  }
};
