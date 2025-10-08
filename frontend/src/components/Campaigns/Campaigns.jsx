import React from "react";
import "./Campaigns.css";
import CampaignItem from "./CampaignItem";

const Campaigns = () => {
  return (
    <section className="campaigns">
      <div className="container">
        <div className="campaigns-wrapper">
          <div className="campaign-item">
            <h3 className="campaign-title">
              Fashion Month <br />
              Ready in Capital <br />
              Shop
            </h3>
            <p className="campaign-desc">
              Lorem ipsum dolor sit amet consectetur adipiscing elit dolor
            </p>
            <a href="#" className="btn btn-primary">
              View All
              <i className="bi bi-arrow-right"></i>
            </a>
          </div>
          <CampaignItem />
          
        </div>
        <div className="campaigns-wrapper">
        <CampaignItem />
        <CampaignItem /> 
        
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
