import React, { memo, useState } from "react";
import { usegetInputValue } from "../../hooks/useGetInputValue";
import { useCreateProductMutation } from "../../context/api/productAPI";
import LocalImages from "./LocalImages";

const initialState = {
  title: "",
  price: "",
  oldPrice: "",
  category: "",
  units: "",
  description: "",
  info: "",
};
const CreateProduct = () => {
  const { formData, setFormData, handleChange } =
    usegetInputValue(initialState);
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const handleCreateProduct = (e) => {
    e.preventDefault();
    let form = new FormData();
    form.append("title", formData.title);
    form.append("price", formData.price);
    form.append("oldPrice", formData.oldPrice);
    form.append("category", formData.category);
    form.append("units", formData.units);
    form.append("description", formData.description);

    Array.from(files).forEach((img) => {
      form.append("files", img, img.name);
    });
    createProduct(form);
    setFormData(initialState);
  };
  const [files, setFiles] = useState("");
  return (
    <div className="container">
      <form onSubmit={handleCreateProduct} className="create">
        <input
          required
          placeholder="Enter title"
          autoComplete="off"
          value={formData.title}
          onChange={handleChange}
          type="text"
          name="title"
        />
        <input
          required
          placeholder="Enter price"
          autoComplete="off"
          value={formData.price}
          onChange={handleChange}
          type="number"
          name="price"
        />
        <input
          required
          placeholder="Enter oldPrice"
          autoComplete="off"
          value={formData.oldPrice}
          onChange={handleChange}
          type="number"
          name="oldPrice"
        />
        <input
          required
          placeholder="Enter category"
          autoComplete="off"
          value={formData.category}
          onChange={handleChange}
          type="text"
          name="category"
        />
        <input
          required
          placeholder="Enter unit"
          autoComplete="off"
          value={formData.units}
          onChange={handleChange}
          type="text"
          name="units"
        />
        <textarea
          required
          placeholder="Enter dascription"
          autoComplete="off"
          value={formData.description}
          onChange={handleChange}
          type="text"
          name="description"
        ></textarea>
        <textarea
          required
          placeholder="Enter info"
          autoComplete="off"
          value={formData.info}
          onChange={handleChange}
          type="text"
          name="info"
        ></textarea>
        <div className="files">
          <div className="file">
            <input
              className="select_image"
              style={{ paddingBottom: "-20px !important" }}
              required
              placeholder="Select photo"
              onChange={(e) => setFiles(e.target.files)}
              type="file"
              multiple
              accept="image/*"
            />
            <h3>Choose image</h3>
          </div>
          <LocalImages setFiles={setFiles} files={files} />
        </div>
        <button disabled={isLoading}>create</button>
      </form>
    </div>
  );
};

export default memo(CreateProduct);
