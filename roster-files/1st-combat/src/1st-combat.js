import React, { useMemo } from "react";

const MilitaryOrgChart = () => {
	// Define the organizational structure as data
	const orgData = {
		commandElement: [
			{ role: "HAC", name: "LT | S. Nvklear" },
			{ role: "Executive Officer", name: "WO | Y. Ramrod" },
		],
		platoon_1: [
			{
				name: "NightMares",
				members: [
					{ role: "Pilot", name: "1LT | S.Nvklear" },
					{ role: "Copilot", name: "WO | Y. Ramrod" },
				],
			},
			{
				name: "Fighting Eagles",
				members: [
					{ role: "Pilot", name: "SGT | C. Kyle" },
					{ role: "Copilot", name: "" },
				],
			},
			{
				name: "The Fighting Sixth",
				members: [
					{ role: "Pilot", name: "" },
					{ role: "Copilot", name: "" },
				],
			},
		],
	};

	// Calculate statistics using useMemo to optimize performance
	const stats = useMemo(() => {
		let totalPositions = orgData.commandElement.length;
		let filled =
			orgData.commandElement.filter((pos) => pos.name && pos.name !== "N/A")
				.length - 2;

		// biome-ignore lint/complexity/noForEach: <explanation>
		orgData.platoon_1.forEach((team) => {
			totalPositions += team.members.length;
			filled += team.members.filter((member) => member.name).length;
		});

		return {
			totalPositions,
			filled,
			vacant: totalPositions - filled - 2,
			teams: orgData.platoon_1.length,
		};
	}, []);

	return (
		<div className="min-h-screen bg-gray-500 p-6">
			<div className="max-w-7xl mx-auto bg-gray-600 rounded-xl shadow-lg overflow-hidden">
				{/* Header */}
				<div className="bg-rose-800 p-8 text-center border-b-4 border-rose-800">
					<h1 className="text-4xl font-bold text-gray-950 mb-2">
						1st Combat Aviation Brigade
					</h1>
					<h2 className="text-3xl font-semibold text-gray-950">Alpha Co.</h2>
					<div className="mt-4 inline-block bg-blue-500 px-6 py-2 rounded-full">
						<h3 className="text-xl font-medium text-gray-950">Platoon #1</h3>
					</div>
				</div>

				{/* Command Section */}
				<div className="p-6 border-b bg-gray-600">
					<div className="max-w-2xl mx-auto">
						<h3 className="text-lg font-semibold mb-4 text-white">
							Command Element
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{orgData.commandElement.map((position, index) => (
								// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
								<div key={index} className="p-4 bg-gray-800 rounded-lg shadow">
									<div className="text-sm text-white">{position.role}</div>
									<div
										className={`text-white font-medium ${position.name === "N/A" ? "text-white" : ""}`}
									>
										{position.name || (
											<span className="text-red-500">Vacant</span>
										)}
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Units Grid */}
				<div className="p-6 grid md:grid-cols-3 gap-6">
					{orgData.platoon_1.map((team, teamIndex) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div key={teamIndex} className="bg-gray-600 rounded-xl p-4 border">
							<h3 className="text-xl font-semibold mb-4 text-white border-b pb-2">
								{team.name}
							</h3>
							<ul className="space-y-3">
								{team.members.map((member, memberIndex) => (
									<li
										// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
										key={memberIndex}
										className="flex justify-between items-center bg-gray-800 p-3 rounded shadow-sm"
									>
										<span className="text-sm text-white">{member.role}</span>
										<span className="text-green-700 font-medium">
											{member.name || (
												<span className="text-gray-400">Vacant</span>
											)}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Statistics Footer */}
				<div className="bg-gray-600 p-6 border-t">
					<div className="max-w-3xl mx-auto grid grid-cols-4 gap-6 text-center">
						<div className="bg-gray-800 p-4 rounded-lg shadow-sm">
							<div className="text-sm text-white">Total Positions</div>
							<div className="text-2xl font-semibold text-gray-300">
								{stats.totalPositions}
							</div>
						</div>
						<div className="bg-gray-800 p-4 rounded-lg shadow-sm">
							<div className="text-sm text-white">Filled</div>
							<div className="text-2xl font-semibold text-green-600">
								{stats.filled}
							</div>
						</div>
						<div className="bg-gray-800 p-4 rounded-lg shadow-sm">
							<div className="text-sm text-white">Vacant/Closed</div>
							<div className="text-2xl font-semibold text-red-500">
								{stats.vacant}
							</div>
						</div>
						<div className="bg-gray-800 p-4 rounded-lg shadow-sm">
							<div className="text-sm text-white">Teams</div>
							<div className="text-2xl font-semibold text-gray-300">
								{stats.teams}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MilitaryOrgChart;
