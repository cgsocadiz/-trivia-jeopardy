const { buildCategory } = require('./builder');

// 3. World Geography & Travel
function getGeo() {
  const d1 = [
    ['Capital of France', 'Paris', 'Famous for the Eiffel Tower and Louvre Museum.'],
    ['Largest ocean on Earth by surface area', 'Pacific Ocean', 'Covers more than 30% of Earth\'s surface.'],
    ['The longest river in the world, flowing through northeastern Africa', 'Nile River', 'Flows north into the Mediterranean Sea.'],
    ['Country with the largest land area in the world', 'Russia', 'Spans 11 time zones across Europe and Asia.'],
    ['Famous mountain range home to Mount Everest', 'The Himalayas', 'Located in Asia between India, Nepal, Tibet, and Bhutan.'],
    ['Capital of Japan', 'Tokyo', 'The most populous metropolitan area in the world.'],
    ['The largest desert on Earth (hot desert)', 'Sahara Desert', 'Spans over 9 million square kilometers across North Africa.'],
    ['Continent that is completely south of the equator and also an island', 'Australia', 'Often called the "Land Down Under".'],
    ['Country shaped like a boot in Southern Europe', 'Italy', 'Bordered by the Mediterranean, Adriatic, and Tyrrhenian seas.'],
    ['Capital of the United Kingdom', 'London', 'Situated along the River Thames.'],
    ['Largest country in South America by both land area and population', 'Brazil', 'Official language is Portuguese.'],
    ['Famous canal connecting the Atlantic and Pacific Oceans', 'Panama Canal', 'Opened in 1914, cutting travel distance around Cape Horn.'],
    ['Capital of Italy, known as the "Eternal City"', 'Rome', 'Surrounds Vatican City, the smallest independent state.'],
    ['The tallest waterfall in the world, located in Venezuela', 'Angel Falls (Salto Angel)', 'Drops an astonishing 979 meters (3,212 feet).'],
    ['Island country in East Asia with capital city Taipei', 'Taiwan', 'Located off the southeastern coast of China.'],
    ['Continent containing the Amazon Rainforest', 'South America', 'Home to over 10% of the world\'s known species.'],
    ['Capital of Canada', 'Ottawa', 'Located in the province of Ontario.'],
    ['The deepest lake in the world, located in Siberia, Russia', 'Lake Baikal', 'Contains roughly 20% of the world\'s unfrozen surface fresh water.'],
    ['Country that borders both the Atlantic Ocean and the Mediterranean Sea', 'Spain (or France / Morocco)', 'Spain controls the Strait of Gibraltar area.'],
    ['Smallest country in the world by area and population', 'Vatican City', 'Enclave within the city of Rome, covering 49 hectares.']
  ];

  const d2 = [
    ['Capital of Australia', 'Canberra', 'Selected as a compromise between Sydney and Melbourne in 1908.'],
    ['The longest mountain range in the world, running along South America\'s western edge', 'The Andes', 'Stretches over 7,000 kilometers.'],
    ['Landlocked European country famous for the Alps, watches, and chocolate', 'Switzerland', 'Has four national languages: German, French, Italian, and Romansh.'],
    ['Major river that flows through London, England', 'River Thames', 'Flows 346 km before emptying into the North Sea.'],
    ['Capital of Egypt', 'Cairo', 'Near the ancient Giza pyramid complex.'],
    ['The highest active volcano in Europe, located on the island of Sicily', 'Mount Etna', 'Has a recorded eruptive history dating back 3,500 years.'],
    ['Country with the most natural lakes in the world', 'Canada', 'Contains more than 50% of the natural lakes on Earth.'],
    ['Capital of Spain', 'Madrid', 'Located almost in the geographic center of the Iberian Peninsula.'],
    ['The strait separating southern Spain from northern Morocco', 'Strait of Gibraltar', 'Only 14.3 kilometers wide at its narrowest point.'],
    ['African country with three official capitals: Pretoria, Cape Town, and Bloemfontein', 'South Africa', 'Known as the Rainbow Nation.'],
    ['The sea that borders Egypt, Jordan, and Israel known for high salt concentration', 'The Dead Sea', 'Lowest land elevation on Earth at 430 meters below sea level.'],
    ['Capital of Greece', 'Athens', 'Considered the cradle of Western civilization and democracy.'],
    ['US state that has the longest coastline', 'Alaska', 'Coastline stretches over 6,640 miles (10,686 km).'],
    ['The largest island in the world that is not a continent', 'Greenland', 'An autonomous territory of the Kingdom of Denmark.'],
    ['Capital of Germany, reunited in 1990', 'Berlin', 'The largest city in Germany by population.'],
    ['The narrow body of water connecting the Persian Gulf with the Gulf of Oman', 'Strait of Hormuz', 'Crucial maritime choke point for global petroleum transit.'],
    ['European country that contains the geothermal Blue Lagoon and Gullfoss waterfall', 'Iceland', 'Known as the Land of Fire and Ice.'],
    ['Capital of Argentina, famous for tango and Plaza de Mayo', 'Buenos Aires', 'Located on the western shore of the Rio de la Plata.'],
    ['The largest freshwater lake in Africa by surface area', 'Lake Victoria', 'Shared by Uganda, Kenya, and Tanzania.'],
    ['Country that contains both the source of the Tigris and Euphrates rivers', 'Turkey', 'Both rivers flow south through Syria and Iraq into the Persian Gulf.']
  ];

  const d3 = [
    ['The world\'s highest capital city above sea level', 'La Paz (administrative) / Quito (constitutional)', 'La Paz, Bolivia sits at approximately 3,640 meters.'],
    ['Southeastern Asian strait between the Malay Peninsula and Indonesian island of Sumatra', 'Strait of Malacca', 'One of the busiest shipping lanes in the world.'],
    ['The only nation that occupies an entire continent', 'Australia', 'It is also the world\'s smallest continent.'],
    ['Landlocked country in South America bordered by Brazil, Bolivia, and Argentina', 'Paraguay', 'Along with Bolivia, one of only two landlocked South American nations.'],
    ['Capital of New Zealand, known as the southernmost national capital in the world', 'Wellington', 'Replaced Auckland as capital in 1865.'],
    ['The river that forms part of the international border between the US and Mexico', 'Rio Grande (Rio Bravo del Norte)', 'Empties into the Gulf of Mexico.'],
    ['The autonomous country in the Arctic Ocean that is a constituent part of the Kingdom of the Netherlands', 'Curacao (or Aruba / Sint Maarten)', 'Located in the southern Caribbean Sea.'],
    ['Capital of Norway, located at the head of a namesake fjord', 'Oslo', 'Known as Christiania from 1624 to 1925.'],
    ['The mountain peak in Africa that is the highest free-standing mountain in the world', 'Mount Kilimanjaro', 'Dormant volcano in Tanzania rising to 5,895 meters.'],
    ['European river that flows through ten countries and four national capitals', 'Danube River', 'Passes Vienna, Bratislava, Budapest, and Belgrade.'],
    ['The world\'s largest archipelago state by number of islands', 'Indonesia', 'Encompasses over 17,000 islands across Southeast Asia.'],
    ['Capital of Ireland', 'Dublin', 'Situated on the mouth of the River Liffey.'],
    ['The dry desert plateau in northern Chile considered one of the driest places on Earth', 'Atacama Desert', 'Some weather stations there have never recorded rainfall.'],
    ['The city that is situated on two continents (Europe and Asia)', 'Istanbul', 'Bisected by the Bosphorus Strait.'],
    ['Capital of Thailand, officially known in Thai as Krung Thep Maha Nakhon', 'Bangkok', 'Famous for ornate shrines and vibrant street life.'],
    ['The historic region in Central Europe that includes Prague, Brno, and the Elbe river valley', 'Bohemia', 'Part of the modern Czech Republic.'],
    ['The inland sea between Kazakhstan and Uzbekistan that has drastically shrunk since the 1960s', 'Aral Sea', 'Diverted for cotton irrigation by Soviet planners.'],
    ['Capital of Portugal, situated at the mouth of the Tagus River', 'Lisbon', 'Europe\'s second-oldest capital city after Athens.'],
    ['The mountain range separating European Russia from Asian Russia (Siberia)', 'Ural Mountains', 'Extends 2,500 km from the Arctic Ocean to the Ural River.'],
    ['The disputed territory in the western Himalayas administered by India, Pakistan, and China', 'Kashmir', 'Source of multiple conflicts since the 1947 partition.']
  ];

  const d4 = [
    ['The capital city of Kazakhstan, formerly called Astana, renamed in 2019 and reverted in 2022', 'Astana (briefly Nur-Sultan)', 'Planned modern capital built on the Ishim River.'],
    ['The semi-enclosed body of water connected to the Black Sea by the Kerch Strait', 'Sea of Azov', 'Shallowest sea in the world with a max depth of 14 meters.'],
    ['The capital of Mongolia, the coldest capital city in the world by annual average temperature', 'Ulaanbaatar', 'Sits in the Tuul River valley at 1,350 meters altitude.'],
    ['The overseas department and region of France in South America where ESA launches rockets', 'French Guiana', 'Home to the Guiana Space Centre in Kourou.'],
    ['The highest peak in North America, located in the Alaska Range', 'Denali (Mount McKinley)', 'Rises to 6,190 meters (20,310 feet) above sea level.'],
    ['The capital of Iceland, the northernmost capital of a sovereign state', 'Reykjavik', 'Runs almost entirely on geothermal energy.'],
    ['The African country completely surrounded by South Africa', 'Lesotho', 'Known as the "Kingdom in the Sky" due to high altitude.'],
    ['The narrow strip of land connecting Central America to North America, often specifically applied to Mexico\'s narrowest waist', 'Isthmus of Tehuantepec', 'Separates the Gulf of Mexico from the Pacific Ocean.'],
    ['The body of water separating the South Island of New Zealand from the North Island', 'Cook Strait', 'Named after Captain James Cook.'],
    ['The highest point in South America, located in the Mendoza province of Argentina', 'Aconcagua', 'Reaches 6,961 meters (22,838 feet) in the Andes.'],
    ['The capital of Bhutan, renowned for measuring national progress through Gross National Happiness', 'Thimphu', 'One of the few capitals without traffic lights.'],
    ['The island in the Mediterranean Sea divided between Greek and Turkish communities', 'Cyprus', 'Nicosia is the divided capital of the island.'],
    ['The large island shared by three sovereign nations: Indonesia, Malaysia, and Brunei', 'Borneo', 'The third-largest island in the world.'],
    ['The capital of Morocco, while Casablanca is its largest commercial city', 'Rabat', 'Located on the Atlantic coast at the mouth of the Bou Regreg.'],
    ['The strait that separates the island of Tasmania from the Australian mainland', 'Bass Strait', 'Roughly 240 km wide and notorious for rough seas.'],
    ['The capital city of Jordan, built on seven original hills', 'Amman', 'One of the oldest continuously inhabited cities in the world.'],
    ['The European microstate nestled between Spain and France in the Pyrenees mountains', 'Andorra', 'Co-principality headed by the Bishop of Urgell and President of France.'],
    ['The river that forms most of the border between Laos and Thailand before flowing through Cambodia and Vietnam', 'Mekong River', 'Discharges into the South China Sea through an expansive delta.'],
    ['The Canadian territory that borders Alaska, whose capital is Whitehorse', 'Yukon', 'Center of the Klondike Gold Rush in the late 1890s.'],
    ['The highest mountain in Europe outside the Caucasus (or within Western Europe)', 'Mont Blanc', 'Stands at 4,808 meters on the French-Italian border.']
  ];

  const d5 = [
    ['The capital of the Federated States of Micronesia, located on the island of Pohnpei', 'Palikir', 'Replaced Kolonia as capital in 1989.'],
    ['The geographic point in the South Pacific Ocean that is farthest from any land (approx. 2,688 km)', 'Point Nemo (Oceanic Pole of Inaccessibility)', 'Used as a "spacecraft cemetery" for decommissioned satellites.'],
    ['The disputed border river between China and Russia where military clashes took place in 1969', 'Ussuri River (Zhenbao Island)', 'Branch of the Amur River system.'],
    ['The African capital city situated on the southern bank of the Congo River directly opposite Brazzaville', 'Kinshasa', 'Capital of the Democratic Republic of the Congo.'],
    ['The archipelago in the Arctic Ocean belonging to Norway governed under a 1920 international treaty', 'Svalbard', 'Location of the Svalbard Global Seed Vault.'],
    ['The capital of the island nation of Vanuatu in the South Pacific', 'Port Vila', 'Located on the island of Efate.'],
    ['The desert in southern Africa that spans parts of Botswana, Namibia, and South Africa', 'Kalahari Desert', 'Not a true desert, as it supports acacia and dry savannah.'],
    ['The body of water separating the Italian mainland from the island of Sicily', 'Strait of Messina', 'Associated with the mythological sea monsters Scylla and Charybdis.'],
    ['The capital of Suriname, formerly known as Dutch Guiana', 'Paramaribo', 'Historic inner city is a UNESCO World Heritage site.'],
    ['The salt flat in southwestern Bolivia that is the world\'s largest at over 10,000 square kilometers', 'Salar de Uyuni', 'Contains an estimated 50% to 70% of the world\'s known lithium reserves.'],
    ['The capital of Eritrea, famous for its preserved Italian rationalist architecture', 'Asmara', 'Often referred to as "Piccola Roma" (Little Rome).'],
    ['The peninsula on the Russian Far East between the Sea of Okhotsk and the Bering Sea', 'Kamchatka Peninsula', 'Contains the UNESCO Volcanoes of Kamchatka.'],
    ['The mountain pass connecting Pakistan and Afghanistan through the Hindu Kush', 'Khyber Pass', 'Historic invasion and trade route between Central and South Asia.'],
    ['The capital of Tuvalu, one of the smallest and lowest-lying nations on Earth', 'Funafuti', 'Atoll consisting of 30 islets.'],
    ['The deep ocean trench off the coast of Puerto Rico that is the deepest point in the Atlantic Ocean', 'Puerto Rico Trench (Milwaukee Deep)', 'Reaches a depth of 8,376 meters (27,480 feet).'],
    ['The capital of the Republic of the Congo (Congo-Brazzaville), facing Kinshasa across the river', 'Brazzaville', 'Named after Italian-French explorer Pierre Savorgnan de Brazza.'],
    ['The archipelago off the southeastern tip of South America separated from the mainland by the Strait of Magellan', 'Tierra del Fuego', 'Shared between Chile and Argentina.'],
    ['The capital city of Liechtenstein, situated along the Rhine River', 'Vaduz', 'Seat of the reigning Prince of Liechtenstein.'],
    ['The Russian enclave wedged between Poland and Lithuania on the Baltic Sea', 'Kaliningrad Oblast', 'Formerly the East Prussian capital of Konigsberg.'],
    ['The international border that forms the longest continuous undefended land border between two nations', 'US-Canada Border (The International Boundary)', 'Stretches 8,891 km (5,525 miles).']
  ];

  return buildCategory('geo', 'World Geography & Travel', { d1, d2, d3, d4, d5 });
}

const geoCategory = getGeo();
module.exports = geoCategory;
module.exports.getGeo = getGeo;
