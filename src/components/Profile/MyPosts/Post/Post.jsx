import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src='https://author.today/content/2020/02/29/5f7d802fc35d4cbdacea7161f5f45212.jpg' />
        {props.message}
          <div>
        <span>like {props.count}</span>
      </div>
    </div>
  )

}

export default Post;