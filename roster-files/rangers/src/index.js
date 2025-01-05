import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MilitaryOrgChart from "./75th-roster";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<MilitaryOrgChart />
	</React.StrictMode>,
);
