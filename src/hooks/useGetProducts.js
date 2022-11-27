import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setProducts(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);
  return { loading, products };
};

export default useGetProducts;
