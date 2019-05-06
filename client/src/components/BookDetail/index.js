import React from "react";
import './style.css';

function BookDetail(props) {
  return (
    <li className="book-detail-box">
      <h5>{props.title}</h5>
      <h5>{props.subtitle}</h5>
      {props.authors.length > 0 ? <p>Written by {props.authors.map(author => (<span>{author}</span>))}</p> : null}
      <img src={props.image} />
      <p>{props.description}</p>
    </li>
  );
}

export default BookDetail;