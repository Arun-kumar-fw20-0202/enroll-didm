"use client";
import { QueryClientProvider, useQueryClient } from "@tanstack/react-query";
import React from "react";

const RectQuery = ({ children }) => {
  const queryClient = useQueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {children}
        {/*  */}
      </QueryClientProvider>
    </>
  );
};

export default RectQuery;
