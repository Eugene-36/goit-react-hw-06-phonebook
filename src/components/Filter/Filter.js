import React from "react";
import filterUser from "../../redux/actions/filterUser";
import { connect } from "react-redux";
//console.log(filterUser);
// console.log(this.props);
//console.log(this.props);
const Filter = (props) => {
  console.log(props);
  const { value, onChange } = props;
  return (
    <label>
      Find contacts by name
      <input type="text" vlaue={value} onChange={onChange} />
    </label>
  );
};
const mapStateToProps = (state) => ({ value: state.allUsers.filter });

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(filterUser.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
