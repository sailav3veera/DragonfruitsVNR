import "./index.css";
import Sidebar from "../Sidebar";

function Contact() {
  return (
    <div className="contactpagecontainer">
      <Sidebar className="sidebarset"/>

      <div className="contactcontainer">
        <h1>Please contact to order</h1>
        <div className="eachdetails">
          <h2>Name : </h2>
          <p>Nagarao Naidu</p>
        </div>
        <div className="eachdetails">
          <h2>Contact Number : </h2>
          <p>8333049462</p>
        </div>
        <div className="eachdetails">
          <h2>Email : </h2>
          <p>dragonfruitsorganic@gmail.com</p>
        </div>
        <div className="eachdetails">
          <h2>Location : </h2>
          <p>Pulletikurru, East godavari Dst, 533239</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
