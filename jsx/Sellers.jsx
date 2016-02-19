var Sellers = React.createClass({
  mapObject: function (object, callback) {
    return Object.keys(object).map(function (key) {
      console.log('map '+key+': '+ object[key]);
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

  render : function () {
      return <div className="container">
        <table className="table table-striped">
          <tbody>
          <tr><td>hi</td><td>ho</td></tr>
          {this.mapObject(this.state, function (seller, amount) {
          return <tr className="item">
            <td>{seller}</td>
            <td>{amount}</td>
            <td></td>
          </tr>;
          })}
          </tbody>
        </table>
      </div>;
    }
});

