import { Component } from "react";
import "./index.css";
import Sidebar from "../Sidebar";
import { IoLeaf } from "react-icons/io5";
import { GiThreeLeaves } from "react-icons/gi";
import { FaLeaf } from "react-icons/fa6";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { PiBarn } from "react-icons/pi";
import { FaHeartPulse } from "react-icons/fa6";

class Home extends Component {
  render() {
    return (
      <div className="Homepagecontainer">
        <Sidebar />
        <div className="homecontent">
          <div className="homefirstcontainer">
            <div>
              <h1 className="headinghome">
                <span className="heading1">Welcome to</span> <br /> Nagarao
                Naidu's <br />
                <span className="heading2">Organic Dragon Fruit Farm</span>
              </h1>
              <hr />
              <p className="paragahome">
                Freshly grown organic dragon fruits from the heart of{" "}
                <span className="heading2">Konaseema.</span> Cultivated
                naturally with love, purity, and sustainable farming practices
                to deliver healthy and delicious fruits directly from farm to
                your family.
              </p>
              <button className="buttonourfarm">
                <IoLeaf className="icon-leaf" /> Explore Our Farm
              </button>
            </div>
            <img
              src="https://res.cloudinary.com/dnoycfpby/image/upload/v1779257162/ChatGPT_Image_May_20_2026_11_35_49_AM_pz5zx0.png"
              alt="homepage dragonfruits pink"
              className="imagedragon"
            />
          </div>
          <div className="homesecondcontainer">
            <h1 className="headingwhychoose">
              <GiThreeLeaves /> Why Choose Our Dragon Fruits? <GiThreeLeaves />
            </h1>
            <hr className="hrline" />
            <div className="minicontainers">
              <div className="organiccontainer">
                <FaLeaf className="organicleaf" />
                <h3>100% Organic</h3> <hr className="organichr" />
                <p>
                  No harmful chemicals or artificial fertilizers are used in our
                  farming process.
                </p>
                <FaCanadianMapleLeaf />
              </div>
              <div className="organiccontainer">
                <PiBarn className="organicleaf" />
                <h3>Fresh From Farm</h3> <hr className="organichr" />
                <p>
                  Handpicked fresh dragon fruits directly delivred from our farm
                  in Konaseema.
                </p>
                <FaCanadianMapleLeaf />
              </div>
              <div className="organiccontainer">
                <FaHeartPulse className="organicleaf" />
                <h3>Healthy & Nutritious</h3> <hr className="organichr" />
                <p>
                  Rich in antioxidants, vitamins, and fiber for a healthy
                  lifestyle.
                </p>
                <FaCanadianMapleLeaf />
              </div>
            </div>
            <div className="footdetails">
              <h3>
                <GiThreeLeaves /> From our land to your health -{" "}
                <span className="heading2">
                  Naturally Organic, Truly Konaseema.
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
