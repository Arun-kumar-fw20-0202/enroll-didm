//
import api from "@/pages/api/api";
import { useQuery } from "@tanstack/react-query";

export const useGetFormData = () => {
  const AllExpensive = useQuery({
    queryKey: ["admission"],
    queryFn: async () => {
      const res = await api.get("/enroll/data");
      return res.data.data;
    },
  });
  return AllExpensive;
};
