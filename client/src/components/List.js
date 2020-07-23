import React, { Component } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
// import List from './List';
import AddTask from './AddTask';
// import TaskList from './TaskList';

export default class List extends Component {

  state = {
    list: null,
    error: null,
    title: '',
    description: '',
    editForm: false,
    taskForm: false
  }

  deleteList = () => {
    const id = this.props.match.params.id;
    axios.delete(`/api/lists/${id}`)
      .then(() => {
        this.props.history.push('/lists');
      })
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  toggleTaskForm = () => {
    this.setState({
      taskForm: !this.state.taskForm
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    const id = this.props.match.params.id;
    axios.put(`/api/lists/${id}`, {
      title: this.state.title,
      description: this.state.description
    })
      .then(response => {
        this.setState({
          list: response.data,
          title: response.data.title,
          description: response.data.description,
          editForm: false
        })
      })
      .catch(err => {
        console.log(err);
      })
  }

  toggleEditForm = () => {
    this.setState({
      editForm: !this.state.editForm
    })
  }

  getData = () => {
    const id = this.props.match.params.id;
    axios
      .get(`/api/lists/${id}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          list: response.data,
          title: response.data.title,
          description: response.data.description
        });
      })
      .catch(err => {
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
    if (this.state.error) return <div>{this.state.error}</div>;
    if (!this.state.list) return (<></>)

    let allowedToDelete = false;
    const user = this.props.user;
    const owner = this.state.list.owner;
    if (user && user._id === owner) allowedToDelete = true;
    return (
      <div>
        <h1>{this.state.list.title}</h1>
        <p>{this.state.list.description}</p>

        {allowedToDelete && (
          <Button variant='danger' onClick={this.deleteList}>Delete List</Button>
        )}

        <Button onClick={this.toggleEditForm}>Show Edit Form</Button>
        <Button onClick={this.toggleTaskForm}>Show Task Form</Button>
        {this.state.editForm && (
          <List
            {...this.state}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          />
        )}
        {this.state.taskForm && (
          <AddTask
            listId={this.state.list._id}
            getData={this.getData}
            hideForm={() => this.setState({ taskForm: false })}
          />
        )}
        {/* <TaskList tasks={this.state.list.tasks} /> */}
      </div>
    );
  }
}