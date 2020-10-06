import Posts from './Posts';
import { addPost } from '../../../../redux/profile-reducer';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {
        posts: state.profile.posts
    }
}

const PostsContainer = connect(mapStateToProps, {
    addPost
})(Posts)

export default PostsContainer;