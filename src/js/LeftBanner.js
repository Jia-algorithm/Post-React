import React from 'react';
import '../css/bootstrap.css';
import '../css/chocolat.css';
import '../css/style.css';

class Navigation extends React.Component {
    render() {
        return(
            <div className="col-xs-3 banner-body-left">
				<div className="logo">
					<h1>Happy <span>Lemon</span></h1>
				</div>
				<div className="top-nav">
					<nav className="navbar navbar-default">
						<div className="navbar-header">
						  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						  </button>
						</div>
						<div className="collapse navbar-collapse nav-wil" id="bs-example-navbar-collapse-1">
							<nav className="stroke">
								<ul className="nav navbar-nav">
									<li className="active"><a href="#"><i className="home"></i>Home</a></li>
									<li><a href="#" className="hvr-underline-from-left"><i className="picture1"></i>Photos</a></li>
									<li><a href="#" className="hvr-underline-from-left"><i className="edit1"></i>Blogs</a></li>
									<li><a href="#" className="hvr-underline-from-left"><i className="text-size1"></i>Msgs</a></li>
									<li><a href="#" className="hvr-underline-from-left"><i className="envelope1"></i>Mail Me</a></li>
								</ul>
							</nav>
						</div>
					</nav>
				</div>
			</div>
        );
    }
}
export default Navigation;