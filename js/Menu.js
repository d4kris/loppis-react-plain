var Menu = React.createClass({
  displayName: "Menu",

  newPurchase: function () {
    if (!confirm("Spara undan detta köp och börja på en ny?")) {
      return;
    }
    this.props.startNew();
  },

  render: function () {
    return React.createElement(
      "nav",
      { className: "navbar navbar-default", role: "navigation" },
      React.createElement(
        "div",
        { className: "container-fluid" },
        React.createElement(
          "div",
          { className: "navbar-header" },
          React.createElement(
            "button",
            { type: "button", className: "navbar-btn btn btn-default navbar-toggle collapsed", "data-toggle": "collapse", "data-target": "#navbar-collapse" },
            React.createElement(
              "span",
              { className: "sr-only" },
              "Visa meny"
            ),
            React.createElement("span", { className: "icon-bar" }),
            React.createElement("span", { className: "icon-bar" }),
            React.createElement("span", { className: "icon-bar" })
          ),
          React.createElement(
            "a",
            { className: "navbar-brand", href: "#" },
            this.props.name
          ),
          React.createElement(
            "button",
            { onClick: this.newPurchase, className: "navbar-btn btn btn-default pull-right" },
            "Nytt köp"
          )
        ),
        React.createElement(
          "div",
          { className: "collapse navbar-collapse", id: "navbar-collapse" },
          React.createElement(
            "ul",
            { className: "nav navbar-nav navbar-right" },
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#" },
                "Synka köp"
              )
            ),
            React.createElement(
              "li",
              null,
              React.createElement(
                "a",
                { href: "#", onClick: this.props.sellerSummary },
                "Räkna ihop"
              )
            )
          )
        )
      )
    );
  }

});