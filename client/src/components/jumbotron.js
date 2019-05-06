import React from "react";

const styles = {
    background: {
      backgroundColor: "#4285F4",
      padding: "1em"
    }
  }

function Jumbotron() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid text-center"style={styles.background}>
        <div className="container">
          <h1 className="display-4">Google Books Search</h1>
          <p className="lead">Search for and Save Books of Interest</p>
        </div>
      </div>
    </div>
  )
}

export default Jumbotron;