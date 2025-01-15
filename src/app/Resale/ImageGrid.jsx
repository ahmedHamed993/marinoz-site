import Image from "next/image";
import styles from "./Resale.module.css";
import Logo from "../../components/Assets/Images/image 18 (1).png";
import Logo1 from "../../components/Assets/Images/image 18 (2).png";
import Logo2 from "../../components/Assets/Images/image 18.png";

const ImageGrid = () => {
  return (
    <div className={styles.containerImage}>
      <div className={styles.item}>
        <Image
          src="/Images/event-hero-1.png"
          alt="Image 1"
          width={100}
          height={180}
        />
      </div>
      <div className={styles.item}>
        <Image src={Logo} alt="Image 2" />
      </div>
      <div className={styles.item}>
        <Image src={Logo} alt="Image 3" />
      </div>
      <div className={styles.item}>
        <Image src={Logo2} alt="Image 4" />
      </div>
    </div>
  );
};

export default ImageGrid;
