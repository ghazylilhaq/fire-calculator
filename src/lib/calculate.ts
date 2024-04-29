import { z } from "zod";
import { finansialSchema } from "./schemaData";

type Finansial = {
  kekayaan: number;
  pengeluaran: number;
  pemasukan: number;
  tabungan: number;
};

export const basicFireCalculate = ({
  kekayaan,
  pengeluaran,
  pemasukan,
  tabungan,
}: Finansial) => {
  const target = pengeluaran * 25 * 12;
  const tabunganTahunan = [kekayaan];

  const interest = 0.065;

  for (let i = 0; tabunganTahunan[i] < target; i++) {
    const total = (tabunganTahunan[i] + tabungan * 12) * (1 + interest);
    tabunganTahunan.push(total);
  }

  //   const total = (tabunganTahunan[0] + tabungan) * interest;
  //   tabunganTahunan.push(total);

  const tabunganTahunanFormatted = tabunganTahunan.map((item) => {
    if (item >= 1e12) {
      return (item / 1e12).toFixed(2) + " triliun";
    } else if (item >= 1e9) {
      return (item / 1e9).toFixed(2) + " miliar";
    } else if (item >= 1e6) {
      return Math.floor(item / 1e6) + " juta";
    } else if (item >= 1e3) {
      return Math.floor(item / 1e3) + " ribu";
    } else {
      return item.toLocaleString("id");
    }
  });

  let targetFormatted = "";

  if (target >= 1e12) {
    targetFormatted = (target / 1e12).toFixed(1) + " triliun";
  } else if (target >= 1e9) {
    targetFormatted = (target / 1e9).toFixed(1) + " miliar";
  } else if (target >= 1e6) {
    targetFormatted = Math.floor(target / 1e6) + " juta";
  } else if (target >= 1e3) {
    targetFormatted = Math.floor(target / 1e3) + " ribu";
  } else {
    targetFormatted = target.toLocaleString("id");
  }

  const lamaMenabung = tabunganTahunan.length - 1;

  if (kekayaan > target) {
    return {
      targetFormatted: targetFormatted,
      tabunganTahunan: tabunganTahunan,
      tabunganTahunanFormatted: tabunganTahunanFormatted,
      lamaMenabung: "kamu mah udah kaya",
    };
  }

  return {
    targetFormatted: targetFormatted,
    tabunganTahunan: tabunganTahunan,
    tabunganTahunanFormatted: tabunganTahunanFormatted,
    lamaMenabung: lamaMenabung,
  };
};
