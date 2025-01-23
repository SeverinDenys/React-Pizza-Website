import arrowUpIcon from "../../assets/icons/arrow-up.svg";

const Sort = () => {
  return (
    <div className="sort">
      <div className="sort__label">
        <img src={arrowUpIcon} alt="arrow icon up" />
        <b>sort by:</b>
        <span>popularity</span>
      </div>
      <div className="sort__popup">
        <ul>
          <li className="active">popularity</li>
          <li>price</li>
          <li>alphabet</li>
        </ul>
      </div>
    </div>
  );
};

export default Sort;
