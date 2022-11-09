import React from 'react';
import './css/bootstrap.css';
import './css/chocolat.css';
import './css/style.css';
import ReactDOM from 'react-dom/client';
import SlideShow from './js/RightBanner';
import Navigation from './js/LeftBanner';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <div className="banner-body-content">
        <Navigation />
        <SlideShow />
        <script src="js/bootstrap.js"></script>
    </div>
);