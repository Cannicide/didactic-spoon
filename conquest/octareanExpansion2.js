//Octarean Expansion Pack 2:

var octareanExpansion2 = {
    Venigland: new Conquest({
        name: "Venigland",
        rating: 212,
        type: "Stellar",
        desc: "A parasitical life form found in the Octarean Sector, known to locate and absorb powerless, skilled fighters.",
        health: 350,
        move1: {
            name: "Hyper-Leech",
            dmg: 30,
            uses: 15
        },
        move2: {
            name: "Enhanced Absorption",
            dmg: 150,
            uses: 2,
            special: "*Reflection"
        },
        move3: false,
        bonusType: "Skilled",
        rarity: 1
    }),

    Octaeus: new Conquest({
        name: "Lord Octaeus",
        rating: 232,
        type: "Stellar",
        desc: "King and Supreme Ruler of the Octarean Sector, promoting anarchy while still exerting control over its inhabitants.",
        health: 310,
        move1: {
            name: "Chaotic Massacre",
            dmg: 50,
            uses: 15
        },
        move2: {
            name: "Tier-2 Biochemical Research",
            dmg: 0,
            uses: 10,
            special: "*Biochemical Accumulation"
        },
        move3: {
            name: "{2}Biochemical Warfare",
            dmg: 70,
            uses: 10
        },
        bonusType: "Genetic",
        rarity: 2
    }),

    Archaeus: new Conquest({
        name: "Archaeus Tetheros",
        rating: 350,
        type: "Skilled",
        desc: "Hero of the Genevan Sector, Archaeus found himself mystically summoned to the Octarean Sector by the vile sorcerer Exeon V. Trapped in a foreign galaxy, Archaeus strives to become a hero to the civilians of Octarean.",
        health: 560,
        move1: {
            name: "Terran Shurikens",
            dmg: 15,
            uses: 100
        },
        move2: {
            name: "Carcinogenic Blades",
            dmg: 75,
            uses: 10,
            special: "Disease"
        },
        move3: {
            name: "Terran Meme-Distraction",
            dmg: 175,
            uses: 1
        },
        bonusType: "Mystic",
        rarity: 2
    })


}

// (CURRENTLY JUST UNEDITED OCTAREAN EXPANSION 2)
