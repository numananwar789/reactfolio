import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work Experience"
				body={
					<div className="works-body">
						<div className="work">
							<div className="work-title">PHP Developer <small>(Feb 2023 - Present)</small></div>
							<div className="work-subtitle">
								Working as a PHP Developer in <a href="https://lalaintltravel.pk/" target="blank"> Lala Group of Companies. </a>
							</div>
						</div>

						<div className="work">
							<div className="work-title">Laravel Developer <small>(Nov 2022 - Feb 2023)</small></div>
							<div className="work-subtitle">
								Worked as a Laravel Developer in <a href="https://alrighttech.com/" target="blank"> Alright Tech Private Limited. </a>
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
