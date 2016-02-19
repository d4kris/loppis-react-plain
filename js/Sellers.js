var Sellers = React.createClass({
  displayName: 'Sellers',

  mapObject: function (object, callback) {
    return Object.keys(object).map(function (key) {
      console.log('map ' + key + ': ' + object[key]);
      return callback(key, object[key]);
    });
  },

  getInitialState: function () {
    var sellers = {};
    this.props.purchases.map(function (pp) {
      pp.map(function (p) {
        var amount = sellers[p.seller] || 0;
        amount += p.price;
        sellers[p.seller] = amount;
      });
    });
    console.log(sellers);
    return sellers;
  },

  render: function () {
    return React.createElement(
      'div',
      { className: 'container' },
      React.createElement(
        'table',
        { className: 'table table-striped' },
        React.createElement(
          'tbody',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              null,
              'hi'
            ),
            React.createElement(
              'td',
              null,
              'ho'
            )
          ),
          this.mapObject(this.state, function (seller, amount) {
            return React.createElement(
              'tr',
              { className: 'item' },
              React.createElement(
                'td',
                null,
                seller
              ),
              React.createElement(
                'td',
                null,
                amount
              ),
              React.createElement('td', null)
            );
          })
        )
      )
    );
  }
});