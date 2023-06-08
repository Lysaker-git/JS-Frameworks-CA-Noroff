import { useState, useEffect } from "react";

export default function useApi(url) {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        async function getProducts() {
          try {
            setIsError(false);
            setIsLoading(true);
            const response = await fetch(url);
            const json = await response.json();
            setProducts(json);
          } catch (error) {
              console.log(error)
              setIsError(true);
            } finally {
              setIsLoading(false);
          }
        }
        getProducts();
      },[url]);
      return { products, isLoading, isError };
}