import axios from "axios";

async function getData(user_id) {
  try {
    const { data: user } = await axios(
      "https://jsonplaceholder.typicode.com/users/" + user_id
    );

    const { data: posts } = await axios(
      "https://jsonplaceholder.typicode.com/posts?userId=" + user_id
    );

    const lastData = { ...user, posts };
    return lastData;
  } catch (e) {
    console.log(e);
  }
}

export default getData;
