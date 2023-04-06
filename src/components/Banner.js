import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const images = {};
function importAll(r) {
  r.keys().forEach((key) => (images[key] = r(key)));
}
importAll(require.context("../assets", false, /\.png$/));
export default function Banner() {
  return (
    <div>
      {" "}
      <div id="banner">
        <a href="/">
          <img id="product" alt="product" src={images["./bannerpic.png"]} />
          <span className="stars" id="star-1">
            <FontAwesomeIcon icon={faStar} style={{ color: "#a2a5a9" }} />
          </span>
          <span className="stars" id="star-2">
            <FontAwesomeIcon icon={faStar} style={{ color: "#a2a5a9" }} />
          </span>
          <span className="stars" id="star-3">
            <FontAwesomeIcon icon={faStar} style={{ color: "#a2a5a9" }} />
          </span>
          <span className="stars" id="star-4">
            <FontAwesomeIcon icon={faStar} style={{ color: "#a2a5a9" }} />
          </span>
          <span className="stars" id="star-5">
            <FontAwesomeIcon icon={faStar} style={{ color: "#a2a5a9" }} />
          </span>
          <span className="stars" id="star-6">
            <FontAwesomeIcon icon={faStar} style={{ color: "#a2a5a9" }} />
          </span>
          <span className="stars" id="star-7">
            <FontAwesomeIcon icon={faStar} style={{ color: "#a2a5a9" }} />
          </span>
          <span className="stars" id="star-8">
            <FontAwesomeIcon icon={faStar} style={{ color: "#a2a5a9" }} />
          </span>
          <span className="stars" id="star-9">
            <FontAwesomeIcon icon={faStar} style={{ color: "#a2a5a9" }} />
          </span>
          <span className="stars" id="star-10">
            <FontAwesomeIcon icon={faStar} style={{ color: "#a2a5a9" }} />
          </span>
          <div id="badge">SAVE NOW!</div>
          <div id="sale">
            <span id="sale-text">30% off All Bird Products</span>
            <br />
            <span id="button">See Special</span>
          </div>
        </a>
      </div>
    </div>
  );
}
