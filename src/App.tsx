import Header from "./Header.tsx";
import React, {useEffect, useState} from "react";
import AddModal from "./AddModal.tsx";
import Posts from "./Posts.tsx";

export type PostType = {
  title: string;
  content: string;
}

function App() {

  const [openAddModal, setOpenAddModal]: [boolean, React.Dispatch<React.SetStateAction<boolean>>] = useState(false);

  const [posts, setPosts]: [PostType[] | null, React.Dispatch<React.SetStateAction<PostType[] | null>>] = useState<PostType[] | null>(null);

  useEffect(() => {
    const posts: string | null = localStorage.getItem('posts');
    if (!posts) {
      return ;
    }

    setPosts(JSON.parse(posts));
  }, []);

  return (
    <main>
      <Header
        openAddModal={openAddModal}
        setOpenAddModal={setOpenAddModal}
      />

      <AddModal
        openAddModal={openAddModal}
        setOpenAddModal={setOpenAddModal}
        setPosts={setPosts}
      />
      
      <Posts
        posts={posts}
        setPosts={setPosts}
      />
    </main>
  )
}

export default App
