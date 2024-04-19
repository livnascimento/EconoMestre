import fs from "fs/promises";

export const consultantExist = async (req, res, next) => {
    const {id_consultant} = req.body;

    try {
        const data = JSON.parse(await fs.readFile("./src/database/consultants.json"));

        if (!data.consultants.some(consultant => consultant.id == id_consultant)) 
            return res.status(404).json({message: "Consultor não encontrado."});

        next();
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const clientExist = async (req, res, next) => {
    const {id_client} = req.body;

    try {
        const data = JSON.parse(await fs.readFile("./src/database/clients.json"));

        if (!data.clients.some(client => client.id == id_client)) 
            return res.status(404).json({message: "Cliente não encontrado."});

        next();
    } catch (error) {
        return res.status(500).json(error.message);
    }
}