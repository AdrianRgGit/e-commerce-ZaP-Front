import { Slider } from "antd";
import React from "react";
import "./SortBar.scss";

const SortBar = () => {
  const onChange = (value) => {
    console.log("onChange: ", value);
  };
  const onAfterChange = (value) => {
    console.log("onAfterChange: ", value);
  };
  return (
    <>
      <div className="sort-container">
        <div className="button-container">
          <button className="asc">Asc</button>
          <button className="desc">Desc</button>
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
      </div>
    </>
  );
};

export default SortBar;
