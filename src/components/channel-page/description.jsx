import React from "react";
import classNames from "class-names";

export default class Description extends React.Component {
  state = {
    isEditing: false
  }

  toggleEdit = () => {
    if (this.props.isOwner) {
      //    return this.setState({isEditing: !this.state.isEditing});
    }
  };

  renderDescription = () => {
    const { description, onChange } = this.props;
    if (this.state.isEditing) {
      return (
        <textarea
          value={description}
          onChange={onChange}
          className="channel-page__textarea"
          autoFocus
          onBlur={() => this.setState({ isEditing: true })}
        />
      );
    }
    return description.length > 255 ? `${description.substr(0, 252)}...` : description;
  }

  render() {
    const cname = classNames("channel-page__description", { "channel-page__description--isowner": this.props.isOwner });
    return (
      <div className={cname} onClick={this.toggleEdit}>
        {this.renderDescription()}
        { this.props.isOwner && <div className="channel-page__right-edit-label" />}
      </div>
    );
  }
}