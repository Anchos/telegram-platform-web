import * as React from "react";
import { Input, Label, Row, Col } from "reactstrap";
import { observer, inject } from 'mobx-react';

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";


@inject('app')
@observer
export class ChannelFilters extends React.Component {

  render() {
    const { app } = this.props;
    console.log("App Store", app);
    return (
      <Row style={{ marginTop: 70 }}>
        <Col md={4} className="d-flex align-items-center pr-4">
          <div className="mr-3">Members</div>
          <div className="flex-fill">
            <InputRange
              minValue={0}
              maxValue={app.maxMembers}
              value={app.members}
              onChange={members => app.members = members}
            />
          </div>
        </Col>
        <Col md={4} className="d-flex align-items-center pl-4">
          <div className="mr-3">Cost</div>
          <div className="flex-fill">
            <InputRange
              minValue={0}
              maxValue={app.maxCost}
              value={app.cost}
              onChange={(cost) => app.cost = cost}
            />
          </div>
        </Col>
        <Col md={4} style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <input
            type={'checkbox'}
            id={'show-partner-channels'}
            onChange={() => app.showPartners = !app.showPartners}
            checked={app.showPartners}
            style={{ marginRight: 10 }}
          />
          <label htmlFor={'show-partner-channels'} style={{ marginBottom: 0 }}>Partner channels</label>
        </Col>
      </Row>
    )
  }
}
