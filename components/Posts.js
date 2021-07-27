import Post from "./Post"

const realtimePosts = [
    {   
        name: "Bill Gates",
        message: "Hello 1",
        email: "bill.gates@outlook.com",
        image: "https://links.papareact.com/zvy",
        timestamp: "2021-07-27",
        
    },
    {   
        name: "Bill Gates",
        message: "Hello 1",
        email: "bill.gates@outlook.com",
        image: "https://links.papareact.com/zvy",
        timestamp: "2021-07-27",
        
    },
    {   
        name: "Bill Gates",
        message: "Hello 1",
        email: "bill.gates@outlook.com",
        image: "https://links.papareact.com/zvy",
        timestamp: "2021-07-27",
        
    },
    {   
        name: "Bill Gates",
        message: "Hello 1",
        email: "bill.gates@outlook.com",
        image: "https://links.papareact.com/zvy",
        timestamp: "2021-07-27",
        
    }
]

function Posts(){

    return(
        <div>
            {realtimePosts.map((post,id) => (
                <Post
                    key={id}
                    name={post.name}
                    message={post.message}
                    email={post.email}
                    timestamp={post.timestamp}
                    image={post.image}
                    
                />
            ))}
        </div>
    )
}

export default Posts