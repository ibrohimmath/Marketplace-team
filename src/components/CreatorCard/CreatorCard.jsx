// src/components/CreatorCard.jsx
import React from "react";
import "./CreatorCard.scss";
import profileImg from "../../assets/Image Placeholder (2).png"
import TopCreators from "./TopCreators";

const CreatorCard = ({ profileImg, name, percentageChange, sales, earnings }) => {
  return (
    <>
      <TopCreators />
    <div className="flex">
      <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    <div className="creator-card">
      <div className="rank">1</div>
      <img className="profile-img" src={profileImg} alt={name} />
      <div className="info">
        <div className="name">{name}</div>
        <div className={`percentage ${percentageChange > 0 ? "positive" : "negative"}`}>
          {percentageChange > 0 ? `+${percentageChange}%` : `${percentageChange}%`}
        </div>
        <div className="sales">{sales}</div>
        <div className="earnings">{earnings} ETH</div>
      </div>
    </div>
    </div>
    </>
  );
};

export default CreatorCard;
