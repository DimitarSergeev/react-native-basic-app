import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (query, type) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let url = "";

  switch (type) {
    case "products":
      url = `https://mon-cher.eu/wp-json/wc/v2/products?category=${query}&consumer_key=ck_42bbf83145b3dbe1514d6c6351cfa31eb62bd92d&consumer_secret=cs_872f08f1ac1b232845bd4e26d6c1c0ffb9a98c0d&_fields=id,on_sale,name,description,images,price,regular_price,sale_price`;
      break;

    case "current_product":
      url = `https://mon-cher.eu/wp-json/wc/v2/products/${query}?consumer_key=ck_42bbf83145b3dbe1514d6c6351cfa31eb62bd92d&consumer_secret=cs_872f08f1ac1b232845bd4e26d6c1c0ffb9a98c0d`;
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
