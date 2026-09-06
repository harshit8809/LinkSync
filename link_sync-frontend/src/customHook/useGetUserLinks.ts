import { useEffect, useState } from "react";
import { useLazyGetUserLinksQuery } from "../redux/apis/appApis";
import { useAppDispatch } from "../redux/hooks";
import { setIsSaved } from "../redux/features/linkSlice";

export const useGetUserLinks = () => {
    // const { data: getUserLinks, isLoading, refetch, error } = useGetUserLinksQuery("");
    const [getUserLinks, { isLoading, error }] = useLazyGetUserLinksQuery();
    const [userLinks, setUserLinks] = useState([]);
    const dispatch = useAppDispatch();

    const fetchUserLinks = async () => {
        try {
            const response = await getUserLinks('').unwrap();
            setUserLinks(response.links);
            dispatch(setIsSaved(false));
        } catch (error) {
            console.error("Error fetching user links:", error);
        }
    };

    return {
        fetchUserLinks,
        userLinks,
        isLoading,
        error,
    }
};