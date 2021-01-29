import React from "react";
import {

} from "@material-ui/core";

export default class Fetcher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users?page=2")
      .then((res) => (res.json()))
      .then((resJson) => {
        console.log(resJson);
        this.setState({
          users: resJson.data
        })
      })
  }

  render = () => (
      <div>
        testing circle bracker in render
        <ol>
          {this.state.users.map((single) => (
            <li>
              {single.id} - {single.email}
            </li>
          ))}
        </ol>
      </div>
    )
}