import { doc, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { ToggleAuth } from "../../context/ToggleCardContext";
import { db } from "../../firebase";
import sizerClub from "../../images/sizerclub.png";

const SizerClub = () => {
  const [products, setProducts] = useState([]);
  const [flip, setFlip] = useState(false);
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
      <h2 className="text-gray-600">Punkty w clubie sizer</h2>
      <div>
        {products?.length === 0 ? (
          <h3>Brak punktów</h3>
        ) : (
          <>
            <div
              onClick={() => setFlip((prev) => !prev)}
              className="relative bg-black mt-4 text-white h-[300px] w-[200px] rounded-lg overflow-hidden flex flex-col items-center justify-center cursor-pointer"
            >
              <img className="w-[82%] object-contain " src={sizerClub} alt="" />
              <p>Dotknij by zobaczyć</p>
              <div
                className={`top-0 left-0 right-0 bg-gradient-to-b from-[#f4811f] to-[#bd783b] text-white h-[300px] w-[200px] rounded-lg overflow-hidden flex items-center justify-center font-normal ${
                  flip ? "absolute" : "hidden"
                }`}
              >
                <div className="text-center leading-8">
                  <span className="noto text-3xl ">{totalPoints}</span>
                  <br />
                  <p className="noto text-xl font-semibold">PUNKTÓW</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SizerClub;
