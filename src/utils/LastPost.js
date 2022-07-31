const url = 'https://strangers-things.herokuapp.com/api/2202-FTB-PT-WEB-PT';

export const createPost = async (token, postObj) => {
    const response = await fetch(`${url}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ post: postObj }),
    });
    const result = await response.json();
    return result;
  };