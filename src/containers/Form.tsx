import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { add } from '../actions/actions';
import Form from '../components/Form';
// import { TodosState } from '../reducer';

// interface StateProps {
//   todos: TodosState;
// }
interface DispatchProps {
  add: (text: string) => void;
  // dele: (id: number) => void;
}

// const mapStateToProps = (state: TodosState): StateProps => ({
//   todos: state,
// });

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  add: text => dispatch(add(text)),
  // dele: id => dispatch(dele(id)),
});

export default connect(
  // mapStateToProps,
  mapDispatchToProps,
)(Form);
