var App = React.createClass({
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
    console.log("new purchase, storing purchases "+JSON.stringify(purchases));
    this.setState({
      showSellers: false,
      purchases: purchases,
      currentList : [],
      currentTotal: 0
    });
  },

  add: function (newItem) {
    console.log('add to list');
    var items = [newItem].concat(this.state.currentList);
    var total = this.state.currentTotal + newItem.price;
    this.setState({ currentList : items, currentTotal: total });
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

  render : function () {
    return <div>
      <Menu name={this.props.name} startNew={this.startNew} sellerSummary={this.showSellers}/>
      {(this.state.showSellers)?
      <Sellers purchases={this.state.purchases}/>:
      <Purchases add={this.add} list={this.state.currentList} total={this.state.currentTotal}/>}
    </div>
  }
});

ReactDOM.render(
    <App name="Loppan" />,
    document.getElementById('app')
);