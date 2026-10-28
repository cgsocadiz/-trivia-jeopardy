const { buildCategory } = require('./builder');

const d1 = [
  ['First President of the United States', 'George Washington', 'He served from 1789 to 1797.'],
  ['Ancient Egyptian queen known for her relationship with Julius Caesar and Mark Antony', 'Cleopatra', 'She was the last active ruler of the Ptolemaic Kingdom of Egypt.'],
  ['Year the Titanic sank in the North Atlantic Ocean', '1912', 'It sank on April 15, 1912 after hitting an iceberg.'],
  ['French military leader and emperor who was exiled to Saint Helena', 'Napoleon Bonaparte', 'He died in exile in 1821.'],
  ['Wall that divided a major German city from 1961 to 1989', 'Berlin Wall', 'Its fall symbolized the end of the Cold War.'],
  ['British passenger liner sunk by a German U-boat in 1915', 'Lusitania', 'The sinking contributed to the US entering WWI.'],
  ['Ancient civilization that built the Colosseum in Rome', 'The Romans (Roman Empire)', 'The Colosseum was completed under Emperor Titus in 80 AD.'],
  ['Famous speech delivered by Abraham Lincoln during the American Civil War in 1863', 'Gettysburg Address', 'It began with "Four score and seven years ago".'],
  ['Ancient trade route connecting China and the Mediterranean', 'The Silk Road', 'It was established during the Han Dynasty of China.'],
  ['Country where the Renaissance cultural movement originated', 'Italy', 'It began in 14th-century Florence.'],
  ['War fought between the North and South in the United States from 1861 to 1865', 'American Civil War', 'Fought over states rights and the abolition of slavery.'],
  ['South African leader who fought against apartheid and became president in 1994', 'Nelson Mandela', 'He spent 27 years in prison before leading the nation.'],
  ['Mesoamerican civilization famous for building step pyramids like Chichen Itza', 'The Maya', 'Chichen Itza is located on the Yucatan Peninsula in Mexico.'],
  ['First man to set foot on the Moon in July 1969', 'Neil Armstrong', 'He flew aboard Apollo 11 with Buzz Aldrin and Michael Collins.'],
  ['Document signed by King John of England in 1215 limiting royal power', 'Magna Carta', 'It laid foundational principles for modern constitutional law.'],
  ['Leader of the Soviet Union during World War II', 'Joseph Stalin', 'He ruled from the mid-1920s until his death in 1953.'],
  ['Ancient empire ruled by Alexander the Great', 'Macedonian Empire (Macedon / Greece)', 'His empire stretched from Greece to northwestern India.'],
  ['Year World War II officially ended', '1945', 'Germany surrendered in May and Japan surrendered in August 1945.'],
  ['Japanese city that was the target of the first atomic bomb used in warfare', 'Hiroshima', 'The bomb nicknamed "Little Boy" was dropped on August 6, 1945.'],
  ['King of England who famously had six wives', 'Henry VIII', 'He established the Church of England after breaking from Rome.']
];

const d2 = [
  ['Famous battle of 1066 where William the Conqueror won the English crown', 'Battle of Hastings', 'It resulted in Norman rule over England.'],
  ['Inca citadel in Peru built in the 15th century, brought to international attention in 1911', 'Machu Picchu', 'It sits high in the Andes mountains.'],
  ['US policy announced in 1947 to contain Soviet geopolitical expansion during the Cold War', 'Truman Doctrine', 'Announced by President Harry S. Truman.'],
  ['Ancient Greek city-state renowned for its fierce military and Spartan warriors', 'Sparta', 'Spartans fought against Persia at the Battle of Thermopylae.'],
  ['Treaty signed in 1919 that formally concluded World War I', 'Treaty of Versailles', 'It imposed heavy reparations and territorial losses on Germany.'],
  ['The first Roman Emperor, formerly known as Octavian', 'Augustus', 'He reigned from 27 BC until his death in AD 14.'],
  ['Leader of the Protestant Reformation who nailed his Ninety-five Theses to a church door in 1517', 'Martin Luther', 'He posted them in Wittenberg, Germany.'],
  ['Ancient wonder of the world located in Babylon famous for lush terraced vegetation', 'Hanging Gardens of Babylon', 'One of the Seven Wonders of the Ancient World.'],
  ['Russian imperial dynasty overthrown and executed during the 1917 Russian Revolution', 'The Romanovs', 'Czar Nicholas II was the last reigning emperor.'],
  ['War fought from 1337 to 1453 between England and France', 'Hundred Years War', 'It featured heroes like Joan of Arc and battles like Agincourt.'],
  ['Portuguese explorer who led the first expedition to circumnavigate the globe', 'Ferdinand Magellan', 'He was killed in the Philippines, but his crew completed the voyage.'],
  ['Ottoman sultan who conquered Constantinople in 1453', 'Mehmed II (Mehmed the Conqueror)', 'Constantinople was renamed Istanbul.'],
  ['First European explorer to reach India by sea around the Cape of Good Hope in 1498', 'Vasco da Gama', 'His voyage opened direct sea trade with Asia.'],
  ['The legal code developed in ancient Babylon around 1754 BC', 'Code of Hammurabi', 'Famous for the principle "an eye for an eye".'],
  ['1803 land deal in which the United States purchased 828,000 square miles from France', 'Louisiana Purchase', 'Negotiated by Thomas Jefferson for $15 million.'],
  ['Chinese dynasty that constructed the majority of the visible Great Wall of China today', 'Ming Dynasty', 'The Ming built extensive brick and stone fortifications.'],
  ['Decisive battle in 1815 where Napoleon was defeated by British and Prussian forces', 'Battle of Waterloo', 'Led by the Duke of Wellington and Gebhard von Blucher.'],
  ['Ancient Persian king who invaded Greece and fought at Thermopylae and Salamis', 'Xerxes I', 'He ruled the Achaemenid Empire.'],
  ['Pandemic that swept across Europe and Asia in the mid-1300s killing millions', 'The Black Death (Bubonic Plague)', 'It killed an estimated 30% to 60% of Europe\'s population.'],
  ['British Prime Minister who led the country through most of World War II', 'Winston Churchill', 'Famous for his "we shall fight on the beaches" speech.']
];

const d3 = [
  ['Mongol ruler who founded the largest contiguous land empire in history', 'Genghis Khan (Temujin)', 'He unified the nomadic tribes of Northeast Asia.'],
  ['Prussian chancellor who engineered the unification of Germany in 1871', 'Otto von Bismarck', 'Known as the "Iron Chancellor".'],
  ['Ancient Roman city destroyed and buried under volcanic ash by Mount Vesuvius in 79 AD', 'Pompeii', 'Rediscovered in the 18th century remarkably preserved.'],
  ['The first woman to win a Nobel Prize and only person to win in two scientific fields', 'Marie Curie', 'She won in Physics (1903) and Chemistry (1911).'],
  ['Battle in 490 BC where Athenians defeated the first Persian invasion, inspiring a running race', 'Battle of Marathon', 'Pheidippides famously ran to Athens with news of victory.'],
  ['17th-century peace treaties that ended the Thirty Years War in Europe in 1648', 'Peace of Westphalia', 'Established modern sovereign state principles.'],
  ['Carthaginian general who famously crossed the Alps with war elephants to attack Rome', 'Hannibal Barca', 'Fought during the Second Punic War.'],
  ['Emperor who legalized Christianity in the Roman Empire with the Edict of Milan in 313 AD', 'Constantine the Great', 'He also moved the imperial capital to Constantinople.'],
  ['Russian czar known as "The Great" who founded St. Petersburg and westernized Russia', 'Peter the Great (Peter I)', 'He ruled from 1682 until 1725.'],
  ['Spanish conquistador who led the expedition that caused the fall of the Aztec Empire', 'Hernan Cortes', 'He defeated Moctezuma II in 1521.'],
  ['English king who was executed in 1649 during the English Civil War', 'Charles I', 'England briefly became a republic under Oliver Cromwell.'],
  ['Ancient library in Egypt considered one of the largest and most significant of the ancient world', 'Library of Alexandria', 'Founded under the Ptolemaic dynasty in Egypt.'],
  ['1848 conflict between Mexico and the United States ended by the Treaty of Guadalupe Hidalgo', 'Mexican-American War', 'The US acquired California, Nevada, Utah, and Arizona.'],
  ['French peasant girl who became a military heroine and saint during the Hundred Years War', 'Joan of Arc', 'Burned at the stake in 1431 and canonized in 1920.'],
  ['1905 war in which Japan defeated a major European imperial power', 'Russo-Japanese War', 'Ended by the Treaty of Portsmouth mediated by Theodore Roosevelt.'],
  ['Capital city of the Aztec Empire, built on an island in Lake Texcoco', 'Tenochtitlan', 'Founded in 1325 and captured by Spanish forces in 1521.'],
  ['16th-century naval battle where a Holy League fleet defeated the Ottoman Empire in Greece', 'Battle of Lepanto', 'Fought in October 1571.'],
  ['Famous 19th-century nurse known as "The Lady with the Lamp" during the Crimean War', 'Florence Nightingale', 'She pioneered modern sanitation and nursing practices.'],
  ['Period of intense revolutionary violence in France from 1793 to 1794 led by Robespierre', 'The Reign of Terror', 'Over 16,000 official death sentences by guillotine were carried out.'],
  ['The ancient civilization that developed cuneiform script in Mesopotamia', 'The Sumerians', 'Cuneiform is one of the earliest systems of writing.']
];

const d4 = [
  ['Byzantine emperor known for his legal code and the construction of Hagia Sophia in 537 AD', 'Justinian I (Justinian the Great)', 'His Corpus Juris Civilis became the basis for Western civil law.'],
  ['The naval battle in 1805 where Lord Nelson defeated the combined French and Spanish fleets', 'Battle of Trafalgar', 'Nelson was mortally wounded during the battle.'],
  ['Treaty signed in 1494 dividing newly discovered lands between Spain and Portugal', 'Treaty of Tordesillas', 'Mediated by Pope Alexander VI.'],
  ['Holy Roman Emperor who presided over the Diet of Worms in 1521', 'Charles V', 'He ruled an empire on which the sun never set.'],
  ['Ancient battle in 331 BC where Alexander the Great decisively defeated Darius III of Persia', 'Battle of Gaugamela', 'Led to the complete downfall of the Achaemenid Empire.'],
  ['1916 World War I battle in France that was one of the longest and deadliest in human history', 'Battle of Verdun', 'Over 700,000 casualties occurred over 302 days.'],
  ['Chinese explorer who commanded seven treasure fleet voyages across the Indian Ocean in the 1400s', 'Zheng He', 'His voyages took place between 1405 and 1433.'],
  ['The ninth tlatoani of Tenochtitlan who ruled during the initial Spanish conquest of Mexico', 'Moctezuma II (Montezuma)', 'He ruled from 1502 to 1520.'],
  ['War of succession fought from 1701 to 1714 over who would inherit the Spanish crown', 'War of the Spanish Succession', 'Concluded with the Peace of Utrecht.'],
  ['Ancient Anatolian empire that fought against Egypt at the Battle of Kadesh in 1274 BC', 'The Hittites', 'Kadesh produced the earliest recorded peace treaty in history.'],
  ['Florentine political philosopher who wrote "The Prince" in 1513', 'Niccolo Machiavelli', 'He explored realistic and pragmatic political leadership.'],
  ['1911 revolution in China that overthrew the Qing Dynasty and created the Republic of China', 'Xinhai Revolution', 'Led intellectually by Dr. Sun Yat-sen.'],
  ['Queen of the British Celtic Iceni tribe who led an uprising against Rome in AD 60 or 61', 'Boudica (Boadicea)', 'Her forces destroyed Roman settlements in Camulodunum and Londinium.'],
  ['1683 siege where an alliance of Polish and Austrian forces defeated the Ottoman army in Europe', 'Battle of Vienna (Siege of Vienna)', 'King John III Sobieski of Poland led the decisive cavalry charge.'],
  ['The political and social system of the Kingdom of France from the Late Middle Ages until 1789', 'Ancien Regime (Old Regime)', 'Characterized by absolute monarchy and feudal estates.'],
  ['Ancient Greek naval battle in 480 BC where Greek triremes destroyed Xerxes\' Persian fleet', 'Battle of Salamis', 'Themistocles devised the winning Greek strategy.'],
  ['Swedish king known as the "Lion of the North" who died at the Battle of Lutzen in 1632', 'Gustavus Adolphus (Gustav II Adolf)', 'Regarded as one of the greatest military commanders of all time.'],
  ['1381 rebellion in England sparked by poll taxes and post-Black Death economic tensions', 'Peasants\' Revolt (Wat Tyler\'s Rebellion)', 'Led by Wat Tyler and preacher John Ball.'],
  ['Indian emperor who converted to Buddhism and erected pillar edicts after the bloody Kalinga War', 'Ashoka the Great', 'He ruled the Mauryan Empire in the 3rd century BC.'],
  ['Secret clause of the 1939 Molotov-Ribbentrop Pact divided this country between Germany and the USSR', 'Poland', 'Both powers invaded Poland in September 1939.']
];

const d5 = [
  ['The 1204 sack of Constantinople occurred during this numbered crusade', 'Fourth Crusade', 'Crusaders attacked their fellow Christian city instead of Jerusalem.'],
  ['The 1618 event in Prague where Protestant nobles threw Catholic regents out of a window, sparking war', 'Defenestration of Prague', 'This initiated the devastating Thirty Years War.'],
  ['Ancient Persian religious prophet who founded the world\'s first monotheistic religion in the 6th century BC', 'Zoroaster (Zarathustra)', 'Zoroastrianism influenced Judaism, Christianity, and Islam.'],
  ['The decisive 216 BC battle where Hannibal encircled and annihilated eight Roman legions using a double envelopment', 'Battle of Cannae', 'Over 50,000 Roman soldiers died in a single day.'],
  ['1857 rebellion in India against British East India Company rule, triggered by rifle cartridges', 'Sepoy Mutiny (Indian Rebellion of 1857)', 'Led the British Crown to take direct control of India.'],
  ['The first Roman general to march an army on Rome itself, later serving as dictator in 82 BC', 'Lucius Cornelius Sulla', 'His civil war pitted him against Gaius Marius.'],
  ['The 1302 battle known as the "Battle of the Golden Spurs" where Flemish infantry defeated French cavalry', 'Battle of Courtrai (Kortrijk)', 'Spurs of fallen French knights were collected and hung in Courtrai cathedral.'],
  ['The French minister of finance under Louis XIV who championed mercantilism', 'Jean-Baptiste Colbert', 'Colbertism became synonymous with state-directed economic policy.'],
  ['The 1644 battle where Oliver Cromwell\'s Ironsides helped Parliament defeat Royalists in northern England', 'Battle of Marston Moor', 'The largest battle fought on English soil during the Civil War.'],
  ['The peace treaty signed in 1763 that concluded the French and Indian War / Seven Years War', 'Treaty of Paris (1763)', 'France ceded almost all its North American territory to Britain and Spain.'],
  ['Ancient Mesopotamian king of Akkad recognized as the first emperor in recorded history', 'Sargon of Akkad', 'He conquered Sumerian city-states around 2334 BC.'],
  ['The Italian city-state governed by the doge, famously dominating Adriatic maritime trade for centuries', 'Republic of Venice (The Serenissima)', 'Existed as a sovereign republic for more than a millennium.'],
  ['The 1839-1842 war between Great Britain and Qing China sparked by the illegal drug trade', 'First Opium War', 'Ended with the Treaty of Nanking, which ceded Hong Kong to Britain.'],
  ['The 1777 battle in upstate New York that convinced France to officially ally with the American colonies', 'Battle of Saratoga', 'General John Burgoyne surrendered his entire British army.'],
  ['The 1415 battle where Henry V\'s English longbowmen decimated heavily armored French nobility in muddy terrain', 'Battle of Agincourt', 'Immortalized in Shakespeare\'s play Henry V.'],
  ['The 1529 military campaign where Suleiman the Magnificent was halted from capturing the capital of Austria', 'First Siege of Vienna', 'Marked the high-water mark of Ottoman expansion in central Europe.'],
  ['The Japanese period of national isolation that lasted from 1603 to 1868 under the Tokugawa shogunate', 'Sakoku', 'Foreigners were banned from entering and Japanese citizens from leaving.'],
  ['The 1605 failed Catholic plot to blow up the British House of Lords with gunpowder', 'Gunpowder Plot', 'Guy Fawkes was arrested guarding 36 barrels of gunpowder.'],
  ['The 1904 entente between Britain and France that resolved colonial disputes and paved the way for WWI alliances', 'Entente Cordiale', 'Settled conflicts in Egypt, Morocco, and Newfoundland.'],
  ['The Aztec ruler during Cortes\'s Noche Triste retreat who died shortly before the fall of Tenochtitlan', 'Cuitlahuac', 'He succeeded Moctezuma II and died of smallpox.']
];

module.exports = buildCategory('hist', 'World History & Empires', { d1, d2, d3, d4, d5 });
