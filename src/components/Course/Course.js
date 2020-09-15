import React, { Component } from "react";

// import queryString from "query-string";

class Course extends Component {
  state = {
    title: null,
  };

  componentDidMount = () => {
    this.parseQueryParams();
  };

  componentDidUpdate = (prevProps, prevState) => {
    this.parseQueryParams();
  };

  parseQueryParams = () => {
    const query = new URLSearchParams(this.props.location.search);
    for (let params of query.entries()) {
      // query.entries is collection of arrays
      if (this.state.title !== params[1]) {
        this.setState({ title: params[1] });
      }
    }
  };

  render() {
    // const parsed = queryString.parse(this.props.location.search);
    // console.log(this.props.location.search);
    // console.log(parsed.title);
    // const title = parsed.title;

    // const search = this.props.location.search;
    // const params = new URLSearchParams(search);
    // const title = params.get("title");

    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>You selected the Course with ID: {this.props.match.params.id}</p>
      </div>
    );
  }
}

export default Course;
