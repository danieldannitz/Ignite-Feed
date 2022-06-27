import { useState } from "react";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";

import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";

import styles from "./Post.module.css";

export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState(["Comentário bacana, hein?!"]); //useState vai receber o array de comments, setComments fica responsável por atualizar comments quando o mesmo for alterado
  const [newCommentText, setNewCommentText] = useState("");

  function handleNewComment() {
    event.preventDefault(); //previne a atualização por padrão do react

    setComments([...comments, newCommentText]);
    setNewCommentText(""); // após a inserção do comentario, volta para o valor inicial
  }

  const dateFormat = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const postDistanceToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder={true} src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={dateFormat} dateTime={publishedAt.toISOString()}>
          {postDistanceToNow}
        </time>
      </header>
      <div className={styles.content}>
        {content.map((comment) => {
          if (comment.type === "paragraph") {
            return <p>{comment.content}</p>;
          } else if (comment.type === "link") {
            return (
              <p>
                <a href="#">{comment.content}</a>
              </p>
            );
          }
        })}
      </div>
      <form onSubmit={handleNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          placeholder="Deixe um comentário"
          value={newCommentText} //toda vez que o valor mudar, a textarea vai refletir a alteração
          name="comment"
          onChange={handleNewCommentChange}
        />
        <button type="submit">Publicar</button>
      </form>
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return <Comment content={comment} />;
        })}
      </div>
    </article>
  );
}
