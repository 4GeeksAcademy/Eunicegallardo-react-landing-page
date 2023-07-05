import React from "react";

//include images into your bundle
import Jumbotron from "./Jumbotron";
import Navbar from "./Navbar";
import Card from "./Card";
import Footer from "./Footer";

let cardsInfo = [
	{title: "Don't give up", text: '“If everything was perfect you would never learn and you would never grow.” - Beyonce', buttonURL:'', buttonLabel: 'Choose this phrase'},
	{title: 'Keep fighting!', text: '“Great moments are born from great opportunities.” - Herb Brooks', buttonURL:'', buttonLabel: 'Choose this phrase'},
	{title: 'Stay strong', text: '“If you’re walking down the right path and you’re willing to keep walking, eventually you’ll make progress.” - Barack Obama', buttonURL:'', buttonLabel: 'Choose this phrase'},
	{title: 'Hang in there', text: '“There is no must in art because art is free.” - Wassily Kandinsky', buttonURL:'', buttonLabel: 'Choose this phrase'},
]

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar></Navbar>
			<div className="container-fluid mt-4 ps-4 pe-4">
				<Jumbotron title="Welcome to our safe place" description='“How wonderful it is that nobody need wait a single moment before starting to improve the world.” Anna Frank' buttonURL="" buttonLabel="Favorite phrases"></Jumbotron>
			</div>
			<div className="container-fluid ps-3 mt-4">
				<div className="row ps-4">
					{
						cardsInfo.map((value, index)=>{
							return <Card key={index} item={value} position={index}/>
						})
					}
				</div>
			</div>
			<Footer className="footer"></Footer>
		</div>
	);
};

export default Home;
