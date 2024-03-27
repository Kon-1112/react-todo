import {PostType} from "./App.tsx";

type Props = {
 posts: PostType[] | null;
 setPosts: (posts: PostType[] | null) => void;
}

const Posts = (props: Props) => {
 return (
   <div>
     {props.posts && props.posts.map((post, index) => {
        return (
          <div key={index} className='bg-white p-4 rounded-md shadow-md mt-4'>
            <h1>
              {post.title}
            </h1>
            <p>
              {post.content}
            </p>
          </div>
        )
     })}
   </div>
 )
}

export default Posts;
