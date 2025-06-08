import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createPesertaSchema = z.object({
    name: z.string({
        required_error: "Name is required",
    }),
    email: z.string({
        required_error: "Email is required",
    }).email("Invalid email address"),
    phone: z.string({
        required_error: "Phone number is required",
    }).optional(),
    nim: z.string().optional(),
    eventId: z.string().optional(),
    status: z.string().optional(),
    balance: z.number().optional(),
    sertifikasiTerdaftarId: z.string().optional(),
    picture: z.string().optional(),
    providerId: z.string().optional(),
})

const createManyPesertaSchema = z.array(
    z.object({
        name: z.string({
            required_error: "Name is required",
        }),
        email: z.string({
            required_error: "Email is required",
        }).email("Invalid email address"),
        phone: z.string({
            required_error: "Phone number is required",
        }).optional(),
        nim: z.string().optional(),
        eventId: z.string().optional(),
        status: z.string().optional(),
        balance: z.number().optional(),
        sertifikasiTerdaftarId: z.string().optional(),
        picture: z.string().optional(),
        providerId: z.string().optional(),
    })
)

export type CreatePesertaInput = z.infer<typeof createPesertaSchema>;
export type CreateManyPesertaInput = z.infer<typeof createManyPesertaSchema>;

export const { schemas: pesertaSchemas, $ref } = buildJsonSchemas(
    {
        createPesertaSchema,
        createManyPesertaSchema,
    },
    { $id: "pesertaSchemas" }
)