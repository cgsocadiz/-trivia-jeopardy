const { buildCategory } = require('./builder');

function getAnimals() {
  const d1 = [
    ['The largest animal on planet Earth, living in the world\'s oceans', 'Blue Whale (Balaenoptera musculus)', 'Can weigh up to 200 tons and measure 30 meters in length.'],
    ['The tallest living terrestrial animal, native to Africa', 'Giraffe', 'A giraffe\'s neck can measure up to 2.4 meters (8 feet) long.'],
    ['Fastest land mammal on Earth, capable of speeds over 100 km/h (60 mph)', 'Cheetah (Acinonyx jubatus)', 'Can accelerate from 0 to 60 mph in under 3 seconds.'],
    ['Flightless bird native to Antarctica known for its tuxedo-like plumage', 'Penguin (Emperor Penguin)', 'Emperor penguins breed during the harsh Antarctic winter.'],
    ['The only flying mammal capable of true, sustained flight', 'Bat', 'Make up about 20% of all classified mammal species worldwide.'],
    ['Black-and-white bear native to south-central China that eats almost exclusively bamboo', 'Giant Panda', 'Consumes between 20 and 40 pounds of bamboo every day.'],
    ['The largest species of big cat in the world, recognizable by its orange coat with dark vertical stripes', 'Tiger (Panthera tigris)', 'Native to Asia, from the Siberian taiga to tropical forests.'],
    ['Semi-aquatic egg-laying mammal native to eastern Australia with a duck-like bill and beaver-like tail', 'Platypus', 'Along with echidnas, one of the only five living monotremes.'],
    ['Arachnid with eight legs, multiple eyes, and the ability to spin silk webs', 'Spider', 'Found on every continent except Antarctica.'],
    ['The largest living species of reptile, capable of living in brackish marine waters', 'Saltwater Crocodile (Crocodylus porosus)', 'Can reach lengths of over 6 meters and weigh over 1,000 kg.'],
    ['Flightless Australian bird that is the second largest living bird by height after the ostrich', 'Emu', 'Endemic to mainland Australia.'],
    ['The largest bird in the world, capable of running over 40 mph and laying huge eggs', 'Ostrich', 'Native to Africa, their eyes are larger than their brains.'],
    ['Marine mammal known for its playful nature, high intelligence, and echolocation clicks', 'Dolphin (Bottlenose Dolphin)', 'Can communicate using signature whistles.'],
    ['Venomous snake that expands its neck into a hood when threatened', 'Cobra (King Cobra)', 'The King Cobra is the world\'s longest venomous snake.'],
    ['Marsupial native to Australia that hops on powerful hind legs and carries young in a pouch', 'Kangaroo (Red Kangaroo)', 'A baby kangaroo is called a joey.'],
    ['Insect known for producing honey and beeswax, living in complex hierarchical hives', 'Honey Bee (Apis mellifera)', 'Performs the famous "waggle dance" to communicate floral food sources.'],
    ['The animal known as the "King of the Jungle", living in social prides', 'Lion (Panthera leo)', 'Females (lionesses) do the vast majority of pride hunting.'],
    ['Large marine mammal with two prominent tusks and thick blubber living in the Arctic Circle', 'Walrus', 'Tusks are used for pulling themselves onto ice and defense.'],
    ['Canine species that was domesticated thousands of years ago to become "man\'s best friend"', 'Dog (Canis familiaris)', 'Descended from an extinct wolf ancestor.'],
    ['Slow-moving tree-dwelling mammal from Central and South America known for sleeping up to 20 hours a day', 'Sloth', 'Algae grows in their specialized fur, providing camouflage.']
  ];

  const d2 = [
    ['The fastest animal in the animal kingdom, capable of diving speeds exceeding 320 km/h (200 mph)', 'Peregrine Falcon (Falco peregrinus)', 'Performs a high-speed hunting dive known as a stoop.'],
    ['The only species of bear found naturally in South America', 'Spectacled Bear (Andean Bear)', 'Has yellowish rings around its eyes resembling eyeglasses.'],
    ['The venomous jellyfish whose sting can be lethal to humans in coastal northern Australian waters', 'Box Jellyfish (Chironex fleckeri)', 'One of the most marine venomous creatures on Earth.'],
    ['The largest living species of lizard, native to several Indonesian islands', 'Komodo Dragon (Varanus komodoensis)', 'Can grow up to 3 meters in length and weigh over 70 kg.'],
    ['The marine cephalopod known for eight suction-cup arms, three hearts, and blue copper-based blood', 'Octopus', 'Their blood uses hemocyanin rather than hemoglobin to carry oxygen.'],
    ['The nocturnal lemur of Madagascar with a long, thin middle finger used to tap on wood for grubs', 'Aye-aye (Daubentonia madagascariensis)', 'The world\'s largest nocturnal primate.'],
    ['The heavy-armored mammal covered in large, protective keratin scales that curls into a ball when attacked', 'Pangolin (Scaly Anteater)', 'The most illegally trafficked wild mammal in the world.'],
    ['The mammal with the longest migration of any mammal, traveling up to 12,000 miles round-trip annually', 'Gray Whale (or Humpback Whale)', 'Migrates between Arctic feeding grounds and Mexican breeding lagoons.'],
    ['The flightless parrot native to New Zealand that is nocturnal, heavy, and critically endangered', 'Kakapo (Owl Parrot)', 'The world\'s heaviest parrot and the only flightless lek-breeding parrot.'],
    ['The group of mammals that lay eggs instead of giving birth to live young', 'Monotremes', 'Consists solely of the platypus and four species of echidna.'],
    ['The apex marine predator that is actually the largest member of the oceanic dolphin family (Delphinidae)', 'Orca (Killer Whale, Orcinus orca)', 'Possesses distinct matrilineal pod cultures and vocal dialects.'],
    ['The chameleon\'s ability to change skin color is controlled by specialized cells called what', 'Chromatophores (or Iridophores)', 'Reflect light via nanoscopic guanine nanocrystals.'],
    ['The largest living rodent in the world, native to the savannas and wetlands of South America', 'Capybara (Hydrochoerus hydrochaeris)', 'Highly social, living in groups of up to 100 individuals.'],
    ['The bird famous for building intricate, brightly decorated architectural structures to attract mates', 'Bowerbird', 'Males decorate bowers with flowers, shells, and colored plastic.'],
    ['The term for an animal that is active primarily during twilight (dawn and dusk)', 'Crepuscular', 'Contrasted with diurnal (day) and nocturnal (night).'],
    ['The horn of a rhinoceros is made primarily of this structural protein, identical to human hair and nails', 'Keratin', 'Rhinoceros horns lack a bony core unlike true cattle horns.'],
    ['What spiny egg-laying mammal native to Australia and New Guinea belongs to the order Monotremata alongside the platypus?', 'Echidna (Spiny Anteater)', 'Short-beaked and long-beaked echidnas are the only living monotremes besides the platypus.'],
    ['The deep-sea fish with bioluminescent photophore lures dangling from their heads to attract prey', 'Anglerfish', 'Females are drastically larger than parasitic dwarf males.'],
    ['The only species of bird known to be capable of flying backward and upside down', 'Hummingbird', 'Their wings rotate in a figure-eight pattern at up to 80 beats per second.'],
    ['The suborder of primates that includes lemurs, lorises, and galagos, characterized by wet noses', 'Strepsirrhini (Wet-nosed primates)', 'Distinguished from Haplorhini (dry-nosed primates, including monkeys and apes).']
  ];

  const d3 = [
    ['The microscopic animal capable of surviving the vacuum of space, extreme radiation, and boiling temperatures', 'Tardigrade (Water Bear)', 'Can enter anhydrobiosis, a cryptobiotic state where metabolism halts.'],
    ['The extinct flightless bird endemic to the island of Mauritius that went extinct in the 17th century', 'Dodo (Raphus cucullatus)', 'A relative of pigeons that had no natural mammalian predators.'],
    ['The venomous gastropod mollusk whose geographic cone shell fires a harpoon containing lethal conotoxins', 'Cone Snail (Conus geographus)', 'Its venom contains hundreds of peptide toxins with analgesic properties.'],
    ['The collective term for the bioluminescent glow produced by living organisms through luciferin oxidation', 'Bioluminescence', 'Catalyzed by the enzyme luciferase.'],
    ['The African mammal nicknamed the "Forest Giraffe", with zebra-like striped legs, native to the Congo rainforest', 'Okapi (Okapia johnstoni)', 'The only living relative of the giraffe.'],
    ['The unique sensory organ on the roof of a reptile\'s mouth used to detect moisture-borne scent particles', 'Jacobson\'s Organ (Vomeronasal Organ)', 'Snakes deliver scent molecules to it using their forked tongues.'],
    ['The world\'s most venomous spider whose venom causes priapism, native to South America', 'Brazilian Wandering Spider (Phoneutria)', 'Often referred to as the "banana spider".'],
    ['The species of jellyfish capable of biologically reverting its cells back to a juvenile polyp state, deemed "immortal"', 'Turritopsis dohrnii (The Immortal Jellyfish)', 'Undergoes cellular transdifferentiation when stressed or aged.'],
    ['The order of placental mammals that includes elephants, represented today by only three living species', 'Proboscidea', 'Includes the African Bush Elephant, African Forest Elephant, and Asian Elephant.'],
    ['The predatory deep-sea squid possessing the largest eyes in the animal kingdom (up to 30 cm / 12 inches across)', 'Colossal Squid (Mesonychoteuthis hamiltoni)', 'Armed with sharp swivel hooks on its tentacle clubs.'],
    ['The North American marsupial famous for entering an involuntary catatonic state ("playing dead") when threatened', 'Virginia Opossum (Didelphis virginiana)', 'The only marsupial found naturally north of Mexico.'],
    ['The biological mechanism where bats, dolphins, and shrews emit sound pulses to map their surroundings', 'Echolocation (Biosonar)', 'Allows navigation and prey capture in complete darkness.'],
    ['The flightless rail bird endemic to Inaccessible Island in the South Atlantic, the smallest living flightless bird', 'Inaccessible Island Rail (Atlantisia rogersi)', 'Weighs only around 35 to 49 grams.'],
    ['The specialized layer of reflective tissue directly behind the retina in nocturnal animals that causes night-shine', 'Tapetum Lucidum', 'Improves night vision by reflecting light back through photoreceptors.'],
    ['The mammal with the densest fur in the animal kingdom, possessing up to one million hairs per square inch', 'Sea Otter (Enhydra lutris)', 'Relies entirely on fur for insulation rather than blubber.'],
    ['The ancient marine lineage of arthropods possessing blue copper-based blood harvested for pharmaceutical endotoxin testing', 'Horseshoe Crab (Limulidae)', 'Their blood contains Limulus Amebocyte Lysate (LAL).'],
    ['The specialized respiratory organ in terrestrial arthropods like spiders composed of stacked plate-like lamellae', 'Book Lungs', 'Resemble the folded pages of a closed book.'],
    ['The only species of bird that has nostrils located at the very tip of its long bill to sniff out earthworms', 'Kiwi', 'National bird of New Zealand.'],
    ['The social structure in naked mole-rats and certain bees where only a single queen reproduces while non-breeders work', 'Eusociality', 'Extremely rare in mammals, documented in only two rodent species.'],
    ['The largest living amphibian in the world, which can grow to nearly six feet in length in cold mountain streams', 'South China Giant Salamander (Andrias sligoi)', 'Can exceed 1.8 meters in length and live for decades.']
  ];

  const d4 = [
    ['The extinct carnivorous marsupial native to Australia and Tasmania nicknamed the "Tasmanian Tiger"', 'Thylacine (Thylacinus cynocephalus)', 'The last known specimen, named Benjamin, died at Hobart Zoo in 1936.'],
    ['The sea slug that steals intact stinging nematocysts from Portuguese man o\' war to use for its own defense', 'Blue Dragon (Glaucus atlanticus)', 'Floats upside down on the surface tension of oceanic waters.'],
    ['The unique venomous primate endemic to Southeast Asia with brachial glands on its inner elbows', 'Slow Loris (Nycticebus)', 'Licks its brachial gland to coat its teeth with secondary toxins.'],
    ['The sensory pores along a shark\'s snout capable of detecting minute electric fields produced by living muscle contractions', 'Ampullae of Lorenzini', 'Sensitive to electric gradients as small as 5 nanovolts per centimeter.'],
    ['The ant species that engages in "fungus farming", cultivating mutualistic basidiomycete fungi inside underground chambers', 'Leafcutter Ants (Atta and Acromyrmex)', 'The second most complex social systems on Earth after humans.'],
    ['The rare marine mammal found in coastal Arctic waters with a single long spiraled ivory tusk in males', 'Narwhal (Monodon monoceros)', 'The tusk is actually an elongated, sensory-rich left canine tooth.'],
    ['The small South American frog whose skin secretions contain batrachotoxin, historically used on blowgun darts', 'Golden Poison Frog (Phyllobates terribilis)', 'A single frog possesses enough toxin to kill ten adult humans.'],
    ['The specific type of cell in cephalopods that contains reflective stacks of purine crystals allowing iridescence', 'Iridophores', 'Work alongside pigmentary chromatophores and light-scattering leucophores.'],
    ['The predatory deep-sea fish known for producing deep red bioluminescence that other deep-sea fish cannot see', 'Stoplight Loosejaw (Malacosteus niger)', 'Acts as a private sniper beam in the pitch-black abyss.'],
    ['The reproductive adaptation in kangaroos and sea otters where embryo development is temporarily paused', 'Embryonic Diapause', 'Allows mothers to delay birth until favorable ecological conditions.'],
    ['The flightless bird native to Mauritius and Madagascar related to the dodo that was hunted to extinction around 1700', 'Rodrigues Solitaire (Pezophaps solitaria)', 'Possessed prominent bony knobs on its carpal bones used in territorial combat.'],
    ['The marine gastropod that incorporates viable chloroplasts from eaten algae into its own tissues (kleptoplasty)', 'Eastern Emerald Elysia (Elysia chlorotica)', 'Can survive on photosynthesis alone for months.'],
    ['The deep-sea shark species that holds the record for the longest known lifespan of any vertebrate (up to 400 years)', 'Greenland Shark (Somniosus microcephalus)', 'Ages verified by radiocarbon dating eye lens crystallin proteins.'],
    ['The avian adaptation where birds regurgitate food rich in crop milk to feed nestlings (seen in pigeons and flamingos)', 'Crop Milk (Pigeon\'s milk)', 'Induced by the hormone prolactin in both male and female parents.'],
    ['The extinct bivalve mollusk family of the Mesozoic that formed prominent reef frameworks alongside coral', 'Rudists (Rudist bivalves)', 'Went completely extinct during the Cretaceous-Paleogene extinction event.'],
    ['The only known vertebrate that undergoes clonal parthenogenesis with all-female diploid lineages', 'Whiptail Lizards (Aspidoscelis)', 'Engage in pseudocopulatory courtship to stimulate hormonal ovulation.'],
    ['The African bird that actively leads humans and honey badgers to wild bee hives using specific call signals', 'Greater Honeyguide (Indicator indicator)', 'Feeds on leftover beeswax, larvae, and bee pupae.'],
    ['The deep-sea siphonophore that can reach over 40 meters (130 feet) in length, rivaling blue whales', 'Praya dubia (Giant Siphonophore)', 'A colonial organism composed of specialized zoids.'],
    ['The organ in electric eels (Electrophorus) composed of thousands of stacked electrocytes producing up to 860 volts', 'Main Organ (and Hunter\'s and Sachs\' Organs)', 'Used for navigation, communication, and stunning prey.'],
    ['The parasitic barnacle that castrates crab hosts, takes over their nervous system, and forces them to care for barnacle eggs', 'Sacculina carcini', 'Evolves a root-like network (rhizoids) throughout the crab\'s body.']
  ];

  const d5 = [
    ['The primitive jawless fish that can excrete copious amounts of fibrous slime in micro-seconds when attacked by predators', 'Hagfish (Myxini)', 'Slime threads expand thousands of times in water to choke shark gills.'],
    ['The genus of fungus that infects carpenter ants and chemically hijacks their motor neurons to bite the underside of leaves', 'Ophiocordyceps unilateralis', 'Produces "zombie ants" that die in optimal fungal sporulation microclimates.'],
    ['The only known warm-blooded fish that maintains its entire body and core elevated above ambient sea water', 'Opah (Moonfish, Lampris guttatus)', 'Utilizes counter-current heat exchange in its gill rete mirabile.'],
    ['The deep-sea crustacean with compound eyes that have up to 16 color receptive cones and can see circularly polarized light', 'Mantis Shrimp (Stomatopoda)', 'Their smash strikes accelerate faster than a .22 caliber bullet.'],
    ['The unique venomous rodent native to East Africa that steals cardenolide cardiac poisons from the poison-arrow tree', 'African Crested Rat (Lophiomys imhausi)', 'Chews Acokanthera schimperi bark and slathers it into specialized porous hairs.'],
    ['The genus of marine anglerfish whose dwarf males permanently fuse their tissues into the female bloodstream as obligate parasites', 'Ceratias (Deep-Sea Anglerfish)', 'Male dissolves his own digestive tract and eyes, becoming a sperm-producing organ.'],
    ['The extinct sea cow discovered in 1741 in the Commander Islands that was hunted to global extinction within just 27 years', 'Steller\'s Sea Cow (Hydrodamalis gigas)', 'Measured up to 9 meters in length, feeding entirely on kelp canopies.'],
    ['The unique auditory organ in insects like crickets and grasshoppers located on their front legs (tibiae)', 'Tympanal Organ', 'Functions as an ear drum to detect ultrasound bat echolocation.'],
    ['The genus of desert beetle in the Namib Desert that harvests drinking water from morning fog using hydrophobic and hydrophilic bumps', 'Stenocara gracilipes (Namib Desert Beetle)', 'Bumps condense atmospheric fog droplets that roll down its tilted back into its mouth.'],
    ['The critically endangered cetacean endemic to the northern Gulf of California, the smallest cetacean in the world', 'Vaquita (Phocoena sinus)', 'Fewer than 10 individuals are estimated to survive in the wild due to gillnets.'],
    ['The biological structure in venomous gastropods composed of chitin that operates like an internal disposable syringe', 'Toxoglossan Radula', 'Harpoon-like teeth are replaced continuously throughout life.'],
    ['The ancient jawless armor-plated prehistoric fish of the Paleozoic era that lacked paired fins and jaws', 'Ostracoderms', 'Among the earliest fossilized vertebrates known.'],
    ['The unique species of ant that builds living bridges, chains, and bivouac nests out of their own interlocking bodies', 'Army Ants (Eciton burchellii)', 'Claw their legs together to form architectural structures for millions.'],
    ['The deep-sea bioluminescent fish with yellow fluorescent eye filters that act as spectral contrast filters against counter-illumination', 'Malacosteid dragonfish', 'Can detect prey trying to conceal their silhouettes with bioluminescent belly photophores.'],
    ['The small cnidarian that undergoes reversible senescence by transforming its medusa body into a cyst-like stolon', 'Turritopsis nutricula (Immortal Jellyfish)', 'Can undergo this reversal indefinitely under nutritional or mechanical stress.'],
    ['The rare placental mammal from Madagascar whose specialized scent glands on its webbed feet mark underground tunneling routes', 'Web-footed Tenrec (Limnogale mergulus)', 'Endemic to clear, fast-flowing mountain streams in eastern Madagascar.'],
    ['The only known bird species that secretes poisonous batrachotoxins in its feathers and skin, native to New Guinea', 'Hooded Pitohui (Pitohui dichrous)', 'Acquires toxicity from consuming Choresine toxic beetles.'],
    ['The extinct Pleistocene apex predator of Australia, the largest terrestrial lizard known to have existed (up to 7 meters long)', 'Megalania (Varanus priscus)', 'Coexisted with early Indigenous Australians before disappearing 40,000 years ago.'],
    ['The bizarre deep-sea xenophyophore, among the largest single-celled organisms on Earth, measuring up to 20 cm across', 'Syringammina fragilissima', 'Constructs delicate branching agglutinated sediment tests in the deep benthic zone.'],
    ['The specialized structural organ in venomous pit vipers that detects infrared thermal radiation as small as 0.003 °C', 'Pit Organ (Loreal Pit)', 'Located between the eye and nostril on each side of the head.']
  ];

  return buildCategory('anim', 'Animals & Wildlife', { d1, d2, d3, d4, d5 });
}

const animalsCategory = getAnimals();
module.exports = animalsCategory;
module.exports.getAnimals = getAnimals;
