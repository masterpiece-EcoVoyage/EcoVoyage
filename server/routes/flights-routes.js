const { Router } = require('express');
const flightController = require('../controllers/flights-controller');
const router = Router();

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


router.post("/addFlight", upload.single('image'), flightController.addFlight);

router.get("/getFlights", flightController.getFlights);

router.put("/softDeleteFlight/:id", flightController.softDeleteFlight);

router.put("/updateFlight/:id", upload.single('image'), flightController.updateFlight);

module.exports = router;