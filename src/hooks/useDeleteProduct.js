import { useQueryClient, useMutation } from '@tanstack/react-query';
import axios from 'axios';


const deleteProduct = async (productID) => {
  const res = await axios.delete(`https://dummyjson.com/products/${productID}`)
  return res.data
}


export const useDeleteProduct = (productID) => {

  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => {
      return deleteProduct(productID);
    },
    onSuccess: (deletedData, variables, context) => {
      const products = queryClient.getQueryData(["products", 1])
      const data = products?.products?.filter((item) => item._id !== productID)
      queryClient.setQueryData(["products", 1], data)

    }
  });
}