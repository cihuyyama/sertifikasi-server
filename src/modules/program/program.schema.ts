import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createProgramSchema = z.object({
    name: z.string().min(1, "Name is required"),
    description: z.string().optional(),
    status: z.string().optional(),
    dateRange: z.object(
        {
            from: z.date(),
            to: z.date(),
        },
        {
            required_error: "Please select a date range",
        }
    ),
})

export type CreateProgramInput = z.infer<typeof createProgramSchema>;

export const { schemas: programSchemas, $ref } = buildJsonSchemas(
    {
        createProgramSchema,
    },
    { $id: "programSchemas" }
)