import { useEffect, useState } from "react";
import axios from "axios";
import { makeRequest } from "../makeRequest";

export default function useFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const res = await makeRequest.get(url);
                setData(res.data.data);
            } catch (err) {
                setError(true);
            }
            setLoading(false);
        }
        fetchData();
    }, [url])
    return { data, loading, error };
}