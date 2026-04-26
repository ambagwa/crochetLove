import API from "@/services/api";
import { useEffect } from "react";
import { useState } from "react";


// endpoint can be substituted with url
export const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching:", API.defaults.baseURL + endpoint);
        const response = await API.get(endpoint);
        setData(response.data);
      } catch (error) {
        console.log("Full error:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint]);

  return { data, loading, error };
};
