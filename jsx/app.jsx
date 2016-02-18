var App = React.createClass({
  getInitialState: function () {
    return {
      currentList: [],
      currentTotal: 0
    };
  },

  render : function () {
    return <div>
      <Menu name={this.props.name}/>
      <Purchases list={this.state.currentList} total={this.state.currentTotal}/>
    </div>
  }
});

ReactDOM.render(
    <App name="Loppan" />,
    document.getElementById('app')
);