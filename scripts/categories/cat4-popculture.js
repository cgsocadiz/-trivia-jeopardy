const { buildCategory } = require('./builder');

function getPopCulture() {
  const d1 = [
    ['Fictional wizard created by J.K. Rowling who attends Hogwarts School', 'Harry Potter', 'Defeated Lord Voldemort in the Battle of Hogwarts.'],
    ['Actor who played Iron Man / Tony Stark in the Marvel Cinematic Universe', 'Robert Downey Jr.', 'Kicked off the MCU in 2008 with Iron Man.'],
    ['The animated Disney film featuring the hit song "Let It Go"', 'Frozen', 'Voiced by Idina Menzel as Elsa.'],
    ['Legendary spaceship commanded by Han Solo in Star Wars', 'Millennium Falcon', 'Famously made the Kessel Run in less than twelve parsecs.'],
    ['Long-running animated television sitcom featuring Homer, Marge, Bart, Lisa, and Maggie', 'The Simpsons', 'Created by Matt Groening, debuted in 1989.'],
    ['Actor who portrayed Jack Dawson in the 1997 blockbuster movie Titanic', 'Leonardo DiCaprio', 'Directed by James Cameron.'],
    ['Superhero alter-ego of billionaire Bruce Wayne in Gotham City', 'Batman', 'Created by Bob Kane and Bill Finger in 1939.'],
    ['Hit HBO fantasy drama series based on George R.R. Martin\'s "A Song of Ice and Fire"', 'Game of Thrones', 'Ran from 2011 to 2019.'],
    ['The green ogre who lives in a swamp and marries Princess Fiona', 'Shrek', 'Voiced by Mike Myers in the DreamWorks franchise.'],
    ['Sci-fi franchise featuring the characters Luke Skywalker, Princess Leia, and Darth Vader', 'Star Wars', 'Created by George Lucas in 1977.'],
    ['Dystopian book and movie franchise starring Jennifer Lawrence as Katniss Everdeen', 'The Hunger Games', 'Written by Suzanne Collins.'],
    ['Actor who played Neo in "The Matrix" and John Wick in the John Wick franchise', 'Keanu Reeves', 'Directed by the Wachowskis and Chad Stahelski respectively.'],
    ['Popular sitcom set in Central Perk coffee house featuring Rachel, Monica, Phoebe, Joey, Chandler, and Ross', 'Friends', 'Aired for 10 seasons on NBC from 1994 to 2004.'],
    ['The fictional African kingdom ruled by superhero Black Panther (T\'Challa)', 'Wakanda', 'Known for possessing the world\'s supply of Vibranium.'],
    ['Animated Disney movie about a young lion prince named Simba', 'The Lion King', 'Released in 1994 featuring music by Elton John and Tim Rice.'],
    ['Actor who voiced Woody the cowboy in Pixar\'s "Toy Story"', 'Tom Hanks', 'Buzz Lightyear was voiced by Tim Allen.'],
    ['The secret agent known by code number 007 who loves martinis "shaken, not stirred"', 'James Bond', 'Created by author Ian Fleming in 1953.'],
    ['Sci-fi television franchise featuring Captain James T. Kirk and the starship Enterprise', 'Star Trek', 'Created by Gene Roddenberry in 1966.'],
    ['Hit Netflix series about a group of kids in Hawkins, Indiana dealing with the Upside Down', 'Stranger Things', 'Created by the Duffer Brothers.'],
    ['Actor who played Captain Jack Sparrow in the "Pirates of the Caribbean" films', 'Johnny Depp', 'First appeared in 2003\'s The Curse of the Black Pearl.']
  ];

  const d2 = [
    ['1994 film that won Best Picture starring Tom Hanks as a kindhearted man from Alabama', 'Forrest Gump', 'Directed by Robert Zemeckis.'],
    ['The villain who collected six Infinity Stones to wipe out half of all life in Avengers: Infinity War', 'Thanos', 'Portrayed via motion capture by Josh Brolin.'],
    ['The name of the coffee shop where the characters in Friends regularly hang out', 'Central Perk', 'Managed by Gunther.'],
    ['Director of iconic films including "Jaws", "E.T.", "Jurassic Park", and "Schindler\'s List"', 'Steven Spielberg', 'One of the founding pioneers of the New Hollywood era.'],
    ['The fictional universe where Frodo Baggins journeys to Mount Doom to destroy the One Ring', 'Middle-earth (The Lord of the Rings)', 'Created by author J.R.R. Tolkien.'],
    ['Actor who portrayed Walter White in AMC\'s critically acclaimed series "Breaking Bad"', 'Bryan Cranston', 'Co-starred Aaron Paul as Jesse Pinkman.'],
    ['1999 sci-fi movie in which humanity is trapped in a simulated reality ruled by machines', 'The Matrix', 'Stars Keanu Reeves, Laurence Fishburne, and Carrie-Anne Moss.'],
    ['The fictional paper company featured in the American version of "The Office"', 'Dunder Mifflin', 'Set at the Scranton, Pennsylvania branch.'],
    ['Film director known for mind-bending blockbusters like "Inception", "Interstellar", and "Oppenheimer"', 'Christopher Nolan', 'Won Best Director and Best Picture for Oppenheimer in 2024.'],
    ['The fictional continent where the Seven Kingdoms are located in "Game of Thrones"', 'Westeros', 'Separated from Essos by the Narrow Sea.'],
    ['Actor who played Wolverine in the X-Men film series for over two decades', 'Hugh Jackman', 'First played the role in 2000\'s X-Men.'],
    ['The Fox high school musical television drama series created by Ryan Murphy featuring the New Directions show choir', 'Glee', 'Created by Ryan Murphy, Brad Falchuk, and Ian Brennan, running for six seasons.'],
    ['1993 dinosaur thriller based on Michael Crichton\'s novel, directed by Steven Spielberg', 'Jurassic Park', 'Won three Academy Awards for groundbreaking visual and audio effects.'],
    ['The fictional metal bonded to Wolverine\'s skeleton in Marvel Comics', 'Adamantium', 'Virtually indestructible fictional alloy.'],
    ['Actor who won an Oscar for playing the Joker in 2008\'s "The Dark Knight"', 'Heath Ledger', 'Awarded posthumously in 2009.'],
    ['Animated series featuring an eccentric scientist and his fretful grandson traveling across dimensions', 'Rick and Morty', 'Created by Justin Roiland and Dan Harmon.'],
    ['The 1985 time-travel movie featuring Marty McFly, Doc Brown, and a modified DeLorean', 'Back to the Future', 'Directed by Robert Zemeckis, starring Michael J. Fox.'],
    ['Actress who played Hermione Granger in all eight Harry Potter films', 'Emma Watson', 'Also starred as Belle in 2017\'s live-action Beauty and the Beast.'],
    ['The first feature-length computer-animated film released in 1995 by Pixar and Disney', 'Toy Story', 'Directed by John Lasseter.'],
    ['Crime family saga film from 1972 directed by Francis Ford Coppola starring Marlon Brando', 'The Godfather', 'Adapted from Mario Puzo\'s 1969 bestselling novel.']
  ];

  const d3 = [
    ['The first movie in history to gross over $2 billion at the worldwide box office', 'Avatar (2009)', 'Directed by James Cameron.'],
    ['The fictional newspaper where Clark Kent and Lois Lane work as journalists in Metropolis', 'The Daily Planet', 'Edited by Perry White.'],
    ['Actor who played Arthur Fleck in the 2019 film "Joker", winning Best Actor', 'Joaquin Phoenix', 'Directed by Todd Phillips.'],
    ['The magical wardrobe in C.S. Lewis\'s fantasy series leads to this enchanted land', 'Narnia', 'First introduced in The Lion, the Witch and the Wardrobe in 1950.'],
    ['Director known for "Pulp Fiction", "Kill Bill", and "Inglourious Basterds"', 'Quentin Tarantino', 'Known for non-linear storylines and stylized violence.'],
    ['The 1998 Coen brothers cult comedy starring Jeff Bridges as "The Dude"', 'The Big Lebowski', 'Features John Goodman as Walter Sobchak.'],
    ['The high school attended by Buffy Summers in "Buffy the Vampire Slayer"', 'Sunnydale High', 'Built directly atop a Hellmouth.'],
    ['The first film to win all five major Academy Awards (Picture, Director, Actor, Actress, Screenplay)', 'It Happened One Night (1934)', 'Starred Clark Gable and Claudette Colbert.'],
    ['The alien race that attacks Earth in the 1996 blockbuster film "Independence Day"', 'Harvesters (Aliens)', 'Will Smith famously punches one and says "Welcome to Earth".'],
    ['The fictional town in Maine where many of Stephen King\'s novels, including "It", are set', 'Derry, Maine', 'Also featured in 11/22/63 and Insomnia.'],
    ['The 1982 blade runner played by Harrison Ford in Ridley Scott\'s sci-fi classic', 'Rick Deckard', 'Based on Philip K. Dick\'s Do Androids Dream of Electric Sheep?'],
    ['The character played by Sigourney Weaver in the "Alien" film franchise', 'Ellen Ripley', 'Debuted in Ridley Scott\'s 1979 film Alien.'],
    ['The animated spy comedy series featuring secret agent Sterling Mallory and his domineering mother Malory', 'Archer', 'Created by Adam Reed for FX, running for 14 seasons.'],
    ['The 1975 thriller that is widely credited with inventing the modern summer blockbuster concept', 'Jaws', 'Scored by John Williams featuring the famous two-note theme.'],
    ['Actress who won two Best Actress Oscars for "The Silence of the Lambs" and "The Accused"', 'Jodie Foster', 'Played Clarice Starling opposite Anthony Hopkins\'s Hannibal Lecter.'],
    ['The fictional bar where everybody knows your name in an 11-season NBC sitcom', 'Cheers', 'Set in Boston, Massachusetts, starring Ted Danson.'],
    ['The fictional prison where Tim Robbins\'s character Andy Dufresne is incarcerated in a 1994 film', 'Shawshank State Penitentiary', 'Adapted from Stephen King\'s novella.'],
    ['The fictional metal used by Wakandans to absorb and store kinetic energy', 'Vibranium', 'Captain America\'s shield is made of a vibranium-steel alloy.'],
    ['The 2019 South Korean black comedy thriller that became the first non-English film to win Best Picture', 'Parasite', 'Directed by Bong Joon-ho.'],
    ['The dystopian city governed by Omni Consumer Products where the 1987 cyborg cop operates', 'Detroit (RoboCop)', 'Directed by Paul Verhoeven, starring Peter Weller.']
  ];

  const d4 = [
    ['The 1941 cinematic masterpiece directed by, produced by, and starring 25-year-old Orson Welles', 'Citizen Kane', 'Famous for the mystery of "Rosebud".'],
    ['The name of the artificial intelligence computer aboard the Discovery One in "2001: A Space Odyssey"', 'HAL 9000', 'Voiced by Canadian actor Douglas Rain.'],
    ['The fictional British secret intelligence agency featured in the "Kingsman" film franchise', 'Kingsman (Tailor Shop)', 'Created by Mark Millar and Matthew Vaughn.'],
    ['The actor who played the eccentric chocolate maker Willy Wonka in the 1971 musical film adaptation', 'Gene Wilder', 'Directed by Mel Stuart.'],
    ['The three films that share the record for most Academy Awards won by a single movie (11 Oscars)', 'Ben-Hur (1959), Titanic (1997), and The Return of the King (2003)', 'All three swept their respective Oscar ceremonies.'],
    ['The original title of George Lucas\'s Star Wars: Episode VI before it was changed prior to release', 'Revenge of the Jedi', 'Changed because Lucas felt Jedi do not seek revenge.'],
    ['The prestigious cinema award presented at the Cannes Film Festival for the best feature film', 'Palme d\'Or (Golden Palm)', 'First introduced in 1955.'],
    ['The fictional high school where the 2004 teen comedy "Mean Girls" takes place', 'North Shore High School', 'Written by Tina Fey.'],
    ['The character played by Humphrey Bogart who runs a nightclub in 1942\'s "Casablanca"', 'Rick Blaine', 'Opposite Ingrid Bergman as Ilsa Lund.'],
    ['The fictional crime boss known as "Keyser Soze" in the 1995 neo-noir mystery "The Usual Suspects"', 'Verbal Kint (Kevin Spacey)', 'Directed by Bryan Singer, written by Christopher McQuarrie.'],
    ['The hotel in Colorado where Jack Torrance descends into madness in Stanley Kubrick\'s "The Shining"', 'The Overlook Hotel', 'Inspired by the real Stanley Hotel in Estes Park, Colorado.'],
    ['The 1960 psychological horror film directed by Alfred Hitchcock starring Anthony Perkins as Norman Bates', 'Psycho', 'Famous for the shower murder scene.'],
    ['The 2000 martial arts epic directed by Ang Lee that won four Oscars including Best Foreign Language Film', 'Crouching Tiger, Hidden Dragon', 'Starred Chow Yun-fat, Michelle Yeoh, and Zhang Ziyi.'],
    ['The 1984 horror film featuring the dream-stalking killer Freddy Krueger with razor-gloved hands', 'A Nightmare on Elm Street', 'Created and directed by Wes Craven.'],
    ['The fictional newspaper published by J. Jonah Jameson in Marvel\'s Spider-Man comics', 'The Daily Bugle', 'Famous for demanding "pictures of Spider-Man!".'],
    ['The famous screenwriting duo who created and wrote the classic comedies "Airplane!" and "The Naked Gun"', 'ZAZ (Zucker, Abrahams and Zucker)', 'Jim Abrahams, David Zucker, and Jerry Zucker.'],
    ['The 1976 boxing drama written by and starring Sylvester Stallone that won Best Picture', 'Rocky', 'Shot in 28 days on a budget of just over $1 million.'],
    ['The eccentric director of films like "Edward Scissorhands", "Beetlejuice", and "The Nightmare Before Christmas"', 'Tim Burton', 'Known for Gothic, whimsical dark fantasy aesthetics.'],
    ['The 1968 post-apocalyptic sci-fi film where Charlton Heston discovers the ruined Statue of Liberty', 'Planet of the Apes', 'Directed by Franklin J. Schaffner.'],
    ['The legendary stop-motion animation pioneer responsible for the skeleton army in "Jason and the Argonauts"', 'Ray Harryhausen', 'Pioneered the "Dynamation" visual effects technique.']
  ];

  const d5 = [
    ['The first actor to receive a posthumous Academy Award nomination for Best Actor (1955 for East of Eden)', 'James Dean', 'He was also nominated posthumously for Giant (1956).'],
    ['The 1927 silent film directed by Fritz Lang that is considered the pioneering foundational masterpiece of sci-fi cinema', 'Metropolis', 'Featured the iconic robotic character Maria (Maschinenmensch).'],
    ['The 1948 Italian neorealist film directed by Vittorio De Sica about an impoverished father whose bicycle is stolen', 'Bicycle Thieves (Ladri di biciclette)', 'Cast entirely with non-professional actors.'],
    ['The name of the mechanical shark used during the filming of Steven Spielberg\'s 1975 thriller "Jaws"', 'Bruce', 'Named after Spielberg\'s attorney, Bruce Ramer.'],
    ['The French New Wave director whose 1960 debut "Breathless" (A bout de souffle) popularized jump cuts', 'Jean-Luc Godard', 'Starred Jean-Paul Belmondo and Jean Seberg.'],
    ['The fictional spaceship commanded by Captain Dallas in Ridley Scott\'s 1979 film "Alien"', 'USCSS Nostromo', 'Commercial towing vehicle carrying 20 million tons of mineral ore.'],
    ['The sound designer who created the lightsaber hum, Darth Vader\'s breathing, and Chewbacca\'s roar in Star Wars', 'Ben Burtt', 'Created the lightsaber sound using projector motor hum and TV interference.'],
    ['The 1928 French surrealist short film directed by Luis Bunuel and Salvador Dali featuring a sliced eyeball', 'Un Chien Andalou', 'Pioneered avant-garde surrealist cinema.'],
    ['The 1966 epic spaghetti western that concluded Sergio Leone\'s "Dollars Trilogy"', 'The Good, the Bad and the Ugly', 'Starred Clint Eastwood, Lee Van Cleef, and Eli Wallach.'],
    ['The Japanese cinematic auteur who directed "Seven Samurai", "Rashomon", and "Ran"', 'Akira Kurosawa', 'His films deeply influenced Westerns and Star Wars.'],
    ['The first animated short to feature synchronized sound, introducing Mickey Mouse to audiences in 1928', 'Steamboat Willie', 'Directed by Walt Disney and Ub Iwerks.'],
    ['The fictional town in Oregon where the 1985 adventure film "The Goonies" takes place', 'Astoria, Oregon (The Goon Docks)', 'Written by Chris Columbus from a story by Steven Spielberg.'],
    ['The 1957 Swedish psychological drama directed by Ingmar Bergman where a knight plays chess against Death', 'The Seventh Seal (Det sjunde inseglet)', 'Starred Max von Sydow as knight Antonius Block.'],
    ['The fictional corporation that manufactured the replicants in Ridley Scott\'s 1982 film "Blade Runner"', 'Tyrell Corporation', 'Headed by Dr. Eldon Tyrell with the motto "More human than human".'],
    ['The 1950 Billy Wilder film noir starring Gloria Swanson as faded silent film star Norma Desmond', 'Sunset Boulevard', 'Features the famous line "I am big. It\'s the pictures that got small."'],
    ['The real name of the iconic monster created by Mary Shelley, often mistakenly called "Frankenstein"', 'The Monster / Creature (Frankenstein\'s Monster)', 'Victor Frankenstein was the scientist who created him.'],
    ['The 1973 horror classic directed by William Friedkin that was the first horror film nominated for Best Picture', 'The Exorcist', 'Adapted by William Peter Blatty from his own novel.'],
    ['The actress who won four Academy Awards for Best Actress, the most in cinematic history', 'Katharine Hepburn', 'Won for Morning Glory, Guess Who\'s Coming to Dinner, The Lion in Winter, and On Golden Pond.'],
    ['The 1922 unauthorized German silent adaptation of Bram Stoker\'s Dracula directed by F.W. Murnau', 'Nosferatu (Nosferatu, eine Symphonie des Grauens)', 'Starred Max Schreck as Count Orlok.'],
    ['The famous 1968 Stanley Kubrick film that used the classical piece "The Blue Danube" during a space docking sequence', '2001: A Space Odyssey', 'Composed by Johann Strauss II.']
  ];

  return buildCategory('pop', 'Pop Culture & Hollywood', { d1, d2, d3, d4, d5 });
}

const popCategory = getPopCulture();
module.exports = popCategory;
module.exports.getPopCulture = getPopCulture;
