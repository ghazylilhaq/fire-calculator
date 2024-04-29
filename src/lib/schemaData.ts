import { z } from "zod";

export const finansialSchema = z.object({
  nama: z.string(),
  kekayaan: z
    .number()
    .safe()
    .gte(0, { message: "Kekayaan harus lebih dari 0" })
    .lte(1e15, { message: "Terlalu kaya, damagenya gakuat" }),
  pemasukan: z
    .number()
    .safe()
    .gte(0, { message: "pemasukan harus lebih dari 10.000" })
    .lte(1e15, { message: "Terlalu kaya, damagenya gakuat" }),
  pengeluaran: z
    .number()
    .safe()
    .gte(0, { message: "pengeluaran harus lebih dari 10.000" })
    .lte(1e15, { message: "Terlalu kaya, damagenya gakuat" }),
  tabungan: z
    .number()
    .safe()
    .gte(0, { message: "tabungan harus lebih dari 10.000" })
    .lte(1e15, { message: "Terlalu kaya, damagenya gakuat" }),
});
