import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button, Table } from "reactstrap";
import Link from "redux-first-router-link";

import {
  getItems,
  getIsThereNextPage,
  getIsTherePrevPage,
  getFilters,
  getMeta,
} from "src/store/data/selectors";
import { goChannels, goChannel } from "src/store/route/actions";

const mapStateToProps = createStructuredSelector({
  channels: getItems,
  filters: getFilters,
  meta: getMeta,
  isTherePrevPage: getIsTherePrevPage,
  isThereNextPage: getIsThereNextPage,
});

const ChannelsListView = ({
  channels,
  filters,
  meta,
  isThereNextPage,
  isTherePrevPage,
  dispatch,
}) => {
  const pagination = (
    <div className="d-flex my-3">
      {isTherePrevPage ? (
        <Link
          className="btn btn-primary"
          to={goChannels({
            category: filters.category === "" ? "all" : filters.category,
            from: Math.max(0, filters.from - 20),
            to: Math.min(meta.total, Math.max(0, filters.from - 20) + 20),
          })}
        >
          Next
        </Link>
      ) : (
        <Button color="primary" disabled>
          Prev
        </Button>
      )}
      <div className="text-center" style={{ width: "100%" }}>
        {filters.from} - {filters.to}
      </div>

      {isThereNextPage ? (
        <Link
          className="btn btn-primary"
          to={goChannels({
            category: filters.category === "" ? "all" : filters.category,
            from: Math.min(meta.total, filters.to),
            to: Math.min(meta.total, filters.to + 20),
          })}
        >
          Next
        </Link>
      ) : (
        <Button color="primary" disabled>
          Next
        </Button>
      )}
    </div>
  );

  return (
    <>
      {pagination}

      <Table>
        <thead>
          <tr>
            <th />
            <th>Name</th>
            <th>Link</th>
            <th style={{ whiteSpace: "nowrap" }}>Member count</th>
          </tr>
        </thead>

        <tbody>
          {channels.map(channel => (
            <tr key={channel.username}>
              <td>
                <img src={channel.photo} width={32} height={32} className="rounded-circle" />
              </td>
              <td>
                <Link to={goChannel({ name: channel.username })}>{channel.title}</Link>
              </td>
              <td>
                <a href={`https://t.me/${channel.username}`} target="_blank">
                  @{channel.username}
                </a>
              </td>
              <td>{channel.members}</td>
            </tr>
          ))}
        </tbody>
      </Table>

      {pagination}
    </>
  );
};

export const ChannelsList = connect(mapStateToProps)(ChannelsListView);
