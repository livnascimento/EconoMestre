import express from "express";
import { createMeeting, deleteMeeting, getMeeting, getMeetingByConsultantId, updateMeeting } from "../controllers/meeting.controller.js";
import { clientExist, consultantExist } from "../middlewares/meeting.middleware.js";

const meetingRouter = express();

meetingRouter.post("/meeting", clientExist, consultantExist, createMeeting);
meetingRouter.put("/meeting/:id", clientExist, consultantExist, updateMeeting);
meetingRouter.delete("/meeting/:id", deleteMeeting);
meetingRouter.get("/meeting/:id_consultant", getMeetingByConsultantId);
meetingRouter.get("/meeting", getMeeting);

export default meetingRouter;