// Banner.tsx
// import React from "react";
// import "./Banner.css";

interface BannerProps {
  image: string;
  title?: string; // The title is optional since the About page doesn't have one
}

const Banner: React.FC<BannerProps> = ({ image, title }) => {
  return (
    <div className="banner-wrapper">
      <div
        className="banner container"
        style={{ backgroundImage: `url(${image})` }}
      >
        {title && <h1 className="banner-title">{title}</h1>}
      </div>
    </div>
  );
};

export default Banner;
