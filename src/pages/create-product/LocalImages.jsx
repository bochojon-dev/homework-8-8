import React, { memo } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const LocalImages = ({ files, setFiles }) => {
  const handleRemoveImage = (index) => {
    setFiles((prev) => [...prev].filter((_, inx) => inx !== index));
  };
  return (
    <div className="local_images">
      {Object.values(files)?.map((img, index) => (
        <div className="local_image" key={index}>
          <img
            src={URL.createObjectURL(img)}
            width={200}
            alt="selected product image"
          />
          <IoMdCloseCircle
            onClick={() => handleRemoveImage(index)}
            className="close_image"
          />
        </div>
      ))}
    </div>
  );
};

export default memo(LocalImages);
