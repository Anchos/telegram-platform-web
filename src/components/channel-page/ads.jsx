import React from "react";

export default class Ads extends React.Component {

  state = {
    editIsPressed: false
  }

  toggleEditBtn = () => {
    this.setState({ editIsPressed: !this.state.editIsPressed });
  }

  renderCost = () => {
    const { cost, onChange } = this.props;
    if (this.state.editIsPressed) {
      return (
        <input
          className="channel-page__single-number-value--active"
          value={cost}
          onChange={e => {
            const isValid = (/^\d+$/.test(e.target.value) && e.target.value.length <= 4);
            if (isValid) {
              return onChange(e);
            }
          }}
          onBlur={() => this.setState({ editIsPressed: false })}
          autoFocus
        />
      );
    }
    return <div className="channel-page__single-number-value">{this.props.cost}</div>
  }

  render() {
    return (
      <div className="channel-page__single-number">
        <div className="channel-page__single-number-label--with-edit">
          <div className="channel-page__single-number-label">Ads</div>
          {(!this.state.editIsPressed && this.props.isOwner) &&
            <div className="channel-page__edit-btn" onClick={this.toggleEditBtn}>Edit</div>
          }
        </div>
        {this.renderCost()}
      </div>
    );
  }
}