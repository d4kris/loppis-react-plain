var App = React.createClass({
  displayName: "App",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(Menu, { name: this.props.name }),
      React.createElement(Purchases, null)
    );
  }
});

ReactDOM.render(React.createElement(App, { name: "Loppan" }), document.getElementById('app'));