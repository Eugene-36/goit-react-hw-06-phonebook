import { Component } from "react";
import shortid from "shortid";
import s from "./Form.module.css";
import { v4 as unId } from "uuid";
class Form extends Component {
  loginInputId = shortid.generate();
  numberInputId = shortid.generate();
  objId = shortid.generate();
  state = {
    name: "",
    number: "",
    id: "",
  };
  handleChange = (event) => {
    // console.log(event.currentTarget);
    // console.log(event.currentTarget.name);
    // console.log(event.currentTarget.value);

    this.setState({
      id: unId(),
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={this.loginInputId}>
          <input
            placeholder="Name"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
            id={this.loginInputId}
          />
        </label>

        <label htmlFor={this.numberInputId}>
          <br />

          <input
            placeholder="Number"
            name="number"
            type="text"
            value={this.state.number}
            onChange={this.handleChange}
            id={this.numberInputId}
          />
        </label>
        <br />

        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;
