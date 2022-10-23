import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
 return(
   <>
        <div className="row">
            <div className="col-10">
                <div className="position-relative">
                    <input className="ps-5 form-control rounded-pill" placeholder="Search Tuiter"/>
                    <i className="bi bi-search position-absolute wd-search-tuiter"></i> 
                </div>
            </div>

            <div className="col-2">
                <a href="../edit-profile.html"><i className="wd-bottom-4 text-primary float-end bi 
                       bi-gear-fill fs-2 position-relative"></i> </a>
            </div>
        </div>

        <ul className="nav nav-pills mt-2 mb-2">
            <li className="nav-item">
                <a className="nav-link active">
                    For You
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link">
                    Trending
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link">
                    News
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" tabindex="-1">
                    Sports
                </a>
            </li>
            <li className="nav-item d-none d-md-block d-lg-block d-xl-block d-xxl-block">
                <a className="nav-link" tabindex="-1">
                    Entertainment
                </a>
            </li>
        </ul>


        <div className="position-relative mb-2">
            <img src={`/tuiter/images/spacex_starship.webp`} width="100%"/>
            <h1 className="ms-2 position-absolute bottom-0 text-white">SpaceX's Starship</h1>
        </div>
     <PostSummaryList/>
   </>
 );
};
export default ExploreComponent;