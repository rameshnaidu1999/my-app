import React, { useState, useEffect } from "react";
import Heading from "./components/Heading";
import Unsplashimage from "./components/UnsplashImage";

import axios from "axios";

function App() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const apiRoot = "https://api.unsplash.com";
    const accessKey = process.env.REACT_APP_ACCESSKEY;

    axios
      .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=50`)
      .then((res) => setImages([...images, ...res.data]));
  }, []);

  return (
    <div classname="container">
      <Heading />

      {images.map((image) => (
        <Unsplashimage url={image.urls.thumb} key={image.id} />
      ))}
    </div>
  );
}

export default App;
