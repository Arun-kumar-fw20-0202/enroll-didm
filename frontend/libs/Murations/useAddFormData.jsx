import api, { baseURL } from "@/pages/api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-hot-toast";

const useAddFormData = () => {
  const queryClient = useQueryClient();
  const addExpensive = useMutation({
    mutationFn: async (data) => {
      console.log(data);
      const res = await api.post("enroll/create", data);
      return res;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries("admission");
      toast.success("Data created");
    },
    onError: () => {
      setWait(false);
      toast.error("Something Went Wrong");
    },
  });
  return addExpensive;
};

export default useAddFormData;
