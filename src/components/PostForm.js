// import { createPost } from "../utils/auth";
// import { useState } from "react";

// const PostForm = ({ token, setPostRequestData }) => {
//     const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [location, setLocation] = useState("");
//   const [willDeliver, setWillDeliver] = useState(false);

//   const titleChangeHandler = (e) => {
//     setTitle(e.target.value);
//   };

//   const descChangeHandler = (e) => {
//     setDescription(e.target.value);
//   };


//   const priceChangeHandler = (e) => {
//     setPrice(e.target.value);
//   };

//   const locationChangeHandler = (e) => {
//     setLocation(e.target.value);
//   };

//   const deliverChangeHandler = (e) => {
//     setWillDeliver(e.target.checked);
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     const data = await createPost(token, title, description, price, location, willDeliver);
//     setPostRequestData(data);
//     setTitle("");
//     setDescription("");
//     setPrice("");
//     setLocation("");
// };
// return (
//     <section>
//       <form id="form-create-new-post" onSubmit={submitHandler}>
//         <label htmlFor="new-post-title">Title:</label>
//         <input
//           id="new-post-title"
//           type="text"
//           required
//           value={title}
//           onChange={titleChangeHandler}
//         />
//         <label htmlFor="new-post-desc">Description:</label>
//         <textarea
//           id="new-post-desc"
//           type="text"
//           rows="6"
//           required
//           value={description}
//           onChange={descChangeHandler}
//         />
//         <label htmlFor="new-post-price">Price ($):</label>
//         <input
//           id="new-post-price"
//           type="number"
//           required
//           value={price}
//           onChange={priceChangeHandler}
//         />
//         <label htmlFor="new-post-location">Location:</label>
//         <input
//           id="new-post-location"
//           type="text"
//           required
//           value={location}
//           onChange={locationChangeHandler}
//         />
//         <label htmlFor="new-post-deliver">Is Deliverable:</label>
//         <input
//           id="new-post-deliver"
//           type="checkbox"
//           value={willDeliver}
//           onChange={deliverChangeHandler}
//         />
//         <button type="submit" className="primary">
//           Create Post
//         </button>
//       </form>
//     </section>
// );
// };

// export default PostForm;