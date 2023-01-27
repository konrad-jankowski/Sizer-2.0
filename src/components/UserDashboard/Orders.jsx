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

  const test1 = test.map(item);

  return (
    <div>
      <h2>Orders : </h2>
      {/* <div>{products.length === 0 ? <h3>Brak zamówień</h3> : "elo"}</div> */}
      <div>
        {test.map((item, i) => {
          return <p>{i}</p>;
          {
            item.map((item, index) => (
              <div>
                <p>{index + 1}</p>
                <div>
                  <p className="font-semibold">{item.model}</p> Size:{" "}
                  {item.productSize}
                </div>
              </div>
            ));
          }
        })}
      </div>
    </div>
  );
};

export default Orders;
