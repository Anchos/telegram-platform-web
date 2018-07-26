import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Title, RowMarginBottom, WrapperCheckboxes, WrapperFilter } from "./styles";

import { NumericFilter } from "../numericFilter/NumericFilter";
import { Checkbox } from "../checkbox/Checkbox";
import { ChannelTable } from "../channelTable/ChannelTable";
import { Button } from "../button/Button";

export class Channels extends React.Component {
  onMembersChange = ({ max, min }) => {
    this.props.onFiltersChange({
      ...this.props.filters,
      members: [min, max],
    });
  };

  onCostChange = ({ max, min }) => {
    this.props.onFiltersChange({
      ...this.props.filters,
      cost: [min, max],
    });
  };

  render() {
    const {
      channels = [],
      maxMembers,
      maxCost,
      filters: {
        members: [fromMembers, toMembers],
        cost: [fromCost, toCost]
      },
    } = this.props;

    return (
      <Wrapper className="container">
        <RowMarginBottom margin="48px" className="row no-gutters align-items">
          <Title>Channels</Title>
          <Button text="Add Channel" maxWidth="160px" />
        </RowMarginBottom>
        <RowMarginBottom margin="35px" className="row align-items-end justify-content-between">
          <WrapperFilter className="col-12 col-sm-12 col-md-6 col-lg-4 mb-md-100">
            <NumericFilter
              label="Number of subscribers"
              from={fromMembers}
              to={toMembers}
              maxValue={maxMembers}
              onChange={this.onMembersChange}
            />
          </WrapperFilter>
          <WrapperFilter className="col-12 col-sm-12 col-md-6 col-lg-4 mb-md-100">
            <NumericFilter
              label="Advertising cost"
              from={fromCost}
              to={toCost}
              maxValue={maxCost}
              onChange={this.onCostChange}
            />
          </WrapperFilter>
          <WrapperCheckboxes className="col-12 col-sm-12 col-md-12 col-lg-4">
            <div className="row no-gutters justify-content-between">
              <Checkbox id="partners" label="Partners" />
              <Checkbox id="verified" label="Verified" />
              <Checkbox id="verified" label="Mutual Promotion" />
            </div>
          </WrapperCheckboxes>
        </RowMarginBottom>
        <ChannelTable channels={channels} />
      </Wrapper>
    );
  }
}

Channels.propTypes = {
  onFiltersChange: PropTypes.func,
  filters: PropTypes.object,
  channels: PropTypes.array,
};
