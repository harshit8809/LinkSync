import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",

    baseQuery: fetchBaseQuery({
        // baseUrl: 'http://localhost:3003',
        baseUrl: 'https://linksync-backend-t4mj.onrender.com',
        credentials: "include",
    }),

    endpoints: () => ({}),
});

export const { } = apiSlice;




// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// export const apiSlice = createApi({
//     reducerPath: "api",

//     baseQuery: fetchBaseQuery({
//         // Requests go through the Next.js route handler, which makes the
//         // auth cookie first-party for both localhost and the deployed app.
//         baseUrl: '/',
//         credentials: "include",
//     }),

//     endpoints: () => ({}),
// });

// export const { } = apiSlice;
