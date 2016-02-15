var Menu = React.createClass({

  render: function () {
    return <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header">
          <button className="navbar-btn btn btn-default pull-right">Nytt köp</button>
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse">
            <span className="sr-only">Visa meny</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Marknad</a>
        </div>

        {/*  Collect the nav links, forms, and other content for toggling */}
        <div className="collapse navbar-collapse" id="navbar-collapse">

          <ul className="nav navbar-nav navbar-right">
            {/* <li><button className="navbar-btn btn btn-default">Nytt köp</button></li>*/}
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">Meny <span className="caret"></span></a>
              <ul className="dropdown-menu" role="menu">
                <li><a href="#">Synka köp</a></li>
                <li><a href="#">Räkna ihop</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>;
  }

});
