import React from "react";

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
                <div className="channel-page__description--editing">
                    <textarea
                        value={description}
                        onChange={onChange}
                        className="channel-page__textarea"
                        autoFocus
                        onBlur={() => this.setState({isEditing: true})}
                    />
                </div>
            )
        }
        console.log(description);
        return (
            <div className="channel-page__description" onClick={this.toggleEdit}>
                {description.length > 255 ? `${description.substr(0, 252)}...` : description}
            </div>
        );
    }

    render() {
        return this.renderDescription();
    }
}