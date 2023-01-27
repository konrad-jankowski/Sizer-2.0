import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ToggleAuth } from "../../context/ToggleCardContext";
import { db } from "../../firebase";

const Orders = () => {
  const [products, setProducts] = useState([]);
  const { user } = ToggleAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setProducts(doc.data()?.orderHistory);
    });
  }, [user?.email]);

  const test = products.map((item) => item.matkaTeressa);

  console.log(
    "Order list",
    test[0].map((item) => item.model)
  );

  return (
    <div>
      <h2>Orders</h2>
      {/* <div>{products.length === 0 ? <h3>Brak zamówień</h3> : "elo"}</div> */}
      {/* <div>{products.map(item)}</div> */}
    </div>
  );
};

export default Orders;
