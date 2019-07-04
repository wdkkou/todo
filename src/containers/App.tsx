import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { add, dele } from '../actions/actions';
import { TodosState } from '../reducer';
import Form from '../components/Form';
import Todolist from '../components/Todolist';

interface StateProps {
  todos: TodosState;
}
interface DispatchProps {
  add: (text: string) => void;
  dele: (id: number) => void;
}

const mapStateToProps = (state: TodosState): StateProps => ({
  todos: state,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: text => dispatch(add(text)),
  dele: id => dispatch(dele(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Form);
