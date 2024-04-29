"use client";

import React, { useState } from "react";
import InputCard from "./InputCard";
import Chart from "./Chart";

type Props = {};

type Result = {
  targetFormatted: string;
  tabunganTahunan: number[];
  tabunganTahunanFormatted: string[];
  lamaMenabung: number | string;
};

export const BasicSection = (props: Props) => {
  const [result, setResult] = useState<Result>({
    targetFormatted: "",
    tabunganTahunan: [],
    tabunganTahunanFormatted: [],
    lamaMenabung: "",
  });

  const [isInput, setIsInput] = useState(false);

  const getResult = ({
    targetFormatted,
    tabunganTahunan,
    tabunganTahunanFormatted,
    lamaMenabung,
  }: Result) => {
    setResult({
      targetFormatted,
      tabunganTahunan,
      tabunganTahunanFormatted,
      lamaMenabung,
    });

    setIsInput(true);
  };

  const lamaMenabungText =
    typeof result.lamaMenabung === "number"
      ? `Lama menabung: ${result.lamaMenabung} tahun`
      : result.lamaMenabung;

  return (
    <section
      className={`grid grid-cols-1 ${
        isInput ? `sm:grid-cols-2` : ` sm:grid-cols-1`
      }  min-h-screen items-center justify-between p-24 gap-8 w-screen`}
    >
      <InputCard onResult={getResult}></InputCard>
      {isInput ? (
        <div className="gap-8">
          <div>
            <h2>{lamaMenabungText}</h2>
            <h2>Target yang perlu dicapai: {result.targetFormatted} </h2>
          </div>

          <Chart result={result}></Chart>
        </div>
      ) : null}
    </section>
  );
};

export default BasicSection;
