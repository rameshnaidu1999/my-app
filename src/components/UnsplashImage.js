import React from "react";

function UnsplashImage({ url, key }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 mx-auto">
          <img src={url} key={key} className="img-thumbnail" alt="..."></img>
        </div>
      </div>
    </div>
  );
}

export default UnsplashImage;
