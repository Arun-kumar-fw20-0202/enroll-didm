import api, { baseURL } from "@/pages/api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";

const useUpdateExpen = (id, setIsModalOpen, setWait) => {
  const queryClient = useQueryClient();
  const updateExpensive = useMutation({
    mutationFn: async (data) => {
      setWait(true);
      const res = await api.patch(`enroll/update/${id}`, data);
      return res;
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries("admission");
      toast.success("Data Updated");
    },
    onError: () => {
      toast.error("Something Went Wrong");
    },
  });
  return updateExpensive;
};

export default useUpdateExpen;
