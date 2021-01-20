import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import AddTask from "./AddTask";
// import TaskList from './TaskList';
import FixedNavBar from "./FixedNavbar";
import Fulllist from "./Fulllist";
import * as Icon from "react-feather";


export default class List extends Component {
  state = {
    list: null,
    error: "something is wrong",
    title: "",
    description: "",
    editForm: false,
    taskForm: false,
    addTask: "",
    lists: [],
  };
  deleteList = (id) => {
    console.log("deleting");
    // const id = this.props.match.params.id;
    let filteredTasks = this.state.lists.filter((elem) => {
      if (elem._id == id) {
        return false;
      }
      return true;
    });
    axios.delete(`/api/lists/${id}`).then(() => {
      this.props.history.push("/lists");
      this.setState({
        lists: filteredTasks,
      });
    });
  };
  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
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
      .post(`/api/lists/`, {
        title: this.state.title,
        description: this.state.description,
      })
      .then((response) => {
        this.setState({
          list: response.data,
          title: "",
          description: "",
          editForm: false,
        });
        this.getData();
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
      .get(`/api/lists`)
      .then((response) => {
        console.log(response.data);
        this.setState({
          lists: response.data,
          // list: response.data,
          // title: response.data.title,
          // description: response.data.description,
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
    console.log(this.state.lists);
    return (
      <div className="container list-background">
      <div className="row list-background">
      <div className="task-page col-sm list-background" >
      <div className="top-bar">
        <span className="add-task" onClick={this.handleSubmit}>
          <Icon.Plus style={{ fill: "lightgray", stroke: "lightgray" }} size={50} />
        </span>
        <Form className="star" onSubmit={this.handleSubmit}>
          <Form.Group className="input-field flex star sky">
            <Form.Control
              className="moon"
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              id="title"
              placeholder="New task"
            />
          </Form.Group>
         
         
        </Form>
        </div>
        <Fulllist
          className="star moon"
          deleteList={this.deleteList}
          lists={this.state.lists}
        />  
      </div>
      </div>
      </div>
    );
  }
}
