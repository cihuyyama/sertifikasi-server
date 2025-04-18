import { FastifyReply, FastifyRequest } from "fastify"
import { CreateEvent } from "./event.schema"
import EventService from "./event.service"
import { errorFilter } from "../../middlewares/error-handling"

export async function createEventHandler(
    request: FastifyRequest<{
        Body: CreateEvent
    }>,
    reply: FastifyReply
) {
    try {
        const event = await EventService.createEvent(request.body)

        reply.send({
            data: event,
            message: "Event created successfully",
            status: 201,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getAllEventsHandler(
    request: FastifyRequest<{
        Querystring: {
            name?: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { name } = request.query

        const events = await EventService.getAllEvents(name)

        reply.send({
            data: events,
            message: "Events fetched successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getEventByIdHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params

        const event = await EventService.getEventById(id)

        reply.send({
            data: event,
            message: "Event fetched successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateEventHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
        Body: CreateEvent
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params

        const event = await EventService.updateEvent(id, request.body)

        reply.send({
            data: event,
            message: "Event updated successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteEventHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params

        await EventService.deleteEvent(id)

        reply.send({
            message: "Event deleted successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}