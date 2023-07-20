const express = require("express");
const {
  getDoctorInfoController,
  updateProfileController,
  getDoctorByIdController,
  doctorAppointmentsController,
  updateStatusController,
} = require("../controllers/doctorController");
const authMiddleware = require("../middlewares/authMiddleware");
const router = express.Router();

// POST Single Doctor Information
router.post("/getDoctorInfo", authMiddleware, getDoctorInfoController);

//POST || Update Profile
router.post("/updateProfile", authMiddleware, updateProfileController);

//POST || Get single doctor infor
router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

//GET Appointments
router.get(
  "/doctor-appointments",
  authMiddleware,
  doctorAppointmentsController
);

//POST Update Status
router.post("/update-status", authMiddleware, updateStatusController);

module.exports = router;
