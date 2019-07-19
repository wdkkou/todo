import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { add } from '../actions/actions';
import Form from '../components/Form';
import { TodoState } from '../reducer';

interface StateProps {
  todos: TodoState[];
}
interface DispatchProps {
  add: (text: string, description: string) => void;
}

const mapStateToProps = (state: TodoState[]): StateProps => ({
  todos: state,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: (text, description) => dispatch(add(text, description)),
});

export default connect(
  // mapStateToPropsがないと，繋いだcomponentのFormでdispatchがないと怒られる
  mapStateToProps,
  mapDispatchToProps,
)(Form);
