import express from "express";
import { createClient, deleteClient, getClientById, getClients, updateClient } from "../controllers/client.controller.js";

const clientRouter = express();

clientRouter.post("/client", createClient);
clientRouter.get("/client/:id", getClientById);
clientRouter.get("/client", getClients);
clientRouter.put("/client/:id", updateClient);
clientRouter.delete("/client/:id", deleteClient);

export default clientRouter;