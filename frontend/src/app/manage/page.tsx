"use client";
import React, { useEffect, useState } from "react";
import styles from "@/_styles/manage/manage.module.css";
import { useRouter } from "next/navigation";
import axios from "axios";
interface Product {
  product_id: number;
  product_name: string;
  product_desc: string;
  status: "Draft" | "Published" | "Archived";
}

const ManagePage = () => {
  const [products, setProducts] = useState<Product[] | null>([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const router = useRouter();
  useEffect(() => {
    const fetchItem = async () => {
      const response = await axios.get("http://localhost:3001/api/getItem");
      console.log(response.data);
      setProducts(response.data);
    };
    fetchItem();
  }, []);

  const openDeleteModal = (id: number) => {
    setDeleteId(id);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (!deleteId) return;
    console.log(deleteId);

    try {
      const res = await axios.put(`http://localhost:3001/delete/${deleteId}`);
      alert(res.data.message);
      setProducts(
        products?.filter((prod) => prod.product_id !== deleteId) || []
      );
    } catch (err: any) {
      console.error(err);
      alert("Error deleting product: " + err.message);
    } finally {
      setShowModal(false);
      setDeleteId(null);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Manage Products</h1>
      <button
        onClick={() => router.push("/manage/addProduct")}
        className={styles.addBtn}
      >
        Add New Product
      </button>

      <table className={styles.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className={styles.tbody}>
          {products.map((prod) => (
            <tr key={prod.product_id}>
              <td>{prod.product_id}</td>
              <td>{prod.product_name}</td>
              <td>{prod.product_desc}</td>
              <td>{prod.status}</td>
              <td>
                <button
                  className={styles.editBtn}
                  onClick={() =>
                    router.push(`/manage/editProduct/${prod.product_id}`)
                  }
                >
                  Edit
                </button>
                <button
                  className={styles.deleteBtn}
                  onClick={() => openDeleteModal(prod.product_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModal && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2>Confirm Delete</h2>
            <p>Are you sure you want to delete this product?</p>
            <div className={styles.modalActions}>
              <button
                className={styles.cancelBtn}
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button className={styles.confirmBtn} onClick={confirmDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagePage;
