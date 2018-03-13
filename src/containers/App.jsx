/**
 * DON'T TOUCH THIS CODE OR YOU WILL BE FIRED
 */

import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Form, Field } from 'react-final-form';
import io from 'socket.io-client';

const SOCKET_STATUSES = {
  CONNECT: 'CONNECT',
  ERROR: 'ERROR',
  CONNECT_ERROR: 'CONNECT_ERROR',
  CONNECT_TIMEOUT: 'CONNECT_TIMEOUT',
};

const SOCKET_STATUSES_COLORS = {
  CONNECT: 'success',
  ERROR: 'danger',
  CONNECT_ERROR: 'danger',
  CONNECT_TIMEOUT: 'danger',
};

const Hr = () => (
  <div className="row">
    <div className="col-6 offset-3">
      <br />
      <hr />
      <br />
    </div>
  </div>
);

@hot(module)
class App extends Component {
  socket = null;
  state = {
    isExtendedOptions: false,
    connectionStatus: null,
    defaultOptions: {
      path: '/socket.io',
      reconnection: true,
      reconnectionAttempts: Infinity,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      randomizationFactor: 0.5,
      timeout: 20000,
      autoConnect: true,
    },
  };

  handleToggleOptions = () => {
    this.setState(prevState => ({
      isExtendedOptions: !prevState.isExtendedOptions,
    }));
  };

  handleOptionsChange = ({ url, ...options }) => {
    this.socket = io(url, options)
      .on('connect', () => this.setConnectionStatus(SOCKET_STATUSES.CONNECT))
      .on('error', () => this.setConnectionStatus(SOCKET_STATUSES.ERROR))
      .on('disconnect', () => this.setConnectionStatus())
      .on('connect_error', () =>
        this.setConnectionStatus(SOCKET_STATUSES.CONNECT_ERROR),
      )
      .on('connect_timeout', () =>
        this.setConnectionStatus(SOCKET_STATUSES.CONNECT_TIMEOUT),
      );
  };

  handleSocketClose = event => {
    event.preventDefault();

    this.socket?.disconnect?.();
    this.socket = null;
    this.setConnectionStatus();
  };

  setConnectionStatus = (connectionStatus = null) => {
    this.setState({
      connectionStatus,
    });
  };

  validateRequired = value => (value ? undefined : 'Required');

  validatePrimitive = value => {
    if (typeof value === 'string') {
      if (value === '') {
        return 'Required';
      }

      try {
        JSON.parse(value);

        return undefined;
      } catch (error) {
        return 'Should be JavaScript primitive';
      }
    }

    return undefined;
  };

  isSocketConnected = () => {
    const { connectionStatus } = this.state;

    return connectionStatus === SOCKET_STATUSES.CONNECT;
  };

  render() {
    const { connectionStatus, isExtendedOptions, defaultOptions } = this.state;
    const isSocketConnected = this.isSocketConnected();

    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-6 offset-3">
            <h3>
              Connection{' '}
              {connectionStatus && (
                <span
                  className={`badge badge-pill badge-${
                    SOCKET_STATUSES_COLORS[connectionStatus]
                  }`}
                >
                  {connectionStatus}
                </span>
              )}
            </h3>
            <Form
              onSubmit={this.handleOptionsChange}
              initialValues={defaultOptions}
            >
              {({ handleSubmit, submitting, pristine, values, invalid }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>URL</label>
                    <Field
                      name="url"
                      component="input"
                      className="form-control"
                      validate={this.validateRequired}
                    />
                  </div>
                  <div className="form-group">
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={this.handleToggleOptions}
                    >
                      {isExtendedOptions ? 'Fewer' : 'More'} options
                    </button>
                  </div>
                  {isExtendedOptions && (
                    <>
                      <hr />
                      <div className="form-group">
                        <label>Path</label>
                        <Field
                          type="input"
                          name="path"
                          component="input"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group form-check">
                        <Field
                          name="reconnection"
                          className="form-check-input"
                          component="input"
                          type="checkbox"
                          id="reconnection"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="reconnection"
                        >
                          Reconnection
                        </label>
                      </div>
                      {values.reconnection && (
                        <>
                          <div className="form-group">
                            <label>Reconnection attemps</label>
                            <Field
                              name="reconnectionAttempts"
                              component="input"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            <label>Reconnection delay</label>
                            <Field
                              name="reconnectionDelay"
                              component="input"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            <label>Reconnection delay max</label>
                            <Field
                              name="reconnectionDelayMax"
                              component="input"
                              className="form-control"
                            />
                          </div>
                          <div className="form-group">
                            <label>Randomization factor</label>
                            <Field
                              name="randomizationFactor"
                              component="input"
                              className="form-control"
                            />
                          </div>
                        </>
                      )}
                      <div className="form-group">
                        <label>Timeout</label>
                        <Field
                          name="timeout"
                          component="input"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group form-check">
                        <Field
                          name="autoConnect"
                          className="form-check-input"
                          component="input"
                          type="checkbox"
                          id="autoConnect"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="autoConnect"
                        >
                          Auto connect
                        </label>
                      </div>
                    </>
                  )}
                  {connectionStatus ? (
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={this.handleSocketClose}
                    >
                      Disconnect
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={submitting || pristine || invalid}
                    >
                      Connect
                    </button>
                  )}
                </form>
              )}
            </Form>
          </div>
        </div>
        <Hr />
        <div className="row">
          <div className="col-6 offset-3">
            <h3>Emitter</h3>
            <Form onSubmit={console.log}>
              {({ handleSubmit, submitting, pristine, invalid }) => (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Event name</label>
                    <Field
                      name="eventName"
                      component="input"
                      className="form-control"
                      validate={this.validateRequired}
                    />
                  </div>
                  <div className="form-group">
                    <label>Event data</label>
                    <Field
                      name="data"
                      component="textarea"
                      className="form-control"
                      rows="5"
                      validate={this.validatePrimitive}
                      parse={value => {
                        if (value === '') {
                          return undefined;
                        }

                        try {
                          const parsedValue = JSON.parse(value);

                          return parsedValue;
                        } catch (error) {
                          return value;
                        }
                      }}
                      format={value => {
                        console.log(value);

                        if (value === '') {
                          return undefined;
                        }

                        if (typeof value === 'string') {
                          if (value === '') {
                            return undefined;
                          }
                        }
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={submitting || pristine || invalid}
                  >
                    Emit
                  </button>
                </form>
              )}
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
