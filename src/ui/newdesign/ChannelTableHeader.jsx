import * as React from 'react';
import { SearchForm } from "./SearchForm";
import { Col } from "reactstrap";

export class ChannelTableHeader extends React.Component {


  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <Col
          xs={12}
          md={9}
        >
          <SearchForm
            style={{
              justifyContent: 'flex-start'
            }}
            width={350}
            onChange={e => console.log("Value from search", e.target.value)}
            onSubmit={() => console.log("Submitted search")}
          />
        </Col>
        <Col
          xs={12}
          md={1}
        >
          <div>Members</div>
        </Col>
        <Col
          xs={12}
          md={1}
        >
          <div>Price</div>
        </Col>
        <Col
          xs={12}
          md={1}
        >
          <div>Like</div>
        </Col>
      </div>
    )
  }
}