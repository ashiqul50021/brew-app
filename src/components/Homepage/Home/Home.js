import React from 'react';
import { Routes, Route, Link, NavLink } from "react-router-dom";
import About from '../About/About';
import MostPopular from '../MostPopular/MostPopular';
import './Home.css';

const Home = () => {
    return (
        <div>
            <div className="container">
            <h2>Live Spaces</h2>
            <p>all NFTs on Cyber either belong to or were minted by their space creator</p>
            <NavLink to="/" className="btn button-btn" activCLass="active">24h Trending</NavLink>
            <NavLink to="latest" className="btn button-btn" activCLass="active">Latest shows</NavLink>
            <NavLink to="popular" className="btn button-btn" activCLass="active">Most Popular</NavLink>
            <NavLink to="genesis" className="btn button-btn" activCLass="active">In Genesis</NavLink>
            <NavLink to="temple" className="btn button-btn" activCLass="active">In Temple</NavLink>
            <NavLink to="void" className="btn button-btn" activCLass="active">In Void</NavLink>
            <NavLink to="byac" className="btn button-btn" activCLass="active">#BAYC</NavLink>
            {/* <Link to="/"> home </Link>
            <Link to="about"> about </Link> */}
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="about" element={<About />} />
                <Route path="popular" element={<MostPopular />} />
            </Routes>
            </div>
        </div>
    );
};

export default Home;