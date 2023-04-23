import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';


const fetchProducts = async (page) => {
  const res = await axios.get(`https://dummyjson.com/products?limit=10&skip=${page}`)
  return res.data
}


const prefetch = (newPage) => {
  const queryClient = useQueryClient();

  queryClient.prefetchQuery({
    queryKey: ["products", newPage],
    queryFn: () => fetchProducts(newPage)
  })

}

export const useProductsQuery = (page) => {
  return {
    ...useQuery({
      queryKey: ["products", page],
      queryFn: () => fetchProducts(page),
      keepPreviousData: true,
      enabled: !!page
    }),
    prefetch
  };
}
