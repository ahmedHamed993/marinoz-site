import Image from "next/image";
import styles from "./Resale.module.css";

const BrandCard = () => {
  return (
    <div className={styles.BrandImage}>
      <div className={styles.BrandImageItem}>
        <Image
          src="/Images/Rectangle 66.png"
          alt="Image 1"
          width={100}
          height={120}
        />
      </div>
      <div className={styles.BrandImageItem}>
        <Image
          src="/Images/Rectangle 65.png"
          alt="Image 2"
          width={100}
          height={120}
        />
      </div>
      <div className={styles.BrandImageItem}>
        <Image
          src="/Images/Rectangle 68.png"
          alt="Image 3"
          width={100}
          height={120}
        />
      </div>
      <div className={styles.BrandImageItem}>
        <Image
          src="/Images/Rectangle 69.png"
          alt="Image 4"
          width={100}
          height={120}
        />
      </div>
      <div className={styles.BrandImageItem}>
        <Image
          src="/Images/Rectangle 70.png"
          alt="Image 4"
          width={100}
          height={120}
        />
      </div>
    </div>
  );
};

export default BrandCard;
