const { buildCategory } = require('./builder');

function getLiterature() {
  const d1 = [
    ['Playwright who wrote "Romeo and Juliet", "Hamlet", and "Macbeth"', 'William Shakespeare', 'Known as the "Bard of Avon".'],
    ['Classic novel by Mary Shelley about a scientist who creates a living creature from corpses', 'Frankenstein', 'Published in 1818 when Shelley was just 20 years old.'],
    ['Dystopian novel by George Orwell set in a totalitarian superstate ruled by Big Brother', '1984 (Nineteen Eighty-Four)', 'Introduced terms like "thoughtcrime", "doublethink", and "Newspeak".'],
    ['Fictional detective who resides at 221B Baker Street in London created by Sir Arthur Conan Doyle', 'Sherlock Holmes', 'Assisted by Dr. John H. Watson.'],
    ['Epic high-fantasy novel series by J.R.R. Tolkien following Frodo Baggins', 'The Lord of the Rings', 'Divided into The Fellowship of the Ring, The Two Towers, and The Return of the King.'],
    ['American novel by F. Scott Fitzgerald set in the Jazz Age featuring Jay Gatsby and Nick Carraway', 'The Great Gatsby', 'Set in the fictional towns of West Egg and East Egg on Long Island in 1922.'],
    ['Herman Melville novel about Captain Ahab\'s obsessive quest to hunt a giant white sperm whale', 'Moby-Dick', 'Famous opening line: "Call me Ishmael."'],
    ['Novelist who wrote "Pride and Prejudice", "Sense and Sensibility", and "Emma"', 'Jane Austen', 'Her novels critique 18th-century British landed gentry.'],
    ['Harper Lee\'s Pulitzer Prize-winning novel dealing with racial injustice, narrated by Scout Finch', 'To Kill a Mockingbird', 'Features noble lawyer Atticus Finch.'],
    ['Children\'s novel by Lewis Carroll where a young girl falls down a rabbit hole into a fantasy realm', 'Alice\'s Adventures in Wonderland', 'Introduced the Mad Hatter, Cheshire Cat, and Queen of Hearts.'],
    ['Author of "The Adventures of Tom Sawyer" and "Adventures of Huckleberry Finn"', 'Mark Twain (Samuel Langhorne Clemens)', 'Often lauded as the "father of American literature".'],
    ['Dystopian novel by Ray Bradbury where books are outlawed and "firemen" burn any found', 'Fahrenheit 451', 'Named for the temperature at which book paper catches fire and burns.'],
    ['French author who wrote "Les Miserables" and "The Hunchback of Notre-Dame"', 'Victor Hugo', 'A leading figure of the French Romantic literary movement.'],
    ['J.D. Salinger novel narrated by the disillusioned and rebellious teenager Holden Caulfield', 'The Catcher in the Rye', 'Published in 1951, capturing post-WWII teenage alienation.'],
    ['Charles Dickens novel set in London and Paris during the French Revolution ("It was the best of times...")', 'A Tale of Two Cities', 'One of the best-selling novels of all time.'],
    ['Russian author who penned the monumental masterpieces "War and Peace" and "Anna Karenina"', 'Leo Tolstoy', 'A master of realist fiction and philosophical pacifism.'],
    ['Epic Greek poem attributed to Homer that recounts the events of the Trojan War', 'The Iliad', 'Focuses on the rage of the warrior Achilles.'],
    ['The fantasy novella by Antoine de Saint-Exupery about a young prince who visits various planets', 'The Little Prince (Le Petit Prince)', 'One of the most translated and best-selling books in world literature.'],
    ['Author who wrote "The Shining", "Carrie", "Misery", and "Pet Sematary"', 'Stephen King', 'Often crowned the "King of Horror".'],
    ['Gothic horror novel by Bram Stoker that introduced literature\'s most famous Transylvanian vampire in 1897', 'Dracula', 'Written in an epistolary format of letters, diary entries, and newspaper clippings.']
  ];

  const d2 = [
    ['Spanish novel by Miguel de Cervantes considered the first modern novel, featuring a windmill-charging knight', 'Don Quixote', 'Published in two parts in 1605 and 1615.'],
    ['1847 Emily Bronte novel set on the windswept Yorkshire moors featuring Heathcliff and Catherine', 'Wuthering Heights', 'Her only published novel before her death at age 30.'],
    ['Russian novel by Fyodor Dostoevsky about a poor student who murders a pawnbroker', 'Crime and Punishment', 'Follows the psychological turmoil and redemption of Rodion Raskolnikov.'],
    ['Aldous Huxley\'s 1932 dystopian novel set in a genetically engineered, conditioned World State', 'Brave New World', 'Citizens consume the mood-altering drug "soma".'],
    ['Ancient Mesopotamian epic poem regarded as the earliest surviving great work of literature', 'Epic of Gilgamesh', 'Recounts the journey of Gilgamesh, King of Uruk.'],
    ['Author of the Southern Gothic classics "The Sound and the Fury" and "As I Lay Dying"', 'William Faulkner', 'Won the 1949 Nobel Prize in Literature.'],
    ['1847 novel by Charlotte Bronte featuring an orphaned governess at Thornfield Hall and Mr. Rochester', 'Jane Eyre', 'Published under the pen name Currer Bell.'],
    ['The 14th-century narrative poem by Dante Alighieri divided into Inferno, Purgatorio, and Paradiso', 'The Divine Comedy (La Divina Commedia)', 'Written in the Tuscan dialect in terza rima rhyme scheme.'],
    ['John Steinbeck novel depicting the Joad family\'s migration from the Oklahoma Dust Bowl to California', 'The Grapes of Wrath', 'Won the National Book Award and Pulitzer Prize for fiction.'],
    ['The Greek epic poem by Homer recounting the 10-year journey home of the King of Ithaca', 'The Odyssey', 'Features encounters with the Cyclops Polyphemus, Circe, and the Sirens.'],
    ['The allegorical novella by George Orwell where farm animals overthrow their human master', 'Animal Farm', 'Satirizes the 1917 Russian Revolution and subsequent Stalinist regime.'],
    ['American poet who wrote "The Raven", "Annabel Lee", and pioneered the detective fiction genre', 'Edgar Allan Poe', 'Master of the macabre and gothic short story.'],
    ['The 1886 novella by Robert Louis Stevenson exploring the duality of human nature through a doctor and his alter ego', 'Strange Case of Dr Jekyll and Mr Hyde', 'Explores the battle between good and evil within one man.'],
    ['French author who pioneered science fiction with "Twenty Thousand Leagues Under the Sea" and "Around the World in Eighty Days"', 'Jules Verne', 'The second most-translated individual author in the world.'],
    ['Novel by Gabriel Garcia Marquez chronicling seven generations of the Buendia family in Macondo', 'One Hundred Years of Solitude', 'A landmark masterpiece of magical realism.'],
    ['The central tragic Danish prince who soliloquizes "To be, or not to be" in Shakespeare\'s tragedy', 'Hamlet', 'Wrestles with seeking vengeance against his uncle Claudius.'],
    ['The 1925 modernist novel by Virginia Woolf chronicling a single day in post-WWI London through Clarissa\'s eyes', 'Mrs. Dalloway', 'Pioneered stream-of-consciousness narrative style.'],
    ['German author who wrote the two-part tragic play "Faust", who sells his soul to Mephistopheles', 'Johann Wolfgang von Goethe', 'Considered the supreme genius of modern German literature.'],
    ['The novel by Ernest Hemingway set during the Spanish Civil War featuring protagonist Robert Jordan', 'For Whom the Bell Tolls', 'Title inspired by John Donne\'s meditation.'],
    ['The 1851 novel by Nathaniel Hawthorne set in Puritan Massachusetts featuring Hester Prynne', 'The Scarlet Letter', 'Hester is forced to wear the letter "A" for adultery.']
  ];

  const d3 = [
    ['The 1922 landmark modernist novel by James Joyce set in Dublin on June 16, 1904', 'Ulysses', 'Parallels Homer\'s Odyssey through the movements of Leopold Bloom.'],
    ['The monumental seven-volume French novel by Marcel Proust known for the "madeleine moment"', 'In Search of Lost Time (A la recherche du temps perdu)', 'Contains roughly 1.2 million words exploring involuntary memory.'],
    ['The Russian novel by Mikhail Bulgakov where the Devil visits 1930s Moscow, featuring a giant talking cat named Behemoth', 'The Master and Margarita', 'Written during the Stalinist era and published posthumously in 1967.'],
    ['The 1952 semi-autobiographical novel by Ralph Ellison exploring the social and intellectual invisibilities of Black Americans', 'Invisible Man', 'Won the 1953 National Book Award for Fiction.'],
    ['The 1979 novel by Milan Kundera examining the Prague Spring of 1968 and Nietzsche\'s eternal return', 'The Unbearable Lightness of Being', 'Follows the lives of Tomas, Tereza, Sabina, and Franz.'],
    ['The 1958 novel by Nigerian author Chinua Achebe depicting pre-colonial life in southeastern Nigeria and British colonization', 'Things Fall Apart', 'Title taken from W.B. Yeats\'s poem "The Second Coming".'],
    ['The American poet who published "Leaves of Grass" in 1855, celebrating democracy and nature', 'Walt Whitman', 'Known as the "father of free verse".'],
    ['The 1939 Finnegans Wake author who also wrote "A Portrait of the Artist as a Young Man"', 'James Joyce', 'Renowned for complex wordplay, multilingual puns, and stream of consciousness.'],
    ['The Austrian author who wrote "The Metamorphosis", where Gregor Samsa transforms into a giant insect', 'Franz Kafka', 'Coined the term "Kafkaesque" for bizarre, illogical bureaucracies.'],
    ['The 1726 satirical prose novel by Jonathan Swift featuring Lilliput, Brobdingnag, and the Houyhnhnms', 'Gulliver\'s Travels', 'A scathing satire on human nature and travel tales.'],
    ['The 1962 novel by Anthony Burgess written in the fictional teen slang "Nadsat", adapted into a film by Kubrick', 'A Clockwork Orange', 'Follows delinquent Alex and his gang through state conditioning.'],
    ['The English poet who wrote the epic blank-verse poem "Paradise Lost" in 1667 depicting the Fall of Man', 'John Milton', 'Dictated the poem after losing his eyesight completely.'],
    ['The 1981 novel by Salman Rushdie that won the Booker Prize, dealing with India\'s transition from British colonialism', 'Midnight\'s Children', 'Children born at midnight on August 15, 1947 possess telepathic powers.'],
    ['The 1915 novel by D.H. Lawrence exploring three generations of the Brangwen family, banned for obscenity in Britain', 'The Rainbow', 'Its sequel is Women in Love.'],
    ['The 1929 novel by Thomas Mann about Hans Castorp\'s stay at a tuberculosis sanatorium in the Swiss Alps', 'The Magic Mountain (Der Zauberberg)', 'An intellectual portrait of pre-WWI European civilization.'],
    ['The French philosopher and playwright who wrote the existentialist play "No Exit" ("Hell is other people")', 'Jean-Paul Sartre', 'Declined the 1964 Nobel Prize in Literature.'],
    ['The 1953 play by Arthur Miller that uses the Salem witch trials of 1692 as an allegory for McCarthyism', 'The Crucible', 'Protagonist John Proctor refuses to sign a false confession.'],
    ['The 1987 Pulitzer Prize-winning novel by Toni Morrison inspired by the real story of enslaved African-American Margaret Garner', 'Beloved', 'Explores the psychological trauma of slavery.'],
    ['The 14th-century Middle English collection of 24 stories written in rhyming couplets by Geoffrey Chaucer', 'The Canterbury Tales', 'Pilgrims journey to the shrine of Saint Thomas Becket in Canterbury.'],
    ['The 1928 novel by Virginia Woolf depicting an English poet who changes sex from man to woman and lives for centuries', 'Orlando: A Biography', 'Inspired by Woolf\'s lover, aristocratic author Vita Sackville-West.']
  ];

  const d4 = [
    ['The 1973 postmodern masterpiece by Thomas Pynchon revolving around the V-2 rocket in WWII Europe', 'Gravity\'s Rainbow', 'Begins with the line "A screaming comes across the sky."'],
    ['The 18th-century French philosophical novella by Voltaire satirizing Leibnizian optimism ("all is for the best")', 'Candide (Candide, ou l\'Optimisme)', 'Follows Candide, Pangloss, and Cunegonde through disasters.'],
    ['The Roman poet who wrote the monumental mythological narrative poem "Metamorphoses" in 15 books', 'Ovid (Publius Ovidius Naso)', 'Banished by Emperor Augustus to Tomis on the Black Sea in 8 AD.'],
    ['The 1969 novel by Kurt Vonnegut featuring Billy Pilgrim who has become "unstuck in time" during the firebombing of Dresden', 'Slaughterhouse-Five', 'Popularized the fatalistic refrain "So it goes."'],
    ['The 19th-century Russian author who wrote "Fathers and Sons" (1862), popularizing the term "nihilism"', 'Ivan Turgenev', 'Explored generational ideological conflict between liberals and nihilists.'],
    ['The Japanese author who won the 1968 Nobel Prize in Literature for works like "Snow Country" and "Thousand Cranes"', 'Yasunari Kawabata', 'First Japanese author to be awarded the Nobel Prize in Literature.'],
    ['The Italian author who wrote "If on a winter\'s night a traveler" (1979), a meta-novel addressed directly to the reader', 'Italo Calvino', 'Member of the French Oulipo literary workshop.'],
    ['The 1957 beat generation novel written by Jack Kerouac on a continuous 120-foot scroll of tracing paper', 'On the Road', 'Follows Sal Paradise and Dean Moriarty across America.'],
    ['The Portuguese poet who wrote under over 70 distinct "heteronyms", including Alberto Caeiro and Alvaro de Campos', 'Fernando Pessoa', 'Author of the posthumously published masterpiece The Book of Disquiet.'],
    ['The epic Sanskrit poem of ancient India comprising over 200,000 verse lines that contains the Bhagavad Gita', 'The Mahabharata', 'Attributes authorship to the sage Vyasa.'],
    ['The 1901 novel by Thomas Mann chronicling four generations of a wealthy merchant family in Lubeck', 'Buddenbrooks', 'Won Mann the Nobel Prize in Literature in 1929.'],
    ['The 1938 novel by Samuel Beckett written in English before he transitioned to writing primarily in French', 'Murphy', 'Follows an eccentric Irish intellectual in London.'],
    ['The long narrative poem in ottava rima by Lord Byron about a legendary libertine who is easily seduced by women', 'Don Juan', 'Byron inverted the traditional legend, making Juan the victim of seduction.'],
    ['The 1996 monumental 1,079-page maximalist novel by David Foster Wallace set in Enfield, Massachusetts and an addiction clinic', 'Infinite Jest', 'Features 388 endnotes, some with their own footnotes.'],
    ['The Latin-language philosophical work by Sir Thomas More in 1516 that coined the word for an ideal society', 'Utopia', 'Derived from the Greek meaning "no place" or "good place".'],
    ['The Greek poet who wrote the "Theogony" and "Works and Days" in dactylic hexameter around 700 BC', 'Hesiod', 'Earliest known Greek poet to refer to himself in his poetry.'],
    ['The 1974 novel by Ursula K. Le Guin contrasting the utopian anarchist world of Anarres with capitalist Urras', 'The Dispossessed', 'Won both the Hugo and Nebula Awards for Best Novel.'],
    ['The 1947 French novel by Albert Camus chronicling a deadly epidemic quarantined in the Algerian city of Oran', 'The Plague (La Peste)', 'A major philosophical allegory of the German occupation of France.'],
    ['The 18th-century English epistolary novel by Samuel Richardson spanning over a million words about a virtuous woman', 'Clarissa (The History of a Young Lady)', 'One of the longest novels written in the English language.'],
    ['The 1930 novel by William Faulkner narrated by 15 different characters in 59 interior monologues as they transport a corpse', 'As I Lay Dying', 'Features the famous single-sentence chapter by Vardaman: "My mother is a fish."']
  ];

  const d5 = [
    ['The 1928 French surrealist novel by Andre Breton that begins with the haunting question "Who am I?"', 'Nadja', 'Illustrated with documentary photographs instead of descriptions.'],
    ['The 11th-century Japanese epic by noblewoman Murasaki Shikibu considered the world\'s first novel', 'The Tale of Genji (Genji Monogatari)', 'Follows the romantic life of the "Shining Prince" Hikaru Genji.'],
    ['The 1955 novel by Mexican author Juan Rulfo that deeply inspired Gabriel Garcia Marquez and magical realism', 'Pedro Paramo', 'Narrator Juan Preciado travels to Comala, finding a ghost town.'],
    ['The monumental Roman historical poem by Lucan recounting the civil war between Julius Caesar and Pompey', 'Pharsalia (De Bello Civili)', 'Distinguished by rejecting traditional divine intervention by the gods.'],
    ['The 1930 Austrian modernist novel in three volumes by Robert Musil left unfinished at his death in 1942', 'The Man Without Qualities (Der Mann ohne Eigenschaften)', 'Set in the Austro-Hungarian Empire, satirically dubbed "Kakania".'],
    ['The 1978 French novel by Georges Perec written according to the knight\'s tour chess algorithm across a Parisian apartment building', 'Life: A User\'s Manual (La Vie mode d\'emploi)', 'Perec was a prominent member of the Oulipo constraint-based writing group.'],
    ['The 1939 Irish novel by Flann O\'Brien featuring multiple conflicting story layers where fictional characters drug their author', 'At Swim-Two-Birds', 'Praised by Graham Greene, Dylan Thomas, and James Joyce.'],
    ['The medieval Old English heroic epic preserved in the Nowell Codex surviving in a single manuscript', 'Beowulf', 'Composed in alliterative verse, defeating Grendel, Grendel\'s mother, and a dragon.'],
    ['The 1971 novel by German author Heinrich Boll narrated as an investigative documentary about a cleaning lady', 'Group Portrait with Lady (Gruppenbild mit Dame)', 'Helped Boll win the Nobel Prize in Literature in 1972.'],
    ['The obscure Greek tragic poet of the Hellenistic era whose cryptic 1,474-iambic poem "Alexandra" features Cassandra\'s prophecies', 'Lycophron', 'Notorious for bizarre vocabulary and extreme mythological obscurity.'],
    ['The 1890 French decadent novel by Joris-Karl Huysmans starring the reclusive aesthete Jean des Esseintes', 'Against Nature (A rebours)', 'Referred to by Oscar Wilde as the "yellow book" that poisons Dorian Gray.'],
    ['The 1963 Argentine counter-novel by Julio Cortazar designed with 155 chapters to be read either sequentially or by hopping', 'Hopscotch (Rayuela)', 'Pioneered experimental non-linear Latin American literature.'],
    ['The 1678 Christian allegorical prose work written by John Bunyan while imprisoned in Bedford county gaol', 'The Pilgrim\'s Progress', 'Narrates Christian\'s journey from the City of Destruction to the Celestial City.'],
    ['The 1932 novel by French author Louis-Ferdinand Celine written in raw Parisian argot recounting Ferdinand Bardamu\'s wanderings', 'Journey to the End of the Night (Voyage au bout de la nuit)', 'Won the Prix Renaudot in 1932.'],
    ['The 1759-1767 eccentric nine-volume novel by Laurence Sterne containing blank pages, marbled pages, and digressive footnotes', 'The Life and Opinions of Tristram Shandy, Gentleman', 'The protagonist is not even born until Volume III.'],
    ['The Old Norse mythological poetic compendium compiled in the 13th century from earlier traditional sources', 'The Poetic Edda (Elder Edda)', 'Preserved in the Icelandic manuscript Codex Regius.'],
    ['The 1952 short novel by Ernest Hemingway that earned him the Pulitzer Prize in 1953 and the 1954 Nobel Prize', 'The Old Man and the Sea', 'Depicts an aging Cuban fisherman named Santiago battling a giant marlin.'],
    ['The 1904 tragedy by Anton Chekhov about an aristocratic Russian family who loses their estate to the son of a former serf', 'The Cherry Orchard', 'Chekhov\'s final play before his death in 1904.'],
    ['The 1975 German novel by Peter Handke recounting his mother\'s suicide, written in rigorous and stripped-back prose', 'A Sorrow Beyond Dreams (Wunschloses Ungluck)', 'Considered one of the finest memoirs of post-war German literature.'],
    ['The monumental 10th-century Persian national epic poem composed of over 50,000 couplets by the poet Ferdowsi', 'The Shahnameh (The Book of Kings)', 'Chronicling the mythological and historical past of Greater Iran.']
  ];

  return buildCategory('lit', 'Literature & Famous Books', { d1, d2, d3, d4, d5 });
}

const literatureCategory = getLiterature();
module.exports = literatureCategory;
module.exports.getLiterature = getLiterature;
