import s from "./Preloader.module.css";
import loaderPic from "../../../assets/img/loader.gif";
import React from "react";

let Preloader = (props) => {
    return (
        <img className={s.preloader} src={loaderPic}/>
    );
};

export default Preloader;