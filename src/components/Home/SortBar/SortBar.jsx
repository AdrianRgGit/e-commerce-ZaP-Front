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

  return (
    <>
      <div className="sort-container">
        <div className="button-container">
          <img
            className="arrow"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAU1JREFUSEvt1c8qRVEUx/HvHaEkypyBB5CSSPmTIg9gbOYl7tArmJubC8mfkhLJCxAPYEDyZ6ZfrV234/xZe59yJ/uMbueusz9r//Y6nQ59ujp9csnwvyXfJupB6/I7pdtUeAA4MnAD+InFU+Ah4BBYNuwC2AS+YvBYWOgpsFBAroG1GDwGHgaOS9DQg/B14MOzcy8s9ASYt0VfgImS327cA49YvLMGXQG7heHqAov2/63F/l638yZY6CUw3YMqTjWhodKlIRN2BszZvQdgCajE6+AxWyygN8Aq8GnYuSEr1oSOQ4PnwuvgceDOzvLedhAGR7sswupDuBKaAR6tideyyJuingL2gC3grWeBKlglo8ABsAM8VZ1zE1z1XB3seZuSP4sZDq+WK2YV5TP2RjUJbFvxPvDsfTDUpUYd6/ypz3DrCL0L5Ki9SbWu+wW6A0IfgGQJ4gAAAABJRU5ErkJggg=="
            onClick={showProductsAsc}
          />

          <span className="span-text" onClick={getProducts}>Sort by price</span>
          
          <img
            className="arrow"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAWRJREFUSEvt1d9KFVEUx/HPuQzSiO5F6AVEiFKCVAojCHoEew+fwGfwwjfwTjREE0SoIHoAL7TrQCxJRC9iyRoYDufMmTlHOzezb2b2zFq/716//a9jTK0zJq4W/N+cb62ua/U0VjJ4Ayd1E4u4Ya1ewH6KLOJzCx7kQGv1IIeK//e+uJ5iHR9wXhpVFfgRNvERp/0qqZrjJ/iOqXy+wkUK9QM/xAFmcYw5/OoFrwI/xh5mMvELlvAXvcAB3cXzjP+R8WdNwRE/mRUU8EO8wYuuA+RrDrIMDYd+D2N1kRPwqORZfggX1rCd/bdYxcvsf8PrKmjE1d3HE/iUlUZenM1xXkf7mesg3o8QA/kzaHvUBYdOzOEO5vuIBnS5tAAr2U3AIfQgbe+GxyXxDpeDKh3lduqGBzTsvaoLbTLH3ZoB38I13jeFjgIubL9JeJNib2ObznFjwCj7+M5gZaG24nuxtZfoP5n8RB/nmy5uAAAAAElFTkSuQmCC"
            onClick={showProductsDesc}
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
            <option value="">All</option>
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
