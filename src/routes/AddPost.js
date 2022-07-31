import React, { useState } from "react";


function AddPost({posts, setPosts, token}) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [deliver, willDeliver] = useState('');

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    console.log('title:', title);
    console.log('description:', description);
    console.log('price:', price);
    console.log('deliver:', deliver);
    console.log(token);
    const response = await fetch ('https://strangers-things.herokuapp.com/api/2202-ftb-pt-web-pt/posts',{
      method:'POST',
      headers:{
        'Content-type':'Application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        post:{
        title,
        description,
        price,
        willDeliver,
        }
      })
    });
    const data = await response.json();
    console.log('data: ', data);
    // // setPosts([data, ...posts]);
    // setPosts (posts.data.posts);
  }


return (
  
  <form onSubmit={handleSubmit}>
    <h2>Add Post</h2>
    <div>
      <label htmlFor="name">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
    <div>
        <label htmlFor="name">Description</label>
        <input
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Price</label>
        <input
          id="price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="name">Will Deliver</label>
        <input
          id="deliver"
          value={deliver}
          onChange={(e) => willDeliver(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );

}
export default AddPost;
// const AddPost = () => {
//     return (
//       <form>
//          <h2>Add Post</h2>
//       <div>
//         <label htmlFor="name">Title</label>
//         <input id="text" type="text" />
//       </div>
//       <div>
//         <label htmlFor="name">Description</label>
//         <input id="text" type="text" />
//       </div>
//       <div>
//         <label htmlFor="name">Price</label>
//         <input id="text" type="text" />
//       </div>
//       <div>
//         <label htmlFor="name">Will Deliver</label>
//         <input id="text" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }






// // import { useParams } from "react-router-dom";
// const SinglePost = async ({token}) => {
 
 
// }


// // const SinglePosts = () => {
//   //   const [singleposts, setSinglePosts] = useState([])
//   //   useEffect(() => {
//   //     async function getSinglePosts() {
//   //       const response = await fetch('https://strangers-things.herokuapp.com/api/2202-ftb-pt-web-pt/posts')
//   //       const singleposts = await response.json();
//   //       console.log(singleposts);
//   //       setPosts(singleposts.data.singleposts);
//   //     }
//   //     getSinglePosts();
      
//   //     }, [])













// const AddPost = () => {
//     return (
//       <form>
//          <h2>Add Post</h2>
//       <div>
//         <label htmlFor="name">Title</label>
//         <input id="tex" type="text" />
//       </div>
//       <div>
//         <label htmlFor="name">Description</label>
//         <input id="text" type="text" />
//       </div>
//       <div>
//         <label htmlFor="name">Price</label>
//         <input id="text" type="text" />
//       </div>
//       <div>
//         <label htmlFor="name">will Deliver</label>
//         <input id="text" type="text" />
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }
     
     
  
  
 