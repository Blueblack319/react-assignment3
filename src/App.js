import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Users = lazy(() => import("./containers/Users/Users"));
const Courses = lazy(() => import("./containers/Courses/Courses"));

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <ol style={{ textAlign: "left" }}>
            <li>
              Add Routes to load "Users" and "Courses" on different pages (by
              entering a URL, without Links)
            </li>
            <li>
              Add a simple navigation with two links => One leading to "Users",
              one leading to "Courses"
            </li>
            <li>
              Make the courses in "Courses" clickable by adding a link and load
              the "Course" component in the place of "Courses" (without passing
              any data for now)
            </li>
            <li>Pass the course ID to the "Course" page and output it there</li>
            <li>
              Pass the course title to the "Course" page - pass it as a param or
              score bonus points by passing it as query params (you need to
              manually parse them though!)
            </li>
            <li>
              Load the "Course" component as a nested component of "Courses"
            </li>
            <li>Add a 404 error page and render it for any unknown routes</li>
            <li>
              Redirect requests to /all-courses to /courses (=> Your "Courses"
              page)
            </li>
          </ol>
          <hr />
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/users" exact component={Users} />
            <Route path="/courses" exact component={Courses} />
          </Suspense>
        </div>
      </Router>
    );
  }
}

export default App;
