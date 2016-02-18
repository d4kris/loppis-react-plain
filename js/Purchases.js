var Purchase = React.createClass({
  displayName: "Purchase",

  render: function () {
    return React.createElement(
      "div",
      { className: "item row" },
      React.createElement(
        "div",
        { className: "col-xs-5 col-md-2" },
        this.props.seller
      ),
      React.createElement(
        "div",
        { className: "col-xs-5 col-md-3" },
        this.props.price
      ),
      React.createElement("div", { className: "col-xs-2 col-md-1" })
    );
  }
});

var NewItem = React.createClass({
  displayName: "NewItem",

  add: function (e) {
    e.preventDefault();
    console.log('add NewItem');
    var newItem = {
      key: +new Date(),
      seller: this.refs.seller.value,
      price: this.refs.price.value
    };
    this.props.onAdd(newItem);
    // clear form
    this.refs.seller.value = '';
    this.refs.price.value = '';
    // focus
    this.refs.seller.focus();
  },

  render: function () {
    return React.createElement(
      "div",
      { className: "add row" },
      React.createElement(
        "form",
        { role: "form", className: "" },
        React.createElement(
          "div",
          { className: "col-xs-5 col-md-2" },
          React.createElement("input", { type: "number", name: "seller", ref: "seller", placeholder: "Sälj nr", className: "form-control" })
        ),
        React.createElement(
          "div",
          { className: "col-xs-5 col-md-3" },
          React.createElement("input", { type: "number", ref: "price", step: "5", placeholder: "Pris", className: "form-control" })
        ),
        React.createElement(
          "div",
          { className: "col-xs-2 col-md-1" },
          React.createElement(
            "button",
            { onClick: this.add, className: "btn btn-success" },
            React.createElement("i", { className: "glyphicon glyphicon-plus" })
          )
        )
      )
    );
  }
});

var Purchases = React.createClass({
  displayName: "Purchases",

  getInitialState: function () {
    return {
      list: []
    };
  },

  add: function (newItem) {
    console.log('add to list');
    var items = [newItem].concat(this.state.list);
    this.setState({ list: items });
  },

  render: function () {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(NewItem, { onAdd: this.add }),
      this.state.list.map(function (p) {
        return React.createElement(Purchase, { key: p.key, seller: p.seller, price: p.price });
      })
    );
  }
});