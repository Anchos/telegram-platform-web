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
  <Row style={{ marginTop: 70 }}>
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
    <Col md={4} style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <input
        type={'radio'}
        id={'show-partner-channels'}
        checked={true}
        style={{ marginRight: 10 }}
      />
      <label htmlFor={'show-partner-channels'} style={{ marginBottom: 0 }}>Partner channels</label>
    </Col>
  </Row>
));
