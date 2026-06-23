import z from "zod";

export const createProductSchema = z.object({
  name: z.string().min(2, "Name is required").max(100),
  slug: z.string().min(2).max(100),
  category: z.string().min(2).max(100),
  images: z.array(z.string()),
  variants: z.array(
    z.object({
      name: z.string().min(2).max(100),
      price: z.number(),
    }),
  ),
});

export const updateProductSchema = z.object({
  name: z.string().min(2).max(100).optional(),
  slug: z.string().min(2).max(100).optional(),
  category: z.string().min(2).max(100).optional(),
  images: z.array(z.string()).optional(),
  variants: z
    .array(
      z.object({
        name: z.string().min(2).max(100),
        price: z.number(),
      }),
    )
    .optional(),
});

export type CreateProductInput= z.infer<typeof createProductSchema>
export type UpdateProductInput= z.infer<typeof updateProductSchema>