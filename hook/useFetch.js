import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (query, type) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let url = "";

  switch (type) {
    case "products":
      url = `https://mon-cher.eu/wp-json/wp/v2/product?product_cat=${query}&_fields=id,title,content`;
      break;

    case "current_product":
      url = `https://mon-cher.eu/wp-json/wp/v2/product/${query}?_fields=id,title,content`;
      break;

    case "product_cat":
      url = "https://mon-cher.eu/wp-json/wp/v2/product_cat";
      break;

    default:
      break;
  }

  const options = {
    method: "GET",
    url,
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
  return { data, loading, error, refetch };
};

export default useFetch;
