import React from 'react';

import './contact.css';

// The Contact component goes here.  It should be the default export.
export default function Contact(props) {
  return (
    <section>
      <img src={props.photo} alt={props.name}/>
      <h2>{props.name}</h2>
      <address>{props.address}</address>
    </section>
  );
}