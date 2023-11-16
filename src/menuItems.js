export const menuItems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Services',
    url: '/services',
    submenu: [
      // {
      //   title: 'web design',
      //   url: 'web-design',
      // },
      {
        title: 'Job/Services',
        url: 'jobs',
        submenu: [
          {
            title: 'Interior',
            submenu: [
              {
                title: 'Kitchen',
                url: 'kitchen',
              },
              {
                title: 'Bathroon',
                url: 'bathroom',
              },
              {
                title: 'Subsoil',
                url: 'subsoil',
              },
              {
                title: 'Home Adaptation',
                url: 'home_adaptation',
              },
            ],
          },
          {
            title: 'Exterior',
            submenu: [
              {
                title: 'Roofing',
                url: 'roofing',
              },
              {
                title: 'Outdoor Cladding',
                url: 'outdoor_cladding',
              },
              {
                title: 'Masonry',
                url: 'masonry',
              },
              {
                title: 'French Drain',
                url: 'french_drain',
              },
              {
                title: 'Doors/Windows',
                url: 'doors_and_windows',
              },
              {
                title: 'Balconies/Terraces',
                url: 'balconies_and_terraces',
              },
            ],
          },
          {
            title: 'Major Renovation',
            submenu: [
              {
                title: 'House Construction',
                url: 'house_construction',
              },
              {
                title: 'Enlargement',
                url: 'enlargement',
              },
              {
                title: 'Conversion',
                url: 'conversion',
              },
              {
                title: 'Garage',
                url: 'garage',
              },
              {
                title: 'Multilodgement',
                url: 'multilodgement',
              },              
            ],
          },
          {
            title: 'Professional Services',
            submenu: [
              {
                title: 'Interior Designer',
                url: 'interior_designer',
              },
              {
                title: 'Architect',
                url: 'architect',
              },
              {
                title: 'Technologist',
                url: 'technologist',
              },
              {
                title: 'Building Engineer',
                url: 'building_engineer',
              },              
            ],
          },
          {
            title: 'Other Services',
            submenu: [
              {
                title: 'Disinfection',
                url: 'disinfection',
              },
              {
                title: 'Disaster Renovation',
                url: 'disaster_renovation',
              },
              {
                title: 'Vacuum Cleaning',
                url: 'vacuum_cleaning',
              },
              {
                title: 'Green House',
                url: 'green_house',
              },              
              {
                title: 'Air conditioning/Heating',
                url: 'air_conditioning_and_heating',
              },              
            ],
          },
        ],
      },
      {
        title: 'CITIES',
        submenu: [
          {
            title: 'Abitibi-Témiscamingue',
            submenu: [
              {
                title: 'Amos',
                url: 'amos',
              },
              {
                title: 'Duparquet',
                url: 'duparquet',
              },
              {
                title: 'La Sarre',
                url: 'la_sarre',
              },
              {
                title: 'Macamic',
                url: 'macamic',
              },              
            ],
          },
          {
            title: 'Montérégie',
            submenu: [
              {
                title: 'Acton Vale',
                url: 'acton_vale',
              },
              {
                title: 'Boucherville',
                url: 'noucherville',
              },
              {
                title: 'Brossard',
                url: 'brossard',
              },              
              {
                title: 'Beauharnois',
                url: 'beauharinois',
              },              
              {
                title: 'Salaberry-de-Valleyfield',
                url: 'salaberry_de_valleyfield',
              },              
              {
                title: 'Lac-Brome',
                url: 'lac_brome',
              },              
              {
                title: 'Cowansville',
                url: 'cowansville',
              },              
              {
                title: 'Dunham',
                url: 'dunham',
              },              
              {
                title: 'Farnham',
                url: 'farnham',
              },              
              {
                title: 'Sutton',
                url: 'sutton',
              },              
            ],
          },
          {
            title: 'Laurentide',
            submenu: [
              {
                title: 'Mont-Laurier',
                url: 'mont_laurier',
              },
              {
                title: 'Rivière-Rouge',
                url: 'rivierre_rouge',
              },
              {
                title: 'Brownsburg-Chatham',
                url: 'brownsburg_chatham',
              },              
              {
                title: 'Lachute',
                url: 'lachute',
              },              
            ],
          },
          {
            title: 'Centre-du-Québec',
            submenu: [
              {
                title: 'Bécancour',
                url: 'becancour',
              },           
              {
                title: 'Daveluyville',
                url: 'daveluyville',
              },           
              {
                title: 'Victoriaville',
                url: 'victoriaville',
              },           
              {
                title: 'Warwick',
                url: 'warwick',
              },           
              {
                title: 'Drummondville',
                url: 'drummondville',
              },           
            ],
          },
          {
            title: 'Estrie',
            submenu: [
              {
                title: 'Kingsey Falls',
                url: 'kingsey falls',
              },           
              {
                title: 'Bedford',
                url: 'bedford',
              },           
              {
                title: 'Coaticook',
                url: 'coaticook',
              },           
              {
                title: 'Waterville',
                url: 'waterville',
              },           
            ],
          },
          {
            title: 'Gaspésie-Îles-de-la-Madeleine',
            submenu: [
              {
                title: 'Carleton-sur-Mer',
                url: 'carleton_sur_mer',
              },           
              {
                title: 'Bonaventure',
                url: 'bonaventure',
              },           
              {
                title: 'New Richmond',
                url: 'new_richmond',
              },           
              {
                title: 'Paspébiac',
                url: 'paspebiac',
              },           
            ],
          },
          {
            title: 'Chaudière-Appalaches',
            submenu: [
              {
                title: 'Saint Georges',
                url: 'saint_georges',
              },           
            ],
          },
          {
            title: 'Côte-Nord',
            submenu: [
              {
                title: 'Fermont',
                url: 'Fermont',
              },           
            ],
          },
          {
            title: 'Nord-du-Québec',
            submenu: [
              {
                title: 'Schefferville',
                url: 'schefferville',
              },           
            ],
          },
          {
            title: 'Capitale-Nationale',
            submenu: [
              {
                title: 'Baie-Saint-Paul',
                url: 'baie_saint_paul',
              },           
              {
                title: 'Clamont',
                url: 'clamont',
              },           
              {
                title: 'La Malbaie',
                url: 'la_malbaie',
              },           
            ],
          },
          {
            title: 'Lanaudière',
            submenu: [
              {
                title: 'Berthierville',
                url: 'berthierville',
              },           
              {
                title: 'Lavaltrie',
                url: 'lavaltrie',
              },           
              {
                title: 'Saint Gabriel',
                url: 'saint_gabriel',
              },           
              {
                title: 'Deux-Montagnes',
                url: 'deux_montagnes',
              },           
              {
                title: 'Saint-Eustache',
                url: 'saint_eustache',
              },           
              {
                title: 'Sainte-Marthe-sur-le-Lac',
                url: 'saint_marthe_sur_le_lac',
              },           
            ],
          },
          {
            title: 'Mauricie',
            submenu: [
              {
                title: 'Trois-Rivières',
                url: 'trois_rivieres',
              },              
            ],
          },
          {
            title: 'Outaouais',
            submenu: [
              {
                title: 'Gatineau',
                url: 'gatineau',
              },              
            ],
          },
          {
            title: 'Montréal',
            submenu: [
              {
                title: "Baie-d'Urfé",
                url: "baie-d'urde",
              },
              {
                title: 'Beacosnfield',
                url: 'beaconsfield',
              },
              {
                title: 'Côte-Saint-Luc',
                url: 'cote_saint_luc',
              },              
              {
                title: 'Dollard-des-Ormeaux',
                url: 'dollard_des_ormeaux',
              },              
              {
                title: 'Dorval',
                url: 'dorval',
              },              
              {
                title: 'Hampstead',
                url: 'hampstead',
              },              
              {
                title: "L'Île-Dorval",
                url: "l'Île-Dorval",
              },              
            ],
          },
          // {
          //   title: 'Disaster Renovation',
          //   url: 'disaster_renovation',
          // },
          // {
          //   title: 'Vacuum Cleaning',
          //   url: 'vacuum_cleaning',
          // },
          // {
          //   title: 'Green House',
          //   url: 'green_house',
          // },              
          // {
          //   title: 'Air conditioning/Heating',
          //   url: 'air_conditioning_and_heating',
          // },              
        ],
      },
    ],
  },
  {
    title: 'Projects',
    url: '/project',
    submenu: [
      {
        title: 'Interior',
        submenu: [
          {
            title: 'Kitchen',
            url: 'kitchen',
          },
          {
            title: 'Bathroon',
            url: 'bathroom',
          },
          {
            title: 'Subsoil',
            url: 'subsoil',
          },
          {
            title: 'Architectural Furniture',
            url: 'architectural_furniture',
          },
        ],
      },
      {
        title: 'Exterior',
        submenu: [
          {
            title: 'Balconies and Terraces',
            url: 'balconies_and_terraces',
          },
          {
            title: 'Doors and Windows',
            url: 'doors_and-windows',
          },
          {
            title: 'Exterior Cladding',
            url: 'exterior_cladding',
          },
          {
            title: 'Roofing',
            url: 'roofing',
          },
        ],
      },
      {
        title: 'Major Projects',
        submenu: [
          {
            title: 'House Expansion',
            url: 'house_expansion',
          },
          {
            title: 'New Construction',
            url: 'new_construction',
          },
          {
            title: 'Multiple Projects',
            url: 'multiple_projects',
          },              
        ],
      },      
    ],
  },
  {
    title: 'About',
    url: '/about',
    submenu: [
      {
        title: 'Who we are',
        url: 'who-we-are',
      },
      {
        title: 'Our values',
        url: 'our-values',
      },
    ],
  },
];
