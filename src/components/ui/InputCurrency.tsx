"use client";

import React, { ReactNode } from "react";
import CurrencyInput from "react-currency-input-field";

type Props = {
  placeholder: string;
  name: string;
  id: string;
  getFinansial: (value: number, name: string) => void;
};

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InputCurrency = React.forwardRef<HTMLInputElement, Props>(
  (props, ref) => {
    return (
      <CurrencyInput
        id={props.id}
        name={props.name}
        placeholder={props.placeholder}
        type="text"
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        groupSeparator="."
        decimalSeparator=","
        decimalsLimit={2}
        onValueChange={(value, name, values) =>
          props.getFinansial(Number(value), name ?? "")
        }
        prefix="Rp. "
      />
    );
  }
);

InputCurrency.displayName = "InputCurrency";


// const InputCurrency = React.forwardRef<HTMLInputElement, Props>(
//     (props, ref) => {
//       return (
//         <CurrencyInput
//           id={props.id}
//           name={props.name}
//           placeholder={props.placeholder}
//           type="text"
//           className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//           groupSeparator="."
//           decimalSeparator=","
//           decimalsLimit={2}
//           onValueChange={(value, name, values) =>
//             props.getFinansial(Number(value), name ?? "")
//           }
//           prefix="Rp. "
//         />
//       );
//     }
//   );
  
//   InputCurrency.displayName = "InputCurrency";
  

export default InputCurrency;
