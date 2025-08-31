"use client";

import { useState } from "react";
import styles from "@/_styles/products/products.module.css";

interface Product {
 product_id: number;
  product_name: string;
  product_desc: string;
  status: string;
  created_by: string;
  created_at: string;
  updated_by: string | null;
  updated_at: string |null;
}
const initialProducts = [
  {
    product_id: 1,
    product_name: "Product A",
    product_desc:
      "Product A is an elegant, lightweight item ideal for everyday use. It features great build quality and reliable performance.",
    status: "Published",
    created_by: "Admin",
    created_at: "2025-08-01",
    updated_by: "Editor",
    updated_at: "2025-08-10",
    is_deleted: false,
  },
  {
    product_id: 2,
    product_name: "Product B",
    product_desc:
      "Product B focuses on affordability without sacrificing utility — perfect for budget-conscious users.",
    status: "Draft",
    created_by: "Admin",
    created_at: "2025-08-05",
    updated_by: null,
    updated_at: null,
    is_deleted: false,
  },
  {
    product_id: 3,
    product_name: "Product C (Archived)",
    product_desc: "Old promotional product — archived and hidden from live view.",
    status: "Archived",
    created_by: "System",
    created_at: "2025-07-20",
    updated_by: null,
    updated_at: null,
    is_deleted: true,
  },
  {
    product_id: 4,
    product_name: "Product B",
    product_desc:
      "Product B focuses on affordability without sacrificing utility — perfect for budget-conscious users.",
    status: "Published",
    created_by: "Admin",
    created_at: "2025-08-05",
    updated_by: null,
    updated_at: null,
    is_deleted: false,
  },
];

export default function Page() {
  const [selected, setSelected] = useState<Product | null>();

  // Show only published & not deleted
  const visibleProducts = initialProducts.filter(
    (p) => p.is_deleted === false && p.status === "Published"
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
