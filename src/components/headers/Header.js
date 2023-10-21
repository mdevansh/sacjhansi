import "../css/main.css";
import "./HomepageHeader.css";

export default function HomepageHeader() {
  return (
    <div className="HomepageHeader" fl>
      <img
        className="HeaderLogo"
        src={require("../images/UPGovtLogo.png")}
        alt="Lolo"
      />
      <p className="HeaderText">
        Bundelkhand Government Ayurvedic College And Hospital
        <br></br>
        Jhansi, Uttar Pradesh
      </p>
    </div>
  );
}
