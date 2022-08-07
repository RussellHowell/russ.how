import { useEffect, useState } from "preact/hooks";

const useApiResult = (request: [RequestInfo | URL, RequestInit]) => {
  const [results, setResults] = useState(undefined as undefined | string);
  const [error, setError] = useState(undefined as undefined | string);
  
  useEffect(() => {
    fetch(request[0], request[1])
      .then(async (response) => {
        if (response.ok) {
          setResults(await response.json());
          setError(undefined);
        } else {
          setError(await response.text());
        }
      })
      .catch((err) => {
        setError(err.message);
      });
  }, [request]);
  
  return [results, error];
};

export default useApiResult;