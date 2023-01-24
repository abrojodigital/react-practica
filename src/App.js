import React from "react"
import { useEffect, useState } from "react"
import "./style.css"

export default function App() {
  const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://www.reddit.com/r/reactjs.json")
        .then(res => res.json())
        .then(json =>
        // Guarda posts en estado
        setPosts(json.data.children.map(c => c.data))
        )
    }, [])

  return (
    <div className="App">
      <ul>
        {posts.map(post => (
            <li key={post.id} > {post.title} </li>
        ))}
        </ul>
    </div>
  );

}
