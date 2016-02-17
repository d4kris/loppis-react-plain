var Menu = React.createClass({

  render: function () {
    return <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header">
          <button type="button" className="navbar-btn btn btn-default navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <span className="sr-only">Visa meny</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">{this.props.name}</a>
          <button className="navbar-btn btn btn-default pull-right">Nytt köp</button>
        </div>

        {/*  Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="navbar-collapse">

          <ul className="nav navbar-nav navbar-right">
            {/* <li><button className="navbar-btn btn btn-default">Nytt köp</button></li>*/}
            <li><a href="#">Synka köp</a></li>
            <li><a href="#">Räkna ihop</a></li>
          </ul>
        </div>
      </div>
    </nav>;
  }

});
