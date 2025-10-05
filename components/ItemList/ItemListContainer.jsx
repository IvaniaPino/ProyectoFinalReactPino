import React, { useEffect, useState } from "react";
import { getProducts } from "../../api/firebaseService";
import ItemList from "./ItemList";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        console.error("Error cargando productos:", error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="item-list-container">
      <h1>Tienda de Cámaras</h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
