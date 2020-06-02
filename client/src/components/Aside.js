import React, { useState } from "react";
import axios from "axios";

const Aside = () => {
  const [longUrl, setLongUrl] = useState("Type Long Url Here");
  const [shortUrl, setShortUrl] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    const baseUrl = process.env.BASE_URL || "http://localhost:5000/api/url";
    axios
      .post(`${baseUrl}/shorten`, { longUrl })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>Shorten Here</h1>
      <form>
        <label htmlFor="longUrl"></label>
        <input
          type="text"
          name="longUrl"
          id="longurl"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
        />
        <button onClick={(e) => handleClick(e)}>Shorten</button>
      </form>
      {shortUrl != null ? <h3>Short URL : {shortUrl}</h3> : null}
    </div>
  );
};

export default Aside;
