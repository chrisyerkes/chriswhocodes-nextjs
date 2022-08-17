import Script from '@gumgum/react-script-tag';
import React from 'react';

class QualarooLoader extends React.Component {
  _onCreate = () => {
    window._kiq = window._kiq || [];
  };

  _onSuccess = () => {
    const userStr = localStorage.getItem('user');
    const user = JSON.parse(userStr);
    if (!user) return;

    const email = user.email;
    window._kiq.push(['identify', email]);
  };

  _onError = (error) => {
    throw new Error(`Could not load ${error.outerHTML}`);
  };

  render() {
    return (
      <Script
        src="//s3.amazonaws.com/ki.js/<id>/fFn.js"
        type="text/javascript"
        onCreate={this._onCreate}
        onSuccess={this._onSuccess}
        onError={this._onError}
        defer
      />
    );
  }
}

export default QualarooLoader;
