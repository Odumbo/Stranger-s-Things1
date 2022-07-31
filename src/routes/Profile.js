import { useEffect } from "react";
import { Navigate, useNavigate  } from "react-router-dom";

const Profile = ({token}) => {
  let navigate = useNavigate();
  useEffect(() => {

fetch ('https://strangers-things.herokuapp.com/api/2202-FTB-PT-WEB-PT/users/me',{
headers: {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${token}`
},
}).then(response => response.json())
.then(result => {
  console.log(result);
  if (!result.success){
    navigate('../login', {replace: true})
  }
})
.catch(console.error);

  },[])
  return (
    <main>
      <h2>Profile</h2>
      <tr>
      <th>Name: Jane</th>
      <th>Location: Florida</th>
      <th>Interests: Looking for retro cookware</th>
      </tr>
  
    </main>
  )
}

export default Profile;