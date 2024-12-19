import React from "react";

const Logos = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap", // Allow images to wrap to the next line if there's not enough space
        justifyContent: "center", // Center the items horizontally
        alignItems: "center", // Align items vertically in the center
        gap: "150px", // Increase the gap between images
        marginTop: "50px", // Add some top margin
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/24/24428.png"
        alt=""
        style={{ width: "150px", height: "100px", objectFit: "contain" }}
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/24/24358.png"
        alt=""
        style={{ width: "150px", height: "100px", objectFit: "contain" }}
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/24/24362.png"
        alt=""
        style={{ width: "150px", height: "100px", objectFit: "contain" }}
      />
      <img
        src="https://cdn-icons-png.flaticon.com/512/24/24427.png"
        alt=""
        style={{ width: "150px", height: "100px", objectFit: "contain" }}
      />
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkL52tBOF-UfMQBpxBg6C-_-6kcf_puWljKW9YmRmF-ueGPbrjzyidRgQ&s=10"
        alt=""
        style={{ width: "150px", height: "100px", objectFit: "contain" }}
      />
    </div>
  );
};

export default Logos;
