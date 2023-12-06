import api, { baseURL } from "@/pages/api/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";

const useDeleteExpHead = () => {
  const queryClient = useQueryClient();
  const deleteExpHead = useMutation({
    mutationFn: async (id) => {
      const res = await api.delete(`/enroll/delete/${id}`);
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries("admission");
      toast.success("Data Deleted 👍 !!");
    },
    onError: () => {
      toast.error("Data Not Deleted");
    },
  });
  return deleteExpHead;
};

export default useDeleteExpHead;
