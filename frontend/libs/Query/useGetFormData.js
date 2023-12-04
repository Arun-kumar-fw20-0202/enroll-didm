//
import api from "@/pages/api/api";
import { useQuery } from "@tanstack/react-query";

export const useGetExp = () => {
  const AllExpensive = useQuery({
    queryKey: ["admission"],
    queryFn: async () => {
      const res = await api.get("");
      return res.data;
    },
  });
  return AllExpensive;
};
