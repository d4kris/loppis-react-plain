var App = React.createClass({
  render : function () {
    return <div>
      <Menu/>
      <Purchases/>
    </div>
  }
});

var Purchases = React.createClass({
    render : function () {
      return <div className="container">
        <table className="table table-striped">
          <tbody>
          <tr>
          <form role="form" className="">
            <tr>
              <td>
                <input type="number" name="seller" id="seller" placeholder="Sälj nr" className="form-control"/>
              </td>
              <td>
                <input type="number" step="5" placeholder="Pris" className="form-control"/>
              </td>
              <td>
                <button className="btn btn-success"><i className="glyphicon glyphicon-plus"></i></button>
              </td>
            </tr>
          </form>
          </tr>
          <tr className="item">
            <td>49</td>
            <td>15</td>
            <td></td>
          </tr>
          <tr className="item">
            <td>6</td>
            <td>5</td>
            <td></td>
          </tr>
          <tr className="item">
            <td>8</td>
            <td>10</td>
            <td></td>
          </tr>
          </tbody>
        </table>
      </div>;
    }
});

ReactDOM.render(
    <App name="Loppan" />,
    document.getElementById('app')
);