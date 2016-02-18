var App = React.createClass({
  displayName: "App",

  getInitialState: function () {
    return {
      currentList: []
    };
  },

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(Menu, { name: this.props.name }),
      React.createElement(Purchases, { list: this.state.currentList })
    );
  }
});

ReactDOM.render(React.createElement(App, { name: "Loppan" }), document.getElementById('app'));