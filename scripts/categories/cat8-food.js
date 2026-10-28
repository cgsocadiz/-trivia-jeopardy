const { buildCategory } = require('./builder');

function getFood() {
  const d1 = [
    ['Popular Italian flatbread topped with tomato sauce, mozzarella cheese, and baked in an oven', 'Pizza', 'Originated in Naples, Italy in the 18th or early 19th century.'],
    ['Traditional Japanese dish consisting of vinegared rice served with raw seafood or vegetables', 'Sushi', 'Originates from ancient fermenting techniques known as narezushi.'],
    ['Dairy product made by churning fermented or fresh cream', 'Butter', 'Used as a spread and cooking fat across the globe.'],
    ['Mexican folded tortilla filled with seasoned meat, beans, salsa, and cheese', 'Taco', 'Traditional Mexican tacos typically use soft corn tortillas.'],
    ['The primary grain used in staple Asian foods, paella, and risotto', 'Rice', 'Provides more than 20% of the calories consumed worldwide by humans.'],
    ['Sweet confection made from roasted and ground cacao seeds', 'Chocolate', 'Cultivated by the Olmec and Maya civilizations in Mesoamerica.'],
    ['Popular caffeinated beverage brewed from roasted beans of the Coffea plant', 'Coffee', 'Discovered in Ethiopia, with early cultivation in Yemen.'],
    ['Classic Italian pasta dish made with eggs, hard cheese (Pecorino Romano), guanciale, and black pepper', 'Carbonara', 'Originated in Rome in the mid-20th century.'],
    ['Liquid condiment made from fermented soybeans, roasted grains, and brine', 'Soy Sauce', 'Used extensively in East and Southeast Asian cuisines.'],
    ['Popular dessert made by freezing a mixture of milk, cream, sugar, and flavorings', 'Ice Cream', 'Dating back in primitive forms to ancient China and Persia.'],
    ['The key ingredient in traditional guacamole', 'Avocado', 'Native to the Americas and rich in healthy monounsaturated fats.'],
    ['French pastry known for its crescent shape and flaky, buttery layers of laminated dough', 'Croissant', 'Inspired by the Austrian kipferl.'],
    ['Fermented dairy product made by bacterial fermentation of milk', 'Yogurt', 'Contains live probiotic bacteria like Lactobacillus bulgaricus.'],
    ['Spicy Indian stew-like dish cooked in a sauce with aromatic spices, often served with basmati rice', 'Curry', 'Derives from the Tamil word "kari" meaning sauce.'],
    ['Thin, unleavened pancake that originated in Brittany, France', 'Crepe', 'Can be served sweet (wheat flour) or savory (buckwheat galette).'],
    ['Baking ingredient produced by the fermentation of sugars into carbon dioxide and alcohol', 'Yeast (Saccharomyces cerevisiae)', 'Essential leavening agent for bread baking.'],
    ['Traditional Japanese soup made with a fermented soybean paste broth and dashi', 'Miso Soup', 'Typically garnished with tofu, seaweed (wakame), and scallions.'],
    ['The national dish of Spain cooked in a wide, shallow pan with rice, saffron, and meats or seafood', 'Paella', 'Originated in the region of Valencia around Lake Albufera.'],
    ['Condiment made from crushed Brassica seeds mixed with vinegar and turmeric, famously paired with pretzels and hot dogs', 'Mustard', 'One of the oldest recorded condiments in culinary history.'],
    ['Green tea powder traditionally whisked in the Japanese tea ceremony (chanoyu)', 'Matcha', 'Shade-grown before harvest to increase theanine and chlorophyll levels.']
  ];

  const d2 = [
    ['The world\'s most expensive spice by weight, harvested from the stigmas of a purple crocus flower', 'Saffron (Crocus sativus)', 'Takes roughly 75,000 blossoms to yield one pound of dried saffron.'],
    ['Vietnamese noodle soup consisting of fragrant broth, rice noodles, herbs, and thinly sliced beef or chicken', 'Pho', 'Developed in northern Vietnam in the early 20th century.'],
    ['Hard Italian cheese made from cow\'s milk and aged for at least 12 months, stamped on its rind', 'Parmigiano-Reggiano (Parmesan)', 'Protected by PDO laws; only made in Parma, Reggio Emilia, and surrounding areas.'],
    ['The traditional Japanese skewered chicken cooked over binchotan charcoal', 'Yakitori', 'Seasoned with tare sauce or coarse sea salt.'],
    ['The spicy Korean fermented vegetable side dish typically made from napa cabbage and radishes', 'Kimchi', 'Historically prepared and stored in onggi earthenware jars in winter.'],
    ['Thick, cold Spanish soup made of blended raw vegetables, predominantly ripe tomatoes, cucumbers, and olive oil', 'Gazpacho', 'Originated in the southern Spanish region of Andalusia.'],
    ['The national dish of England, technically an Anglo-Indian dish featuring roasted chicken chunks in a creamy spiced tomato sauce', 'Chicken Tikka Masala', 'Invented in Glasgow, Scotland in the 1970s.'],
    ['The French technique of cooking vacuum-sealed food in a precisely temperature-controlled water bath', 'Sous-vide', 'French for "under vacuum".'],
    ['The famous spicy Thai soup characterized by distinct aromatic herbs: lemongrass, galangal, and kaffir lime leaves', 'Tom Yum (Tom Yum Goong)', 'Often made with fresh prawns and crushed bird\'s eye chilies.'],
    ['The Middle Eastern dip made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic', 'Hummus', 'Garnished with extra virgin olive oil and paprika.'],
    ['The dark, edible fungus that grows underground near the roots of oak and hazel trees, highly prized by chefs', 'Truffle', 'Hunted using trained pigs or dogs.'],
    ['The traditional North African dish made from steamed semolina wheat granules, often served with stewed vegetables', 'Couscous', 'Staple throughout Morocco, Algeria, Tunisia, and Libya.'],
    ['The Italian dessert whose name translates literally to "pick me up" or "cheer me up"', 'Tiramisu', 'Made with savoiardi (ladyfingers) dipped in coffee and mascarpone cream.'],
    ['The pungent, spiky Southeast Asian fruit known as the "King of Fruits", notorious for its strong smell', 'Durian', 'Often banned on public transit and in hotels across Southeast Asia.'],
    ['The Mexican rich, dark sauce made from chili peppers, spices, seeds, and Mexican chocolate', 'Mole (Mole Poblano)', 'Puebla and Oaxaca are considered the culinary homes of mole.'],
    ['The fermented black or green Greek table olives named after the city in southern Peloponnese', 'Kalamata Olives', 'Recognized by their almond shape and dark purple color.'],
    ['The classic French stew of beef braised in red wine, beef broth, carrots, onions, and garlic', 'Boeuf Bourguignon (Beef Burgundy)', 'Made famous to American households by Julia Child.'],
    ['The fermented tea beverage brewed using a symbiotic culture of bacteria and yeast (SCOBY)', 'Kombucha', 'Originated in Northeast China or Manchuria around 220 BC.'],
    ['The French pastry dough used to make eclairs, profiteroles, and gougeres, leavened by steam', 'Choux Pastry (Pate a choux)', 'Contains only butter, water, flour, and eggs.'],
    ['The savory yeast extract spread popular in Australia and New Zealand, rich in B vitamins', 'Vegemite (or Marmite)', 'Developed by Dr. Cyril Callister in Melbourne in 1922.']
  ];

  const d3 = [
    ['The scale used to measure the pungency and heat of chili peppers, based on capsaicin concentration', 'Scoville Scale (Scoville Heat Units)', 'Created in 1912 by American pharmacist Wilbur Scoville.'],
    ['The prized, highly marbled Japanese beef from Tajima cattle raised in Hyogo Prefecture', 'Kobe Beef (Wagyu)', 'Known for its low melting point of fat and rich umami flavor.'],
    ['The chemical reaction between amino acids and reducing sugars that gives browned food its distinctive flavor', 'Maillard Reaction', 'Named after French chemist Louis-Camille Maillard in 1912.'],
    ['The famous blue cheese produced from raw sheep\'s milk and aged in natural Combalou caves in southern France', 'Roquefort', 'Inoculated with Penicillium roqueforti mold.'],
    ['The five basic tastes recognized by human gustatory perception', 'Sweet, Sour, Salty, Bitter, and Umami', 'Umami was officially identified by Japanese chemist Kikunae Ikeda in 1908.'],
    ['The traditional Peruvian dish of fresh raw fish cured in citrus juices like lime or lemon and spiced with aji', 'Ceviche', 'Declared part of Peru\'s National Cultural Heritage.'],
    ['The aromatic culinary mixture of dried herbs typical of southeastern France (rosemary, thyme, oregano, savory)', 'Herbes de Provence', 'Commercial blends often include lavender flowers.'],
    ['The traditional Georgian cheese-filled bread topped with an egg yolk and a pat of butter in a boat-shaped crust', 'Khachapuri (Adjaruli Khachapuri)', 'Inscribed on the Intangible Cultural Heritage of Georgia list.'],
    ['The Japanese culinary term for the artful slicing of raw fish or meat served without rice', 'Sashimi', 'Garnished with daikon radish and shiso leaves.'],
    ['The culinary classification for mother sauces codified by French chef Auguste Escoffier', 'The Five Mother Sauces (Bechamel, Veloute, Espagnole, Hollandaise, Tomato)', 'Form the foundation of classical French cuisine.'],
    ['The Hawaiian dish of diced raw fish (usually yellowfin tuna) seasoned with soy sauce, sesame oil, and sea salt', 'Poke', 'Native Hawaiian fishermen seasoned cut-offs from their catch.'],
    ['The sweet, almond-flavored Italian liqueur made from apricot kernels or bitter almonds', 'Amaretto', 'Lazzaroni and Disaronno are famous commercial producers.'],
    ['The traditional Moroccan conical clay cooking vessel and the slow-cooked stew prepared inside it', 'Tagine', 'The cone-shaped lid traps steam and returns condensed liquid to the pot.'],
    ['The Chinese Sichuan culinary seasoning that produces a tingling, numbing sensation (ma la)', 'Sichuan Peppercorn (Huajiao)', 'Produces paresthesia due to the chemical hydroxy-alpha-sanshool.'],
    ['The clarified butter originating in ancient India, simmered until milk solids caramelize and are strained away', 'Ghee', 'Has a very high smoke point of 250 °C (482 °F).'],
    ['The French term used in culinary arts meaning "everything in its place", referring to preparing and organizing ingredients', 'Mise en place', 'Essential operational principle in professional kitchens.'],
    ['The traditional Greek casserole made of layered baked eggplant, spiced minced lamb or beef, and bechamel sauce', 'Moussaka', 'The modern three-layer version was formalized by chef Nikolaos Tselementes in 1910.'],
    ['The type of ham from Spain produced from free-range Iberian pigs fed exclusively on acorns (bellota)', 'Jamon Iberico de Bellota', 'Cured for 24 to 48 months in mountain air.'],
    ['The process of soaking meat in a seasoned acidic liquid to tenderize and flavor it before cooking', 'Marination', 'Acids like vinegar or citrus break down surface proteins.'],
    ['The Indonesian spicy meat dish slow-cooked in coconut milk and spices until all liquid evaporates', 'Rendang (Beef Rendang)', 'Originated with the Minangkabau people of West Sumatra.']
  ];

  const d4 = [
    ['The rare edible white truffle species harvested almost exclusively around the Piedmontese town of Alba', 'Tuber magnatum (Tartufo bianco d\'Alba)', 'Can sell for over $4,000 per kilogram at international auctions.'],
    ['The French dessert consisting of a rich custard base topped with a layer of hardened caramelized sugar', 'Creme Brulee', 'First appeared in French chef Francois Massialot\'s 1691 cookbook.'],
    ['The traditional Japanese technique of bleeding fish by severing major arteries and destroying the spinal cord', 'Ikejime', 'Prevents lactic acid accumulation, preserving flesh quality and flavor.'],
    ['The Italian culinary technique of finishing pasta by tossing it vigorously in its cooking water and oil/butter', 'Mantecatura', 'Emulsifies starches from pasta water into a velvety sauce.'],
    ['The chemical compound responsible for the intensely bitter taste in tonic water and historically used against malaria', 'Quinine', 'Extracted from the bark of the South American cinchona tree.'],
    ['The fermented beverage made from honey, water, and yeast, considered one of the oldest alcoholic drinks', 'Mead (Honey wine)', 'Known to Norse, Greek, and ancient Chinese cultures.'],
    ['The pungent dried rhizome related to ginger that is essential to yellow curries and contains curcumin', 'Turmeric (Curcuma longa)', 'Used in Ayurvedic medicine and cooking for millennia.'],
    ['The classic French method of deglazing pan drippings with wine, stock, or cream to form a sauce', 'Deglazing (Deglacer)', 'Dissolves the caramelized fond stuck to the bottom of the pan.'],
    ['The complex Japanese multi-course seasonal dining tradition originating from banquet and tea ceremonies', 'Kaiseki (Kaiseki-ryori)', 'Emphasizes seasonal ingredients, meticulous plating, and balance.'],
    ['The traditional Jewish ceremonial bread braided and glazed with egg wash before baking, eaten on Shabbat', 'Challah', 'Braided strands symbolize love, peace, and justice.'],
    ['The process in chocolate manufacturing where liquid chocolate is continuously stirred, sheared, and aerated for hours', 'Conching', 'Invented by Rodolphe Lindt in 1879, giving chocolate its silky texture.'],
    ['The North African and Middle Eastern spice blend typically containing thyme, toasted sesame seeds, and dried sumac', 'Za\'atar', 'Commonly eaten with flatbread and olive oil.'],
    ['The culinary classification of offal meats such as liver, kidneys, sweetbreads, and tripe', 'Variety meats (Offal / Abats)', 'Sweetbreads refer to the thymus and pancreas glands.'],
    ['The traditional Mexican cooking technique where dried chiles, onions, and tomatoes are charred on a dry griddle', 'Tatemar (Tatemado)', 'Cooked on a traditional clay or cast iron "comal".'],
    ['The Italian term for pasta cooked so that it is still firm to the bite, not overly soft', 'Al dente', 'Translates literally to "to the tooth".'],
    ['The traditional French duck or goose dish where meat is salted and slow-cooked in its own rendered fat', 'Confit (Confit de canard)', 'Ancient preservation method developed in Gascony.'],
    ['The Spanish fortified wine produced in the "Sherry Triangle" of Andalusia aged under a layer of yeast called "flor"', 'Fino Sherry (Jerez)', 'Aged using the fractional blending solera system.'],
    ['The delicate French pastry composed of three layers of puff pastry alternating with two layers of pastry cream', 'Mille-feuille (Napoleon)', 'Translates to "thousand sheets".'],
    ['The fermented Korean chili paste made from chili powder, glutinous rice, fermented soybeans, and salt', 'Gochujang', 'Aged in large outdoor earthenware jars (jangdok).'],
    ['The culinary process of gently heating egg yolks and cream or liquid without curdling, used in custard', 'Tempering', 'Gradually whisking hot liquid into eggs prevents scrambling.']
  ];

  const d5 = [
    ['The toxic organ in the Japanese fugu (pufferfish) that contains lethal tetrodotoxin, requiring a specialized license to prepare', 'Liver and Ovaries', 'Tetrodotoxin is 1,200 times deadlier than cyanide, with no known antidote.'],
    ['The ancient Roman fermented fish gut condiment that was ubiquitous across the empire and stored in amphorae', 'Garum (Liquamen)', 'Produced by fermenting fish entrails with salt in the Mediterranean sun for months.'],
    ['The specific strain of filamentous fungus (mold) used to ferment soybeans and rice in making soy sauce, miso, and sake', 'Aspergillus oryzae (Koji mold)', 'Designated as the "national fungus" (kokkin) of Japan in 2006.'],
    ['The Italian culinary technique of cooking food enclosed inside a pig\'s bladder, famous in Paul Bocuse\'s poularde', 'En vessie (Cuisiner en vessie)', 'Poularde de Bresse en vessie is a legendary French haute cuisine triumph.'],
    ['The traditional Sardinian sheep\'s milk cheese that contains live insect larvae (cheese skipper flies)', 'Casu marzu', 'Banned commercially by the EU on health and sanitary grounds.'],
    ['The scientific term for the volatile sulfur compounds that cause human eyes to tear up when slicing onions', 'Syn-propanethial-S-oxide (Lachrymatory factor)', 'Produced when alliinase enzymes react with amino acid sulfoxides.'],
    ['The traditional French charcuterie terrine made from a pig\'s head that has been boiled, boned, seasoned, and set in gelatin', 'Head cheese (Fromage de tete)', 'Contains no dairy cheese despite the name.'],
    ['The specific sub-region of Burgundy renowned for the most expensive Pinot Noir vineyard in the world (under 2 hectares)', 'Romanee-Conti (Cote de Nuits)', 'Domaine de la Romanee-Conti produces fewer than 6,000 bottles per year.'],
    ['The culinary preservation method involving fermentation by lactic acid bacteria in salt brine without oxygen, as in sauerkraut', 'Lacto-fermentation', 'Lactobacillus converts starches and sugars into lactic acid.'],
    ['The culinary thickener made from seaweed extract composed of agarose and agaropectin, melting at 85 °C', 'Agar-agar (Kanten)', 'First discovered in Japan in 1658 by Mino Tarozaemon.'],
    ['The specific anatomical gland harvested from sturgeon to produce high-grade Beluga caviar', 'Unfertilized fish roe (Ovaries / Egg masses)', 'Huso huso sturgeon native to the Caspian and Black Sea basins.'],
    ['The traditional French dessert consisting of a tall cone of choux pastry balls bound with caramel and spun sugar', 'Croquembouche', 'Created by legendary French chef Marie-Antoine Careme for weddings.'],
    ['The ancient Mesoamerican process of soaking and cooking dried corn in an alkaline solution (lime water)', 'Nixtamalization', 'Unlocks bioavailable niacin (vitamin B3) and prevents pellagra.'],
    ['The chemical compound responsible for the characteristic pungent smell of white truffles (bis(methylthio)methane)', '2,4-Dithiapentane', 'Synthetic aroma compound used in almost all commercial "truffle oils".'],
    ['The Italian classification for balsamic vinegar that must be aged a minimum of 12 or 25 years in wooden battery barrels', 'Aceto Balsamico Tradizionale di Modena (DOP)', 'Made exclusively from boiled sweet Trebbiano and Lambrusco grape must.'],
    ['The Austrian dessert specialty from Salzburg composed of sweet, baked quenelles of egg white representing snowy hills', 'Salzburger Nockerl', 'Symbolize the three mountains surrounding Salzburg: Monchsberg, Kapuzinerberg, and Gaisberg.'],
    ['The specific chemical reaction in chocolate manufacturing responsible for the glossy shine, snap, and high melting point of cocoa butter Polymorph V (Form V)', 'Tempering (Beta crystal crystallization)', 'Form V crystals melt at 34 °C (body temperature).'],
    ['The Swedish traditional fermented Baltic herring canned and notorious for its overwhelming, rotten sulfuric odor', 'Surstromming', 'Fermented with Haloanaerobium bacteria; cans often bulge during storage.'],
    ['The French term for clarified stock combined with gelatin that cools into a savory, transparent jelly', 'Aspic', 'Derived from culinary stocks rich in natural collagen.'],
    ['The traditional Mexican drink made from fermented sap of the maguey (agave) plant, viscous and slightly alcoholic', 'Pulque (Octli)', 'Consumed in Central Mexico for over a thousand years before Spanish distillation of mezcal.']
  ];

  return buildCategory('food', 'Food & World Cuisine', { d1, d2, d3, d4, d5 });
}

const foodCategory = getFood();
module.exports = foodCategory;
module.exports.getFood = getFood;
