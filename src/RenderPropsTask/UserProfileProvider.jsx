import { Component } from "react";
import { fetchUserFromApi } from "./server/mockApi";

// This file should be deleted. All this functionality should instead be achieved in 'useUserprofileState.js'
export default class UserProfileProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined,
      isLoading: true
    };
  }

  componentDidMount() {
    fetchUserFromApi(this.props.id).then(user =>
      this.setState({ user, isLoading: false })
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.setState({ isLoading: true });
      fetchUserFromApi(this.props.id).then(user =>
        this.setState({ user, isLoading: false })
      );
    }
  }

  render() {
    return this.props.children(this.state.user, this.state.isLoading);
  }
}
