import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import debounce from "lodash.debounce";
import { Input, Label, Row, Col } from "reactstrap";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import { setQuery, setSubsRange, getQuery, getSubsRange, getMaxSubsRange } from "~/store/data";

const mapStateToProps = createStructuredSelector({
  query: getQuery,
  subsRange: getSubsRange,
  maxSubsRange: getMaxSubsRange,
});

class ChannelsFiltersView extends React.Component {
  state = {
    subsRange: this.props.subsRange,
  };

  componentWillReceiveProps(nextProps) {
    if (
      this.props.subsRange.min !== nextProps.subsRange.min ||
      this.props.subsRange.max !== nextProps.subsRange.max
    ) {
      this.setState({ subsRange: nextProps.subsRange });
    }
  }

  updateSubsRange = debounce(() => {
    this.props.dispatch(setSubsRange(this.state.subsRange));
  }, 200);

  handleQueryChange = event => {
    this.props.dispatch(setQuery(event.target.value));
  };

  handleSubsRangeChange = subsRange => {
    this.setState({ subsRange });
    this.updateSubsRange();
  };

  render() {
    if (this.props.maxSubsRange <= 0) return null;

    return (
      <Row className="my-3 py-3">
        <Col md={6}>
          <Input
            placeholder="Search..."
            value={this.props.query}
            onChange={this.handleQueryChange}
          />
        </Col>
        <Col md={6} className="d-flex align-items-center">
          <div className="mr-3">Subscribers</div>
          <div className="flex-fill">
            <InputRange
              minValue={0}
              maxValue={this.props.maxSubsRange}
              value={this.state.subsRange}
              onChange={this.handleSubsRangeChange}
            />
          </div>
        </Col>
      </Row>
    );
  }
}

export const ChannelsFilters = connect(mapStateToProps)(ChannelsFiltersView);
