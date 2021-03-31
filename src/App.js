import { Component } from "react";
import "./App.css";
//todo: затягиваю hook.
import { connect } from "react-redux";
import addUserAction from "./redux/actions/userActions";
//todo: Второе дз Phone book

import Form from "./components/Form/Form";
import Filter from "./components/Filter/Filter";
import ContactList from "./components/Filter/ContactList/ContactList";
class App extends Component {
  // state = {
  //   contacts: [
  //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  //   ],
  //   filter: "",
  // };
  // componentDidMount() {
  //   // const { allUsers } = this.props;
  //   // this.setState({ contacts: [...allUsers] });

  //   const persistedData = JSON.parse(localStorage.getItem("clientContact"));
  //   console.log(persistedData);
  //   if (persistedData) {
  //     this.setState(() => ({ contacts: [...persistedData] }));
  //     return;
  //   }
  // }
  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   const { contacts } = this.state;
  //   const { user, allUsers } = this.props;

  //   if (user !== prevProps.user || allUsers !== prevProps.allUsers) {
  //     this.setState({ contacts: [...allUsers] });
  //   }
  //   if (contacts !== prevState.contacts) {
  //     localStorage.setItem("clientContact", JSON.stringify(contacts));
  //   }
  // }

  // changeFilter = (e) => {
  //   this.setState({ filter: e.currentTarget.value });
  // };
  // getVisibleContac = () => {
  //   const { filter, contacts } = this.state;
  //   const normalized = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(normalized)
  //   );
  // };

  // alert = () => {
  //   const search = this.state.contacts.flatMap((el) => el.name);
  //   console.log(search);
  //   const res = search.filter((item, idx) => search.indexOf(item) === idx);
  //   alert(res);
  // };
  render() {
    // const { filter } = this.state;
    // const visibleContact = this.getVisibleContac();

    return (
      <div className="App">
        <div>
          <h1>Phonebook</h1>
          <Form />
          <h2>Contacts</h2>
          {/* <Filter value={filter} onChange={this.changeFilter} /> */}
          <ContactList />
        </div>
      </div>
    );
  }
}

export default App;
