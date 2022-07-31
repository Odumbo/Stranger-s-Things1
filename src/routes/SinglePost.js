  import { useParams } from "react-router-dom";
  
  const SinglePost = ({token}) => {
    const { postId } = useParams ();
    console.log(postId);
    console.log(token);
    fetch(`https://strangers-things.herokuapp.com/api/2202-ftb-pt-web-pt/posts/${postId}/messages`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        message: {
          content: "Do you still have this?  Would you take $10 less?"
        }
      })
    }).then(response => response.json())
      .then(result => {
        console.log(result);
      })
      .catch(console.error);

return (
  <main>
    <h2>Single Post</h2>
    <tr>
      <th>Golden Retriever puppies</th>
      <th>Free</th>
      <th>Jane 1234</th>
    </tr>
  </main>
)
}
export default SinglePost;



