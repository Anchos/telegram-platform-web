import * as React from "react";
import { Input, Label, Row, Col } from "reactstrap";
import { observer, inject } from 'mobx-react';

import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";
import { SearchForm } from "../ui/newdesign/SearchForm";


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
              value={app.toMembers}
              onChange={members => app.toMembers = members}
            />
          </div>
        </Col>
        <Col md={4} className="d-flex align-items-center pl-4">
          <div className="mr-3">Cost</div>
          <div className="flex-fill">
            <InputRange
              minValue={0}
              maxValue={app.maxCost}
              value={app.toCost}
              onChange={(cost) => app.toCost = cost}
            />
          </div>
        </Col>
        <Col md={3} style={{ flexDirection: 'column', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ flexDirection: 'row', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <input
              type={'checkbox'}
              id={'show-partner-channels'}
              onChange={() => app.showPartners = !app.showPartners}
              checked={app.showPartners}
              style={{ marginRight: 10 }}
            />
            <label htmlFor={'show-partner-channels'} style={{ marginBottom: 0 }}>Partner channels</label>
          </div>
        </Col>
        <Col md={1}>
          Count
          <Input
            value={app.count}
            type={'text'}
            onChange={e => {
              console.log('val', e.target.value, app.count)
              app.count = e.target.value
            }}
            invalid={String(Number(app.count)) === 'NaN'}
          />
        </Col>
      </Row>
    )
  }
}
