import styles from "./testimony_box.module.css";

export default function TestimonyBox({
  description,
  author,
  occupation,
}: {
  description: string;
  author: string;
  occupation: string;
}) {
  return (
    <div className={styles.testimony_box}>
      <p>&quot;{description}&quot;</p>
      <div className={styles.testimony_author}>
        <p>{author}</p>
        <p>{occupation}</p>
      </div>
    </div>
  );
}
