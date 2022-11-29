import { useState, useEffect } from "react";
import axios from "axios";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setLoading(false);
      setProducts(response.data);
    }

    fetchData();
  }, []);
  return { loading, products };
};

export default useGetProducts;
