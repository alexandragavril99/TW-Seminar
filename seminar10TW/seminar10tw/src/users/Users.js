import React, { Component } from "react";
import User from "./User";

class Users extends Component {
  // datele de tip state sunt declarate in int comp resp si pot fi modificate doar de acea componenta (comp intern)
  // datele de tip props sunt modalitatea prin care comp comunica intre ele si definesc un comp extern
  // definim state-ul intr-un constructor si tb apelat si super - constr clasei component
  constructor() {
    super();
    console.log("Constructor...");
    this.state = {
      users: [
        { name: "Jill", age: 35 },
        { name: "Ana", age: 45 },
        { name: "John", age: 25 },
      ],
      title: "Users List",
      count: 0,
      showList: true,
      //vrem sa afisam lista de utiliz cu titlul
    };
    this.makeUsersYounger = this.makeUsersYounger.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }

  componentDidMount() {
    console.log("Component mounted...");
  }

  componentWillUnmount() {
    console.log("Component unmounted...");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.users !== this.state.user) {
      ///
    }
    console.log("Component updated...");
  }

  toggleList() {
    this.setState((prevState) => ({
      ...prevState,
      showList: !prevState.showList,
    }));
  }

  makeUsersYounger() {
    const newUsers = JSON.parse(JSON.stringify(this.state.users));
    newUsers.forEach((user) => ({ ...user, age: (user.age -= 10) }));
    //this.state.users=newUsers; -NU se face asa, se face printr-o metoda numita setstate
    // this.setState((prevState) => ({
    //   ...prevState,
    //   count: prevState.count + 1,
    // }));
    // this.setState((prevState) => ({
    //   ...prevState,
    //   count: prevState.count + 1,
    // }));
    // this.setState((prevState) => ({
    //   ...prevState,
    //   count: prevState.count + 1,
    // }));
    //this.setState({ count: this.state.count + 1 });
    //this.setState({ count: this.state.count + 1 });
    //this.setState({ count: this.state.count + 1 });
    //console.log(this.state.count);

    this.setState((prevState) => ({
      ...prevState,
      users: newUsers,
      title: "Users are now younger!",
    }));
  }

  render() {
    //rescrierea lui render!
    console.log("Rendering...");
    return (
      //JSX permite si html si js in acelasi fisier, codul js tb cuprins intre paranteze
      //folosim map ca sa trecem prin vector in loc sa le scriem separat
      <div>
        <h1>{this.state.title}</h1>
        <br></br>
        <button onClick={this.toggleList} style={{ backgroundColor: "blue" }}>
          Toggle list
        </button>
        <button onClick={this.makeUsersYounger}>Make users younger</button>
        {/* {true && false} */}
        {this.state.showList &&
          this.state.users.map((user, index) => {
            return <User name={user.name} age={user.age} key={index}></User>;
          })}
      </div>
    );
  }
}

export default Users;
