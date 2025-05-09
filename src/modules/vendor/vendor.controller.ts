import { FastifyReply, FastifyRequest } from "fastify"
import { CreateVendor } from "./vendor.schema"
import VendorService from "./vendor.service"
import { errorFilter } from "../../middlewares/error-handling"

export async function createVendorHandler(
    request: FastifyRequest<{
        Body: CreateVendor
    }>,
    reply: FastifyReply
) {
    try {
        const vendor = await VendorService.createVendor(request.body)

        reply.send({
            data: vendor,
            message: "Vendor created successfully",
            status: 201,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getAllVendorsHandler(
    request: FastifyRequest<{
        Querystring: {
            name?: string
            email?: string
            phone?: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { name, email, phone } = request.query

        const vendors = await VendorService.getAllVendors(name, email, phone)

        reply.send({
            data: vendors,
            message: "Vendors fetched successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function getVendorByIdHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params

        const vendor = await VendorService.getVendorById(id)

        reply.send({
            data: vendor,
            message: "Vendor fetched successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function updateVendorHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
        Body: CreateVendor
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params

        const vendor = await VendorService.updateVendor(id, request.body)

        reply.send({
            data: vendor,
            message: "Vendor updated successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}

export async function deleteVendorHandler(
    request: FastifyRequest<{
        Params: {
            id: string
        }
    }>,
    reply: FastifyReply
) {
    try {
        const { id } = request.params

        const vendor = await VendorService.deleteVendor(id)

        reply.send({
            data: vendor,
            message: "Vendor deleted successfully",
            status: 200,
        })
    } catch (error) {
        errorFilter(error, reply)
    }
}