import { apiSlice } from "./apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        setPlatform: builder.mutation({
            query: (body) => ({
                url: "/api/links",
                method: "POST",
                body: body?.links,
            }),
        }),
        getUserLinks: builder.query({
            query: () => ({
                url: "/api/links",
                method: "GET"
            })
        }),
    })
})

export const {
    useSetPlatformMutation,
    // useGetUserLinksQuery,
    useLazyGetUserLinksQuery
} = authApi;