import { useState, useEffect } from "react";

// 4. Custom Hook

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [method, setMethod] = useState(null);
  const [config, setConfig] = useState(null);
  const [callFecth, setCallFetch] = useState(null);

  const [loading, setLoading] = useState(false);
  // X. Tratando error
  const [error, setError] = useState(null);

  // 5. Refatorando post
  const httpConfig = (data, method) => {
    if (method === "POST") {
      setConfig({
        method,
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
    }
    setMethod(method);
  };

  useEffect(() => {
    const fetchData = async () => {
      // X. Tratando error
      try {
        setLoading(true);

        const res = await fetch(url);
        const json = await res.json();

        setData(json);
        setError(null)
      } catch (error) {
        console.log(error);
        setError("Houve algum erro ao carregar os dados!");
      }

      setLoading(false);
    };

    fetchData();
  }, [url, callFecth]);

  // 5. Refatorando post
  useEffect(() => {
    const httpRequest = async () => {
      let json;

      if (method === "POST") {
        let fetchOptions = [url, config];
        setLoading(true);

        const res = await fetch(...fetchOptions);
        json = res.json();

        setLoading(false);
      }
      setCallFetch(json);
    };
    httpRequest();
  }, [config, method, url]);

  return { data, httpConfig, loading, error };
};
