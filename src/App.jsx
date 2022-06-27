import { Header } from "./components/Header";
import { SideBar } from "./components/SideBar";
import { Post } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl:
        "https://i.pinimg.com/736x/04/a5/1e/04a51e3a2263f59b0b71d9fac9ab2ae0--animal-portraits-portrait-art.jpg",
      name: "Carpincho da Silva",
      role: "Nadador",
    },
    content: [
      { type: "paragraph", content: "Loooo Reem 👋" },
      {
        type: "paragraph",
        content:
          "Anim laborum dolore amet nostrud laboris occaecat adipisicing. Commodo anim laborum sit sit excepteur. Excepteur est proident aliquip animeiusmod proident. Irure tempor et cupidatat id ipsum excepteurcup idatat labore velit eu non ad laboris.",
      },
      { type: "link", content: "👉 carpincho.com" },
    ],
    publishedAt: new Date("2022-06-27 13:13"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/maykbrito.png",
      name: "Mayk Brito",
      role: "Educator @Rocketseat",
    },
    content: [
      { type: "paragraph", content: "Loooo Reem 👋" },
      {
        type: "paragraph",
        content:
          "Anim laborum dolore amet nostrud laboris occaecat adipisicing. Commodo anim laborum sit sit excepteur. Excepteur est proident aliquip animeiusmod proident. Irure tempor et cupidatat id ipsum excepteurcup idatat labore velit eu non ad laboris.",
      },
      { type: "link", content: "👉 carpincho.com" },
    ],
    publishedAt: new Date("2022-06-30 20:13"),
  },
];

export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
