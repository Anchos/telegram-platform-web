import React from "react";
import { connect } from "react-redux";
import { closeConnection } from "../store/backend";
import { requestChannels, setChannelsFilters } from "../store/action-creators";
import "style.css";
import { socket } from "../store/backend";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      connection_status: "disconnected",
    };
    socket.subscribe(this.connectionWatcher);
  }

  connectionWatcher = message => {
    console.log(message);
    if (this.interval) clearInterval(this.interval);
    if (message.action)
      switch (message.action) {
        case "INIT":
          this.setState({ connection_status: message.expires_in });
          this.interval = setInterval(
            () => this.setState(cs => ({ connection_status: cs.connection_status - 1 || "" })),
            1000,
          );
          return;
        default:
          return;
      }
    switch (message.type) {
      case "open":
        this.setState({ connection_status: `opened socket to ${message.target.url}` });
        break;
      case "error":
        this.setState({ connection_status: "error" });
        break;
      case "close":
        this.setState({ connection_status: "closed" });
        break;
      default:
        break;
    }
  };

  componentWillUnmount() {
    clearInterval(this.interval);
    closeConnection();
  }

  changeFilter = (filter, value) => {
    const filters = this.props.main.filters;
    this.props.setFilters({
      ...filters,
      [filter]: value,
    });
  };

  render() {
    const filters = this.props.main.filters;
    const disabled =
      this.state.connection_status === "disconnected" || this.state.connection_status === "closed";
    return (
      <div style={{ display: "flex" }}>
        <div>
          <div>{this.state.connection_status}</div>
          <button onClick={socket.openSocket}>Open socket</button>
          <button onClick={this.props.initialize}>Initialize connection</button>
          <button onClick={socket.close}>Close socket</button>

          <div>
            <div>
              <div>Title</div>
              <input
                disabled={disabled}
                type="text"
                value={filters.title}
                onChange={event => this.changeFilter("title", event.target.value)}
              />
            </div>
            <div>
              <div>Category</div>
              <input
                disabled={disabled}
                type="text"
                value={filters.category}
                onChange={event => this.changeFilter("category", event.target.value)}
              />
            </div>
            <div>
              <div>Count</div>
              <input
                disabled={disabled}
                type="number"
                value={filters.count}
                onChange={event => this.changeFilter("count", +event.target.value)}
              />
            </div>
            <div>
              <div>Offset</div>
              <input
                disabled={disabled}
                type="number"
                value={filters.offset}
                onChange={event => this.changeFilter("offset", +event.target.value)}
              />
            </div>
          </div>
          <div>
            <div>Cost from</div>
            <input
              disabled={disabled}
              type="number"
              value={filters.cost[0]}
              onChange={event => this.changeFilter("cost", [+event.target.value, filters.cost[1]])}
            />
          </div>
          <div>
            <div>Cost to</div>
            <input
              disabled={disabled}
              type="number"
              value={filters.cost[1]}
              onChange={event => this.changeFilter("cost", [filters.cost[0], +event.target.value])}
            />
          </div>
          <div>
            <div>Members from</div>
            <input
              disabled={disabled}
              type="number"
              value={filters.members[0]}
              onChange={event =>
                this.changeFilter("members", [+event.target.value, filters.members[1]])
              }
            />
          </div>
          <div>
            <div>Members to</div>
            <input
              disabled={disabled}
              type="number"
              value={filters.members[1]}
              onChange={event =>
                this.changeFilter("members", [filters.members[0], +event.target.value])
              }
            />
          </div>
          <div>
            <div>Likes from</div>
            <input
              disabled={disabled}
              type="number"
              value={filters.likes[0]}
              onChange={event =>
                this.changeFilter("likes", [+event.target.value, filters.likes[1]])
              }
            />
          </div>
          <div>
            <div>Likes to</div>
            <input
              disabled={disabled}
              type="number"
              value={filters.likes[1]}
              onChange={event =>
                this.changeFilter("likes", [filters.likes[0], +event.target.value])
              }
            />
          </div>
          <button onClick={this.props.requestChannels}>Fetch channels</button>
        </div>
        <div style={{ marginLeft: 25, overflowX: "scroll", maxWidth: 1500 }}>
          <table style={{ fontSize: 8 }}>
            <tbody>
              <tr>
                <th>Category</th>
                <th>Cost</th>
                <th>Description</th>
                <th>ID</th>
                <th>Language</th>
                <th>Members</th>
                <th>Photo</th>
                <th>Telegram ID</th>
                <th>Title</th>
                <th>Username</th>
                <th>Verified</th>
                <th>Views</th>
                <th>Views growth</th>
                <th>VIP</th>
                <th>Likes</th>
              </tr>
              {this.props.main.channels.items.map(channel => (
                <tr key={channel.id}>
                  <th>{channel.category}</th>
                  <th>{channel.cost}</th>
                  <th>{channel.description}</th>
                  <th>{channel.id}</th>
                  <th>{channel.language}</th>
                  <th>{channel.members}</th>
                  <th>{channel.photo}</th>
                  <th>{channel.telegram_id}</th>
                  <th>{channel.title}</th>
                  <th>{channel.username}</th>
                  <th>{channel.verified}</th>
                  <th>{channel.views}</th>
                  <th>{channel.views_growth}</th>
                  <th>{channel.vip}</th>
                  <th>{channel.likes}</th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default connect(
  state => state,
  dispatch => ({
    requestChannels: () => dispatch(requestChannels()),
    setFilters: filters => dispatch(setChannelsFilters(filters)),
    initialize: () => dispatch({ type: "INIT_REQUESTED" }),
  }),
)(App);
