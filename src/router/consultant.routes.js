import express from "express";
import { createConsultant, deleteConsultant, getConsultantById, getConsultants, updateConsultant } from "../controllers/consultant.controller.js";

const consultantRouter = express();

consultantRouter.post("/consultant", createConsultant);
consultantRouter.get("/consultant/:id", getConsultantById);
consultantRouter.get("/consultant", getConsultants);
consultantRouter.put("/consultant/:id", updateConsultant);
consultantRouter.delete("/consultant/:id", deleteConsultant);

export default consultantRouter;