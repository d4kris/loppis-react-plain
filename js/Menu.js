var Menu = React.createClass({
  displayName: "Menu",

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
            { className: "navbar-btn btn btn-default pull-right" },
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
                { href: "#" },
                "Räkna ihop"
              )
            )
          )
        )
      )
    );
  }

});