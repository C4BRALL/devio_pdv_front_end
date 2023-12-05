import axios, { AxiosPromise } from "axios"
import { useQuery } from "@tanstack/react-query";
import { AdditionalData } from "../interface/additionalData";

const API_URL = "http://172.233.25.94/api"

const fetchData = async (product_id: string): AxiosPromise<AdditionalData[]> => {
  const response = axios.get(`${API_URL}/products/additional/${product_id}`)
  return response;
}

export function useAdditionalData(id: string) {
  // const queryClient = useQuery()
  const query = useQuery({
    queryFn: () => fetchData(id),
    queryKey: ['additional-data'],
    retry: 2,
  })

  return {
    ...query, 
    data: query.data?.data
  }
}