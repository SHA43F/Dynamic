const posts = [{title: "Post 1", body: "Body of post 1"},{title:"Post 2", body: "Body of post 2"}];
let interval = 0;
function getPost()
{
    clearInterval(interval)
    interval = setInterval(() =>
    {
        let output = '';
        posts.forEach((post) =>
        {
            output += `<li>${post.title}</li>`
        });
        document.body.innerHTML = output
    }, 1000);
}

const crePost = async (post) =>
{
    const createPost = new Promise((resolve,reject)=>{
            setTimeout(() =>{
                posts.push(post);
                const error = false;
                if(!error)
                {
                    resolve();
                }
                else
                {
                    reject("Error: Something went wrong.")
                }
            },2000);
        });
}


const delPost =  async () =>{
    const deletePost = new Promise((resolve, reject) =>{
        setTimeout(() =>{     
            if(posts.length>0)
            {
                resolve();
            }
            else
            {
                reject("Array is empty")
            }
            posts.pop();
        },1000)
    })
}


crePost({title: "Post 3", body: "Body of post 3"}).then(() =>
{
    getPost();
    delPost().then(getPost).catch(err => console.log(err))
}).catch(err => console.log(err))