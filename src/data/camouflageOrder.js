const militaryOrder = [
  // Military
  'Granite',
  'Woodland',
  'Savanna',
  'Splinter',
  'Moss',
  'Saboteur',
  'Digital',
  'Tide',
  'Red Tiger',

  // Zombies
  'Slate',
  'Desert',
  'Evergreen',
  'Rugged',
  'Grim',
  'Stripe',
  'Oceanic',
  'Whiteout',
  'Purple Tiger',

  // Warzone
  'Quartz',
  'Tundra',
  'Canyon',
  'Pine',
  'Undergrowth',
  'Snakeskin',
  'Siberia',
  'Smolder',
  'Blue Tiger',
]

const specialOrder = [
  // Placeholders
  '?',
  '??',
  // Assault Rifles
  // XM4
  'Muddled',
  'Machina',
  'Liquify',
  'Mainframe',
  'Emulsion',
  'Artificial',

  // AK-74
  'Whitecap',
  'Vengeance',
  'Chlorine',
  'Haunted',
  'Sea Foam',
  'Spirits', 

  // AMES 85
  'Heatstroke',
  'Burial',
  'Hyperion',
  'Graveyard',
  'Netherworld',
  'Death Throes',

  // GPR 91
  'Ambush',
  'Cacti Cathode',
  'Night Stalker',
  'Frostblossom',
  'Ferocity',
  'Tropic Terror',

  // Model L
  'Cherry Blossom',
  'Cedar',
  'Ghost Blossom',
  'Walnut',
  'Chill Blossom',
  'Pine',

  // Goblin Mk2
  'Astral Cry',
  'Hammerhead',
  'Astral Pride',
  'Blood Scent',
  'Astral Rage',
  'Overboard',

  // AS VAL
  'Crimson Steppes',
  'Elk',
  'Malachite',
  'Mountain Goat',
  'Azure Steppes',
  'Quail',

  // Krig C
  'Monochrome',
  'Dreadshade',
  'Sunny Splash',
  'Crowsbane',
  'Berry Bliss',
  'Baneblossom',

  //Cypher 091
  '?',
  '??',
  '?',
  '??',
  '?',
  '??',

  // SMGs
  // C9
  'Heatwave',
  'Panther',
  'Infrared',
  'Lynx',
  'Clouded',
  'Puma',

  // KSV
  'Kakapo',
  'Throwback',
  'Phoenix',
  'Throttle',
  'Raven',
  'Radical',

  // Tanto .22
  'Amorphous',
  'Go Bananas',
  'Solemn',
  'Aloha',
  'Viscous',
  'Pulped',

  // PP-919
  'Radiant Bath',
  'Midnight Prowl',
  'Solvent',
  'Shadow',
  'Blend',
  'Lurking Beast',

  // Jackal PDW
  'Deep End',
  'Dread',
  'Plunge',
  'Distress',
  'Bellyflop',
  'Hellscream',

  // Kompakt 92
  'Kingfisher',
  'Blackthorn',
  'Tequila Sunset',
  'Voidthorn',
  'Blue Lagoon',
  'Firethorn',

  // Saug
  'Netherworld',
  'Solar Tide',
  'Whisper',
  'Limewave',
  'Memento Mori',
  'Dreamcurrent',

  // PPSh-41
  '?',
  '??',
  '?',
  '??',
  '?',
  '??',

  // LMGs
  // PU-21
  'Neon Bath',
  'Vigilance',
  'Vivid',
  'Justice',
  'Destined',
  'Bravery',

  // XMG
  'Buzz',
  'Snakebite',
  'Hiss',
  'Acid Slide',
  'Fizz',
  'Nightfang',

  // GPMG-7
  'Brush Stroke',
  'Idyllic',
  'Impressionist',
  'Other World',
  'Splattered',
  'Dark Paradise',
  
  // Feng 82
  '?',
  '??',
  '?',
  '??',
  '?',
  '??',

  // Shotguns
  // Marine SP
  'Blueberry Lime',
  'Chromed Out',
  'Strawberry Mint',
  'Peel Out',
  'Citrus Mix',
  'Big Block',

  // ASG-89
  'Night Terror',
  'Drive-In',
  'Dream Eater',
  'Coin-Op',
  'Sleep Paralysis',
  'Jukebox',

  // Maelstrom
  'Voidpulse',
  'Moonlit Grace',
  'Cinder Surge',
  'Lunar Flutter',
  'Lush Rift',
  'Amethyst Glow',

  // Marksman Rifles
  // SWAT 5.56
  'Ectoplasm',
  'Lumberjack',
  'Hyperspace',
  'Wrangler',
  'Rogue Waves',
  'Craftsman',

  // Tsarkov 7.62
  'Clear Water',
  'Concrete Jungle',
  'Harvest',
  'Desert Sunset',
  'Scout',
  'Sea to Sky',

  // AEK-973
  'Ablaze',
  'Mirage',
  'Blood Moon',
  'Voidflame',
  'Soulfire',
  'Moonrise',

  // DM-10
  'Mellowbloom',
  'Cobalt',
  'Furybloom',
  'Manta',
  'Breezebloom',
  'Fox',

  // TR2
  '?',
  '??',
  '?',
  '??',
  '?',
  '??',

  // Snipers
  // LW3A1 Frostline
  'Copper',
  'Permafrost',
  'Strata',
  'Eventide',
  'Erosion',
  'Thaw',

  // SVD
  'Pixelized',
  'Patchwork',
  'Cartridge',
  'Integration',
  'Digitized',
  'Patterned',

  // LR 7.62
  'Chaparral',
  'Nimbus',
  'Foxglove',
  'Overcast',
  'Wisteria',
  'Atmosphere',

  // AMR Mod 4
  'Shadowthorn',
  'Tidal Harmony',
  'Scarthorn',
  'Marine Swirl',
  'Bramblethorn',
  'Sunlit Shoal',

  // Pistols
  // 9mm PM
  'Exabyte',
  'Blue Ring',
  'Yottabyte',
  'Red Ring',
  'Zettabyte',
  'Green Ring',

  // Grekhova
  'Spin',
  'Dementer',
  'Hi-Fi',
  'Ceres',
  'Analog',
  'Gaia',

  // GS45
  'Thistlevine',
  'Ragamuffin',
  'Velvetine',
  'Siamese',
  'Honeyvine',
  'Calico',

  // Stryder .22
  'Ritual',
  'Transcend',
  'Wavy',
  'Condemn',
  'Midnight Cooler',
  'Conviction',

  // Launchers
  // CIGMA 2B
  'Policia',
  'Abstract',
  'CBRNE',
  'Technique',
  'Salvare',
  'Concept',
  
  // HE-1
  'Reboot',
  'Dreamer',
  'Decrypt',
  'Renewed',
  'Calibrate',
  'Dissipate',

  // Melees
  // Knife
  'Dying Envy',
  'Tropical Leopard',
  'Dying Bloom',
  'Vacation Leopard',
  'Dying Ember',
  'Sunrise Leopard',

  // Baseball Bat
  'Torment',
  'Slip',
  'Banished',
  'Contort',
  'Spooked',
  'Skew',

  // Power Drill
  'Twilight Toadstool',
  'Thermal',
  'Glimmering Grove',
  'Shimmer',
  'Faerie Fungi',
  'Alloy',

  // Cleaver
  'Creepy Crypt',
  'Luminous Leopard',
  'Tragic Tomb',
  'Shock Leopard',
  'Ghostly Grounds',
  'Blazing Leop',

  // Specials
  // Sirin 9mm
  'Nebulon',
  'Enchanted',
  'Starsync',
  'Tempt Fate',
  'Synthora',
  'Guidance',
]

const masteryOrder = [
  'Gold',
  'Mystic Gold',
  'Gold Tiger',
  'Diamond',
  'Opal',
  "King's Ransom",
  'Dark Spine',
  'Afterlife',
  'Catalyst',
  'Dark Matter',
  'Nebula',
  'Abyss',
]

export default [
  // Military
  ...militaryOrder,

  // Specials
  ...specialOrder,

  // Mastery
  ...masteryOrder,
]
