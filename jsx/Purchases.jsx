var Purchase = React.createClass({
  render : function () {
    return <div className="item row">
        <div className="col-xs-5 col-md-2">
          {this.props.seller}
        </div>
        <div className="col-xs-5 col-md-3">
          {this.props.price}
        </div>
        <div className="col-xs-2 col-md-1">
        </div>
      </div>;
  }
});

var Purchases = React.createClass({
  getInitialState: function () {
    return {list : [
      { seller: 4, price: 15 },
      { seller: 7, price: 10 }
    ]};
  },

  render : function () {
    return <div className="container">
      <div className="add row">
        <form role="form" className="">
          <div className="col-xs-5 col-md-2">
            <input type="number" name="seller" id="seller" placeholder="Sälj nr" className="form-control"/>
          </div>
          <div className="col-xs-5 col-md-3">
            <input type="number" step="5" placeholder="Pris" className="form-control"/>
          </div>
          <div className="col-xs-2 col-md-1">
            <button className="btn btn-success"><i className="glyphicon glyphicon-plus"></i></button>
          </div>
        </form>
      </div>
      {this.state.list.map(function (p, ix) {
        return <Purchase key={ix} seller={p.seller} price={p.price} />;
      })}
    </div>;
  }
});
