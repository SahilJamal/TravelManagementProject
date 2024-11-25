import { TRIPS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ keyword, pageNumber }) => ({
        url: TRIPS_URL,
        params: { keyword, pageNumber },
      }),
      keepUnusedDataFor: 5,
      providesTags: ["Product"],
    }),
    getProductById: builder.query({
      query: (productId) => ({
        url: `${TRIPS_URL}/${productId}`,
      }),
      keepUnusedDataFor: 5,
    }),
    getProductByCategoryName: builder.query({
      query: (name) => ({
        url: `${TRIPS_URL}/?category=${name}`,
      }),
      keepUnusedDataFor: 5,
    }),
    deleteProductById: builder.mutation({
      query: (productId) => ({
        url: `${TRIPS_URL}/${productId}`,
        method: "DELETE",
      }),
    }),
    createProduct: builder.mutation({
      query: () => ({
        url: TRIPS_URL,
        method: "POST",
      }),
      invalidatesTags: ["Product"],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: `${TRIPS_URL}/${data?.productId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    createProductReview: builder.mutation({
      query: (data) => ({
        url: `${TRIPS_URL}/${data?.productId}/reviews`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Product"],
    }),
    getTopProduct: builder.query({
      query: () => ({
        url: `${TRIPS_URL}/top`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useDeleteProductByIdMutation,
  useCreateProductMutation,
  useUpdateProductMutation,
  useCreateProductReviewMutation,
  useGetTopProductQuery,
  useGetProductByCategoryNameQuery,
} = productApiSlice;
