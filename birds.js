const BIRDS = [
  // ── GARDEN (card #001–005) ─────────────────────────────────────────────
  {
    id: 1, name: "Robin", latin: "Erithacus rubecula",
    type: "Garden", typeEmoji: "🏡", hp: 70, rarity: 3,
    size: "Small (14 cm)", diet: "Worms & berries", season: "All year",
    fact: "Robins sing even at night and through winter — one of Britain's bravest songsters!",
    color: "#e84830"
  },
  {
    id: 2, name: "Blue Tit", latin: "Cyanistes caeruleus",
    type: "Garden", typeEmoji: "🏡", hp: 55, rarity: 3,
    size: "Tiny (12 cm)", diet: "Insects & seeds", season: "All year",
    fact: "Blue tits can hang upside down on branches to reach food that other birds can't get!",
    color: "#2288dd"
  },
  {
    id: 3, name: "House Sparrow", latin: "Passer domesticus",
    type: "Garden", typeEmoji: "🏡", hp: 60, rarity: 3,
    size: "Small (15 cm)", diet: "Seeds & scraps", season: "All year",
    fact: "Sparrows love a dust bath! They roll in dry soil to keep their feathers clean.",
    color: "#c8902a"
  },
  {
    id: 4, name: "Blackbird", latin: "Turdus merula",
    type: "Garden", typeEmoji: "🏡", hp: 80, rarity: 3,
    size: "Medium (25 cm)", diet: "Worms & fruit", season: "All year",
    fact: "Only the male blackbird is black — females are brown. Males have a bright orange beak!",
    color: "#222222"
  },
  {
    id: 5, name: "Starling", latin: "Sturnus vulgaris",
    type: "Garden", typeEmoji: "🏡", hp: 65, rarity: 3,
    size: "Medium (22 cm)", diet: "Insects & berries", season: "All year",
    fact: "Millions of starlings fly together in amazing swirling clouds called murmurations!",
    color: "#336633"
  },

  // ── WOODLAND (card #006–011) ───────────────────────────────────────────
  {
    id: 6, name: "Great Spotted Woodpecker", latin: "Dendrocopos major",
    type: "Woodland", typeEmoji: "🌳", hp: 90, rarity: 2,
    size: "Medium (23 cm)", diet: "Insects & nuts", season: "All year",
    fact: "Woodpeckers drum on trees up to 20 times per second — their skull protects their brain!",
    color: "#cc2222"
  },
  {
    id: 7, name: "Jay", latin: "Garrulus glandarius",
    type: "Woodland", typeEmoji: "🌳", hp: 85, rarity: 2,
    size: "Medium (34 cm)", diet: "Acorns & insects", season: "All year",
    fact: "Jays bury thousands of acorns each autumn and remember where most of them are hidden!",
    color: "#cc7722"
  },
  {
    id: 8, name: "Nuthatch", latin: "Sitta europaea",
    type: "Woodland", typeEmoji: "🌳", hp: 70, rarity: 2,
    size: "Small (14 cm)", diet: "Nuts & insects", season: "All year",
    fact: "Nuthatches are the only British bird that can walk headfirst DOWN a tree trunk!",
    color: "#447799"
  },
  {
    id: 9, name: "Tawny Owl", latin: "Strix aluco",
    type: "Woodland", typeEmoji: "🌳", hp: 110, rarity: 1,
    size: "Medium (38 cm)", diet: "Mice & voles", season: "All year",
    fact: "Tawny owls can turn their head almost all the way around — 270 degrees!",
    color: "#886633"
  },
  {
    id: 10, name: "Great Tit", latin: "Parus major",
    type: "Woodland", typeEmoji: "🌳", hp: 65, rarity: 3,
    size: "Small (14 cm)", diet: "Insects & seeds", season: "All year",
    fact: "Great tits can make over 40 different calls — scientists are still discovering new ones!",
    color: "#228822"
  },
  {
    id: 11, name: "Treecreeper", latin: "Certhia familiaris",
    type: "Woodland", typeEmoji: "🌳", hp: 60, rarity: 2,
    size: "Tiny (13 cm)", diet: "Insects & spiders", season: "All year",
    fact: "Treecreepers always spiral upward around a tree trunk, then fly to the base of the next one!",
    color: "#998866"
  },

  // ── FARMLAND (card #012–016) ───────────────────────────────────────────
  {
    id: 12, name: "Lapwing", latin: "Vanellus vanellus",
    type: "Farmland", typeEmoji: "🌾", hp: 85, rarity: 2,
    size: "Medium (30 cm)", diet: "Worms & insects", season: "All year",
    fact: "Lapwings have a wispy crest on their head and make a sound like 'pee-wit'!",
    color: "#334422"
  },
  {
    id: 13, name: "Barn Owl", latin: "Tyto alba",
    type: "Farmland", typeEmoji: "🌾", hp: 105, rarity: 1,
    size: "Medium (34 cm)", diet: "Mice & shrews", season: "All year",
    fact: "Barn owls have heart-shaped faces that act like satellite dishes to collect sound!",
    color: "#ddcc88"
  },
  {
    id: 14, name: "Skylark", latin: "Alauda arvensis",
    type: "Farmland", typeEmoji: "🌾", hp: 70, rarity: 2,
    size: "Small (18 cm)", diet: "Seeds & insects", season: "All year",
    fact: "Skylarks can hover 100 metres up in the sky, singing for up to an hour without stopping!",
    color: "#aa8844"
  },
  {
    id: 15, name: "Yellowhammer", latin: "Emberiza citrinella",
    type: "Farmland", typeEmoji: "🌾", hp: 65, rarity: 2,
    size: "Small (16 cm)", diet: "Seeds & insects", season: "All year",
    fact: "People remember the yellowhammer's song as 'a little bit of bread and no cheeeeese'!",
    color: "#ddcc00"
  },
  {
    id: 16, name: "Pheasant", latin: "Phasianus colchicus",
    type: "Farmland", typeEmoji: "🌾", hp: 95, rarity: 3,
    size: "Large (75 cm)", diet: "Seeds & berries", season: "All year",
    fact: "Male pheasants are extraordinarily colourful — they have iridescent green heads and red faces!",
    color: "#cc5500"
  },

  // ── WETLAND (card #017–022) ────────────────────────────────────────────
  {
    id: 17, name: "Kingfisher", latin: "Alcedo atthis",
    type: "Wetland", typeEmoji: "💧", hp: 75, rarity: 1,
    size: "Small (16 cm)", diet: "Fish & tadpoles", season: "All year",
    fact: "Kingfishers dive into water at 40 km/h and have special eyes to see clearly underwater!",
    color: "#ee6600"
  },
  {
    id: 18, name: "Grey Heron", latin: "Ardea cinerea",
    type: "Wetland", typeEmoji: "💧", hp: 130, rarity: 2,
    size: "Large (90 cm)", diet: "Fish & frogs", season: "All year",
    fact: "Herons can stand completely still for hours, waiting to spear a fish with their beak!",
    color: "#778899"
  },
  {
    id: 19, name: "Mallard", latin: "Anas platyrhynchos",
    type: "Wetland", typeEmoji: "💧", hp: 90, rarity: 3,
    size: "Medium (58 cm)", diet: "Plants & insects", season: "All year",
    fact: "Male mallards have shimmering green heads that look different colours in the light!",
    color: "#226633"
  },
  {
    id: 20, name: "Moorhen", latin: "Gallinula chloropus",
    type: "Wetland", typeEmoji: "💧", hp: 80, rarity: 2,
    size: "Medium (33 cm)", diet: "Plants & insects", season: "All year",
    fact: "Moorhen chicks help their parents look after the next batch of eggs — like little babysitters!",
    color: "#223344"
  },
  {
    id: 21, name: "Reed Warbler", latin: "Acrocephalus scirpaceus",
    type: "Wetland", typeEmoji: "💧", hp: 55, rarity: 2,
    size: "Tiny (13 cm)", diet: "Insects", season: "Summer only",
    fact: "Reed warblers fly all the way from Africa every spring — a journey of over 4,000 miles!",
    color: "#aa8844"
  },
  {
    id: 22, name: "Little Egret", latin: "Egretta garzetta",
    type: "Wetland", typeEmoji: "💧", hp: 95, rarity: 2,
    size: "Medium (56 cm)", diet: "Fish & frogs", season: "All year",
    fact: "Little egrets only arrived in Britain in the 1990s — they're a new and welcome visitor!",
    color: "#ffffff"
  },

  // ── COASTAL (card #023–027) ────────────────────────────────────────────
  {
    id: 23, name: "Puffin", latin: "Fratercula arctica",
    type: "Coastal", typeEmoji: "🌊", hp: 100, rarity: 1,
    size: "Small (30 cm)", diet: "Small fish", season: "Spring & summer",
    fact: "Puffins can carry up to 62 fish at once in their colourful beak — using spines to grip them!",
    color: "#ff6600"
  },
  {
    id: 24, name: "Gannet", latin: "Morus bassanus",
    type: "Coastal", typeEmoji: "🌊", hp: 120, rarity: 1,
    size: "Large (90 cm)", diet: "Fish", season: "All year",
    fact: "Gannets dive into the sea from 30 metres up at 100 km/h — like a feathered missile!",
    color: "#ffee88"
  },
  {
    id: 25, name: "Oystercatcher", latin: "Haematopus ostralegus",
    type: "Coastal", typeEmoji: "🌊", hp: 85, rarity: 2,
    size: "Medium (43 cm)", diet: "Shellfish & worms", season: "All year",
    fact: "Oystercatchers use their strong orange beak to prise open mussels and oysters!",
    color: "#cc2200"
  },
  {
    id: 26, name: "Herring Gull", latin: "Larus argentatus",
    type: "Coastal", typeEmoji: "🌊", hp: 100, rarity: 3,
    size: "Large (60 cm)", diet: "Fish & scraps", season: "All year",
    fact: "Herring gulls stomp their feet on the ground to trick worms into thinking it's raining!",
    color: "#aabbcc"
  },
  {
    id: 27, name: "Turnstone", latin: "Arenaria interpres",
    type: "Coastal", typeEmoji: "🌊", hp: 70, rarity: 2,
    size: "Small (23 cm)", diet: "Insects & crabs", season: "Winter",
    fact: "Turnstones flip over pebbles and seaweed looking for tiny creatures hiding underneath!",
    color: "#cc7733"
  },

  // ── MOORLAND (card #028–030) ───────────────────────────────────────────
  {
    id: 28, name: "Red Grouse", latin: "Lagopus lagopus scotica",
    type: "Moorland", typeEmoji: "🌿", hp: 90, rarity: 2,
    size: "Medium (38 cm)", diet: "Heather & berries", season: "All year",
    fact: "Red grouse only live on British moorland — they are found nowhere else in the world!",
    color: "#882222"
  },
  {
    id: 29, name: "Golden Eagle", latin: "Aquila chrysaetos",
    type: "Moorland", typeEmoji: "🌿", hp: 160, rarity: 1,
    size: "Large (85 cm)", diet: "Rabbits & grouse", season: "All year",
    fact: "Golden eagles have eyesight 8 times sharper than humans — they can spot a rabbit 3 km away!",
    color: "#cc9900"
  },
  {
    id: 30, name: "Curlew", latin: "Numenius arquata",
    type: "Moorland", typeEmoji: "🌿", hp: 95, rarity: 1,
    size: "Large (55 cm)", diet: "Worms & crabs", season: "All year",
    fact: "The curlew's haunting bubbling call is one of the most beautiful sounds in British nature!",
    color: "#998855"
  }

  // ── GARDEN continued (cards #031–032) ─────────────────────────────────
  {
    id: 31, name: "Wren", latin: "Troglodytes troglodytes",
    type: "Garden", typeEmoji: "🏡", hp: 45, rarity: 2,
    size: "Tiny (10 cm)", diet: "Insects & spiders", season: "All year",
    fact: "The wren is one of Britain's smallest birds but has one of the LOUDEST songs — you can hear it from 500 metres away!",
    color: "#aa7744"
  },
  {
    id: 32, name: "Jackdaw", latin: "Corvus monedula",
    type: "Garden", typeEmoji: "🏡", hp: 85, rarity: 3,
    size: "Medium (34 cm)", diet: "Insects & scraps", season: "All year",
    fact: "Jackdaws have pale blue eyes and are incredibly clever — they can recognise human faces!",
    color: "#445566"
  },

  // ── WOODLAND continued (card #033) ────────────────────────────────────
  {
    id: 33, name: "Coal Tit", latin: "Periparus ater",
    type: "Woodland", typeEmoji: "🌳", hp: 50, rarity: 2,
    size: "Tiny (11 cm)", diet: "Seeds & insects", season: "All year",
    fact: "Coal tits hide hundreds of seeds in secret spots to eat later — and they almost always remember where they hid them!",
    color: "#554433"
  },

  // ── FARMLAND continued (cards #034–036) ───────────────────────────────
  {
    id: 34, name: "Swallow", latin: "Hirundo rustica",
    type: "Farmland", typeEmoji: "🌾", hp: 75, rarity: 2,
    size: "Small (19 cm)", diet: "Flying insects", season: "Summer only",
    fact: "Swallows fly all the way from South Africa every spring — a journey of over 10,000 miles!",
    color: "#224488"
  },
  {
    id: 35, name: "Red Kite", latin: "Milvus milvus",
    type: "Farmland", typeEmoji: "🌾", hp: 140, rarity: 1,
    size: "Large (61 cm)", diet: "Carrion & worms", season: "All year",
    fact: "Red kites were nearly extinct in Britain but were saved by a special breeding programme — now they thrive again!",
    color: "#cc5522"
  },
  {
    id: 36, name: "Buzzard", latin: "Buteo buteo",
    type: "Farmland", typeEmoji: "🌾", hp: 135, rarity: 2,
    size: "Large (54 cm)", diet: "Rabbits & worms", season: "All year",
    fact: "Buzzards are now Britain's most common large bird of prey — look for them circling slowly high in the sky!",
    color: "#886633"
  },

  // ── WETLAND continued (card #037) ─────────────────────────────────────
  {
    id: 37, name: "Mute Swan", latin: "Cygnus olor",
    type: "Wetland", typeEmoji: "💧", hp: 150, rarity: 2,
    size: "Very Large (150 cm)", diet: "Water plants & algae", season: "All year",
    fact: "Mute swans are one of the heaviest flying birds in the world — and all unmarked swans in Britain belong to the King!",
    color: "#f0f0f0"
  },

  // ── COASTAL continued (card #038) ─────────────────────────────────────
  {
    id: 38, name: "Cormorant", latin: "Phalacrocorax carbo",
    type: "Coastal", typeEmoji: "🌊", hp: 115, rarity: 2,
    size: "Large (90 cm)", diet: "Fish", season: "All year",
    fact: "Cormorants don't have waterproof feathers so after diving they stand with wings spread wide to dry in the wind!",
    color: "#112233"
  },

  // ── MOORLAND continued (card #039) ────────────────────────────────────
  {
    id: 39, name: "Merlin", latin: "Falco columbarius",
    type: "Moorland", typeEmoji: "🌿", hp: 95, rarity: 1,
    size: "Small (30 cm)", diet: "Small birds", season: "All year",
    fact: "The merlin is Britain's smallest falcon — a ferocious hunter that catches birds in mid-air at high speed!",
    color: "#446688"
  },
];

const TYPE_THEMES = {
  Garden:   { bg: "#fff8e6", border: "#e8b800", accent: "#c87000", header: "#7c4a00", text: "#4a2e00", artBg: "#e8f4d0", pill: "#ffd54f", pillText: "#4a2e00" },
  Woodland: { bg: "#f0fbe8", border: "#5aaa20", accent: "#2d7a00", header: "#1a5200", text: "#1a3a00", artBg: "#c8e8a8", pill: "#81c784", pillText: "#1a3a00" },
  Farmland: { bg: "#fffde8", border: "#c8aa00", accent: "#8a6a00", header: "#5a4000", text: "#3a2800", artBg: "#e8e0a0", pill: "#f9a825", pillText: "#3a2800" },
  Wetland:  { bg: "#e8f4ff", border: "#2277cc", accent: "#004499", header: "#002266", text: "#001844", artBg: "#b8d8f0", pill: "#42a5f5", pillText: "#001844" },
  Coastal:  { bg: "#f0faff", border: "#00aacc", accent: "#007799", header: "#004466", text: "#002233", artBg: "#a8d8ec", pill: "#26c6da", pillText: "#002233" },
  Moorland: { bg: "#f8f0ff", border: "#8844cc", accent: "#5a1a99", header: "#360066", text: "#220044", artBg: "#d0b8e8", pill: "#ab47bc", pillText: "#220044" }
};
