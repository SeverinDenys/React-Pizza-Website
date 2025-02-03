import { useState } from "react";
import arrowUpIcon from "../../assets/icons/arrow-up.svg";

const Sort = () => {
  const [isVisiblePopUp, setIsVisiblePopUp] = useState(false);
  const [selectedSort, setSelectedSort] = useState(0);

  const handlePopUp = () => {
    setIsVisiblePopUp(!isVisiblePopUp);
  };

  const handleSelectedSort = (index) => {
    setSelectedSort(index);
    setIsVisiblePopUp(false);
  };

  const list = ["popularity", "price", "alphabet"];
  const sortName = list[selectedSort];

  return (
    <div className="sort">
      <div className="sort__label">
        <img src={arrowUpIcon} alt="arrow icon up" />
        <b>sort by:</b>
        <span onClick={handlePopUp}>{sortName}</span>
      </div>
      {isVisiblePopUp && (
        <div className="sort__popup">
          <ul>
            {list.map((listName, index) => (
              <li
                key={index}
                className={selectedSort === index ? "active" : ""}
                onClick={() => handleSelectedSort(index)}
              >
                {listName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
