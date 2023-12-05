import axios, { AxiosPromise } from "axios"
import { FoodData } from "../interface/foodData";
import { useQuery } from "@tanstack/react-query";

const API_URL = "http://172.233.25.94/api"

const fetchData = async (): AxiosPromise<FoodData[]> => {
  const response = axios.get(`${API_URL}/products?take=50`)
  return response;
}

export function useFoodData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['food-data'],
    retry: 2,
  })

  return {
    ...query, 
    data: query.data?.data
  }
}