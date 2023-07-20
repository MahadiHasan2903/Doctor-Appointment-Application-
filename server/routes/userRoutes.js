const express = require("express");
const {
  loginController,
  registerController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookeAppointmentController,
  bookingAvailabilityController,
  userAppointmentsController,
} = require("../controllers/userController");
const authMiddleware = require("../middlewares/authMiddleware");

//router abject
const router = express.Router();

//routes
//LOGIN || POST method
router.post("/login", loginController);

//Registration || POST method
router.post("/register", registerController);

//Auth || POST method
router.post("/getUserData", authMiddleware, authController);

//Apply Doctor || POST method
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notification || POST method
router.post(
  "/get-all-notification",
  authMiddleware,
  getAllNotificationController
);

//Notification || POST method
router.post(
  "/delete-all-notification",
  authMiddleware,
  deleteAllNotificationController
);

//Get All Doctors || GET method
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//BOOK APPOINTMENT
router.post("/book-appointment", authMiddleware, bookeAppointmentController);

//Booking Availability
router.post(
  "/booking-availability",
  authMiddleware,
  bookingAvailabilityController
);

//Appointment List
router.get("/user-appointments", authMiddleware, userAppointmentsController);

module.exports = router;
