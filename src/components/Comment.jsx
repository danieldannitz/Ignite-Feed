import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mayk Brito</strong>
              <time title="23 de Junho de 2022 às 18:04" dateTime="2022-06-23">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="">
              <Trash size={24} onClick={handleDeleteComment} />
            </button>
          </header>
          <p>{content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Curtidas <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
