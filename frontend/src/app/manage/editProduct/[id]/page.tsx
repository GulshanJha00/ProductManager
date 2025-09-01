"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import styles from "@/_styles/manage/update.module.css";
import { toast, ToastContainer } from "react-toastify";

interface Product {
  product_id: number;
  product_name: string;
  product_desc: string;
  status: "Draft" | "Published" | "Archived";
}

const EditProductPage = () => {
  const router = useRouter();
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:3001/api/products/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch product");
      }
    };
    fetchProduct();
  }, [id]);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!product) return;

    try {
      await axios.put(`http://localhost:3001/api/products/${id}`, {
        ...product,
        updated_by: "admin",
      });
      toast.success("Product updated successfully");
      router.push("/manage");
    } catch (err: any) {
      console.error(err);
      toast.error("Error updating product");
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Edit Product</h1>
      <form onSubmit={handleSave} className={styles.form}>
        <div className={styles.formGroup}>
          <label>Product Name</label>
          <input
            type="text"
            value={product.product_name}
            onChange={(e) =>
              setProduct({ ...product, product_name: e.target.value })
            }
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Product Description</label>
          <textarea
            value={product.product_desc}
            onChange={(e) =>
              setProduct({ ...product, product_desc: e.target.value })
            }
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label>Status</label>
          <select
            value={product.status}
            onChange={(e) =>
              setProduct({
                ...product,
                status: e.target.value as Product["status"],
              })
            }
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
            <option value="Archived">Archived</option>
          </select>
        </div>

        <div className={styles.modalActions}>
          <button
            type="button"
            onClick={() => router.push("/manage")}
            className={styles.cancelBtn}
          >
            Cancel
          </button>
          <button type="submit" className={styles.confirmBtn}>
            Save
          </button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default EditProductPage;
