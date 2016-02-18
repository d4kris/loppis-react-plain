var App = React.createClass({
  displayName: "App",

  getInitialState: function () {
    return {
      currentList: [],
      currentTotal: 0
    };
  },

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(Menu, { name: this.props.name }),
      React.createElement(Purchases, { list: this.state.currentList, total: this.state.currentTotal })
    );
  }
});

ReactDOM.render(React.createElement(App, { name: "Loppan" }), document.getElementById('app'));