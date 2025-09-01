"use client";
import React, { useState } from "react";
import styles from "@/_styles/manage/manage.module.css";

interface Product {
  id: number;
  name: string;
  description: string;
  status: "Draft" | "Published" | "Archived";
}

const ManagePage = () => {
  // Dummy products for now
  const [products, setProducts] = useState<Product[]>([
    { id: 1, name: "Product A", description: "This is product A and i hope this is now as long as i think it is df sdf f s. s fsdf df sfs s fs fs fs fsd fs f f s f r erw. dc frf rfg fde fgff ed f ed e c fv gfr ew q sd fv gb h ju y5tre wqsd fghju y5tref dvfgbh yju ", status: "Draft" },
    { id: 2, name: "Product B", description: "This is product B", status: "Published" },
  ]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Manage Products</h1>
      <button className={styles.addBtn}>Add New Product</button>

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
        <tbody>
          {products.map((prod) => (
            <tr key={prod.id}>
              <td>{prod.id}</td>
              <td>{prod.name}</td>
              <td>{prod.description}</td>
              <td>{prod.status}</td>
              <td>
                <button className={styles.editBtn}>Edit</button>
                <button className={styles.deleteBtn}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePage;
