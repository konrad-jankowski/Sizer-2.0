import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ToggleAuth } from "../../context/ToggleCardContext";
import { db } from "../../firebase";

const SizerClub = () => {
  const [products, setProducts] = useState([]);
  const { user } = ToggleAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setProducts(doc.data()?.orderHistory);
    });
  }, [user?.email]);

  const test = products?.map((item) => item.matkaTeressa);

  const yoyo = test?.flatMap((item) => {
    return item?.flat(2).map((item) => {
      return item.sizerPoints;
    });
  });

  const removeUndefFromArray = yoyo?.filter(Number);

  const totalPoints = removeUndefFromArray?.reduce(
    (total, item) => total + item,
    0
  );

  return (
    <div>
      <h2 className="text-gray-600">Punkty w clubie sizer: </h2>
      <div>
        {products?.length === 0 ? (
          <h3>Brak punktów</h3>
        ) : (
          <div className="bg-[#f4811f] text-white text-center py-1 mt-6 font-medium text-lg">
            {totalPoints} PKT
          </div>
        )}
      </div>
    </div>
  );
};

export default SizerClub;
