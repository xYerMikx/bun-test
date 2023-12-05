import { useEffect, useState } from "react";
import "./App.css";
import { Button } from "./Button/Button";
import axios from "axios";

interface IPost {
  id: number;
  title: string;
  content: string;
}

function App() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("http://localhost:3005/posts");
      setPosts(data);
    };
    getData();
  });

  return (
    <>
      <div></div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {posts?.map(({ id, content, title }) => {
        return (
          <div key={id}>
            <p>{title}</p>
            <p>{content}</p>
          </div>
        );
      })}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Button testId="primary" primary>
          My Button
        </Button>
        <Button testId="secondary" primary={false}>
          My Button
        </Button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
