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

var Purchases = React.createClass({
  displayName: "Purchases",

  getInitialState: function () {
    return { list: [{ seller: 4, price: 15 }, { seller: 7, price: 10 }] };
  },

  render: function () {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "div",
        { className: "add row" },
        React.createElement(
          "form",
          { role: "form", className: "" },
          React.createElement(
            "div",
            { className: "col-xs-5 col-md-2" },
            React.createElement("input", { type: "number", name: "seller", id: "seller", placeholder: "Sälj nr", className: "form-control" })
          ),
          React.createElement(
            "div",
            { className: "col-xs-5 col-md-3" },
            React.createElement("input", { type: "number", step: "5", placeholder: "Pris", className: "form-control" })
          ),
          React.createElement(
            "div",
            { className: "col-xs-2 col-md-1" },
            React.createElement(
              "button",
              { className: "btn btn-success" },
              React.createElement("i", { className: "glyphicon glyphicon-plus" })
            )
          )
        )
      ),
      this.state.list.map(function (p, ix) {
        return React.createElement(Purchase, { key: ix, seller: p.seller, price: p.price });
      })
    );
  }
});