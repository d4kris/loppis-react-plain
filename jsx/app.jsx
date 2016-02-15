var React = require('react');

var Purchases = React.createClass({
    render : function () {
      return
      <div class="container">
        <table class="table table-striped">
          <thead>
          <form role="form" class="">
            <tr>
              <td>
                <input type="number" name="seller" id="seller" placeholder="Sälj nr" class="form-control"/>
              </td>
              <td>
                <input type="number" step="5" placeholder="Pris" class="form-control"/>
              </td>
              <td>
                <button class="btn btn-success"><i class="glyphicon glyphicon-plus"></i></button>
              </td>
            </tr>
          </form>
          </thead>
          <tbody>
          <tr class="item">
            <td>49</td>
            <td>15</td>
            <td></td>
          </tr>
          <tr class="item">
            <td>6</td>
            <td>5</td>
            <td></td>
          </tr>
          <tr class="item">
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
    <Purchases name="John" />,
    document.getElementById('app')
);