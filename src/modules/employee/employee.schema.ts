import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createEmployeeSchema = z.object({
    name: z.string({
        required_error: "Name is required",
    }),
    email: z.string({
        required_error: "Email is required",
    }).email("Invalid email address"),
    NIP: z.string().optional(),
    sertifikasiId: z.string().optional(),
    phone: z.string().optional(),
    NPWP: z.string().optional(),
    namaBank: z.string().optional(),
    noRek: z.string().optional(),
    status: z.string().optional(),
    notifikasi: z.string().optional(),
    jabatan: z.string().optional(),
    unit: z.string().optional(),
    role: z.enum(["Trainer", "Staff", "Assessor", "PJ"]).optional(), // Added optional() here
})

const createManyEmployeeSchema = z.array(
    z.object({
        name: z.string({
            required_error: "Name is required",
        }),
        email: z.string({
            required_error: "Email is required",
        }).email("Invalid email address"),
        NIP: z.string().optional(),
        sertifikasiId: z.string().optional(),
        phone: z.string().optional(),
        NPWP: z.string().optional(),
        namaBank: z.string().optional(),
        noRek: z.string().optional(),
        status: z.string().optional(),
        notifikasi: z.string().optional(),
        jabatan: z.string().optional(),
        unit: z.string().optional(),
        role: z.enum(["Trainer", "Staff", "Assessor", "PJ"]).optional(), // Added optional() here
    })
)

export type CreateEmployeeInput = z.infer<typeof createEmployeeSchema>;
export type CreateManyEmployeeInput = z.infer<typeof createManyEmployeeSchema>;

export const { schemas: employeeSchemas, $ref } = buildJsonSchemas(
    {
        createEmployeeSchema,
        createManyEmployeeSchema,
    },
    { $id: "employeeSchemas" }
);