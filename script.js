/* Start other stuff  */
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function getCookie(name) {
    var dc = document.cookie;
    var prefix = name + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
        begin = dc.indexOf(prefix);
        if (begin != 0) return null;
    }
    else
    {
        begin += 2;
        var end = document.cookie.indexOf(";", begin);
        if (end == -1) {
        end = dc.length;
        }
    }
    return unescape(dc.substring(begin + prefix.length, end));
} 
/* End other stuff */


/* Start ressources */
var wood = 0;
var stone = 0;
var iron = 0;
var gold= 0;
var diamond = 0;
/* End ressources */


/* Start click value */
var woodClick = 5;
var miningClick = 1;
var upgradeWoodClickCost = 1;
var upgradeMiningClickCost =1;
/* End click value */


/* Start ore chance */
var stoneChance = 800;
var ironChance = 140;
var goldChance = 50;
var diamondChance = 10;
/* End ore chance */


/* Start buildings */
var house = 0;
/* End buildings */


/* Start buildings construct */
/* End buildings construct  */


/* Start village habitants */
var freeHouse = 0;
var freeVillager = 0;
var maxLumberjack = 0;
var lumberjack = 0;
var lumberjackPower = 1;
var maxMiner = 0;
var miner = 0;
/* End village start village habitants */


/* Start job manager */
function addLumberjack(number) {
	if(number <= freeVillager && number <= maxLumberjack - lumberjack) {
		freeVillager -= number;
		lumberjack += number;
	}
};

function addMiner(number) { 
        if(number <= freeVillager && number <= maxMiner - miner) {
                freeVillager -= number;
                lumberjack += number;
        }
};
/* End job manager */


/* Start worker */
window.setInterval(function(){
	wood += lumberjack*lumberjackPower;
	document.getElementById("wood").innerHTML = wood; 
}, 1000);
/* End worker */


/* Start forest */
function gatherWood() {
	wood += woodClick;
	document.getElementById("wood").innerHTML = wood;
};

function upgradeWoodClick() {
        if(Math.round(upgradeWoodClickCost / 2) <= diamond) {
                diamond -= Math.round(upgradeWoodClickCost / 2);
		upgradeWoodClickCost += 1;
		woodClick += 5;
              /*document.getElementById("upgradeWoodClickCost").innerHTML = upgradeWoodClickCost;*/
                document.getElementById("diamond").innerHTML = diamond;
		document.getElementById("woodClick").innerHTML = woodClick;
        }

};
/* End forest */


/* Start mine */
function mining() {
	var temp = random(1,1000)
	if (temp <= stoneChance) {
		stone += miningClick;
		document.getElementById("stone").innerHTML = stone;
	}	
	else if (temp <= ironChance + stoneChance && temp > stoneChance) {
		iron += miningClick;
		document.getElementById("iron").innerHTML = iron;
	}
	else if (temp <= goldChance + ironChance + stoneChance && temp > ironChance + stoneChance) {
		gold += miningClick;
		document.getElementById("gold").innerHTML = gold;
	
	}
	else if (temp <= diamondChance + goldChance + ironChance + stoneChance && temp > goldChance + ironChance + stoneChance) {
		diamond += miningClick;
		document.getElementById("diamond").innerHTML = diamond;
	}
};

function upgradeMiningClick() {
        if(Math.round(upgradeMiningClickCost / 2) <= diamond) {
                diamond -= Math.round(upgradeMiningClickCost / 2);
                upgradeMiningClickCost += 3;
		miningClick += 1;
                /*document.getElementById("upgradeMiningClickCost").innerHTML = upgradeStoneClickCost;*/
                document.getElementById("diamond").innerHTML = diamond;
                document.getElementById("miningClick").innerHTML = miningClick;
        }

};

/* End mine */


/* Start Map */ 	
/* End Map*/


