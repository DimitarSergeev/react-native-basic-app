import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = ( query,type ) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let url = '';
  if (type == 'products') {
    url = `https://mon-cher.eu/wp-json/wp/v2/product?product_cat=${query}&_fields=id,title,content`;
  }else if (type == 'current_product') {
    url = [
      `https://mon-cher.eu/wp-json/wp/v2/product/${query}?_fields=id,title,content`,
      "https://mon-cher.eu/wp-json/wp/v2/media?parent=28828&_fields=source_url",
    ];
  }else if (type == 'product_cat') {
    url = "https://mon-cher.eu/wp-json/wp/v2/product_cat";
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
