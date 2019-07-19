import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { dele } from '../actions/actions';
import Todolist from '../components/Todolist';
import { TodoState } from '../reducer';

interface StateProps {
  todos: TodoState[];
}
interface DispatchProps {
  dele: (id: number) => void;
}

const mapStateToProps = (state: TodoState[]): StateProps => ({
  todos: state,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  dele: id => dispatch(dele(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Todolist);
