import React from 'react';
import '../css/bootstrap.css';
import '../css/chocolat.css';
import '../css/style.css';

class SlideShow extends React.Component {
    
    render() {
        return(
            <div className="col-xs-9 banner-body-right">
				<div className="wmuSlider example1">
					<div className="wmuSliderWrapper">
						<SingleArticle name="banner"/>
						<SingleArticle name="banner1"/>
                        <SingleArticle name="banner2"/>
					</div>
				</div>
				<div className="banner-bottom">
                    <SingleCard iconClass="banner-left11" title="Fish title" description="This is description." />
					<SingleCard iconClass="banner-left22" title="Fish title" description="This is description." />
                    <SingleCard iconClass="banner-left33" title="Fish title" description="This is description." />
					<div className="clearfix"></div>
				</div>
                <script src="jquery.wmuSlider.js"></script> 
                <script>
                    $('.example1').wmuSlider();         
                </script>
			</div>
        );
    }
}

function SingleArticle(props) {
    return(
        <article style={{position: 'absolute', width: '100%', opacity: 0}}> 
            <div className="banner-wrap">
                <div className={props.name}></div>
            </div>
        </article>
    );
}

function SingleCard(props) {
    return(
        <div className="col-md-4 banner-left">
            <div className="col-xs-3 banner-left1">
                <div className={props.iconClass}>
                    <span></span>
                </div>
            </div>
            <div className="col-xs-9 banner-right1">
                <h3>{props.title}</h3>
            </div>
            <div className="clearfix"> </div>
            <p>{props.description}</p>
        </div>
    );
}
export default SlideShow;