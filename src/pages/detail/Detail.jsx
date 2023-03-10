import React from "react";
import "../home/home.css";
import Navbar from "../../navbar/navbar";
import Foot from "../../homePage/foot";
import Form from "../../homePage/form";
import detail from "../../data/detail.json";
import imgLocal from "./address-icon-png-2.jpg";
import "./mystyle.css";

const Detail = () => {
  return (
    <React.Fragment>
      <div className="back" style={{ height: "180px" }}></div>
      <div className="home">
        <Navbar />
      </div>
      <div className="home">
        <button className="btn reserve">Reserve or Book Now !</button>
        <h1>{detail.name}</h1>

        {/* <img
            src="https://www.nicepng.com/png/detail/24-244464_store-location-icon-png-download-orange-address-icon.png"
            alt="location"
            width="50"
            height="50"
          ></img> */}
        <span>
          <img src={imgLocal} alt="location" width="15" height="20"></img>{" "}
          {detail.address}
        </span>
        <p className="dis">{detail.distance}</p>
        <p className="pri">{detail.price}</p>
        <div className="layout">
          {detail.photos.map((e, index) => {
            return (
              <img className="detail-img" src={e} key={index} alt={index}></img>
            );
          })}
        </div>
        <div className="content">
          <div className="fly">
            <h5>Perfect for a 9-night stay!</h5>
            <p>
              Located in the real heart of Krakow, this property has an
              excellent location score of 9.8!{" "}
            </p>
            <p className="specialPrice">
              <span style={{ fontWeight: "700" }}>
                ${detail.nine_night_price}
              </span>
              {`(9 nights)`}
            </p>
            <button className="btn ">Reserve or Book Now !</button>
          </div>
          <h3>{detail.title}</h3>
          <p>{detail.description}</p>
        </div>
      </div>
      <Form />
      <div className="home">
        <Foot />
      </div>
    </React.Fragment>
  );
};
// ko th??? l???y ???????ng d???n t????ng ?????i theo c??ch th??ng th?????ng m?? ph???i import n?? xong m???i d??ng src={imgLocal}
// c?? th??? d??ng ???????ng d???n tr???c ti???p ???????c, ngo??i ra c??n nhi???u c??ch kh??c n??n xem c??c t??i li???u ???? t???i v???
export default Detail;
