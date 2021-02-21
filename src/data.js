const navLinks = () => [
  {
    id: 1,
    name: 'Amérique',
    svgContinent: './Assets/SVG/america.svg',

    countries: [
      {
        title: 'Canada',
        id: 1,
        svg: './Assets/IMG/canada/canada.svg',
        flag: './Assets/IMG/canada/can-flag.png',
        thumb: './Assets/IMG/canada/can01-thumb.jpg',
        mid: [
          './Assets/IMG/canada/can01-mid.jpg',
          './Assets/IMG/canada/can02-mid.jpg',
          './Assets/IMG/canada/can03-mid.jpg',
          './Assets/IMG/canada/can04-mid.jpg',
          './Assets/IMG/canada/can05-mid.jpg',
        ],
        img: [
          './Assets/IMG/canada/can01.jpg',
          './Assets/IMG/canada/can02.jpg',
          './Assets/IMG/canada/can03.jpg',
          './Assets/IMG/canada/can04.jpg',
          './Assets/IMG/canada/can05.jpg',
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'Europe',
    svgContinent: './Assets/SVG/europe.svg',

    countries: [
      {
        title: 'Albanie',
        thumb: './Assets/IMG/albanie/alb01-thumb.jpg',
      },
      {
        title: 'Bulgarie',
        thumb: './Assets/IMG/bulgarie/bulg01-thumb.jpg',
      },
      {
        title: 'Croatie',
        thumb: './Assets/IMG/croatie/cro03-thumb.jpg',
      },
      {
        title: 'Grèce',
        thumb: './Assets/IMG/grece/grece01-thumb.jpg',
      },
      {
        title: 'Monte-Negro',
        thumb: './Assets/IMG/monte-negro/monte01-thumb.jpg',
      },
      {
        title: 'Serbie',
        thumb: './Assets/IMG/serbie/serb01-thumb.jpg',
      },
      {
        title: 'Slovenie',
        thumb: './Assets/IMG/slovenie/slo01-thumb.jpg',
      },
      {
        title: 'République Tchèque',
        thumb: './Assets/IMG/tcheque/prague01-thumb.jpg',
      },
    ],
  },
  {
    id: 3,
    name: ' Asie',
    svgContinent: './Assets/SVG/asie.svg',

    countries: [
      {
        title: 'Cambodge',
        thumb: './Assets/IMG/cambodge/cambodge01-thumb.jpg',
      },
      {
        title: 'Laos',
        thumb: './Assets/IMG/laos/laos03-thumb.jpg',
      },
      {
        title: 'Thaïlande',
        thumb: './Assets/IMG/thailande/thai01-thumb.jpg',
      },
      {
        title: 'Vietnam',
        thumb: './Assets/IMG/vietnam/viet01-thumb.jpg',
      },
    ],
  },
];

export default navLinks;
