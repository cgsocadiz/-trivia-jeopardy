const { buildCategory } = require('./builder');

const d1 = [
  ['Chemical symbol for water', 'H2O', 'Composed of two hydrogen atoms and one oxygen atom.'],
  ['Planet closest to the Sun in our Solar System', 'Mercury', 'It has no atmosphere to retain heat, leading to extreme temperature swings.'],
  ['The hardest known natural mineral on Earth', 'Diamond', 'Ranked 10 on the Mohs hardness scale.'],
  ['The organ that pumps blood throughout the human body', 'Heart', 'It beats around 100,000 times per day.'],
  ['Gas that plants absorb from the atmosphere during photosynthesis', 'Carbon Dioxide (CO2)', 'Plants convert it into oxygen and glucose.'],
  ['The closest star to planet Earth', 'The Sun', 'It takes sunlight about 8 minutes and 20 seconds to reach Earth.'],
  ['Force that pulls objects toward the center of the Earth', 'Gravity', 'Formulated mathematically by Sir Isaac Newton.'],
  ['Part of the plant cell where photosynthesis occurs', 'Chloroplast', 'Contains green chlorophyll pigments.'],
  ['Boiling point of pure water at sea level in Celsius', '100 degrees Celsius', 'Equivalent to 212 degrees Fahrenheit.'],
  ['The process by which liquid water turns into water vapor', 'Evaporation', 'Key step in the global water cycle.'],
  ['Substance that makes plant leaves appear green', 'Chlorophyll', 'It absorbs blue and red wavelengths while reflecting green.'],
  ['Number of bones in the adult human body', '206', 'Infants are born with approximately 270 bones.'],
  ['Largest planet in our Solar System', 'Jupiter', 'Its mass is more than twice that of all other planets combined.'],
  ['The center of an atom, containing protons and neutrons', 'Nucleus', 'Discovered by Ernest Rutherford in 1911.'],
  ['Layer of Earth\'s atmosphere that protects life from harmful ultraviolet rays', 'Ozone Layer (Stratosphere)', 'Composed of triatomic oxygen (O3).'],
  ['Animal group that frogs, toads, and salamanders belong to', 'Amphibians', 'They can live both in water and on land.'],
  ['Chemical element with atomic number 1 and symbol H', 'Hydrogen', 'The most abundant element in the universe.'],
  ['The speed of light in a vacuum in kilometers per second (approximate)', '300,000 km/s (299,792 km/s)', 'Light can circle the Earth 7.5 times in one second.'],
  ['The primary gas found in Earth\'s atmosphere, making up about 78%', 'Nitrogen', 'Oxygen makes up approximately 21%.'],
  ['Instrument used to look at distant celestial objects in space', 'Telescope', 'First patented by Hans Lippershey in 1608.']
];

const d2 = [
  ['The powerhouse of the eukaryotic cell responsible for ATP production', 'Mitochondria', 'They have their own independent genome.'],
  ['Element with the chemical symbol Fe on the periodic table', 'Iron', 'From the Latin word "ferrum".'],
  ['Type of rock formed from the cooling and solidification of molten magma', 'Igneous Rock', 'Examples include basalt and granite.'],
  ['Unit of electrical resistance named after a German physicist', 'Ohm', 'Named after Georg Wilhelm Ohm.'],
  ['Human organ that produces insulin to regulate blood sugar levels', 'Pancreas', 'Contains specialized clusters of cells called Islets of Langerhans.'],
  ['The boundary around a black hole beyond which nothing can escape', 'Event Horizon', 'Once inside, the escape velocity exceeds the speed of light.'],
  ['Subatomic particle with a negative electric charge', 'Electron', 'Discovered by J.J. Thomson in 1897.'],
  ['The measure of disorder or randomness in a thermodynamic system', 'Entropy', 'Associated with the Second Law of Thermodynamics.'],
  ['Scale used to measure the acidity or basicity of an aqueous solution', 'pH Scale', 'Runs from 0 (very acidic) to 14 (very alkaline).'],
  ['The galaxy closest to the Milky Way in the Local Group', 'Andromeda Galaxy (M31)', 'It is roughly 2.5 million light-years from Earth.'],
  ['Blood cells responsible for fighting infection and immune defense', 'White Blood Cells (Leukocytes)', 'Produced inside bone marrow.'],
  ['Newton\'s first law of motion is also known by this name', 'Law of Inertia', 'An object at rest stays at rest unless acted upon by an external force.'],
  ['Chemical element named after the creator of the periodic table', 'Mendelevium (Md)', 'Named in honor of Dmitri Mendeleev.'],
  ['The largest organ of the human body by surface area and weight', 'Skin (Integumentary system)', 'An adult has about 2 square meters of skin.'],
  ['Form of energy possessed by an object due to its motion', 'Kinetic Energy', 'Calculated as 0.5 * mass * velocity squared.'],
  ['Wave type where particle displacement is perpendicular to wave propagation', 'Transverse Wave', 'Light and electromagnetic radiation are transverse waves.'],
  ['Chemical bond formed by the sharing of electron pairs between atoms', 'Covalent Bond', 'Contrasted with ionic bonds where electrons are transferred.'],
  ['The process of cell division that results in four genetically diverse gametes', 'Meiosis', 'Essential for sexual reproduction.'],
  ['Dense core left behind after a low-to-medium mass star exhausts its fuel', 'White Dwarf', 'Supported against gravitational collapse by electron degeneracy pressure.'],
  ['The study of fungi, including mushrooms, molds, and yeasts', 'Mycology', 'Fungi are genetically closer to animals than to plants.']
];

const d3 = [
  ['Fundamental constant representing the ratio of a photon\'s energy to its frequency', 'Planck\'s Constant (h)', 'Value is approximately 6.626 x 10^-34 Joule-seconds.'],
  ['The theoretical temperature at which all molecular motion ceases (0 Kelvin)', 'Absolute Zero', 'Equal to -273.15 degrees Celsius or -459.67 degrees Fahrenheit.'],
  ['The process where solid matter transitions directly into gas without passing through a liquid phase', 'Sublimation', 'Dry ice (solid carbon dioxide) sublimates at room temperature.'],
  ['The two elements that are liquid at standard room temperature and pressure', 'Mercury and Bromine', 'Mercury is a metal, bromine is a halogen.'],
  ['Scientific law stating that pressure and volume of a gas are inversely proportional at constant temperature', 'Boyle\'s Law', 'Discovered by Robert Boyle in 1662.'],
  ['Part of the human brain primarily responsible for balance, coordination, and motor control', 'Cerebellum', 'Latin for "little brain", located at the base of the skull.'],
  ['Subatomic particles that make up protons and neutrons', 'Quarks', 'Protons consist of two up quarks and one down quark.'],
  ['The theoretical framework attempting to reconcile quantum mechanics and general relativity using 1D vibrating filaments', 'String Theory', 'Proposes that fundamental particles are vibrating strings.'],
  ['Type of radioactive decay in which an unstable nucleus emits a helium-4 nucleus', 'Alpha Decay', 'Alpha particles can be stopped by a single sheet of paper.'],
  ['Enzyme in human saliva that initiates the chemical digestion of starches into sugars', 'Amylase (Ptyalin)', 'Breaks starches down into maltose and glucose.'],
  ['The brightest star in the night sky as seen from Earth', 'Sirius (The Dog Star)', 'Located in the constellation Canis Major, 8.6 light-years away.'],
  ['The effect where an observer detects a shift in frequency of a wave from a moving source', 'Doppler Effect', 'Explains the red-shift of distant receding galaxies.'],
  ['Blood type known as the universal red blood cell donor', 'O Negative (O-)', 'Lacks A, B, and Rh antigens on red blood cell membranes.'],
  ['The rare earth element with the highest magnetic strength used in strong permanent magnets', 'Neodymium (Nd)', 'Widely used in electric vehicle motors and hard drives.'],
  ['The geological epoch that began approximately 11,700 years ago after the last glacial period', 'Holocene', 'Coincides with human agrarian civilization.'],
  ['The region of space beyond Neptune containing tens of thousands of icy bodies and dwarf planets', 'Kuiper Belt', 'Pluto and Haumea reside in the Kuiper belt.'],
  ['The mathematical principle stating that certain pairs of physical properties cannot both be known with arbitrary precision', 'Heisenberg Uncertainty Principle', 'Position and momentum cannot be simultaneously measured precisely.'],
  ['The acid found naturally in the human stomach that aids in chemical digestion', 'Hydrochloric Acid (HCl)', 'Maintains stomach gastric juice at a pH of 1.5 to 3.5.'],
  ['Type of chemical reaction that releases thermal energy to its surroundings', 'Exothermic Reaction', 'Combustion is a classic example of an exothermic reaction.'],
  ['The only type of mammal capable of true, sustained powered flight', 'Bats (Chiroptera)', 'Flying squirrels and sugar gliders only glide.']
];

const d4 = [
  ['Fundamental subatomic particle discovered at CERN\'s Large Hadron Collider in 2012 that grants mass to other particles', 'Higgs Boson', 'Often popularized as the "God Particle".'],
  ['The hypothetical spherical cloud of predominantly icy planetesimals surrounding the Solar System up to 100,000 AU out', 'Oort Cloud', 'Believed to be the origin of long-period comets.'],
  ['The principle in physics that total electric charge, baryon number, and energy-momentum are always conserved', 'Conservation Laws', 'Derived mathematically from symmetries via Noether\'s Theorem.'],
  ['The neurotransmitter whose deficiency is the primary pathological hallmark of Parkinson\'s disease', 'Dopamine', 'Produced in the substantia nigra of the brain.'],
  ['The process by which organisms synthesize organic molecules using chemical energy instead of sunlight', 'Chemosynthesis', 'Common near deep-sea hydrothermal vents.'],
  ['The point in a binary star system where gravitational forces equal centrifugal force, allowing mass transfer', 'Lagrange Point (or Roche Lobe)', 'Roche lobes define the tear-drop boundary of mass capture.'],
  ['The medical term for programmed cell death in multicellular organisms', 'Apoptosis', 'Crucial for tissue differentiation and eliminating damaged cells.'],
  ['The mineral with chemical formula FeS2, famously called "Fool\'s Gold"', 'Pyrite (Iron Pyrite)', 'Forms distinctive brass-yellow cubic crystals.'],
  ['Cosmological observation showing the universe\'s expansion rate is accelerating, attributed to this mysterious force', 'Dark Energy', 'Constitutes roughly 68% of the total energy density of the universe.'],
  ['The quantum mechanical phenomenon where particles pass through a potential barrier they classically lack energy to cross', 'Quantum Tunneling', 'Enables nuclear fusion in the core of the Sun.'],
  ['The second-most electronegative element on the Pauling scale after fluorine', 'Oxygen', 'Electronegativity value of 3.44 on the Pauling scale.'],
  ['The thick band of nerve fibers connecting the left and right cerebral hemispheres in human brains', 'Corpus Callosum', 'Contains more than 200 million axonal projections.'],
  ['The state of matter formed when bosons are cooled to temperatures very close to absolute zero', 'Bose-Einstein Condensate', 'First produced in a laboratory in 1995.'],
  ['The mathematical theorem in physics connecting continuous symmetries with physical conservation laws', 'Noether\'s Theorem', 'Formulated by German mathematician Emmy Noether in 1915.'],
  ['The temperature and pressure at which gas and liquid phases of a substance become indistinguishable', 'Critical Point', 'Produces a supercritical fluid with unique solvent properties.'],
  ['The cellular structure composed of 9 triplet microtubules that organizes mitotic spindle fibers', 'Centriole (Centrosome)', 'Plays a key role in eukaryotic cell division.'],
  ['The astronomical radius inside which a celestial body held together only by gravity will disintegrate due to tidal forces', 'Roche Limit', 'Saturn\'s rings lie predominantly within its Roche limit.'],
  ['The law in optics describing the angle of incidence and refraction through different media (n1 sin θ1 = n2 sin θ2)', 'Snell\'s Law', 'Named after Dutch astronomer Willebrord Snellius.'],
  ['The biological pigment family responsible for orange, yellow, and red color in carrots and autumn leaves', 'Carotenoids', 'Includes beta-carotene, lutein, and lycopene.'],
  ['The process where heavy atomic nuclei split into lighter nuclei, releasing immense energy', 'Nuclear Fission', 'Discovered in 1938 by Otto Hahn and Fritz Strassmann.']
];

const d5 = [
  ['The hypothetical time scale representing the shortest possible interval of time (approx. 5.39 x 10^-44 seconds)', 'Planck Time', 'The time light takes to travel one Planck length in vacuum.'],
  ['The non-coding repetitive nucleotide sequences capping the ends of eukaryotic chromosomes that shorten with each division', 'Telomeres', 'Discovered by Elizabeth Blackburn and Carol Greider.'],
  ['The subatomic particle of spin 1/2 predicted by Paul Dirac in 1928, discovered as the first antimatter particle in 1932', 'Positron (Antielectron)', 'Discovered in cosmic ray tracks by Carl Anderson.'],
  ['The point on a phase diagram where solid, liquid, and gas phases coexist in thermodynamic equilibrium', 'Triple Point', 'Water\'s triple point occurs at 0.01 °C and 611.65 Pascals.'],
  ['The theoretical upper mass limit of a non-rotating white dwarf star (approx. 1.4 solar masses)', 'Chandrasekhar Limit', 'Formulated by Indian-American astrophysicist Subrahmanyan Chandrasekhar.'],
  ['The equation in quantum mechanics describing how the quantum state of a physical system changes over time', 'Schrodinger Equation', 'Published by Erwin Schrodinger in 1926.'],
  ['The anatomical junction where the optic nerves cross in the human brain', 'Optic Chiasm', 'Allows visual fields from both eyes to project to contralateral hemispheres.'],
  ['The phenomenon in which an electrical current flows indefinitely without resistance in certain materials cooled to low temperatures', 'Superconductivity', 'Discovered by Heike Kamerlingh Onnes in 1911.'],
  ['The biological cycle in cellular respiration where acetyl-CoA is oxidized to CO2 and high-energy electron carriers', 'Krebs Cycle (Citric Acid Cycle)', 'Named after Hans Adolf Krebs, who elucidated it in 1937.'],
  ['The theoretical upper limit on the mass of a neutron star beyond which it must collapse into a black hole', 'Tolman-Oppenheimer-Volkoff Limit', 'Roughly 2.17 solar masses based on current nuclear equations of state.'],
  ['The effect where an electric current passing through two different conductors causes heat to be absorbed or emitted at the junction', 'Peltier Effect', 'Used in solid-state thermoelectric coolers.'],
  ['The geological unconformity named by John Wesley Powell in the Grand Canyon missing over a billion years of rock records', 'The Great Unconformity', 'Represents a gap between Precambrian basement and Cambrian sandstone.'],
  ['The only amino acid among the standard 20 that is not optically active (achiral)', 'Glycine', 'Its side chain consists solely of a single hydrogen atom.'],
  ['The paradox in quantum mechanics involving two entangled particles that Einstein termed "spooky action at a distance"', 'EPR Paradox (Einstein-Podolsky-Rosen)', 'Resolved experimentally in favor of quantum non-locality by Alain Aspect.'],
  ['The cell organelle responsible for sorting, modifying, and packaging proteins synthesized in the endoplasmic reticulum', 'Golgi Apparatus (Golgi Complex)', 'Identified in 1898 by Italian physician Camillo Golgi.'],
  ['The ratio of inertial forces to viscous forces in fluid mechanics used to predict laminar vs turbulent flow', 'Reynolds Number (Re)', 'Named after Osborne Reynolds.'],
  ['The chemical element with the highest boiling point of all elements on the periodic table (approx. 5,555 °C)', 'Tungsten (Wolfram, W)', 'Has the symbol W and atomic number 74.'],
  ['The enzyme that catalyzes the primary carbon-fixing reaction of the Calvin cycle in photosynthetic organisms', 'RuBisCO (Ribulose-1,5-bisphosphate carboxylase-oxygenase)', 'The most abundant enzyme on Earth.'],
  ['The cosmological radiation relic from roughly 380,000 years after the Big Bang at an ambient temperature of 2.73 Kelvin', 'Cosmic Microwave Background (CMB)', 'Discovered accidentally in 1965 by Arno Penzias and Robert Wilson.'],
  ['The theoretical radiation emitted by black holes due to quantum vacuum fluctuations near the event horizon', 'Hawking Radiation', 'Proposed by theoretical physicist Stephen Hawking in 1974.']
];

module.exports = buildCategory('sci', 'Science & Wonders', { d1, d2, d3, d4, d5 });
