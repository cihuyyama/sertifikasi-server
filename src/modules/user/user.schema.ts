import { buildJsonSchemas } from "fastify-zod";
import { z } from "zod";

const createUserSchema = z.object({
    username: z.string({
        required_error: "Username is required",
    }),
    password: z.string({
        required_error: "Password is required",
    }).min(6, { message: "Password must be at least 6 characters long" }),
})

const loginUserSchema = z.object({
    username: z.string({
        required_error: "Username is required",
    }),
    password: z.string({
        required_error: "Password is required",
    }).min(6, { message: "Password must be at least 6 characters long" }),
})

const changePasswordSchema = z.object({
    oldPassword: z.string({
        required_error: 'Old password is required',
    }).min(6),
    newPassword: z.string({
        required_error: 'New password is required',
    }).min(6),
})

export type CreateUserInput = z.infer<typeof createUserSchema>;
export type LoginUserInput = z.infer<typeof loginUserSchema>;
export type ChangePasswordInput = z.infer<typeof changePasswordSchema>;

export const { schemas: userSchemas, $ref } = buildJsonSchemas(
    {
        createUserSchema,
        loginUserSchema,
        changePasswordSchema,
    },
    {
        $id: "userSchemas",
    }
)