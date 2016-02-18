var App = React.createClass({
  displayName: "App",

  getInitialState: function () {
    return {
      purchases: [],
      currentList: [],
      currentTotal: 0
    };
  },

  startNew: function () {
    var purchases = this.state.purchases;
    purchases.push(this.state.currentList);
    console.log("new purchase, storing purchases " + JSON.stringify(purchases));
    this.setState({
      purchases: purchases,
      currentList: [],
      currentTotal: 0
    });
  },

  add: function (newItem) {
    console.log('add to list');
    var items = [newItem].concat(this.state.currentList);
    var total = this.state.currentTotal + newItem.price;
    this.setState({ currentList: items, currentTotal: total });
  },

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(Menu, { name: this.props.name, startNew: this.startNew }),
      React.createElement(Purchases, { add: this.add, list: this.state.currentList, total: this.state.currentTotal })
    );
  }
});

ReactDOM.render(React.createElement(App, { name: "Loppan" }), document.getElementById('app'));