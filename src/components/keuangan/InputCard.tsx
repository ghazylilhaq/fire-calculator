"use client";

import React, { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import InputCurrency from "../ui/InputCurrency";
import { finansialSchema } from "@/lib/schemaData";
import { basicFireCalculate } from "@/lib/calculate";

type Props = {
  onResult: (result: {
    targetFormatted: string;
    tabunganTahunan: number[];
    tabunganTahunanFormatted: string[];
    lamaMenabung: number | string;
  }) => void;
};

const InputCard = (props: Props) => {
  const form = useForm<z.infer<typeof finansialSchema>>({
    resolver: zodResolver(finansialSchema),
    defaultValues: {
      nama: "",
      kekayaan: 0,
      pemasukan: 0,
      pengeluaran: 0,
      tabungan: 0,
    },
  });

  const [finansial, setFinansial] = useState({
    kekayaan: 0,
    pengeluaran: 0,
    pemasukan: 0,
    tabungan: 0,
  });

  const getFinansial = (value: number, name: string) => {
    setFinansial({ ...finansial, [name]: value });

    /* onChange Capability 
    
    const result = basicFireCalculate(finansial);
    props.onResult(result);
    
    */
  };

  function onSubmit(values: z.infer<typeof finansialSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    const result = basicFireCalculate(finansial);
    props.onResult(result);
    console.log(result);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="nama"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormDescription></FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="kekayaan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Kekayaan Bersih</FormLabel>
              <FormControl>
                <InputCurrency
                  placeholder="Rp. 10.000.000"
                  id="kekayaan"
                  getFinansial={getFinansial}
                  {...field}
                />
              </FormControl>
              <FormDescription>kekayaan bersih saat ini</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pengeluaran"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pengeluaran</FormLabel>
              <FormControl>
                <InputCurrency
                  placeholder="Rp. 4.500.000"
                  id="pengeluaran"
                  getFinansial={getFinansial}
                  {...field}
                />
              </FormControl>
              <FormDescription>pengeluaran per bulan</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pemasukan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pemasukan </FormLabel>
              <FormControl>
                <InputCurrency
                  placeholder="Rp. 4.500.000"
                  id="pemasukan"
                  getFinansial={getFinansial}
                  {...field}
                />
              </FormControl>
              <FormDescription>pemasukan per bulan</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="tabungan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nabung</FormLabel>
              <FormControl>
                <InputCurrency
                  placeholder="Rp. 4.500.000"
                  id="tabungan"
                  getFinansial={getFinansial}
                  {...field}
                />
              </FormControl>
              <FormDescription>nabung per bulan</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export default InputCard;
