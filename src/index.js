import React from 'react';
import { render } from 'react-dom';
import ContactList from './components/contactList.jsx';

class Hello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {contacts: []};
  }

  componentDidMount() {
    console.log("Entered componentDidMount");
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }

 render() {

//JSX code in return function

  return (
       <div>
        <ContactList contacts={this.state.contacts} />
          <h1>Hello World!!!!!</h1>

          <ul>
          {this.state.contacts.map(item => (
            <li key={item.name}>
              {item.username} {item.email}
            </li>
          ))}
        </ul>

       </div>

    );

 }

}

render(<Hello/>, document.getElementById('create-article-form'));
