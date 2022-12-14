import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsArr = props.posts.map( el => <Post message={el.message} count={el.likesCount} key={el.id}/>)
    let newPostElement = React.createRef();

    let onAddPost =()=> {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }

    return (
        <div className={s.postBlock}>
           <h3>My posts</h3>
            <div>
                <div><textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/></div>

                <div><button onClick={onAddPost}>Add post</button></div>

            </div>
            <div className={s.posts}>
                {postsArr}
            </div>
        </div>
    )

}

export default MyPosts;