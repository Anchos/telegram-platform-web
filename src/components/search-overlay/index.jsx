import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import style from "./style.css";

class SearchOverlay extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    open: PropTypes.bool,
  };

  state = { shouldRender: this.props.open };
  container = React.createRef();

  componentWillUpdate(newProps) {
    if (this.props.open !== newProps.open) {
      if (!newProps.open && this.container) {
        this.container.style.overflowY = "hidden";
        document.body.style.overflowY = "auto";
        document.body.style.paddingRight = "";
        this.container.classList.add("search-overlay_closing");
        setTimeout(() => this.setState({ shouldRender: false }), 300);
      } else {
        const verticalScrollWidth = window.innerWidth - document.documentElement.clientWidth;
        const horizontalScrollWidth = window.innerHeight - document.documentElement.clientHeight;
        this.setState({ shouldRender: true });
        document.body.style.overflowY = "hidden";
        document.body.style.paddingRight = `${verticalScrollWidth}px`;
        document.body.style.overflowX = "hidden";
        document.body.style.paddingBottom = `${horizontalScrollWidth}px`;
        setTimeout(() => (this.container.style.overflowY = "auto"), 300);
      }
    }
  }

  render() {
    return (
      this.state.shouldRender &&
      ReactDOM.createPortal(
        <div className="search-overlay" ref={o => (this.container = o)}>
          {this.props.children}
        </div>,
        document.body,
      )
    );
  }
}

export default SearchOverlay;
