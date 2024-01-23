import { useState, useEffect } from "react";

// 4. Custom Hook

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [method, setMethod] = useState(null);
  const [config, setConfig] = useState(null);
  const [callFecth, setCallFetch] = useState(null);
  const [loading, setLoading] = useState(false);

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
      setLoading(true);
      
      const res = await fetch(url);
      const json = await res.json();

      setLoading(false);
      setData(json);
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

  return { data, httpConfig,loading };
};
