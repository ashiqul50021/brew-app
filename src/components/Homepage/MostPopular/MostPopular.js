import React from 'react';
import Roll from 'react-reveal/Roll';

import house from "../../../images/home.jpg";
import vincent from "../../../images/vincent.jpg";
import teufzer from "../../../images/teufzer.jpg";
import colorab from "../../../images/download.png";
import nfts from "../../../images/shows.jpg";
import photoa from "../../../images/6529.jpg";
import "./MostPopular.css";
const MostPopular = () => {
    return (
        <div>
            
            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card">
                        <img className='images' src={house} alt="" />
                        <div className="images-overlay">
                            <h5>Meta Trap house</h5>
                            <button className='btn img-btn'>@freezeecorle... <br />ox89bd..</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={vincent} alt="" />
                        <div className="images-overlay">
                            <h5>The Vincent Van Dough Gallery</h5>
                            <button className='btn img-btn'>@freezeecorle... <br />ox89bd..</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={teufzer} alt="" />
                        <div className="images-overlay">
                            <h5>Teufzer</h5>
                            <button className='btn img-btn'>@freezeecorle... <br />ox89bd..</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={colorab} alt="" />
                        <div className="images-overlay">
                            <h5>6529 AB + 1</h5>
                            <button className='btn img-btn'>@freezeecorle... <br />ox89bd..</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={nfts} alt="" />
                        <div className="images-overlay">
                            <h5>#9049</h5>
                            <button className='btn img-btn'>@freezeecorle... <br />ox89bd..</button>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card">
                        <img src={photoa} alt="" />
                        <div className="images-overlay">
                            <h5>6529 Photo A</h5>
                            <button className='btn img-btn'>@freezeecorle... <br />ox89bd..</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MostPopular;