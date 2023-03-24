import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/ToggleCardContext";
import { RiDeleteBin6Line } from "react-icons/ri";
import { formatCurrencyLowercase } from "../utilities/formatCurrency";
import Button_favorite from "../components/Button_favorite";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const Cart = () => {
  const { test, setTest, quantityy, user } = useShoppingCart();
  const productId = doc(db, "users", `${user?.email}`);

  const productRef = doc(db, "users", `${user?.email}`);
  const deleteProduct = async (passedId) => {
    try {
      const result = test.filter((item) => item.item.uuid !== passedId);
      await updateDoc(productRef, {
        shoppingCartItems: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProductsFromFirebase = async () => {
    await updateDoc(productId, {
      shoppingCartItems: [],
    });
  };

  const totalPrice = test?.map((product) => {
    if (product.item.productSize != undefined) return product.item.price;
  });

  const total = totalPrice?.reduce(function (s, v) {
    return s + (v || 0);
  }, 0);

  const productsWithSize = test?.filter((item) => item.item.productSize);

  const order = productsWithSize?.map((item) => {
    return item.item;
  });

  const finishOrder = async () => {
    if (user?.email) {
      await updateDoc(productId, {
        orderHistory: arrayUnion({
          order,
          date: new Date().toISOString().split("T")[0],
        }),
      });
    } else {
      alert("Please log in to save a product");
    }
    alert("Dziękujemy za złożenie zamówienia i zapraszamy ponowanie");
    setTest([]);
    deleteProductsFromFirebase();
  };

  return (
    <div className=" min-h-[42.8vh] px-[9%] ">
      <div className="h-[12vh] flex items-center justify-between">
        {" "}
        <Link to="/">
          {" "}
          <img
            className="w-[150px] h-[50px] object-cover"
            src="https://bm-discounts-prd-app-imageautoresize02.azureedge.net/imageautoresize/v2/L2Rpc2NvdW50cy1waWN0dXJlcy84NzFkNWU2ZC0xYjhiLTQzOTYtYjU2OC03ZmQzYzBmOWU1OTIvNTJjNTgyZWMtMjZmMC00YWU5LTljYWItZjcxZTRiNjUwMjRmLnBuZw2/"
            alt=""
          />
        </Link>
        <ul className="text-[#9f9f9f] font-bold flex gap-6 mt-4">
          <li className="text-[#444] pb-4  border-b-4 border-[#f4811f] ">
            1. KOSZYK<span className="opacity-0">k</span>
          </li>
          <li>2. DOSTAWA</li>
          <li>3. PODSUMOWANIE</li>
        </ul>
      </div>
      {quantityy > 0 ? (
        <>
          <div className="flex mx-[9%] mb-2 mt-8">
            <p className="ml-[calc(10%+110px)] w-[400px]">Szczegóły produktu</p>
            <p className=" ml-[10%]">Cena</p>
          </div>
          <div className="border-t mb-10  mx-[9%]">
            {test?.map((item) => {
              if (item.item.productSize) {
                return (
                  <div
                    className="flex items-center border-b py-4"
                    key={item.item.uuid}
                  >
                    <img
                      className="w-[110px] h-[110px] object-contain mr-[10%]"
                      src={item.item.images[0]}
                      alt={item.item.model}
                    />
                    <span className="w-[400px] mr-[10%]">
                      <h2>{item.item.model}</h2>
                      <p>ROZMIAR: {item.item.productSize}</p>
                    </span>
                    <h3 className="mr-10">
                      {formatCurrencyLowercase(item.item.price)}
                    </h3>
                    <RiDeleteBin6Line
                      className="cursor-pointer hover:text-[#f4811f]"
                      onClick={() => deleteProduct(item.item.uuid)}
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className="bg-gray-100 w-[400px] h-[200px] mx-auto mb-10 flex flex-col gap-4">
            <h2 className="text-center mt-4 font-semibold">PODSUMOWANIE</h2>
            <hr />
            <span className="flex justify-between items-center font-medium px-10">
              <p>Kwota do zapłaty: </p>
              <p className="text-[#f4811f] font-semibold text-xl">
                {formatCurrencyLowercase(total)}
              </p>
            </span>
            <button
              onClick={finishOrder}
              className=" bg-orange-400 p-2 rounded mx-4 text-white  font-semibold"
            >
              DALEJ
            </button>
          </div>
        </>
      ) : (
        <>
          <h2 className="text-center my-2">Twój koszyk jest pusty.</h2>
          <Link to="/">
            <Button_favorite
              text={{
                text: "powrót do sklepu",
                class: "mx-auto mt-6 bg-black text-white hover:bg-black/80",
              }}
            />
          </Link>
        </>
      )}
    </div>
  );
};

export default Cart;
