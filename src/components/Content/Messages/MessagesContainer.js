import Messages from './Messages';
import { sendMessage } from './../../../redux/messages-reducer';
import { connect } from 'react-redux';
import withAuthRedirect from '../../../hoc/withAuthRedirect';
import { compose } from 'redux';
 
const mapStateToProps = state => {
    return {
        dialogs: state.messages.dialogs,
        messages: state.messages.messages,
    }
}

export default compose(
    connect(mapStateToProps, {sendMessage}),
    withAuthRedirect
)(Messages)