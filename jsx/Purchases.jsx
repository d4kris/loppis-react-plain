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
    return {
      list: []
    };
  },

  add: function (e) {
    e.preventDefault();
    console.log('add');
    var newItem = {
      key: +new Date(),
      seller : this.refs.seller.value,
      price: this.refs.price.value
    };
    var items = [newItem].concat(this.state.list);
    this.setState({ list : items });
    // clear form
    this.refs.seller.value = '';
    this.refs.price.value = '';
    // focus
    this.refs.seller.focus();
  },

  render : function () {
    return <div className="container">
      <div className="add row">
        <form role="form" className="">
          <div className="col-xs-5 col-md-2">
            <input type="number" name="seller" ref="seller" placeholder="Sälj nr" className="form-control"/>
          </div>
          <div className="col-xs-5 col-md-3">
            <input type="number" ref="price" step="5" placeholder="Pris" className="form-control"/>
          </div>
          <div className="col-xs-2 col-md-1">
            <button onClick={this.add} className="btn btn-success">
              <i className="glyphicon glyphicon-plus"></i>
            </button>
          </div>
        </form>
      </div>
      {this.state.list.map(function (p) {
        return <Purchase key={p.key} seller={p.seller} price={p.price} />;
      })}
    </div>;
  }
});
