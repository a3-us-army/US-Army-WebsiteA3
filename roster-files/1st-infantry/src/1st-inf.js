import React, { useMemo } from "react";

const MilitaryOrgChart = () => {
	// Define the organizational structure as data
	const orgData = {
		troop_hq: [
			{ role: "Troop Commander", name: "" },
			{ role: "Troop Executive Officer", name: "" },
			{ role: "Troop Sergeant", name: "" },
			{ role: "JTAC", name: "" },
			{ role: "Driver (CAPT)", name: "" },
			{ role: "Driver (1LT)", name: "" },
			{ role: "Squadron RTO", name: "" },
			{ role: "Squadron RTO", name: "" },
		],
		platoon_1_hq: [
			{ role: "Platoon Leader", name: "LT | D. Gator" },
			{ role: "Platoon Sergeant", name: "" },
			{ role: "Platoon Radio Operator", name: "" },
			{ role: "Combat Medic Specialist", name: "" },
			{ role: "Forward Observer", name: "" },
		],
		platoon_2_hq: [
			{ role: "Platoon Leader", name: "" },
			{ role: "Platoon Sergeant", name: "" },
			{ role: "Platoon Radio Operator", name: "" },
			{ role: "Combat Medic Specialist", name: "" },
			{ role: "Forward Observer", name: "" },
		],
		platoon_3_hq: [
			{ role: "Platoon Leader", name: "" },
			{ role: "Platoon Sergeant", name: "" },
			{ role: "Platoon Radio Operator", name: "" },
			{ role: "Combat Medic Specialist", name: "" },
			{ role: "Forward Observer", name: "" },
		],
		platoon_4_hq: [
			{ role: "Platoon Leader", name: "" },
			{ role: "Platoon Sergeant", name: "" },
			{ role: "Platoon Radio Operator", name: "" },
			{ role: "Combat Medic Specialist", name: "" },
			{ role: "Forward Observer", name: "" },
		],
		platoon_1: [
			{
				name: "Rifle Squad 1",
				members: [
					{ role: "Squad Leader", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Driver", name: "" },
				],
			},
			{
				name: "Rifle Squad 2",
				members: [
					{ role: "Squad Leader", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Driver", name: "" },
				],
			},
			{
				name: "Exlposive Weapons Squad",
				members: [
					{ role: "Squad Leader", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Mortar Man", name: "" },
					{ role: "Mortar Man", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Heavy AT", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Light AT", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Driver", name: "" },
				],
			},
			{
				name: "Machine Weapons Squad",
				members: [
					{ role: "Squad Leader", name: "" },
					{ role: "Machine Gunner", name: "" },
					{ role: "Assistant Gunner", name: "" },
					{ role: "Machine Gunner", name: "" },
					{ role: "Assistant Gunner", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Driver", name: "" },
				],
			},
		],
		platoon_2: [
			{
				name: "Rifle Squad 1",
				members: [
					{ role: "Squad Leader", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Driver", name: "" },
				],
			},
			{
				name: "Rifle Squad 2",
				members: [
					{ role: "Squad Leader", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Driver", name: "" },
				],
			},
			{
				name: "Rifle Squad 3",
				members: [
					{ role: "Squad Leader", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Driver", name: "" },
				],
			},
			{
				name: "Machine Weapons Squad",
				members: [
					{ role: "Squad Leader", name: "" },
					{ role: "Machine Gunner", name: "" },
					{ role: "Assistant Gunner", name: "" },
					{ role: "Machine Gunner", name: "" },
					{ role: "Assistant Gunner", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Driver", name: "" },
				],
			},
		],
		platoon_3: [
			{
				name: "Rifle Squad 1",
				members: [
					{ role: "Squad Leader", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Driver", name: "" },
				],
			},
			{
				name: "Rifle Squad 2",
				members: [
					{ role: "Squad Leader", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Driver", name: "" },
				],
			},
			{
				name: "Rifle Squad 3",
				members: [
					{ role: "Squad Leader", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Driver", name: "" },
				],
			},
			{
				name: "Machine Weapons Squad",
				members: [
					{ role: "Squad Leader", name: "" },
					{ role: "Machine Gunner", name: "" },
					{ role: "Assistant Gunner", name: "" },
					{ role: "Machine Gunner", name: "" },
					{ role: "Assistant Gunner", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Driver", name: "" },
				],
			},
		],
		platoon_4: [
			{
				name: "Rifle Squad 1",
				members: [
					{ role: "Squad Leader", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Driver", name: "" },
				],
			},
			{
				name: "Rifle Squad 2",
				members: [
					{ role: "Squad Leader", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Driver", name: "" },
				],
			},
			{
				name: "Rifle Squad 3",
				members: [
					{ role: "Squad Leader", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Team Leader", name: "" },
					{ role: "Automatic Rifleman", name: "" },
					{ role: "Grenadier", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Driver", name: "" },
				],
			},
			{
				name: "Machine Weapons Squad",
				members: [
					{ role: "Squad Leader", name: "" },
					{ role: "Machine Gunner", name: "" },
					{ role: "Assistant Gunner", name: "" },
					{ role: "Machine Gunner", name: "" },
					{ role: "Assistant Gunner", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Driver", name: "" },
				],
			},
		],
		platoon_5: [
			{
				name: "Medic Squad",
				members: [
					{ role: "Medical Officer ", name: "" },
					{ role: "Combat Medic Specialist", name: "" },
					{ role: "Combat Medic Specialist", name: "" },
					{ role: "Combat Medic Specialist", name: "" },
					{ role: "Combat Medic Specialist", name: "" },
					{ role: "Combat Medic Specialist", name: "" },
					{ role: "Vehicle Commander", name: "" },
					{ role: "Ambulance Driver", name: "" },
				],
			},
			{
				name: "Maintenance Squad | Blacksmiths",
				members: [
					{ role: "Maintenance Warrant Officer", name: "" },
					{ role: "Stryker Systems Maintainer", name: "" },
					{ role: "Stryker Systems Maintainer", name: "" },
					{ role: "Stryker Systems Maintainer", name: "" },
				],
			},
			{
				name: "Archer Battery Squad",
				members: [
					{ role: "Field Artillery Officer", name: "" },
					{ role: "Battery Sergeant", name: "" },
					{ role: "Cannon Crewmember", name: "" },
					{ role: "Cannon Crewmember", name: "" },
					{ role: "Cannon Crewmember", name: "" },
					{ role: "Cannon Crewmember", name: "" },
					{ role: "Cannon Crewmember", name: "" },
					{ role: "Cannon Crewmember", name: "" },
					{ role: "Cannon Crewmember", name: "" },
					{ role: "Cannon Crewmember", name: "" },
				],
			},
			{
				name: "Reconnaissance Squad",
				members: [
					{ role: "Team Lead", name: "" },
					{ role: "Drone Pilot", name: "" },
					{ role: "Sniper", name: "" },
					{ role: "Spotter", name: "" },
					{ role: "Marksman", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Rifleman", name: "" },
					{ role: "Rifleman", name: "" },
				],
			},
		],
	};

	// Calculate statistics using useMemo to optimize performance
	const stats = useMemo(() => {
		let totalPositions = orgData.troop_hq.length;
		let filled = orgData.troop_hq.filter(
			(pos) => pos.name && pos.name !== "N/A",
		).length;

		// biome-ignore lint/complexity/noForEach: Annoying and works fine
		orgData.platoon_1.forEach((team) => {
			totalPositions += team.members.length;
			filled += team.members.filter((member) => member.name).length;
		});

		// biome-ignore lint/complexity/noForEach: Annoying and works fine
		orgData.platoon_2.forEach((team) => {
			totalPositions += team.members.length;
			filled += team.members.filter((member) => member.name).length;
		});

		// biome-ignore lint/complexity/noForEach: Annoying and works fine
		orgData.platoon_3.forEach((team) => {
			totalPositions += team.members.length;
			filled += team.members.filter((member) => member.name).length;
		});

		// biome-ignore lint/complexity/noForEach: Annoying and works fine
		orgData.platoon_4.forEach((team) => {
			totalPositions += team.members.length;
			filled += team.members.filter((member) => member.name).length;
		});

		// biome-ignore lint/complexity/noForEach: Annoying and works fine
		orgData.platoon_5.forEach((team) => {
			totalPositions += team.members.length;
			filled += team.members.filter((member) => member.name).length;
		});

		return {
			totalPositions,
			filled,
			vacant: totalPositions - filled,
			teams:
				orgData.platoon_1.length +
				orgData.platoon_2.length +
				orgData.platoon_3.length +
				orgData.platoon_4.length +
				orgData.platoon_5.length,
		};
	}, []);

	return (
		<div className="min-h-screen bg-gray-500 p-6">
			<div className="max-w-7xl mx-auto bg-gray-600 rounded-xl shadow-lg overflow-hidden">
				{/* Header */}
				<div className="bg-red-700 p-8 text-center border-b-4 border-red-500">
					<h1 className="text-4xl font-bold text-black mb-2">
						1st Infantry Division
					</h1>
					<h2 className="text-3xl font-semibold text-black">Atlas Co.</h2>
				</div>
				{/* Command Section */}
				<div className="p-6 border-b bg-gray-600">
					<div className="max-w-2xl mx-auto">
						<h3 className="text-lg font-semibold mb-4 text-white">
							Troop Headquarters
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{orgData.troop_hq.map((position, index) => (
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

				{/* Platoon 1 Header*/}
				<div className="bg-red-700 p-8 text-center border-b-4 border-red-500">
					<h1 className="text-4xl font-bold text-black mb-2">
						1st Infantry Division
					</h1>
					<h2 className="text-3xl font-semibold text-black">Atlas Co.</h2>

					<div className="mt-4 inline-block bg-royal_purple px-6 py-2 rounded-full">
						<h3 className="text-xl font-medium text-gray-400">Platoon #1</h3>
					</div>
				</div>

				{/* platoon HQ 1 */}
				<div className="p-6 border-b bg-gray-600">
					<div className="max-w-2xl mx-auto">
						<h3 className="text-lg font-semibold mb-4 text-white">
							Platoon 1 HQ
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{orgData.platoon_1_hq.map((position, index) => (
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

				{/* Platoon 1 Squads*/}
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
										<span className="text-white font-medium">
											{member.name || (
												<span className="text-red-500">Vacant</span>
											)}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Platoon 2 Header*/}
				<div className="bg-red-700 p-8 text-center border-b-4 border-red-500">
					<h1 className="text-4xl font-bold text-black mb-2">
						1st Infantry Division
					</h1>
					<h2 className="text-3xl font-semibold text-black">Atlas Co.</h2>

					<div className="mt-4 inline-block bg-royal_purple px-6 py-2 rounded-full">
						<h3 className="text-xl font-medium text-gray-400">Platoon #2</h3>
					</div>
				</div>

				{/* platoon HQ 2 */}
				<div className="p-6 border-b bg-gray-600">
					<div className="max-w-2xl mx-auto">
						<h3 className="text-lg font-semibold mb-4 text-white">
							Platoon 2 HQ
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{orgData.platoon_2_hq.map((position, index) => (
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

				{/* Platoon 2 Squads*/}
				<div className="p-6 grid md:grid-cols-3 gap-6">
					{orgData.platoon_2.map((team, teamIndex) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div key={teamIndex} className="bg-gray-600 rounded-xl p-4 border">
							<h3 className="text-xl font-semibold mb-4 text-white border-b pb-2 border-gray-400">
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
										<span className=" text-white font-medium">
											{member.name || (
												<span className="text-red-500">Vacant</span>
											)}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Platoon 3 Header*/}
				<div className="bg-red-700 p-8 text-center border-b-4 border-red-500">
					<h1 className="text-4xl font-bold text-black mb-2">
						1st Infantry Division
					</h1>
					<h2 className="text-3xl font-semibold text-black">Atlas Co.</h2>

					<div className="mt-4 inline-block bg-royal_purple px-6 py-2 rounded-full">
						<h3 className="text-xl font-medium text-gray-400">Platoon #3</h3>
					</div>
				</div>

				{/* platoon HQ 3 */}
				<div className="p-6 border-b bg-gray-600">
					<div className="max-w-2xl mx-auto">
						<h3 className="text-lg font-semibold mb-4 text-white">
							Platoon 3 HQ
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{orgData.platoon_3_hq.map((position, index) => (
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

				{/* Platoon 3 Squads*/}
				<div className="p-6 grid md:grid-cols-3 gap-6">
					{orgData.platoon_3.map((team, teamIndex) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div key={teamIndex} className="bg-gray-600 rounded-xl p-4 border">
							<h3 className="text-xl font-semibold mb-4 text-white border-b pb-2 border-gray-400">
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
										<span className=" text-white font-medium">
											{member.name || (
												<span className="text-red-500">Vacant</span>
											)}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Platoon 4 Header*/}
				<div className="bg-red-700 p-8 text-center border-b-4 border-red-500">
					<h1 className="text-4xl font-bold text-black mb-2">
						1st Infantry Division
					</h1>
					<h2 className="text-3xl font-semibold text-black">Atlas Co.</h2>

					<div className="mt-4 inline-block bg-royal_purple px-6 py-2 rounded-full">
						<h3 className="text-xl font-medium text-gray-400">Platoon #4</h3>
					</div>
				</div>

				{/* platoon HQ 4 */}
				<div className="p-6 border-b bg-gray-600">
					<div className="max-w-2xl mx-auto">
						<h3 className="text-lg font-semibold mb-4 text-white">
							Platoon 4 HQ
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{orgData.platoon_4_hq.map((position, index) => (
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

				{/* Platoon 4 Squads*/}
				<div className="p-6 grid md:grid-cols-3 gap-6">
					{orgData.platoon_4.map((team, teamIndex) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div key={teamIndex} className="bg-gray-600 rounded-xl p-4 border">
							<h3 className="text-xl font-semibold mb-4 text-white border-b pb-2 border-gray-400">
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
										<span className=" text-white font-medium">
											{member.name || (
												<span className="text-red-500">Vacant</span>
											)}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>

				{/* Platoon 5 Header*/}
				<div className="bg-red-700 p-8 text-center border-b-4 border-red-500">
					<h1 className="text-4xl font-bold text-black mb-2">
						1st Infantry Division
					</h1>
					<h2 className="text-3xl font-semibold text-black">Atlas Co.</h2>

					<div className="mt-4 inline-block bg-royal_purple px-6 py-2 rounded-full">
						<h3 className="text-xl font-medium text-gray-400">Platoon #5</h3>
					</div>
				</div>

				{/* Platoon 5 Squads*/}
				<div className="p-6 grid md:grid-cols-3 gap-6">
					{orgData.platoon_5.map((team, teamIndex) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						<div key={teamIndex} className="bg-gray-600 rounded-xl p-4 border">
							<h3 className="text-xl font-semibold mb-4 text-white border-b pb-2 border-gray-400">
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
										<span className=" text-white font-medium">
											{member.name || (
												<span className="text-red-500">Vacant</span>
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
