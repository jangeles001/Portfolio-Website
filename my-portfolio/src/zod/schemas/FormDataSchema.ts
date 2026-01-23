import z from "zod";

export const FormDataSchema = z.object({
    from_name: z.string().min(2).max(100),
    from_email: z.email(),
    message: z.string().min(10).max(700),
});