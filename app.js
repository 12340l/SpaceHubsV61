document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Space Games Site</title>
    <style>
        :root {
            --bg-color: #000000;
            --text-color: #ffffff;
            --accent: #404040;
            --nav-bg: rgba(255, 255, 255, 0.05);
        }

        body {
            background-color: var(--bg-color);
            color: var(--text-color);
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            margin: 0;
            overflow-x: hidden;
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-image: 
                radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px),
                radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px),
                radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px);
            background-size: 550px 550px, 350px 350px, 250px 250px;
            background-position: 0 0, 40px 60px, 130px 270px;
            background-attachment: fixed;
        }

        #site-header {
            padding: 30px 20px 10px;
            text-align: center;
        }

        h1 {
            font-size: 2.5rem;
            text-transform: uppercase;
            letter-spacing: 6px;
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.4);
            margin: 0 0 10px 0;
        }

        #search-bar {
            display: flex;
            justify-content: center;
            padding: 10px 20px 20px;
        }

        #searchInput {
            padding: 12px 20px;
            width: 100%;
            max-width: 420px;
            border-radius: 25px;
            border: 1px solid rgba(255,255,255,0.2);
            background: rgba(255,255,255,0.08);
            color: #fff;
            font-size: 15px;
            outline: none;
            backdrop-filter: blur(5px);
            transition: border 0.2s, background 0.2s;
        }

        #searchInput::placeholder { color: #888; }
        #searchInput:focus {
            border-color: rgba(255,255,255,0.5);
            background: rgba(255,255,255,0.13);
        }

        #game-grid {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            gap: 18px;
            width: 95%;
            max-width: 1400px;
            margin: 10px auto 60px;
            padding: 0 10px;
            box-sizing: border-box;
        }

        .game-card {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(5px);
            border-radius: 12px;
            padding: 22px 10px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .game-card:hover {
            transform: translateY(-8px);
            background: rgba(255, 255, 255, 0.15);
            border-color: #ffffff;
            box-shadow: 0 0 25px rgba(255, 255, 255, 0.2);
        }

        .game-card h2 {
            margin: 0 0 6px 0;
            font-size: 1rem;
            letter-spacing: 1px;
            line-height: 1.3;
        }

        .game-card p {
            color: #aaaaaa;
            margin: 0;
            font-size: 0.7rem;
            text-transform: uppercase;
        }

        .game-card.hidden { display: none; }

        /* Overlay */
        #game-overlay {
            position: fixed;
            top: 0; left: 0;
            width: 100vw; height: 100vh;
            background: #000;
            display: none;
            z-index: 100;
        }

        iframe { width: 100%; height: 100%; border: none; }

        #back-btn {
            position: absolute;
            top: 20px; left: 20px;
            padding: 12px 24px;
            background: rgba(255, 255, 255, 0.1);
            color: #ffffff;
            border: 1px solid #ffffff;
            border-radius: 8px;
            cursor: pointer;
            font-weight: bold;
            z-index: 110;
            font-size: 14px;
        }

        #back-btn:hover { background: rgba(255,255,255,0.25); }

        @media (max-width: 1200px) { #game-grid { grid-template-columns: repeat(4, 1fr); } }
        @media (max-width: 900px)  { #game-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 600px)  { #game-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 380px)  { #game-grid { grid-template-columns: 1fr; } }
    </style>
</head>
<body>

    <div id="site-header">
        <h1>Space Games Site</h1>
    </div>

    <div id="search-bar">
        <input type="text" id="searchInput" placeholder="Search games..." autocomplete="off" oninput="filterGames()">
    </div>

    <div id="game-grid">
        <div class="game-card" onclick="launchGame('cl10minutestildawn')"><h2>10 Minutes Till Dawn</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cl1v1lol')"><h2>1v1.LOL</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cl2048')"><h2>2048</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cl2048cupcakes')"><h2>2048 Cupcakes</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cl2doom')"><h2>Doom 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cl3dpinballspacecadet')"><h2>3d Pinball Space Cadet</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cl3pandas')"><h2>3 Pandas</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cl40xescape')"><h2>40x Escape</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cl4thandgoal')"><h2>4th And Goal</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cl8ballpool')"><h2>8 Ball Pool</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cl99balls')"><h2>99 Balls</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clachievementunlocked')"><h2>Achievement Unlocked</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clachillies')"><h2>Achillies</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clADarkRoom')"><h2>A Dark Room</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clADOFAI')"><h2>ADOFAI</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cladvancewars')"><h2>Advance Wars</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cladvancewars2')"><h2>Advance Wars 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cladvancewarsdualstrike')"><h2>Advance Wars Dual Strike</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clAdventureCapatalist')"><h2>Adventure Capitalist</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cladventurecapitalist')"><h2>Adventure Capitalist Alt</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clageofwar')"><h2>Age Of War</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clageofwar2')"><h2>Age Of War 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clagesofconflict')"><h2>Ages Of Conflict</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clalienhominid')"><h2>Alien Hominid</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clAltered Beast')"><h2>Altered Beast</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clamongus')"><h2>Among Us</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clangrybirds')"><h2>Angry Birds</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clanimalcrossingwildworld')"><h2>Animal Crossing Wild World</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clanimalforestn64')"><h2>Animal Forest N64</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clannsmb')"><h2>ANNSMB</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clantimatterdimensions')"><h2>Antimatter Dimensions</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clappleshooter')"><h2>Apple Shooter</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clappleworm')"><h2>Apple Worm</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('claquaparkio')"><h2>Aquapark.io</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clasteroids')"><h2>Asteroids</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clattackhole')"><h2>Attack Hole</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clavalanche')"><h2>Avalanche</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clawesometanks')"><h2>Awesome Tanks</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clawesometanks2')"><h2>Awesome Tanks 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbackrooms')"><h2>Backrooms</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbackyardbaseball')"><h2>Backyard Baseball</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbackyardfootball')"><h2>Backyard Football</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbackyardsoccer')"><h2>Backyard Soccer</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbaconmaydie')"><h2>Bacon May Die</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbadicecream')"><h2>Bad Ice Cream</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbadicecream2')"><h2>Bad Ice Cream 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbadicecream3')"><h2>Bad Ice Cream 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbadpiggies')"><h2>Bad Piggies</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbaldisbasics')"><h2>Baldis Basics</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clballblast')"><h2>Ball Blast</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbanjokazooie')"><h2>Banjo Kazooie</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbanjotooie')"><h2>Banjo Tooie</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbasketballlegends')"><h2>Basketball Legends</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbasketballstars')"><h2>Basketball Stars</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbasketbros')"><h2>Basket Bros</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbasketrandom')"><h2>Basket Random</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbattlezone')"><h2>Battlezone</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clben10protector')"><h2>Ben 10 Protector</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbigtowertinysquare')"><h2>Big Tower Tiny Square</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbitlife')"><h2>Bitlife</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clblackjack')"><h2>Blackjack</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbleachvsnaruto')"><h2>Bleach Vs Naruto</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clblockblast')"><h2>Block Blast</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clblockpost')"><h2>Block Post</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbloons')"><h2>Bloons</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbloonsTD3')"><h2>Bloons TD 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbloonsTD4')"><h2>Bloons TD 4</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbloonsTD5')"><h2>Bloons TD 5</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbloxorz')"><h2>Bloxorz</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbobtherobber')"><h2>Bob The Robber</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbobtherobber2')"><h2>Bob The Robber 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbomberman')"><h2>Bomberman</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbottleflip3d')"><h2>Bottle Flip 3d</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clboxhead2playrooms')"><h2>Boxhead 2 Playrooms</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clboxinglive2')"><h2>Boxing Live 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clboxingrandom')"><h2>Boxing Random</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clBrawlstars')"><h2>Brawl Stars</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbridgerace')"><h2>Bridge Race</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbrotato')"><h2>Brotato</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbubbleshooter')"><h2>Bubble Shooter</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbubbletanks2')"><h2>Bubble Tanks 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbuckshotroulette')"><h2>Buckshot Roulette</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbuildnowgg')"><h2>Build Now GG</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clbulletforce')"><h2>Bullet Force</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clburgertime')"><h2>Burgertime</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clburritobison')"><h2>Burrito Bison</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clburritobisonlaunchalibre')"><h2>Burrito Bison Launcha Libre</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcactusmccoy')"><h2>Cactus Mccoy</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcactusmccoy2')"><h2>Cactus Mccoy 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcandybox1')"><h2>Candy Box 1</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcapybaraclicker')"><h2>Capybara Clicker</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcastlevania')"><h2>Castlevania</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcastlevaniaariaofsorrow')"><h2>Castlevania Aria Of Sorrow</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcatmario')"><h2>Cat Mario</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcavestory')"><h2>Cave Story</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clceleste')"><h2>Celeste</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clchess')"><h2>Chess</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clchronotrigger')"><h2>Chrono Trigger</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clchuzzle')"><h2>Chuzzle</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clclusterrush')"><h2>Cluster Rush</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcommandandconquer')"><h2>Command And Conquer</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcontra')"><h2>Contra</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcontra3')"><h2>Contra 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcookieclicker')"><h2>Cookie Clicker</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcookingmama')"><h2>Cooking Mama</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcoreball')"><h2>Core Ball</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcoverorange')"><h2>Cover Orange</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcrashbandicoot')"><h2>Crash Bandicoot</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcrashteamracing')"><h2>Crash Team Racing</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcrossyroad')"><h2>Crossy Road</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcs16')"><h2>CS 1.6</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcuttherope')"><h2>Cut The Rope</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clcuttheropetimetravel')"><h2>Cut The Rope Time Travel</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldadish')"><h2>Dadish</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldaggerfall')"><h2>Daggerfall</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldbzdevolution')"><h2>DBZ Devolution</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldeadestate')"><h2>Dead Estate</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldeadplate')"><h2>Dead Plate</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldeadzed')"><h2>Dead Zed</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldeadzed2')"><h2>Dead Zed 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldeathchase')"><h2>Death Chase</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldefendyourcastle')"><h2>Defend Your Castle</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldeltarune')"><h2>Deltarune</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldiablo')"><h2>Diablo</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldigdug')"><h2>Dig Dug</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldinorun')"><h2>Dino Run</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldogeminer')"><h2>Doge Miner</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldogeminer2')"><h2>Doge Miner 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldokidokiliteratureclub')"><h2>Doki Doki Literature Club</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldonkeykong')"><h2>Donkey Kong</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldonkeykong64')"><h2>Donkey Kong 64</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldonkeykongcountry')"><h2>Donkey Kong Country</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldonkeykongcountry2')"><h2>Donkey Kong Country 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldoodlejump')"><h2>Doodle Jump</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldoom')"><h2>Doom</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldoom2')"><h2>Doom 2 Alt</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldoom64')"><h2>Doom 64</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldouchebagworkout')"><h2>Douchebag Workout</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clDragonBallZTheLegacyofGoku')"><h2>Dragon Ball Z The Legacy Of Goku</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldriftboss')"><h2>Drift Boss</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldrifthuntersmerge')"><h2>Drift Hunters Merge</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldrivemady')"><h2>Drive Mad</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldrmario')"><h2>Dr Mario</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clduckhunt')"><h2>Duck Hunt</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clducklife')"><h2>Duck Life</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clducklife2')"><h2>Duck Life 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clducklife3')"><h2>Duck Life 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clducklife4')"><h2>Duck Life 4</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clducklifebattle')"><h2>Duck Life Battle</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldukenukem3d')"><h2>Duke Nukem 3d</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cldumbwaystodie')"><h2>Dumb Ways To Die</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clEaglercraft-Beta-1.3-Offline')"><h2>Eaglercraft Beta 1.3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cleaglercraft152')"><h2>Eaglercraft 1.5.2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clearntodie')"><h2>Learn To Die</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clearntodie2')"><h2>Learn To Die 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clearthbound')"><h2>Earthbound</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clearthwormjim')"><h2>Earthworm Jim</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clelectricman2')"><h2>Electricman 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clepicbattlefantasy5')"><h2>Epic Battle Fantasy 5</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clescaperoad')"><h2>Escape Road</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clexcitebike64')"><h2>Excitebike 64</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clexitpath')"><h2>Exit Path</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfactoryballs')"><h2>Factory Balls</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfallguys')"><h2>Fall Guys</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfallout')"><h2>Fallout</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfancypantsadventure')"><h2>Fancy Pants Adventure</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfancypantsadventure2')"><h2>Fancy Pants Adventure 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfancypantsadventure3')"><h2>Fancy Pants Adventure 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfearstofathomhomealone')"><h2>Fears To Fathom Home Alone</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfeedus')"><h2>Feed Us</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfinalfantasy')"><h2>Final Fantasy</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfinalfantasytactics')"><h2>Final Fantasy Tactics</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfinalfantasyVI')"><h2>Final Fantasy VI</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfinalfantasyVII')"><h2>Final Fantasy VII</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfireboyandwatergirl')"><h2>Fireboy And Watergirl</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfireboyandwatergirl2')"><h2>Fireboy And Watergirl 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfireboyandwatergirl3')"><h2>Fireboy And Watergirl 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfireemblem')"><h2>Fire Emblem</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clflappybird')"><h2>Flappy Bird</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clFNAF')"><h2>FNAF</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clFNAF2')"><h2>FNAF 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clFNAF3')"><h2>FNAF 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clFNAF4')"><h2>FNAF 4</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfnafsl')"><h2>FNAF SL</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfnafucn')"><h2>FNAF UCN</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfnafworldd')"><h2>FNAF World</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfridaynightfunkin')"><h2>Friday Night Funkin</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfruitninja')"><h2>Fruit Ninja</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfunnyshooter2')"><h2>Funny Shooter 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clfzero')"><h2>F-Zero</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgalaga')"><h2>Galaga</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgeometrydashscratch')"><h2>Geometry Dash Scratch</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgetawayshootout')"><h2>Getaway Shootout</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgetontop')"><h2>Get On Top</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgladdihoppers')"><h2>Gladdihoppers</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgoingballs')"><h2>Going Balls</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgoldenaxe')"><h2>Golden Axe</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgoldeneye007')"><h2>GoldenEye 007</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgoldensun')"><h2>Golden Sun</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgoldminer')"><h2>Gold Miner</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgooglebaseball')"><h2>Google Baseball</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgoogledino')"><h2>Google Dino</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgorillatag')"><h2>Gorilla Tag</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgranny')"><h2>Granny</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgranny2')"><h2>Granny 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgranny3')"><h2>Granny 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgranturismo')"><h2>Gran Turismo</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgranturismo2')"><h2>Gran Turismo 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgrindcraft')"><h2>Grindcraft</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgta')"><h2>GTA</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgta2')"><h2>GTA 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgtachina')"><h2>GTA China</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgunblood')"><h2>Gunblood</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgunmayhem')"><h2>Gun Mayhem</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgunmayhem2')"><h2>Gun Mayhem 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgunsmoke')"><h2>Gunsmoke</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clgunstarheroes')"><h2>Gunstar Heroes</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhalflife')"><h2>Half-Life</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhalocombatdevolved')"><h2>Halo Combat Devolved</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhanger')"><h2>Hanger</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhappyroom')"><h2>Happy Room</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhappywheels')"><h2>Happy Wheels</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clharvestmoon')"><h2>Harvest Moon</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clharvestmoon64')"><h2>Harvest Moon 64</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhauntthehouse')"><h2>Haunt The House</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhelixjump')"><h2>Helix Jump</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhextris')"><h2>Hextris</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhighwayracer2')"><h2>Highway Racer 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhillclimbracinglite')"><h2>Hill Climb Racing Lite</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhobo')"><h2>Hobo</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhobo2')"><h2>Hobo 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhobo3')"><h2>Hobo 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clholeio')"><h2>Hole.io</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhollowknight')"><h2>Hollow Knight</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhotdogbush')"><h2>Hot Dog Bush</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhouseofhazards')"><h2>House Of Hazards</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clhungrylamu')"><h2>Hungry Lamu</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clicypurplehead')"><h2>Icy Purple Head</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clidlebreakout')"><h2>Idle Breakout</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clidleminertycoon')"><h2>Idle Miner Tycoon</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('climpossiblequiz')"><h2>Impossible Quiz</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('climpossiblequiz2')"><h2>Impossible Quiz 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clinfinitecraft')"><h2>Infinite Craft</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clinteractivebuddy')"><h2>Interactive Buddy</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clintospace')"><h2>Into Space</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clironsnout')"><h2>Iron Snout</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cljacksmith')"><h2>Jacksmith</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cljazzjackrabbit2')"><h2>Jazz Jackrabbit 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cljellytruck')"><h2>Jelly Truck</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cljetpackjoyride')"><h2>Jetpack Joyride</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cljetrush')"><h2>Jet Rush</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cljohnnytrigger')"><h2>Johnny Trigger</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cljurassicpark')"><h2>Jurassic Park</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cljustfalllol')"><h2>Just Fall LOL</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clkaizomarioworld')"><h2>Kaizo Mario World</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clkaratebros')"><h2>Karate Bros</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clkarlson')"><h2>Karlson</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clkillerinstinct')"><h2>Killer Instinct</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clkingdomheartsdays')"><h2>Kingdom Hearts Days</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clkirby64')"><h2>Kirby 64</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clkirbyandtheamzingmirror')"><h2>Kirby And The Amazing Mirror</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clkirbysadventure')"><h2>Kirby's Adventure</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clkirbysdreamland')"><h2>Kirby's Dreamland</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clkirbysqueaksquad')"><h2>Kirby Squeak Squad</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clkirbysuperstar')"><h2>Kirby Superstar</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clknifehit')"><h2>Knife Hit</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clknightmaretower')"><h2>Knightmare Tower</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cllaststand')"><h2>Last Stand</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cllaststand2')"><h2>Last Stand 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cllearntofly')"><h2>Learn To Fly</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cllearntofly2')"><h2>Learn To Fly 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cllearntofly3')"><h2>Learn To Fly 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cllegobatman')"><h2>Lego Batman</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cllegoninjago')"><h2>Lego Ninjago</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cllegostarwars')"><h2>Lego Star Wars</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cllemmings')"><h2>Lemmings</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clleveldevil')"><h2>Level Devil</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cllinerider')"><h2>Line Rider</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cllinksawakeningdx')"><h2>Links Awakening DX</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cllinktothepast')"><h2>Link To The Past</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cllittlealchemy2')"><h2>Little Alchemy 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clloderunner')"><h2>Lode Runner</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmadalinstuntcars')"><h2>Madalin Stunt Cars</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmadalinstuntcars2')"><h2>Madalin Stunt Cars 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmadnessaccelerant')"><h2>Madness Accelerant</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmadnessinteractive')"><h2>Madness Interactive</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmagictiles3')"><h2>Magic Tiles 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmajorasmask')"><h2>Majoras Mask</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmari0')"><h2>Mari0</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmario3')"><h2>Mario 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmario64webgl')"><h2>Mario 64 WebGL</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmarioandluigisuperstarsaga')"><h2>Mario And Luigi Superstar Saga</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmariocombat')"><h2>Mario Combat</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmariokart64')"><h2>Mario Kart 64</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmariokartds')"><h2>Mario Kart DS</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmariokartsupercircuit')"><h2>Mario Kart Super Circuit</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmarioparty')"><h2>Mario Party</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmarioparty2')"><h2>Mario Party 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmarioparty3')"><h2>Mario Party 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmariopartyds')"><h2>Mario Party DS</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmariotennis')"><h2>Mario Tennis</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clMarvelVsCapcomPS1')"><h2>Marvel Vs Capcom PS1</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmaxpayne')"><h2>Max Payne</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmeatboy')"><h2>Meat Boy</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmeatboyflash')"><h2>Meat Boy Flash</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmedalofhonor')"><h2>Medal Of Honor</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmedievil')"><h2>Medievil</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmegaman')"><h2>Megaman</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmegaman2')"><h2>Megaman 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmegaman3')"><h2>Megaman 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmegamanX')"><h2>Megaman X</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmegamanzero')"><h2>Megaman Zero</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmegaminer')"><h2>Megaminer</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmelonplayground')"><h2>Melon Playground</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmetalgear')"><h2>Metal Gear</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmetalgearsolid')"><h2>Metal Gear Solid</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmetalslug')"><h2>Metal Slug</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmetalslug2')"><h2>Metal Slug 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmetroid')"><h2>Metroid</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmetroidfusion')"><h2>Metroid Fusion</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmetroidprimehunters')"><h2>Metroid Prime Hunters</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmetroidzeromission')"><h2>Metroid Zero Mission</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmiamishark')"><h2>Miami Shark</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmightyknight')"><h2>Mighty Knight</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clminecraft1-8-8')"><h2>Minecraft 1.8.8</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clminecraftpocketedition')"><h2>Minecraft Pocket Edition</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clMINECRAFTTOWERDEFENSE')"><h2>Minecraft Tower Defense</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clminesweeperplus')"><h2>Minesweeper Plus</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmiraginewar')"><h2>Miragine War</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmobcontrolhtml5')"><h2>Mob Control HTML5</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmonkeymart')"><h2>Monkey Mart</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmonstertracks')"><h2>Monster Tracks</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmortalkombat')"><h2>Mortal Kombat</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmortalkombat2')"><h2>Mortal Kombat 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmortalkombat3')"><h2>Mortal Kombat 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmortalkombat4')"><h2>Mortal Kombat 4</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmotherload')"><h2>Motherload</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmotox3m2')"><h2>Moto X3M 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmotox3m3')"><h2>Moto X3M 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmotox3mpoolparty')"><h2>Moto X3M Pool Party</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmotox3mspookyland')"><h2>Moto X3M Spooky Land</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmotox3mwinter')"><h2>Moto X3M Winter</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmrmine')"><h2>Mr Mine</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmultitask')"><h2>Multitask</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmutilate-a-doll')"><h2>Mutilate A Doll</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clmyfriendpedro')"><h2>My Friend Pedro</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clNBAjam')"><h2>NBA Jam</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clneonrider')"><h2>Neon Rider</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clnewgroundsrumble')"><h2>Newgrounds Rumble</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clnewsupermariobros')"><h2>New Super Mario Bros</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clnflblitz')"><h2>NFL Blitz</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clnfsmostwanted')"><h2>NFS Most Wanted</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clnfsunderground2')"><h2>NFS Underground 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clnickelodeonsuperbrawl2')"><h2>Nickelodeon Super Brawl 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clnightfire')"><h2>Nightfire</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clnintendoworldcup')"><h2>Nintendo World Cup</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clnoobminer')"><h2>Noob Miner</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clnzp')"><h2>NZP</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clobbyonlyup')"><h2>Obby Only Up</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clocarinaoftime')"><h2>Ocarina Of Time</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('cloregontrail')"><h2>Oregon Trail</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('closu')"><h2>Osu</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clovofixed')"><h2>Ovo Fixed</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpacman')"><h2>Pac-Man</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpacmanworld3')"><h2>Pac-Man World 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpandameic2')"><h2>Pandemic 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpapabakeria')"><h2>Papa's Bakeria</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpapascheeseria')"><h2>Papa's Cheeseria</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpapascupcakeria')"><h2>Papa's Cupcakeria</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpapasfreezeria')"><h2>Papa's Freezeria</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpapashotdoggeria')"><h2>Papa's Hot Doggeria</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpapaspancakeria')"><h2>Papa's Pancakeria</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpapaspastaria')"><h2>Papa's Pastaria</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpapasscooperia')"><h2>Papa's Scooperia</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpapassushiria')"><h2>Papa's Sushiria</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpapastacomia')"><h2>Papa's Taco Mia</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpapaswingeria')"><h2>Papa's Wingeria</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpaperio')"><h2>Paper.io</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpaperio3d')"><h2>Paper.io 3d</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpapermario')"><h2>Paper Mario</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpapermariottyd')"><h2>Paper Mario TTYD</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clparappatherapper')"><h2>Parappa The Rapper</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clparkingfury')"><h2>Parking Fury</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpartnersintime')"><h2>Partners In Time</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpeggle')"><h2>Peggle</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpenguindiner')"><h2>Penguin Diner</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpepsiman')"><h2>Pepsiman</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clperfectdark')"><h2>Perfect Dark</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpersona')"><h2>Persona</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpersona2')"><h2>Persona 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clphantasystar4')"><h2>Phantasy Star 4</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpheonixrightaceattorny')"><h2>Phoenix Right Ace Attorney</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpicosschool')"><h2>Picos School</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpitfall')"><h2>Pitfall</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpixelgun')"><h2>Pixel Gun</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpizzatower')"><h2>Pizza Tower</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clplantsvszombies')"><h2>Plants Vs Zombies</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clplazmaburst')"><h2>Plazma Burst</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clplinko')"><h2>Plinko</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokeclassic')"><h2>Poke Classic</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokecrystalclear')"><h2>Poke Crystal Clear</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokeheartgold')"><h2>Poke Heart Gold</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokelightplatinum')"><h2>Poke Light Platinum</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokemoncrystal')"><h2>Pokemon Crystal</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokemonemerald')"><h2>Pokemon Emerald</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokemonemeraldkaizo')"><h2>Pokemon Emerald Kaizo</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokemonfirered')"><h2>Pokemon Fire Red</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokemonleafgreen')"><h2>Pokemon Leaf Green</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokemonmysterydungeon')"><h2>Pokemon Mystery Dungeon</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokemonruby')"><h2>Pokemon Ruby</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokemonsapphire')"><h2>Pokemon Sapphire</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokemonsilver')"><h2>Pokemon Silver</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokemonsnap')"><h2>Pokemon Snap</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokemonstadium')"><h2>Pokemon Stadium</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokemontowerdefense')"><h2>Pokemon Tower Defense</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokemonunbound')"><h2>Pokemon Unbound</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokeplatinum')"><h2>Poke Platinum</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokered')"><h2>Poke Red</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokesoulsilver')"><h2>Poke Soul Silver</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokewhite')"><h2>Poke White</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokewhite2')"><h2>Poke White 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpokeyellow')"><h2>Poke Yellow</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpolicepursuit2')"><h2>Police Pursuit 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpolytrackworksnow')"><h2>Polytrack Work Snow</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clportal')"><h2>Portal</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clportal2d')"><h2>Portal 2d</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clportalflash')"><h2>Portal Flash</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpostal')"><h2>Postal</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clPou')"><h2>Pou</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clprofessorlaytonandthecuriousvillage')"><h2>Professor Layton And The Curious Village</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpunchout')"><h2>Punch Out</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpuyopuyofever')"><h2>Puyo Puyo Fever</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpvz')"><h2>PVZ</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clpvz2')"><h2>PVZ 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clquake2')"><h2>Quake 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clquake3')"><h2>Quake 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clqwop')"><h2>Qwop</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clradicalred')"><h2>Radical Red</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clraftwars')"><h2>Raft Wars</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clraftwars2')"><h2>Raft Wars 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clrainbowsix')"><h2>Rainbow Six</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clrayman')"><h2>Rayman</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clraze')"><h2>Raze</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clraze2')"><h2>Raze 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clraze3')"><h2>Raze 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clreachthecore')"><h2>Reach The Core</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clrebuild')"><h2>Rebuild</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clrebuild2')"><h2>Rebuild 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clredalert')"><h2>Red Alert</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clredball')"><h2>Red Ball</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clredball2')"><h2>Red Ball 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clredball3')"><h2>Red Ball 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clRedBall4')"><h2>Red Ball 4</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clresidentevil')"><h2>Resident Evil</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clresidentevil2')"><h2>Resident Evil 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clretrobowl')"><h2>Retro Bowl</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clretrobowlcollege')"><h2>Retro Bowl College</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clretrohighway')"><h2>Retro Highway</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clrhythmheaven')"><h2>Rhythm Heaven</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clriddleschool')"><h2>Riddle School</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clriddleschool2')"><h2>Riddle School 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clriddleschool3')"><h2>Riddle School 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clriddletransfer')"><h2>Riddle Transfer</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clriddletransfer2')"><h2>Riddle Transfer 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clridgeracer')"><h2>Ridge Racer</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clristar')"><h2>Ristar</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clroadoffury')"><h2>Road Of Fury</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clroadofthedead')"><h2>Road Of The Dead</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clroadofthedead2')"><h2>Road Of The Dead 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clrocketleague')"><h2>Rocket League</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clroguesoul')"><h2>Rogue Soul</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clroguesoul2')"><h2>Rogue Soul 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clrollingsky')"><h2>Rolling Sky</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clrooftopsnipers')"><h2>Rooftop Snipers</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clrun2')"><h2>Run 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clrun3')"><h2>Run 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clrunningfred')"><h2>Running Fred</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsandboxcity')"><h2>Sandbox City</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsandsofthecoliseum')"><h2>Sands Of The Coliseum</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsandtris')"><h2>Sandtris</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clscarymazegame')"><h2>Scary Maze Game</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clschoolboyrunaway')"><h2>Schoolboy Runaway</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clscribblenauts')"><h2>Scribblenauts</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsecretofmana')"><h2>Secret Of Mana</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clshinobi3')"><h2>Shinobi 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clshoppingcarthero')"><h2>Shopping Cart Hero</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clshortlife')"><h2>Short Life</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsilenthill')"><h2>Silent Hill</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsimcity64')"><h2>Sim City 64</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clskateordie')"><h2>Skate Or Die</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clskibidishooter')"><h2>Skibidi Shooter</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clslenderman')"><h2>Slenderman</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clslitherio')"><h2>Slither.io</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clslope')"><h2>Slope</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clslope3')"><h2>Slope 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clslowroads')"><h2>Slow Roads</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsm63redux')"><h2>SM63 Redux</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsm64lastimpact')"><h2>SM64 Last Impact</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsmashkarts')"><h2>Smash Karts</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsmashremix')"><h2>Smash Remix</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsmbcrossover')"><h2>SMBC Crossover</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsnailbob')"><h2>Snail Bob</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsnailbob2')"><h2>Snail Bob 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsnipershot')"><h2>Sniper Shot</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsnowboardobby')"><h2>Snowboard Obby</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clSnowBrosGenesis')"><h2>Snow Bros Genesis</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsnowdrift')"><h2>Snow Drift</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsnowrider')"><h2>Snow Rider</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsoccerrandom')"><h2>Soccer Random</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsolarsmash')"><h2>Solar Smash</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsolitaire')"><h2>Solitaire</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsonic3andknuckles')"><h2>Sonic 3 And Knuckles</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsonicadvance')"><h2>Sonic Advance</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsonicadvance2')"><h2>Sonic Advance 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsonicadvance3')"><h2>Sonic Advance 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsonicbattle')"><h2>Sonic Battle</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsoniccd')"><h2>Sonic CD</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsonicclassiccollection')"><h2>Sonic Classic Collection</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsonicclassicheroes')"><h2>Sonic Classic Heroes</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsonicmania')"><h2>Sonic Mania</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsonicrush')"><h2>Sonic Rush</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsonicthehedgehog')"><h2>Sonic The Hedgehog</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsonicthehedgehog2')"><h2>Sonic The Hedgehog 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsonicthehedgehog3')"><h2>Sonic The Hedgehog 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsonny2')"><h2>Sonny 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsortthecourt')"><h2>Sort The Court</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsotn')"><h2>SOTN</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clspaceinvaders')"><h2>Space Invaders</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clspaceiskey')"><h2>Space Is Key</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clspacewaves')"><h2>Space Waves</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clspelunky')"><h2>Spelunky</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clspidermanps1')"><h2>Spiderman PS1</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstarfox')"><h2>Starfox</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstarfox64')"><h2>Starfox 64</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstateio')"><h2>State.io</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstealthmaster')"><h2>Stealth Master</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstickdefenders')"><h2>Stick Defenders</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstickmanhook')"><h2>Stickman Hook</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstickmanstealingdiamond')"><h2>Stickman Stealing Diamond</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstickmerge')"><h2>Stick Merge</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstickminairship')"><h2>Stickmin Airship</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstickminbreakingbank')"><h2>Stickmin Breaking Bank</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstickminescapingprison')"><h2>Stickmin Escaping Prison</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstickminfleecomplex')"><h2>Stickmin Flee Complex</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstickrpgcomplete')"><h2>Stick RPG Complete</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstickwar')"><h2>Stick War</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstickwar2')"><h2>Stick War 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstormthehouse2')"><h2>Storm The House 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstormthehouse3')"><h2>Storm The House 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstreetfighter2')"><h2>Street Fighter 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstreetfighteralpha3')"><h2>Street Fighter Alpha 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstreetofrage2')"><h2>Street Of Rage 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstreetofrage3')"><h2>Street Of Rage 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstrikeforceheroes')"><h2>Strikeforce Heroes</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clstrikeforceheroes2')"><h2>Strikeforce Heroes 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsubwaysurfersbarcelona')"><h2>Subway Surfers Barcelona</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsubwaysurfersneworleans')"><h2>Subway Surfers New Orleans</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsubwaysurferssanfrancisco')"><h2>Subway Surfers San Francisco</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsuika')"><h2>Suika</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsuperbomberman')"><h2>Super Bomberman</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsupermario63')"><h2>Super Mario 63</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsupermario64')"><h2>Super Mario 64</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsupermario64ds')"><h2>Super Mario 64 DS</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsupermarioallstars')"><h2>Super Mario All Stars</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsupermariobros')"><h2>Super Mario Bros</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsupermariobros2')"><h2>Super Mario Bros 2</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsupermariobros3')"><h2>Super Mario Bros 3</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsupermariokart')"><h2>Super Mario Kart</h2><p>Arcade</p></div>
        <div class="game-card" onclick="launchGame('clsupermarioland')"><h2>Super Mario Land</h2><p>Arcade</p></div>
    </div>

    <!-- Overlay container for launching games -->
    <div id="game-overlay">
        <button id="back-btn" onclick="closeGame()">Back to Games</button>
        <iframe id="game-frame" src=""></iframe>
    </div>

</body>
</html>
`);
