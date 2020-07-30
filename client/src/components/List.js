import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
// import List from './List';
import AddTask from "./AddTask";
// import TaskList from './TaskList';
import FixedNavBar from "./FixedNavbar";

export default class List extends Component {
  state = {
    list: null,
    error: "something is wrong",
    title: "",
    description: "",
    editForm: false,
    taskForm: false,
    addTask: "",
  };

  deleteList = () => {
    const id = this.props.match.params.id;
    axios.delete(`/api/lists/${id}`).then(() => {
      this.props.history.push("/lists");
    });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    console.log("hello", name, value);
    this.setState({
      [name]: value,
    });
    console.log("this is the state", this.state);
  };

  toggleTaskForm = () => {
    this.setState({
      taskForm: !this.state.taskForm,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios
      .post(`http://localhost:5555/api/lists/`, {
        title: this.state.title,
        // description: this.state.description,
      })
      .then((response) => {
        this.setState({
          list: response.data,
          title: response.data.title,
          description: response.data.description,
          editForm: false,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  toggleEditForm = () => {
    this.setState({
      editForm: !this.state.editForm,
    });
  };

  getData = () => {
    const id = this.props.match.params.id;
    axios
      .get(`/api/lists/${id}`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          list: response.data,
          title: response.data.title,
          description: response.data.description,
        });
      })
      .catch((err) => {
        console.log(err.response);
        // handle err.response depending on err.response.status
        if (err.response.status === 404) {
          this.setState({ error: "Not found" });
        }
      });
  };

  componentDidMount = () => {
    this.getData();
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="input-field flex">
            <Form.Control
              className="log remove-border"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              id="addTask"
              placeholder="New task title"
            />
            <span className="add-task" onClick={this.handleSubmit}>
              &#43;
            </span>
          </Form.Group>
        </Form>

        <FixedNavBar />
      </div>
    );
  }
}

// if (this.state.error) return <div>{this.state.error}</div>;
//     if (!this.state.list) return (<></>)

//     let allowedToDelete = false;
//     const user = this.props.user;
//     const owner = this.state.list.owner;
//     if (user && user._id === owner) allowedToDelete = true;
