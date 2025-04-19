import { MultipartFile, MultipartValue } from "@fastify/multipart";
import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createNotulensiSchema = z.object({
    programId: z.custom<MultipartValue<string>>(),
    name: z.custom<MultipartValue<string>>(),
    tanggal: z.custom<MultipartValue<string>>(),
    description: z.custom<MultipartValue<string>>().optional(),
    files: z.custom<MultipartFile[]>()
})

const createNotulensiDocSchema = z.object({
    files: z.custom<MultipartFile[]>()
})

export type CreateNotulensiInput = z.infer<typeof createNotulensiSchema>;
export type CreateNotulensiDocInput = z.infer<typeof createNotulensiDocSchema>;

export const { schemas: notulensiSchemas, $ref } = buildJsonSchemas(
    {
        createNotulensiSchema,
        createNotulensiDocSchema,
    },
    {
        $id: "notulensiSchemas"
    }
)