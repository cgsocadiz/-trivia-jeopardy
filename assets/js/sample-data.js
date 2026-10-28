/**
 * Default sample trivia dataset with 10 categories and 1,000 curated questions (100 per category, 20 per difficulty tier).
 * Used when questions.json fails to fetch (e.g. file:// protocol or offline).
 */
window.DEFAULT_SAMPLE_QUESTIONS = {
  "schemaVersion": 1,
  "adminAuth": {
    "algorithm": "PBKDF2",
    "hashAlgorithm": "SHA-256",
    "iterations": 600000,
    "salt": "a47b23bc46432463091b2f81681aedd2",
    "passwordHash": "a919f60db3851410663863c14c3e5e8afaf2d05d82bc090643f409c6b6a89780"
  },
  "game": {
    "id": "trivia-jeopardy-master",
    "title": "Shaamei",
    "settings": {
      "incorrectAnswerDeduction": false,
      "requireQuestionForm": false,
      "dailyDoubleEnabled": true,
      "finalJeopardyEnabled": true,
      "timerEnabled": true,
      "timerSeconds": 30,
      "soundEnabled": true
    },
    "rounds": [
      {
        "id": "round-1",
        "title": "Jeopardy Round",
        "multiplier": 1,
        "categories": [
          {
            "id": "cat-hist",
            "name": "World History & Empires",
            "clues": [
              {
                "id": "hist-d1-1",
                "points": 100,
                "difficulty": 1,
                "clue": "First President of the United States",
                "answer": "George Washington",
                "explanation": "He served from 1789 to 1797.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-2",
                "points": 100,
                "difficulty": 1,
                "clue": "Ancient Egyptian queen known for her relationship with Julius Caesar and Mark Antony",
                "answer": "Cleopatra",
                "explanation": "She was the last active ruler of the Ptolemaic Kingdom of Egypt.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-3",
                "points": 100,
                "difficulty": 1,
                "clue": "Year the Titanic sank in the North Atlantic Ocean",
                "answer": "1912",
                "explanation": "It sank on April 15, 1912 after hitting an iceberg.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-4",
                "points": 100,
                "difficulty": 1,
                "clue": "French military leader and emperor who was exiled to Saint Helena",
                "answer": "Napoleon Bonaparte",
                "explanation": "He died in exile in 1821.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-5",
                "points": 100,
                "difficulty": 1,
                "clue": "Wall that divided a major German city from 1961 to 1989",
                "answer": "Berlin Wall",
                "explanation": "Its fall symbolized the end of the Cold War.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-6",
                "points": 100,
                "difficulty": 1,
                "clue": "British passenger liner sunk by a German U-boat in 1915",
                "answer": "Lusitania",
                "explanation": "The sinking contributed to the US entering WWI.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-7",
                "points": 100,
                "difficulty": 1,
                "clue": "Ancient civilization that built the Colosseum in Rome",
                "answer": "The Romans (Roman Empire)",
                "explanation": "The Colosseum was completed under Emperor Titus in 80 AD.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-8",
                "points": 100,
                "difficulty": 1,
                "clue": "Famous speech delivered by Abraham Lincoln during the American Civil War in 1863",
                "answer": "Gettysburg Address",
                "explanation": "It began with \"Four score and seven years ago\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-9",
                "points": 100,
                "difficulty": 1,
                "clue": "Ancient trade route connecting China and the Mediterranean",
                "answer": "The Silk Road",
                "explanation": "It was established during the Han Dynasty of China.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-10",
                "points": 100,
                "difficulty": 1,
                "clue": "Country where the Renaissance cultural movement originated",
                "answer": "Italy",
                "explanation": "It began in 14th-century Florence.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-11",
                "points": 100,
                "difficulty": 1,
                "clue": "War fought between the North and South in the United States from 1861 to 1865",
                "answer": "American Civil War",
                "explanation": "Fought over states rights and the abolition of slavery.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-12",
                "points": 100,
                "difficulty": 1,
                "clue": "South African leader who fought against apartheid and became president in 1994",
                "answer": "Nelson Mandela",
                "explanation": "He spent 27 years in prison before leading the nation.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-13",
                "points": 100,
                "difficulty": 1,
                "clue": "Mesoamerican civilization famous for building step pyramids like Chichen Itza",
                "answer": "The Maya",
                "explanation": "Chichen Itza is located on the Yucatan Peninsula in Mexico.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-14",
                "points": 100,
                "difficulty": 1,
                "clue": "First man to set foot on the Moon in July 1969",
                "answer": "Neil Armstrong",
                "explanation": "He flew aboard Apollo 11 with Buzz Aldrin and Michael Collins.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-15",
                "points": 100,
                "difficulty": 1,
                "clue": "Document signed by King John of England in 1215 limiting royal power",
                "answer": "Magna Carta",
                "explanation": "It laid foundational principles for modern constitutional law.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-16",
                "points": 100,
                "difficulty": 1,
                "clue": "Leader of the Soviet Union during World War II",
                "answer": "Joseph Stalin",
                "explanation": "He ruled from the mid-1920s until his death in 1953.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-17",
                "points": 100,
                "difficulty": 1,
                "clue": "Ancient empire ruled by Alexander the Great",
                "answer": "Macedonian Empire (Macedon / Greece)",
                "explanation": "His empire stretched from Greece to northwestern India.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-18",
                "points": 100,
                "difficulty": 1,
                "clue": "Year World War II officially ended",
                "answer": "1945",
                "explanation": "Germany surrendered in May and Japan surrendered in August 1945.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-19",
                "points": 100,
                "difficulty": 1,
                "clue": "Japanese city that was the target of the first atomic bomb used in warfare",
                "answer": "Hiroshima",
                "explanation": "The bomb nicknamed \"Little Boy\" was dropped on August 6, 1945.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d1-20",
                "points": 100,
                "difficulty": 1,
                "clue": "King of England who famously had six wives",
                "answer": "Henry VIII",
                "explanation": "He established the Church of England after breaking from Rome.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-1",
                "points": 200,
                "difficulty": 2,
                "clue": "Famous battle of 1066 where William the Conqueror won the English crown",
                "answer": "Battle of Hastings",
                "explanation": "It resulted in Norman rule over England.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-2",
                "points": 200,
                "difficulty": 2,
                "clue": "Inca citadel in Peru built in the 15th century, brought to international attention in 1911",
                "answer": "Machu Picchu",
                "explanation": "It sits high in the Andes mountains.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-3",
                "points": 200,
                "difficulty": 2,
                "clue": "US policy announced in 1947 to contain Soviet geopolitical expansion during the Cold War",
                "answer": "Truman Doctrine",
                "explanation": "Announced by President Harry S. Truman.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-4",
                "points": 200,
                "difficulty": 2,
                "clue": "Ancient Greek city-state renowned for its fierce hoplite warriors and King Leonidas",
                "answer": "Sparta",
                "explanation": "Spartans fought against Persia at the Battle of Thermopylae.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-5",
                "points": 200,
                "difficulty": 2,
                "clue": "Treaty signed in 1919 that formally concluded World War I",
                "answer": "Treaty of Versailles",
                "explanation": "It imposed heavy reparations and territorial losses on Germany.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-6",
                "points": 200,
                "difficulty": 2,
                "clue": "The first Roman Emperor, formerly known as Octavian",
                "answer": "Augustus",
                "explanation": "He reigned from 27 BC until his death in AD 14.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-7",
                "points": 200,
                "difficulty": 2,
                "clue": "Leader of the Protestant Reformation who nailed his Ninety-five Theses to a church door in 1517",
                "answer": "Martin Luther",
                "explanation": "He posted them in Wittenberg, Germany.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-8",
                "points": 200,
                "difficulty": 2,
                "clue": "Ancient wonder of the world located in Babylon famous for lush terraced vegetation",
                "answer": "Hanging Gardens of Babylon",
                "explanation": "One of the Seven Wonders of the Ancient World.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-9",
                "points": 200,
                "difficulty": 2,
                "clue": "Russian imperial dynasty overthrown and executed during the 1917 Russian Revolution",
                "answer": "The Romanovs",
                "explanation": "Czar Nicholas II was the last reigning emperor.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-10",
                "points": 200,
                "difficulty": 2,
                "clue": "War fought from 1337 to 1453 between England and France",
                "answer": "Hundred Years War",
                "explanation": "It featured heroes like Joan of Arc and battles like Agincourt.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-11",
                "points": 200,
                "difficulty": 2,
                "clue": "Portuguese explorer who led the first expedition to circumnavigate the globe",
                "answer": "Ferdinand Magellan",
                "explanation": "He was killed in the Philippines, but his crew completed the voyage.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-12",
                "points": 200,
                "difficulty": 2,
                "clue": "Ottoman sultan who conquered Constantinople in 1453",
                "answer": "Mehmed II (Mehmed the Conqueror)",
                "explanation": "Constantinople was renamed Istanbul.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-13",
                "points": 200,
                "difficulty": 2,
                "clue": "First European explorer to reach India by sea around the Cape of Good Hope in 1498",
                "answer": "Vasco da Gama",
                "explanation": "His voyage opened direct sea trade with Asia.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-14",
                "points": 200,
                "difficulty": 2,
                "clue": "The legal code developed in ancient Babylon around 1754 BC",
                "answer": "Code of Hammurabi",
                "explanation": "Famous for the principle \"an eye for an eye\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-15",
                "points": 200,
                "difficulty": 2,
                "clue": "1803 land deal in which the United States purchased 828,000 square miles from France",
                "answer": "Louisiana Purchase",
                "explanation": "Negotiated by Thomas Jefferson for $15 million.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-16",
                "points": 200,
                "difficulty": 2,
                "clue": "Chinese dynasty that constructed the majority of the visible Great Wall of China today",
                "answer": "Ming Dynasty",
                "explanation": "The Ming built extensive brick and stone fortifications.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-17",
                "points": 200,
                "difficulty": 2,
                "clue": "Decisive battle in 1815 where Napoleon was defeated by British and Prussian forces",
                "answer": "Battle of Waterloo",
                "explanation": "Led by the Duke of Wellington and Gebhard von Blucher.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-18",
                "points": 200,
                "difficulty": 2,
                "clue": "Ancient Persian king who invaded Greece and fought at Thermopylae and Salamis",
                "answer": "Xerxes I",
                "explanation": "He ruled the Achaemenid Empire.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-19",
                "points": 200,
                "difficulty": 2,
                "clue": "Pandemic that swept across Europe and Asia in the mid-1300s killing millions",
                "answer": "The Black Death (Bubonic Plague)",
                "explanation": "It killed an estimated 30% to 60% of Europe's population.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d2-20",
                "points": 200,
                "difficulty": 2,
                "clue": "British Prime Minister who led the country through most of World War II",
                "answer": "Winston Churchill",
                "explanation": "Famous for his \"we shall fight on the beaches\" speech.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-1",
                "points": 300,
                "difficulty": 3,
                "clue": "Mongol ruler who founded the largest contiguous land empire in history",
                "answer": "Genghis Khan (Temujin)",
                "explanation": "He unified the nomadic tribes of Northeast Asia.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-2",
                "points": 300,
                "difficulty": 3,
                "clue": "Prussian chancellor who engineered the unification of Germany in 1871",
                "answer": "Otto von Bismarck",
                "explanation": "Known as the \"Iron Chancellor\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-3",
                "points": 300,
                "difficulty": 3,
                "clue": "Ancient Roman city destroyed and buried under volcanic ash by Mount Vesuvius in 79 AD",
                "answer": "Pompeii",
                "explanation": "Rediscovered in the 18th century remarkably preserved.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-4",
                "points": 300,
                "difficulty": 3,
                "clue": "The first woman to win a Nobel Prize and only person to win in two scientific fields",
                "answer": "Marie Curie",
                "explanation": "She won in Physics (1903) and Chemistry (1911).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-5",
                "points": 300,
                "difficulty": 3,
                "clue": "Battle in 490 BC where Athenians defeated the first Persian invasion, inspiring a running race",
                "answer": "Battle of Marathon",
                "explanation": "Pheidippides famously ran to Athens with news of victory.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-6",
                "points": 300,
                "difficulty": 3,
                "clue": "17th-century peace treaties that ended the Thirty Years War in Europe in 1648",
                "answer": "Peace of Westphalia",
                "explanation": "Established modern sovereign state principles.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-7",
                "points": 300,
                "difficulty": 3,
                "clue": "Carthaginian general who famously crossed the Alps with war elephants to attack Rome",
                "answer": "Hannibal Barca",
                "explanation": "Fought during the Second Punic War.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-8",
                "points": 300,
                "difficulty": 3,
                "clue": "Emperor who legalized Christianity in the Roman Empire with the Edict of Milan in 313 AD",
                "answer": "Constantine the Great",
                "explanation": "He also moved the imperial capital to Constantinople.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-9",
                "points": 300,
                "difficulty": 3,
                "clue": "Russian czar known as \"The Great\" who founded St. Petersburg and westernized Russia",
                "answer": "Peter the Great (Peter I)",
                "explanation": "He ruled from 1682 until 1725.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-10",
                "points": 300,
                "difficulty": 3,
                "clue": "Spanish conquistador who led the expedition that caused the fall of the Aztec Empire",
                "answer": "Hernan Cortes",
                "explanation": "He defeated Moctezuma II in 1521.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-11",
                "points": 300,
                "difficulty": 3,
                "clue": "English king who was executed in 1649 during the English Civil War",
                "answer": "Charles I",
                "explanation": "England briefly became a republic under Oliver Cromwell.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-12",
                "points": 300,
                "difficulty": 3,
                "clue": "Ancient library in Egypt considered one of the largest and most significant of the ancient world",
                "answer": "Library of Alexandria",
                "explanation": "Founded under the Ptolemaic dynasty in Egypt.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-13",
                "points": 300,
                "difficulty": 3,
                "clue": "1848 conflict between Mexico and the United States ended by the Treaty of Guadalupe Hidalgo",
                "answer": "Mexican-American War",
                "explanation": "The US acquired California, Nevada, Utah, and Arizona.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-14",
                "points": 300,
                "difficulty": 3,
                "clue": "French peasant girl who became a military heroine and saint during the Hundred Years War",
                "answer": "Joan of Arc",
                "explanation": "Burned at the stake in 1431 and canonized in 1920.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-15",
                "points": 300,
                "difficulty": 3,
                "clue": "1905 war in which Japan defeated a major European imperial power",
                "answer": "Russo-Japanese War",
                "explanation": "Ended by the Treaty of Portsmouth mediated by Theodore Roosevelt.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-16",
                "points": 300,
                "difficulty": 3,
                "clue": "Capital city of the Aztec Empire, built on an island in Lake Texcoco",
                "answer": "Tenochtitlan",
                "explanation": "Founded in 1325 and captured by Spanish forces in 1521.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-17",
                "points": 300,
                "difficulty": 3,
                "clue": "16th-century naval battle where a Holy League fleet defeated the Ottoman Empire in Greece",
                "answer": "Battle of Lepanto",
                "explanation": "Fought in October 1571.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-18",
                "points": 300,
                "difficulty": 3,
                "clue": "Famous 19th-century nurse known as \"The Lady with the Lamp\" during the Crimean War",
                "answer": "Florence Nightingale",
                "explanation": "She pioneered modern sanitation and nursing practices.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-19",
                "points": 300,
                "difficulty": 3,
                "clue": "Period of intense revolutionary violence in France from 1793 to 1794 led by Robespierre",
                "answer": "The Reign of Terror",
                "explanation": "Over 16,000 official death sentences by guillotine were carried out.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d3-20",
                "points": 300,
                "difficulty": 3,
                "clue": "The ancient civilization that developed cuneiform script in Mesopotamia",
                "answer": "The Sumerians",
                "explanation": "Cuneiform is one of the earliest systems of writing.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-1",
                "points": 400,
                "difficulty": 4,
                "clue": "Byzantine emperor known for his legal code and the construction of Hagia Sophia in 537 AD",
                "answer": "Justinian I (Justinian the Great)",
                "explanation": "His Corpus Juris Civilis became the basis for Western civil law.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-2",
                "points": 400,
                "difficulty": 4,
                "clue": "The naval battle in 1805 where Lord Nelson defeated the combined French and Spanish fleets",
                "answer": "Battle of Trafalgar",
                "explanation": "Nelson was mortally wounded during the battle.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-3",
                "points": 400,
                "difficulty": 4,
                "clue": "Treaty signed in 1494 dividing newly discovered lands between Spain and Portugal",
                "answer": "Treaty of Tordesillas",
                "explanation": "Mediated by Pope Alexander VI.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-4",
                "points": 400,
                "difficulty": 4,
                "clue": "Holy Roman Emperor who presided over the Diet of Worms in 1521",
                "answer": "Charles V",
                "explanation": "He ruled an empire on which the sun never set.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-5",
                "points": 400,
                "difficulty": 4,
                "clue": "Ancient battle in 331 BC where Alexander the Great decisively defeated Darius III of Persia",
                "answer": "Battle of Gaugamela",
                "explanation": "Led to the complete downfall of the Achaemenid Empire.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-6",
                "points": 400,
                "difficulty": 4,
                "clue": "1916 World War I battle in France that was one of the longest and deadliest in human history",
                "answer": "Battle of Verdun",
                "explanation": "Over 700,000 casualties occurred over 302 days.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-7",
                "points": 400,
                "difficulty": 4,
                "clue": "Chinese explorer who commanded seven treasure fleet voyages across the Indian Ocean in the 1400s",
                "answer": "Zheng He",
                "explanation": "His voyages took place between 1405 and 1433.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-8",
                "points": 400,
                "difficulty": 4,
                "clue": "The ninth tlatoani of Tenochtitlan who ruled during the initial Spanish conquest of Mexico",
                "answer": "Moctezuma II (Montezuma)",
                "explanation": "He ruled from 1502 to 1520.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-9",
                "points": 400,
                "difficulty": 4,
                "clue": "War of succession fought from 1701 to 1714 over who would inherit the Spanish crown",
                "answer": "War of the Spanish Succession",
                "explanation": "Concluded with the Peace of Utrecht.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-10",
                "points": 400,
                "difficulty": 4,
                "clue": "Ancient Anatolian empire that fought against Egypt at the Battle of Kadesh in 1274 BC",
                "answer": "The Hittites",
                "explanation": "Kadesh produced the earliest recorded peace treaty in history.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-11",
                "points": 400,
                "difficulty": 4,
                "clue": "Florentine political philosopher who wrote \"The Prince\" in 1513",
                "answer": "Niccolo Machiavelli",
                "explanation": "He explored realistic and pragmatic political leadership.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-12",
                "points": 400,
                "difficulty": 4,
                "clue": "1911 revolution in China that overthrew the Qing Dynasty and created the Republic of China",
                "answer": "Xinhai Revolution",
                "explanation": "Led intellectually by Dr. Sun Yat-sen.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-13",
                "points": 400,
                "difficulty": 4,
                "clue": "Queen of the British Celtic Iceni tribe who led an uprising against Rome in AD 60 or 61",
                "answer": "Boudica (Boadicea)",
                "explanation": "Her forces destroyed Roman settlements in Camulodunum and Londinium.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-14",
                "points": 400,
                "difficulty": 4,
                "clue": "1683 siege where an alliance of Polish and Austrian forces defeated the Ottoman army in Europe",
                "answer": "Battle of Vienna (Siege of Vienna)",
                "explanation": "King John III Sobieski of Poland led the decisive cavalry charge.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-15",
                "points": 400,
                "difficulty": 4,
                "clue": "The political and social system of the Kingdom of France from the Late Middle Ages until 1789",
                "answer": "Ancien Regime (Old Regime)",
                "explanation": "Characterized by absolute monarchy and feudal estates.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-16",
                "points": 400,
                "difficulty": 4,
                "clue": "Ancient Greek naval battle in 480 BC where Greek triremes destroyed Xerxes' Persian fleet",
                "answer": "Battle of Salamis",
                "explanation": "Themistocles devised the winning Greek strategy.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-17",
                "points": 400,
                "difficulty": 4,
                "clue": "Swedish king known as the \"Lion of the North\" who died at the Battle of Lutzen in 1632",
                "answer": "Gustavus Adolphus (Gustav II Adolf)",
                "explanation": "Regarded as one of the greatest military commanders of all time.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-18",
                "points": 400,
                "difficulty": 4,
                "clue": "1381 rebellion in England sparked by poll taxes and post-Black Death economic tensions",
                "answer": "Peasants' Revolt (Wat Tyler's Rebellion)",
                "explanation": "Led by Wat Tyler and preacher John Ball.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-19",
                "points": 400,
                "difficulty": 4,
                "clue": "Indian emperor who converted to Buddhism and erected pillar edicts after the bloody Kalinga War",
                "answer": "Ashoka the Great",
                "explanation": "He ruled the Mauryan Empire in the 3rd century BC.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d4-20",
                "points": 400,
                "difficulty": 4,
                "clue": "Secret clause of the 1939 Molotov-Ribbentrop Pact divided this country between Germany and the USSR",
                "answer": "Poland",
                "explanation": "Both powers invaded Poland in September 1939.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-1",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1204 sack of Constantinople occurred during this numbered crusade",
                "answer": "Fourth Crusade",
                "explanation": "Crusaders attacked their fellow Christian city instead of Jerusalem.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-2",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1618 event in Prague where Protestant nobles threw Catholic regents out of a window, sparking war",
                "answer": "Defenestration of Prague",
                "explanation": "This initiated the devastating Thirty Years War.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-3",
                "points": 500,
                "difficulty": 5,
                "clue": "Ancient Persian religious prophet who founded the world's first monotheistic religion in the 6th century BC",
                "answer": "Zoroaster (Zarathustra)",
                "explanation": "Zoroastrianism influenced Judaism, Christianity, and Islam.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-4",
                "points": 500,
                "difficulty": 5,
                "clue": "The decisive 216 BC battle where Hannibal encircled and annihilated eight Roman legions using a double envelopment",
                "answer": "Battle of Cannae",
                "explanation": "Over 50,000 Roman soldiers died in a single day.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-5",
                "points": 500,
                "difficulty": 5,
                "clue": "1857 rebellion in India against British East India Company rule, triggered by rifle cartridges",
                "answer": "Sepoy Mutiny (Indian Rebellion of 1857)",
                "explanation": "Led the British Crown to take direct control of India.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-6",
                "points": 500,
                "difficulty": 5,
                "clue": "The first Roman general to march an army on Rome itself, later serving as dictator in 82 BC",
                "answer": "Lucius Cornelius Sulla",
                "explanation": "His civil war pitted him against Gaius Marius.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-7",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1302 battle known as the \"Battle of the Golden Spurs\" where Flemish infantry defeated French cavalry",
                "answer": "Battle of Courtrai (Kortrijk)",
                "explanation": "Spurs of fallen French knights were collected and hung in Courtrai cathedral.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-8",
                "points": 500,
                "difficulty": 5,
                "clue": "The French minister of finance under Louis XIV who championed mercantilism",
                "answer": "Jean-Baptiste Colbert",
                "explanation": "Colbertism became synonymous with state-directed economic policy.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-9",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1644 battle where Oliver Cromwell's Ironsides helped Parliament defeat Royalists in northern England",
                "answer": "Battle of Marston Moor",
                "explanation": "The largest battle fought on English soil during the Civil War.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-10",
                "points": 500,
                "difficulty": 5,
                "clue": "The peace treaty signed in 1763 that concluded the French and Indian War / Seven Years War",
                "answer": "Treaty of Paris (1763)",
                "explanation": "France ceded almost all its North American territory to Britain and Spain.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-11",
                "points": 500,
                "difficulty": 5,
                "clue": "Ancient Mesopotamian king of Akkad recognized as the first emperor in recorded history",
                "answer": "Sargon of Akkad",
                "explanation": "He conquered Sumerian city-states around 2334 BC.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-12",
                "points": 500,
                "difficulty": 5,
                "clue": "The Italian city-state governed by the doge, famously dominating Adriatic maritime trade for centuries",
                "answer": "Republic of Venice (The Serenissima)",
                "explanation": "Existed as a sovereign republic for more than a millennium.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-13",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1839-1842 war between Great Britain and Qing China sparked by the illegal drug trade",
                "answer": "First Opium War",
                "explanation": "Ended with the Treaty of Nanking, which ceded Hong Kong to Britain.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-14",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1777 battle in upstate New York that convinced France to officially ally with the American colonies",
                "answer": "Battle of Saratoga",
                "explanation": "General John Burgoyne surrendered his entire British army.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-15",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1415 battle where Henry V's English longbowmen decimated heavily armored French nobility in muddy terrain",
                "answer": "Battle of Agincourt",
                "explanation": "Immortalized in Shakespeare's play Henry V.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-16",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1529 military campaign where Suleiman the Magnificent was halted from capturing the capital of Austria",
                "answer": "First Siege of Vienna",
                "explanation": "Marked the high-water mark of Ottoman expansion in central Europe.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-17",
                "points": 500,
                "difficulty": 5,
                "clue": "The Japanese period of national isolation that lasted from 1603 to 1868 under the Tokugawa shogunate",
                "answer": "Sakoku",
                "explanation": "Foreigners were banned from entering and Japanese citizens from leaving.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-18",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1605 failed Catholic plot to blow up the British House of Lords with gunpowder",
                "answer": "Gunpowder Plot",
                "explanation": "Guy Fawkes was arrested guarding 36 barrels of gunpowder.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-19",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1904 entente between Britain and France that resolved colonial disputes and paved the way for WWI alliances",
                "answer": "Entente Cordiale",
                "explanation": "Settled conflicts in Egypt, Morocco, and Newfoundland.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "hist-d5-20",
                "points": 500,
                "difficulty": 5,
                "clue": "The Aztec ruler during Cortes's Noche Triste retreat who died shortly before the fall of Tenochtitlan",
                "answer": "Cuitlahuac",
                "explanation": "He succeeded Moctezuma II and died of smallpox.",
                "image": "",
                "dailyDouble": false
              }
            ]
          },
          {
            "id": "cat-sci",
            "name": "Science & Wonders",
            "clues": [
              {
                "id": "sci-d1-1",
                "points": 100,
                "difficulty": 1,
                "clue": "Chemical symbol for water",
                "answer": "H2O",
                "explanation": "Composed of two hydrogen atoms and one oxygen atom.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-2",
                "points": 100,
                "difficulty": 1,
                "clue": "Planet closest to the Sun in our Solar System",
                "answer": "Mercury",
                "explanation": "It has no atmosphere to retain heat, leading to extreme temperature swings.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-3",
                "points": 100,
                "difficulty": 1,
                "clue": "The hardest known natural mineral on Earth",
                "answer": "Diamond",
                "explanation": "Ranked 10 on the Mohs hardness scale.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-4",
                "points": 100,
                "difficulty": 1,
                "clue": "The organ that pumps blood throughout the human body",
                "answer": "Heart",
                "explanation": "It beats around 100,000 times per day.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-5",
                "points": 100,
                "difficulty": 1,
                "clue": "Gas that plants absorb from the atmosphere during photosynthesis",
                "answer": "Carbon Dioxide (CO2)",
                "explanation": "Plants convert it into oxygen and glucose.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-6",
                "points": 100,
                "difficulty": 1,
                "clue": "The closest star to planet Earth",
                "answer": "The Sun",
                "explanation": "It takes sunlight about 8 minutes and 20 seconds to reach Earth.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-7",
                "points": 100,
                "difficulty": 1,
                "clue": "Force that pulls objects toward the center of the Earth",
                "answer": "Gravity",
                "explanation": "Formulated mathematically by Sir Isaac Newton.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-8",
                "points": 100,
                "difficulty": 1,
                "clue": "Part of the plant cell where photosynthesis occurs",
                "answer": "Chloroplast",
                "explanation": "Contains green chlorophyll pigments.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-9",
                "points": 100,
                "difficulty": 1,
                "clue": "Boiling point of pure water at sea level in Celsius",
                "answer": "100 degrees Celsius",
                "explanation": "Equivalent to 212 degrees Fahrenheit.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-10",
                "points": 100,
                "difficulty": 1,
                "clue": "The process by which liquid water turns into water vapor",
                "answer": "Evaporation",
                "explanation": "Key step in the global water cycle.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-11",
                "points": 100,
                "difficulty": 1,
                "clue": "Substance that makes plant leaves appear green",
                "answer": "Chlorophyll",
                "explanation": "It absorbs blue and red wavelengths while reflecting green.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-12",
                "points": 100,
                "difficulty": 1,
                "clue": "Number of bones in the adult human body",
                "answer": "206",
                "explanation": "Infants are born with approximately 270 bones.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-13",
                "points": 100,
                "difficulty": 1,
                "clue": "Largest planet in our Solar System",
                "answer": "Jupiter",
                "explanation": "Its mass is more than twice that of all other planets combined.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-14",
                "points": 100,
                "difficulty": 1,
                "clue": "The center of an atom, containing protons and neutrons",
                "answer": "Nucleus",
                "explanation": "Discovered by Ernest Rutherford in 1911.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-15",
                "points": 100,
                "difficulty": 1,
                "clue": "Layer of Earth's atmosphere that protects life from harmful ultraviolet rays",
                "answer": "Ozone Layer (Stratosphere)",
                "explanation": "Composed of triatomic oxygen (O3).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-16",
                "points": 100,
                "difficulty": 1,
                "clue": "Animal group that frogs, toads, and salamanders belong to",
                "answer": "Amphibians",
                "explanation": "They can live both in water and on land.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-17",
                "points": 100,
                "difficulty": 1,
                "clue": "Chemical element with atomic number 1 and symbol H",
                "answer": "Hydrogen",
                "explanation": "The most abundant element in the universe.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-18",
                "points": 100,
                "difficulty": 1,
                "clue": "The speed of light in a vacuum in kilometers per second (approximate)",
                "answer": "300,000 km/s (299,792 km/s)",
                "explanation": "Light can circle the Earth 7.5 times in one second.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-19",
                "points": 100,
                "difficulty": 1,
                "clue": "The primary gas found in Earth's atmosphere, making up about 78%",
                "answer": "Nitrogen",
                "explanation": "Oxygen makes up approximately 21%.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d1-20",
                "points": 100,
                "difficulty": 1,
                "clue": "Instrument used to look at distant celestial objects in space",
                "answer": "Telescope",
                "explanation": "First patented by Hans Lippershey in 1608.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-1",
                "points": 200,
                "difficulty": 2,
                "clue": "The powerhouse of the eukaryotic cell responsible for ATP production",
                "answer": "Mitochondria",
                "explanation": "They have their own independent genome.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-2",
                "points": 200,
                "difficulty": 2,
                "clue": "Element with the chemical symbol Fe on the periodic table",
                "answer": "Iron",
                "explanation": "From the Latin word \"ferrum\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-3",
                "points": 200,
                "difficulty": 2,
                "clue": "Type of rock formed from the cooling and solidification of molten magma",
                "answer": "Igneous Rock",
                "explanation": "Examples include basalt and granite.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-4",
                "points": 200,
                "difficulty": 2,
                "clue": "Unit of electrical resistance named after a German physicist",
                "answer": "Ohm",
                "explanation": "Named after Georg Wilhelm Ohm.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-5",
                "points": 200,
                "difficulty": 2,
                "clue": "Human organ that produces insulin to regulate blood sugar levels",
                "answer": "Pancreas",
                "explanation": "Contains specialized clusters of cells called Islets of Langerhans.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-6",
                "points": 200,
                "difficulty": 2,
                "clue": "The boundary around a black hole beyond which nothing can escape",
                "answer": "Event Horizon",
                "explanation": "Once inside, the escape velocity exceeds the speed of light.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-7",
                "points": 200,
                "difficulty": 2,
                "clue": "Subatomic particle with a negative electric charge",
                "answer": "Electron",
                "explanation": "Discovered by J.J. Thomson in 1897.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-8",
                "points": 200,
                "difficulty": 2,
                "clue": "The measure of disorder or randomness in a thermodynamic system",
                "answer": "Entropy",
                "explanation": "Associated with the Second Law of Thermodynamics.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-9",
                "points": 200,
                "difficulty": 2,
                "clue": "Scale used to measure the acidity or basicity of an aqueous solution",
                "answer": "pH Scale",
                "explanation": "Runs from 0 (very acidic) to 14 (very alkaline).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-10",
                "points": 200,
                "difficulty": 2,
                "clue": "The galaxy closest to the Milky Way in the Local Group",
                "answer": "Andromeda Galaxy (M31)",
                "explanation": "It is roughly 2.5 million light-years from Earth.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-11",
                "points": 200,
                "difficulty": 2,
                "clue": "Blood cells responsible for fighting infection and immune defense",
                "answer": "White Blood Cells (Leukocytes)",
                "explanation": "Produced inside bone marrow.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-12",
                "points": 200,
                "difficulty": 2,
                "clue": "Newton's first law of motion is also known by this name",
                "answer": "Law of Inertia",
                "explanation": "An object at rest stays at rest unless acted upon by an external force.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-13",
                "points": 200,
                "difficulty": 2,
                "clue": "Chemical element named after the creator of the periodic table",
                "answer": "Mendelevium (Md)",
                "explanation": "Named in honor of Dmitri Mendeleev.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-14",
                "points": 200,
                "difficulty": 2,
                "clue": "The largest organ of the human body by surface area and weight",
                "answer": "Skin (Integumentary system)",
                "explanation": "An adult has about 2 square meters of skin.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-15",
                "points": 200,
                "difficulty": 2,
                "clue": "Form of energy possessed by an object due to its motion",
                "answer": "Kinetic Energy",
                "explanation": "Calculated as 0.5 * mass * velocity squared.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-16",
                "points": 200,
                "difficulty": 2,
                "clue": "Wave type where particle displacement is perpendicular to wave propagation",
                "answer": "Transverse Wave",
                "explanation": "Light and electromagnetic radiation are transverse waves.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-17",
                "points": 200,
                "difficulty": 2,
                "clue": "Chemical bond formed by the sharing of electron pairs between atoms",
                "answer": "Covalent Bond",
                "explanation": "Contrasted with ionic bonds where electrons are transferred.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-18",
                "points": 200,
                "difficulty": 2,
                "clue": "The process of cell division that results in four genetically diverse gametes",
                "answer": "Meiosis",
                "explanation": "Essential for sexual reproduction.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-19",
                "points": 200,
                "difficulty": 2,
                "clue": "Dense core left behind after a low-to-medium mass star exhausts its fuel",
                "answer": "White Dwarf",
                "explanation": "Supported against gravitational collapse by electron degeneracy pressure.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d2-20",
                "points": 200,
                "difficulty": 2,
                "clue": "The study of fungi, including mushrooms, molds, and yeasts",
                "answer": "Mycology",
                "explanation": "Fungi are genetically closer to animals than to plants.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-1",
                "points": 300,
                "difficulty": 3,
                "clue": "Fundamental constant representing the ratio of a photon's energy to its frequency",
                "answer": "Planck's Constant (h)",
                "explanation": "Value is approximately 6.626 x 10^-34 Joule-seconds.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-2",
                "points": 300,
                "difficulty": 3,
                "clue": "The theoretical temperature at which all molecular motion ceases (0 Kelvin)",
                "answer": "Absolute Zero",
                "explanation": "Equal to -273.15 degrees Celsius or -459.67 degrees Fahrenheit.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-3",
                "points": 300,
                "difficulty": 3,
                "clue": "The process where solid matter transitions directly into gas without passing through a liquid phase",
                "answer": "Sublimation",
                "explanation": "Dry ice (solid carbon dioxide) sublimates at room temperature.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-4",
                "points": 300,
                "difficulty": 3,
                "clue": "The two elements that are liquid at standard room temperature and pressure",
                "answer": "Mercury and Bromine",
                "explanation": "Mercury is a metal, bromine is a halogen.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-5",
                "points": 300,
                "difficulty": 3,
                "clue": "Scientific law stating that pressure and volume of a gas are inversely proportional at constant temperature",
                "answer": "Boyle's Law",
                "explanation": "Discovered by Robert Boyle in 1662.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-6",
                "points": 300,
                "difficulty": 3,
                "clue": "Part of the human brain primarily responsible for balance, coordination, and motor control",
                "answer": "Cerebellum",
                "explanation": "Latin for \"little brain\", located at the base of the skull.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-7",
                "points": 300,
                "difficulty": 3,
                "clue": "Subatomic particles that make up protons and neutrons",
                "answer": "Quarks",
                "explanation": "Protons consist of two up quarks and one down quark.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-8",
                "points": 300,
                "difficulty": 3,
                "clue": "The theoretical framework attempting to reconcile quantum mechanics and general relativity using 1D vibrating filaments",
                "answer": "String Theory",
                "explanation": "Proposes that fundamental particles are vibrating strings.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-9",
                "points": 300,
                "difficulty": 3,
                "clue": "Type of radioactive decay in which an unstable nucleus emits a helium-4 nucleus",
                "answer": "Alpha Decay",
                "explanation": "Alpha particles can be stopped by a single sheet of paper.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-10",
                "points": 300,
                "difficulty": 3,
                "clue": "Enzyme in human saliva that initiates the chemical digestion of starches into sugars",
                "answer": "Amylase (Ptyalin)",
                "explanation": "Breaks starches down into maltose and glucose.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-11",
                "points": 300,
                "difficulty": 3,
                "clue": "The brightest star in the night sky as seen from Earth",
                "answer": "Sirius (The Dog Star)",
                "explanation": "Located in the constellation Canis Major, 8.6 light-years away.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-12",
                "points": 300,
                "difficulty": 3,
                "clue": "The effect where an observer detects a shift in frequency of a wave from a moving source",
                "answer": "Doppler Effect",
                "explanation": "Explains the red-shift of distant receding galaxies.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-13",
                "points": 300,
                "difficulty": 3,
                "clue": "Blood type known as the universal red blood cell donor",
                "answer": "O Negative (O-)",
                "explanation": "Lacks A, B, and Rh antigens on red blood cell membranes.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-14",
                "points": 300,
                "difficulty": 3,
                "clue": "The rare earth element with the highest magnetic strength used in strong permanent magnets",
                "answer": "Neodymium (Nd)",
                "explanation": "Widely used in electric vehicle motors and hard drives.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-15",
                "points": 300,
                "difficulty": 3,
                "clue": "The geological epoch that began approximately 11,700 years ago after the last glacial period",
                "answer": "Holocene",
                "explanation": "Coincides with human agrarian civilization.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-16",
                "points": 300,
                "difficulty": 3,
                "clue": "The region of space beyond Neptune containing tens of thousands of icy bodies and dwarf planets",
                "answer": "Kuiper Belt",
                "explanation": "Pluto and Haumea reside in the Kuiper belt.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-17",
                "points": 300,
                "difficulty": 3,
                "clue": "The mathematical principle stating that certain pairs of physical properties cannot both be known with arbitrary precision",
                "answer": "Heisenberg Uncertainty Principle",
                "explanation": "Position and momentum cannot be simultaneously measured precisely.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-18",
                "points": 300,
                "difficulty": 3,
                "clue": "The acid found naturally in the human stomach that aids in chemical digestion",
                "answer": "Hydrochloric Acid (HCl)",
                "explanation": "Maintains stomach gastric juice at a pH of 1.5 to 3.5.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-19",
                "points": 300,
                "difficulty": 3,
                "clue": "Type of chemical reaction that releases thermal energy to its surroundings",
                "answer": "Exothermic Reaction",
                "explanation": "Combustion is a classic example of an exothermic reaction.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d3-20",
                "points": 300,
                "difficulty": 3,
                "clue": "The only type of mammal capable of true, sustained powered flight",
                "answer": "Bats (Chiroptera)",
                "explanation": "Flying squirrels and sugar gliders only glide.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-1",
                "points": 400,
                "difficulty": 4,
                "clue": "Fundamental subatomic particle discovered at CERN's Large Hadron Collider in 2012 that grants mass to other particles",
                "answer": "Higgs Boson",
                "explanation": "Often popularized as the \"God Particle\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-2",
                "points": 400,
                "difficulty": 4,
                "clue": "The hypothetical spherical cloud of predominantly icy planetesimals surrounding the Solar System up to 100,000 AU out",
                "answer": "Oort Cloud",
                "explanation": "Believed to be the origin of long-period comets.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-3",
                "points": 400,
                "difficulty": 4,
                "clue": "The principle in physics that total electric charge, baryon number, and energy-momentum are always conserved",
                "answer": "Conservation Laws",
                "explanation": "Derived mathematically from symmetries via Noether's Theorem.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-4",
                "points": 400,
                "difficulty": 4,
                "clue": "The neurotransmitter whose deficiency is the primary pathological hallmark of Parkinson's disease",
                "answer": "Dopamine",
                "explanation": "Produced in the substantia nigra of the brain.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-5",
                "points": 400,
                "difficulty": 4,
                "clue": "The process by which organisms synthesize organic molecules using chemical energy instead of sunlight",
                "answer": "Chemosynthesis",
                "explanation": "Common near deep-sea hydrothermal vents.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-6",
                "points": 400,
                "difficulty": 4,
                "clue": "The point in a binary star system where gravitational forces equal centrifugal force, allowing mass transfer",
                "answer": "Lagrange Point (or Roche Lobe)",
                "explanation": "Roche lobes define the tear-drop boundary of mass capture.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-7",
                "points": 400,
                "difficulty": 4,
                "clue": "The medical term for programmed cell death in multicellular organisms",
                "answer": "Apoptosis",
                "explanation": "Crucial for tissue differentiation and eliminating damaged cells.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-8",
                "points": 400,
                "difficulty": 4,
                "clue": "The mineral with chemical formula FeS2, famously called \"Fool's Gold\"",
                "answer": "Pyrite (Iron Pyrite)",
                "explanation": "Forms distinctive brass-yellow cubic crystals.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-9",
                "points": 400,
                "difficulty": 4,
                "clue": "Cosmological observation showing the universe's expansion rate is accelerating, attributed to this mysterious force",
                "answer": "Dark Energy",
                "explanation": "Constitutes roughly 68% of the total energy density of the universe.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-10",
                "points": 400,
                "difficulty": 4,
                "clue": "The quantum mechanical phenomenon where particles pass through a potential barrier they classically lack energy to cross",
                "answer": "Quantum Tunneling",
                "explanation": "Enables nuclear fusion in the core of the Sun.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-11",
                "points": 400,
                "difficulty": 4,
                "clue": "The second-most electronegative element on the Pauling scale after fluorine",
                "answer": "Oxygen",
                "explanation": "Electronegativity value of 3.44 on the Pauling scale.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-12",
                "points": 400,
                "difficulty": 4,
                "clue": "The thick band of nerve fibers connecting the left and right cerebral hemispheres in human brains",
                "answer": "Corpus Callosum",
                "explanation": "Contains more than 200 million axonal projections.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-13",
                "points": 400,
                "difficulty": 4,
                "clue": "The state of matter formed when bosons are cooled to temperatures very close to absolute zero",
                "answer": "Bose-Einstein Condensate",
                "explanation": "First produced in a laboratory in 1995.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-14",
                "points": 400,
                "difficulty": 4,
                "clue": "The mathematical theorem in physics connecting continuous symmetries with physical conservation laws",
                "answer": "Noether's Theorem",
                "explanation": "Formulated by German mathematician Emmy Noether in 1915.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-15",
                "points": 400,
                "difficulty": 4,
                "clue": "The temperature and pressure at which gas and liquid phases of a substance become indistinguishable",
                "answer": "Critical Point",
                "explanation": "Produces a supercritical fluid with unique solvent properties.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-16",
                "points": 400,
                "difficulty": 4,
                "clue": "The cellular structure composed of 9 triplet microtubules that organizes mitotic spindle fibers",
                "answer": "Centriole (Centrosome)",
                "explanation": "Plays a key role in eukaryotic cell division.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-17",
                "points": 400,
                "difficulty": 4,
                "clue": "The astronomical radius inside which a celestial body held together only by gravity will disintegrate due to tidal forces",
                "answer": "Roche Limit",
                "explanation": "Saturn's rings lie predominantly within its Roche limit.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-18",
                "points": 400,
                "difficulty": 4,
                "clue": "The law in optics describing the angle of incidence and refraction through different media (n1 sin θ1 = n2 sin θ2)",
                "answer": "Snell's Law",
                "explanation": "Named after Dutch astronomer Willebrord Snellius.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-19",
                "points": 400,
                "difficulty": 4,
                "clue": "The biological pigment family responsible for orange, yellow, and red color in carrots and autumn leaves",
                "answer": "Carotenoids",
                "explanation": "Includes beta-carotene, lutein, and lycopene.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d4-20",
                "points": 400,
                "difficulty": 4,
                "clue": "The process where heavy atomic nuclei split into lighter nuclei, releasing immense energy",
                "answer": "Nuclear Fission",
                "explanation": "Discovered in 1938 by Otto Hahn and Fritz Strassmann.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-1",
                "points": 500,
                "difficulty": 5,
                "clue": "The hypothetical time scale representing the shortest possible interval of time (approx. 5.39 x 10^-44 seconds)",
                "answer": "Planck Time",
                "explanation": "The time light takes to travel one Planck length in vacuum.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-2",
                "points": 500,
                "difficulty": 5,
                "clue": "The non-coding repetitive nucleotide sequences capping the ends of eukaryotic chromosomes that shorten with each division",
                "answer": "Telomeres",
                "explanation": "Discovered by Elizabeth Blackburn and Carol Greider.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-3",
                "points": 500,
                "difficulty": 5,
                "clue": "The subatomic particle of spin 1/2 predicted by Paul Dirac in 1928, discovered as the first antimatter particle in 1932",
                "answer": "Positron (Antielectron)",
                "explanation": "Discovered in cosmic ray tracks by Carl Anderson.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-4",
                "points": 500,
                "difficulty": 5,
                "clue": "The point on a phase diagram where solid, liquid, and gas phases coexist in thermodynamic equilibrium",
                "answer": "Triple Point",
                "explanation": "Water's triple point occurs at 0.01 °C and 611.65 Pascals.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-5",
                "points": 500,
                "difficulty": 5,
                "clue": "The theoretical upper mass limit of a non-rotating white dwarf star (approx. 1.4 solar masses)",
                "answer": "Chandrasekhar Limit",
                "explanation": "Formulated by Indian-American astrophysicist Subrahmanyan Chandrasekhar.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-6",
                "points": 500,
                "difficulty": 5,
                "clue": "The equation in quantum mechanics describing how the quantum state of a physical system changes over time",
                "answer": "Schrodinger Equation",
                "explanation": "Published by Erwin Schrodinger in 1926.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-7",
                "points": 500,
                "difficulty": 5,
                "clue": "The anatomical junction where the optic nerves cross in the human brain",
                "answer": "Optic Chiasm",
                "explanation": "Allows visual fields from both eyes to project to contralateral hemispheres.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-8",
                "points": 500,
                "difficulty": 5,
                "clue": "The phenomenon in which an electrical current flows indefinitely without resistance in certain materials cooled to low temperatures",
                "answer": "Superconductivity",
                "explanation": "Discovered by Heike Kamerlingh Onnes in 1911.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-9",
                "points": 500,
                "difficulty": 5,
                "clue": "The biological cycle in cellular respiration where acetyl-CoA is oxidized to CO2 and high-energy electron carriers",
                "answer": "Krebs Cycle (Citric Acid Cycle)",
                "explanation": "Named after Hans Adolf Krebs, who elucidated it in 1937.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-10",
                "points": 500,
                "difficulty": 5,
                "clue": "The theoretical upper limit on the mass of a neutron star beyond which it must collapse into a black hole",
                "answer": "Tolman-Oppenheimer-Volkoff Limit",
                "explanation": "Roughly 2.17 solar masses based on current nuclear equations of state.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-11",
                "points": 500,
                "difficulty": 5,
                "clue": "The effect where an electric current passing through two different conductors causes heat to be absorbed or emitted at the junction",
                "answer": "Peltier Effect",
                "explanation": "Used in solid-state thermoelectric coolers.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-12",
                "points": 500,
                "difficulty": 5,
                "clue": "The geological unconformity named by John Wesley Powell in the Grand Canyon missing over a billion years of rock records",
                "answer": "The Great Unconformity",
                "explanation": "Represents a gap between Precambrian basement and Cambrian sandstone.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-13",
                "points": 500,
                "difficulty": 5,
                "clue": "The only amino acid among the standard 20 that is not optically active (achiral)",
                "answer": "Glycine",
                "explanation": "Its side chain consists solely of a single hydrogen atom.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-14",
                "points": 500,
                "difficulty": 5,
                "clue": "The paradox in quantum mechanics involving two entangled particles that Einstein termed \"spooky action at a distance\"",
                "answer": "EPR Paradox (Einstein-Podolsky-Rosen)",
                "explanation": "Resolved experimentally in favor of quantum non-locality by Alain Aspect.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-15",
                "points": 500,
                "difficulty": 5,
                "clue": "The cell organelle responsible for sorting, modifying, and packaging proteins synthesized in the endoplasmic reticulum",
                "answer": "Golgi Apparatus (Golgi Complex)",
                "explanation": "Identified in 1898 by Italian physician Camillo Golgi.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-16",
                "points": 500,
                "difficulty": 5,
                "clue": "The ratio of inertial forces to viscous forces in fluid mechanics used to predict laminar vs turbulent flow",
                "answer": "Reynolds Number (Re)",
                "explanation": "Named after Osborne Reynolds.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-17",
                "points": 500,
                "difficulty": 5,
                "clue": "The chemical element with the highest boiling point of all elements on the periodic table (approx. 5,555 °C)",
                "answer": "Tungsten (Wolfram, W)",
                "explanation": "Has the symbol W and atomic number 74.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-18",
                "points": 500,
                "difficulty": 5,
                "clue": "The enzyme that catalyzes the primary carbon-fixing reaction of the Calvin cycle in photosynthetic organisms",
                "answer": "RuBisCO (Ribulose-1,5-bisphosphate carboxylase-oxygenase)",
                "explanation": "The most abundant enzyme on Earth.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-19",
                "points": 500,
                "difficulty": 5,
                "clue": "The cosmological radiation relic from roughly 380,000 years after the Big Bang at an ambient temperature of 2.73 Kelvin",
                "answer": "Cosmic Microwave Background (CMB)",
                "explanation": "Discovered accidentally in 1965 by Arno Penzias and Robert Wilson.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "sci-d5-20",
                "points": 500,
                "difficulty": 5,
                "clue": "The theoretical radiation emitted by black holes due to quantum vacuum fluctuations near the event horizon",
                "answer": "Hawking Radiation",
                "explanation": "Proposed by theoretical physicist Stephen Hawking in 1974.",
                "image": "",
                "dailyDouble": false
              }
            ]
          },
          {
            "id": "cat-geo",
            "name": "World Geography & Travel",
            "clues": [
              {
                "id": "geo-d1-1",
                "points": 100,
                "difficulty": 1,
                "clue": "Capital of France",
                "answer": "Paris",
                "explanation": "Famous for the Eiffel Tower and Louvre Museum.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-2",
                "points": 100,
                "difficulty": 1,
                "clue": "Largest ocean on Earth by surface area",
                "answer": "Pacific Ocean",
                "explanation": "Covers more than 30% of Earth's surface.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-3",
                "points": 100,
                "difficulty": 1,
                "clue": "The longest river in the world, flowing through northeastern Africa",
                "answer": "Nile River",
                "explanation": "Flows north into the Mediterranean Sea.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-4",
                "points": 100,
                "difficulty": 1,
                "clue": "Country with the largest land area in the world",
                "answer": "Russia",
                "explanation": "Spans 11 time zones across Europe and Asia.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-5",
                "points": 100,
                "difficulty": 1,
                "clue": "Famous mountain range home to Mount Everest",
                "answer": "The Himalayas",
                "explanation": "Located in Asia between India, Nepal, Tibet, and Bhutan.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-6",
                "points": 100,
                "difficulty": 1,
                "clue": "Capital of Japan",
                "answer": "Tokyo",
                "explanation": "The most populous metropolitan area in the world.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-7",
                "points": 100,
                "difficulty": 1,
                "clue": "The largest desert on Earth (hot desert)",
                "answer": "Sahara Desert",
                "explanation": "Spans over 9 million square kilometers across North Africa.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-8",
                "points": 100,
                "difficulty": 1,
                "clue": "Continent that is completely south of the equator and also an island",
                "answer": "Australia",
                "explanation": "Often called the \"Land Down Under\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-9",
                "points": 100,
                "difficulty": 1,
                "clue": "Country shaped like a boot in Southern Europe",
                "answer": "Italy",
                "explanation": "Bordered by the Mediterranean, Adriatic, and Tyrrhenian seas.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-10",
                "points": 100,
                "difficulty": 1,
                "clue": "Capital of the United Kingdom",
                "answer": "London",
                "explanation": "Situated along the River Thames.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-11",
                "points": 100,
                "difficulty": 1,
                "clue": "Largest country in South America by both land area and population",
                "answer": "Brazil",
                "explanation": "Official language is Portuguese.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-12",
                "points": 100,
                "difficulty": 1,
                "clue": "Famous canal connecting the Atlantic and Pacific Oceans",
                "answer": "Panama Canal",
                "explanation": "Opened in 1914, cutting travel distance around Cape Horn.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-13",
                "points": 100,
                "difficulty": 1,
                "clue": "Capital of Italy, known as the \"Eternal City\"",
                "answer": "Rome",
                "explanation": "Surrounds Vatican City, the smallest independent state.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-14",
                "points": 100,
                "difficulty": 1,
                "clue": "The tallest waterfall in the world, located in Venezuela",
                "answer": "Angel Falls (Salto Angel)",
                "explanation": "Drops an astonishing 979 meters (3,212 feet).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-15",
                "points": 100,
                "difficulty": 1,
                "clue": "Island country in East Asia with capital city Taipei",
                "answer": "Taiwan",
                "explanation": "Located off the southeastern coast of China.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-16",
                "points": 100,
                "difficulty": 1,
                "clue": "Continent containing the Amazon Rainforest",
                "answer": "South America",
                "explanation": "Home to over 10% of the world's known species.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-17",
                "points": 100,
                "difficulty": 1,
                "clue": "Capital of Canada",
                "answer": "Ottawa",
                "explanation": "Located in the province of Ontario.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-18",
                "points": 100,
                "difficulty": 1,
                "clue": "The deepest lake in the world, located in Siberia, Russia",
                "answer": "Lake Baikal",
                "explanation": "Contains roughly 20% of the world's unfrozen surface fresh water.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-19",
                "points": 100,
                "difficulty": 1,
                "clue": "Country that borders both the Atlantic Ocean and the Mediterranean Sea",
                "answer": "Spain (or France / Morocco)",
                "explanation": "Spain controls the Strait of Gibraltar area.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d1-20",
                "points": 100,
                "difficulty": 1,
                "clue": "Smallest country in the world by area and population",
                "answer": "Vatican City",
                "explanation": "Enclave within the city of Rome, covering 49 hectares.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-1",
                "points": 200,
                "difficulty": 2,
                "clue": "Capital of Australia",
                "answer": "Canberra",
                "explanation": "Selected as a compromise between Sydney and Melbourne in 1908.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-2",
                "points": 200,
                "difficulty": 2,
                "clue": "The longest mountain range in the world, running along South America's western edge",
                "answer": "The Andes",
                "explanation": "Stretches over 7,000 kilometers.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-3",
                "points": 200,
                "difficulty": 2,
                "clue": "Landlocked European country famous for the Alps, watches, and chocolate",
                "answer": "Switzerland",
                "explanation": "Has four national languages: German, French, Italian, and Romansh.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-4",
                "points": 200,
                "difficulty": 2,
                "clue": "Major river that flows through London, England",
                "answer": "River Thames",
                "explanation": "Flows 346 km before emptying into the North Sea.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-5",
                "points": 200,
                "difficulty": 2,
                "clue": "Capital of Egypt",
                "answer": "Cairo",
                "explanation": "Near the ancient Giza pyramid complex.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-6",
                "points": 200,
                "difficulty": 2,
                "clue": "The highest active volcano in Europe, located on the island of Sicily",
                "answer": "Mount Etna",
                "explanation": "Has a recorded eruptive history dating back 3,500 years.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-7",
                "points": 200,
                "difficulty": 2,
                "clue": "Country with the most natural lakes in the world",
                "answer": "Canada",
                "explanation": "Contains more than 50% of the natural lakes on Earth.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-8",
                "points": 200,
                "difficulty": 2,
                "clue": "Capital of Spain",
                "answer": "Madrid",
                "explanation": "Located almost in the geographic center of the Iberian Peninsula.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-9",
                "points": 200,
                "difficulty": 2,
                "clue": "The strait separating southern Spain from northern Morocco",
                "answer": "Strait of Gibraltar",
                "explanation": "Only 14.3 kilometers wide at its narrowest point.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-10",
                "points": 200,
                "difficulty": 2,
                "clue": "African country with three official capitals: Pretoria, Cape Town, and Bloemfontein",
                "answer": "South Africa",
                "explanation": "Known as the Rainbow Nation.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-11",
                "points": 200,
                "difficulty": 2,
                "clue": "The sea that borders Egypt, Jordan, and Israel known for high salt concentration",
                "answer": "The Dead Sea",
                "explanation": "Lowest land elevation on Earth at 430 meters below sea level.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-12",
                "points": 200,
                "difficulty": 2,
                "clue": "Capital of Greece",
                "answer": "Athens",
                "explanation": "Considered the cradle of Western civilization and democracy.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-13",
                "points": 200,
                "difficulty": 2,
                "clue": "US state that has the longest coastline",
                "answer": "Alaska",
                "explanation": "Coastline stretches over 6,640 miles (10,686 km).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-14",
                "points": 200,
                "difficulty": 2,
                "clue": "The largest island in the world that is not a continent",
                "answer": "Greenland",
                "explanation": "An autonomous territory of the Kingdom of Denmark.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-15",
                "points": 200,
                "difficulty": 2,
                "clue": "Capital of Germany, reunited in 1990",
                "answer": "Berlin",
                "explanation": "The largest city in Germany by population.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-16",
                "points": 200,
                "difficulty": 2,
                "clue": "The narrow body of water connecting the Persian Gulf with the Gulf of Oman",
                "answer": "Strait of Hormuz",
                "explanation": "Crucial maritime choke point for global petroleum transit.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-17",
                "points": 200,
                "difficulty": 2,
                "clue": "European country that contains the geothermal Blue Lagoon and Gullfoss waterfall",
                "answer": "Iceland",
                "explanation": "Known as the Land of Fire and Ice.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-18",
                "points": 200,
                "difficulty": 2,
                "clue": "Capital of Argentina, famous for tango and Plaza de Mayo",
                "answer": "Buenos Aires",
                "explanation": "Located on the western shore of the Rio de la Plata.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-19",
                "points": 200,
                "difficulty": 2,
                "clue": "The largest freshwater lake in Africa by surface area",
                "answer": "Lake Victoria",
                "explanation": "Shared by Uganda, Kenya, and Tanzania.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d2-20",
                "points": 200,
                "difficulty": 2,
                "clue": "Country that contains both the source of the Tigris and Euphrates rivers",
                "answer": "Turkey",
                "explanation": "Both rivers flow south through Syria and Iraq into the Persian Gulf.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-1",
                "points": 300,
                "difficulty": 3,
                "clue": "The world's highest capital city above sea level",
                "answer": "La Paz (administrative) / Quito (constitutional)",
                "explanation": "La Paz, Bolivia sits at approximately 3,640 meters.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-2",
                "points": 300,
                "difficulty": 3,
                "clue": "Southeastern Asian strait between the Malay Peninsula and Indonesian island of Sumatra",
                "answer": "Strait of Malacca",
                "explanation": "One of the busiest shipping lanes in the world.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-3",
                "points": 300,
                "difficulty": 3,
                "clue": "What South American nation situated on the Atlantic coast south of Brazil has its capital at Montevideo?",
                "answer": "Uruguay",
                "explanation": "Uruguay hosted and won the inaugural FIFA World Cup in 1930.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-4",
                "points": 300,
                "difficulty": 3,
                "clue": "Landlocked country in South America bordered by Brazil, Bolivia, and Argentina",
                "answer": "Paraguay",
                "explanation": "Along with Bolivia, one of only two landlocked South American nations.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-5",
                "points": 300,
                "difficulty": 3,
                "clue": "Capital of New Zealand, known as the southernmost national capital in the world",
                "answer": "Wellington",
                "explanation": "Replaced Auckland as capital in 1865.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-6",
                "points": 300,
                "difficulty": 3,
                "clue": "The river that forms part of the international border between the US and Mexico",
                "answer": "Rio Grande (Rio Bravo del Norte)",
                "explanation": "Empties into the Gulf of Mexico.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-7",
                "points": 300,
                "difficulty": 3,
                "clue": "The autonomous country in the Arctic Ocean that is a constituent part of the Kingdom of the Netherlands",
                "answer": "Curacao (or Aruba / Sint Maarten)",
                "explanation": "Located in the southern Caribbean Sea.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-8",
                "points": 300,
                "difficulty": 3,
                "clue": "Capital of Norway, located at the head of a namesake fjord",
                "answer": "Oslo",
                "explanation": "Known as Christiania from 1624 to 1925.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-9",
                "points": 300,
                "difficulty": 3,
                "clue": "The mountain peak in Africa that is the highest free-standing mountain in the world",
                "answer": "Mount Kilimanjaro",
                "explanation": "Dormant volcano in Tanzania rising to 5,895 meters.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-10",
                "points": 300,
                "difficulty": 3,
                "clue": "European river that flows through ten countries and four national capitals",
                "answer": "Danube River",
                "explanation": "Passes Vienna, Bratislava, Budapest, and Belgrade.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-11",
                "points": 300,
                "difficulty": 3,
                "clue": "The world's largest archipelago state by number of islands",
                "answer": "Indonesia",
                "explanation": "Encompasses over 17,000 islands across Southeast Asia.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-12",
                "points": 300,
                "difficulty": 3,
                "clue": "Capital of Ireland",
                "answer": "Dublin",
                "explanation": "Situated on the mouth of the River Liffey.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-13",
                "points": 300,
                "difficulty": 3,
                "clue": "The dry desert plateau in northern Chile considered one of the driest places on Earth",
                "answer": "Atacama Desert",
                "explanation": "Some weather stations there have never recorded rainfall.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-14",
                "points": 300,
                "difficulty": 3,
                "clue": "The city that is situated on two continents (Europe and Asia)",
                "answer": "Istanbul",
                "explanation": "Bisected by the Bosphorus Strait.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-15",
                "points": 300,
                "difficulty": 3,
                "clue": "Capital of Thailand, officially known in Thai as Krung Thep Maha Nakhon",
                "answer": "Bangkok",
                "explanation": "Famous for ornate shrines and vibrant street life.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-16",
                "points": 300,
                "difficulty": 3,
                "clue": "The historic region in Central Europe that includes Prague, Brno, and the Elbe river valley",
                "answer": "Bohemia",
                "explanation": "Part of the modern Czech Republic.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-17",
                "points": 300,
                "difficulty": 3,
                "clue": "The inland sea between Kazakhstan and Uzbekistan that has drastically shrunk since the 1960s",
                "answer": "Aral Sea",
                "explanation": "Diverted for cotton irrigation by Soviet planners.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-18",
                "points": 300,
                "difficulty": 3,
                "clue": "Capital of Portugal, situated at the mouth of the Tagus River",
                "answer": "Lisbon",
                "explanation": "Europe's second-oldest capital city after Athens.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-19",
                "points": 300,
                "difficulty": 3,
                "clue": "The mountain range separating European Russia from Asian Russia (Siberia)",
                "answer": "Ural Mountains",
                "explanation": "Extends 2,500 km from the Arctic Ocean to the Ural River.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d3-20",
                "points": 300,
                "difficulty": 3,
                "clue": "The disputed territory in the western Himalayas administered by India, Pakistan, and China",
                "answer": "Kashmir",
                "explanation": "Source of multiple conflicts since the 1947 partition.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-1",
                "points": 400,
                "difficulty": 4,
                "clue": "The capital city of Kazakhstan, formerly called Astana, renamed in 2019 and reverted in 2022",
                "answer": "Astana (briefly Nur-Sultan)",
                "explanation": "Planned modern capital built on the Ishim River.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-2",
                "points": 400,
                "difficulty": 4,
                "clue": "The semi-enclosed body of water connected to the Black Sea by the Kerch Strait",
                "answer": "Sea of Azov",
                "explanation": "Shallowest sea in the world with a max depth of 14 meters.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-3",
                "points": 400,
                "difficulty": 4,
                "clue": "The capital of Mongolia, the coldest capital city in the world by annual average temperature",
                "answer": "Ulaanbaatar",
                "explanation": "Sits in the Tuul River valley at 1,350 meters altitude.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-4",
                "points": 400,
                "difficulty": 4,
                "clue": "The overseas department and region of France in South America where ESA launches rockets",
                "answer": "French Guiana",
                "explanation": "Home to the Guiana Space Centre in Kourou.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-5",
                "points": 400,
                "difficulty": 4,
                "clue": "The highest peak in North America, located in the Alaska Range",
                "answer": "Denali (Mount McKinley)",
                "explanation": "Rises to 6,190 meters (20,310 feet) above sea level.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-6",
                "points": 400,
                "difficulty": 4,
                "clue": "The capital of Iceland, the northernmost capital of a sovereign state",
                "answer": "Reykjavik",
                "explanation": "Runs almost entirely on geothermal energy.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-7",
                "points": 400,
                "difficulty": 4,
                "clue": "The African country completely surrounded by South Africa",
                "answer": "Lesotho",
                "explanation": "Known as the \"Kingdom in the Sky\" due to high altitude.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-8",
                "points": 400,
                "difficulty": 4,
                "clue": "The narrow strip of land connecting Central America to North America, often specifically applied to Mexico's narrowest waist",
                "answer": "Isthmus of Tehuantepec",
                "explanation": "Separates the Gulf of Mexico from the Pacific Ocean.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-9",
                "points": 400,
                "difficulty": 4,
                "clue": "The body of water separating the South Island of New Zealand from the North Island",
                "answer": "Cook Strait",
                "explanation": "Named after Captain James Cook.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-10",
                "points": 400,
                "difficulty": 4,
                "clue": "The highest point in South America, located in the Mendoza province of Argentina",
                "answer": "Aconcagua",
                "explanation": "Reaches 6,961 meters (22,838 feet) in the Andes.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-11",
                "points": 400,
                "difficulty": 4,
                "clue": "The capital of Bhutan, renowned for measuring national progress through Gross National Happiness",
                "answer": "Thimphu",
                "explanation": "One of the few capitals without traffic lights.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-12",
                "points": 400,
                "difficulty": 4,
                "clue": "The island in the Mediterranean Sea divided between Greek and Turkish communities",
                "answer": "Cyprus",
                "explanation": "Nicosia is the divided capital of the island.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-13",
                "points": 400,
                "difficulty": 4,
                "clue": "The large island shared by three sovereign nations: Indonesia, Malaysia, and Brunei",
                "answer": "Borneo",
                "explanation": "The third-largest island in the world.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-14",
                "points": 400,
                "difficulty": 4,
                "clue": "The capital of Morocco, while Casablanca is its largest commercial city",
                "answer": "Rabat",
                "explanation": "Located on the Atlantic coast at the mouth of the Bou Regreg.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-15",
                "points": 400,
                "difficulty": 4,
                "clue": "The strait that separates the island of Tasmania from the Australian mainland",
                "answer": "Bass Strait",
                "explanation": "Roughly 240 km wide and notorious for rough seas.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-16",
                "points": 400,
                "difficulty": 4,
                "clue": "The capital city of Jordan, built on seven original hills",
                "answer": "Amman",
                "explanation": "One of the oldest continuously inhabited cities in the world.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-17",
                "points": 400,
                "difficulty": 4,
                "clue": "The European microstate nestled between Spain and France in the Pyrenees mountains",
                "answer": "Andorra",
                "explanation": "Co-principality headed by the Bishop of Urgell and President of France.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-18",
                "points": 400,
                "difficulty": 4,
                "clue": "The river that forms most of the border between Laos and Thailand before flowing through Cambodia and Vietnam",
                "answer": "Mekong River",
                "explanation": "Discharges into the South China Sea through an expansive delta.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-19",
                "points": 400,
                "difficulty": 4,
                "clue": "The Canadian territory that borders Alaska, whose capital is Whitehorse",
                "answer": "Yukon",
                "explanation": "Center of the Klondike Gold Rush in the late 1890s.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d4-20",
                "points": 400,
                "difficulty": 4,
                "clue": "The highest mountain in Europe outside the Caucasus (or within Western Europe)",
                "answer": "Mont Blanc",
                "explanation": "Stands at 4,808 meters on the French-Italian border.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-1",
                "points": 500,
                "difficulty": 5,
                "clue": "The capital of the Federated States of Micronesia, located on the island of Pohnpei",
                "answer": "Palikir",
                "explanation": "Replaced Kolonia as capital in 1989.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-2",
                "points": 500,
                "difficulty": 5,
                "clue": "The geographic point in the South Pacific Ocean that is farthest from any land (approx. 2,688 km)",
                "answer": "Point Nemo (Oceanic Pole of Inaccessibility)",
                "explanation": "Used as a \"spacecraft cemetery\" for decommissioned satellites.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-3",
                "points": 500,
                "difficulty": 5,
                "clue": "The disputed border river between China and Russia where military clashes took place in 1969",
                "answer": "Ussuri River (Zhenbao Island)",
                "explanation": "Branch of the Amur River system.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-4",
                "points": 500,
                "difficulty": 5,
                "clue": "The African capital city situated on the southern bank of the Congo River directly opposite Brazzaville",
                "answer": "Kinshasa",
                "explanation": "Capital of the Democratic Republic of the Congo.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-5",
                "points": 500,
                "difficulty": 5,
                "clue": "The archipelago in the Arctic Ocean belonging to Norway governed under a 1920 international treaty",
                "answer": "Svalbard",
                "explanation": "Location of the Svalbard Global Seed Vault.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-6",
                "points": 500,
                "difficulty": 5,
                "clue": "The capital of the island nation of Vanuatu in the South Pacific",
                "answer": "Port Vila",
                "explanation": "Located on the island of Efate.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-7",
                "points": 500,
                "difficulty": 5,
                "clue": "The desert in southern Africa that spans parts of Botswana, Namibia, and South Africa",
                "answer": "Kalahari Desert",
                "explanation": "Not a true desert, as it supports acacia and dry savannah.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-8",
                "points": 500,
                "difficulty": 5,
                "clue": "The body of water separating the Italian mainland from the island of Sicily",
                "answer": "Strait of Messina",
                "explanation": "Associated with the mythological sea monsters Scylla and Charybdis.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-9",
                "points": 500,
                "difficulty": 5,
                "clue": "The capital of Suriname, formerly known as Dutch Guiana",
                "answer": "Paramaribo",
                "explanation": "Historic inner city is a UNESCO World Heritage site.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-10",
                "points": 500,
                "difficulty": 5,
                "clue": "The salt flat in southwestern Bolivia that is the world's largest at over 10,000 square kilometers",
                "answer": "Salar de Uyuni",
                "explanation": "Contains an estimated 50% to 70% of the world's known lithium reserves.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-11",
                "points": 500,
                "difficulty": 5,
                "clue": "The capital of Eritrea, famous for its preserved Italian rationalist architecture",
                "answer": "Asmara",
                "explanation": "Often referred to as \"Piccola Roma\" (Little Rome).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-12",
                "points": 500,
                "difficulty": 5,
                "clue": "The peninsula on the Russian Far East between the Sea of Okhotsk and the Bering Sea",
                "answer": "Kamchatka Peninsula",
                "explanation": "Contains the UNESCO Volcanoes of Kamchatka.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-13",
                "points": 500,
                "difficulty": 5,
                "clue": "The mountain pass connecting Pakistan and Afghanistan through the Hindu Kush",
                "answer": "Khyber Pass",
                "explanation": "Historic invasion and trade route between Central and South Asia.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-14",
                "points": 500,
                "difficulty": 5,
                "clue": "The capital of Tuvalu, one of the smallest and lowest-lying nations on Earth",
                "answer": "Funafuti",
                "explanation": "Atoll consisting of 30 islets.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-15",
                "points": 500,
                "difficulty": 5,
                "clue": "The deep ocean trench off the coast of Puerto Rico that is the deepest point in the Atlantic Ocean",
                "answer": "Puerto Rico Trench (Milwaukee Deep)",
                "explanation": "Reaches a depth of 8,376 meters (27,480 feet).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-16",
                "points": 500,
                "difficulty": 5,
                "clue": "The capital of the Republic of the Congo facing Kinshasa across the Congo River",
                "answer": "Brazzaville",
                "explanation": "Named after Italian-French explorer Pierre Savorgnan de Brazza.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-17",
                "points": 500,
                "difficulty": 5,
                "clue": "The archipelago off the southeastern tip of South America separated from the mainland by the Strait of Magellan",
                "answer": "Tierra del Fuego",
                "explanation": "Shared between Chile and Argentina.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-18",
                "points": 500,
                "difficulty": 5,
                "clue": "The capital city of Liechtenstein, situated along the Rhine River",
                "answer": "Vaduz",
                "explanation": "Seat of the reigning Prince of Liechtenstein.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-19",
                "points": 500,
                "difficulty": 5,
                "clue": "The Russian enclave wedged between Poland and Lithuania on the Baltic Sea",
                "answer": "Kaliningrad Oblast",
                "explanation": "Formerly the East Prussian capital of Konigsberg.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "geo-d5-20",
                "points": 500,
                "difficulty": 5,
                "clue": "The international border that forms the longest continuous undefended land border between two nations",
                "answer": "US-Canada Border (The International Boundary)",
                "explanation": "Stretches 8,891 km (5,525 miles).",
                "image": "",
                "dailyDouble": false
              }
            ]
          },
          {
            "id": "cat-pop",
            "name": "Pop Culture & Hollywood",
            "clues": [
              {
                "id": "pop-d1-1",
                "points": 100,
                "difficulty": 1,
                "clue": "Fictional wizard created by J.K. Rowling who attends Hogwarts School",
                "answer": "Harry Potter",
                "explanation": "Defeated Lord Voldemort in the Battle of Hogwarts.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-2",
                "points": 100,
                "difficulty": 1,
                "clue": "Actor who played Iron Man / Tony Stark in the Marvel Cinematic Universe",
                "answer": "Robert Downey Jr.",
                "explanation": "Kicked off the MCU in 2008 with Iron Man.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-3",
                "points": 100,
                "difficulty": 1,
                "clue": "The animated Disney film featuring the hit song \"Let It Go\"",
                "answer": "Frozen",
                "explanation": "Voiced by Idina Menzel as Elsa.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-4",
                "points": 100,
                "difficulty": 1,
                "clue": "Legendary spaceship commanded by Han Solo in Star Wars",
                "answer": "Millennium Falcon",
                "explanation": "Famously made the Kessel Run in less than twelve parsecs.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-5",
                "points": 100,
                "difficulty": 1,
                "clue": "Long-running animated television sitcom featuring Homer, Marge, Bart, Lisa, and Maggie",
                "answer": "The Simpsons",
                "explanation": "Created by Matt Groening, debuted in 1989.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-6",
                "points": 100,
                "difficulty": 1,
                "clue": "Actor who portrayed Jack Dawson in the 1997 blockbuster movie Titanic",
                "answer": "Leonardo DiCaprio",
                "explanation": "Directed by James Cameron.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-7",
                "points": 100,
                "difficulty": 1,
                "clue": "Superhero alter-ego of billionaire Bruce Wayne in Gotham City",
                "answer": "Batman",
                "explanation": "Created by Bob Kane and Bill Finger in 1939.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-8",
                "points": 100,
                "difficulty": 1,
                "clue": "Hit HBO fantasy drama series based on George R.R. Martin's \"A Song of Ice and Fire\"",
                "answer": "Game of Thrones",
                "explanation": "Ran from 2011 to 2019.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-9",
                "points": 100,
                "difficulty": 1,
                "clue": "The green ogre who lives in a swamp and marries Princess Fiona",
                "answer": "Shrek",
                "explanation": "Voiced by Mike Myers in the DreamWorks franchise.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-10",
                "points": 100,
                "difficulty": 1,
                "clue": "Sci-fi franchise featuring the characters Luke Skywalker, Princess Leia, and Darth Vader",
                "answer": "Star Wars",
                "explanation": "Created by George Lucas in 1977.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-11",
                "points": 100,
                "difficulty": 1,
                "clue": "Dystopian book and movie franchise starring Jennifer Lawrence as Katniss Everdeen",
                "answer": "The Hunger Games",
                "explanation": "Written by Suzanne Collins.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-12",
                "points": 100,
                "difficulty": 1,
                "clue": "Actor who played Neo in \"The Matrix\" and John Wick in the John Wick franchise",
                "answer": "Keanu Reeves",
                "explanation": "Directed by the Wachowskis and Chad Stahelski respectively.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-13",
                "points": 100,
                "difficulty": 1,
                "clue": "Popular sitcom set in Central Perk coffee house featuring Rachel, Monica, Phoebe, Joey, Chandler, and Ross",
                "answer": "Friends",
                "explanation": "Aired for 10 seasons on NBC from 1994 to 2004.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-14",
                "points": 100,
                "difficulty": 1,
                "clue": "The fictional African kingdom ruled by superhero Black Panther (T'Challa)",
                "answer": "Wakanda",
                "explanation": "Known for possessing the world's supply of Vibranium.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-15",
                "points": 100,
                "difficulty": 1,
                "clue": "Animated Disney movie about a young lion prince named Simba",
                "answer": "The Lion King",
                "explanation": "Released in 1994 featuring music by Elton John and Tim Rice.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-16",
                "points": 100,
                "difficulty": 1,
                "clue": "Actor who voiced Woody the cowboy in Pixar's \"Toy Story\"",
                "answer": "Tom Hanks",
                "explanation": "Buzz Lightyear was voiced by Tim Allen.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-17",
                "points": 100,
                "difficulty": 1,
                "clue": "The secret agent known by code number 007 who loves martinis \"shaken, not stirred\"",
                "answer": "James Bond",
                "explanation": "Created by author Ian Fleming in 1953.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-18",
                "points": 100,
                "difficulty": 1,
                "clue": "Sci-fi television franchise featuring Captain James T. Kirk and the starship Enterprise",
                "answer": "Star Trek",
                "explanation": "Created by Gene Roddenberry in 1966.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-19",
                "points": 100,
                "difficulty": 1,
                "clue": "Hit Netflix series about a group of kids in Hawkins, Indiana dealing with the Upside Down",
                "answer": "Stranger Things",
                "explanation": "Created by the Duffer Brothers.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d1-20",
                "points": 100,
                "difficulty": 1,
                "clue": "Actor who played Captain Jack Sparrow in the \"Pirates of the Caribbean\" films",
                "answer": "Johnny Depp",
                "explanation": "First appeared in 2003's The Curse of the Black Pearl.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-1",
                "points": 200,
                "difficulty": 2,
                "clue": "1994 film that won Best Picture starring Tom Hanks as a kindhearted man from Alabama",
                "answer": "Forrest Gump",
                "explanation": "Directed by Robert Zemeckis.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-2",
                "points": 200,
                "difficulty": 2,
                "clue": "The villain who collected six Infinity Stones to wipe out half of all life in Avengers: Infinity War",
                "answer": "Thanos",
                "explanation": "Portrayed via motion capture by Josh Brolin.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-3",
                "points": 200,
                "difficulty": 2,
                "clue": "The name of the coffee shop where the characters in Friends regularly hang out",
                "answer": "Central Perk",
                "explanation": "Managed by Gunther.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-4",
                "points": 200,
                "difficulty": 2,
                "clue": "Director of iconic films including \"Jaws\", \"E.T.\", \"Jurassic Park\", and \"Schindler's List\"",
                "answer": "Steven Spielberg",
                "explanation": "One of the founding pioneers of the New Hollywood era.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-5",
                "points": 200,
                "difficulty": 2,
                "clue": "The fictional universe where Frodo Baggins journeys to Mount Doom to destroy the One Ring",
                "answer": "Middle-earth (The Lord of the Rings)",
                "explanation": "Created by author J.R.R. Tolkien.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-6",
                "points": 200,
                "difficulty": 2,
                "clue": "Actor who portrayed Walter White in AMC's critically acclaimed series \"Breaking Bad\"",
                "answer": "Bryan Cranston",
                "explanation": "Co-starred Aaron Paul as Jesse Pinkman.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-7",
                "points": 200,
                "difficulty": 2,
                "clue": "1999 sci-fi movie in which humanity is trapped in a simulated reality ruled by machines",
                "answer": "The Matrix",
                "explanation": "Stars Keanu Reeves, Laurence Fishburne, and Carrie-Anne Moss.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-8",
                "points": 200,
                "difficulty": 2,
                "clue": "The fictional paper company featured in the American version of \"The Office\"",
                "answer": "Dunder Mifflin",
                "explanation": "Set at the Scranton, Pennsylvania branch.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-9",
                "points": 200,
                "difficulty": 2,
                "clue": "Film director known for mind-bending blockbusters like \"Inception\", \"Interstellar\", and \"Oppenheimer\"",
                "answer": "Christopher Nolan",
                "explanation": "Won Best Director and Best Picture for Oppenheimer in 2024.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-10",
                "points": 200,
                "difficulty": 2,
                "clue": "The fictional continent where the Seven Kingdoms are located in \"Game of Thrones\"",
                "answer": "Westeros",
                "explanation": "Separated from Essos by the Narrow Sea.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-11",
                "points": 200,
                "difficulty": 2,
                "clue": "Actor who played Wolverine in the X-Men film series for over two decades",
                "answer": "Hugh Jackman",
                "explanation": "First played the role in 2000's X-Men.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-12",
                "points": 200,
                "difficulty": 2,
                "clue": "The Fox high school musical television drama series created by Ryan Murphy featuring the New Directions show choir",
                "answer": "Glee",
                "explanation": "Created by Ryan Murphy, Brad Falchuk, and Ian Brennan, running for six seasons.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-13",
                "points": 200,
                "difficulty": 2,
                "clue": "1993 dinosaur thriller based on Michael Crichton's novel, directed by Steven Spielberg",
                "answer": "Jurassic Park",
                "explanation": "Won three Academy Awards for groundbreaking visual and audio effects.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-14",
                "points": 200,
                "difficulty": 2,
                "clue": "The fictional metal bonded to Wolverine's skeleton in Marvel Comics",
                "answer": "Adamantium",
                "explanation": "Virtually indestructible fictional alloy.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-15",
                "points": 200,
                "difficulty": 2,
                "clue": "Actor who won an Oscar for playing the Joker in 2008's \"The Dark Knight\"",
                "answer": "Heath Ledger",
                "explanation": "Awarded posthumously in 2009.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-16",
                "points": 200,
                "difficulty": 2,
                "clue": "Animated series featuring an eccentric scientist and his fretful grandson traveling across dimensions",
                "answer": "Rick and Morty",
                "explanation": "Created by Justin Roiland and Dan Harmon.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-17",
                "points": 200,
                "difficulty": 2,
                "clue": "The 1985 time-travel movie featuring Marty McFly, Doc Brown, and a modified DeLorean",
                "answer": "Back to the Future",
                "explanation": "Directed by Robert Zemeckis, starring Michael J. Fox.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-18",
                "points": 200,
                "difficulty": 2,
                "clue": "Actress who played Hermione Granger in all eight Harry Potter films",
                "answer": "Emma Watson",
                "explanation": "Also starred as Belle in 2017's live-action Beauty and the Beast.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-19",
                "points": 200,
                "difficulty": 2,
                "clue": "The first feature-length computer-animated film released in 1995 by Pixar and Disney",
                "answer": "Toy Story",
                "explanation": "Directed by John Lasseter.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d2-20",
                "points": 200,
                "difficulty": 2,
                "clue": "Crime family saga film from 1972 directed by Francis Ford Coppola starring Marlon Brando",
                "answer": "The Godfather",
                "explanation": "Adapted from Mario Puzo's 1969 bestselling novel.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-1",
                "points": 300,
                "difficulty": 3,
                "clue": "The first movie in history to gross over $2 billion at the worldwide box office",
                "answer": "Avatar (2009)",
                "explanation": "Directed by James Cameron.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-2",
                "points": 300,
                "difficulty": 3,
                "clue": "The fictional newspaper where Clark Kent and Lois Lane work as journalists in Metropolis",
                "answer": "The Daily Planet",
                "explanation": "Edited by Perry White.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-3",
                "points": 300,
                "difficulty": 3,
                "clue": "Actor who played Arthur Fleck in the 2019 film \"Joker\", winning Best Actor",
                "answer": "Joaquin Phoenix",
                "explanation": "Directed by Todd Phillips.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-4",
                "points": 300,
                "difficulty": 3,
                "clue": "The magical wardrobe in C.S. Lewis's fantasy series leads to this enchanted land",
                "answer": "Narnia",
                "explanation": "First introduced in The Lion, the Witch and the Wardrobe in 1950.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-5",
                "points": 300,
                "difficulty": 3,
                "clue": "Director known for \"Pulp Fiction\", \"Kill Bill\", and \"Inglourious Basterds\"",
                "answer": "Quentin Tarantino",
                "explanation": "Known for non-linear storylines and stylized violence.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-6",
                "points": 300,
                "difficulty": 3,
                "clue": "The 1998 Coen brothers cult comedy starring Jeff Bridges as \"The Dude\"",
                "answer": "The Big Lebowski",
                "explanation": "Features John Goodman as Walter Sobchak.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-7",
                "points": 300,
                "difficulty": 3,
                "clue": "The high school attended by Buffy Summers in \"Buffy the Vampire Slayer\"",
                "answer": "Sunnydale High",
                "explanation": "Built directly atop a Hellmouth.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-8",
                "points": 300,
                "difficulty": 3,
                "clue": "The first film to win all five major Academy Awards (Picture, Director, Actor, Actress, Screenplay)",
                "answer": "It Happened One Night (1934)",
                "explanation": "Starred Clark Gable and Claudette Colbert.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-9",
                "points": 300,
                "difficulty": 3,
                "clue": "The alien race that attacks Earth in the 1996 blockbuster film \"Independence Day\"",
                "answer": "Harvesters (Aliens)",
                "explanation": "Will Smith famously punches one and says \"Welcome to Earth\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-10",
                "points": 300,
                "difficulty": 3,
                "clue": "The fictional town in Maine where many of Stephen King's novels, including \"It\", are set",
                "answer": "Derry, Maine",
                "explanation": "Also featured in 11/22/63 and Insomnia.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-11",
                "points": 300,
                "difficulty": 3,
                "clue": "The 1982 blade runner played by Harrison Ford in Ridley Scott's sci-fi classic",
                "answer": "Rick Deckard",
                "explanation": "Based on Philip K. Dick's Do Androids Dream of Electric Sheep?",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-12",
                "points": 300,
                "difficulty": 3,
                "clue": "The character played by Sigourney Weaver in the \"Alien\" film franchise",
                "answer": "Ellen Ripley",
                "explanation": "Debuted in Ridley Scott's 1979 film Alien.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-13",
                "points": 300,
                "difficulty": 3,
                "clue": "The animated spy comedy series featuring secret agent Sterling Mallory and his domineering mother Malory",
                "answer": "Archer",
                "explanation": "Created by Adam Reed for FX, running for 14 seasons.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-14",
                "points": 300,
                "difficulty": 3,
                "clue": "The 1975 thriller that is widely credited with inventing the modern summer blockbuster concept",
                "answer": "Jaws",
                "explanation": "Scored by John Williams featuring the famous two-note theme.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-15",
                "points": 300,
                "difficulty": 3,
                "clue": "Actress who won two Best Actress Oscars for \"The Silence of the Lambs\" and \"The Accused\"",
                "answer": "Jodie Foster",
                "explanation": "Played Clarice Starling opposite Anthony Hopkins's Hannibal Lecter.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-16",
                "points": 300,
                "difficulty": 3,
                "clue": "The fictional bar where everybody knows your name in an 11-season NBC sitcom",
                "answer": "Cheers",
                "explanation": "Set in Boston, Massachusetts, starring Ted Danson.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-17",
                "points": 300,
                "difficulty": 3,
                "clue": "The fictional prison where Tim Robbins's character Andy Dufresne is incarcerated in a 1994 film",
                "answer": "Shawshank State Penitentiary",
                "explanation": "Adapted from Stephen King's novella.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-18",
                "points": 300,
                "difficulty": 3,
                "clue": "The fictional metal used by Wakandans to absorb and store kinetic energy",
                "answer": "Vibranium",
                "explanation": "Captain America's shield is made of a vibranium-steel alloy.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-19",
                "points": 300,
                "difficulty": 3,
                "clue": "The 2019 South Korean black comedy thriller that became the first non-English film to win Best Picture",
                "answer": "Parasite",
                "explanation": "Directed by Bong Joon-ho.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d3-20",
                "points": 300,
                "difficulty": 3,
                "clue": "The dystopian city governed by Omni Consumer Products where the 1987 cyborg cop operates",
                "answer": "Detroit (RoboCop)",
                "explanation": "Directed by Paul Verhoeven, starring Peter Weller.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-1",
                "points": 400,
                "difficulty": 4,
                "clue": "The 1941 cinematic masterpiece directed by, produced by, and starring 25-year-old Orson Welles",
                "answer": "Citizen Kane",
                "explanation": "Famous for the mystery of \"Rosebud\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-2",
                "points": 400,
                "difficulty": 4,
                "clue": "The name of the artificial intelligence computer aboard the Discovery One in \"2001: A Space Odyssey\"",
                "answer": "HAL 9000",
                "explanation": "Voiced by Canadian actor Douglas Rain.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-3",
                "points": 400,
                "difficulty": 4,
                "clue": "The fictional British secret intelligence agency featured in the \"Kingsman\" film franchise",
                "answer": "Kingsman (Tailor Shop)",
                "explanation": "Created by Mark Millar and Matthew Vaughn.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-4",
                "points": 400,
                "difficulty": 4,
                "clue": "The actor who played the eccentric chocolate maker Willy Wonka in the 1971 musical film adaptation",
                "answer": "Gene Wilder",
                "explanation": "Directed by Mel Stuart.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-5",
                "points": 400,
                "difficulty": 4,
                "clue": "The three films that share the record for most Academy Awards won by a single movie (11 Oscars)",
                "answer": "Ben-Hur (1959), Titanic (1997), and The Return of the King (2003)",
                "explanation": "All three swept their respective Oscar ceremonies.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-6",
                "points": 400,
                "difficulty": 4,
                "clue": "The original title of George Lucas's Star Wars: Episode VI before it was changed prior to release",
                "answer": "Revenge of the Jedi",
                "explanation": "Changed because Lucas felt Jedi do not seek revenge.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-7",
                "points": 400,
                "difficulty": 4,
                "clue": "The prestigious cinema award presented at the Cannes Film Festival for the best feature film",
                "answer": "Palme d'Or (Golden Palm)",
                "explanation": "First introduced in 1955.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-8",
                "points": 400,
                "difficulty": 4,
                "clue": "The fictional high school where the 2004 teen comedy \"Mean Girls\" takes place",
                "answer": "North Shore High School",
                "explanation": "Written by Tina Fey.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-9",
                "points": 400,
                "difficulty": 4,
                "clue": "The character played by Humphrey Bogart who runs a nightclub in 1942's \"Casablanca\"",
                "answer": "Rick Blaine",
                "explanation": "Opposite Ingrid Bergman as Ilsa Lund.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-10",
                "points": 400,
                "difficulty": 4,
                "clue": "The fictional crime boss known as \"Keyser Soze\" in the 1995 neo-noir mystery \"The Usual Suspects\"",
                "answer": "Verbal Kint (Kevin Spacey)",
                "explanation": "Directed by Bryan Singer, written by Christopher McQuarrie.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-11",
                "points": 400,
                "difficulty": 4,
                "clue": "The hotel in Colorado where Jack Torrance descends into madness in Stanley Kubrick's \"The Shining\"",
                "answer": "The Overlook Hotel",
                "explanation": "Inspired by the real Stanley Hotel in Estes Park, Colorado.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-12",
                "points": 400,
                "difficulty": 4,
                "clue": "The 1960 psychological horror film directed by Alfred Hitchcock starring Anthony Perkins as Norman Bates",
                "answer": "Psycho",
                "explanation": "Famous for the shower murder scene.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-13",
                "points": 400,
                "difficulty": 4,
                "clue": "The 2000 martial arts epic directed by Ang Lee that won four Oscars including Best Foreign Language Film",
                "answer": "Crouching Tiger, Hidden Dragon",
                "explanation": "Starred Chow Yun-fat, Michelle Yeoh, and Zhang Ziyi.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-14",
                "points": 400,
                "difficulty": 4,
                "clue": "The 1984 horror film featuring the dream-stalking killer Freddy Krueger with razor-gloved hands",
                "answer": "A Nightmare on Elm Street",
                "explanation": "Created and directed by Wes Craven.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-15",
                "points": 400,
                "difficulty": 4,
                "clue": "The fictional newspaper published by J. Jonah Jameson in Marvel's Spider-Man comics",
                "answer": "The Daily Bugle",
                "explanation": "Famous for demanding \"pictures of Spider-Man!\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-16",
                "points": 400,
                "difficulty": 4,
                "clue": "The famous screenwriting duo who created and wrote the classic comedies \"Airplane!\" and \"The Naked Gun\"",
                "answer": "ZAZ (Zucker, Abrahams and Zucker)",
                "explanation": "Jim Abrahams, David Zucker, and Jerry Zucker.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-17",
                "points": 400,
                "difficulty": 4,
                "clue": "The 1976 boxing drama written by and starring Sylvester Stallone that won Best Picture",
                "answer": "Rocky",
                "explanation": "Shot in 28 days on a budget of just over $1 million.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-18",
                "points": 400,
                "difficulty": 4,
                "clue": "The eccentric director of films like \"Edward Scissorhands\", \"Beetlejuice\", and \"The Nightmare Before Christmas\"",
                "answer": "Tim Burton",
                "explanation": "Known for Gothic, whimsical dark fantasy aesthetics.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-19",
                "points": 400,
                "difficulty": 4,
                "clue": "The 1968 post-apocalyptic sci-fi film where Charlton Heston discovers the ruined Statue of Liberty",
                "answer": "Planet of the Apes",
                "explanation": "Directed by Franklin J. Schaffner.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d4-20",
                "points": 400,
                "difficulty": 4,
                "clue": "The legendary stop-motion animation pioneer responsible for the skeleton army in \"Jason and the Argonauts\"",
                "answer": "Ray Harryhausen",
                "explanation": "Pioneered the \"Dynamation\" visual effects technique.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-1",
                "points": 500,
                "difficulty": 5,
                "clue": "The first actor to receive a posthumous Academy Award nomination for Best Actor (1955 for East of Eden)",
                "answer": "James Dean",
                "explanation": "He was also nominated posthumously for Giant (1956).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-2",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1927 silent film directed by Fritz Lang that is considered the pioneering foundational masterpiece of sci-fi cinema",
                "answer": "Metropolis",
                "explanation": "Featured the iconic robotic character Maria (Maschinenmensch).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-3",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1948 Italian neorealist film directed by Vittorio De Sica about an impoverished father whose bicycle is stolen",
                "answer": "Bicycle Thieves (Ladri di biciclette)",
                "explanation": "Cast entirely with non-professional actors.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-4",
                "points": 500,
                "difficulty": 5,
                "clue": "The name of the mechanical shark used during the filming of Steven Spielberg's 1975 thriller \"Jaws\"",
                "answer": "Bruce",
                "explanation": "Named after Spielberg's attorney, Bruce Ramer.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-5",
                "points": 500,
                "difficulty": 5,
                "clue": "The French New Wave director whose 1960 debut \"Breathless\" (A bout de souffle) popularized jump cuts",
                "answer": "Jean-Luc Godard",
                "explanation": "Starred Jean-Paul Belmondo and Jean Seberg.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-6",
                "points": 500,
                "difficulty": 5,
                "clue": "The fictional spaceship commanded by Captain Dallas in Ridley Scott's 1979 film \"Alien\"",
                "answer": "USCSS Nostromo",
                "explanation": "Commercial towing vehicle carrying 20 million tons of mineral ore.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-7",
                "points": 500,
                "difficulty": 5,
                "clue": "The sound designer who created the lightsaber hum, Darth Vader's breathing, and Chewbacca's roar in Star Wars",
                "answer": "Ben Burtt",
                "explanation": "Created the lightsaber sound using projector motor hum and TV interference.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-8",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1928 French surrealist short film directed by Luis Bunuel and Salvador Dali featuring a sliced eyeball",
                "answer": "Un Chien Andalou",
                "explanation": "Pioneered avant-garde surrealist cinema.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-9",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1966 epic spaghetti western that concluded Sergio Leone's \"Dollars Trilogy\"",
                "answer": "The Good, the Bad and the Ugly",
                "explanation": "Starred Clint Eastwood, Lee Van Cleef, and Eli Wallach.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-10",
                "points": 500,
                "difficulty": 5,
                "clue": "The Japanese cinematic auteur who directed \"Seven Samurai\", \"Rashomon\", and \"Ran\"",
                "answer": "Akira Kurosawa",
                "explanation": "His films deeply influenced Westerns and Star Wars.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-11",
                "points": 500,
                "difficulty": 5,
                "clue": "The first animated short to feature synchronized sound, introducing Mickey Mouse to audiences in 1928",
                "answer": "Steamboat Willie",
                "explanation": "Directed by Walt Disney and Ub Iwerks.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-12",
                "points": 500,
                "difficulty": 5,
                "clue": "The fictional town in Oregon where the 1985 adventure film \"The Goonies\" takes place",
                "answer": "Astoria, Oregon (The Goon Docks)",
                "explanation": "Written by Chris Columbus from a story by Steven Spielberg.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-13",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1957 Swedish psychological drama directed by Ingmar Bergman where a knight plays chess against Death",
                "answer": "The Seventh Seal (Det sjunde inseglet)",
                "explanation": "Starred Max von Sydow as knight Antonius Block.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-14",
                "points": 500,
                "difficulty": 5,
                "clue": "The fictional corporation that manufactured the replicants in Ridley Scott's 1982 film \"Blade Runner\"",
                "answer": "Tyrell Corporation",
                "explanation": "Headed by Dr. Eldon Tyrell with the motto \"More human than human\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-15",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1950 Billy Wilder film noir starring Gloria Swanson as faded silent film star Norma Desmond",
                "answer": "Sunset Boulevard",
                "explanation": "Features the famous line \"I am big. It's the pictures that got small.\"",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-16",
                "points": 500,
                "difficulty": 5,
                "clue": "The real name of the iconic monster created by Mary Shelley, often mistakenly called \"Frankenstein\"",
                "answer": "The Monster / Creature (Frankenstein's Monster)",
                "explanation": "Victor Frankenstein was the scientist who created him.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-17",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1973 horror classic directed by William Friedkin that was the first horror film nominated for Best Picture",
                "answer": "The Exorcist",
                "explanation": "Adapted by William Peter Blatty from his own novel.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-18",
                "points": 500,
                "difficulty": 5,
                "clue": "The actress who won four Academy Awards for Best Actress, the most in cinematic history",
                "answer": "Katharine Hepburn",
                "explanation": "Won for Morning Glory, Guess Who's Coming to Dinner, The Lion in Winter, and On Golden Pond.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-19",
                "points": 500,
                "difficulty": 5,
                "clue": "The 1922 unauthorized German silent adaptation of Bram Stoker's Dracula directed by F.W. Murnau",
                "answer": "Nosferatu (Nosferatu, eine Symphonie des Grauens)",
                "explanation": "Starred Max Schreck as Count Orlok.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "pop-d5-20",
                "points": 500,
                "difficulty": 5,
                "clue": "The famous 1968 Stanley Kubrick film that used the classical piece \"The Blue Danube\" during a space docking sequence",
                "answer": "2001: A Space Odyssey",
                "explanation": "Composed by Johann Strauss II.",
                "image": "",
                "dailyDouble": false
              }
            ]
          },
          {
            "id": "cat-tech",
            "name": "Inventions & Technology",
            "clues": [
              {
                "id": "tech-d1-1",
                "points": 100,
                "difficulty": 1,
                "clue": "He co-founded Apple Inc. alongside Steve Wozniak and introduced the original iPhone in 2007",
                "answer": "Steve Jobs",
                "explanation": "Steve Jobs revealed the revolutionary iPhone on January 9, 2007.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-2",
                "points": 100,
                "difficulty": 1,
                "clue": "This search engine giant founded by Larry Page and Sergey Brin began as a research project at Stanford",
                "answer": "Google",
                "explanation": "Google was incorporated in September 1998.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-3",
                "points": 100,
                "difficulty": 1,
                "clue": "What does the acronym \"PC\" typically stand for in computing?",
                "answer": "Personal Computer",
                "explanation": "The term became widespread with the IBM PC in 1981.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-4",
                "points": 100,
                "difficulty": 1,
                "clue": "Short for \"wireless fidelity\", this technology allows devices to connect to local networks wirelessly",
                "answer": "Wi-Fi",
                "explanation": "Wi-Fi standards are maintained by the IEEE 802.11 group.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-5",
                "points": 100,
                "difficulty": 1,
                "clue": "This short-range wireless technology named after a 10th-century Scandinavian king connects earbuds and keyboards",
                "answer": "Bluetooth",
                "explanation": "Named after King Harald Bluetooth who united Scandinavian tribes.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-6",
                "points": 100,
                "difficulty": 1,
                "clue": "This company created the Windows operating system and was founded by Bill Gates and Paul Allen",
                "answer": "Microsoft",
                "explanation": "Microsoft was founded in Albuquerque, New Mexico in 1975.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-7",
                "points": 100,
                "difficulty": 1,
                "clue": "What does the abbreviation \"URL\" stand for when browsing the web?",
                "answer": "Uniform Resource Locator",
                "explanation": "A URL specifies the address of a resource on the internet.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-8",
                "points": 100,
                "difficulty": 1,
                "clue": "This handheld e-reader device was launched by Amazon in November 2007",
                "answer": "Kindle",
                "explanation": "The first Kindle sold out within five and a half hours.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-9",
                "points": 100,
                "difficulty": 1,
                "clue": "In computer terminology, what does \"RAM\" stand for?",
                "answer": "Random Access Memory",
                "explanation": "RAM serves as the fast volatile temporary memory for running processes.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-10",
                "points": 100,
                "difficulty": 1,
                "clue": "This American social media network was founded in 2004 by Mark Zuckerberg at Harvard University",
                "answer": "Facebook",
                "explanation": "Now owned by parent company Meta Platforms.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-11",
                "points": 100,
                "difficulty": 1,
                "clue": "What popular video sharing platform was acquired by Google in 2006 for $1.65 billion?",
                "answer": "YouTube",
                "explanation": "YouTube was created by former PayPal employees Chad Hurley, Steve Chen, and Jawed Karim.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-12",
                "points": 100,
                "difficulty": 1,
                "clue": "What does \"USB\" stand for in hardware connection cables?",
                "answer": "Universal Serial Bus",
                "explanation": "USB was standardized in 1996 to replace multiple legacy serial and parallel ports.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-13",
                "points": 100,
                "difficulty": 1,
                "clue": "What tiny blinking symbol on a screen marks the position where typed characters will appear?",
                "answer": "Cursor",
                "explanation": "Also sometimes called the caret in text editing.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-14",
                "points": 100,
                "difficulty": 1,
                "clue": "Which mobile operating system features an iconic green robot mascot?",
                "answer": "Android",
                "explanation": "Android was acquired by Google in 2005.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-15",
                "points": 100,
                "difficulty": 1,
                "clue": "What does \"SMS\" stand for in cellular mobile messaging?",
                "answer": "Short Message Service",
                "explanation": "The first SMS text message was sent in December 1992.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-16",
                "points": 100,
                "difficulty": 1,
                "clue": "This electric car and aerospace pioneer founded Tesla, SpaceX, and Neuralink",
                "answer": "Elon Musk",
                "explanation": "Musk joined Tesla in 2004 and became CEO in 2008.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-17",
                "points": 100,
                "difficulty": 1,
                "clue": "What common input device was invented by Douglas Engelbart in the 1960s using a wooden shell and wheels?",
                "answer": "Computer Mouse",
                "explanation": "Engelbart demonstrated the mouse in \"The Mother of All Demos\" in 1968.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-18",
                "points": 100,
                "difficulty": 1,
                "clue": "What keyboard shortcut is universally used to copy highlighted text on Windows PCs?",
                "answer": "Ctrl + C",
                "explanation": "Ctrl + C copies, while Ctrl + V pastes.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-19",
                "points": 100,
                "difficulty": 1,
                "clue": "This online retail store started in 1994 primarily as an online bookstore operating out of Jeff Bezos's garage",
                "answer": "Amazon",
                "explanation": "Amazon was originally incorporated as Cadabra before rebranding.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d1-20",
                "points": 100,
                "difficulty": 1,
                "clue": "What does \"CPU\" stand for in computing architecture?",
                "answer": "Central Processing Unit",
                "explanation": "The CPU is often referred to as the brain of the computer.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-1",
                "points": 200,
                "difficulty": 2,
                "clue": "British scientist Tim Berners-Lee invented this information sharing system at CERN in 1989",
                "answer": "World Wide Web",
                "explanation": "Berners-Lee authored HTML, HTTP, and the first web client and server.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-2",
                "points": 200,
                "difficulty": 2,
                "clue": "What open-source operating system kernel was created by Finnish student Linus Torvalds in 1991?",
                "answer": "Linux",
                "explanation": "Linux powers Android, supercomputers, cloud servers, and IoT devices worldwide.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-3",
                "points": 200,
                "difficulty": 2,
                "clue": "What does the abbreviation \"SSD\" stand for in modern storage drives?",
                "answer": "Solid State Drive",
                "explanation": "SSDs use flash memory without spinning magnetic platters.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-4",
                "points": 200,
                "difficulty": 2,
                "clue": "This company introduced the iconic Walkman portable cassette player in 1979",
                "answer": "Sony",
                "explanation": "The Walkman transformed personal music consumption on the go.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-5",
                "points": 200,
                "difficulty": 2,
                "clue": "In 1997, this IBM supercomputer defeated World Chess Champion Garry Kasparov in a six-game match",
                "answer": "Deep Blue",
                "explanation": "Deep Blue became the first computer system to defeat a reigning world champion under tournament conditions.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-6",
                "points": 200,
                "difficulty": 2,
                "clue": "What does \"GPU\" stand for, specialized in rendering 3D graphics and training AI neural networks?",
                "answer": "Graphics Processing Unit",
                "explanation": "Nvidia popularized the term GPU with the release of the GeForce 256 in 1999.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-7",
                "points": 200,
                "difficulty": 2,
                "clue": "This programming language designed by James Gosling at Sun Microsystems features the slogan \"Write once, run anywhere\"",
                "answer": "Java",
                "explanation": "Java debuted in 1995 with its JVM (Java Virtual Machine) cross-platform model.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-8",
                "points": 200,
                "difficulty": 2,
                "clue": "What does \"HTML\" stand for in web markup development?",
                "answer": "Hypertext Markup Language",
                "explanation": "HTML provides the structural skeleton of web documents.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-9",
                "points": 200,
                "difficulty": 2,
                "clue": "In networking, what does \"IP\" stand for in IP address?",
                "answer": "Internet Protocol",
                "explanation": "IP addresses uniquely identify devices on local or global networks.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-10",
                "points": 200,
                "difficulty": 2,
                "clue": "Which video game home console released by Nintendo in 2006 popularized motion-controlled gaming?",
                "answer": "Nintendo Wii",
                "explanation": "The Wii sold over 101 million units worldwide.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-11",
                "points": 200,
                "difficulty": 2,
                "clue": "What does \"PDF\" stand for, the cross-platform document format developed by Adobe?",
                "answer": "Portable Document Format",
                "explanation": "Adobe introduced the PDF format in 1993.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-12",
                "points": 200,
                "difficulty": 2,
                "clue": "This company was founded by Gordon Moore and Robert Noyce and dominates microprocessors for PCs",
                "answer": "Intel",
                "explanation": "Intel introduced the world’s first commercial microprocessor, the 4004, in 1971.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-13",
                "points": 200,
                "difficulty": 2,
                "clue": "What popular file format for digital audio was developed by the Fraunhofer Society and released in 1993?",
                "answer": "MP3",
                "explanation": "MP3 uses lossy data compression based on psychoacoustic modeling.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-14",
                "points": 200,
                "difficulty": 2,
                "clue": "What does \"VPN\" stand for, creating an encrypted tunnel across public networks?",
                "answer": "Virtual Private Network",
                "explanation": "VPNs protect user privacy and secure enterprise remote connections.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-15",
                "points": 200,
                "difficulty": 2,
                "clue": "What web browser launched by Netscape in 1994 kicked off the first browser war against Internet Explorer?",
                "answer": "Netscape Navigator",
                "explanation": "Netscape was based on the earlier NCSA Mosaic browser.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-16",
                "points": 200,
                "difficulty": 2,
                "clue": "What digital camera component converts optical images into electrical signals, abbreviated \"CMOS\" or \"CCD\"?",
                "answer": "Image Sensor",
                "explanation": "Complementary Metal-Oxide Semiconductor (CMOS) sensors dominate modern phones and cameras.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-17",
                "points": 200,
                "difficulty": 2,
                "clue": "What does \"LAN\" stand for in local telecommunications and computer setups?",
                "answer": "Local Area Network",
                "explanation": "A LAN connects computers within a limited area such as a school, office, or residence.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-18",
                "points": 200,
                "difficulty": 2,
                "clue": "This popular open-source version control system was designed by Linus Torvalds in 2005 to manage Linux kernel code",
                "answer": "Git",
                "explanation": "Git revolutionized distributed source code collaboration.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-19",
                "points": 200,
                "difficulty": 2,
                "clue": "What does \"SaaS\" stand for in cloud computing business models?",
                "answer": "Software as a Service",
                "explanation": "SaaS delivers software applications over the internet on a subscription basis.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d2-20",
                "points": 200,
                "difficulty": 2,
                "clue": "What high-definition optical disc format won the formats war against HD DVD in 2008?",
                "answer": "Blu-ray",
                "explanation": "Blu-ray was backed by Sony and utilizes a 405nm blue-violet laser.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-1",
                "points": 300,
                "difficulty": 3,
                "clue": "He is widely regarded as the \"father of computer science\" and cracked the Enigma code at Bletchley Park",
                "answer": "Alan Turing",
                "explanation": "Turing formalized the concepts of algorithm and computation with the Turing machine.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-2",
                "points": 300,
                "difficulty": 3,
                "clue": "What high-level programming language created by Guido van Rossum in 1991 is named after a British comedy troupe?",
                "answer": "Python",
                "explanation": "Named after Monty Python's Flying Circus.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-3",
                "points": 300,
                "difficulty": 3,
                "clue": "What predecessor network created by the US Department of Defense in 1969 became the technical foundation of the internet?",
                "answer": "ARPANET",
                "explanation": "ARPANET transmitted its first message between UCLA and Stanford in October 1969.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-4",
                "points": 300,
                "difficulty": 3,
                "clue": "What does the cybersecurity acronym \"DDoS\" stand for in cyber attacks?",
                "answer": "Distributed Denial of Service",
                "explanation": "DDoS attacks overwhelm network servers with flood traffic from thousands of compromised nodes.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-5",
                "points": 300,
                "difficulty": 3,
                "clue": "Which pioneer developed the compiler for programming languages and popularized the term \"debugging\"?",
                "answer": "Grace Hopper",
                "explanation": "Rear Admiral Grace Hopper worked on the Harvard Mark I and developed FLOW-MATIC, leading to COBOL.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-6",
                "points": 300,
                "difficulty": 3,
                "clue": "In typography and text encoding, what does \"ASCII\" stand for?",
                "answer": "American Standard Code for Information Interchange",
                "explanation": "ASCII was published in 1963 using 7-bit encoding for 128 characters.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-7",
                "points": 300,
                "difficulty": 3,
                "clue": "What optical transmission medium uses glass or plastic strands to transmit data as pulses of light at high speed?",
                "answer": "Fiber Optic Cable",
                "explanation": "Fiber optics enable terabits per second across transoceanic submarine cables.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-8",
                "points": 300,
                "difficulty": 3,
                "clue": "What semiconductor device invented at Bell Labs in 1947 by Bardeen, Brattain, and Shockley replaced bulky vacuum tubes?",
                "answer": "Transistor",
                "explanation": "The transistor is hailed as one of the greatest inventions of the 20th century.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-9",
                "points": 300,
                "difficulty": 3,
                "clue": "What cryptographic concept allows two parties to encrypt messages using a public key and private key pair?",
                "answer": "Asymmetric Encryption",
                "explanation": "Also known as public-key cryptography, pioneered by Diffie, Hellman, Rivest, Shamir, and Adleman.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-10",
                "points": 300,
                "difficulty": 3,
                "clue": "What was the name of the first electronic general-purpose digital computer, completed at the University of Pennsylvania in 1945?",
                "answer": "ENIAC",
                "explanation": "Electronic Numerical Integrator and Computer occupied 1,800 square feet.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-11",
                "points": 300,
                "difficulty": 3,
                "clue": "What database query language was developed at IBM by Donald D. Chamberlin and Raymond F. Boyce in the early 1970s?",
                "answer": "SQL",
                "explanation": "Structured Query Language (originally SEQUEL) manages relational databases.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-12",
                "points": 300,
                "difficulty": 3,
                "clue": "What breakthrough deep learning architecture introduced in the 2017 paper \"Attention Is All You Need\" powers GPT and modern LLMs?",
                "answer": "Transformer",
                "explanation": "Transformers replaced recurrent neural networks through self-attention mechanisms.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-13",
                "points": 300,
                "difficulty": 3,
                "clue": "What wireless networking frequency band was introduced alongside 2.4 GHz to reduce congestion in modern Wi-Fi routers?",
                "answer": "5 GHz",
                "explanation": "5 GHz offers higher bandwidth with shorter physical range than 2.4 GHz.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-14",
                "points": 300,
                "difficulty": 3,
                "clue": "What programming language created by Dennis Ritchie at Bell Labs between 1972 and 1973 was used to write the Unix operating system?",
                "answer": "C",
                "explanation": "C remains one of the most influential programming languages in history.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-15",
                "points": 300,
                "difficulty": 3,
                "clue": "What standard character encoding system supports over 150,000 characters covering all modern and historic world scripts?",
                "answer": "Unicode",
                "explanation": "UTF-8 is the dominant web encoding for Unicode.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-16",
                "points": 300,
                "difficulty": 3,
                "clue": "What mobile telecommunications standard introduced in the late 2010s offers gigabit peak download speeds and ultra-low latency?",
                "answer": "5G",
                "explanation": "5G uses millimeter-wave frequencies and massive MIMO.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-17",
                "points": 300,
                "difficulty": 3,
                "clue": "What open-source software containerization platform was introduced by Solomon Hykes and launched in 2013?",
                "answer": "Docker",
                "explanation": "Docker packages applications and dependencies into isolated lightweight containers.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-18",
                "points": 300,
                "difficulty": 3,
                "clue": "What mathematical principle states that the number of transistors on a microchip doubles roughly every two years?",
                "answer": "Moore's Law",
                "explanation": "Gordon Moore made this observation in 1965.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-19",
                "points": 300,
                "difficulty": 3,
                "clue": "What device converts analog electrical signals from telephone or cable lines into digital data for home routers?",
                "answer": "Modem",
                "explanation": "Modem is short for Modulator-Demodulator.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d3-20",
                "points": 300,
                "difficulty": 3,
                "clue": "What security protocol succeeded SSL (Secure Sockets Layer) to encrypt web traffic on HTTPS connections?",
                "answer": "TLS",
                "explanation": "Transport Layer Security ensures privacy and data integrity between clients and servers.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-1",
                "points": 400,
                "difficulty": 4,
                "clue": "Considered the world's first computer programmer, she wrote an algorithm for Charles Babbage's Analytical Engine in 1843",
                "answer": "Ada Lovelace",
                "explanation": "Lovelace translated and annotated Menabrea's paper, envisioning computers processing beyond mere numbers.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-2",
                "points": 400,
                "difficulty": 4,
                "clue": "Which Bell Labs researcher created the C++ programming language in 1979 as an extension of C with classes?",
                "answer": "Bjarne Stroustrup",
                "explanation": "C++ added object-oriented programming paradigms, memory control, and strong typing.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-3",
                "points": 400,
                "difficulty": 4,
                "clue": "What 19th-century mechanical computing engine designed by Charles Babbage was designed to tabulate polynomial functions?",
                "answer": "Difference Engine",
                "explanation": "Babbage designed the Difference Engine and later the Turing-complete Analytical Engine.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-4",
                "points": 400,
                "difficulty": 4,
                "clue": "In computer memory hierarchy, what small, ultra-fast static memory integrated on CPU silicon bridges registers and RAM?",
                "answer": "Cache",
                "explanation": "Modern CPUs feature L1, L2, and L3 cache hierarchies.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-5",
                "points": 400,
                "difficulty": 4,
                "clue": "What consensus mechanism is used by the Bitcoin network to validate transactions and secure the blockchain ledger?",
                "answer": "Proof of Work",
                "explanation": "Proof of Work requires miners to solve computationally intensive SHA-256 puzzles.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-6",
                "points": 400,
                "difficulty": 4,
                "clue": "What Unix command-line text editor was originally written by Bill Joy in 1976 and later evolved into Vim?",
                "answer": "vi",
                "explanation": "Bill Joy wrote vi for early BSD releases.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-7",
                "points": 400,
                "difficulty": 4,
                "clue": "What lithography technique using 13.5 nanometer wavelength light is essential for manufacturing chips below 7 nanometers?",
                "answer": "EUV",
                "explanation": "Extreme Ultraviolet (EUV) lithography machines are manufactured by ASML in the Netherlands.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-8",
                "points": 400,
                "difficulty": 4,
                "clue": "Who invented the relational database model while working at IBM in his landmark 1970 paper?",
                "answer": "Edgar F. Codd",
                "explanation": "E.F. Codd formulated relational algebra and database normalization.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-9",
                "points": 400,
                "difficulty": 4,
                "clue": "What protocol assigns dynamic IP addresses automatically to devices when they join a local network?",
                "answer": "DHCP",
                "explanation": "Dynamic Host Configuration Protocol handles automatic IP, gateway, and DNS configuration.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-10",
                "points": 400,
                "difficulty": 4,
                "clue": "In 1973, which Xerox research center developed the Alto, featuring the first GUI, desktop metaphor, and Ethernet?",
                "answer": "PARC",
                "explanation": "Palo Alto Research Center (Xerox PARC) pioneered the modern GUI, mouse, and laser printing.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-11",
                "points": 400,
                "difficulty": 4,
                "clue": "What type of non-volatile flash memory architecture is used for bulk solid-state storage due to high density and lower cost?",
                "answer": "NAND",
                "explanation": "NAND flash contrasts with NOR flash which supports random byte access for firmware execution.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-12",
                "points": 400,
                "difficulty": 4,
                "clue": "Which algorithm developed by Ronald Rivest in 1991 produces a 128-bit cryptographic hash digest, now considered insecure for security?",
                "answer": "MD5",
                "explanation": "MD5 was widely used for file checksum verification before collision vulnerabilities were found.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-13",
                "points": 400,
                "difficulty": 4,
                "clue": "What theoretical limit in computer science describes a problem whose solution can be verified in polynomial time?",
                "answer": "NP",
                "explanation": "Nondeterministic Polynomial time; the P versus NP problem remains a Millennium Prize Problem.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-14",
                "points": 400,
                "difficulty": 4,
                "clue": "Who developed the RSA public-key cryptosystem in 1977 alongside Adi Shamir and Leonard Adleman?",
                "answer": "Ron Rivest",
                "explanation": "The RSA initials represent Rivest, Shamir, and Adleman.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-15",
                "points": 400,
                "difficulty": 4,
                "clue": "What high-performance in-memory key-value data store was created by Salvatore Sanfilippo in 2009?",
                "answer": "Redis",
                "explanation": "Redis stands for Remote Dictionary Server and supports pub/sub, sets, and caching.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-16",
                "points": 400,
                "difficulty": 4,
                "clue": "What optical sensor technology emits pulsed laser beams to measure distances and create 3D maps for autonomous vehicles?",
                "answer": "LiDAR",
                "explanation": "Light Detection and Ranging is widely deployed in self-driving cars, drones, and robotics.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-17",
                "points": 400,
                "difficulty": 4,
                "clue": "What mathematical function compresses input data of arbitrary size into a fixed-length string of characters?",
                "answer": "Hash Function",
                "explanation": "Cryptographic hash functions include SHA-256 and BLAKE3.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-18",
                "points": 400,
                "difficulty": 4,
                "clue": "What 1982 protocol standard defines how electronic musical instruments and synthesizers communicate with computers?",
                "answer": "MIDI",
                "explanation": "Musical Instrument Digital Interface standardized music digital messaging.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-19",
                "points": 400,
                "difficulty": 4,
                "clue": "What semiconductor material is being adopted in power electronics and EV chargers to operate at higher voltages and temperatures than silicon?",
                "answer": "Gallium Nitride",
                "explanation": "Gallium Nitride (GaN) and Silicon Carbide (SiC) are wide bandgap semiconductors.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d4-20",
                "points": 400,
                "difficulty": 4,
                "clue": "What machine learning technique trains a generator and a discriminator network in competition, introduced by Ian Goodfellow in 2014?",
                "answer": "GAN",
                "explanation": "Generative Adversarial Networks (GANs) revolutionized photorealistic synthetic media generation.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-1",
                "points": 500,
                "difficulty": 5,
                "clue": "What electromechanical calculating machine built by Konrad Zuse in Berlin in 1941 was the world's first working programmable, fully automatic digital computer?",
                "answer": "Z3",
                "explanation": "The Z3 used 2,000 telephone relays and operated on binary floating-point numbers.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-2",
                "points": 500,
                "difficulty": 5,
                "clue": "What low-level instruction set architecture developed at UC Berkeley in 2010 is royalty-free and open-source?",
                "answer": "RISC-V",
                "explanation": "RISC-V provides an open alternative to proprietary x86 and ARM architectures.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-3",
                "points": 500,
                "difficulty": 5,
                "clue": "What was the name of the first operational optical laser, demonstrated by Theodore Maiman in May 1960 at Hughes Research Laboratories?",
                "answer": "Ruby Laser",
                "explanation": "Maiman used a synthetic ruby rod pumped by a flashlamp to emit coherent deep-red light at 694.3 nm.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-4",
                "points": 500,
                "difficulty": 5,
                "clue": "Who authored the seminal 1948 paper \"A Mathematical Theory of Communication\", founding the field of Information Theory?",
                "answer": "Claude Shannon",
                "explanation": "Shannon introduced the concept of the \"bit\" as the fundamental unit of information.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-5",
                "points": 500,
                "difficulty": 5,
                "clue": "What was the codename of the groundbreaking 64-bit microprocessor architecture jointly developed by HP and Intel, known as IA-64?",
                "answer": "Itanium",
                "explanation": "Itanium utilized Explicitly Parallel Instruction Computing (EPIC) but faced commercial struggles against AMD64.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-6",
                "points": 500,
                "difficulty": 5,
                "clue": "In distributed systems, what theorem formulated by Eric Brewer states that a distributed data store can simultaneously provide at most two out of Consistency, Availability, and Partition tolerance?",
                "answer": "CAP Theorem",
                "explanation": "Brewer proposed the CAP conjecture in 2000, which was formally proven by Lynch and Gilbert in 2002.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-7",
                "points": 500,
                "difficulty": 5,
                "clue": "What breakthrough error-detecting code algorithm invented by Richard Hamming in 1950 can detect and correct single-bit memory errors?",
                "answer": "Hamming Code",
                "explanation": "Hamming codes use parity bits mapped to powers of two to detect and pinpoint errors.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-8",
                "points": 500,
                "difficulty": 5,
                "clue": "What was the name of the first computer worm distributed over the internet, unleashed in November 1988 by a Cornell graduate student?",
                "answer": "Morris Worm",
                "explanation": "Robert Tappan Morris created the worm, which inadvertently crashed thousands of Unix systems.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-9",
                "points": 500,
                "difficulty": 5,
                "clue": "What is the name of the superconducting quantum computer processor unveiled by Google in 2019 that claimed quantum supremacy with 53 qubits?",
                "answer": "Sycamore",
                "explanation": "Sycamore completed a target calculation in 200 seconds that would take supercomputers days or years.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-10",
                "points": 500,
                "difficulty": 5,
                "clue": "What is the name of the magnetic storage effect discovered by Albert Fert and Peter Grünberg that enabled multi-gigabyte hard drives in the late 1990s?",
                "answer": "Giant Magnetoresistance",
                "explanation": "Fert and Grünberg shared the 2007 Nobel Prize in Physics for discovering Giant Magnetoresistance (GMR).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-11",
                "points": 500,
                "difficulty": 5,
                "clue": "Which Finnish computer scientist created the SSH (Secure Shell) protocol in 1995 after a password-sniffing attack at Helsinki University?",
                "answer": "Tatu Ylönen",
                "explanation": "Ylönen created SSH-1 to replace insecure telnet and rlogin services.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-12",
                "points": 500,
                "difficulty": 5,
                "clue": "What fundamental routing protocol of the internet uses Autonomous System Numbers (ASNs) to exchange core routing information between ISPs?",
                "answer": "BGP",
                "explanation": "Border Gateway Protocol (BGP) is the routing glue connecting global autonomous systems.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-13",
                "points": 500,
                "difficulty": 5,
                "clue": "What early computing device built by Blaise Pascal in 1642 used geared wheels to assist with tax auditing calculations?",
                "answer": "Pascaline",
                "explanation": "The Pascaline was one of the earliest mechanical calculators.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-14",
                "points": 500,
                "difficulty": 5,
                "clue": "What concurrent, garbage-collected programming language created at Xerox PARC in the 1970s was designed by Alan Kay, Dan Ingalls, and Adele Goldberg?",
                "answer": "Smalltalk",
                "explanation": "Smalltalk pioneered pure object-oriented design and modern windowed GUI interfaces.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-15",
                "points": 500,
                "difficulty": 5,
                "clue": "What was the name of the 8-bit home microcomputer released by Commodore International in 1982 that became the best-selling single computer model of all time?",
                "answer": "Commodore 64",
                "explanation": "The Commodore 64 sold an estimated 12.5 to 17 million units worldwide.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-16",
                "points": 500,
                "difficulty": 5,
                "clue": "What cryptographic standard was selected by NIST in 2001 to replace DES, based on the Belgian Rijndael cipher?",
                "answer": "AES",
                "explanation": "Advanced Encryption Standard (AES) encrypts electronic data with 128, 192, or 256-bit symmetric keys.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-17",
                "points": 500,
                "difficulty": 5,
                "clue": "What mathematical data structure invented by Burton Howard Bloom in 1970 test set membership with zero false negatives but possible false positives?",
                "answer": "Bloom Filter",
                "explanation": "Bloom filters provide space-efficient probabilistic set queries in databases and caches.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-18",
                "points": 500,
                "difficulty": 5,
                "clue": "What is the name of the first digital stored-program computer to run a program, operating at the University of Manchester in June 1948?",
                "answer": "Manchester Baby",
                "explanation": "Officially called the Small-Scale Experimental Machine (SSEM).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-19",
                "points": 500,
                "difficulty": 5,
                "clue": "In CPU microarchitecture, what speculative execution vulnerability disclosed in 2018 exploits branch prediction to leak secret data across privilege boundaries?",
                "answer": "Spectre",
                "explanation": "Spectre (CVE-2017-5753 / CVE-2017-5715) affected modern high-performance microprocessors alongside Meltdown.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "tech-d5-20",
                "points": 500,
                "difficulty": 5,
                "clue": "What deep learning reinforcement algorithm developed by DeepMind taught itself superhuman play in Chess, Shogi, and Go from scratch without human data?",
                "answer": "AlphaZero",
                "explanation": "AlphaZero generalized AlphaGo Zero using Monte Carlo Tree Search and deep neural networks.",
                "image": "",
                "dailyDouble": false
              }
            ]
          }
        ]
      },
      {
        "id": "round-2",
        "title": "Double Jeopardy Round",
        "multiplier": 2,
        "categories": [
          {
            "id": "cat-mus",
            "name": "Music & Iconic Hits",
            "clues": [
              {
                "id": "mus-d1-1",
                "points": 200,
                "difficulty": 1,
                "clue": "The King of Pop known for hits like \"Thriller\", \"Billie Jean\", and \"Beat It\"",
                "answer": "Michael Jackson",
                "explanation": "His 1982 album Thriller remains the best-selling album of all time.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-2",
                "points": 200,
                "difficulty": 1,
                "clue": "British rock band featuring John Lennon, Paul McCartney, George Harrison, and Ringo Starr",
                "answer": "The Beatles",
                "explanation": "Formed in Liverpool in 1960.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-3",
                "points": 200,
                "difficulty": 1,
                "clue": "Pop superstar known as the \"Queen of Pop\", famous for \"Like a Virgin\" and \"Vogue\"",
                "answer": "Madonna",
                "explanation": "The best-selling female recording artist of all time according to Guinness.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-4",
                "points": 200,
                "difficulty": 1,
                "clue": "Singer-songwriter behind massive albums like \"1989\", \"Fearless\", and \"Midnights\"",
                "answer": "Taylor Swift",
                "explanation": "First artist to win Album of the Year at the Grammys four times.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-5",
                "points": 200,
                "difficulty": 1,
                "clue": "Lead singer of Queen known for his four-octave vocal range and theatrical stage presence",
                "answer": "Freddie Mercury",
                "explanation": "Composed timeless hits like \"Bohemian Rhapsody\" and \"We Are the Champions\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-6",
                "points": 200,
                "difficulty": 1,
                "clue": "Reggae pioneer from Jamaica famous for \"No Woman, No Cry\" and \"One Love\"",
                "answer": "Bob Marley",
                "explanation": "Helped spread reggae and the Rastafari movement worldwide.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-7",
                "points": 200,
                "difficulty": 1,
                "clue": "The King of Rock and Roll famous for \"Hound Dog\", \"Jailhouse Rock\", and Graceland",
                "answer": "Elvis Presley",
                "explanation": "Regarded as one of the most significant cultural icons of the 20th century.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-8",
                "points": 200,
                "difficulty": 1,
                "clue": "British singer known for soulful ballads like \"Someone Like You\", \"Hello\", and \"Rolling in the Deep\"",
                "answer": "Adele",
                "explanation": "Her album 21 is one of the best-selling albums of the 21st century.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-9",
                "points": 200,
                "difficulty": 1,
                "clue": "Australian rock band fronted by Angus Young, famous for \"Back in Black\" and \"Highway to Hell\"",
                "answer": "AC/DC",
                "explanation": "Formed in Sydney in 1973.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-10",
                "points": 200,
                "difficulty": 1,
                "clue": "Irish rock band fronted by Bono, famous for \"With or Without You\" and \"Sunday Bloody Sunday\"",
                "answer": "U2",
                "explanation": "Have won 22 Grammy Awards, more than any other band.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-11",
                "points": 200,
                "difficulty": 1,
                "clue": "Classical German composer who went deaf later in life but composed the Ninth Symphony",
                "answer": "Ludwig van Beethoven",
                "explanation": "His Ninth Symphony contains the famous \"Ode to Joy\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-12",
                "points": 200,
                "difficulty": 1,
                "clue": "Hip-hop mogul and rapper behind \"Lose Yourself\" and \"The Real Slim Shady\"",
                "answer": "Eminem (Marshall Mathers)",
                "explanation": "First artist to win Best Original Song at the Oscars for a rap song.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-13",
                "points": 200,
                "difficulty": 1,
                "clue": "Known as the \"Queen of Rock 'n' Roll\", this powerhouse singer recorded legendary hits like \"What's Love Got to Do with It\" and \"Proud Mary\"",
                "answer": "Tina Turner",
                "explanation": "Tina Turner won 12 Grammy Awards and sold over 100 million records worldwide.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-14",
                "points": 200,
                "difficulty": 1,
                "clue": "The iconic 1969 music and art festival held in Bethel, New York attended by 400,000 people",
                "answer": "Woodstock Festival",
                "explanation": "Billed as \"An Aquarian Exposition: 3 Days of Peace & Music\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-15",
                "points": 200,
                "difficulty": 1,
                "clue": "Swedish pop supergroup that won Eurovision in 1974 with \"Waterloo\"",
                "answer": "ABBA",
                "explanation": "Known for global anthems like \"Dancing Queen\" and \"Mamma Mia\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-16",
                "points": 200,
                "difficulty": 1,
                "clue": "Famous piano-playing British singer-songwriter known as the \"Rocket Man\"",
                "answer": "Elton John",
                "explanation": "His single \"Candle in the Wind 1997\" is one of the biggest selling singles in history.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-17",
                "points": 200,
                "difficulty": 1,
                "clue": "R&B and pop superstar who was a member of Destiny's Child before releasing \"Crazy in Love\"",
                "answer": "Beyonce (Beyonce Knowles-Carter)",
                "explanation": "Holds the record for the most Grammy Award wins in history (32 wins).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-18",
                "points": 200,
                "difficulty": 1,
                "clue": "Rock band led by Kurt Cobain that pioneered the 1990s grunge movement with \"Smells Like Teen Spirit\"",
                "answer": "Nirvana",
                "explanation": "Their 1991 album Nevermind knocked Michael Jackson from the top of the charts.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-19",
                "points": 200,
                "difficulty": 1,
                "clue": "The iconic electric guitar played by Jimi Hendrix, Eric Clapton, and Stevie Ray Vaughan",
                "answer": "Fender Stratocaster",
                "explanation": "Introduced by Leo Fender in 1954.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d1-20",
                "points": 200,
                "difficulty": 1,
                "clue": "Classical Austrian child prodigy who composed over 600 works including \"The Magic Flute\"",
                "answer": "Wolfgang Amadeus Mozart",
                "explanation": "Began composing at the age of five.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-1",
                "points": 400,
                "difficulty": 2,
                "clue": "1973 Pink Floyd progressive rock album featuring a prism dispersing light on its cover",
                "answer": "The Dark Side of the Moon",
                "explanation": "Spent a record 900+ weeks on the Billboard 200 chart.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-2",
                "points": 400,
                "difficulty": 2,
                "clue": "The Canadian rapper and singer who founded OVO Sound, known for hits like \"God's Plan\" and \"Hotline Bling\"",
                "answer": "Drake (Aubrey Graham)",
                "explanation": "One of the highest-certified digital singles artists in the US.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-3",
                "points": 400,
                "difficulty": 2,
                "clue": "The influential Seattle grunge band featuring Eddie Vedder, known for \"Alive\" and \"Jeremy\"",
                "answer": "Pearl Jam",
                "explanation": "Their debut album Ten helped define the 90s alternative rock era.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-4",
                "points": 400,
                "difficulty": 2,
                "clue": "American folk and rock legend who won the 2016 Nobel Prize in Literature",
                "answer": "Bob Dylan",
                "explanation": "Penned cultural anthems like \"Blowin' in the Wind\" and \"Like a Rolling Stone\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-5",
                "points": 400,
                "difficulty": 2,
                "clue": "The famous recording studio on Abbey Road in London where The Beatles recorded most of their albums",
                "answer": "Abbey Road Studios (EMI Studios)",
                "explanation": "The Beatles famously walked across the zebra crossing outside for their 1969 cover.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-6",
                "points": 400,
                "difficulty": 2,
                "clue": "The Minneapolis musical genius known for \"Purple Rain\", \"When Doves Cry\", and playing 27 instruments",
                "answer": "Prince (Prince Rogers Nelson)",
                "explanation": "Inducted into the Rock and Roll Hall of Fame in 2004.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-7",
                "points": 400,
                "difficulty": 2,
                "clue": "The lead guitarist of Led Zeppelin who played a famous double-necked Gibson guitar on \"Stairway to Heaven\"",
                "answer": "Jimmy Page",
                "explanation": "Ranked among the greatest electric guitarists in history.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-8",
                "points": 400,
                "difficulty": 2,
                "clue": "The Barbados-born pop and R&B singer behind \"Umbrella\", \"Diamonds\", and the Fenty Beauty brand",
                "answer": "Rihanna (Robyn Rihanna Fenty)",
                "explanation": "Broke records with 14 Billboard Hot 100 number-one singles.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-9",
                "points": 400,
                "difficulty": 2,
                "clue": "British heavy metal band featuring Bruce Dickinson and mascot Eddie the Head",
                "answer": "Iron Maiden",
                "explanation": "Pioneers of the New Wave of British Heavy Metal.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-10",
                "points": 400,
                "difficulty": 2,
                "clue": "The famous jazz trumpeter and composer behind the best-selling jazz album \"Kind of Blue\" (1959)",
                "answer": "Miles Davis",
                "explanation": "Pioneered modal jazz, cool jazz, and jazz fusion.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-11",
                "points": 400,
                "difficulty": 2,
                "clue": "American rock band from California that sang \"Hotel California\" in 1976",
                "answer": "The Eagles",
                "explanation": "Their Greatest Hits 1971-1975 is one of the highest-selling albums in US history.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-12",
                "points": 400,
                "difficulty": 2,
                "clue": "The Italian operatic tenor who achieved global crossover fame as one of The Three Tenors",
                "answer": "Luciano Pavarotti",
                "explanation": "Famous for his soaring rendition of Puccini's aria \"Nessun dorma\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-13",
                "points": 400,
                "difficulty": 2,
                "clue": "The primary keyboardist and synthesizer innovator who co-founded Pink Floyd and composed \"Us and Them\"",
                "answer": "Richard Wright",
                "explanation": "His jazz-influenced textures defined Pink Floyd's atmospheric sound.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-14",
                "points": 400,
                "difficulty": 2,
                "clue": "The 1977 Fleetwood Mac album written amidst intense interpersonal band turmoil and divorces",
                "answer": "Rumours",
                "explanation": "Sold over 40 million copies worldwide.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-15",
                "points": 400,
                "difficulty": 2,
                "clue": "The punk rock band from New York City known for fast 3-chord songs like \"Blitzkrieg Bop\"",
                "answer": "The Ramones",
                "explanation": "All members adopted the surname \"Ramone\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-16",
                "points": 400,
                "difficulty": 2,
                "clue": "The female country and pop crossover queen famous for \"Jolene\", \"9 to 5\", and Dollywood",
                "answer": "Dolly Parton",
                "explanation": "Composed \"I Will Always Love You\", later a massive hit for Whitney Houston.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-17",
                "points": 400,
                "difficulty": 2,
                "clue": "The Canadian singer behind \"Blinding Lights\", which spent a record 90 weeks on the Billboard Hot 100",
                "answer": "The Weeknd (Abel Tesfaye)",
                "explanation": "Performed the Super Bowl LV halftime show in 2021.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-18",
                "points": 400,
                "difficulty": 2,
                "clue": "The iconic electric bass player of the Red Hot Chili Peppers known for his slap bass technique",
                "answer": "Flea (Michael Balzary)",
                "explanation": "Co-founded the Silverlake Conservatory of Music.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-19",
                "points": 400,
                "difficulty": 2,
                "clue": "The Motown vocal group that launched the career of Diana Ross in the 1960s",
                "answer": "The Supremes",
                "explanation": "Scored 12 number-one singles on the Billboard Hot 100.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d2-20",
                "points": 400,
                "difficulty": 2,
                "clue": "The classical Polish composer and virtuoso pianist renowned for his nocturnes and polonaises",
                "answer": "Frederic Chopin",
                "explanation": "Wrote almost exclusively for the solo piano.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-1",
                "points": 600,
                "difficulty": 3,
                "clue": "The 1971 John Lennon anthem urging global peace, brotherhood, and a world without borders",
                "answer": "Imagine",
                "explanation": "Co-produced with Yoko Ono and Phil Spector.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-2",
                "points": 600,
                "difficulty": 3,
                "clue": "The legendary delta blues pioneer who, according to legend, sold his soul to the devil at a crossroads",
                "answer": "Robert Johnson",
                "explanation": "Recorded 29 historic songs in 1936 and 1937.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-3",
                "points": 600,
                "difficulty": 3,
                "clue": "The four movements of Antonio Vivaldi's most famous group of violin concertos composed in 1723",
                "answer": "The Four Seasons (Le quattro stagioni)",
                "explanation": "Spring, Summer, Autumn, and Winter.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-4",
                "points": 600,
                "difficulty": 3,
                "clue": "The influential post-punk Manchester band whose lead singer Ian Curtis died in 1980, reforming as New Order",
                "answer": "Joy Division",
                "explanation": "Famous for \"Love Will Tear Us Apart\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-5",
                "points": 600,
                "difficulty": 3,
                "clue": "The influential hip-hop group from Compton, California featuring Dr. Dre, Eazy-E, and Ice Cube",
                "answer": "N.W.A (Niggaz Wit Attitudes)",
                "explanation": "Released their groundbreaking debut album Straight Outta Compton in 1988.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-6",
                "points": 600,
                "difficulty": 3,
                "clue": "The female soul singer known as the \"Queen of Soul\", famous for her empowering rendition of \"Respect\"",
                "answer": "Aretha Franklin",
                "explanation": "First woman inducted into the Rock and Roll Hall of Fame in 1987.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-7",
                "points": 600,
                "difficulty": 3,
                "clue": "The 1967 Beatles album often regarded as the first major concept album in pop music history",
                "answer": "Sgt. Pepper's Lonely Hearts Club Band",
                "explanation": "Pioneered elaborate studio multi-tracking and packaging art.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-8",
                "points": 600,
                "difficulty": 3,
                "clue": "The French electronic music duo behind \"One More Time\", \"Get Lucky\", and distinctive robot helmets",
                "answer": "Daft Punk",
                "explanation": "Guy-Manuel de Homem-Christo and Thomas Bangalter.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-9",
                "points": 600,
                "difficulty": 3,
                "clue": "The drummer for Led Zeppelin whose powerful, thunderous playing ended with his tragic death in 1980",
                "answer": "John Bonham (Bonzo)",
                "explanation": "Led Zeppelin chose to disband rather than replace him.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-10",
                "points": 600,
                "difficulty": 3,
                "clue": "The famous jazz saxophonist and pioneer of bebop who was nicknamed \"Bird\"",
                "answer": "Charlie Parker",
                "explanation": "Co-created bebop alongside Dizzy Gillespie in the 1940s.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-11",
                "points": 600,
                "difficulty": 3,
                "clue": "The 1997 album by Radiohead that departed from Britpop into dystopian electronica and alienation",
                "answer": "OK Computer",
                "explanation": "Widely hailed by critics as one of the greatest albums ever recorded.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-12",
                "points": 600,
                "difficulty": 3,
                "clue": "The English new wave rock band fronted by Sting in the late 1970s and 1980s",
                "answer": "The Police",
                "explanation": "Hits include \"Every Breath You Take\" and \"Roxanne\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-13",
                "points": 600,
                "difficulty": 3,
                "clue": "The American composer who wrote the iconic 1924 orchestral piece \"Rhapsody in Blue\"",
                "answer": "George Gershwin",
                "explanation": "Combined classical music with American jazz idioms.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-14",
                "points": 600,
                "difficulty": 3,
                "clue": "The southern rock band famous for \"Free Bird\" and \"Sweet Home Alabama\" that suffered a tragic 1977 plane crash",
                "answer": "Lynyrd Skynyrd",
                "explanation": "Lead singer Ronnie Van Zant died in the crash.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-15",
                "points": 600,
                "difficulty": 3,
                "clue": "The pioneering 1980 synthesizer from Roland Corporation that defined 80s pop, techno, and electro percussion",
                "answer": "Roland TR-808 Rhythm Composer",
                "explanation": "Famous for its deep, resonant bass drum boom.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-16",
                "points": 600,
                "difficulty": 3,
                "clue": "The classical composition by Igor Stravinsky that famously caused an uproar and near-riot at its 1913 Paris premiere",
                "answer": "The Rite of Spring (Le Sacre du printemps)",
                "explanation": "Choreographed by Vaslav Nijinsky with radical polyrhythms.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-17",
                "points": 600,
                "difficulty": 3,
                "clue": "The lead singer and creative visionary behind industrial rock band Nine Inch Nails",
                "answer": "Trent Reznor",
                "explanation": "Won two Academy Awards for film scoring with Atticus Ross.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-18",
                "points": 600,
                "difficulty": 3,
                "clue": "The legendary New York punk club on the Bowery where Blondie, Talking Heads, and The Ramones emerged",
                "answer": "CBGB (CBGB & OMFUG)",
                "explanation": "Founded by Hilly Kristal in 1973.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-19",
                "points": 600,
                "difficulty": 3,
                "clue": "The influential 1959 rock and roll tragedy in which Buddy Holly, Ritchie Valens, and the Big Bopper died",
                "answer": "The Day the Music Died",
                "explanation": "Immortalized in Don McLean's 1971 hit \"American Pie\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d3-20",
                "points": 600,
                "difficulty": 3,
                "clue": "The German classical composer of the Baroque era who wrote the Brandenburg Concertos and Mass in B minor",
                "answer": "Johann Sebastian Bach",
                "explanation": "Master of counterpoint and fugue.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-1",
                "points": 800,
                "difficulty": 4,
                "clue": "The musical key in which Beethoven composed his famous Fifth Symphony",
                "answer": "C minor",
                "explanation": "Known for the dramatic four-note opening motif (short-short-short-long).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-2",
                "points": 800,
                "difficulty": 4,
                "clue": "The innovative record producer who created the famous reverberant \"Wall of Sound\" recording technique",
                "answer": "Phil Spector",
                "explanation": "Produced the Ronettes, Righteous Brothers, and The Beatles' Let It Be.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-3",
                "points": 800,
                "difficulty": 4,
                "clue": "The 1969 jazz fusion double album by Miles Davis that marked a radical shift toward electric instruments and funk grooves",
                "answer": "Bitches Brew",
                "explanation": "Featured musicians like Chick Corea, Wayne Shorter, and John McLaughlin.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-4",
                "points": 800,
                "difficulty": 4,
                "clue": "The multi-instrumentalist virtuoso and leader of The Beach Boys who composed and produced \"Pet Sounds\" (1966)",
                "answer": "Brian Wilson",
                "explanation": "Pioneered sophisticated orchestral pop arrangements.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-5",
                "points": 800,
                "difficulty": 4,
                "clue": "The experimental English art rock band led by Peter Gabriel and later Phil Collins",
                "answer": "Genesis",
                "explanation": "Pioneers of theatrical 1970s progressive rock.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-6",
                "points": 800,
                "difficulty": 4,
                "clue": "The 1893 symphony by Antonin Dvorak composed while he was director of the National Conservatory of Music of America",
                "answer": "From the New World (Symphony No. 9)",
                "explanation": "Incorporated Native American and African-American spiritual melodies.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-7",
                "points": 800,
                "difficulty": 4,
                "clue": "The legendary electric bass player for Weather Report who pioneered fretless electric bass playing",
                "answer": "Jaco Pastorius",
                "explanation": "Famous for his virtuosic soloing and harmonics.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-8",
                "points": 800,
                "difficulty": 4,
                "clue": "The British record label founded by Tony Wilson in 1978 that signed Joy Division, New Order, and Happy Mondays",
                "answer": "Factory Records",
                "explanation": "Also founded the legendary Hacienda nightclub in Manchester.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-9",
                "points": 800,
                "difficulty": 4,
                "clue": "The 1979 triple album (or double cassette) by The Clash that incorporated punk, reggae, rockabilly, and ska",
                "answer": "London Calling",
                "explanation": "Cover features a photo of Paul Simonon smashing his bass guitar.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-10",
                "points": 800,
                "difficulty": 4,
                "clue": "The Russian composer who wrote the music for famous ballets \"Swan Lake\", \"The Nutcracker\", and \"Sleeping Beauty\"",
                "answer": "Pyotr Ilyich Tchaikovsky",
                "explanation": "Also composed the 1812 Overture.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-11",
                "points": 800,
                "difficulty": 4,
                "clue": "The legendary house band at Stax Records in Memphis, Tennessee that backed Otis Redding, Sam & Dave, and Carla Thomas",
                "answer": "Booker T. & the M.G.'s",
                "explanation": "Instrumental hit \"Green Onions\" reached number one on R&B charts.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-12",
                "points": 800,
                "difficulty": 4,
                "clue": "The term for a recurring musical theme associated with a particular character, idea, or place in Wagnerian opera",
                "answer": "Leitmotif",
                "explanation": "Richard Wagner popularized this extensively in his Ring Cycle.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-13",
                "points": 800,
                "difficulty": 4,
                "clue": "The pioneering German krautrock electronic band formed in 1970 that influenced synth-pop and hip-hop with \"Autobahn\"",
                "answer": "Kraftwerk",
                "explanation": "Founded by Ralf Hutter and Florian Schneider.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-14",
                "points": 800,
                "difficulty": 4,
                "clue": "The 1989 album by the Beastie Boys produced by the Dust Brothers renowned for its dense, innovative sample layering",
                "answer": "Paul's Boutique",
                "explanation": "Contains hundreds of unlicensed samples before copyright laws tightened.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-15",
                "points": 800,
                "difficulty": 4,
                "clue": "The opera composer who wrote \"La boheme\", \"Tosca\", and \"Madama Butterfly\"",
                "answer": "Giacomo Puccini",
                "explanation": "The greatest proponent of the Italian verismo opera tradition.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-16",
                "points": 800,
                "difficulty": 4,
                "clue": "The famous jazz recording label founded in 1939 by Alfred Lion and Max Margulis known for iconic graphic cover art",
                "answer": "Blue Note Records",
                "explanation": "Photographed by Francis Wolff and designed by Reid Miles.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-17",
                "points": 800,
                "difficulty": 4,
                "clue": "The 1991 shoegaze masterpiece album by Irish-English rock band My Bloody Valentine recorded over two years",
                "answer": "Loveless",
                "explanation": "Led by Kevin Shields's \"glide guitar\" tremolo technique.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-18",
                "points": 800,
                "difficulty": 4,
                "clue": "The electric guitar effect pedal invented in the 1960s that modulates frequency using a foot-operated rocking pedal",
                "answer": "Wah-wah pedal (Cry Baby)",
                "explanation": "Popularized by Jimi Hendrix on \"Voodoo Child (Slight Return)\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-19",
                "points": 800,
                "difficulty": 4,
                "clue": "The Baroque composition by George Frideric Handel that includes the famous \"Hallelujah\" chorus",
                "answer": "Messiah (HWV 56)",
                "explanation": "Tradition holds that King George II stood during the chorus.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d4-20",
                "points": 800,
                "difficulty": 4,
                "clue": "The 1975 art-pop pioneer who released \"Another Green World\" and coined the term \"Ambient Music\"",
                "answer": "Brian Eno",
                "explanation": "Produced albums for David Bowie, Talking Heads, U2, and Coldplay.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-1",
                "points": 1000,
                "difficulty": 5,
                "clue": "The classical Austrian composer of the Second Viennese School who invented the twelve-tone technique (dodecaphony)",
                "answer": "Arnold Schoenberg",
                "explanation": "A radical departure from traditional Western diatonic harmony.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-2",
                "points": 1000,
                "difficulty": 5,
                "clue": "The medieval musical manuscript named after the Benedictine monastery of Beuron that Carl Orff adapted into a cantata",
                "answer": "Carmina Burana",
                "explanation": "Opens and closes with the thunderous choral movement \"O Fortuna\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-3",
                "points": 1000,
                "difficulty": 5,
                "clue": "The jazz pianist and composer famous for complex harmonic progressions and the groundbreaking 1959 album \"Giant Steps\"",
                "answer": "John Coltrane",
                "explanation": "Coltrane changes altered the landscape of modern jazz improvisation.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-4",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1974 German experimental electronic double album by Tangerine Dream composed using Moog synthesizers",
                "answer": "Phaedra",
                "explanation": "Helped pioneer the Berlin School of electronic music.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-5",
                "points": 1000,
                "difficulty": 5,
                "clue": "The unfinished masterpiece mass by Mozart commissioned anonymously by Count Franz von Walsegg in 1791",
                "answer": "Requiem in D minor (K. 626)",
                "explanation": "Completed after Mozart's death by his pupil Franz Xaver Sussmayr.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-6",
                "points": 1000,
                "difficulty": 5,
                "clue": "The English lutenist and composer of the Elizabethan era famous for the melancholy song \"Flow My Tears\"",
                "answer": "John Dowland",
                "explanation": "Associated with the Latin motto \"Semper Dowland, semper dolens\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-7",
                "points": 1000,
                "difficulty": 5,
                "clue": "The French microtonal instrument with a keyboard and ring attached to a wire invented in 1928, used by Radiohead and Messiaen",
                "answer": "Ondes Martenot",
                "explanation": "Featured prominently in Olivier Messiaen's Turangalila-Symphonie.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-8",
                "points": 1000,
                "difficulty": 5,
                "clue": "The influential modal jazz composition written in 1959 by Miles Davis based on a 24-measure Dorian mode vamp",
                "answer": "So What",
                "explanation": "Opening track of the landmark album Kind of Blue.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-9",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1912 expressionist song cycle by Arnold Schoenberg for female voice and ensemble using the \"Sprechstimme\" vocal technique",
                "answer": "Pierrot Lunaire",
                "explanation": "Set to German translations of poems by Albert Giraud.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-10",
                "points": 1000,
                "difficulty": 5,
                "clue": "The legendary New Orleans cornetist regarded as the \"founding father of jazz\" who was never recorded",
                "answer": "Buddy Bolden (Charles \"Buddy\" Bolden)",
                "explanation": "Led the premier brass band in New Orleans from 1895 to 1906.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-11",
                "points": 1000,
                "difficulty": 5,
                "clue": "The experimental piece premiered by pianist David Tudor in 1952 consisting of four minutes and thirty-three seconds of silence",
                "answer": "4'33\" (Four Minutes, Thirty-Three Seconds)",
                "explanation": "Composed by John Cage to focus listeners on ambient sounds.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-12",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1968 piece by Steve Reich composed using phase-shifting tape loops of a Pentecostal preacher",
                "answer": "It's Gonna Rain",
                "explanation": "Pioneered American musical minimalism.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-13",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 17th-century Italian violin maker whose instruments (including the \"Messiah\" and \"Lady Blunt\") are valued in the millions",
                "answer": "Antonio Stradivari (Stradivarius)",
                "explanation": "Crafted violins, violas, and cellos in Cremona, Italy.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-14",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1956 Duke Ellington performance at this festival that revitalized his career, featuring Paul Gonsalves's 27-chorus sax solo",
                "answer": "Newport Jazz Festival",
                "explanation": "Recorded live on the best-selling album Ellington at Newport.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-15",
                "points": 1000,
                "difficulty": 5,
                "clue": "The Renaissance choral technique where all voice parts sing the same syllables at the same rhythm, contrasting with polyphony",
                "answer": "Homophony (Homorhythmic texture)",
                "explanation": "Promoted by the Council of Trent for liturgical intelligibility.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-16",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1965 free jazz album by Albert Ayler that revolutionized tenor saxophone playing through multiphonics and overblowing",
                "answer": "Spiritual Unity",
                "explanation": "Recorded for the vanguard ESP-Disk label.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-17",
                "points": 1000,
                "difficulty": 5,
                "clue": "The composer who wrote the monumental cycle of 15 symphonies while navigating severe censorship under the Stalinist Soviet regime",
                "answer": "Dmitri Shostakovich",
                "explanation": "His Fifth Symphony was subtitled \"A Soviet artist's creative response to just criticism\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-18",
                "points": 1000,
                "difficulty": 5,
                "clue": "The tuning system that divides an octave into twelve logarithmically equal parts (100 cents per semitone)",
                "answer": "Twelve-Tone Equal Temperament (12-EDO)",
                "explanation": "Standard tuning system for modern Western music since the 18th century.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-19",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1971 minimalist opera with music by Philip Glass and direction by Robert Wilson containing no traditional plot",
                "answer": "Einstein on the Beach",
                "explanation": "Lasts over four hours without intermission.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "mus-d5-20",
                "points": 1000,
                "difficulty": 5,
                "clue": "The polyphonic motet for 40 independent voice parts composed around 1570 by English Renaissance composer Thomas Tallis",
                "answer": "Spem in alium",
                "explanation": "Scored for eight choirs of five voices each.",
                "image": "",
                "dailyDouble": false
              }
            ]
          },
          {
            "id": "cat-lit",
            "name": "Literature & Famous Books",
            "clues": [
              {
                "id": "lit-d1-1",
                "points": 200,
                "difficulty": 1,
                "clue": "Playwright who wrote \"Romeo and Juliet\", \"Hamlet\", and \"Macbeth\"",
                "answer": "William Shakespeare",
                "explanation": "Known as the \"Bard of Avon\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-2",
                "points": 200,
                "difficulty": 1,
                "clue": "Classic novel by Mary Shelley about a scientist who creates a living creature from corpses",
                "answer": "Frankenstein",
                "explanation": "Published in 1818 when Shelley was just 20 years old.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-3",
                "points": 200,
                "difficulty": 1,
                "clue": "Dystopian novel by George Orwell set in a totalitarian superstate ruled by Big Brother",
                "answer": "1984 (Nineteen Eighty-Four)",
                "explanation": "Introduced terms like \"thoughtcrime\", \"doublethink\", and \"Newspeak\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-4",
                "points": 200,
                "difficulty": 1,
                "clue": "Fictional detective who resides at 221B Baker Street in London created by Sir Arthur Conan Doyle",
                "answer": "Sherlock Holmes",
                "explanation": "Assisted by Dr. John H. Watson.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-5",
                "points": 200,
                "difficulty": 1,
                "clue": "Epic high-fantasy novel series by J.R.R. Tolkien following Frodo Baggins",
                "answer": "The Lord of the Rings",
                "explanation": "Divided into The Fellowship of the Ring, The Two Towers, and The Return of the King.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-6",
                "points": 200,
                "difficulty": 1,
                "clue": "American novel by F. Scott Fitzgerald set in the Jazz Age featuring Jay Gatsby and Nick Carraway",
                "answer": "The Great Gatsby",
                "explanation": "Set in the fictional towns of West Egg and East Egg on Long Island in 1922.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-7",
                "points": 200,
                "difficulty": 1,
                "clue": "Herman Melville novel about Captain Ahab's obsessive quest to hunt a giant white sperm whale",
                "answer": "Moby-Dick",
                "explanation": "Famous opening line: \"Call me Ishmael.\"",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-8",
                "points": 200,
                "difficulty": 1,
                "clue": "Novelist who wrote \"Pride and Prejudice\", \"Sense and Sensibility\", and \"Emma\"",
                "answer": "Jane Austen",
                "explanation": "Her novels critique 18th-century British landed gentry.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-9",
                "points": 200,
                "difficulty": 1,
                "clue": "Harper Lee's Pulitzer Prize-winning novel dealing with racial injustice, narrated by Scout Finch",
                "answer": "To Kill a Mockingbird",
                "explanation": "Features noble lawyer Atticus Finch.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-10",
                "points": 200,
                "difficulty": 1,
                "clue": "Children's novel by Lewis Carroll where a young girl falls down a rabbit hole into a fantasy realm",
                "answer": "Alice's Adventures in Wonderland",
                "explanation": "Introduced the Mad Hatter, Cheshire Cat, and Queen of Hearts.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-11",
                "points": 200,
                "difficulty": 1,
                "clue": "Author of \"The Adventures of Tom Sawyer\" and \"Adventures of Huckleberry Finn\"",
                "answer": "Mark Twain (Samuel Langhorne Clemens)",
                "explanation": "Often lauded as the \"father of American literature\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-12",
                "points": 200,
                "difficulty": 1,
                "clue": "Dystopian novel by Ray Bradbury where books are outlawed and \"firemen\" burn any found",
                "answer": "Fahrenheit 451",
                "explanation": "Named for the temperature at which book paper catches fire and burns.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-13",
                "points": 200,
                "difficulty": 1,
                "clue": "French author who wrote \"Les Miserables\" and \"The Hunchback of Notre-Dame\"",
                "answer": "Victor Hugo",
                "explanation": "A leading figure of the French Romantic literary movement.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-14",
                "points": 200,
                "difficulty": 1,
                "clue": "J.D. Salinger novel narrated by the disillusioned and rebellious teenager Holden Caulfield",
                "answer": "The Catcher in the Rye",
                "explanation": "Published in 1951, capturing post-WWII teenage alienation.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-15",
                "points": 200,
                "difficulty": 1,
                "clue": "Charles Dickens novel set in London and Paris during the French Revolution (\"It was the best of times...\")",
                "answer": "A Tale of Two Cities",
                "explanation": "One of the best-selling novels of all time.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-16",
                "points": 200,
                "difficulty": 1,
                "clue": "Russian author who penned the monumental masterpieces \"War and Peace\" and \"Anna Karenina\"",
                "answer": "Leo Tolstoy",
                "explanation": "A master of realist fiction and philosophical pacifism.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-17",
                "points": 200,
                "difficulty": 1,
                "clue": "Epic Greek poem attributed to Homer that recounts the events of the Trojan War",
                "answer": "The Iliad",
                "explanation": "Focuses on the rage of the warrior Achilles.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-18",
                "points": 200,
                "difficulty": 1,
                "clue": "The fantasy novella by Antoine de Saint-Exupery about a young prince who visits various planets",
                "answer": "The Little Prince (Le Petit Prince)",
                "explanation": "One of the most translated and best-selling books in world literature.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-19",
                "points": 200,
                "difficulty": 1,
                "clue": "Author who wrote \"The Shining\", \"Carrie\", \"Misery\", and \"Pet Sematary\"",
                "answer": "Stephen King",
                "explanation": "Often crowned the \"King of Horror\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d1-20",
                "points": 200,
                "difficulty": 1,
                "clue": "Gothic horror novel by Bram Stoker that introduced literature's most famous Transylvanian vampire in 1897",
                "answer": "Dracula",
                "explanation": "Written in an epistolary format of letters, diary entries, and newspaper clippings.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-1",
                "points": 400,
                "difficulty": 2,
                "clue": "Spanish novel by Miguel de Cervantes considered the first modern novel, featuring a windmill-charging knight",
                "answer": "Don Quixote",
                "explanation": "Published in two parts in 1605 and 1615.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-2",
                "points": 400,
                "difficulty": 2,
                "clue": "1847 Emily Bronte novel set on the windswept Yorkshire moors featuring Heathcliff and Catherine",
                "answer": "Wuthering Heights",
                "explanation": "Her only published novel before her death at age 30.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-3",
                "points": 400,
                "difficulty": 2,
                "clue": "Russian novel by Fyodor Dostoevsky about a poor student who murders a pawnbroker",
                "answer": "Crime and Punishment",
                "explanation": "Follows the psychological turmoil and redemption of Rodion Raskolnikov.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-4",
                "points": 400,
                "difficulty": 2,
                "clue": "Aldous Huxley's 1932 dystopian novel set in a genetically engineered, conditioned World State",
                "answer": "Brave New World",
                "explanation": "Citizens consume the mood-altering drug \"soma\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-5",
                "points": 400,
                "difficulty": 2,
                "clue": "Ancient Mesopotamian epic poem regarded as the earliest surviving great work of literature",
                "answer": "Epic of Gilgamesh",
                "explanation": "Recounts the journey of Gilgamesh, King of Uruk.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-6",
                "points": 400,
                "difficulty": 2,
                "clue": "Author of the Southern Gothic classics \"The Sound and the Fury\" and \"As I Lay Dying\"",
                "answer": "William Faulkner",
                "explanation": "Won the 1949 Nobel Prize in Literature.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-7",
                "points": 400,
                "difficulty": 2,
                "clue": "1847 novel by Charlotte Bronte featuring an orphaned governess at Thornfield Hall and Mr. Rochester",
                "answer": "Jane Eyre",
                "explanation": "Published under the pen name Currer Bell.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-8",
                "points": 400,
                "difficulty": 2,
                "clue": "The 14th-century narrative poem by Dante Alighieri divided into Inferno, Purgatorio, and Paradiso",
                "answer": "The Divine Comedy (La Divina Commedia)",
                "explanation": "Written in the Tuscan dialect in terza rima rhyme scheme.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-9",
                "points": 400,
                "difficulty": 2,
                "clue": "John Steinbeck novel depicting the Joad family's migration from the Oklahoma Dust Bowl to California",
                "answer": "The Grapes of Wrath",
                "explanation": "Won the National Book Award and Pulitzer Prize for fiction.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-10",
                "points": 400,
                "difficulty": 2,
                "clue": "The Greek epic poem by Homer recounting the 10-year journey home of the King of Ithaca",
                "answer": "The Odyssey",
                "explanation": "Features encounters with the Cyclops Polyphemus, Circe, and the Sirens.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-11",
                "points": 400,
                "difficulty": 2,
                "clue": "The allegorical novella by George Orwell where farm animals overthrow their human master",
                "answer": "Animal Farm",
                "explanation": "Satirizes the 1917 Russian Revolution and subsequent Stalinist regime.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-12",
                "points": 400,
                "difficulty": 2,
                "clue": "American poet who wrote \"The Raven\", \"Annabel Lee\", and pioneered the detective fiction genre",
                "answer": "Edgar Allan Poe",
                "explanation": "Master of the macabre and gothic short story.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-13",
                "points": 400,
                "difficulty": 2,
                "clue": "The 1886 novella by Robert Louis Stevenson exploring the duality of human nature through a doctor and his alter ego",
                "answer": "Strange Case of Dr Jekyll and Mr Hyde",
                "explanation": "Explores the battle between good and evil within one man.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-14",
                "points": 400,
                "difficulty": 2,
                "clue": "French author who pioneered science fiction with \"Twenty Thousand Leagues Under the Sea\" and \"Around the World in Eighty Days\"",
                "answer": "Jules Verne",
                "explanation": "The second most-translated individual author in the world.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-15",
                "points": 400,
                "difficulty": 2,
                "clue": "Novel by Gabriel Garcia Marquez chronicling seven generations of the Buendia family in Macondo",
                "answer": "One Hundred Years of Solitude",
                "explanation": "A landmark masterpiece of magical realism.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-16",
                "points": 400,
                "difficulty": 2,
                "clue": "The central tragic Danish prince who soliloquizes \"To be, or not to be\" in Shakespeare's tragedy",
                "answer": "Hamlet",
                "explanation": "Wrestles with seeking vengeance against his uncle Claudius.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-17",
                "points": 400,
                "difficulty": 2,
                "clue": "The 1925 modernist novel by Virginia Woolf chronicling a single day in post-WWI London through Clarissa's eyes",
                "answer": "Mrs. Dalloway",
                "explanation": "Pioneered stream-of-consciousness narrative style.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-18",
                "points": 400,
                "difficulty": 2,
                "clue": "German author who wrote the two-part tragic play \"Faust\", who sells his soul to Mephistopheles",
                "answer": "Johann Wolfgang von Goethe",
                "explanation": "Considered the supreme genius of modern German literature.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-19",
                "points": 400,
                "difficulty": 2,
                "clue": "The novel by Ernest Hemingway set during the Spanish Civil War featuring protagonist Robert Jordan",
                "answer": "For Whom the Bell Tolls",
                "explanation": "Title inspired by John Donne's meditation.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d2-20",
                "points": 400,
                "difficulty": 2,
                "clue": "The 1851 novel by Nathaniel Hawthorne set in Puritan Massachusetts featuring Hester Prynne",
                "answer": "The Scarlet Letter",
                "explanation": "Hester is forced to wear the letter \"A\" for adultery.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-1",
                "points": 600,
                "difficulty": 3,
                "clue": "The 1922 landmark modernist novel by James Joyce set in Dublin on June 16, 1904",
                "answer": "Ulysses",
                "explanation": "Parallels Homer's Odyssey through the movements of Leopold Bloom.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-2",
                "points": 600,
                "difficulty": 3,
                "clue": "The monumental seven-volume French novel by Marcel Proust known for the \"madeleine moment\"",
                "answer": "In Search of Lost Time (A la recherche du temps perdu)",
                "explanation": "Contains roughly 1.2 million words exploring involuntary memory.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-3",
                "points": 600,
                "difficulty": 3,
                "clue": "The Russian novel by Mikhail Bulgakov where the Devil visits 1930s Moscow, featuring a giant talking cat named Behemoth",
                "answer": "The Master and Margarita",
                "explanation": "Written during the Stalinist era and published posthumously in 1967.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-4",
                "points": 600,
                "difficulty": 3,
                "clue": "The 1952 semi-autobiographical novel by Ralph Ellison exploring the social and intellectual invisibilities of Black Americans",
                "answer": "Invisible Man",
                "explanation": "Won the 1953 National Book Award for Fiction.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-5",
                "points": 600,
                "difficulty": 3,
                "clue": "The 1979 novel by Milan Kundera examining the Prague Spring of 1968 and Nietzsche's eternal return",
                "answer": "The Unbearable Lightness of Being",
                "explanation": "Follows the lives of Tomas, Tereza, Sabina, and Franz.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-6",
                "points": 600,
                "difficulty": 3,
                "clue": "The 1958 novel by Nigerian author Chinua Achebe depicting pre-colonial life in southeastern Nigeria and British colonization",
                "answer": "Things Fall Apart",
                "explanation": "Title taken from W.B. Yeats's poem \"The Second Coming\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-7",
                "points": 600,
                "difficulty": 3,
                "clue": "The American poet who published \"Leaves of Grass\" in 1855, celebrating democracy and nature",
                "answer": "Walt Whitman",
                "explanation": "Known as the \"father of free verse\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-8",
                "points": 600,
                "difficulty": 3,
                "clue": "The 1939 Finnegans Wake author who also wrote \"A Portrait of the Artist as a Young Man\"",
                "answer": "James Joyce",
                "explanation": "Renowned for complex wordplay, multilingual puns, and stream of consciousness.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-9",
                "points": 600,
                "difficulty": 3,
                "clue": "The Austrian author who wrote \"The Metamorphosis\", where Gregor Samsa transforms into a giant insect",
                "answer": "Franz Kafka",
                "explanation": "Coined the term \"Kafkaesque\" for bizarre, illogical bureaucracies.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-10",
                "points": 600,
                "difficulty": 3,
                "clue": "The 1726 satirical prose novel by Jonathan Swift featuring Lilliput, Brobdingnag, and the Houyhnhnms",
                "answer": "Gulliver's Travels",
                "explanation": "A scathing satire on human nature and travel tales.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-11",
                "points": 600,
                "difficulty": 3,
                "clue": "The 1962 novel by Anthony Burgess written in the fictional teen slang \"Nadsat\", adapted into a film by Kubrick",
                "answer": "A Clockwork Orange",
                "explanation": "Follows delinquent Alex and his gang through state conditioning.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-12",
                "points": 600,
                "difficulty": 3,
                "clue": "The English poet who wrote the epic blank-verse poem \"Paradise Lost\" in 1667 depicting the Fall of Man",
                "answer": "John Milton",
                "explanation": "Dictated the poem after losing his eyesight completely.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-13",
                "points": 600,
                "difficulty": 3,
                "clue": "The 1981 novel by Salman Rushdie that won the Booker Prize, dealing with India's transition from British colonialism",
                "answer": "Midnight's Children",
                "explanation": "Children born at midnight on August 15, 1947 possess telepathic powers.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-14",
                "points": 600,
                "difficulty": 3,
                "clue": "The 1915 novel by D.H. Lawrence exploring three generations of the Brangwen family, banned for obscenity in Britain",
                "answer": "The Rainbow",
                "explanation": "Its sequel is Women in Love.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-15",
                "points": 600,
                "difficulty": 3,
                "clue": "The 1929 novel by Thomas Mann about Hans Castorp's stay at a tuberculosis sanatorium in the Swiss Alps",
                "answer": "The Magic Mountain (Der Zauberberg)",
                "explanation": "An intellectual portrait of pre-WWI European civilization.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-16",
                "points": 600,
                "difficulty": 3,
                "clue": "The French philosopher and playwright who wrote the existentialist play \"No Exit\" (\"Hell is other people\")",
                "answer": "Jean-Paul Sartre",
                "explanation": "Declined the 1964 Nobel Prize in Literature.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-17",
                "points": 600,
                "difficulty": 3,
                "clue": "The 1953 play by Arthur Miller that uses the Salem witch trials of 1692 as an allegory for McCarthyism",
                "answer": "The Crucible",
                "explanation": "Protagonist John Proctor refuses to sign a false confession.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-18",
                "points": 600,
                "difficulty": 3,
                "clue": "The 1987 Pulitzer Prize-winning novel by Toni Morrison inspired by the real story of enslaved African-American Margaret Garner",
                "answer": "Beloved",
                "explanation": "Explores the psychological trauma of slavery.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-19",
                "points": 600,
                "difficulty": 3,
                "clue": "The 14th-century Middle English collection of 24 stories written in rhyming couplets by Geoffrey Chaucer",
                "answer": "The Canterbury Tales",
                "explanation": "Pilgrims journey to the shrine of Saint Thomas Becket in Canterbury.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d3-20",
                "points": 600,
                "difficulty": 3,
                "clue": "The 1928 novel by Virginia Woolf depicting an English poet who changes sex from man to woman and lives for centuries",
                "answer": "Orlando: A Biography",
                "explanation": "Inspired by Woolf's lover, aristocratic author Vita Sackville-West.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-1",
                "points": 800,
                "difficulty": 4,
                "clue": "The 1973 postmodern masterpiece by Thomas Pynchon revolving around the V-2 rocket in WWII Europe",
                "answer": "Gravity's Rainbow",
                "explanation": "Begins with the line \"A screaming comes across the sky.\"",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-2",
                "points": 800,
                "difficulty": 4,
                "clue": "The 18th-century French philosophical novella by Voltaire satirizing Leibnizian optimism (\"all is for the best\")",
                "answer": "Candide (Candide, ou l'Optimisme)",
                "explanation": "Follows Candide, Pangloss, and Cunegonde through disasters.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-3",
                "points": 800,
                "difficulty": 4,
                "clue": "The Roman poet who wrote the monumental mythological narrative poem \"Metamorphoses\" in 15 books",
                "answer": "Ovid (Publius Ovidius Naso)",
                "explanation": "Banished by Emperor Augustus to Tomis on the Black Sea in 8 AD.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-4",
                "points": 800,
                "difficulty": 4,
                "clue": "The 1969 novel by Kurt Vonnegut featuring Billy Pilgrim who has become \"unstuck in time\" during the firebombing of Dresden",
                "answer": "Slaughterhouse-Five",
                "explanation": "Popularized the fatalistic refrain \"So it goes.\"",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-5",
                "points": 800,
                "difficulty": 4,
                "clue": "The 19th-century Russian author who wrote \"Fathers and Sons\" (1862), popularizing the term \"nihilism\"",
                "answer": "Ivan Turgenev",
                "explanation": "Explored generational ideological conflict between liberals and nihilists.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-6",
                "points": 800,
                "difficulty": 4,
                "clue": "The Japanese author who won the 1968 Nobel Prize in Literature for works like \"Snow Country\" and \"Thousand Cranes\"",
                "answer": "Yasunari Kawabata",
                "explanation": "First Japanese author to be awarded the Nobel Prize in Literature.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-7",
                "points": 800,
                "difficulty": 4,
                "clue": "The Italian author who wrote \"If on a winter's night a traveler\" (1979), a meta-novel addressed directly to the reader",
                "answer": "Italo Calvino",
                "explanation": "Member of the French Oulipo literary workshop.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-8",
                "points": 800,
                "difficulty": 4,
                "clue": "The 1957 beat generation novel written by Jack Kerouac on a continuous 120-foot scroll of tracing paper",
                "answer": "On the Road",
                "explanation": "Follows Sal Paradise and Dean Moriarty across America.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-9",
                "points": 800,
                "difficulty": 4,
                "clue": "The Portuguese poet who wrote under over 70 distinct \"heteronyms\", including Alberto Caeiro and Alvaro de Campos",
                "answer": "Fernando Pessoa",
                "explanation": "Author of the posthumously published masterpiece The Book of Disquiet.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-10",
                "points": 800,
                "difficulty": 4,
                "clue": "The epic Sanskrit poem of ancient India comprising over 200,000 verse lines that contains the Bhagavad Gita",
                "answer": "The Mahabharata",
                "explanation": "Attributes authorship to the sage Vyasa.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-11",
                "points": 800,
                "difficulty": 4,
                "clue": "The 1901 novel by Thomas Mann chronicling four generations of a wealthy merchant family in Lubeck",
                "answer": "Buddenbrooks",
                "explanation": "Won Mann the Nobel Prize in Literature in 1929.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-12",
                "points": 800,
                "difficulty": 4,
                "clue": "The 1938 novel by Samuel Beckett written in English before he transitioned to writing primarily in French",
                "answer": "Murphy",
                "explanation": "Follows an eccentric Irish intellectual in London.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-13",
                "points": 800,
                "difficulty": 4,
                "clue": "The long narrative poem in ottava rima by Lord Byron about a legendary libertine who is easily seduced by women",
                "answer": "Don Juan",
                "explanation": "Byron inverted the traditional legend, making Juan the victim of seduction.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-14",
                "points": 800,
                "difficulty": 4,
                "clue": "The 1996 monumental 1,079-page maximalist novel by David Foster Wallace set in Enfield, Massachusetts and an addiction clinic",
                "answer": "Infinite Jest",
                "explanation": "Features 388 endnotes, some with their own footnotes.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-15",
                "points": 800,
                "difficulty": 4,
                "clue": "The Latin-language philosophical work by Sir Thomas More in 1516 that coined the word for an ideal society",
                "answer": "Utopia",
                "explanation": "Derived from the Greek meaning \"no place\" or \"good place\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-16",
                "points": 800,
                "difficulty": 4,
                "clue": "The Greek poet who wrote the \"Theogony\" and \"Works and Days\" in dactylic hexameter around 700 BC",
                "answer": "Hesiod",
                "explanation": "Earliest known Greek poet to refer to himself in his poetry.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-17",
                "points": 800,
                "difficulty": 4,
                "clue": "The 1974 novel by Ursula K. Le Guin contrasting the utopian anarchist world of Anarres with capitalist Urras",
                "answer": "The Dispossessed",
                "explanation": "Won both the Hugo and Nebula Awards for Best Novel.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-18",
                "points": 800,
                "difficulty": 4,
                "clue": "The 1947 French novel by Albert Camus chronicling a deadly epidemic quarantined in the Algerian city of Oran",
                "answer": "The Plague (La Peste)",
                "explanation": "A major philosophical allegory of the German occupation of France.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-19",
                "points": 800,
                "difficulty": 4,
                "clue": "The 18th-century English epistolary novel by Samuel Richardson spanning over a million words about a virtuous woman",
                "answer": "Clarissa (The History of a Young Lady)",
                "explanation": "One of the longest novels written in the English language.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d4-20",
                "points": 800,
                "difficulty": 4,
                "clue": "The 1930 novel by William Faulkner narrated by 15 different characters in 59 interior monologues as they transport a corpse",
                "answer": "As I Lay Dying",
                "explanation": "Features the famous single-sentence chapter by Vardaman: \"My mother is a fish.\"",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-1",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1928 French surrealist novel by Andre Breton that begins with the haunting question \"Who am I?\"",
                "answer": "Nadja",
                "explanation": "Illustrated with documentary photographs instead of descriptions.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-2",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 11th-century Japanese epic by noblewoman Murasaki Shikibu considered the world's first novel",
                "answer": "The Tale of Genji (Genji Monogatari)",
                "explanation": "Follows the romantic life of the \"Shining Prince\" Hikaru Genji.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-3",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1955 novel by Mexican author Juan Rulfo that deeply inspired Gabriel Garcia Marquez and magical realism",
                "answer": "Pedro Paramo",
                "explanation": "Narrator Juan Preciado travels to Comala, finding a ghost town.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-4",
                "points": 1000,
                "difficulty": 5,
                "clue": "The monumental Roman historical poem by Lucan recounting the civil war between Julius Caesar and Pompey",
                "answer": "Pharsalia (De Bello Civili)",
                "explanation": "Distinguished by rejecting traditional divine intervention by the gods.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-5",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1930 Austrian modernist novel in three volumes by Robert Musil left unfinished at his death in 1942",
                "answer": "The Man Without Qualities (Der Mann ohne Eigenschaften)",
                "explanation": "Set in the Austro-Hungarian Empire, satirically dubbed \"Kakania\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-6",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1978 French novel by Georges Perec written according to the knight's tour chess algorithm across a Parisian apartment building",
                "answer": "Life: A User's Manual (La Vie mode d'emploi)",
                "explanation": "Perec was a prominent member of the Oulipo constraint-based writing group.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-7",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1939 Irish novel by Flann O'Brien featuring multiple conflicting story layers where fictional characters drug their author",
                "answer": "At Swim-Two-Birds",
                "explanation": "Praised by Graham Greene, Dylan Thomas, and James Joyce.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-8",
                "points": 1000,
                "difficulty": 5,
                "clue": "The medieval Old English heroic epic preserved in the Nowell Codex surviving in a single manuscript",
                "answer": "Beowulf",
                "explanation": "Composed in alliterative verse, defeating Grendel, Grendel's mother, and a dragon.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-9",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1971 novel by German author Heinrich Boll narrated as an investigative documentary about a cleaning lady",
                "answer": "Group Portrait with Lady (Gruppenbild mit Dame)",
                "explanation": "Helped Boll win the Nobel Prize in Literature in 1972.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-10",
                "points": 1000,
                "difficulty": 5,
                "clue": "The obscure Greek tragic poet of the Hellenistic era whose cryptic 1,474-iambic poem \"Alexandra\" features Cassandra's prophecies",
                "answer": "Lycophron",
                "explanation": "Notorious for bizarre vocabulary and extreme mythological obscurity.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-11",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1890 French decadent novel by Joris-Karl Huysmans starring the reclusive aesthete Jean des Esseintes",
                "answer": "Against Nature (A rebours)",
                "explanation": "Referred to by Oscar Wilde as the \"yellow book\" that poisons Dorian Gray.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-12",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1963 Argentine counter-novel by Julio Cortazar designed with 155 chapters to be read either sequentially or by hopping",
                "answer": "Hopscotch (Rayuela)",
                "explanation": "Pioneered experimental non-linear Latin American literature.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-13",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1678 Christian allegorical prose work written by John Bunyan while imprisoned in Bedford county gaol",
                "answer": "The Pilgrim's Progress",
                "explanation": "Narrates Christian's journey from the City of Destruction to the Celestial City.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-14",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1932 novel by French author Louis-Ferdinand Celine written in raw Parisian argot recounting Ferdinand Bardamu's wanderings",
                "answer": "Journey to the End of the Night (Voyage au bout de la nuit)",
                "explanation": "Won the Prix Renaudot in 1932.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-15",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1759-1767 eccentric nine-volume novel by Laurence Sterne containing blank pages, marbled pages, and digressive footnotes",
                "answer": "The Life and Opinions of Tristram Shandy, Gentleman",
                "explanation": "The protagonist is not even born until Volume III.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-16",
                "points": 1000,
                "difficulty": 5,
                "clue": "The Old Norse mythological poetic compendium compiled in the 13th century from earlier traditional sources",
                "answer": "The Poetic Edda (Elder Edda)",
                "explanation": "Preserved in the Icelandic manuscript Codex Regius.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-17",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1952 short novel by Ernest Hemingway that earned him the Pulitzer Prize in 1953 and the 1954 Nobel Prize",
                "answer": "The Old Man and the Sea",
                "explanation": "Depicts an aging Cuban fisherman named Santiago battling a giant marlin.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-18",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1904 tragedy by Anton Chekhov about an aristocratic Russian family who loses their estate to the son of a former serf",
                "answer": "The Cherry Orchard",
                "explanation": "Chekhov's final play before his death in 1904.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-19",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1975 German novel by Peter Handke recounting his mother's suicide, written in rigorous and stripped-back prose",
                "answer": "A Sorrow Beyond Dreams (Wunschloses Ungluck)",
                "explanation": "Considered one of the finest memoirs of post-war German literature.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "lit-d5-20",
                "points": 1000,
                "difficulty": 5,
                "clue": "The monumental 10th-century Persian national epic poem composed of over 50,000 couplets by the poet Ferdowsi",
                "answer": "The Shahnameh (The Book of Kings)",
                "explanation": "Chronicling the mythological and historical past of Greater Iran.",
                "image": "",
                "dailyDouble": false
              }
            ]
          },
          {
            "id": "cat-spt",
            "name": "Sports & Champions",
            "clues": [
              {
                "id": "spt-d1-1",
                "points": 200,
                "difficulty": 1,
                "clue": "The worldwide multi-sport event held every four years, originating in ancient Greece",
                "answer": "Olympic Games",
                "explanation": "The modern Olympics debuted in Athens in 1896.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-2",
                "points": 200,
                "difficulty": 1,
                "clue": "Global soccer tournament held every four years organized by FIFA",
                "answer": "FIFA World Cup",
                "explanation": "First held in Uruguay in 1930.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-3",
                "points": 200,
                "difficulty": 1,
                "clue": "Legendary basketball player known as \"His Airness\" who won six NBA titles with the Chicago Bulls",
                "answer": "Michael Jordan",
                "explanation": "Widely regarded as the greatest basketball player of all time.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-4",
                "points": 200,
                "difficulty": 1,
                "clue": "The sport in which athletes compete for the Stanley Cup",
                "answer": "Ice Hockey",
                "explanation": "The oldest existing trophy awarded to professional sports franchises in North America.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-5",
                "points": 200,
                "difficulty": 1,
                "clue": "Famous boxer who declared \"I am the greatest\" and \"Float like a butterfly, sting like a bee\"",
                "answer": "Muhammad Ali (Cassius Clay)",
                "explanation": "Won the world heavyweight championship three times.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-6",
                "points": 200,
                "difficulty": 1,
                "clue": "The annual championship game of the National Football League (NFL)",
                "answer": "Super Bowl",
                "explanation": "Watched by over 100 million viewers annually in the United States.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-7",
                "points": 200,
                "difficulty": 1,
                "clue": "Jamaican sprinter widely considered the fastest human of all time with a 9.58s 100m world record",
                "answer": "Usain Bolt",
                "explanation": "Won eight Olympic gold medals across three Olympic Games.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-8",
                "points": 200,
                "difficulty": 1,
                "clue": "The prestigious tennis tournament played on grass courts in London",
                "answer": "Wimbledon (The Championships, Wimbledon)",
                "explanation": "Founded in 1877, the oldest tennis tournament in the world.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-9",
                "points": 200,
                "difficulty": 1,
                "clue": "Argentine soccer superstar who led his country to victory in the 2022 FIFA World Cup",
                "answer": "Lionel Messi",
                "explanation": "Won an unprecedented eight Ballon d'Or awards.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-10",
                "points": 200,
                "difficulty": 1,
                "clue": "The sport in which competitors hit a small white ball with clubs into 18 holes",
                "answer": "Golf",
                "explanation": "The four major championships include The Masters and the PGA Championship.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-11",
                "points": 200,
                "difficulty": 1,
                "clue": "Legendary Brazilian soccer player who won three World Cups (1958, 1962, 1970)",
                "answer": "Pele (Edson Arantes do Nascimento)",
                "explanation": "Scored over 1,000 career goals.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-12",
                "points": 200,
                "difficulty": 1,
                "clue": "Famous American swimmer who won an all-time record 23 Olympic gold medals",
                "answer": "Michael Phelps",
                "explanation": "Total of 28 Olympic medals across four games.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-13",
                "points": 200,
                "difficulty": 1,
                "clue": "The sport played on a diamond with bases, a bat, and home runs",
                "answer": "Baseball",
                "explanation": "Known as \"America's national pastime\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-14",
                "points": 200,
                "difficulty": 1,
                "clue": "Portuguese soccer superstar who has scored over 850 career goals and won 5 Ballon d'Or awards",
                "answer": "Cristiano Ronaldo",
                "explanation": "Starred for Manchester United, Real Madrid, Juventus, and Al Nassr.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-15",
                "points": 200,
                "difficulty": 1,
                "clue": "American tennis legend who won 23 Grand Slam singles titles in the Open Era",
                "answer": "Serena Williams",
                "explanation": "Dominant force in women's tennis alongside her sister Venus.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-16",
                "points": 200,
                "difficulty": 1,
                "clue": "The annual multi-stage bicycle race held primarily in France each July",
                "answer": "Tour de France",
                "explanation": "First organized in 1903.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-17",
                "points": 200,
                "difficulty": 1,
                "clue": "Number of players on the court for one team in a standard basketball game",
                "answer": "5 players",
                "explanation": "10 players total on the court simultaneously.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-18",
                "points": 200,
                "difficulty": 1,
                "clue": "The prestigious golf tournament where the winner receives a famous Green Jacket",
                "answer": "The Masters Tournament",
                "explanation": "Held annually at Augusta National Golf Club in Georgia.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-19",
                "points": 200,
                "difficulty": 1,
                "clue": "Sport that uses a shuttlecock (or \"birdie\") hit back and forth across a net",
                "answer": "Badminton",
                "explanation": "One of the fastest racquet sports in the world.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d1-20",
                "points": 200,
                "difficulty": 1,
                "clue": "The premier open-wheel single-seater motorsport championship sanctioned by the FIA",
                "answer": "Formula One (F1)",
                "explanation": "Inaugural season took place in 1950.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-1",
                "points": 400,
                "difficulty": 2,
                "clue": "The country that has won the most FIFA World Cup titles in men's soccer (5 titles)",
                "answer": "Brazil",
                "explanation": "Won in 1958, 1962, 1970, 1994, and 2002.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-2",
                "points": 400,
                "difficulty": 2,
                "clue": "The four Grand Slam tennis tournaments",
                "answer": "Australian Open, French Open (Roland Garros), Wimbledon, US Open",
                "explanation": "Winning all four in a single calendar year is a \"Calendar Slam\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-3",
                "points": 400,
                "difficulty": 2,
                "clue": "The NBA player who scored 100 points in a single game in 1962 for the Philadelphia Warriors",
                "answer": "Wilt Chamberlain",
                "explanation": "Achieved against the New York Knicks on March 2, 1962.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-4",
                "points": 400,
                "difficulty": 2,
                "clue": "The legendary New York Yankees baseball player nicknamed \"The Sultan of Swat\"",
                "answer": "Babe Ruth (George Herman Ruth)",
                "explanation": "Hit 714 career home runs.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-5",
                "points": 400,
                "difficulty": 2,
                "clue": "The NFL quarterback who won seven Super Bowl titles with the New England Patriots and Tampa Bay Buccaneers",
                "answer": "Tom Brady",
                "explanation": "Widely regarded as the greatest quarterback in NFL history.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-6",
                "points": 400,
                "difficulty": 2,
                "clue": "The martial art that originated in Japan whose name translates to \"the gentle way\"",
                "answer": "Judo",
                "explanation": "Founded in 1882 by Kano Jigoro.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-7",
                "points": 400,
                "difficulty": 2,
                "clue": "The Canadian ice hockey legend nicknamed \"The Great One\" who scored 2,857 career NHL points",
                "answer": "Wayne Gretzky",
                "explanation": "His jersey number 99 was retired league-wide by the NHL.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-8",
                "points": 400,
                "difficulty": 2,
                "clue": "The national sport of Japan, featuring heavyweight wrestlers grappling inside a ring called a dohyo",
                "answer": "Sumo Wrestling",
                "explanation": "Roots dating back centuries to Shinto rituals.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-9",
                "points": 400,
                "difficulty": 2,
                "clue": "The seven-time Formula One World Champion who drove for Ferrari during a dominant 2000-2004 stretch",
                "answer": "Michael Schumacher",
                "explanation": "Shares the record of seven titles with Lewis Hamilton.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-10",
                "points": 400,
                "difficulty": 2,
                "clue": "The distance of an official marathon race in miles and yards (or kilometers)",
                "answer": "26 miles 385 yards (42.195 km)",
                "explanation": "Standardized at the 1908 London Olympics.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-11",
                "points": 400,
                "difficulty": 2,
                "clue": "The basketball superstar who broke Kareem Abdul-Jabbar's all-time NBA scoring record in 2023",
                "answer": "LeBron James",
                "explanation": "Has won four NBA championships with three different franchises.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-12",
                "points": 400,
                "difficulty": 2,
                "clue": "The international team cricket match format that lasts up to five days",
                "answer": "Test Cricket",
                "explanation": "Played in traditional white attire with a red ball.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-13",
                "points": 400,
                "difficulty": 2,
                "clue": "The French tennis stadium and Grand Slam tournament played entirely on red clay courts",
                "answer": "Roland Garros (French Open)",
                "explanation": "Named after pioneering French aviator Roland Garros.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-14",
                "points": 400,
                "difficulty": 2,
                "clue": "The sport that features terms like \"spare\", \"strike\", \"turkey\", and \"gutter ball\"",
                "answer": "Ten-pin Bowling",
                "explanation": "A perfect game is 300 points from 12 consecutive strikes.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-15",
                "points": 400,
                "difficulty": 2,
                "clue": "The legendary Swiss tennis player who won 20 Grand Slam singles titles and 8 Wimbledon crowns",
                "answer": "Roger Federer",
                "explanation": "Known for effortless footwork and an elegant single-handed backhand.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-16",
                "points": 400,
                "difficulty": 2,
                "clue": "The team that won the first two Super Bowls (I and II), coached by Vince Lombardi",
                "answer": "Green Bay Packers",
                "explanation": "The Super Bowl trophy is named in Vince Lombardi's honor.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-17",
                "points": 400,
                "difficulty": 2,
                "clue": "The sport governed by World Rugby where teams score tries and conversions",
                "answer": "Rugby (Rugby Union / League)",
                "explanation": "Origin legend attributes the sport to William Webb Ellis at Rugby School.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-18",
                "points": 400,
                "difficulty": 2,
                "clue": "The country that won the inaugural FIFA World Cup in 1930, defeating Argentina in the final",
                "answer": "Uruguay",
                "explanation": "Hosted the tournament in Montevideo.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-19",
                "points": 400,
                "difficulty": 2,
                "clue": "The legendary heavyweight boxing fight between Muhammad Ali and George Foreman in 1974 in Zaire",
                "answer": "Rumble in the Jungle",
                "explanation": "Ali famously deployed his \"rope-a-dope\" strategy.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d2-20",
                "points": 400,
                "difficulty": 2,
                "clue": "The Davis Cup is the premier international men's team tournament in which racquet sport?",
                "answer": "Tennis",
                "explanation": "Founded in 1900 by Dwight F. Davis, the competition is governed by the ITF.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-1",
                "points": 600,
                "difficulty": 3,
                "clue": "The only athlete to win Olympic gold medals in the 100m, 200m, and long jump at the same Olympics (1936)",
                "answer": "Jesse Owens",
                "explanation": "Disproved Nazi racial supremacy theories at the Berlin Games.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-2",
                "points": 600,
                "difficulty": 3,
                "clue": "The Formula One driver who won three world championships before tragically dying at Imola in 1994",
                "answer": "Ayrton Senna",
                "explanation": "Renowned for unmatched wet-weather mastery and qualifying speed.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-3",
                "points": 600,
                "difficulty": 3,
                "clue": "The baseball player who broke Major League Baseball's color barrier in 1947 with the Brooklyn Dodgers",
                "answer": "Jackie Robinson",
                "explanation": "His uniform number 42 was retired across all MLB teams.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-4",
                "points": 600,
                "difficulty": 3,
                "clue": "The Spanish tennis legend nicknamed the \"King of Clay\" who won 14 French Open titles",
                "answer": "Rafael Nadal",
                "explanation": "Boasts an astounding 112-4 win-loss match record at Roland Garros.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-5",
                "points": 600,
                "difficulty": 3,
                "clue": "The English Premier League football club that went an entire 38-game season undefeated in 2003-2004 (\"The Invincibles\")",
                "answer": "Arsenal F.C.",
                "explanation": "Managed by Arsene Wenger.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-6",
                "points": 600,
                "difficulty": 3,
                "clue": "The legendary Czech long-distance runner who won the 5,000m, 10,000m, and Marathon at the 1952 Helsinki Olympics",
                "answer": "Emil Zatopek",
                "explanation": "Nicknamed the \"Czech Locomotive\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-7",
                "points": 600,
                "difficulty": 3,
                "clue": "The only player in NBA history to average a triple-double across four complete seasons",
                "answer": "Russell Westbrook",
                "explanation": "Broke Oscar Robertson's all-time triple-double record.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-8",
                "points": 600,
                "difficulty": 3,
                "clue": "The cricket batsman from Australia widely regarded as the greatest of all time with a 99.94 Test batting average",
                "answer": "Sir Donald Bradman (The Don)",
                "explanation": "Needed just four runs in his final innings to finish with an average of 100.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-9",
                "points": 600,
                "difficulty": 3,
                "clue": "The cyclist who won five consecutive Tour de France titles from 1991 to 1995 without doping disqualification",
                "answer": "Miguel Indurain",
                "explanation": "Spanish powerhouse known for dominant time-trial performances.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-10",
                "points": 600,
                "difficulty": 3,
                "clue": "The term used in baseball when a batter hits a single, double, triple, and home run in the same game",
                "answer": "Hitting for the Cycle",
                "explanation": "One of the rarest individual batting achievements in baseball.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-11",
                "points": 600,
                "difficulty": 3,
                "clue": "The American gymnast who has won an all-time record 37 Olympic and World Championship medals",
                "answer": "Simone Biles",
                "explanation": "Has five gymnastics skills officially named after her in the Code of Points.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-12",
                "points": 600,
                "difficulty": 3,
                "clue": "The legendary boxer who retired with a perfect 49-0 record as heavyweight champion in 1956",
                "answer": "Rocky Marciano",
                "explanation": "The only heavyweight champion to finish his career undefeated.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-13",
                "points": 600,
                "difficulty": 3,
                "clue": "The country that won the women's FIFA World Cup in 1991, 1999, 2015, and 2019",
                "answer": "United States (USWNT)",
                "explanation": "The most successful national team in women's soccer history.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-14",
                "points": 600,
                "difficulty": 3,
                "clue": "The iconic Australian sailor and skipper who won the 1983 America's Cup, ending the NYYC's 132-year winning streak",
                "answer": "John Bertrand (Australia II)",
                "explanation": "Featured the innovative winged keel designed by Ben Lexcen.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-15",
                "points": 600,
                "difficulty": 3,
                "clue": "The basketball coach who won 10 NCAA national championships with the UCLA Bruins in a 12-year span",
                "answer": "John Wooden",
                "explanation": "Known as the \"Wizard of Westwood\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-16",
                "points": 600,
                "difficulty": 3,
                "clue": "The Roman stadium capable of seating 150,000 spectators that was used primarily for chariot races",
                "answer": "Circus Maximus",
                "explanation": "Situated in the valley between the Aventine and Palatine hills.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-17",
                "points": 600,
                "difficulty": 3,
                "clue": "The legendary Kenyan runner who became the first person to run a marathon in under two hours (1:59:40) in 2019",
                "answer": "Eliud Kipchoge",
                "explanation": "Accomplished in Vienna under controlled experimental conditions.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-18",
                "points": 600,
                "difficulty": 3,
                "clue": "The Boston Celtics center who won 11 NBA championships in 13 seasons as player and player-coach",
                "answer": "Bill Russell",
                "explanation": "The NBA Finals MVP Award is named in his honor.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-19",
                "points": 600,
                "difficulty": 3,
                "clue": "The legendary 1975 boxing trilogy finale between Muhammad Ali and Joe Frazier in the Philippines",
                "answer": "Thrilla in Manila",
                "explanation": "Ali won by corner retirement after the 14th brutal round.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d3-20",
                "points": 600,
                "difficulty": 3,
                "clue": "The South American club football competition equivalent to the European UEFA Champions League",
                "answer": "Copa Libertadores (Copa CONMEBOL Libertadores)",
                "explanation": "Named in honor of the leaders of the South American wars of independence.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-1",
                "points": 800,
                "difficulty": 4,
                "clue": "The first modern Summer Olympic Games in 1896 featured how many participating nations",
                "answer": "14 nations",
                "explanation": "241 male athletes competed across 43 events.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-2",
                "points": 800,
                "difficulty": 4,
                "clue": "The Formula One team that has competed in every single Formula One World Championship season since 1950",
                "answer": "Scuderia Ferrari",
                "explanation": "Has won 16 Constructors' Championships and 15 Drivers' Championships.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-3",
                "points": 800,
                "difficulty": 4,
                "clue": "The legendary Soviet goalkeeper nicknamed the \"Black Spider\" who is the only goalkeeper to win the Ballon d'Or (1963)",
                "answer": "Lev Yashin",
                "explanation": "Saved an estimated 150 penalty kicks during his career.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-4",
                "points": 800,
                "difficulty": 4,
                "clue": "The baseball pitcher who threw a 1970 no-hitter while reportedly under the influence of LSD",
                "answer": "Dock Ellis",
                "explanation": "Pitched the Pittsburgh Pirates to a 2-0 victory over the San Diego Padres.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-5",
                "points": 800,
                "difficulty": 4,
                "clue": "The yacht that won the inaugural 1851 race around the Isle of Wight that established the America's Cup",
                "answer": "America (The Schooner America)",
                "explanation": "Represented the New York Yacht Club.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-6",
                "points": 800,
                "difficulty": 4,
                "clue": "The first driver in NASCAR Cup Series history to win seven championships, nicknamed \"The King\"",
                "answer": "Richard Petty",
                "explanation": "Won a record 200 premier series races.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-7",
                "points": 800,
                "difficulty": 4,
                "clue": "The legendary Hungarian football team of the early 1950s led by Ferenc Puskas was known by this moniker",
                "answer": "The Mighty Magyars (Golden Team)",
                "explanation": "Went undefeated in 31 consecutive matches before the 1954 World Cup final.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-8",
                "points": 800,
                "difficulty": 4,
                "clue": "The African-American tennis pioneer who became the first Black player selected to the US Davis Cup team, winning 3 Grand Slams",
                "answer": "Arthur Ashe",
                "explanation": "The main stadium at the US Open is named in his honor.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-9",
                "points": 800,
                "difficulty": 4,
                "clue": "The 1954 World Cup final in Switzerland where West Germany upset the seemingly unbeatable Hungarian \"Golden Team\"",
                "answer": "Miracle of Bern (Das Wunder von Bern)",
                "explanation": "West Germany won 3-2 after trailing 2-0 in eight minutes.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-10",
                "points": 800,
                "difficulty": 4,
                "clue": "The legendary heavyweight champion who scored 44 knockouts in 50 wins and was known as \"Iron Mike\"",
                "answer": "Mike Tyson",
                "explanation": "Became the youngest heavyweight champion in history at age 20 in 1986.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-11",
                "points": 800,
                "difficulty": 4,
                "clue": "The Scottish football manager who managed Manchester United from 1986 to 2013, winning 38 trophies",
                "answer": "Sir Alex Ferguson",
                "explanation": "Won 13 Premier League titles and 2 UEFA Champions Leagues.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-12",
                "points": 800,
                "difficulty": 4,
                "clue": "The only player to have won the European Golden Shoe with three different clubs",
                "answer": "Cristiano Ronaldo (or Mario Jardel / Luis Suarez in 2 leagues)",
                "explanation": "Luis Suarez won with Ajax, Liverpool, and Barcelona.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-13",
                "points": 800,
                "difficulty": 4,
                "clue": "The Finnish distance runner nicknamed the \"Flying Finn\" who won nine Olympic gold medals in the 1920s",
                "answer": "Paavo Nurmi",
                "explanation": "Set 22 official world records during his legendary career.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-14",
                "points": 800,
                "difficulty": 4,
                "clue": "The NBA player nicknamed \"The Answer\" who won the 2001 MVP award and four scoring titles with the 76ers",
                "answer": "Allen Iverson",
                "explanation": "Known for his crossover dribble and cultural impact.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-15",
                "points": 800,
                "difficulty": 4,
                "clue": "The traditional Maori ceremonial dance performed by New Zealand's All Blacks rugby team before international matches",
                "answer": "Ka Mate (The Haka)",
                "explanation": "Composed by Te Rauparaha, war leader of the Ngati Toa.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-16",
                "points": 800,
                "difficulty": 4,
                "clue": "The Canadian sprinter who was stripped of his 1988 Seoul Olympic 100m gold medal and world record after testing positive for stanozolol",
                "answer": "Ben Johnson",
                "explanation": "Awarded subsequently to Carl Lewis.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-17",
                "points": 800,
                "difficulty": 4,
                "clue": "The only goalkeeper in football history to have scored over 100 competitive goals in official matches",
                "answer": "Rogerio Ceni",
                "explanation": "Brazilian goalkeeper for Sao Paulo scored 131 goals from free kicks and penalties.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-18",
                "points": 800,
                "difficulty": 4,
                "clue": "The high jumper who revolutionized the sport at the 1968 Mexico City Olympics by jumping backward over the bar",
                "answer": "Dick Fosbury (The Fosbury Flop)",
                "explanation": "Won gold and transformed high-jumping technique permanently.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-19",
                "points": 800,
                "difficulty": 4,
                "clue": "The chess grandmaster who became the 11th World Chess Champion in 1972 after defeating Boris Spassky in Reykjavik",
                "answer": "Bobby Fischer",
                "explanation": "Broke a 24-year streak of Soviet World Chess Championship dominance.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d4-20",
                "points": 800,
                "difficulty": 4,
                "clue": "The famous 1982 football play where Cal used five lateral passes through the Stanford band to score the winning touchdown",
                "answer": "The Play",
                "explanation": "Cal defeated Stanford 25-20 as the band celebrated prematurely.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-1",
                "points": 1000,
                "difficulty": 5,
                "clue": "The first unassisted triple play in a World Series game was executed in 1920 by this Cleveland second baseman",
                "answer": "Bill Wambsganss",
                "explanation": "Accomplished in Game 5 against the Brooklyn Robins.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-2",
                "points": 1000,
                "difficulty": 5,
                "clue": "The legendary Italian racing driver who won both the 1950 Mille Miglia and Formula One's first-ever official race at Silverstone",
                "answer": "Giuseppe \"Nino\" Farina",
                "explanation": "Became the first official Formula One World Drivers' Champion in 1950.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-3",
                "points": 1000,
                "difficulty": 5,
                "clue": "The only football club to have won the European Treble (Domestic League, Cup, and Champions League) twice",
                "answer": "FC Barcelona and Bayern Munich",
                "explanation": "Barcelona won in 2009 and 2015; Bayern won in 2013 and 2020.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-4",
                "points": 1000,
                "difficulty": 5,
                "clue": "The Scottish racing driver who won three Formula One World Championships (1969, 1971, 1973) and pioneered motorsport safety reforms",
                "answer": "Sir Jackie Stewart (The Flying Scot)",
                "explanation": "Campaigned for full-face helmets, seatbelts, and medical facilities.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-5",
                "points": 1000,
                "difficulty": 5,
                "clue": "The historic 1956 Summer Olympics water polo match between Hungary and the USSR that ended in violence and blood",
                "answer": "Blood in the Water Match (Melbourne 1956)",
                "explanation": "Took place shortly after the Soviet military crushed the Hungarian Revolution.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-6",
                "points": 1000,
                "difficulty": 5,
                "clue": "The American track and field athlete who held the world record in the long jump (8.90m) for nearly 23 years from 1968 to 1991",
                "answer": "Bob Beamon",
                "explanation": "Smashed the previous world record by 55 cm (21.7 inches) in Mexico City.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-7",
                "points": 1000,
                "difficulty": 5,
                "clue": "The cricket bowler from Sri Lanka who holds the all-time world record with 800 Test wickets",
                "answer": "Muttiah Muralitharan",
                "explanation": "Took his 800th wicket with the final ball of his final Test match in 2010.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-8",
                "points": 1000,
                "difficulty": 5,
                "clue": "The legendary German footballer nicknamed \"Der Kaiser\" who invented the modern sweeper / libero role",
                "answer": "Franz Beckenbauer",
                "explanation": "Won the World Cup as captain in 1974 and as manager in 1990.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-9",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1938 tennis Grand Slam winner who was the first tennis player to win all four major titles in a single calendar year",
                "answer": "Don Budge",
                "explanation": "Achieved the men's singles Grand Slam in 1938.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-10",
                "points": 1000,
                "difficulty": 5,
                "clue": "The Japanese judo master who won 203 consecutive matches between 1977 and 1985 before retiring undefeated",
                "answer": "Yasuhiro Yamashita",
                "explanation": "Won gold at the 1984 Los Angeles Olympics despite a torn calf muscle.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-11",
                "points": 1000,
                "difficulty": 5,
                "clue": "The only player in NBA history to lead the league in points, assists, and steals in the same season (1973)",
                "answer": "Nate \"Tiny\" Archibald",
                "explanation": "Achieved with the Kansas City-Omaha Kings.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-12",
                "points": 1000,
                "difficulty": 5,
                "clue": "The ancient Greek pankratiast who famously died during his final Olympic bout in 564 BC but was crowned champion posthumously",
                "answer": "Arrhichion of Phigalia",
                "explanation": "His opponent conceded defeat from a dislocated toe as Arrhichion died of strangulation.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-13",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1950 World Cup match known as the \"Maracanazo\" where Uruguay stunned host Brazil 2-1 before 200,000 spectators",
                "answer": "The Maracanazo",
                "explanation": "Alcides Ghiggia scored the winning goal in the 79th minute.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-14",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1904 Olympic marathon winner who was nearly killed by his trainers administering him strychnine and brandy as stimulants",
                "answer": "Thomas Hicks",
                "explanation": "Collapsed after crossing the finish line in Saint Louis.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-15",
                "points": 1000,
                "difficulty": 5,
                "clue": "The legendary Romanian gymnast who scored the first-ever perfect 10.0 in modern Olympic gymnastics history at Montreal 1976",
                "answer": "Nadia Comaneci",
                "explanation": "The scoreboard could only display 1.00 because it lacked four digits.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-16",
                "points": 1000,
                "difficulty": 5,
                "clue": "The only baseball player in MLB history to play in a World Series and an NFL Super Bowl",
                "answer": "Deion Sanders",
                "explanation": "Won two Super Bowls (49ers, Cowboys) and played in the 1992 World Series (Braves).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-17",
                "points": 1000,
                "difficulty": 5,
                "clue": "The Australian rules football competition's highest individual honor awarded annually to the fairest and best player",
                "answer": "Brownlow Medal",
                "explanation": "Named in honor of Charles Brownlow.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-18",
                "points": 1000,
                "difficulty": 5,
                "clue": "The 1972 Olympic basketball final where the USSR defeated the USA 51-50 on a controversial last-second basket by this player",
                "answer": "Alexander Belov",
                "explanation": "The final three seconds were controversially replayed twice by officials.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-19",
                "points": 1000,
                "difficulty": 5,
                "clue": "The heavyweight boxing champion from 1908 to 1915 who was the first African-American world heavyweight champion",
                "answer": "Jack Johnson",
                "explanation": "Defeated James J. Jeffries in the 1910 \"Fight of the Century\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "spt-d5-20",
                "points": 1000,
                "difficulty": 5,
                "clue": "The distance of the famous 1954 \"Miracle Mile\" race in Vancouver where Roger Bannister and John Landy both broke four minutes",
                "answer": "One Mile (1,609.34 meters)",
                "explanation": "Bannister won in 3:58.8 as Landy looked over his left shoulder.",
                "image": "",
                "dailyDouble": false
              }
            ]
          },
          {
            "id": "cat-food",
            "name": "Food & World Cuisine",
            "clues": [
              {
                "id": "food-d1-1",
                "points": 200,
                "difficulty": 1,
                "clue": "Popular Italian flatbread topped with tomato sauce, mozzarella cheese, and baked in an oven",
                "answer": "Pizza",
                "explanation": "Originated in Naples, Italy in the 18th or early 19th century.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-2",
                "points": 200,
                "difficulty": 1,
                "clue": "Traditional Japanese dish consisting of vinegared rice served with raw seafood or vegetables",
                "answer": "Sushi",
                "explanation": "Originates from ancient fermenting techniques known as narezushi.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-3",
                "points": 200,
                "difficulty": 1,
                "clue": "Dairy product made by churning fermented or fresh cream",
                "answer": "Butter",
                "explanation": "Used as a spread and cooking fat across the globe.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-4",
                "points": 200,
                "difficulty": 1,
                "clue": "Mexican folded tortilla filled with seasoned meat, beans, salsa, and cheese",
                "answer": "Taco",
                "explanation": "Traditional Mexican tacos typically use soft corn tortillas.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-5",
                "points": 200,
                "difficulty": 1,
                "clue": "The primary grain used in staple Asian foods, paella, and risotto",
                "answer": "Rice",
                "explanation": "Provides more than 20% of the calories consumed worldwide by humans.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-6",
                "points": 200,
                "difficulty": 1,
                "clue": "Sweet confection made from roasted and ground cacao seeds",
                "answer": "Chocolate",
                "explanation": "Cultivated by the Olmec and Maya civilizations in Mesoamerica.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-7",
                "points": 200,
                "difficulty": 1,
                "clue": "Popular caffeinated beverage brewed from roasted beans of the Coffea plant",
                "answer": "Coffee",
                "explanation": "Discovered in Ethiopia, with early cultivation in Yemen.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-8",
                "points": 200,
                "difficulty": 1,
                "clue": "Classic Italian pasta dish made with eggs, hard cheese (Pecorino Romano), guanciale, and black pepper",
                "answer": "Carbonara",
                "explanation": "Originated in Rome in the mid-20th century.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-9",
                "points": 200,
                "difficulty": 1,
                "clue": "Liquid condiment made from fermented soybeans, roasted grains, and brine",
                "answer": "Soy Sauce",
                "explanation": "Used extensively in East and Southeast Asian cuisines.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-10",
                "points": 200,
                "difficulty": 1,
                "clue": "Popular dessert made by freezing a mixture of milk, cream, sugar, and flavorings",
                "answer": "Ice Cream",
                "explanation": "Dating back in primitive forms to ancient China and Persia.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-11",
                "points": 200,
                "difficulty": 1,
                "clue": "The key ingredient in traditional guacamole",
                "answer": "Avocado",
                "explanation": "Native to the Americas and rich in healthy monounsaturated fats.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-12",
                "points": 200,
                "difficulty": 1,
                "clue": "French pastry known for its crescent shape and flaky, buttery layers of laminated dough",
                "answer": "Croissant",
                "explanation": "Inspired by the Austrian kipferl.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-13",
                "points": 200,
                "difficulty": 1,
                "clue": "Fermented dairy product made by bacterial fermentation of milk",
                "answer": "Yogurt",
                "explanation": "Contains live probiotic bacteria like Lactobacillus bulgaricus.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-14",
                "points": 200,
                "difficulty": 1,
                "clue": "Spicy Indian stew-like dish cooked in a sauce with aromatic spices, often served with basmati rice",
                "answer": "Curry",
                "explanation": "Derives from the Tamil word \"kari\" meaning sauce.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-15",
                "points": 200,
                "difficulty": 1,
                "clue": "Thin, unleavened pancake that originated in Brittany, France",
                "answer": "Crepe",
                "explanation": "Can be served sweet (wheat flour) or savory (buckwheat galette).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-16",
                "points": 200,
                "difficulty": 1,
                "clue": "Baking ingredient produced by the fermentation of sugars into carbon dioxide and alcohol",
                "answer": "Yeast (Saccharomyces cerevisiae)",
                "explanation": "Essential leavening agent for bread baking.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-17",
                "points": 200,
                "difficulty": 1,
                "clue": "Traditional Japanese soup made with a fermented soybean paste broth and dashi",
                "answer": "Miso Soup",
                "explanation": "Typically garnished with tofu, seaweed (wakame), and scallions.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-18",
                "points": 200,
                "difficulty": 1,
                "clue": "The national dish of Spain cooked in a wide, shallow pan with rice, saffron, and meats or seafood",
                "answer": "Paella",
                "explanation": "Originated in the region of Valencia around Lake Albufera.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-19",
                "points": 200,
                "difficulty": 1,
                "clue": "Condiment made from crushed Brassica seeds mixed with vinegar and turmeric, famously paired with pretzels and hot dogs",
                "answer": "Mustard",
                "explanation": "One of the oldest recorded condiments in culinary history.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d1-20",
                "points": 200,
                "difficulty": 1,
                "clue": "Green tea powder traditionally whisked in the Japanese tea ceremony (chanoyu)",
                "answer": "Matcha",
                "explanation": "Shade-grown before harvest to increase theanine and chlorophyll levels.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-1",
                "points": 400,
                "difficulty": 2,
                "clue": "The world's most expensive spice by weight, harvested from the stigmas of a purple crocus flower",
                "answer": "Saffron (Crocus sativus)",
                "explanation": "Takes roughly 75,000 blossoms to yield one pound of dried saffron.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-2",
                "points": 400,
                "difficulty": 2,
                "clue": "Vietnamese noodle soup consisting of fragrant broth, rice noodles, herbs, and thinly sliced beef or chicken",
                "answer": "Pho",
                "explanation": "Developed in northern Vietnam in the early 20th century.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-3",
                "points": 400,
                "difficulty": 2,
                "clue": "Hard Italian cheese made from cow's milk and aged for at least 12 months, stamped on its rind",
                "answer": "Parmigiano-Reggiano (Parmesan)",
                "explanation": "Protected by PDO laws; only made in Parma, Reggio Emilia, and surrounding areas.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-4",
                "points": 400,
                "difficulty": 2,
                "clue": "The traditional Japanese skewered chicken cooked over binchotan charcoal",
                "answer": "Yakitori",
                "explanation": "Seasoned with tare sauce or coarse sea salt.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-5",
                "points": 400,
                "difficulty": 2,
                "clue": "The spicy Korean fermented vegetable side dish typically made from napa cabbage and radishes",
                "answer": "Kimchi",
                "explanation": "Historically prepared and stored in onggi earthenware jars in winter.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-6",
                "points": 400,
                "difficulty": 2,
                "clue": "Thick, cold Spanish soup made of blended raw vegetables, predominantly ripe tomatoes, cucumbers, and olive oil",
                "answer": "Gazpacho",
                "explanation": "Originated in the southern Spanish region of Andalusia.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-7",
                "points": 400,
                "difficulty": 2,
                "clue": "The national dish of England, technically an Anglo-Indian dish featuring roasted chicken chunks in a creamy spiced tomato sauce",
                "answer": "Chicken Tikka Masala",
                "explanation": "Invented in Glasgow, Scotland in the 1970s.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-8",
                "points": 400,
                "difficulty": 2,
                "clue": "The French technique of cooking vacuum-sealed food in a precisely temperature-controlled water bath",
                "answer": "Sous-vide",
                "explanation": "French for \"under vacuum\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-9",
                "points": 400,
                "difficulty": 2,
                "clue": "The famous spicy Thai soup characterized by distinct aromatic herbs: lemongrass, galangal, and kaffir lime leaves",
                "answer": "Tom Yum (Tom Yum Goong)",
                "explanation": "Often made with fresh prawns and crushed bird's eye chilies.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-10",
                "points": 400,
                "difficulty": 2,
                "clue": "The Middle Eastern dip made from cooked, mashed chickpeas blended with tahini, lemon juice, and garlic",
                "answer": "Hummus",
                "explanation": "Garnished with extra virgin olive oil and paprika.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-11",
                "points": 400,
                "difficulty": 2,
                "clue": "The dark, edible fungus that grows underground near the roots of oak and hazel trees, highly prized by chefs",
                "answer": "Truffle",
                "explanation": "Hunted using trained pigs or dogs.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-12",
                "points": 400,
                "difficulty": 2,
                "clue": "The traditional North African dish made from steamed semolina wheat granules, often served with stewed vegetables",
                "answer": "Couscous",
                "explanation": "Staple throughout Morocco, Algeria, Tunisia, and Libya.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-13",
                "points": 400,
                "difficulty": 2,
                "clue": "The Italian dessert whose name translates literally to \"pick me up\" or \"cheer me up\"",
                "answer": "Tiramisu",
                "explanation": "Made with savoiardi (ladyfingers) dipped in coffee and mascarpone cream.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-14",
                "points": 400,
                "difficulty": 2,
                "clue": "The pungent, spiky Southeast Asian fruit known as the \"King of Fruits\", notorious for its strong smell",
                "answer": "Durian",
                "explanation": "Often banned on public transit and in hotels across Southeast Asia.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-15",
                "points": 400,
                "difficulty": 2,
                "clue": "The Mexican rich, dark sauce made from chili peppers, spices, seeds, and Mexican chocolate",
                "answer": "Mole (Mole Poblano)",
                "explanation": "Puebla and Oaxaca are considered the culinary homes of mole.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-16",
                "points": 400,
                "difficulty": 2,
                "clue": "The fermented black or green Greek table olives named after the city in southern Peloponnese",
                "answer": "Kalamata Olives",
                "explanation": "Recognized by their almond shape and dark purple color.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-17",
                "points": 400,
                "difficulty": 2,
                "clue": "The classic French stew of beef braised in red wine, beef broth, carrots, onions, and garlic",
                "answer": "Boeuf Bourguignon (Beef Burgundy)",
                "explanation": "Made famous to American households by Julia Child.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-18",
                "points": 400,
                "difficulty": 2,
                "clue": "The fermented tea beverage brewed using a symbiotic culture of bacteria and yeast (SCOBY)",
                "answer": "Kombucha",
                "explanation": "Originated in Northeast China or Manchuria around 220 BC.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-19",
                "points": 400,
                "difficulty": 2,
                "clue": "The French pastry dough used to make eclairs, profiteroles, and gougeres, leavened by steam",
                "answer": "Choux Pastry (Pate a choux)",
                "explanation": "Contains only butter, water, flour, and eggs.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d2-20",
                "points": 400,
                "difficulty": 2,
                "clue": "The savory yeast extract spread popular in Australia and New Zealand, rich in B vitamins",
                "answer": "Vegemite (or Marmite)",
                "explanation": "Developed by Dr. Cyril Callister in Melbourne in 1922.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-1",
                "points": 600,
                "difficulty": 3,
                "clue": "The scale used to measure the pungency and heat of chili peppers, based on capsaicin concentration",
                "answer": "Scoville Scale (Scoville Heat Units)",
                "explanation": "Created in 1912 by American pharmacist Wilbur Scoville.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-2",
                "points": 600,
                "difficulty": 3,
                "clue": "The prized, highly marbled Japanese beef from Tajima cattle raised in Hyogo Prefecture",
                "answer": "Kobe Beef (Wagyu)",
                "explanation": "Known for its low melting point of fat and rich umami flavor.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-3",
                "points": 600,
                "difficulty": 3,
                "clue": "The chemical reaction between amino acids and reducing sugars that gives browned food its distinctive flavor",
                "answer": "Maillard Reaction",
                "explanation": "Named after French chemist Louis-Camille Maillard in 1912.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-4",
                "points": 600,
                "difficulty": 3,
                "clue": "The famous blue cheese produced from raw sheep's milk and aged in natural Combalou caves in southern France",
                "answer": "Roquefort",
                "explanation": "Inoculated with Penicillium roqueforti mold.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-5",
                "points": 600,
                "difficulty": 3,
                "clue": "The five basic tastes recognized by human gustatory perception",
                "answer": "Sweet, Sour, Salty, Bitter, and Umami",
                "explanation": "Umami was officially identified by Japanese chemist Kikunae Ikeda in 1908.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-6",
                "points": 600,
                "difficulty": 3,
                "clue": "The traditional Peruvian dish of fresh raw fish cured in citrus juices like lime or lemon and spiced with aji",
                "answer": "Ceviche",
                "explanation": "Declared part of Peru's National Cultural Heritage.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-7",
                "points": 600,
                "difficulty": 3,
                "clue": "The aromatic culinary mixture of dried herbs typical of southeastern France (rosemary, thyme, oregano, savory)",
                "answer": "Herbes de Provence",
                "explanation": "Commercial blends often include lavender flowers.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-8",
                "points": 600,
                "difficulty": 3,
                "clue": "The traditional Georgian cheese-filled bread topped with an egg yolk and a pat of butter in a boat-shaped crust",
                "answer": "Khachapuri (Adjaruli Khachapuri)",
                "explanation": "Inscribed on the Intangible Cultural Heritage of Georgia list.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-9",
                "points": 600,
                "difficulty": 3,
                "clue": "The Japanese culinary term for the artful slicing of raw fish or meat served without rice",
                "answer": "Sashimi",
                "explanation": "Garnished with daikon radish and shiso leaves.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-10",
                "points": 600,
                "difficulty": 3,
                "clue": "The culinary classification for mother sauces codified by French chef Auguste Escoffier",
                "answer": "The Five Mother Sauces (Bechamel, Veloute, Espagnole, Hollandaise, Tomato)",
                "explanation": "Form the foundation of classical French cuisine.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-11",
                "points": 600,
                "difficulty": 3,
                "clue": "The Hawaiian dish of diced raw fish (usually yellowfin tuna) seasoned with soy sauce, sesame oil, and sea salt",
                "answer": "Poke",
                "explanation": "Native Hawaiian fishermen seasoned cut-offs from their catch.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-12",
                "points": 600,
                "difficulty": 3,
                "clue": "The sweet, almond-flavored Italian liqueur made from apricot kernels or bitter almonds",
                "answer": "Amaretto",
                "explanation": "Lazzaroni and Disaronno are famous commercial producers.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-13",
                "points": 600,
                "difficulty": 3,
                "clue": "The traditional Moroccan conical clay cooking vessel and the slow-cooked stew prepared inside it",
                "answer": "Tagine",
                "explanation": "The cone-shaped lid traps steam and returns condensed liquid to the pot.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-14",
                "points": 600,
                "difficulty": 3,
                "clue": "The Chinese Sichuan culinary seasoning that produces a tingling, numbing sensation (ma la)",
                "answer": "Sichuan Peppercorn (Huajiao)",
                "explanation": "Produces paresthesia due to the chemical hydroxy-alpha-sanshool.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-15",
                "points": 600,
                "difficulty": 3,
                "clue": "The clarified butter originating in ancient India, simmered until milk solids caramelize and are strained away",
                "answer": "Ghee",
                "explanation": "Has a very high smoke point of 250 °C (482 °F).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-16",
                "points": 600,
                "difficulty": 3,
                "clue": "The French term used in culinary arts meaning \"everything in its place\", referring to preparing and organizing ingredients",
                "answer": "Mise en place",
                "explanation": "Essential operational principle in professional kitchens.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-17",
                "points": 600,
                "difficulty": 3,
                "clue": "The traditional Greek casserole made of layered baked eggplant, spiced minced lamb or beef, and bechamel sauce",
                "answer": "Moussaka",
                "explanation": "The modern three-layer version was formalized by chef Nikolaos Tselementes in 1910.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-18",
                "points": 600,
                "difficulty": 3,
                "clue": "The type of ham from Spain produced from free-range Iberian pigs fed exclusively on acorns (bellota)",
                "answer": "Jamon Iberico de Bellota",
                "explanation": "Cured for 24 to 48 months in mountain air.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-19",
                "points": 600,
                "difficulty": 3,
                "clue": "The process of soaking meat in a seasoned acidic liquid to tenderize and flavor it before cooking",
                "answer": "Marination",
                "explanation": "Acids like vinegar or citrus break down surface proteins.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d3-20",
                "points": 600,
                "difficulty": 3,
                "clue": "The Indonesian spicy meat dish slow-cooked in coconut milk and spices until all liquid evaporates",
                "answer": "Rendang (Beef Rendang)",
                "explanation": "Originated with the Minangkabau people of West Sumatra.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-1",
                "points": 800,
                "difficulty": 4,
                "clue": "The rare edible white truffle species harvested almost exclusively around the Piedmontese town of Alba",
                "answer": "Tuber magnatum (Tartufo bianco d'Alba)",
                "explanation": "Can sell for over $4,000 per kilogram at international auctions.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-2",
                "points": 800,
                "difficulty": 4,
                "clue": "The French dessert consisting of a rich custard base topped with a layer of hardened caramelized sugar",
                "answer": "Creme Brulee",
                "explanation": "First appeared in French chef Francois Massialot's 1691 cookbook.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-3",
                "points": 800,
                "difficulty": 4,
                "clue": "The traditional Japanese technique of bleeding fish by severing major arteries and destroying the spinal cord",
                "answer": "Ikejime",
                "explanation": "Prevents lactic acid accumulation, preserving flesh quality and flavor.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-4",
                "points": 800,
                "difficulty": 4,
                "clue": "The Italian culinary technique of finishing pasta by tossing it vigorously in its cooking water and oil/butter",
                "answer": "Mantecatura",
                "explanation": "Emulsifies starches from pasta water into a velvety sauce.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-5",
                "points": 800,
                "difficulty": 4,
                "clue": "The chemical compound responsible for the intensely bitter taste in tonic water and historically used against malaria",
                "answer": "Quinine",
                "explanation": "Extracted from the bark of the South American cinchona tree.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-6",
                "points": 800,
                "difficulty": 4,
                "clue": "The fermented beverage made from honey, water, and yeast, considered one of the oldest alcoholic drinks",
                "answer": "Mead (Honey wine)",
                "explanation": "Known to Norse, Greek, and ancient Chinese cultures.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-7",
                "points": 800,
                "difficulty": 4,
                "clue": "The pungent dried rhizome related to ginger that is essential to yellow curries and contains curcumin",
                "answer": "Turmeric (Curcuma longa)",
                "explanation": "Used in Ayurvedic medicine and cooking for millennia.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-8",
                "points": 800,
                "difficulty": 4,
                "clue": "The classic French method of deglazing pan drippings with wine, stock, or cream to form a sauce",
                "answer": "Deglazing (Deglacer)",
                "explanation": "Dissolves the caramelized fond stuck to the bottom of the pan.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-9",
                "points": 800,
                "difficulty": 4,
                "clue": "The complex Japanese multi-course seasonal dining tradition originating from banquet and tea ceremonies",
                "answer": "Kaiseki (Kaiseki-ryori)",
                "explanation": "Emphasizes seasonal ingredients, meticulous plating, and balance.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-10",
                "points": 800,
                "difficulty": 4,
                "clue": "The traditional Jewish ceremonial bread braided and glazed with egg wash before baking, eaten on Shabbat",
                "answer": "Challah",
                "explanation": "Braided strands symbolize love, peace, and justice.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-11",
                "points": 800,
                "difficulty": 4,
                "clue": "The process in chocolate manufacturing where liquid chocolate is continuously stirred, sheared, and aerated for hours",
                "answer": "Conching",
                "explanation": "Invented by Rodolphe Lindt in 1879, giving chocolate its silky texture.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-12",
                "points": 800,
                "difficulty": 4,
                "clue": "The North African and Middle Eastern spice blend typically containing thyme, toasted sesame seeds, and dried sumac",
                "answer": "Za'atar",
                "explanation": "Commonly eaten with flatbread and olive oil.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-13",
                "points": 800,
                "difficulty": 4,
                "clue": "The culinary classification of offal meats such as liver, kidneys, sweetbreads, and tripe",
                "answer": "Variety meats (Offal / Abats)",
                "explanation": "Sweetbreads refer to the thymus and pancreas glands.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-14",
                "points": 800,
                "difficulty": 4,
                "clue": "The traditional Mexican cooking technique where dried chiles, onions, and tomatoes are charred on a dry griddle",
                "answer": "Tatemar (Tatemado)",
                "explanation": "Cooked on a traditional clay or cast iron \"comal\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-15",
                "points": 800,
                "difficulty": 4,
                "clue": "The Italian term for pasta cooked so that it is still firm to the bite, not overly soft",
                "answer": "Al dente",
                "explanation": "Translates literally to \"to the tooth\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-16",
                "points": 800,
                "difficulty": 4,
                "clue": "The traditional French duck or goose dish where meat is salted and slow-cooked in its own rendered fat",
                "answer": "Confit (Confit de canard)",
                "explanation": "Ancient preservation method developed in Gascony.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-17",
                "points": 800,
                "difficulty": 4,
                "clue": "The Spanish fortified wine produced in the \"Sherry Triangle\" of Andalusia aged under a layer of yeast called \"flor\"",
                "answer": "Fino Sherry (Jerez)",
                "explanation": "Aged using the fractional blending solera system.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-18",
                "points": 800,
                "difficulty": 4,
                "clue": "The delicate French pastry composed of three layers of puff pastry alternating with two layers of pastry cream",
                "answer": "Mille-feuille (Napoleon)",
                "explanation": "Translates to \"thousand sheets\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-19",
                "points": 800,
                "difficulty": 4,
                "clue": "The fermented Korean chili paste made from chili powder, glutinous rice, fermented soybeans, and salt",
                "answer": "Gochujang",
                "explanation": "Aged in large outdoor earthenware jars (jangdok).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d4-20",
                "points": 800,
                "difficulty": 4,
                "clue": "The culinary process of gently heating egg yolks and cream or liquid without curdling, used in custard",
                "answer": "Tempering",
                "explanation": "Gradually whisking hot liquid into eggs prevents scrambling.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-1",
                "points": 1000,
                "difficulty": 5,
                "clue": "The toxic organ in the Japanese fugu (pufferfish) that contains lethal tetrodotoxin, requiring a specialized license to prepare",
                "answer": "Liver and Ovaries",
                "explanation": "Tetrodotoxin is 1,200 times deadlier than cyanide, with no known antidote.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-2",
                "points": 1000,
                "difficulty": 5,
                "clue": "The ancient Roman fermented fish gut condiment that was ubiquitous across the empire and stored in amphorae",
                "answer": "Garum (Liquamen)",
                "explanation": "Produced by fermenting fish entrails with salt in the Mediterranean sun for months.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-3",
                "points": 1000,
                "difficulty": 5,
                "clue": "The specific strain of filamentous fungus (mold) used to ferment soybeans and rice in making soy sauce, miso, and sake",
                "answer": "Aspergillus oryzae (Koji mold)",
                "explanation": "Designated as the \"national fungus\" (kokkin) of Japan in 2006.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-4",
                "points": 1000,
                "difficulty": 5,
                "clue": "The Italian culinary technique of cooking food enclosed inside a pig's bladder, famous in Paul Bocuse's poularde",
                "answer": "En vessie (Cuisiner en vessie)",
                "explanation": "Poularde de Bresse en vessie is a legendary French haute cuisine triumph.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-5",
                "points": 1000,
                "difficulty": 5,
                "clue": "The traditional Sardinian sheep's milk cheese that contains live insect larvae (cheese skipper flies)",
                "answer": "Casu marzu",
                "explanation": "Banned commercially by the EU on health and sanitary grounds.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-6",
                "points": 1000,
                "difficulty": 5,
                "clue": "The scientific term for the volatile sulfur compounds that cause human eyes to tear up when slicing onions",
                "answer": "Syn-propanethial-S-oxide (Lachrymatory factor)",
                "explanation": "Produced when alliinase enzymes react with amino acid sulfoxides.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-7",
                "points": 1000,
                "difficulty": 5,
                "clue": "The traditional French charcuterie terrine made from a pig's head that has been boiled, boned, seasoned, and set in gelatin",
                "answer": "Head cheese (Fromage de tete)",
                "explanation": "Contains no dairy cheese despite the name.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-8",
                "points": 1000,
                "difficulty": 5,
                "clue": "The specific sub-region of Burgundy renowned for the most expensive Pinot Noir vineyard in the world (under 2 hectares)",
                "answer": "Romanee-Conti (Cote de Nuits)",
                "explanation": "Domaine de la Romanee-Conti produces fewer than 6,000 bottles per year.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-9",
                "points": 1000,
                "difficulty": 5,
                "clue": "The culinary preservation method involving fermentation by lactic acid bacteria in salt brine without oxygen, as in sauerkraut",
                "answer": "Lacto-fermentation",
                "explanation": "Lactobacillus converts starches and sugars into lactic acid.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-10",
                "points": 1000,
                "difficulty": 5,
                "clue": "The culinary thickener made from seaweed extract composed of agarose and agaropectin, melting at 85 °C",
                "answer": "Agar-agar (Kanten)",
                "explanation": "First discovered in Japan in 1658 by Mino Tarozaemon.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-11",
                "points": 1000,
                "difficulty": 5,
                "clue": "The specific anatomical gland harvested from sturgeon to produce high-grade Beluga caviar",
                "answer": "Unfertilized fish roe (Ovaries / Egg masses)",
                "explanation": "Huso huso sturgeon native to the Caspian and Black Sea basins.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-12",
                "points": 1000,
                "difficulty": 5,
                "clue": "The traditional French dessert consisting of a tall cone of choux pastry balls bound with caramel and spun sugar",
                "answer": "Croquembouche",
                "explanation": "Created by legendary French chef Marie-Antoine Careme for weddings.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-13",
                "points": 1000,
                "difficulty": 5,
                "clue": "The ancient Mesoamerican process of soaking and cooking dried corn in an alkaline solution (lime water)",
                "answer": "Nixtamalization",
                "explanation": "Unlocks bioavailable niacin (vitamin B3) and prevents pellagra.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-14",
                "points": 1000,
                "difficulty": 5,
                "clue": "The chemical compound responsible for the characteristic pungent smell of white truffles (bis(methylthio)methane)",
                "answer": "2,4-Dithiapentane",
                "explanation": "Synthetic aroma compound used in almost all commercial \"truffle oils\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-15",
                "points": 1000,
                "difficulty": 5,
                "clue": "The Italian classification for balsamic vinegar that must be aged a minimum of 12 or 25 years in wooden battery barrels",
                "answer": "Aceto Balsamico Tradizionale di Modena (DOP)",
                "explanation": "Made exclusively from boiled sweet Trebbiano and Lambrusco grape must.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-16",
                "points": 1000,
                "difficulty": 5,
                "clue": "The Austrian dessert specialty from Salzburg composed of sweet, baked quenelles of egg white representing snowy hills",
                "answer": "Salzburger Nockerl",
                "explanation": "Symbolize the three mountains surrounding Salzburg: Monchsberg, Kapuzinerberg, and Gaisberg.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-17",
                "points": 1000,
                "difficulty": 5,
                "clue": "The specific chemical reaction in chocolate manufacturing responsible for the glossy shine, snap, and high melting point of cocoa butter Polymorph V (Form V)",
                "answer": "Tempering (Beta crystal crystallization)",
                "explanation": "Form V crystals melt at 34 °C (body temperature).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-18",
                "points": 1000,
                "difficulty": 5,
                "clue": "The Swedish traditional fermented Baltic herring canned and notorious for its overwhelming, rotten sulfuric odor",
                "answer": "Surstromming",
                "explanation": "Fermented with Haloanaerobium bacteria; cans often bulge during storage.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-19",
                "points": 1000,
                "difficulty": 5,
                "clue": "The French term for clarified stock combined with gelatin that cools into a savory, transparent jelly",
                "answer": "Aspic",
                "explanation": "Derived from culinary stocks rich in natural collagen.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "food-d5-20",
                "points": 1000,
                "difficulty": 5,
                "clue": "The traditional Mexican drink made from fermented sap of the maguey (agave) plant, viscous and slightly alcoholic",
                "answer": "Pulque (Octli)",
                "explanation": "Consumed in Central Mexico for over a thousand years before Spanish distillation of mezcal.",
                "image": "",
                "dailyDouble": false
              }
            ]
          },
          {
            "id": "cat-anim",
            "name": "Animals & Wildlife",
            "clues": [
              {
                "id": "anim-d1-1",
                "points": 200,
                "difficulty": 1,
                "clue": "The largest animal on planet Earth, living in the world's oceans",
                "answer": "Blue Whale (Balaenoptera musculus)",
                "explanation": "Can weigh up to 200 tons and measure 30 meters in length.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-2",
                "points": 200,
                "difficulty": 1,
                "clue": "The tallest living terrestrial animal, native to Africa",
                "answer": "Giraffe",
                "explanation": "A giraffe's neck can measure up to 2.4 meters (8 feet) long.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-3",
                "points": 200,
                "difficulty": 1,
                "clue": "Fastest land mammal on Earth, capable of speeds over 100 km/h (60 mph)",
                "answer": "Cheetah (Acinonyx jubatus)",
                "explanation": "Can accelerate from 0 to 60 mph in under 3 seconds.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-4",
                "points": 200,
                "difficulty": 1,
                "clue": "Flightless bird native to Antarctica known for its tuxedo-like plumage",
                "answer": "Penguin (Emperor Penguin)",
                "explanation": "Emperor penguins breed during the harsh Antarctic winter.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-5",
                "points": 200,
                "difficulty": 1,
                "clue": "The only flying mammal capable of true, sustained flight",
                "answer": "Bat",
                "explanation": "Make up about 20% of all classified mammal species worldwide.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-6",
                "points": 200,
                "difficulty": 1,
                "clue": "Black-and-white bear native to south-central China that eats almost exclusively bamboo",
                "answer": "Giant Panda",
                "explanation": "Consumes between 20 and 40 pounds of bamboo every day.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-7",
                "points": 200,
                "difficulty": 1,
                "clue": "The largest species of big cat in the world, recognizable by its orange coat with dark vertical stripes",
                "answer": "Tiger (Panthera tigris)",
                "explanation": "Native to Asia, from the Siberian taiga to tropical forests.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-8",
                "points": 200,
                "difficulty": 1,
                "clue": "Semi-aquatic egg-laying mammal native to eastern Australia with a duck-like bill and beaver-like tail",
                "answer": "Platypus",
                "explanation": "Along with echidnas, one of the only five living monotremes.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-9",
                "points": 200,
                "difficulty": 1,
                "clue": "Arachnid with eight legs, multiple eyes, and the ability to spin silk webs",
                "answer": "Spider",
                "explanation": "Found on every continent except Antarctica.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-10",
                "points": 200,
                "difficulty": 1,
                "clue": "The largest living species of reptile, capable of living in brackish marine waters",
                "answer": "Saltwater Crocodile (Crocodylus porosus)",
                "explanation": "Can reach lengths of over 6 meters and weigh over 1,000 kg.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-11",
                "points": 200,
                "difficulty": 1,
                "clue": "Flightless Australian bird that is the second largest living bird by height after the ostrich",
                "answer": "Emu",
                "explanation": "Endemic to mainland Australia.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-12",
                "points": 200,
                "difficulty": 1,
                "clue": "The largest bird in the world, capable of running over 40 mph and laying huge eggs",
                "answer": "Ostrich",
                "explanation": "Native to Africa, their eyes are larger than their brains.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-13",
                "points": 200,
                "difficulty": 1,
                "clue": "Marine mammal known for its playful nature, high intelligence, and echolocation clicks",
                "answer": "Dolphin (Bottlenose Dolphin)",
                "explanation": "Can communicate using signature whistles.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-14",
                "points": 200,
                "difficulty": 1,
                "clue": "Venomous snake that expands its neck into a hood when threatened",
                "answer": "Cobra (King Cobra)",
                "explanation": "The King Cobra is the world's longest venomous snake.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-15",
                "points": 200,
                "difficulty": 1,
                "clue": "Marsupial native to Australia that hops on powerful hind legs and carries young in a pouch",
                "answer": "Kangaroo (Red Kangaroo)",
                "explanation": "A baby kangaroo is called a joey.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-16",
                "points": 200,
                "difficulty": 1,
                "clue": "Insect known for producing honey and beeswax, living in complex hierarchical hives",
                "answer": "Honey Bee (Apis mellifera)",
                "explanation": "Performs the famous \"waggle dance\" to communicate floral food sources.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-17",
                "points": 200,
                "difficulty": 1,
                "clue": "The animal known as the \"King of the Jungle\", living in social prides",
                "answer": "Lion (Panthera leo)",
                "explanation": "Females (lionesses) do the vast majority of pride hunting.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-18",
                "points": 200,
                "difficulty": 1,
                "clue": "Large marine mammal with two prominent tusks and thick blubber living in the Arctic Circle",
                "answer": "Walrus",
                "explanation": "Tusks are used for pulling themselves onto ice and defense.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-19",
                "points": 200,
                "difficulty": 1,
                "clue": "Canine species that was domesticated thousands of years ago to become \"man's best friend\"",
                "answer": "Dog (Canis familiaris)",
                "explanation": "Descended from an extinct wolf ancestor.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d1-20",
                "points": 200,
                "difficulty": 1,
                "clue": "Slow-moving tree-dwelling mammal from Central and South America known for sleeping up to 20 hours a day",
                "answer": "Sloth",
                "explanation": "Algae grows in their specialized fur, providing camouflage.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-1",
                "points": 400,
                "difficulty": 2,
                "clue": "The fastest animal in the animal kingdom, capable of diving speeds exceeding 320 km/h (200 mph)",
                "answer": "Peregrine Falcon (Falco peregrinus)",
                "explanation": "Performs a high-speed hunting dive known as a stoop.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-2",
                "points": 400,
                "difficulty": 2,
                "clue": "The only species of bear found naturally in South America",
                "answer": "Spectacled Bear (Andean Bear)",
                "explanation": "Has yellowish rings around its eyes resembling eyeglasses.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-3",
                "points": 400,
                "difficulty": 2,
                "clue": "The venomous jellyfish whose sting can be lethal to humans in coastal northern Australian waters",
                "answer": "Box Jellyfish (Chironex fleckeri)",
                "explanation": "One of the most marine venomous creatures on Earth.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-4",
                "points": 400,
                "difficulty": 2,
                "clue": "The largest living species of lizard, native to several Indonesian islands",
                "answer": "Komodo Dragon (Varanus komodoensis)",
                "explanation": "Can grow up to 3 meters in length and weigh over 70 kg.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-5",
                "points": 400,
                "difficulty": 2,
                "clue": "The marine cephalopod known for eight suction-cup arms, three hearts, and blue copper-based blood",
                "answer": "Octopus",
                "explanation": "Their blood uses hemocyanin rather than hemoglobin to carry oxygen.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-6",
                "points": 400,
                "difficulty": 2,
                "clue": "The nocturnal lemur of Madagascar with a long, thin middle finger used to tap on wood for grubs",
                "answer": "Aye-aye (Daubentonia madagascariensis)",
                "explanation": "The world's largest nocturnal primate.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-7",
                "points": 400,
                "difficulty": 2,
                "clue": "The heavy-armored mammal covered in large, protective keratin scales that curls into a ball when attacked",
                "answer": "Pangolin (Scaly Anteater)",
                "explanation": "The most illegally trafficked wild mammal in the world.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-8",
                "points": 400,
                "difficulty": 2,
                "clue": "The mammal with the longest migration of any mammal, traveling up to 12,000 miles round-trip annually",
                "answer": "Gray Whale (or Humpback Whale)",
                "explanation": "Migrates between Arctic feeding grounds and Mexican breeding lagoons.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-9",
                "points": 400,
                "difficulty": 2,
                "clue": "The flightless parrot native to New Zealand that is nocturnal, heavy, and critically endangered",
                "answer": "Kakapo (Owl Parrot)",
                "explanation": "The world's heaviest parrot and the only flightless lek-breeding parrot.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-10",
                "points": 400,
                "difficulty": 2,
                "clue": "The group of mammals that lay eggs instead of giving birth to live young",
                "answer": "Monotremes",
                "explanation": "Consists solely of the platypus and four species of echidna.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-11",
                "points": 400,
                "difficulty": 2,
                "clue": "The apex marine predator that is actually the largest member of the oceanic dolphin family (Delphinidae)",
                "answer": "Orca (Killer Whale, Orcinus orca)",
                "explanation": "Possesses distinct matrilineal pod cultures and vocal dialects.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-12",
                "points": 400,
                "difficulty": 2,
                "clue": "The chameleon's ability to change skin color is controlled by specialized cells called what",
                "answer": "Chromatophores (or Iridophores)",
                "explanation": "Reflect light via nanoscopic guanine nanocrystals.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-13",
                "points": 400,
                "difficulty": 2,
                "clue": "The largest living rodent in the world, native to the savannas and wetlands of South America",
                "answer": "Capybara (Hydrochoerus hydrochaeris)",
                "explanation": "Highly social, living in groups of up to 100 individuals.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-14",
                "points": 400,
                "difficulty": 2,
                "clue": "The bird famous for building intricate, brightly decorated architectural structures to attract mates",
                "answer": "Bowerbird",
                "explanation": "Males decorate bowers with flowers, shells, and colored plastic.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-15",
                "points": 400,
                "difficulty": 2,
                "clue": "The term for an animal that is active primarily during twilight (dawn and dusk)",
                "answer": "Crepuscular",
                "explanation": "Contrasted with diurnal (day) and nocturnal (night).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-16",
                "points": 400,
                "difficulty": 2,
                "clue": "The horn of a rhinoceros is made primarily of this structural protein, identical to human hair and nails",
                "answer": "Keratin",
                "explanation": "Rhinoceros horns lack a bony core unlike true cattle horns.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-17",
                "points": 400,
                "difficulty": 2,
                "clue": "What spiny egg-laying mammal native to Australia and New Guinea belongs to the order Monotremata alongside the platypus?",
                "answer": "Echidna (Spiny Anteater)",
                "explanation": "Short-beaked and long-beaked echidnas are the only living monotremes besides the platypus.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-18",
                "points": 400,
                "difficulty": 2,
                "clue": "The deep-sea fish with bioluminescent photophore lures dangling from their heads to attract prey",
                "answer": "Anglerfish",
                "explanation": "Females are drastically larger than parasitic dwarf males.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-19",
                "points": 400,
                "difficulty": 2,
                "clue": "The only species of bird known to be capable of flying backward and upside down",
                "answer": "Hummingbird",
                "explanation": "Their wings rotate in a figure-eight pattern at up to 80 beats per second.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d2-20",
                "points": 400,
                "difficulty": 2,
                "clue": "The suborder of primates that includes lemurs, lorises, and galagos, characterized by wet noses",
                "answer": "Strepsirrhini (Wet-nosed primates)",
                "explanation": "Distinguished from Haplorhini (dry-nosed primates, including monkeys and apes).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-1",
                "points": 600,
                "difficulty": 3,
                "clue": "The microscopic animal capable of surviving the vacuum of space, extreme radiation, and boiling temperatures",
                "answer": "Tardigrade (Water Bear)",
                "explanation": "Can enter anhydrobiosis, a cryptobiotic state where metabolism halts.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-2",
                "points": 600,
                "difficulty": 3,
                "clue": "The extinct flightless bird endemic to the island of Mauritius that went extinct in the 17th century",
                "answer": "Dodo (Raphus cucullatus)",
                "explanation": "A relative of pigeons that had no natural mammalian predators.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-3",
                "points": 600,
                "difficulty": 3,
                "clue": "The venomous gastropod mollusk whose geographic cone shell fires a harpoon containing lethal conotoxins",
                "answer": "Cone Snail (Conus geographus)",
                "explanation": "Its venom contains hundreds of peptide toxins with analgesic properties.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-4",
                "points": 600,
                "difficulty": 3,
                "clue": "The collective term for the bioluminescent glow produced by living organisms through luciferin oxidation",
                "answer": "Bioluminescence",
                "explanation": "Catalyzed by the enzyme luciferase.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-5",
                "points": 600,
                "difficulty": 3,
                "clue": "The African mammal nicknamed the \"Forest Giraffe\", with zebra-like striped legs, native to the Congo rainforest",
                "answer": "Okapi (Okapia johnstoni)",
                "explanation": "The only living relative of the giraffe.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-6",
                "points": 600,
                "difficulty": 3,
                "clue": "The unique sensory organ on the roof of a reptile's mouth used to detect moisture-borne scent particles",
                "answer": "Jacobson's Organ (Vomeronasal Organ)",
                "explanation": "Snakes deliver scent molecules to it using their forked tongues.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-7",
                "points": 600,
                "difficulty": 3,
                "clue": "The world's most venomous spider whose venom causes priapism, native to South America",
                "answer": "Brazilian Wandering Spider (Phoneutria)",
                "explanation": "Often referred to as the \"banana spider\".",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-8",
                "points": 600,
                "difficulty": 3,
                "clue": "The species of jellyfish capable of biologically reverting its cells back to a juvenile polyp state, deemed \"immortal\"",
                "answer": "Turritopsis dohrnii (The Immortal Jellyfish)",
                "explanation": "Undergoes cellular transdifferentiation when stressed or aged.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-9",
                "points": 600,
                "difficulty": 3,
                "clue": "The order of placental mammals that includes elephants, represented today by only three living species",
                "answer": "Proboscidea",
                "explanation": "Includes the African Bush Elephant, African Forest Elephant, and Asian Elephant.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-10",
                "points": 600,
                "difficulty": 3,
                "clue": "The predatory deep-sea squid possessing the largest eyes in the animal kingdom (up to 30 cm / 12 inches across)",
                "answer": "Colossal Squid (Mesonychoteuthis hamiltoni)",
                "explanation": "Armed with sharp swivel hooks on its tentacle clubs.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-11",
                "points": 600,
                "difficulty": 3,
                "clue": "The North American marsupial famous for entering an involuntary catatonic state (\"playing dead\") when threatened",
                "answer": "Virginia Opossum (Didelphis virginiana)",
                "explanation": "The only marsupial found naturally north of Mexico.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-12",
                "points": 600,
                "difficulty": 3,
                "clue": "The biological mechanism where bats, dolphins, and shrews emit sound pulses to map their surroundings",
                "answer": "Echolocation (Biosonar)",
                "explanation": "Allows navigation and prey capture in complete darkness.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-13",
                "points": 600,
                "difficulty": 3,
                "clue": "The flightless rail bird endemic to Inaccessible Island in the South Atlantic, the smallest living flightless bird",
                "answer": "Inaccessible Island Rail (Atlantisia rogersi)",
                "explanation": "Weighs only around 35 to 49 grams.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-14",
                "points": 600,
                "difficulty": 3,
                "clue": "The specialized layer of reflective tissue directly behind the retina in nocturnal animals that causes night-shine",
                "answer": "Tapetum Lucidum",
                "explanation": "Improves night vision by reflecting light back through photoreceptors.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-15",
                "points": 600,
                "difficulty": 3,
                "clue": "The mammal with the densest fur in the animal kingdom, possessing up to one million hairs per square inch",
                "answer": "Sea Otter (Enhydra lutris)",
                "explanation": "Relies entirely on fur for insulation rather than blubber.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-16",
                "points": 600,
                "difficulty": 3,
                "clue": "The ancient marine lineage of arthropods possessing blue copper-based blood harvested for pharmaceutical endotoxin testing",
                "answer": "Horseshoe Crab (Limulidae)",
                "explanation": "Their blood contains Limulus Amebocyte Lysate (LAL).",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-17",
                "points": 600,
                "difficulty": 3,
                "clue": "The specialized respiratory organ in terrestrial arthropods like spiders composed of stacked plate-like lamellae",
                "answer": "Book Lungs",
                "explanation": "Resemble the folded pages of a closed book.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-18",
                "points": 600,
                "difficulty": 3,
                "clue": "The only species of bird that has nostrils located at the very tip of its long bill to sniff out earthworms",
                "answer": "Kiwi",
                "explanation": "National bird of New Zealand.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-19",
                "points": 600,
                "difficulty": 3,
                "clue": "The social structure in naked mole-rats and certain bees where only a single queen reproduces while non-breeders work",
                "answer": "Eusociality",
                "explanation": "Extremely rare in mammals, documented in only two rodent species.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d3-20",
                "points": 600,
                "difficulty": 3,
                "clue": "The largest living amphibian in the world, which can grow to nearly six feet in length in cold mountain streams",
                "answer": "South China Giant Salamander (Andrias sligoi)",
                "explanation": "Can exceed 1.8 meters in length and live for decades.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-1",
                "points": 800,
                "difficulty": 4,
                "clue": "The extinct carnivorous marsupial native to Australia and Tasmania nicknamed the \"Tasmanian Tiger\"",
                "answer": "Thylacine (Thylacinus cynocephalus)",
                "explanation": "The last known specimen, named Benjamin, died at Hobart Zoo in 1936.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-2",
                "points": 800,
                "difficulty": 4,
                "clue": "The sea slug that steals intact stinging nematocysts from Portuguese man o' war to use for its own defense",
                "answer": "Blue Dragon (Glaucus atlanticus)",
                "explanation": "Floats upside down on the surface tension of oceanic waters.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-3",
                "points": 800,
                "difficulty": 4,
                "clue": "The unique venomous primate endemic to Southeast Asia with brachial glands on its inner elbows",
                "answer": "Slow Loris (Nycticebus)",
                "explanation": "Licks its brachial gland to coat its teeth with secondary toxins.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-4",
                "points": 800,
                "difficulty": 4,
                "clue": "The sensory pores along a shark's snout capable of detecting minute electric fields produced by living muscle contractions",
                "answer": "Ampullae of Lorenzini",
                "explanation": "Sensitive to electric gradients as small as 5 nanovolts per centimeter.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-5",
                "points": 800,
                "difficulty": 4,
                "clue": "The ant species that engages in \"fungus farming\", cultivating mutualistic basidiomycete fungi inside underground chambers",
                "answer": "Leafcutter Ants (Atta and Acromyrmex)",
                "explanation": "The second most complex social systems on Earth after humans.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-6",
                "points": 800,
                "difficulty": 4,
                "clue": "The rare marine mammal found in coastal Arctic waters with a single long spiraled ivory tusk in males",
                "answer": "Narwhal (Monodon monoceros)",
                "explanation": "The tusk is actually an elongated, sensory-rich left canine tooth.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-7",
                "points": 800,
                "difficulty": 4,
                "clue": "The small South American frog whose skin secretions contain batrachotoxin, historically used on blowgun darts",
                "answer": "Golden Poison Frog (Phyllobates terribilis)",
                "explanation": "A single frog possesses enough toxin to kill ten adult humans.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-8",
                "points": 800,
                "difficulty": 4,
                "clue": "The specific type of cell in cephalopods that contains reflective stacks of purine crystals allowing iridescence",
                "answer": "Iridophores",
                "explanation": "Work alongside pigmentary chromatophores and light-scattering leucophores.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-9",
                "points": 800,
                "difficulty": 4,
                "clue": "The predatory deep-sea fish known for producing deep red bioluminescence that other deep-sea fish cannot see",
                "answer": "Stoplight Loosejaw (Malacosteus niger)",
                "explanation": "Acts as a private sniper beam in the pitch-black abyss.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-10",
                "points": 800,
                "difficulty": 4,
                "clue": "The reproductive adaptation in kangaroos and sea otters where embryo development is temporarily paused",
                "answer": "Embryonic Diapause",
                "explanation": "Allows mothers to delay birth until favorable ecological conditions.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-11",
                "points": 800,
                "difficulty": 4,
                "clue": "The flightless bird native to Mauritius and Madagascar related to the dodo that was hunted to extinction around 1700",
                "answer": "Rodrigues Solitaire (Pezophaps solitaria)",
                "explanation": "Possessed prominent bony knobs on its carpal bones used in territorial combat.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-12",
                "points": 800,
                "difficulty": 4,
                "clue": "The marine gastropod that incorporates viable chloroplasts from eaten algae into its own tissues (kleptoplasty)",
                "answer": "Eastern Emerald Elysia (Elysia chlorotica)",
                "explanation": "Can survive on photosynthesis alone for months.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-13",
                "points": 800,
                "difficulty": 4,
                "clue": "The deep-sea shark species that holds the record for the longest known lifespan of any vertebrate (up to 400 years)",
                "answer": "Greenland Shark (Somniosus microcephalus)",
                "explanation": "Ages verified by radiocarbon dating eye lens crystallin proteins.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-14",
                "points": 800,
                "difficulty": 4,
                "clue": "The avian adaptation where birds regurgitate food rich in crop milk to feed nestlings (seen in pigeons and flamingos)",
                "answer": "Crop Milk (Pigeon's milk)",
                "explanation": "Induced by the hormone prolactin in both male and female parents.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-15",
                "points": 800,
                "difficulty": 4,
                "clue": "The extinct bivalve mollusk family of the Mesozoic that formed prominent reef frameworks alongside coral",
                "answer": "Rudists (Rudist bivalves)",
                "explanation": "Went completely extinct during the Cretaceous-Paleogene extinction event.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-16",
                "points": 800,
                "difficulty": 4,
                "clue": "The only known vertebrate that undergoes clonal parthenogenesis with all-female diploid lineages",
                "answer": "Whiptail Lizards (Aspidoscelis)",
                "explanation": "Engage in pseudocopulatory courtship to stimulate hormonal ovulation.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-17",
                "points": 800,
                "difficulty": 4,
                "clue": "The African bird that actively leads humans and honey badgers to wild bee hives using specific call signals",
                "answer": "Greater Honeyguide (Indicator indicator)",
                "explanation": "Feeds on leftover beeswax, larvae, and bee pupae.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-18",
                "points": 800,
                "difficulty": 4,
                "clue": "The deep-sea siphonophore that can reach over 40 meters (130 feet) in length, rivaling blue whales",
                "answer": "Praya dubia (Giant Siphonophore)",
                "explanation": "A colonial organism composed of specialized zoids.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-19",
                "points": 800,
                "difficulty": 4,
                "clue": "The organ in electric eels (Electrophorus) composed of thousands of stacked electrocytes producing up to 860 volts",
                "answer": "Main Organ (and Hunter's and Sachs' Organs)",
                "explanation": "Used for navigation, communication, and stunning prey.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d4-20",
                "points": 800,
                "difficulty": 4,
                "clue": "The parasitic barnacle that castrates crab hosts, takes over their nervous system, and forces them to care for barnacle eggs",
                "answer": "Sacculina carcini",
                "explanation": "Evolves a root-like network (rhizoids) throughout the crab's body.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-1",
                "points": 1000,
                "difficulty": 5,
                "clue": "The primitive jawless fish that can excrete copious amounts of fibrous slime in micro-seconds when attacked by predators",
                "answer": "Hagfish (Myxini)",
                "explanation": "Slime threads expand thousands of times in water to choke shark gills.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-2",
                "points": 1000,
                "difficulty": 5,
                "clue": "The genus of fungus that infects carpenter ants and chemically hijacks their motor neurons to bite the underside of leaves",
                "answer": "Ophiocordyceps unilateralis",
                "explanation": "Produces \"zombie ants\" that die in optimal fungal sporulation microclimates.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-3",
                "points": 1000,
                "difficulty": 5,
                "clue": "The only known warm-blooded fish that maintains its entire body and core elevated above ambient sea water",
                "answer": "Opah (Moonfish, Lampris guttatus)",
                "explanation": "Utilizes counter-current heat exchange in its gill rete mirabile.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-4",
                "points": 1000,
                "difficulty": 5,
                "clue": "The deep-sea crustacean with compound eyes that have up to 16 color receptive cones and can see circularly polarized light",
                "answer": "Mantis Shrimp (Stomatopoda)",
                "explanation": "Their smash strikes accelerate faster than a .22 caliber bullet.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-5",
                "points": 1000,
                "difficulty": 5,
                "clue": "The unique venomous rodent native to East Africa that steals cardenolide cardiac poisons from the poison-arrow tree",
                "answer": "African Crested Rat (Lophiomys imhausi)",
                "explanation": "Chews Acokanthera schimperi bark and slathers it into specialized porous hairs.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-6",
                "points": 1000,
                "difficulty": 5,
                "clue": "The genus of marine anglerfish whose dwarf males permanently fuse their tissues into the female bloodstream as obligate parasites",
                "answer": "Ceratias (Deep-Sea Anglerfish)",
                "explanation": "Male dissolves his own digestive tract and eyes, becoming a sperm-producing organ.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-7",
                "points": 1000,
                "difficulty": 5,
                "clue": "The extinct sea cow discovered in 1741 in the Commander Islands that was hunted to global extinction within just 27 years",
                "answer": "Steller's Sea Cow (Hydrodamalis gigas)",
                "explanation": "Measured up to 9 meters in length, feeding entirely on kelp canopies.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-8",
                "points": 1000,
                "difficulty": 5,
                "clue": "The unique auditory organ in insects like crickets and grasshoppers located on their front legs (tibiae)",
                "answer": "Tympanal Organ",
                "explanation": "Functions as an ear drum to detect ultrasound bat echolocation.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-9",
                "points": 1000,
                "difficulty": 5,
                "clue": "The genus of desert beetle in the Namib Desert that harvests drinking water from morning fog using hydrophobic and hydrophilic bumps",
                "answer": "Stenocara gracilipes (Namib Desert Beetle)",
                "explanation": "Bumps condense atmospheric fog droplets that roll down its tilted back into its mouth.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-10",
                "points": 1000,
                "difficulty": 5,
                "clue": "The critically endangered cetacean endemic to the northern Gulf of California, the smallest cetacean in the world",
                "answer": "Vaquita (Phocoena sinus)",
                "explanation": "Fewer than 10 individuals are estimated to survive in the wild due to gillnets.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-11",
                "points": 1000,
                "difficulty": 5,
                "clue": "The biological structure in venomous gastropods composed of chitin that operates like an internal disposable syringe",
                "answer": "Toxoglossan Radula",
                "explanation": "Harpoon-like teeth are replaced continuously throughout life.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-12",
                "points": 1000,
                "difficulty": 5,
                "clue": "The ancient jawless armor-plated prehistoric fish of the Paleozoic era that lacked paired fins and jaws",
                "answer": "Ostracoderms",
                "explanation": "Among the earliest fossilized vertebrates known.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-13",
                "points": 1000,
                "difficulty": 5,
                "clue": "The unique species of ant that builds living bridges, chains, and bivouac nests out of their own interlocking bodies",
                "answer": "Army Ants (Eciton burchellii)",
                "explanation": "Claw their legs together to form architectural structures for millions.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-14",
                "points": 1000,
                "difficulty": 5,
                "clue": "The deep-sea bioluminescent fish with yellow fluorescent eye filters that act as spectral contrast filters against counter-illumination",
                "answer": "Malacosteid dragonfish",
                "explanation": "Can detect prey trying to conceal their silhouettes with bioluminescent belly photophores.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-15",
                "points": 1000,
                "difficulty": 5,
                "clue": "The small cnidarian that undergoes reversible senescence by transforming its medusa body into a cyst-like stolon",
                "answer": "Turritopsis nutricula (Immortal Jellyfish)",
                "explanation": "Can undergo this reversal indefinitely under nutritional or mechanical stress.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-16",
                "points": 1000,
                "difficulty": 5,
                "clue": "The rare placental mammal from Madagascar whose specialized scent glands on its webbed feet mark underground tunneling routes",
                "answer": "Web-footed Tenrec (Limnogale mergulus)",
                "explanation": "Endemic to clear, fast-flowing mountain streams in eastern Madagascar.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-17",
                "points": 1000,
                "difficulty": 5,
                "clue": "The only known bird species that secretes poisonous batrachotoxins in its feathers and skin, native to New Guinea",
                "answer": "Hooded Pitohui (Pitohui dichrous)",
                "explanation": "Acquires toxicity from consuming Choresine toxic beetles.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-18",
                "points": 1000,
                "difficulty": 5,
                "clue": "The extinct Pleistocene apex predator of Australia, the largest terrestrial lizard known to have existed (up to 7 meters long)",
                "answer": "Megalania (Varanus priscus)",
                "explanation": "Coexisted with early Indigenous Australians before disappearing 40,000 years ago.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-19",
                "points": 1000,
                "difficulty": 5,
                "clue": "The bizarre deep-sea xenophyophore, among the largest single-celled organisms on Earth, measuring up to 20 cm across",
                "answer": "Syringammina fragilissima",
                "explanation": "Constructs delicate branching agglutinated sediment tests in the deep benthic zone.",
                "image": "",
                "dailyDouble": false
              },
              {
                "id": "anim-d5-20",
                "points": 1000,
                "difficulty": 5,
                "clue": "The specialized structural organ in venomous pit vipers that detects infrared thermal radiation as small as 0.003 °C",
                "answer": "Pit Organ (Loreal Pit)",
                "explanation": "Located between the eye and nostril on each side of the head.",
                "image": "",
                "dailyDouble": false
              }
            ]
          }
        ]
      }
    ],
    "finalJeopardy": {
      "enabled": true,
      "category": "World Landmarks",
      "clue": "Constructed for the 1889 World's Fair, this 330-meter wrought-iron lattice tower was initially criticized by leading French artists but became an iconic global symbol.",
      "answer": "The Eiffel Tower",
      "explanation": "Designed by Gustave Eiffel's engineering firm, it was built to celebrate the centennial of the French Revolution."
    },
    "categoryLibrary": [
      {
        "id": "cat-hist",
        "name": "World History & Empires",
        "totalClues": 100
      },
      {
        "id": "cat-sci",
        "name": "Science & Wonders",
        "totalClues": 100
      },
      {
        "id": "cat-geo",
        "name": "World Geography & Travel",
        "totalClues": 100
      },
      {
        "id": "cat-pop",
        "name": "Pop Culture & Hollywood",
        "totalClues": 100
      },
      {
        "id": "cat-tech",
        "name": "Inventions & Technology",
        "totalClues": 100
      },
      {
        "id": "cat-mus",
        "name": "Music & Iconic Hits",
        "totalClues": 100
      },
      {
        "id": "cat-lit",
        "name": "Literature & Famous Books",
        "totalClues": 100
      },
      {
        "id": "cat-spt",
        "name": "Sports & Champions",
        "totalClues": 100
      },
      {
        "id": "cat-food",
        "name": "Food & World Cuisine",
        "totalClues": 100
      },
      {
        "id": "cat-anim",
        "name": "Animals & Wildlife",
        "totalClues": 100
      }
    ]
  }
};
