import React, { Component } from 'react';
import { translate } from 'react-i18next';

@translate()
class App extends Component {
  state = {};

  handleChangeLanguage = event => {
    const { i18n } = this.props;
    const language = event.target.value;

    if (i18n.language !== language) {
      i18n.changeLanguage(language);
    }
  };

  render() {
    const { t } = this.props;

    return (
      <div className="container">
        <br />
        <div className="row">
          <div className="col-4 offset-4">
            <div>
              <select
                className="custom-select"
                onChange={this.handleChangeLanguage}
              >
                <option value="ru">🇷🇺</option>
                <option value="en">🇺🇸</option>
                <option value="ua">🇺🇦</option>
              </select>
            </div>
            <br />
            <button type="button" className="btn btn-primary btn-block">
              {t('login')}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
