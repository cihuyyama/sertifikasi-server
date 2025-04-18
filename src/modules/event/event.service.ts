import ProgramRepository from "../program/program.repository";
import EventRepository from "./event.repository";
import { CreateEvent } from "./event.schema";

class EventService {
    static async createEvent(data: CreateEvent) {
        const program = await ProgramRepository.FindById(data.programId)
        if (!program) {
            throw new Error("Program not found")
        }

        const event = await EventRepository.Insert(data)
        
        return event;
    }

    static async getAllEvents(name?: string) {
        const events = await EventRepository.FindAll(name)
        return events;
    }

    static async getEventById(id: string) {
        const event = await EventRepository.FindById(id)
        if (!event) {
            throw new Error("Event not found")
        }

        return event;
    }

    static async updateEvent(id: string, data: CreateEvent) {
        const event = await EventRepository.Update(id, data)
        if (!event) {
            throw new Error("Event not found")
        }

        return event;
    }

    static async deleteEvent(id: string) {
        const event = await EventRepository.Delete(id)
        if (!event) {
            throw new Error("Event not found")
        }

        return event;
    }
}

export default EventService