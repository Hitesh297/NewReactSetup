   import React from 'react';
import { render } from 'react-dom';

class Hello extends React.Component {

  state = {
          contacts: []
        }

  componentDidMount() {
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

          <h1>Hello World!</h1>

       </div>

    );

 }

}

render(<Hello/>, document.getElementById('app'));
