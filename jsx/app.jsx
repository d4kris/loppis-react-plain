var App = React.createClass({
  render : function () {
    return <div>
      <Menu name={this.props.name}/>
      <Purchases/>
    </div>
  }
});

ReactDOM.render(
    <App name="Loppan" />,
    document.getElementById('app')
);