import data from "../productsData";
import Button_buy from "./Button_buy";

let uniqueCategory = [
  ...new Map(data.map((item) => [item["category"], item])).values(),
];

let uniqueBrand = [
  ...new Map(data.map((item) => [item["brand"], item])).values(),
];

let sortedArrayBrands = uniqueBrand.sort((a, b) => {
  let fa = a.brand.toLowerCase(),
    fb = b.brand.toLowerCase();

  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
});

const countLengthBrand = (param) =>
  data.reduce(
    (counter, { brand }) => (brand === param ? (counter += 1) : counter),
    0
  );
const countLengthCategory = (param) =>
  data.reduce(
    (counter, { category }) => (category === param ? (counter += 1) : counter),
    0
  );

const Filter = () => {
  return (
    <aside className="flex flex-col uppercase border w-[240px] px-4 h-fit ">
      <h2 className="text-center border-b pb-2 mt-2">filtry</h2>
      <div className="flex flex-col mt-4 gap-1 ">
        <h3 className="font-semibold mb-1">Kategoria</h3>
        {uniqueCategory.map((item) => (
          <div key={item.id}>
            <input type="checkbox" id={item.category} name={item.category} />
            <label className="cursor-pointer ml-2" htmlFor={item.category}>
              {item.category}
            </label>
            <p className="inline ml-2 text-gray-400">
              ({countLengthCategory(item.category)})
            </p>
          </div>
        ))}
        <h3 className="font-semibold my-1">Marki</h3>
        {sortedArrayBrands.map((item) => (
          <div key={item.id}>
            <input type="checkbox" id={item.brand} name={item.brand} />
            <label className="cursor-pointer ml-2" htmlFor={item.brand}>
              {item.brand}
            </label>
            <p className="inline ml-2 text-gray-400">
              ({countLengthBrand(item.brand)})
            </p>
          </div>
        ))}
      </div>
      <Button_buy text={{ text: "filtruj produkty", class: "my-4 text-sm" }} />
    </aside>
  );
};

export default Filter;
