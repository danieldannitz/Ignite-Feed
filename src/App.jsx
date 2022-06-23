import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

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
        </main>
      </div>
    </div>
  );
}
