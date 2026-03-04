console.log("api_CRUD.JS loaded");
// async function getData() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    
//     if (!response.status === 200) {
//       throw new Error('Network response was not ok');
//     }

//     const data = await response.json();
//     console.log(data);
//     return data;

//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

const url = 'https://jsonplaceholder.typicode.com/posts';

const url2 = 'https://jsonplaceholder.typicode.com/posts/1';

const newpost = async(dataurl)=> {
    try{
        const response = await fetch (dataurl)
        if (!response.status === 200) {
            console.log("response not ok")
        }
        const data = await response.json()
        console.log(data);
        return data;
        
    }
    catch(error){
 console.log("response not ok")
    }
}

console.log(newpost(url));
console.log("-------------");
console.log(newpost(url2));
