import React, { Component } from "react";

// import queryString from "query-string";

class Course extends Component {
  render() {
    // const parsed = queryString.parse(this.props.location.search);
    // console.log(this.props.location.search);
    // console.log(parsed.title);
    // const title = parsed.title;
    const search = this.props.location.search;
    const params = new URLSearchParams(search);
    const title = params.get("title");

    return (
      <div>
        <h1>{title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
