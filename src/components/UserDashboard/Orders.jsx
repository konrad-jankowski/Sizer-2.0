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

  const test = products?.map((item) => item.matkaTeressa);

  return (
    <div>
      <h2 className="text-gray-600">Zamówienia </h2>
      <div>
        {products?.length === 0 ? (
          <p className="bg-[#d9edf7] text-[#31708f] text-center py-1 text-sm">
            Nie złożyłeś jeszcze zamówienia w naszym sklepie
          </p>
        ) : (
          <div className="flex flex-col">
            {test?.map((item, i) => {
              return (
                <div className="mt-4" key={i}>
                  <div className="flex items-center gap-2">
                    Numer zamówienia{" "}
                    <div className="w-7 h-7 text-white flex justify-center items-center rounded-full bg-[#f4811f]">
                      {i + 1}
                    </div>
                  </div>
                  <div>
                    {item?.map((item) => {
                      return (
                        <div
                          className="flex items-center gap-3"
                          key={item.uuid}
                        >
                          <img
                            className="w-[60px] h-[60px] object-contain mt-4"
                            src={item.images[0]}
                            alt=""
                          />
                          <h4>
                            <span className="font-medium">{item.model}</span>
                          </h4>
                          <p>
                            Rozmiar:{" "}
                            <span className="font-medium">
                              {item.productSize}
                            </span>
                          </p>
                          <p>{item.createdAt}</p>
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
