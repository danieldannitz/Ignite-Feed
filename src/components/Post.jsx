import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import styles from "./Post.module.css";

export function Post(props) {
  console.log(props);
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            hasBorder={true}
            src="https://i.pinimg.com/736x/04/a5/1e/04a51e3a2263f59b0b71d9fac9ab2ae0--animal-portraits-portrait-art.jpg"
          />
          <div className={styles.authorInfo}>
            <strong>Carpincho da Silva</strong>
            <span>Nadador</span>
          </div>
        </div>
        <time title="23 de Junho de 2022 às 18:04" dateTime="2022-06-23">
          Publicado há 1h
        </time>
      </header>
      <div className={styles.content}></div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <button type="submit">Publicar</button>
      </form>
      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
