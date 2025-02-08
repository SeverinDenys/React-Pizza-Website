import styles from "./NotFoundBlock.module.scss";

const NotFoundBlock = () => {
  return (
    <>
      <div className={styles.root}>
        <h1>
          <span>😕</span>
          <br />
          Nothing was found
        </h1>
        <p className={styles.description}>Unfortunately this page is not found in our Internet-Shop</p>
      </div>
    </>
  );
};

export default NotFoundBlock;
