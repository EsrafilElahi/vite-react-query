import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';


const fetchProduct = async (productID) => {
  const res = await axios.get(`https://dummyjson.com/products/${productID}`)
  return res.data
}


export const useProductQuery = (productID) => {
  return useQuery({
    queryKey: ["products", `productID-${productID}`],
    queryFn: () => fetchProduct(productID),
    keepPreviousData: true,
    enabled: !!productID
  })
}