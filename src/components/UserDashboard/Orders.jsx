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

  return (
    <div>
      <h2>Zamówienia </h2>
      <div>
        {products.length === 0 ? (
          <h3>Brak zamówień</h3>
        ) : (
          <div className="flex flex-col">
            {test.map((item, i) => {
              return (
                <div className="mt-4">
                  <p>Numer zamówienia {i + 1}:</p>
                  <div>
                    {item.map((item) => {
                      return (
                        <div className="flex items-center gap-3">
                          <img
                            className="w-[60px] h-[60px] object-contain mt-4"
                            src={item.images[0]}
                            alt=""
                          />
                          <h4>{item.model}</h4>
                          <p>Rozmiar: {item.productSize}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
