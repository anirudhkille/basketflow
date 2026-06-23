import z from "zod";

export const createCategorySchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  slug: z.string().optional(),
  isActive: z.boolean().default(true),
  image: z.string().optional(),
});

export const updateCategorySchema = z.object({
  name: z.string().optional,
  slug: z.string().optional,
  isActive: z.boolean().optional(),
  image: z.string().optional(),
});

export type CreateCategoryInput = z.infer<typeof createCategorySchema>;
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>;
