import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import debounce from "lodash.debounce";
import { Input, Label, Row, Col } from "reactstrap";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import { setQuery, setMembers } from "~/store/data/actions";
import { getQuery, getMembers, getMaxMembers } from "~/store/data/selectors";

const mapStateToProps = createStructuredSelector({
  query: getQuery,
  members: getMembers,
  maxMembers: getMaxMembers,
});

class ChannelsFiltersView extends React.Component {
  state = {
    members: this.props.members,
  };

  componentWillReceiveProps(nextProps) {
    if (
      this.props.members.min !== nextProps.members.min ||
      this.props.members.max !== nextProps.members.max
    ) {
      this.setState({ members: nextProps.members });
    }
  }

  // updateMembers = debounce(() => {
  //   this.props.dispatch(setMembers(this.state.members));
  // }, 200);

  updateMembers = () => {
    this.props.dispatch(setMembers(this.state.members));
  };

  handleQueryChange = event => {
    this.props.dispatch(setQuery(event.target.value));
  };

  handleMembersChange = members => {
    this.setState({ members });
    this.updateMembers();
  };

  render() {
    if (this.props.maxMembers <= 0) return null;

    return (
      <Row className="my-3 py-3">
        <Col md={4}>
          <Input
            placeholder="Search..."
            value={this.props.query}
            onChange={this.handleQueryChange}
          />
        </Col>
        <Col md={4} className="d-flex align-items-center pr-4">
          <div className="mr-3">Members</div>
          <div className="flex-fill">
            <InputRange
              minValue={0}
              maxValue={this.props.maxMembers}
              value={this.state.members}
              onChange={this.handleMembersChange}
            />
          </div>
        </Col>
        <Col md={4} className="d-flex align-items-center pl-4">
          <div className="mr-3">Cost</div>
          <div className="flex-fill">
            <InputRange minValue={0} maxValue={20} value={{ min: 5, max: 15 }} />
          </div>
        </Col>
      </Row>
    );
  }
}

export const ChannelsFilters = connect(mapStateToProps)(ChannelsFiltersView);
