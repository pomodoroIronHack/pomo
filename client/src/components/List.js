import React, { Component } from "react";
import axios from "axios";
import { Button } from 'react-bootstrap';
// import List from './List';
import AddTask from './AddTask';
// import TaskList from './TaskList';

export default class List extends Component {

  state = {
    list: null,
    error: "something is wrong",
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
    console.log("STAAAAATE", this.state);
    
    return (
      <div>

      <h1>hello</h1>
        
      </div>
    );
  }
}

// if (this.state.error) return <div>{this.state.error}</div>;
    // if (!this.state.list) return (<></>)

    // let allowedToDelete = false;
    // const user = this.props.user;
    // const owner = this.state.list.owner;
    // if (user && user._id === owner) allowedToDelete = true;