import { useEffect, useState } from 'react'
import './App.css'
import type { ReactNode } from 'react';

type Post={
  userId: number;
  id: number;
  title: string;
  body: string;
};

function ShowData({children}:{children: ReactNode}){
  return (
    <section>
      {children}
    </section>
  );
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status,setStatus]=useState(false);
  const [second,setSeconds]=useState(10);

  useEffect(()=>{
    const timerId = setInterval(()=>{
      setSeconds((current)=>Math.max(current-1,0));
    },1000);
    return ()=>{
      clearInterval(timerId);
    }
  },[]);

  useEffect(()=>{
    const controller= new AbortController();
    try{
      async function loadPost(){
        setStatus(true);
        const result = await fetch( "https://jsonplaceholder.typicode.com/posts?_limit=5",{signal:controller.signal})
        const response : Post[]=await result.json();
        setPosts(response);
        setStatus(false);
      }
      loadPost();
    }catch (error){
      console.error(error);
    }finally{
      setStatus(false);
    }
    return ()=>{
      controller.abort();
    }
    
  },[]);

  return (
    <>
      <div>
        <h1>useEffect</h1>
        <h1>{second}</h1>
        <article>
          {posts.map((post)=>(
            <ShowData key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </ShowData>
          ))}
        </article>
      </div>    
    </>
  )
}

export default App
