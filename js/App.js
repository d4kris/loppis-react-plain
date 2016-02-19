var App = React.createClass({
  displayName: 'App',

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
      showSellers: false,
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

  showSellers: function () {
    console.log('show sellers');
    // store any ongoing purchase
    var purchases = this.state.purchases;
    purchases.push(this.state.currentList);
    this.setState({
      showSellers: true,
      purchases: purchases
    });
  },

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(Menu, { name: this.props.name, startNew: this.startNew, sellerSummary: this.showSellers }),
      this.state.showSellers ? React.createElement(Sellers, { purchases: this.state.purchases }) : React.createElement(Purchases, { add: this.add, list: this.state.currentList, total: this.state.currentTotal })
    );
  }
});

ReactDOM.render(React.createElement(App, { name: 'Loppan' }), document.getElementById('app'));