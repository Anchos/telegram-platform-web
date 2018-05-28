import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import debounce from "lodash.debounce";
import { Input, Label, Row, Col } from "reactstrap";

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

import { setQuery, setMembers, setCost } from "src/store/data/actions";
import {
  getQuery, getMembers, getMaxMembers,
  getCost, getMaxCost
} from "src/store/data/selectors";

export const ChannelsFilters = connect(
  createStructuredSelector({
    query: getQuery,
    members: getMembers,
    maxMembers: getMaxMembers,
    cost: getCost,
    maxCost: getMaxCost
  }),
)(({ query, members, maxMembers, cost, maxCost, dispatch }) => (
  <Row className="my-3 py-3">
    <Col md={4}>
      <Input
        placeholder="Search..."
        value={query}
        onChange={event => dispatch(setQuery(event.target.value))}
      />
    </Col>
    <Col md={4} className="d-flex align-items-center pr-4">
      <div className="mr-3">Members</div>
      <div className="flex-fill">
        <InputRange
          minValue={0}
          maxValue={maxMembers}
          value={members}
          onChange={members => dispatch(setMembers(members))}
        />
      </div>
    </Col>
    <Col md={4} className="d-flex align-items-center pl-4">
      <div className="mr-3">Cost</div>
      <div className="flex-fill">
        <InputRange
          minValue={0}
          maxValue={maxCost}
          value={cost}
          onChange={(cost) => dispatch(setCost(cost))}
        />
      </div>
    </Col>
  </Row>
));
