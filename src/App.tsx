import React, { useEffect, useState } from "react";
import "./App.css";

const App: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    const getRandomImage = () => {
      const imageNumber = Math.floor(Math.random() * 147) + 1;
      const paddedNumber = imageNumber.toString().padStart(5, "0");
      return `/images/thismagpiedoesnotexist_${paddedNumber}_.png`;
    };

    setImageSrc(getRandomImage());
  }, []);

  return <div className="container">{imageSrc && <img src={imageSrc} alt="Random Magpie" className="image" />}</div>;
};

export default App;
