import { Slider } from "antd";
import React, { useContext, useState } from "react";
import "./SortBar.scss";
import { ProductContext } from "../../../context/ProductContext/ProductState";

const SortBar = () => {
  const { getProducts, showProductsDesc, showProductsAsc, showProductByBrand } =
    useContext(ProductContext);

  const [selectedBrand, setSelectedBrand] = useState("");

  const handleBrandChange = (event) => {
    const brand = event.target.value;
    if (!brand) {
      getProducts();
    } else {
      setSelectedBrand(brand);
      showProductByBrand(brand);
    }
  };

  // const onChange = (value) => {
  //   console.log("onChange: ", value);
  // };
  // const onAfterChange = (value) => {
  //   console.log("onAfterChange: ", value);
  // };

  return (
    <>
      <div className="sort-container">
        <div className="button-container">
          <button className="asc-button" onClick={showProductsAsc}>
            Asc
          </button>
          <button className="desc-button" onClick={showProductsDesc}>
            Desc
          </button>
        </div>
        <div className="slider-container">
          <Slider
            className="price-range"
            range={{
              draggableTrack: true,
            }}
            defaultValue={[20, 50]}
            max={300}
          />
        </div>
        <div className="selector-container">
          <label htmlFor="brand"></label>
          <select
            name="brand"
            id="brand-selector"
            onChange={handleBrandChange}
            value={selectedBrand}
          >
            <option value="">Todas las marcas</option>
            <option value="Nike">Nike</option>
            <option value="Adidas">Adidas</option>
            <option value="Puma">Puma</option>
            <option value="Reebok">Reebok</option>
            <option value="Under Armour">Under Armour</option>
            <option value="New Balance">New Balance</option>
            <option value="Converse">Converse</option>
            <option value="Vans">Vans</option>
            <option value="Skechers">Skechers</option>
            <option value="ASICS">ASICS</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default SortBar;
