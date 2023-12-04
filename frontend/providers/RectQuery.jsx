"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import React from "react";

const RectQuery = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
};

export default RectQuery;
