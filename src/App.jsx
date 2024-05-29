import React, { useRef } from "react";
import HeroSectiontwo from "./components/HeroSection";
import Globe from "./components/Globe";
import Carousel from "./components/Carousel";
import SocialMedia from "./components/SocialMedia";
import Footer from "./components/Footer";
import Objectives from "./components/Objectives";
const App = () => {
	const bottomRef = useRef(null);
	const TeamRef = useRef(null);

	return (
		<div className="App">
			<HeroSectiontwo TeamRef={TeamRef}/>
			<Globe />
			<Carousel ref={TeamRef} />
			<SocialMedia/>
			<Objectives/>
			<Footer/>
		</div>
	);
};

export default App;
