import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
    show: false,
    person: {
      fullName: "Ahmed Ben Abdallah",
      bio: "on reve toujours des visages que l'on a deja vue",
      imgSrc: "",
      profession: "Etudiant",
    },
  };
  handleShow = () => {
    this.setState({
      show: !this.state.show,
    });
  };

  componentDidMount() {
    setInterval(() => {
      let count = this.state.count;
      this.setState({ count: count + 1 });
    }, 1000);
  }
  render() {
    return (
      <div>
        <div
          style={this.state.show ? { display: "block" } : { display: "none" }}
        >
          <h2>{this.state.person.fullName}</h2>
          <h3>{this.state.person.bio}</h3>
          <h2>{this.state.person.profession}</h2>
          <p>count:{this.state.count}</p>
        </div>
        <button onClick={this.handleShow}>Show</button>
      </div>
    );
  }
}
