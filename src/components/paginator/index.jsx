import React from "react";
import PropTypes from "prop-types";
import classNames from "class-names";
import style from "./style.css";

const arrowSrc = require("./arrow-right.svg");

class Paginator extends React.PureComponent {
  state = {
    input: `${this.props.currentPage + 1}`,
  };

  onInputChange = ({ target: { value } }) => this.setState({ input: value.replace(/\D/g, "") });
  onEnter = ({ keyCode }) =>
    keyCode === 13 &&
    this.props.onChange(
      +this.state.input > this.props.pageCount ? this.props.pageCount - 1 : +this.state.input - 1,
    );

  goBack = () => this.props.onChange(this.props.currentPage - 1);
  goForward = () => this.props.onChange(this.props.currentPage + 1);

  render() {
    const { pageCount, currentPage } = this.props;
    return (
      <div className="paginator">
        <img
          src={arrowSrc}
          className={classNames("paginator__arrow", "paginator__arrow_left")}
          alt=""
          onClick={currentPage > 0 ? this.goBack : undefined}
        />
        <div>
          <input
            type=""
            onKeyDown={this.onEnter}
            className="paginator__input"
            value={this.state.input}
            onChange={this.onInputChange}
          />
          of {pageCount}
        </div>
        <img
          src={arrowSrc}
          className={classNames("paginator__arrow", "paginator__arrow_right")}
          alt=""
          onClick={currentPage < pageCount - 1 ? this.goForward : undefined}
        />
      </div>
    );
  }
}

Paginator.propTypes = {
  pageCount: PropTypes.number,
  onChange: PropTypes.func,
  currentPage: PropTypes.number,
};

export default Paginator;
