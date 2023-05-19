import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"


// creste the api;s


export const appApi = createApi({
    reducerPath:"appApi",
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:5080"}),
    endpoints: (builder) => ({
        sigup:builder.mutation({
            query: (user) => ({
                url: "/user/signup",
                method: "POST",
                body: user,
            })
        }),


        login:builder.mutation({
            query: (user) => ({
                url: "/user/login",
                method: "POST",
                body: user,
            })
        }),

          // creating product
          createProduct: builder.mutation({
            query: (product) => ({
                url: "/products",
                body: product,
                method: "POST",
            }),
        }),
    })
})


export const {
    useSignupMutation,
    useLoginMutation,
    useCreateProductMutation,
}= appApi;

export default appApi;
