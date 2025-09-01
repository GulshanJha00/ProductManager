"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/_styles/products/products.module.css";

interface Product {
  product_id: number;
  product_name: string;
  product_desc: string;
  status: string;
  created_by: string;
  created_at: string;
  updated_by: string | null;
  updated_at: string | null;
  is_deleted: boolean;
}

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selected, setSelected] = useState<Product | null>(null);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_URI}/api/getItem`);
        setProducts(res.data);
      } catch (err) {
        console.error("Failed to fetch products:", err);
      }
    };
    fetchProducts();
  }, []);

  // Show only published & not deleted
  const visibleProducts = products.filter(
    (p) => !p.is_deleted && p.status === "Published"
  );

  return (
    <section className={styles.products}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Our Products</h1>
          <p className={styles.sub}>
            Browse our featured products available right now.
          </p>
        </header>

        <div className={styles.grid}>
          {visibleProducts.length === 0 ? (
            <div className={styles.empty}>No products available.</div>
          ) : (
            visibleProducts.map((p) => (
              <article key={p.product_id} className={styles.card}>
                <div className={styles.cardTop}>
                  <h2 className={styles.productName}>{p.product_name}</h2>
                </div>

                <p className={styles.desc}>{p.product_desc}</p>

                <div className={styles.actions}>
                  <button
                    className={styles.view}
                    onClick={() => setSelected(p)}
                  >
                    View
                  </button>
                </div>
              </article>
            ))
          )}
        </div>
      </div>

      {/* Drawer / Modal for selected product */}
      {selected && (
        <div
          className={styles.backdrop}
          onClick={() => setSelected(null)}
          role="button"
          tabIndex={0}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <header className={styles.modalHeader}>
              <h3>{selected.product_name}</h3>
            </header>

            <div className={styles.modalBody}>
              <ul className={styles.auditList}>
                <li>
                  <strong>Product ID:</strong> {selected.product_id}
                </li>
                <li>
                  <strong>Product Name:</strong> {selected.product_name}
                </li>
                <li>
                  <strong>Description:</strong> {selected.product_desc}
                </li>
                <li>
                  <strong>Status:</strong> {selected.status}
                </li>
                <li>
                  <strong>Created By:</strong> {selected.created_by}
                </li>
                <li>
                  <strong>Created At:</strong> {selected.created_at}
                </li>
                <li>
                  <strong>Updated By:</strong> {selected.updated_by}
                </li>
                <li>
                  <strong>Updated At:</strong> {selected.updated_at}
                </li>
              </ul>
            </div>

            <div className={styles.modalActions}>
              <button
                className={styles.close}
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
