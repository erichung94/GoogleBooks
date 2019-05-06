import React from "react";

const styles = {
  background: {
    backgroundColor: "#DB4437",
    padding: "1em"
  }
}

function SearchDiv(props) {
  return (
    <div style={styles.background}>
      <h3>Book Search</h3>
      <form>
        <div className="form-group">
          <label for="bookInput">Book</label>
          <input
            type="text"
            className="form-control"
            id="bookInput"
            placeholder="Search for your book here..."
            onChange={props.handleInputChange}
            value={props.search}
          />
        </div>
        <button onClick={props.handleFormSubmit} type="submit" className="btn btn-primary">Search</button>
      </form>
    </div>
  )
}

export default SearchDiv;