import { faCaretDown, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
} from "mdb-react-ui-kit";
import React from "react";
import Dropdown from "react-multilevel-dropdown";
export default function Navbar() {
  return (
    <MDBNavbar expand="lg" dark bgColor="primary">
      <MDBContainer fluid>
        <MDBNavbarNav>
          <MDBNavbarItem className="ms-auto flex-grow-1">
            <Dropdown
              title={
                <>
                  <span style={{ marginRight: "10px" }}>Animals</span>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{ color: "#e6e6e6" }}
                  />
                </>
              }
              buttonVariant="tertiary"
              style={{ color: "white", fontSize: "20px" }}
            >
              <Dropdown.Item
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                Dogs
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{ color: "grey" }}
                />
                <Dropdown.Submenu position="right">
                  <Dropdown.Item>Dog food</Dropdown.Item>
                  <Dropdown.Item>Dog supplies</Dropdown.Item>
                  <Dropdown.Item>Dog treats</Dropdown.Item>
                </Dropdown.Submenu>
              </Dropdown.Item>
              <Dropdown.Item
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                Cats
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{ color: "grey" }}
                />
                <Dropdown.Submenu position="right">
                  <Dropdown.Item>Cat food</Dropdown.Item>
                  <Dropdown.Item>Cat supplies</Dropdown.Item>
                  <Dropdown.Item>Cat treats</Dropdown.Item>
                </Dropdown.Submenu>
              </Dropdown.Item>
              <Dropdown.Item
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                Birds
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{ color: "grey" }}
                />
                <Dropdown.Submenu position="right">
                  <Dropdown.Item>Bird food</Dropdown.Item>
                  <Dropdown.Item>Bird supplies</Dropdown.Item>
                  <Dropdown.Item>Bird treats</Dropdown.Item>
                </Dropdown.Submenu>
              </Dropdown.Item>
            </Dropdown>
          </MDBNavbarItem>

          <MDBNavbarItem>
            <Dropdown
              title={
                <>
                  <span style={{ marginRight: "10px" }}>Deals</span>
                  <FontAwesomeIcon
                    icon={faCaretDown}
                    style={{ color: "#e6e6e6" }}
                  />
                </>
              }
              buttonVariant="tertiary"
              style={{ color: "white", fontSize: "20px" }}
            >
              <Dropdown.Item
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                Up to 50% off
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{ color: "grey" }}
                />
                <Dropdown.Submenu position="right">
                  <Dropdown.Item>Dog products</Dropdown.Item>
                  <Dropdown.Item>Cat products</Dropdown.Item>
                  <Dropdown.Item>Bird products</Dropdown.Item>
                </Dropdown.Submenu>
              </Dropdown.Item>
              <Dropdown.Item
                style={{ display: "flex", justifyContent: "space-evenly" }}
              >
                Free Shipping
                <FontAwesomeIcon
                  icon={faCaretRight}
                  style={{ color: "grey" }}
                />
                <Dropdown.Submenu position="right">
                  <Dropdown.Item>On orders over $50</Dropdown.Item>
                  <Dropdown.Item>On orders over $100</Dropdown.Item>
                  <Dropdown.Item>On orders over $150</Dropdown.Item>
                </Dropdown.Submenu>
              </Dropdown.Item>
            </Dropdown>
          </MDBNavbarItem>
          <MDBNavbarItem className="flex-grow-1">
            <Dropdown
              title="Blog"
              buttonVariant="tertiary"
              style={{ color: "white", fontSize: "20px" }}
            ></Dropdown>
          </MDBNavbarItem>

          <MDBNavbarItem className="flex-grow-1" style={{ display: "flex", justifyContent: "space-evenly" }}>
            <Dropdown
              title="About Us"
              buttonVariant="tertiary"
              style={{ color: "white", fontSize: "20px" }}
            ></Dropdown>
            <Dropdown
              title="Contact"
              buttonVariant="tertiary"
              style={{ color: "white", fontSize: "20px" }}
            ></Dropdown>
          </MDBNavbarItem>
        </MDBNavbarNav>
      </MDBContainer>
    </MDBNavbar>
  );
}
