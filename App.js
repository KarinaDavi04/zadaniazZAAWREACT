import React, { useState} from 'react';
import './App.css';
import MyButton from "./MyButton";
import MyInput from "./MyInput";
import PostForm from "./PostForm";
import PostList from "./PostList";
import PostItem from "./PostItem";

function App() {/* wyświetla początkowe elementy,któtze będą zawsze */
  const [posts, setPosts]=useState([
      {id: 1, title: 'Zrobić project z ZAAW', body:'Wykonano'},
      {id: 2, title: 'Zrobić zadania z matematyki', body:'Nie wykonano'},
      {id: 3, title: 'Przygotować się do egzaminy pizemnego', body:'Nie wykonano'},
  ])

  const createPost = (newPost) => {/* do tworzenia nowych elementów z listy */
      setPosts([...posts, newPost])
  }

  const removePost = (post) => {/* do usuwania elementów z listy */
      setPosts(posts.filter(p => p.id !== post.id))
  }

  return(
      <div className="App">
          <PostForm create={createPost}/>
          <PostList remove={removePost} posts={posts} title="Lista zadań"/>
      </div>
  )
}

export default App;