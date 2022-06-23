import { Header } from "./components/Header";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";
import { SideBar } from "./components/SideBar";

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            author="Daniel Menezes"
            content="lorem Ipsum dolor sit amet, consectetur adipiscing elit lorem Ipsum dolor sit amet, consectetur adipiscing elitlorem Ipsum dolor sit amet, consectetur adipiscing elitlorem Ipsum dolor sit amet, consectetur adipiscing elit"
          />
          <Post author="Ronaldinho Gaúcho" content="novo texto" />
        </main>
      </div>
    </div>
  );
}
