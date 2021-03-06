import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SubmitContact from './SubmitContact';
import ContactItem from './ContactItem';
import ContactList from './ContactList';

//app component that holds the state
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          "id": 1,
          "name": "Dean Smith",
          "image_url": "",
          "phoneNumber": 3363174563,
          "email": "CoachSmith@unc.edu"
        },
        {
          "id": 2,
          "name": "Roy Williams",
          "image_url": "",
          "phoneNumber": 9305091719,
          "email": "CoachWilliams@unc.edu"
        },
      ]
    }
    this.newContact = this.newContact.bind(this);
  }
newContact(contactInfo){
  this.setState({contacts: this.state.contacts.concat([contactInfo])},() =>{
    console.log("contacts added", this.state.contacts)
  });
}
//render paths
render() {
   return (
     <BrowserRouter>
       <Switch>
         <Route exact path='/' render={() => (
           <ContactList contacts={this.state.contacts} />
         )} />
         <Route path='/new' render={(props) => (
           <SubmitContact newContact={this.newContact} contacts={this.state.contacts} {...props} />
         )} />

         <Route path='/contact/:id' render={(props) => (
           <ContactItem contacts={this.state.contacts}  {...props}/>
         )} />
         </Switch>
     </BrowserRouter>
   )
 };

};


export default App;
