import React from 'react';
import styles from './Post.module.css';

function Post({ text, likesCount }) {
    return (
        <div className={styles['posts-item']}>
            <img
                src="https://i.pinimg.com/236x/2f/8c/ff/2f8cffcfd465c769a1c2f6e591d56eae.jpg"
                alt="Avatar"
                className={styles['posts-item__image']}
            />
            <p className={styles['posts-item__text']}>
                {text}
                <span className={styles['posts-item__likes']}>Likes: {likesCount}</span>
            </p>
        </div>
    );
}

export default Post;
