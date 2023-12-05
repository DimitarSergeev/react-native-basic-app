import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ( query,type ) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let url = '';
  if (type == 'search') {
    url = `https://dummyjson.com/products/search?q=${query}`;
  }else if(type == 'categories'){
    url = `https://dummyjson.com/products/category/${query}`;
  }else if (type == 'products') {
    url = `https://dummyjson.com/products/category/${query}`;
  }else if (type == 'current_product') {
    url = `https://dummyjson.com/products/${query}`;
  }
  const options = {
    method: "GET",
    url,
    params: { page: "1" },
  };
  const fetchData = async () => {
    try {
      const res = await axios.request(options);
      setData(res.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  };
  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };
  return { data, loading, error,refetch };
};

export default useFetch;
