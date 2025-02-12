/* eslint-disable react/prop-types */
import { useState } from "react";
import arrowUpIcon from "../../assets/icons/arrow-up.svg";

const Sort = ({ selectedSortType, setSelectedSortType }) => {
  const [isVisiblePopUp, setIsVisiblePopUp] = useState(false);

  const handlePopUp = () => {
    setIsVisiblePopUp(!isVisiblePopUp);
  };

  const handleSelectedSort = (index) => {
    setSelectedSortType(index);
    setIsVisiblePopUp(false);
  };

  const list = [
    { name: "popularity", sortProperty: "rating", order: "asc" },
    { name: "priceAmount", sortProperty: "price", order: "asc" },
    { name: "alphabet", sortProperty: "name", order: "asc" },
  ];

  // const sortName = list[selectedSortType].name;

  return (
    <div className="sort">
      <div className="sort__label">
        <img src={arrowUpIcon} alt="arrow icon up" />
        <b>sort by:</b>
        <span onClick={handlePopUp}>{selectedSortType.name}</span>
      </div>
      {isVisiblePopUp && (
        <div className="sort__popup">
          <ul>
            {list.map((obj, index) => (
              <li
                key={index}
                className={selectedSortType.sortProperty === obj.sortProperty ? "active" : ""}
                onClick={() => handleSelectedSort(obj)}
              >
                {obj.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
