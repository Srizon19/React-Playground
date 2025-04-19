import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  console.log("currency: ", currency);

  useEffect(() => {
    const API_KEY = "89f9af7bae2573dddbdfef61";
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${currency}`)
      .then((res) => res.json())
      .then((data) => setData(data.conversion_rates))
      .catch((error) => console.error("Currency API Error:", error));
  }, [currency]);

  console.log(data);
  return data;
}

export default useCurrencyInfo;
