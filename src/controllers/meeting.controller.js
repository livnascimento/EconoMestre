import fs from "fs/promises";
import Meeting from "../classes/Meeting.js";

export const createMeeting = async (req, res) => {
    const { id_consultant, id_client, date } = req.body;

    try {
        const data = JSON.parse(await fs.readFile("./src/database/meetings.json"));
        const lastRegister = data.meetings.slice(-1)[0];

        const id = lastRegister == undefined ? 0 : lastRegister.id + 1;

        data.meetings.push(new Meeting(id, id_consultant, id_client, new Date(date)));

        const jsonString = JSON.stringify(data);

        await fs.writeFile("./src/database/meetings.json", jsonString);

        return res.status(201).json();
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const updateMeeting = async (req, res) => {
    const { id } = req.params;
    const { id_consultant, id_client, date } = req.body;

    try {
        const data = JSON.parse(await fs.readFile("./src/database/meetings.json"));

        for (let meeting of data.meetings) {

            if (meeting.id == id) {
                meeting.id_consultant = id_consultant;
                meeting.id_client = id_client;
                meeting.date = new Date(date);
                const jsonString = JSON.stringify(data);

                await fs.writeFile("./src/database/meetings.json", jsonString);
                return res.status(201).json();
            }
        }

        return res.status(404).json({ message: "Reunião não encontrada." });

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const deleteMeeting = async (req, res) => {
    const { id } = req.params;
    try {
        let data = JSON.parse(await fs.readFile("./src/database/meetings.json"));

        data.meetings = data.meetings.filter(meeting => meeting.id != id);

        const jsonString = JSON.stringify(data);

        await fs.writeFile("./src/database/meetings.json", jsonString);

        return res.json();
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getMeetingByConsultantId = async (req, res) => {
    const { id_consultant } = req.params;

    try {
        const data = JSON.parse(await fs.readFile("./src/database/meetings.json"));

        const meetings = data.meetings.filter(meeting => meeting.id_consultant == id_consultant);

        return res.json(meetings);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export const getMeeting = async (req, res) => {
    try {
        const data = JSON.parse(await fs.readFile("./src/database/meetings.json"));

        return res.json(data.meetings);

    } catch (error) {
        return res.status(500).json(error.message);
    }
}