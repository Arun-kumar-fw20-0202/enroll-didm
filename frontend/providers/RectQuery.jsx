"use client";
import { QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import React from "react";

const RectQuery = ({ children }) => {
  return (
    <>
      <QueryClientProvider>
        {children}
        {/*  */}
      </QueryClientProvider>
    </>
  );
};

export default RectQuery;
