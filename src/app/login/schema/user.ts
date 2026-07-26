import { z } from "zod";

export const userSchema = z.object({
  username: z.string().nonempty("Insira seu nome de usuário"),
  // password: z.string().optional()
})

export type UserSchemaType = z.infer<typeof userSchema>