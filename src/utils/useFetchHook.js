import { useEffect, useState } from "react";

const useFetchHook = function (url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url).then((res) =>
      res.json().then((response) => {
        setData(response);
        console.log(response);
      })
    );
  }, [url]);
  return data;
};

export default useFetchHook;
