    
import React from "react";
import BookDetail from './BookDetail';

function BookDisplayDiv(props) {
  if (props.results.length > 0) {
    console.log(props.results[8].volumeInfo.hasOwnProperty('imageLinks'));
  }
  return (
    <ul>
      {props.results.map(result => (
        <BookDetail
          className="BookDetailst-group-item"
          key={result.id}
          title={result.volumeInfo.title}
          subtitle={result.volumeInfo.subtitle}
          authors={result.volumeInfo.hasOwnProperty('authors') ? result.volumeInfo.authors : []}
          image={result.volumeInfo.hasOwnProperty('imageLinks') ? result.volumeInfo.imageLinks.smallThumbnail : ""}
          description={result.volumeInfo.description}
        />
      ))}
    </ul>
  )
}

export default BookDisplayDiv;