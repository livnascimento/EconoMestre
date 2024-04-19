import fs from "fs/promises";
import bcrypt from "bcrypt";
import Consultant from "../classes/Consultant.js";

export const createConsultant = async (req, res) => {
    const { name, cnpi, email, password } = req.body;

    try {
        const data = JSON.parse(await fs.readFile("./src/database/consultants.json"));
        const lastRegister = data.consultants.slice(-1)[0];

        const id = lastRegister == undefined ? 0 : lastRegister.id + 1;

        const encryptedPassword = await bcrypt.hash(password, 10);

        data.consultants.push(new Consultant(id, name, cnpi, email, encryptedPassword));

        const jsonString = JSON.stringify(data);

        await fs.writeFile("./src/database/consultants.json", jsonString);

        return res.status(201).json();
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const updateConsultant = async (req, res) => {
    const { id } = req.params;
    const { name, cnpi, email, password } = req.body;

    try {
        const data = JSON.parse(await fs.readFile("./src/database/consultants.json"));

        const encryptedPassword = await bcrypt.hash(password, 10);

        data.consultants.forEach(async consultant => {
            if (consultant.id == id) {
                consultant.name = name;
                consultant.cnpi = cnpi;
                consultant.email = email;
                consultant.password = encryptedPassword;
            }

            const jsonString = JSON.stringify(data);

            await fs.writeFile("./src/database/consultants.json", jsonString);

            return res.json();
        });

        return res.status(404).json({ message: "Consultor não encontrado." });

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getConsultantById = async (req, res) => {
    const { id } = req.params;

    try {
        const data = JSON.parse(await fs.readFile("./src/database/consultants.json"));

        data.consultants.forEach(consultant => {
            if (consultant.id == id)
                return res.json(consultant);
        })

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getConsultants = async (req, res) => {
    try {
        const data = JSON.parse(await fs.readFile("./src/database/consultants.json"));

        return res.json(data.consultants);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const deleteConsultant = async (req, res) => {
    const { id } = req.params;
    try {
        let data = JSON.parse(await fs.readFile("./src/database/consultants.json"));

        data.consultants = data.consultants.filter(consultant => consultant.id != id);

        const jsonString = JSON.stringify(data);

        await fs.writeFile("./src/database/consultants.json", jsonString);

        return res.json();
    } catch (error) {
        return res.status(500).json(error.message);
    }
}