import { useState,useEffect } from 'react';
import ColumnHeaders from "../components/ColumnHeaders"
import Post from '../components/Post';

const Posts = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    async function getPosts() {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2202-ftb-pt-web-pt/posts')
      const posts = await response.json();
      console.log(posts);
      setPosts(posts.data.posts);
    }
    getPosts();
    
    }, [])
    return (
      <main>
      <h2>Posts</h2>
      <ColumnHeaders />
      {posts.map(({_id, title, price, author}) => (
          <Post key={_id} id={_id} name={title} price={price} seller={author.username} />
        ))}
      </main>
    )
  }
  
  export default Posts;