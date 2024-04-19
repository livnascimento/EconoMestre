import fs from "fs/promises";
import bcrypt from "bcrypt";
import Client from "../classes/Client.js";

export const createClient = async (req, res) => {
    const { name, cpf, email, password } = req.body;

    try {
        const data = JSON.parse(await fs.readFile("./src/database/clients.json"));
        const lastRegister = data.clients.slice(-1)[0];

        const id = lastRegister == undefined ? 0 : lastRegister.id + 1;

        const encryptedPassword = await bcrypt.hash(password, 10);

        data.clients.push(new Client(id, name, cpf, email, encryptedPassword));

        const jsonString = JSON.stringify(data);

        await fs.writeFile("./src/database/clients.json", jsonString);

        return res.status(201).json();
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const updateClient = async (req, res) => {
    const { id } = req.params;
    const { name, cnpi, email, password } = req.body;

    try {
        const data = JSON.parse(await fs.readFile("./src/database/clients.json"));

        const encryptedPassword = await bcrypt.hash(password, 10);

        for (let client of data.clients) {
            if (client.id == id) {
                client.name = name;
                client.cnpi = cnpi;
                client.email = email;
                client.password = encryptedPassword;
                
                const jsonString = JSON.stringify(data);
    
                await fs.writeFile("./src/database/clients.json", jsonString);
    
                return res.json();
            }
        }

        return res.status(404).json({ message: "Cliente não encontrado." });

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getClientById = async (req, res) => {
    const { id } = req.params;

    try {
        const data = JSON.parse(await fs.readFile("./src/database/clients.json"));

        data.clients.forEach(client => {
            if (client.id == id)
                return res.json(client);
        })

        return res.status(404).json({message: "Cliente não encontrado."})

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getClients = async (req, res) => {
    try {
        const data = JSON.parse(await fs.readFile("./src/database/clients.json"));

        return res.json(data.clients);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
        let data = JSON.parse(await fs.readFile("./src/database/clients.json"));

        data.clients = data.clients.filter(client => client.id != id);

        const jsonString = JSON.stringify(data);

        await fs.writeFile("./src/database/clients.json", jsonString);

        return res.json();
    } catch (error) {
        return res.status(500).json(error.message);
    }
}