import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHandHoldingHeart, faSearch } from "@fortawesome/free-solid-svg-icons";
const PetSmartHeader = () => {
  return (
    <div className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container ">
        {" "}
        {/* Added justify-content-center class */}
        <a className="navbar-brand" href="/">
          <img
            style={{ height: "100px", width: "100px" }}
            src="https://logos-world.net/wp-content/uploads/2022/11/PetSmart-Logo.png"
            alt="PetSmart"
          />
          <span className="visually-hidden">PetSmart</span>
        </a>
        <div className="collapse navbar-collapse ml-auto" id="navbarSupportedContent" style={{display:'flex',justifyContent:'space-around'}}>
          <form className="d-flex ml-auto" style={{justifySelf:'flex-start'}}>
            <div style={{ position: "relative" }}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="search"
                aria-label="Search"
                style={{ padding: "10px 30px" }}
              />
              <FontAwesomeIcon
                icon={faSearch}
                style={{
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                  right: "10px",
                }}
              />
            </div>
          </form>
          <div className="header-signin d-flex align-items-center">
          <FontAwesomeIcon icon={faHandHoldingHeart} size='xl' style={{color: "#ff055d",marginRight:'20px'}} />
            <div className="dropdown">
              <a
                href="https://www.petsmart.com/account/"
                className="btn btn-outline-secondary dropdown-toggle"
                role="button"
                id="signin-dropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span>sign in</span> <span className="caret"></span>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="signin-dropdown"
              >
                <li>
                  <section className="_UT_login">
                    <div
                      className="_UT_login__container"
                      style={{
                        backgroundImage:
                          "url(https://s7d2.scene7.com/is/image/PetSmart/LY_5_CompleteProfileSuccessModal_ConfettiBackground_allsize_0611)",
                      }}
                    >
                      <FontAwesomeIcon icon={faHandHoldingHeart} style={{color: "#ff055d"}} />
                      <div className="_UT_login__content">
                        <p>
                          Join our loyalty program &amp; earn points every time
                          you shop!
                        </p>
                        <a
                          className="create-account-header"
                          href="https://www.petsmart.com/on/demandware.store/Sites-PetSmart-Site/default/AccountController-CreateAccount?origin=signin&amp;type=bonuspoints&amp;regview=true"
                        >
                          Sign up
                        </a>
                      </div>
                    </div>
                    <button className="btn btn-primary header-login-cta mt-2">
                      login
                    </button>
                  </section>
                </li>
              </ul>
            </div>
            <a href="/cart/" className="btn btn-outline-secondary ms-2">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetSmartHeader;
