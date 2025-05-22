import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createPanitiaSchema =  z.object({
    eventId: z.string({
        required_error: "Event ID is required",
    }),
    picId: z.string().optional(),
    staffId: z.array(z.string()).optional(),
})

export type CreatePanitiaInput = z.infer<typeof createPanitiaSchema>;

export const { schemas: panitiaSchemas, $ref } = buildJsonSchemas(
    {
        createPanitiaSchema,
    },
    { $id: "panitiaSchemas" }
);