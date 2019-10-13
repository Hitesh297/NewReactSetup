import React from 'react';
import { render } from 'react-dom';

export default class ContactList extends React.Component{

  constructor(props) {
    super(props);
    console.log("props",props.contacts);
  }

render(){

  return(
    <div>
    ContactList
    </div>
  );
}
}
