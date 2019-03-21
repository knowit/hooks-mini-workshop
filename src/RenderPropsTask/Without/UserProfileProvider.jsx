import { Component } from "react";
import { fetchUser } from "../../server/mockApi";

export default class UserProfileProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined,
      isLoading: true
    };
  }

  componentDidMount() {
    fetchUser(this.props.id).then(user =>
      this.setState({ user, isLoading: false })
    );
  }

  componentDidUpdate(prevProps) {
    if (this.props.id !== prevProps.id) {
      this.setState({ isLoading: true });
      fetchUser(this.props.id).then(user =>
        this.setState({ user, isLoading: false })
      );
    }
  }

  render() {
    return this.props.children(this.state.user, this.state.isLoading);
  }
}
