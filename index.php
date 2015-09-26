<!DOCTYPE html>

<html oncontextmenu="return false">

	<head>

		<title>Awesome Game, Poor HTML</title>

		<link type="text/css" rel="stylesheet" href="style6.css" />

		<script src="script2.04.js"></script>

	</head>

	<body>

		<section id="map" style="display: none;">

			<img src="world_map_1.jpg" />

		</section>

		<section id="manage" class="manage" style="display: none;">

		<div class="button" id="upgradeWoodClick">

			<span>Upgrade woodclick</span>

		</div>

		<br />

		<div class="button" id="upgradeStoneClick">

			<span>Upgrade stoneclick</span>

		</div>

		<br />

		<div class="button" id="upgradeIronClick">

			<span>Upgrade ironclick</span>

		</div>

		<br />

		<div class="button" id="upgradeGoldClick">

			<span>Upgrade goldclick<span>

		</div>

		</section>

		<section id="forest" class="manage" style="display: block;"> <div class="button" id="gatherWood" onClick="gatherWood()">

				<span>Gather Wood</span>

			</div>

			<div class="button" id="gatherRock" onClick="mining()">

				<span>Go Mining</span>

			</div>

                	<div class="container" id="woodContainer" style="width: 15em; height: 1em;">

                        	Wood: <span id="wood">0</span>

                	</div>

                	<br />

			<div class="container" id="stoneContainer">

				Rocks: <span id="stone">0</span>

			</div>

	                <br />

			<div class="container" id="ironContainer">

				Iron: <span id="iron">0</span>
			
			</div>
                
			<br />
		
			<div class="container" id="goldContainer">

				Gold: <span id="gold">0</span>

			</div>
                
			<br />

			<div class="container" id="diamondContainer">

				Diamond: <span id="diamond">0</span>

			</div>

			<br />
		</section>

		<div class="button" id="showMap" onClick="showMap()">

			<span>The World Map</span>

		</div>

		<section id="event">

			<h1 style="margin-bottom: -1.5em;" >Recent Events</h1>
			<br /><br /><hr />
			Main Event: <span id="mainEvent">nothing interresting</span><br />
			Last Mined: <span id="lastMined">none</span><br />
			Last Killed: <span id="lastKilled">none</span><br />
			<hr />

		</section>

	</body>

</html>
