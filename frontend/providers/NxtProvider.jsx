import { NextUIProvider } from "@nextui-org/react";
import React from "react";

const NxtProvider = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default NxtProvider;
