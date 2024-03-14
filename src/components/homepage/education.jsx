import React from "react";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/education.css";

const Education = () => {
	return (
		<div className="education">
			<Card
				icon={faSchool}
				title="Education"
				body={
					<div className="education-body">
						<div className="education">
							<div className="education-title">BSc Sofware Engineering</div>
							<div className="education-subtitle">
								UST, Bannu, KPK
							</div>
							<div className="education-duration">2018 - 2022</div>
						</div>

						<div className="education">
							<div className="education-title">HSSC</div>
							<div className="education-subtitle">
								BISE, Bannu, KPK
							</div>
							<div className="education-duration">2016 - 2018</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Education;
