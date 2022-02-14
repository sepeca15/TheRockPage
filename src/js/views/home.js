import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Card from "../component/card";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Hello Rigo!</h1>
		<p>
			<img src={rigoImage} />
		</p>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
		<Card url="https://www.muycomputer.com/wp-content/uploads/2020/12/google.png" goTo="/home" titulo="asdasdasda xasdasd" desc="asdfasdfadsfadsf sadfasdfadsfasdkfnaf"/>
		<Card url={rigoImage} goTo="/demo" titulo="demo" desc="te lleva a demo"/>
		<Card url="https://i.blogs.es/0260ea/google-fotos-buscar/1366_2000.jpg" goTo="/single/1" titulo="single" desc="asdasdasdasd "/>
	</div>
);
