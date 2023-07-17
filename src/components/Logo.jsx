import Image from "next/image";
import styles from "@/styles/Home.module.css";

function Logo() {
  return (
    <a className={`${styles.logo}`} href="#" rel="noopener noreferrer">
      <Image
        src="/favicon.jpeg"
        alt="Shun Wei"
        width={50}
        height={50}
        priority
      />
      <h1>Shun Wei</h1>
    </a>
  );
}

export default Logo;
