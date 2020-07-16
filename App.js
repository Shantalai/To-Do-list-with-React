import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    users:[
      {id: 'hd1', userName: 'not Ana'},
      {id: 'we1', userName: 'not Mike'},
      {id: 'z1', userName: 'not Oly'}
    ],
    showUsers: false
  }

  switchNameHandler = (newUserName) => {
    // NOT CORRECT: this.state.users[0] = "Ana Ana Ana!";
    this.setState({
      users: [
        {userName: 'Ana Ana Ana!'},
        {userName: newUserName},
        {userName: 'Oly Oly!'}
      ]
    });
  }

  onChangeHandler = (event) => {
    const userIndex = this.state.users.findIndex(p => {return p.id === id});

    const user = { ...this.state.users[userIndex]};

    user.userName = event.target.value;

    const users = [...this.state.users];
    users[userIndex] = user;

    this.setState({users: users});
  }

  toggleHandler = () => {
    const doesShow = this.state.showUsers;
    this.setState({showUsers: !doesShow});
    
  }

  deleteUserHandler = (userIndex) => {
    //const users = this.state.users.splice();
    const users = [...this.state.users];
    users.splice(userIndex, 1); 
    this.setState({users: users});
  }

  render() {

    let users = null;

    if(this.state.showUsers) {
      users = (
        <div>
          {this.state.users.map((user, index) => {
            return  <UserOutput
                click={() => this.deleteUserHandler(index)}
                change={(event) => this.onChangeHandler(event, user.id)}
                userName={user.userName}
                key={user.id}/>
           
          })}
           
      </div>
      );
    }
    return (
      <div className="App">
        <ol>
          <li>Create TWO new components: UserInput and UserOutput</li>
          <li>UserInput should hold an input element, UserOutput two paragraphs</li>
          <li>Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
          <li>Pass a username (of your choice) to UserOutput via props and display it there</li>
          <li>Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
          <li>Add a method to manipulate the state (=> an event-handler method)</li>
          <li>Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
          <li>Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
          <li>Add two-way-binding to your input (in UserInput) to also display the starting username</li>
          <li>Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
        </ol>
      <button onClick={this.switchNameHandler.bind(this, 'MM')}>Switch user name</button>
      <button onClick={this.toggleHandler}>Show user</button>
      {users}
      </div>
    );
  }
}

export default App;
/*
<UserOutput userName={this.state.users[0].userName}
                       click={this.switchNameHandler.bind(this, 'mykeye')}/>
           <UserInput change={this.onChangeHandler} />
           <UserOutput userName={this.state.users[1].userName}/>
           <UserInput change={this.onChangeHandler} />
           <UserOutput userName={this.state.users[2].userName}/>
           <UserInput change={this.onChangeHandler} />
*/
