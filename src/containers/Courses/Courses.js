import React, { Component, lazy } from "react";

import { NavLink, Route } from "react-router-dom";

import "./Courses.css";

const Course = lazy(() => import("../../components/Course/Course"));

class Courses extends Component {
  state = {
    courses: [
      { id: 1, title: "Angular - The Complete Guide" },
      { id: 2, title: "Vue - The Complete Guide" },
      { id: 3, title: "PWA - The Complete Guide" },
    ],
  };

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className="Courses">
          {this.state.courses.map((course) => {
            return (
              <NavLink to={this.props.match.url + "/course"}>
                <article className="Course" key={course.id}>
                  {course.title}
                </article>
              </NavLink>
            );
          })}
        </section>
        <section>
          <Route
            path={this.props.match.url + "/course"}
            exact
            component={Course}
          />
        </section>
      </div>
    );
  }
}

export default Courses;
