import React, { useState } from "react";
import axios from "axios";

function useAxios(baseUrl) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const addData = async (urlSuffix = "") => {
    setLoading(true);
    try {
      const res = await axios.get(`${baseUrl}${urlSuffix}`);
      setData(data => [...data, res.data]);
      setError(null); // Reset error state if the request is successful
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return [data, addData, loading, error];
}

export default useAxios;
