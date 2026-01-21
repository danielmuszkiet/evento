import z from "zod";

export const pageNumberSchema = z.coerce
  .number()
  .int()
  .positive()
  .default(1)
  .catch(1);

export const citySchema = z
  .string()
  .min(1)
  .regex(/^[a-zA-Z-]+$/)
  .default("all")
  .catch("all");
