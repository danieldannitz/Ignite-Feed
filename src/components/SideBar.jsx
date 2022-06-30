import styles from "./SideBar.module.css";
import { PencilLine } from "phosphor-react";
import { Avatar } from "./Avatar";

export function SideBar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1631815087668-d039e9ead82f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />
      <div className={styles.profile}>
        <Avatar src="https://i.pinimg.com/736x/04/a5/1e/04a51e3a2263f59b0b71d9fac9ab2ae0--animal-portraits-portrait-art.jpg" />
        <strong>Carpincho da Silva</strong>
        <span>Nadador</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine className="pencil" size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
