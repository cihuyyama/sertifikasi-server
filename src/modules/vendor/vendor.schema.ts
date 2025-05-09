import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createVendorSchema =  z.object({
    name: z.string({
        required_error: "Vendor name is required",
    }),
    email: z.string({
        required_error: "Email is required",
    }).email({
        message: "Invalid email address",
    }),
    phone: z.string().optional(),
    address: z.string().optional(),
})

export type CreateVendor = z.infer<typeof createVendorSchema>;

export const { schemas: vendorSchemas, $ref } = buildJsonSchemas(
    {
        createVendorSchema,
    },
    {
        $id: "vendorSchemas"
    }
)