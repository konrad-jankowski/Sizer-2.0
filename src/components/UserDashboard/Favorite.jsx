import React, { useEffect, useState } from "react";
import { ToggleAuth } from "../../context/ToggleCardContext";
import { db } from "../../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";

const Favorite = () => {
  const [products, setProducts] = useState([]);
  const { user } = ToggleAuth();

  const renderProducts = products.map((item) => (
    <div className="mt-4 flex flex-col gap-1" key={item.id}>
      <img
        className="w-[130px] h-[130px] object-contain cursor-pointer"
        src={item.images[0]}
        alt={item.model}
      />
      <h3 className="font-medium hover:underline cursor-pointer">
        {item.model.substring(0, 13) + "..."}
      </h3>
      <button
        onClick={() => deleteProduct(item.id)}
        className="bg-[#f4811f] text-white rounded-sm flex items-center justify-center gap-2  py-1  font-semibold hover:bg-[#c96c1a] uppercase"
      >
        usuń
      </button>
    </div>
  ));

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setProducts(doc.data()?.savedFavorites);
    });
  }, [user?.email]);

  const productRef = doc(db, "users", `${user?.email}`);
  const deleteProduct = async (passedId) => {
    try {
      const result = products.filter((item) => item.id !== passedId);
      await updateDoc(productRef, {
        savedFavorites: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Ulubione</h2>
      <p>{products.length ? "" : "Pusto"}</p>
      <div className="flex gap-4">{renderProducts}</div>
    </div>
  );
};

export default Favorite;
