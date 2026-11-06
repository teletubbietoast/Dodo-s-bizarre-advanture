<!DOCTYPE html>
<html lang="nl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kaarten & Dobbelstenen Brawler</title>
    <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #2b2b2b; color: #fff; margin: 0; padding: 20px; }
        h1, h2, h3 { color: #f1c40f; }
        .container { display: flex; flex-direction: column; gap: 20px; max-width: 1000px; margin: 0 auto; }
        .players { display: flex; gap: 20px; justify-content: space-between; }
        .player-card { background: #333; padding: 15px; border-radius: 8px; flex: 1; border: 2px solid #555; }
        .player-card.active { border-color: #e74c3c; box-shadow: 0 0 15px #e74c3c; }
        .player-card.dead { opacity: 0.5; }
        .controls { background: #444; padding: 20px; border-radius: 8px; text-align: center; }
        .log { background: #111; padding: 15px; border-radius: 8px; height: 200px; overflow-y: auto; font-family: monospace; }
        button { background: #e74c3c; color: white; border: none; padding: 10px 20px; border-radius: 5px; cursor: pointer; font-size: 16px; margin: 5px; }
        button:hover { background: #c0392b; }
        button:disabled { background: #7f8c8d; cursor: not-allowed; }
        .card-selection { display: flex; gap: 15px; justify-content: center; margin-top: 10px; }
        .game-card { background: #ecf0f1; color: #2c3e50; padding: 15px; border-radius: 8px; cursor: pointer; flex: 1; text-align: left; border: 4px solid #bdc3c7; }
        .game-card:hover { transform: scale(1.05); }
        .rarity-Common { border-color: #95a5a6; }
        .rarity-Uncommon { border-color: #2ecc71; }
        .rarity-Rare { border-color: #3498db; }
        .rarity-Legendary { border-color: #f1c40f; }
        .variant-Blessed { box-shadow: 0 0 10px #f1c40f; }
        .variant-Cursed { box-shadow: 0 0 10px #8e44ad; }
    </style>
</head>
<body>
