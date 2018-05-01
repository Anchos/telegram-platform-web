import * as React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Button, Table } from "reactstrap";

import { fetchData, nextPage, prevPage } from "~/store/data/actions";
import { getItems, getPage, getIsThereNextPage, getIsTherePrevPage } from "~/store/data/selectors";

const mapStateToProps = createStructuredSelector({
  channels: getItems,
  page: getPage,
  isTherePrevPage: getIsTherePrevPage,
  isThereNextPage: getIsThereNextPage,
});

const ChannelsListView = ({ channels, page, isThereNextPage, isTherePrevPage, dispatch }) => {
  const pagination = (
    <div className="d-flex my-3">
      <Button color="primary" disabled={!isTherePrevPage} onClick={() => dispatch(prevPage())}>
        Prev
      </Button>
      <div className="text-center" style={{ width: "100%" }}>
        {page + 1}
      </div>
      <Button color="primary" disabled={!isThereNextPage} onClick={() => dispatch(nextPage())}>
        Next
      </Button>
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
            <tr key={channel.link}>
              <td>
                <img src={channel.photo} width={32} height={32} className="rounded-circle" />
              </td>
              <td>{channel.name}</td>
              <td>
                <a href={`https://t.me/${channel.link}`} target="_blank">
                  @{channel.link}
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
