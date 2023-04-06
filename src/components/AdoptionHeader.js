import React from 'react';

function AdoptionHeader() {
  return (
    <div className="dp-adoptions container-fluid">
      <div className="html-slot-container">
        <section className="row _HP_livesSaved justify-content-between align-items-center">
          <div className="col-md-4 col-12 text-md-left text-center">
            <a href="google.com" className="UsableNetAssistive">
              enable accessibility
            </a>
            <span className="mx-2">|</span>
            <a className="text-muted mx-2" href="/buygiftcards">
              Gift card
            </a>
            <span className="mx-2">|</span>
            <a className="text-muted mx-2" href="/account/order-search/">
              Track your order
            </a>
          </div>
          <div className="col-md-4 col-12 text-center">
            <a className="_HP_livesSaved__link--center" href="/adoption/people-saving-pets/ca-adoption-landing.html">
              <span id="livesSaved">
                10,459,066 lives saved.
              </span>
            </a>
          </div>
          <div className="col-md-4 col-12 text-md-right text-center">
            <span>Sign up, earn points, get treats</span>
          </div>
        </section>
      </div>
      <hr/>
    </div>
  );
}

export default AdoptionHeader;
