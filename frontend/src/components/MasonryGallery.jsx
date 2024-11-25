import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const MasonryGallery = ({ images }) => {
  return (
    <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
      <Masonry>
        {images?.map((image, i) => (
          <div key={i} style={{ padding: "10px", height: "100%" }}>
            <img
              src={image?.src}
              alt={`imag-${i}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
                borderRadius: "8px",
              }}
            />
          </div>
        ))}
      </Masonry>
    </ResponsiveMasonry>
  );
};

export default MasonryGallery;
