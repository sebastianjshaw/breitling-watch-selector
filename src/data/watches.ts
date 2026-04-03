import type { Watch } from './types'

/** Local assets in /public/watches — Breitling product card PNGs for grid + modal. */
function watchPhoto(file: string): string {
  return `${import.meta.env.BASE_URL}watches/${file}`
}

export const WATCHES: Watch[] = [
  {
    id: 'nav-01',
    name: 'Navitimer B01 Chronograph 43',
    reference: 'AB0138211B1A1',
    collection: 'Navitimer',
    priceUsd: 9800,
    caseMaterial: 'Stainless steel',
    strapType: 'Metal bracelet',
    dialColor: 'Black',
    movement: 'Automatic',
    waterResistance: '30 m',
    heroImageUrl: watchPhoto('ProductCard-1.png'),
    materialsDetail:
      'Stainless steel case and bracelet. Cambered sapphire crystal, glare-proofed both sides. Screw-locked crown.',
    description:
      'The definitive pilot chronograph, with the circular slide rule and distinctive beaded bezel. Manufacture Calibre B01 delivers 70 hours of power reserve.',
  },
  {
    id: 'nav-02',
    name: 'Navitimer Automatic 41',
    reference: 'A17329161C1P1',
    collection: 'Navitimer',
    priceUsd: 5450,
    caseMaterial: 'Stainless steel',
    strapType: 'Leather',
    dialColor: 'Blue',
    movement: 'Automatic',
    waterResistance: '30 m',
    heroImageUrl: watchPhoto('ProductCard-2.png'),
    materialsDetail:
      'Stainless steel case. Alligator leather strap with folding clasp. Sapphire crystal with anti-reflective coating.',
    description:
      'A cleaner, three-hand expression of the Navitimer DNA—slimmer profile, open caseback, and the same aviation heritage in a versatile 41 mm format.',
  },
  {
    id: 'nav-03',
    name: 'Navitimer B01 Chronograph 46',
    reference: 'UB0127211G1P1',
    collection: 'Navitimer',
    priceUsd: 11200,
    caseMaterial: 'Two-tone',
    strapType: 'Leather',
    dialColor: 'Green',
    movement: 'Automatic',
    waterResistance: '30 m',
    heroImageUrl: watchPhoto('ProductCard-3.png'),
    materialsDetail:
      'Stainless steel and 18k red gold case. Brown alligator strap. Sapphire crystal front and back.',
    description:
      'Warm precious metal accents frame a sunray green dial. Chronograph precision meets unmistakable Navitimer presence on the wrist.',
  },
  {
    id: 'chr-01',
    name: 'Chronomat B01 42',
    reference: 'AB0134101B1A1',
    collection: 'Chronomat',
    priceUsd: 8950,
    caseMaterial: 'Stainless steel',
    strapType: 'Metal bracelet',
    dialColor: 'Black',
    movement: 'Automatic',
    waterResistance: '200 m',
    heroImageUrl: watchPhoto('ProductCard-4.png'),
    materialsDetail:
      'Stainless steel case and Rouleaux bracelet. Unidirectional ratcheted bezel with rider tabs. Screw-down crown.',
    description:
      'The all-purpose sports chronograph: bold rider tabs, integrated Rouleaux bracelet, and robust 200 m water resistance for land, sea, and sky.',
  },
  {
    id: 'chr-02',
    name: 'Chronomat Automatic GMT 40',
    reference: 'A32398101C1A1',
    collection: 'Chronomat',
    priceUsd: 5950,
    caseMaterial: 'Stainless steel',
    strapType: 'Metal bracelet',
    dialColor: 'Blue',
    movement: 'Automatic',
    waterResistance: '200 m',
    heroImageUrl: watchPhoto('ProductCard-5.png'),
    materialsDetail:
      'Stainless steel case and bracelet. Ceramic bezel insert. Twin-time zone complication with independent hour hand.',
    description:
      'Travel-ready GMT in a wearable 40 mm case—clean dial layout, dual-time reading at a glance, Chronomat toughness.',
  },
  {
    id: 'chr-03',
    name: 'Super Chronomat B01 44',
    reference: 'UB0136251L1U1',
    collection: 'Chronomat',
    priceUsd: 18900,
    caseMaterial: '18k red gold',
    strapType: 'Rubber',
    dialColor: 'Copper',
    movement: 'Automatic',
    waterResistance: '200 m',
    heroImageUrl: watchPhoto('ProductCard-6.png'),
    materialsDetail:
      '18k red gold case. Rubber strap with 18k red gold folding clasp. Ceramic bezel with rider tabs.',
    description:
      'Maximum wrist presence: precious metal case, copper sunray dial, and the Manufacture B01 chronograph movement.',
  },
  {
    id: 'so-01',
    name: 'Superocean Automatic 42',
    reference: 'A17375211B1A1',
    collection: 'Superocean',
    priceUsd: 4650,
    caseMaterial: 'Stainless steel',
    strapType: 'Rubber',
    dialColor: 'Black',
    movement: 'Automatic',
    waterResistance: '500 m',
    heroImageUrl: watchPhoto('ProductCard-7.png'),
    materialsDetail:
      'Stainless steel case. Breitling rubber strap. Sapphire crystal. Helium escape valve for saturation diving.',
    description:
      'Purpose-built diver with clean dial graphics, high-contrast bezel, and serious depth rating for ocean explorers.',
  },
  {
    id: 'so-02',
    name: 'Superocean Automatic 36',
    reference: 'A17376211L1A1',
    collection: 'Superocean',
    priceUsd: 4450,
    caseMaterial: 'Stainless steel',
    strapType: 'Metal bracelet',
    dialColor: 'White',
    movement: 'Automatic',
    waterResistance: '300 m',
    heroImageUrl: watchPhoto('ProductCard-8.png'),
    materialsDetail:
      'Stainless steel case and bracelet. Ceramic bezel. Super-LumiNova hands and indexes.',
    description:
      'A compact 36 mm dive watch with the same professional specs—versatile on bracelet for everyday wear.',
  },
  {
    id: 'so-03',
    name: 'Superocean Heritage B20 44',
    reference: 'AB2030161C1A1',
    collection: 'Superocean',
    priceUsd: 6250,
    caseMaterial: 'Stainless steel',
    strapType: 'Mesh',
    dialColor: 'Blue',
    movement: 'Automatic',
    waterResistance: '200 m',
    heroImageUrl: watchPhoto('ProductCard-9.png'),
    materialsDetail:
      'Stainless steel case. Ocean Classic mesh bracelet. High-domed sapphire crystal evoking vintage acrylic.',
    description:
      'Heritage lines meet modern reliability: mesh bracelet, pastel bezel, and a manufacture-grade automatic calibre.',
  },
  {
    id: 'av-01',
    name: 'Avenger B01 Chronograph 44',
    reference: 'AB0147101B1X1',
    collection: 'Avenger',
    priceUsd: 7850,
    caseMaterial: 'Stainless steel',
    strapType: 'Leather',
    dialColor: 'Black',
    movement: 'Automatic',
    waterResistance: '300 m',
    heroImageUrl: watchPhoto('ProductCard-10.png'),
    materialsDetail:
      'Stainless steel case with rider grip pattern on crown. Military leather strap. Cambered sapphire crystal.',
    description:
      'Tactical chronograph styling with extreme legibility and 300 m water resistance—built for demanding conditions.',
  },
  {
    id: 'av-02',
    name: 'Avenger Automatic 45 Seawolf',
    reference: 'A17319101C1X1',
    collection: 'Avenger',
    priceUsd: 4250,
    caseMaterial: 'Stainless steel',
    strapType: 'Rubber',
    dialColor: 'Blue',
    movement: 'Automatic',
    waterResistance: '3000 m',
    heroImageUrl: watchPhoto('ProductCard-11.png'),
    materialsDetail:
      'Stainless steel case rated for extreme pressure. Vulcanized rubber strap. Screw-down crown and caseback.',
    description:
      'Professional saturation-diver capability in an Avenger case—serious depth rating with uncompromising build.',
  },
  {
    id: 'av-03',
    name: 'Avenger B01 Chronograph 45 Night Mission',
    reference: 'VB0147101B1X1',
    collection: 'Avenger',
    priceUsd: 9200,
    caseMaterial: 'Ceramic',
    strapType: 'Rubber',
    dialColor: 'Black',
    movement: 'Automatic',
    waterResistance: '300 m',
    heroImageUrl: watchPhoto('ProductCard-12.png'),
    materialsDetail:
      'Black ceramic case. Military rubber strap. Titanium caseback and deployant elements for comfort.',
    description:
      'Stealth ceramic construction with chronograph precision—lightweight, scratch-resistant, mission-ready aesthetics.',
  },
  {
    id: 'pr-01',
    name: 'Premier B01 Chronograph 42',
    reference: 'AB0118221G1P1',
    collection: 'Premier',
    priceUsd: 8950,
    caseMaterial: 'Stainless steel',
    strapType: 'Leather',
    dialColor: 'Copper',
    movement: 'Automatic',
    waterResistance: '100 m',
    heroImageUrl: watchPhoto('ProductCard-13.png'),
    materialsDetail:
      'Stainless steel case. Croco-style calfskin strap. Box sapphire crystal with double AR coating.',
    description:
      'Dress-sports elegance: symmetrical twin sub-dials, applied Arabic numerals, and manufacture chronograph performance.',
  },
  {
    id: 'pr-02',
    name: 'Premier Automatic Day & Date 40',
    reference: 'A45340241G1P1',
    collection: 'Premier',
    priceUsd: 4950,
    caseMaterial: 'Stainless steel',
    strapType: 'Leather',
    dialColor: 'Silver',
    movement: 'Automatic',
    waterResistance: '100 m',
    heroImageUrl: watchPhoto('ProductCard-14.png'),
    materialsDetail:
      'Stainless steel case. Brown leather strap with pin buckle. Fluted pushers and vintage-inspired dial texture.',
    description:
      'Everyday sophistication with day-date utility—slim profile under cuff, clear typography, timeless Premier design codes.',
  },
  {
    id: 'pr-03',
    name: 'Premier B15 Duograph 42',
    reference: 'RB1510251B1P1',
    collection: 'Premier',
    priceUsd: 16800,
    caseMaterial: '18k red gold',
    strapType: 'Leather',
    dialColor: 'Black',
    movement: 'Manual',
    waterResistance: '100 m',
    heroImageUrl: watchPhoto('ProductCard-15.png'),
    materialsDetail:
      '18k red gold case. Black alligator strap. Sapphire display back revealing split-seconds architecture.',
    description:
      'Haute complication in a restrained case: split-seconds chronograph, manual winding ritual, precious metal warmth.',
  },
  {
    id: 'tt-01',
    name: 'Top Time B01 Chevrolet Corvette',
    reference: 'AB01761A1K1X1',
    collection: 'Top Time',
    priceUsd: 8950,
    caseMaterial: 'Stainless steel',
    strapType: 'Leather',
    dialColor: 'Purple',
    movement: 'Automatic',
    waterResistance: '100 m',
    heroImageUrl: watchPhoto('ProductCard-16.png'),
    materialsDetail:
      'Stainless steel case. Racing perforated leather strap. Toughened sapphire crystal with vintage domed profile.',
    description:
      'Motorsport-inspired chronograph with bold color blocking and the B01 movement—performance on and off the track.',
  },
  {
    id: 'tt-02',
    name: 'Top Time B01 Ford Thunderbird',
    reference: 'AB01762A1L1X1',
    collection: 'Top Time',
    priceUsd: 8950,
    caseMaterial: 'Stainless steel',
    strapType: 'NATO',
    dialColor: 'Blue',
    movement: 'Automatic',
    waterResistance: '100 m',
    heroImageUrl: watchPhoto('ProductCard-17.png'),
    materialsDetail:
      'Stainless steel case. Woven NATO strap with steel keepers. Zorro dial graphic with contrasting sub-dials.',
    description:
      'Playful 1960s spirit with modern chronograph engineering—lightweight NATO wear for summer driving.',
  },
  {
    id: 'nav-04',
    name: 'Navitimer B01 Chronograph 41',
    reference: 'AB0139241C1P1',
    collection: 'Navitimer',
    priceUsd: 9450,
    caseMaterial: 'Stainless steel',
    strapType: 'Leather',
    dialColor: 'Green',
    movement: 'Automatic',
    waterResistance: '30 m',
    heroImageUrl: watchPhoto('ProductCard-18.png'),
    materialsDetail:
      'Stainless steel case. Green alligator strap. Slide rule bezel with logarithmic scales for flight calculations.',
    description:
      'Contemporary 41 mm Navitimer proportions with a rich green dial—iconic aviation tool watch for the modern era.',
  },
  {
    id: 'chr-04',
    name: 'Chronomat 32',
    reference: 'A77310101A1A1',
    collection: 'Chronomat',
    priceUsd: 4250,
    caseMaterial: 'Stainless steel',
    strapType: 'Metal bracelet',
    dialColor: 'Silver',
    movement: 'Quartz',
    waterResistance: '100 m',
    heroImageUrl: watchPhoto('ProductCard-19.png'),
    materialsDetail:
      'Stainless steel case and Rouleaux bracelet. Diamond-set bezel indices optional in production models.',
    description:
      'Compact Chronomat silhouette with quartz precision—effortless daily wear with signature rider-tab bezel.',
  },
  {
    id: 'so-04',
    name: 'Superocean Heritage 57 Pastel Paradise',
    reference: 'A103701A1C1X1',
    collection: 'Superocean',
    priceUsd: 5150,
    caseMaterial: 'Stainless steel',
    strapType: 'NATO',
    dialColor: 'Blue',
    movement: 'Automatic',
    waterResistance: '100 m',
    heroImageUrl: watchPhoto('ProductCard-20.png'),
    materialsDetail:
      'Stainless steel case. Woven pastel NATO strap. Bidirectional ceramic bezel with summer color palette.',
    description:
      'Limited-edition summer spirit—heritage dive aesthetics with a playful, collectible color story.',
  },
  {
    id: 'av-04',
    name: 'Avenger Automatic 43',
    reference: 'A17318101B1A1',
    collection: 'Avenger',
    priceUsd: 3950,
    caseMaterial: 'Stainless steel',
    strapType: 'Metal bracelet',
    dialColor: 'Black',
    movement: 'Automatic',
    waterResistance: '300 m',
    heroImageUrl: watchPhoto('ProductCard-21.png'),
    materialsDetail:
      'Stainless steel case and bracelet. Screw-down crown guards. Military stencil dial typography.',
    description:
      'Core Avenger three-hander—robust case architecture, high contrast dial, tool-watch simplicity.',
  },
  {
    id: 'pr-04',
    name: 'Premier B09 Chronograph 40',
    reference: 'AB0930D31K1P1',
    collection: 'Premier',
    priceUsd: 8750,
    caseMaterial: 'Stainless steel',
    strapType: 'Leather',
    dialColor: 'Green',
    movement: 'Manual',
    waterResistance: '100 m',
    heroImageUrl: watchPhoto('ProductCard-22.png'),
    materialsDetail:
      'Stainless steel case. Pistachio-toned salmon adjacent dial in certain light. Manual-wind column-wheel chronograph.',
    description:
      'Vintage-inspired panda layout with manual calibre—interactive winding and classic Premier proportions.',
  },
  {
    id: 'tt-03',
    name: 'Top Time Deus',
    reference: 'AB01764A1C1X1',
    collection: 'Top Time',
    priceUsd: 5950,
    caseMaterial: 'Stainless steel',
    strapType: 'Leather',
    dialColor: 'White',
    movement: 'Automatic',
    waterResistance: '100 m',
    heroImageUrl: watchPhoto('ProductCard-23.png'),
    materialsDetail:
      'Stainless steel case. Brown bund-style leather option compatible. Lightning bolt small seconds hand.',
    description:
      'Collaborative design energy with moto culture cues—graphic dial, spirited details, automatic reliability.',
  },
  {
    id: 'nav-05',
    name: 'Navitimer Automatic 36',
    reference: 'A17327361L1P1',
    collection: 'Navitimer',
    priceUsd: 5250,
    caseMaterial: 'Stainless steel',
    strapType: 'Leather',
    dialColor: 'Purple',
    movement: 'Automatic',
    waterResistance: '30 m',
    heroImageUrl: watchPhoto('ProductCard.png'),
    materialsDetail:
      'Stainless steel case. Lilac leather strap. Slimmed slide rule for 36 mm case diameter.',
    description:
      'Navitimer character in a refined 36 mm footprint—color-forward dial options with aviation DNA intact.',
  },
  {
    id: 'chr-05',
    name: 'Chronomat GMT 40',
    reference: 'A32398101L1P1',
    collection: 'Chronomat',
    priceUsd: 6150,
    caseMaterial: 'Titanium',
    strapType: 'Rubber',
    dialColor: 'Green',
    movement: 'Automatic',
    waterResistance: '200 m',
    heroImageUrl: watchPhoto('ProductCard-1.png'),
    materialsDetail:
      'Titanium case and bezel rider tabs. Green rubber strap with titanium deployant. Lightweight sport profile.',
    description:
      'GMT utility in featherweight titanium—forest green dial, dual-time travel, Chronomat durability.',
  },
]

export function getPriceBounds(): { min: number; max: number } {
  const prices = WATCHES.map((w) => w.priceUsd)
  return {
    min: Math.min(...prices),
    max: Math.max(...prices),
  }
}
