var App = React.createClass({
  displayName: "App",

  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(Menu, null),
      React.createElement(Purchases, null)
    );
  }
});

var Purchases = React.createClass({
  displayName: "Purchases",

  render: function () {
    return React.createElement(
      "div",
      { className: "container" },
      React.createElement(
        "table",
        { className: "table table-striped" },
        React.createElement(
          "tbody",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "form",
              { role: "form", className: "" },
              React.createElement(
                "tr",
                null,
                React.createElement(
                  "td",
                  null,
                  React.createElement("input", { type: "number", name: "seller", id: "seller", placeholder: "Sälj nr", className: "form-control" })
                ),
                React.createElement(
                  "td",
                  null,
                  React.createElement("input", { type: "number", step: "5", placeholder: "Pris", className: "form-control" })
                ),
                React.createElement(
                  "td",
                  null,
                  React.createElement(
                    "button",
                    { className: "btn btn-success" },
                    React.createElement("i", { className: "glyphicon glyphicon-plus" })
                  )
                )
              )
            )
          ),
          React.createElement(
            "tr",
            { className: "item" },
            React.createElement(
              "td",
              null,
              "49"
            ),
            React.createElement(
              "td",
              null,
              "15"
            ),
            React.createElement("td", null)
          ),
          React.createElement(
            "tr",
            { className: "item" },
            React.createElement(
              "td",
              null,
              "6"
            ),
            React.createElement(
              "td",
              null,
              "5"
            ),
            React.createElement("td", null)
          ),
          React.createElement(
            "tr",
            { className: "item" },
            React.createElement(
              "td",
              null,
              "8"
            ),
            React.createElement(
              "td",
              null,
              "10"
            ),
            React.createElement("td", null)
          )
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(App, { name: "Loppan" }), document.getElementById('app'));