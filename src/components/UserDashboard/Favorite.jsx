import React, { useEffect, useState } from "react";
import { ToggleAuth } from "../../context/ToggleCardContext";
import { db } from "../../firebase";
import { updateDoc, doc, onSnapshot } from "firebase/firestore";
import { Link } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";

const Favorite = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user } = ToggleAuth();

  const renderProducts = products?.map((item) => (
    <div className="mt-4 flex flex-col items-center gap-1" key={item.id}>
      <Link to={`${item.id}`}>
        <img
          className="w-[130px] h-[130px] object-contain cursor-pointer"
          src={item.images[0]}
          alt={item.model}
        />
        <h3 className="font-medium hover:underline cursor-pointer">
          {item.model.substring(0, 13) + "..."}
        </h3>
      </Link>
      <button
        onClick={() => deleteProduct(item.id)}
        className="bg-[#f4811f] text-white rounded-sm flex items-center justify-center gap-2  py-2 px-4  font-semibold hover:bg-[#c96c1a] uppercase"
      >
        do koszyka
      </button>
      <button
        onClick={() => deleteProduct(item.id)}
        className="bg-[black] text-white rounded-sm flex items-center justify-center gap-2  py-2 px-2 text-sm  font-semibold hover:bg-black/80 uppercase"
      >
        usuń ze schowka
      </button>
    </div>
  ));

  useEffect(() => {
    setLoading(true);
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setProducts(doc.data()?.savedFavorites);
      setLoading(false);
    });
  }, [user?.email]);

  const productRef = doc(db, "users", `${user?.email}`);
  const deleteProduct = async (passedId) => {
    console.log(passedId);

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
      <h2 className="text-gray-600">Ulubione</h2>
      {loading ? (
        <div className=" h-[200px] flex justify-center items-center">
          <GridLoader color="orange" size={16} />
        </div>
      ) : (
        <>
          {products?.length ? (
            <div className="flex gap-4">{renderProducts}</div>
          ) : (
            <p className="bg-[#d9edf7] text-[#31708f] text-center py-1 text-sm">
              Nie posiadasz jeszcze produktów w schowku
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Favorite;
