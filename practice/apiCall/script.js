


const URL = "https://jsonplaceholder.typicode.com/users";

const getData = async () => {


    console.log("GetData .........")
  let res = await fetch(URL);

  console.log(res);

  let data = await res.json()

  console.log(data)
};


