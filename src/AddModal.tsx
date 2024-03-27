import React, {useState} from "react";
import {PostType} from "./App.tsx";

type Props = {
  openAddModal: boolean;
  setOpenAddModal: (open: boolean) => void;
  setPosts: React.Dispatch<React.SetStateAction<PostType[] | null>>;
}

const AddModal = (props: Props) => {

  const [title, setTitle]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('');

  const [content, setContent]: [string, React.Dispatch<React.SetStateAction<string>>] = useState<string>('');

  const handleSubmit = async () => {
    const newPost: PostType = {
      title: title,
      content: content
    }

    if (props.setPosts) {
      props.setPosts((prevPosts: PostType[] | null): PostType[] => {
        localStorage.setItem('posts', JSON.stringify(prevPosts ? [...prevPosts, newPost] : [newPost]));
        return prevPosts ? [...prevPosts, newPost] : [newPost];
      });
    }

    setTitle('');
    setContent('');
    props.setOpenAddModal(false);
  }

  return (
    props.openAddModal ? (
      <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10'>
        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded-md shadow-lg z-10'>
          <h1>
            TODOを追加する
          </h1>

          <input
            type='text'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='w-full border-2 border-gray-300 rounded-md p-2 mt-2'
          />

          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className='w-full border-2 border-gray-300 rounded-md p-2 mt-2'
          />

          <button
            onClick={handleSubmit}
            className='bg-blue-500 hover:bg-blue-700 text-white px-2 py-1 rounded-md transition-colors duration-200 mt-2'
          >
            追加
          </button>
        </div>
      </div>
    )
    : <></>
  )
}

export default AddModal;
