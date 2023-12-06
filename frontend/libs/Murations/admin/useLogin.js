import api from "@/pages/api/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const useLogin = () => {
  const router = useRouter();
  const login = useMutation({
    mutationFn: async (formdata) => {
      const res = await api.post("admin/login", formdata);
      return res?.data;
    },
    onSuccess: (data) => {
      toast.success(data?.message);
      router.replace("/admin");
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
  return login;
};

export default useLogin;
