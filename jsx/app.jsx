var App = React.createClass({
  getInitialState: function () {
    return {
      currentList: []
    };
  },

  render : function () {
    return <div>
      <Menu name={this.props.name}/>
      <Purchases list={this.state.currentList}/>
    </div>
  }
});

ReactDOM.render(
    <App name="Loppan" />,
    document.getElementById('app')
);