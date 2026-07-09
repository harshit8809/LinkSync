// "use client";

// import { useEffect } from "react";
// import { useGetMeQuery } from "../redux/apis/authApi";
// import { setUser } from "../redux/features/authSlice";
// import { useAppDispatch } from "../redux/hooks";

// export default function AuthProvider({
//     children,
// }: {
//     children: React.ReactNode;
// }) {
//     const dispatch = useAppDispatch();
//     const { data } = useGetMeQuery(undefined, {
//         refetchOnFocus: true,
//         refetchOnReconnect: true,
//     });

//     useEffect(() => {
//         if (data?.user) {
//             dispatch(setUser(data.user));
//         }
//     }, [data, dispatch]);

//     return children;
// }



"use client";

import { useEffect } from "react";
import { useGetMeQuery } from "../redux/apis/authApi";
import { setUser, logout } from "../redux/features/authSlice";
import { useAppDispatch } from "../redux/hooks";

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const dispatch = useAppDispatch();
    const { data, isError } = useGetMeQuery(undefined, {
        refetchOnFocus: true,
        refetchOnReconnect: true,
    });

    useEffect(() => {
        if (data?.user) {
            dispatch(setUser(data.user));
        }
    }, [data, dispatch]);

    useEffect(() => {
        if (isError) {
            dispatch(logout());
        }
    }, [isError, dispatch]);

    return children;
}