import api, { baseURL } from "@/pages/api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const useAddFormData = () => {
  const queryClient = useQueryClient();
  const addExpensive = useMutation({
    mutationFn: async (data) => {
      const res = await api.post("enroll/create", data);
      return res?.data;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries("admission");
      toast.success(data?.message);
    },
    onError: (err) => {
      //   toast.error(err?.response?.data?.message);
      toast.error(err?.response?.data?.message && "Your have alredy filled the form");
      return err;
    },
  });
  return addExpensive;
};

export default useAddFormData;
