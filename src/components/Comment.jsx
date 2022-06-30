import { ThumbsUp, Trash } from "phosphor-react";
import { useState } from "react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar
        hasBorder={false}
        src="https://br.web.img3.acsta.net/medias/nmedia/18/95/51/09/20410083.jpg"
      />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ronaldinho Gaúcho</strong>
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
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Curtidas <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
