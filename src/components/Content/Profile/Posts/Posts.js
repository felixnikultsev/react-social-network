import React from 'react';
import styles from './Posts.module.css';
import Post from './Post/Post';
import { Field, reduxForm } from 'redux-form';
import FormControl from '../../../common/FormControl/FormControl';
import { required, maxLength } from '../../../../utils/validators/validators';

const maxLength20 = maxLength(20);

const PostsForm = ({ handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="newPostText"
                className={styles.posts__textarea}
                validate={[required, maxLength20]}
                elem="textarea"
                placeholder="Write your thoughts..."
                component={FormControl}></Field>
            <button className={`button ${styles.posts__button}`}>Send</button>
        </form>
    );
};

const PostsReduxForm = reduxForm({ form: 'post' })(PostsForm);

const Posts = React.memo(({ posts, addPost }) => {
    let postsElements = posts.map((post) => (
        <Post text={post.text} likesCount={post.likesCount} key={post.id} />
    ));

    const onSubmit = (data) => {
        addPost(data.newPostText);
    };

    return (
        <div className={styles.posts}>
            <h3 className={styles.posts__title}>Your Posts</h3>
            <PostsReduxForm onSubmit={onSubmit} />
            <div className={styles['posts-block']}>{postsElements}</div>
        </div>
    );
});

export default Posts;
