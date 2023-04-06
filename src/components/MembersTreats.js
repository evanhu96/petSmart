import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const MembersTreats = () => {
  return (
    <div className="cf-block" style={{ marginTop: "20px" }}>
      <div className="sparky-c-sparky-legacy-wrapper cf-SiteWidePromoBanner sparky-c-sparky-legacy-wrapper--front-end-web">
        <div
          className="sparky-c-banner"
          style={{ background: "white", height: "40px" }}
        >
          <div className="sparky-c-text-passage sparky-c-text-passage--align-center">
            <div className="sparky-l-linelength-container sparky-c-text-passage__inner">
              <p>
                <a
                  href="https://www.petsmart.com/treats-members-month.html?origin=home&amp;desc=tmm&amp;type=sitewide"
                  style={{
                    color: "red",
                    text: "inherit",
                    textDecoration: "none",
                    fontSize: "18px",
                  }}
                >
                  Treats Members Month! It's the biggest event of the year! Get
                  details &gt;
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersTreats;
