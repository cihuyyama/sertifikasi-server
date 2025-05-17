import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createEventSchema = z.object({
    programId: z.string({
        required_error: "Program ID is required",
    }),
    jenisEventId: z.string().optional(),
    name: z.string({
        required_error: "Event name is required",
    }),
    description: z.string().optional(),
    dateRange: z.object(
        {
            from: z.date(),
            to: z.date(),
        },
        {
            required_error: "Please select a date range",
        }
    ),
    harga: z.number().optional(),
    tempat: z.string().optional(),
})

const connectPesertaSchema = z.object({
    id: z.string({
        required_error: "Event ID is required",
    }),
    pesertaIds: z.array(z.string(), {
        required_error: "Peserta IDs are required",
    }),
})

export type CreateEvent = z.infer<typeof createEventSchema>;
export type CreateConnectPeserta = z.infer<typeof connectPesertaSchema>;

export const { schemas: eventSchemas, $ref } = buildJsonSchemas(
    {
        createEventSchema,
        connectPesertaSchema,
    },
    {
        $id: "eventSchemas"
    }
)