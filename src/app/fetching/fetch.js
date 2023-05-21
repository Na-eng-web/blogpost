import React, { useEffect, useState } from "react";

const Fetch = () => {
  const [data, SetData] = useState();
  let dat = useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=1174ae3fa91e46ea983e8266101b0d0c"
    )
      .then((res) => res.json())
      .then((result) => SetData(result));
  }, []);

  return { data };
};

export default Fetch;
