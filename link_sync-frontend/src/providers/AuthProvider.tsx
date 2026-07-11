"use client";

import { useEffect } from "react";
import { useGetMeQuery } from "../redux/apis/authApi";
import { setUser, logout } from "../redux/features/authSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

export default function AuthProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const dispatch = useAppDispatch();
    const isLoggedIn = useAppSelector((s)=>s?.auth?.isAuthenticated)
    const { data, isError, error } = useGetMeQuery(undefined, {
        skip: !isLoggedIn,
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