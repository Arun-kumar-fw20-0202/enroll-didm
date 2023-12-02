import { ErrorMessage } from "@hookform/error-message";
import React from "react";

export const ErrMsg = ({ err, name = "katill" }) => {
  return (
    <div className="w-full hmt-[2px]">
      <ErrorMessage
        errors={err}
        name={name}
        render={({ message }) => {
          <p className="text-red-400 text-[12px]">{message}</p>;
        }}
      />
    </div>
  );
};
