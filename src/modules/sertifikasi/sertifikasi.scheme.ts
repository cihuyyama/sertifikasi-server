import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createSertifikasiSchema = z.object({
    name: z.string({
        required_error: "Name is required",
    }),
    code: z.string({
        required_error: "Code is required",
    }),
})

export type CreateSertifikasiInput = z.infer<typeof createSertifikasiSchema>;
export const { schemas: sertifikasiSchemas, $ref } = buildJsonSchemas(
    {
        createSertifikasiSchema,
    },
    { $id: "sertifikasiSchemas" }
);