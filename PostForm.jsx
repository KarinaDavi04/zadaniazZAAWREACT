import React, {useState} from 'react';
import MyInput from "./MyInput";
import MyButton from "./MyButton";

const PostForm = ({create}) => {
    const [post, setPost] = useState({title: '', body: ''})


    const addNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()/*nadaje każdemy elementy z listy swój id wykorzystują date i czas */
        }
        create(newPost)
        setPost({title: '', body: ''})
    }

    return (
        <form>
            <MyInput /* pierwszy input */
                value={post.title}
                onChange={e => setPost({...post, title: e.target.value})}
                type="text"
                placeholder="Co potrzebno zrobić"
            />
            <MyInput /* drugi input */
                value={post.body}
                onChange={e => setPost({...post, body: e.target.value})}
                type="text"
                placeholder="Status"
            />
            <MyButton onClick={addNewPost}>Dodać dо listy</MyButton> {/* knopka do dodawania elementów*/}
        </form>
    );
};

export default PostForm;