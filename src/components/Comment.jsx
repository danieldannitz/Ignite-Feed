import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://i.pinimg.com/736x/04/a5/1e/04a51e3a2263f59b0b71d9fac9ab2ae0--animal-portraits-portrait-art.jpg" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Carpincho da Silva</strong>
              <time title="23 de Junho de 2022 às 18:04" dateTime="2022-06-23">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="">
              <Trash size={24} />
            </button>
          </header>
          <p>Muito bom Carpincho, parabéns!! 👏👏</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
