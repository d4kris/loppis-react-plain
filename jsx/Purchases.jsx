var Purchase = React.createClass({
  getClass: function () {
    var c = "item row ";
    if (this.props.className) {
      c += this.props.className;
    }
    return c;
  },

  render : function () {
    return <div className={this.getClass()}>
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

var NewItem = React.createClass({
  componentDidMount: function () {
    this.refs.seller.focus();
  },

  add: function (e) {
    e.preventDefault();
    console.log('add NewItem');
    var value = Number.parseInt(this.refs.price.value);
    if (!value) {
      return false;
    }
    var newItem = {
      key: +new Date(),
      seller : this.refs.seller.value,
      price: value
    };
    this.props.onAdd(newItem);
    // clear form
    this.refs.seller.value = '';
    this.refs.price.value = '';
    // focus
    this.refs.seller.focus();
  },

  render: function () {
    return <div className="add row">
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
    </div>;
  }
});

var Purchases = React.createClass({

  add: function (newItem) {
    this.props.add(newItem);
  },

  render : function () {
    return <div className="container">
      <NewItem onAdd={this.add}/>
      <Purchase seller="Total" price={this.props.total} className="totals"/>
      {this.props.list.map(function (p) {
        return <Purchase key={p.key} seller={p.seller} price={p.price} />;
      })}
    </div>;
  }
});
