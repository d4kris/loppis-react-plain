var App = React.createClass({
  render : function () {
    return <div>
      <Menu/>
      <Purchases />
    </div>
  }
});

ReactDOM.render(
    <App name="Loppan" />,
    document.getElementById('app')
);