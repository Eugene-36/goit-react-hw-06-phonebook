import React, { Component } from "react";
//import React from "react";
import filterUser from "../../redux/actions/filterUser";
import { connect } from "react-redux";
//console.log(filterUser);
// console.log(this.props);
//console.log(this.props);
class Filter extends Component {
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <label>
          Find contacts by name
          <input type="text" name="filter" value={value} onChange={onChange} />
        </label>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({ value: state.allUsers.filter });

const mapDispatchToProps = (dispatch) => ({
  onChange: (e) => dispatch(filterUser.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
