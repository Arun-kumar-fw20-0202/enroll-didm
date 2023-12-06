import api from "@/pages/api/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";

const useLogout = () => {
  const router = useRouter();
  const useLogout = useMutation({
    mutationFn: async () => {
      const res = await api.post("admin/logout");
      return res?.data;
    },
    onSuccess: (data) => {
      console.log("data in", data);
      toast.success("Logout success");
      router.replace("/login");
    },
    onError: (err) => {
      console.log("err", err?.response?.data?.message);
      toast.error(err?.response?.data?.message);
    },
  });
  return useLogout;
};

export default useLogout;
