"use client";
import React, { useState } from "react";
import styles from "@/_styles/manage/addProduct.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";
const AddProductPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("Draft");
  const route = useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("sendong backend")
      const res = await axios.post("http://localhost:3001/api/addItem", {
        product_name: name,
        product_desc: description,
        status,
        created_by: "gulshan", 
      });

      console.log("Product added:", res.data);
      route.push("/manage")
    } catch (err) {
      console.error("Error adding product:", err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Add New Product</h1>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Product Name</label>
          <input
            type="text"
            id="name"
            placeholder="Enter product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="description">Product Description</label>
          <textarea
            id="description"
            placeholder="Enter product description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
            <option value="Archived">Archived</option>
          </select>
        </div>

        <button type="submit" className={styles.submitBtn}>
          Save Product
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
