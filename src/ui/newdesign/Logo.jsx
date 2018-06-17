import React from 'react';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

class Logo extends React.Component {

  render() {
    return (
      <Link style={{ textDecoration: 'none' }} to={'/'}>
        <div
          style={{
            fontFamily: 'Lato',
            fontSize: 40,
            fontWeight: 'bold',
            color: '#2FB96A',
          }}
        >
          Biplane
        </div>
      </Link>
    );
  }
}

const routedLogo = withRouter(Logo)

export { routedLogo as Logo }