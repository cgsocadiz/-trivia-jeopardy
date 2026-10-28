const { buildCategory } = require('./builder');

function getMusic() {
  const d1 = [
    ['The King of Pop known for hits like "Thriller", "Billie Jean", and "Beat It"', 'Michael Jackson', 'His 1982 album Thriller remains the best-selling album of all time.'],
    ['British rock band featuring John Lennon, Paul McCartney, George Harrison, and Ringo Starr', 'The Beatles', 'Formed in Liverpool in 1960.'],
    ['Pop superstar known as the "Queen of Pop", famous for "Like a Virgin" and "Vogue"', 'Madonna', 'The best-selling female recording artist of all time according to Guinness.'],
    ['Singer-songwriter behind massive albums like "1989", "Fearless", and "Midnights"', 'Taylor Swift', 'First artist to win Album of the Year at the Grammys four times.'],
    ['Lead singer of Queen known for his four-octave vocal range and theatrical stage presence', 'Freddie Mercury', 'Composed timeless hits like "Bohemian Rhapsody" and "We Are the Champions".'],
    ['Reggae pioneer from Jamaica famous for "No Woman, No Cry" and "One Love"', 'Bob Marley', 'Helped spread reggae and the Rastafari movement worldwide.'],
    ['The King of Rock and Roll famous for "Hound Dog", "Jailhouse Rock", and Graceland', 'Elvis Presley', 'Regarded as one of the most significant cultural icons of the 20th century.'],
    ['British singer known for soulful ballads like "Someone Like You", "Hello", and "Rolling in the Deep"', 'Adele', 'Her album 21 is one of the best-selling albums of the 21st century.'],
    ['Australian rock band fronted by Angus Young, famous for "Back in Black" and "Highway to Hell"', 'AC/DC', 'Formed in Sydney in 1973.'],
    ['Irish rock band fronted by Bono, famous for "With or Without You" and "Sunday Bloody Sunday"', 'U2', 'Have won 22 Grammy Awards, more than any other band.'],
    ['Classical German composer who went deaf later in life but composed the Ninth Symphony', 'Ludwig van Beethoven', 'His Ninth Symphony contains the famous "Ode to Joy".'],
    ['Hip-hop mogul and rapper behind "Lose Yourself" and "The Real Slim Shady"', 'Eminem (Marshall Mathers)', 'First artist to win Best Original Song at the Oscars for a rap song.'],
    ['Pop icon known as the "Material Girl" and "Queen of Pop"', 'Madonna', 'Inducted into the Rock and Roll Hall of Fame in 2008.'],
    ['The iconic 1969 music and art festival held in Bethel, New York attended by 400,000 people', 'Woodstock Festival', 'Billed as "An Aquarian Exposition: 3 Days of Peace & Music".'],
    ['Swedish pop supergroup that won Eurovision in 1974 with "Waterloo"', 'ABBA', 'Known for global anthems like "Dancing Queen" and "Mamma Mia".'],
    ['Famous piano-playing British singer-songwriter known as the "Rocket Man"', 'Elton John', 'His single "Candle in the Wind 1997" is one of the biggest selling singles in history.'],
    ['R&B and pop superstar who was a member of Destiny\'s Child before releasing "Crazy in Love"', 'Beyonce (Beyonce Knowles-Carter)', 'Holds the record for the most Grammy Award wins in history (32 wins).'],
    ['Rock band led by Kurt Cobain that pioneered the 1990s grunge movement with "Smells Like Teen Spirit"', 'Nirvana', 'Their 1991 album Nevermind knocked Michael Jackson from the top of the charts.'],
    ['The iconic electric guitar played by Jimi Hendrix, Eric Clapton, and Stevie Ray Vaughan', 'Fender Stratocaster', 'Introduced by Leo Fender in 1954.'],
    ['Classical Austrian child prodigy who composed over 600 works including "The Magic Flute"', 'Wolfgang Amadeus Mozart', 'Began composing at the age of five.']
  ];

  const d2 = [
    ['1973 Pink Floyd progressive rock album featuring a prism dispersing light on its cover', 'The Dark Side of the Moon', 'Spent a record 900+ weeks on the Billboard 200 chart.'],
    ['The Canadian rapper and singer who founded OVO Sound, known for hits like "God\'s Plan" and "Hotline Bling"', 'Drake (Aubrey Graham)', 'One of the highest-certified digital singles artists in the US.'],
    ['The influential Seattle grunge band featuring Eddie Vedder, known for "Alive" and "Jeremy"', 'Pearl Jam', 'Their debut album Ten helped define the 90s alternative rock era.'],
    ['American folk and rock legend who won the 2016 Nobel Prize in Literature', 'Bob Dylan', 'Penned cultural anthems like "Blowin\' in the Wind" and "Like a Rolling Stone".'],
    ['The famous recording studio on Abbey Road in London where The Beatles recorded most of their albums', 'Abbey Road Studios (EMI Studios)', 'The Beatles famously walked across the zebra crossing outside for their 1969 cover.'],
    ['The Minneapolis musical genius known for "Purple Rain", "When Doves Cry", and playing 27 instruments', 'Prince (Prince Rogers Nelson)', 'Inducted into the Rock and Roll Hall of Fame in 2004.'],
    ['The lead guitarist of Led Zeppelin who played a famous double-necked Gibson guitar on "Stairway to Heaven"', 'Jimmy Page', 'Ranked among the greatest electric guitarists in history.'],
    ['The Barbados-born pop and R&B singer behind "Umbrella", "Diamonds", and the Fenty Beauty brand', 'Rihanna (Robyn Rihanna Fenty)', 'Broke records with 14 Billboard Hot 100 number-one singles.'],
    ['British heavy metal band featuring Bruce Dickinson and mascot Eddie the Head', 'Iron Maiden', 'Pioneers of the New Wave of British Heavy Metal.'],
    ['The famous jazz trumpeter and composer behind the best-selling jazz album "Kind of Blue" (1959)', 'Miles Davis', 'Pioneered modal jazz, cool jazz, and jazz fusion.'],
    ['American rock band from California that sang "Hotel California" in 1976', 'The Eagles', 'Their Greatest Hits 1971-1975 is one of the highest-selling albums in US history.'],
    ['The Italian operatic tenor who achieved global crossover fame as one of The Three Tenors', 'Luciano Pavarotti', 'Famous for his soaring rendition of Puccini\'s aria "Nessun dorma".'],
    ['The primary keyboardist and synthesizer innovator who co-founded Pink Floyd and composed "Us and Them"', 'Richard Wright', 'His jazz-influenced textures defined Pink Floyd\'s atmospheric sound.'],
    ['The 1977 Fleetwood Mac album written amidst intense interpersonal band turmoil and divorces', 'Rumours', 'Sold over 40 million copies worldwide.'],
    ['The punk rock band from New York City known for fast 3-chord songs like "Blitzkrieg Bop"', 'The Ramones', 'All members adopted the surname "Ramone".'],
    ['The female country and pop crossover queen famous for "Jolene", "9 to 5", and Dollywood', 'Dolly Parton', 'Composed "I Will Always Love You", later a massive hit for Whitney Houston.'],
    ['The Canadian singer behind "Blinding Lights", which spent a record 90 weeks on the Billboard Hot 100', 'The Weeknd (Abel Tesfaye)', 'Performed the Super Bowl LV halftime show in 2021.'],
    ['The iconic electric bass player of the Red Hot Chili Peppers known for his slap bass technique', 'Flea (Michael Balzary)', 'Co-founded the Silverlake Conservatory of Music.'],
    ['The Motown vocal group that launched the career of Diana Ross in the 1960s', 'The Supremes', 'Scored 12 number-one singles on the Billboard Hot 100.'],
    ['The classical Polish composer and virtuoso pianist renowned for his nocturnes and polonaises', 'Frederic Chopin', 'Wrote almost exclusively for the solo piano.']
  ];

  const d3 = [
    ['The 1971 John Lennon anthem urging global peace, brotherhood, and a world without borders', 'Imagine', 'Co-produced with Yoko Ono and Phil Spector.'],
    ['The legendary delta blues pioneer who, according to legend, sold his soul to the devil at a crossroads', 'Robert Johnson', 'Recorded 29 historic songs in 1936 and 1937.'],
    ['The four movements of Antonio Vivaldi\'s most famous group of violin concertos composed in 1723', 'The Four Seasons (Le quattro stagioni)', 'Spring, Summer, Autumn, and Winter.'],
    ['The influential post-punk Manchester band whose lead singer Ian Curtis died in 1980, reforming as New Order', 'Joy Division', 'Famous for "Love Will Tear Us Apart".'],
    ['The influential hip-hop group from Compton, California featuring Dr. Dre, Eazy-E, and Ice Cube', 'N.W.A (Niggaz Wit Attitudes)', 'Released their groundbreaking debut album Straight Outta Compton in 1988.'],
    ['The female soul singer known as the "Queen of Soul", famous for her empowering rendition of "Respect"', 'Aretha Franklin', 'First woman inducted into the Rock and Roll Hall of Fame in 1987.'],
    ['The 1967 Beatles album often regarded as the first major concept album in pop music history', 'Sgt. Pepper\'s Lonely Hearts Club Band', 'Pioneered elaborate studio multi-tracking and packaging art.'],
    ['The French electronic music duo behind "One More Time", "Get Lucky", and distinctive robot helmets', 'Daft Punk', 'Guy-Manuel de Homem-Christo and Thomas Bangalter.'],
    ['The drummer for Led Zeppelin whose powerful, thunderous playing ended with his tragic death in 1980', 'John Bonham (Bonzo)', 'Led Zeppelin chose to disband rather than replace him.'],
    ['The famous jazz saxophonist and pioneer of bebop who was nicknamed "Bird"', 'Charlie Parker', 'Co-created bebop alongside Dizzy Gillespie in the 1940s.'],
    ['The 1997 album by Radiohead that departed from Britpop into dystopian electronica and alienation', 'OK Computer', 'Widely hailed by critics as one of the greatest albums ever recorded.'],
    ['The English new wave rock band fronted by Sting in the late 1970s and 1980s', 'The Police', 'Hits include "Every Breath You Take" and "Roxanne".'],
    ['The American composer who wrote the iconic 1924 orchestral piece "Rhapsody in Blue"', 'George Gershwin', 'Combined classical music with American jazz idioms.'],
    ['The southern rock band famous for "Free Bird" and "Sweet Home Alabama" that suffered a tragic 1977 plane crash', 'Lynyrd Skynyrd', 'Lead singer Ronnie Van Zant died in the crash.'],
    ['The pioneering 1980 synthesizer from Roland Corporation that defined 80s pop, techno, and electro percussion', 'Roland TR-808 Rhythm Composer', 'Famous for its deep, resonant bass drum boom.'],
    ['The classical composition by Igor Stravinsky that famously caused an uproar and near-riot at its 1913 Paris premiere', 'The Rite of Spring (Le Sacre du printemps)', 'Choreographed by Vaslav Nijinsky with radical polyrhythms.'],
    ['The lead singer and creative visionary behind industrial rock band Nine Inch Nails', 'Trent Reznor', 'Won two Academy Awards for film scoring with Atticus Ross.'],
    ['The legendary New York punk club on the Bowery where Blondie, Talking Heads, and The Ramones emerged', 'CBGB (CBGB & OMFUG)', 'Founded by Hilly Kristal in 1973.'],
    ['The influential 1959 rock and roll tragedy in which Buddy Holly, Ritchie Valens, and the Big Bopper died', 'The Day the Music Died', 'Immortalized in Don McLean\'s 1971 hit "American Pie".'],
    ['The German classical composer of the Baroque era who wrote the Brandenburg Concertos and Mass in B minor', 'Johann Sebastian Bach', 'Master of counterpoint and fugue.']
  ];

  const d4 = [
    ['The musical key in which Beethoven composed his famous Fifth Symphony', 'C minor', 'Known for the dramatic four-note opening motif (short-short-short-long).'],
    ['The innovative record producer who created the famous reverberant "Wall of Sound" recording technique', 'Phil Spector', 'Produced the Ronettes, Righteous Brothers, and The Beatles\' Let It Be.'],
    ['The 1969 jazz fusion double album by Miles Davis that marked a radical shift toward electric instruments and funk grooves', 'Bitches Brew', 'Featured musicians like Chick Corea, Wayne Shorter, and John McLaughlin.'],
    ['The multi-instrumentalist virtuoso and leader of The Beach Boys who composed and produced "Pet Sounds" (1966)', 'Brian Wilson', 'Pioneered sophisticated orchestral pop arrangements.'],
    ['The experimental English art rock band led by Peter Gabriel and later Phil Collins', 'Genesis', 'Pioneers of theatrical 1970s progressive rock.'],
    ['The 1893 symphony by Antonin Dvorak composed while he was director of the National Conservatory of Music of America', 'From the New World (Symphony No. 9)', 'Incorporated Native American and African-American spiritual melodies.'],
    ['The legendary electric bass player for Weather Report who pioneered fretless electric bass playing', 'Jaco Pastorius', 'Famous for his virtuosic soloing and harmonics.'],
    ['The British record label founded by Tony Wilson in 1978 that signed Joy Division, New Order, and Happy Mondays', 'Factory Records', 'Also founded the legendary Hacienda nightclub in Manchester.'],
    ['The 1979 triple album (or double cassette) by The Clash that incorporated punk, reggae, rockabilly, and ska', 'London Calling', 'Cover features a photo of Paul Simonon smashing his bass guitar.'],
    ['The Russian composer who wrote the music for famous ballets "Swan Lake", "The Nutcracker", and "Sleeping Beauty"', 'Pyotr Ilyich Tchaikovsky', 'Also composed the 1812 Overture.'],
    ['The legendary house band at Stax Records in Memphis, Tennessee that backed Otis Redding, Sam & Dave, and Carla Thomas', 'Booker T. & the M.G.\'s', 'Instrumental hit "Green Onions" reached number one on R&B charts.'],
    ['The term for a recurring musical theme associated with a particular character, idea, or place in Wagnerian opera', 'Leitmotif', 'Richard Wagner popularized this extensively in his Ring Cycle.'],
    ['The pioneering German krautrock electronic band formed in 1970 that influenced synth-pop and hip-hop with "Autobahn"', 'Kraftwerk', 'Founded by Ralf Hutter and Florian Schneider.'],
    ['The 1989 album by the Beastie Boys produced by the Dust Brothers renowned for its dense, innovative sample layering', 'Paul\'s Boutique', 'Contains hundreds of unlicensed samples before copyright laws tightened.'],
    ['The opera composer who wrote "La boheme", "Tosca", and "Madama Butterfly"', 'Giacomo Puccini', 'The greatest proponent of the Italian verismo opera tradition.'],
    ['The famous jazz recording label founded in 1939 by Alfred Lion and Max Margulis known for iconic graphic cover art', 'Blue Note Records', 'Photographed by Francis Wolff and designed by Reid Miles.'],
    ['The 1991 shoegaze masterpiece album by Irish-English rock band My Bloody Valentine recorded over two years', 'Loveless', 'Led by Kevin Shields\'s "glide guitar" tremolo technique.'],
    ['The electric guitar effect pedal invented in the 1960s that modulates frequency using a foot-operated rocking pedal', 'Wah-wah pedal (Cry Baby)', 'Popularized by Jimi Hendrix on "Voodoo Child (Slight Return)".'],
    ['The Baroque composition by George Frideric Handel that includes the famous "Hallelujah" chorus', 'Messiah (HWV 56)', 'Tradition holds that King George II stood during the chorus.'],
    ['The 1975 art-pop pioneer who released "Another Green World" and coined the term "Ambient Music"', 'Brian Eno', 'Produced albums for David Bowie, Talking Heads, U2, and Coldplay.']
  ];

  const d5 = [
    ['The classical Austrian composer of the Second Viennese School who invented the twelve-tone technique (dodecaphony)', 'Arnold Schoenberg', 'A radical departure from traditional Western diatonic harmony.'],
    ['The medieval musical manuscript named after the Benedictine monastery of Beuron that Carl Orff adapted into a cantata', 'Carmina Burana', 'Opens and closes with the thunderous choral movement "O Fortuna".'],
    ['The jazz pianist and composer famous for complex harmonic progressions and the groundbreaking 1959 album "Giant Steps"', 'John Coltrane', 'Coltrane changes altered the landscape of modern jazz improvisation.'],
    ['The 1974 German experimental electronic double album by Tangerine Dream composed using Moog synthesizers', 'Phaedra', 'Helped pioneer the Berlin School of electronic music.'],
    ['The unfinished masterpiece mass by Mozart commissioned anonymously by Count Franz von Walsegg in 1791', 'Requiem in D minor (K. 626)', 'Completed after Mozart\'s death by his pupil Franz Xaver Sussmayr.'],
    ['The English lutenist and composer of the Elizabethan era famous for the melancholy song "Flow My Tears"', 'John Dowland', 'Associated with the Latin motto "Semper Dowland, semper dolens".'],
    ['The French microtonal instrument with a keyboard and ring attached to a wire invented in 1928, used by Radiohead and Messiaen', 'Ondes Martenot', 'Featured prominently in Olivier Messiaen\'s Turangalila-Symphonie.'],
    ['The influential modal jazz composition written in 1959 by Miles Davis based on a 24-measure Dorian mode vamp', 'So What', 'Opening track of the landmark album Kind of Blue.'],
    ['The 1912 expressionist song cycle by Arnold Schoenberg for female voice and ensemble using the "Sprechstimme" vocal technique', 'Pierrot Lunaire', 'Set to German translations of poems by Albert Giraud.'],
    ['The legendary New Orleans cornetist regarded as the "founding father of jazz" who was never recorded', 'Buddy Bolden (Charles "Buddy" Bolden)', 'Led the premier brass band in New Orleans from 1895 to 1906.'],
    ['The experimental piece premiered by pianist David Tudor in 1952 consisting of four minutes and thirty-three seconds of silence', '4\'33" (Four Minutes, Thirty-Three Seconds)', 'Composed by John Cage to focus listeners on ambient sounds.'],
    ['The 1968 piece by Steve Reich composed using phase-shifting tape loops of a Pentecostal preacher', 'It\'s Gonna Rain', 'Pioneered American musical minimalism.'],
    ['The 17th-century Italian violin maker whose instruments (including the "Messiah" and "Lady Blunt") are valued in the millions', 'Antonio Stradivari (Stradivarius)', 'Crafted violins, violas, and cellos in Cremona, Italy.'],
    ['The 1956 Duke Ellington performance at this festival that revitalized his career, featuring Paul Gonsalves\'s 27-chorus sax solo', 'Newport Jazz Festival', 'Recorded live on the best-selling album Ellington at Newport.'],
    ['The Renaissance choral technique where all voice parts sing the same syllables at the same rhythm, contrasting with polyphony', 'Homophony (Homorhythmic texture)', 'Promoted by the Council of Trent for liturgical intelligibility.'],
    ['The 1965 free jazz album by Albert Ayler that revolutionized tenor saxophone playing through multiphonics and overblowing', 'Spiritual Unity', 'Recorded for the vanguard ESP-Disk label.'],
    ['The composer who wrote the monumental cycle of 15 symphonies while navigating severe censorship under the Stalinist Soviet regime', 'Dmitri Shostakovich', 'His Fifth Symphony was subtitled "A Soviet artist\'s creative response to just criticism".'],
    ['The tuning system that divides an octave into twelve logarithmically equal parts (100 cents per semitone)', 'Twelve-Tone Equal Temperament (12-EDO)', 'Standard tuning system for modern Western music since the 18th century.'],
    ['The 1971 minimalist opera with music by Philip Glass and direction by Robert Wilson containing no traditional plot', 'Einstein on the Beach', 'Lasts over four hours without intermission.'],
    ['The polyphonic motet for 40 independent voice parts composed around 1570 by English Renaissance composer Thomas Tallis', 'Spem in alium', 'Scored for eight choirs of five voices each.']
  ];

  return buildCategory('mus', 'Music & Iconic Hits', { d1, d2, d3, d4, d5 });
}

const musicCategory = getMusic();
module.exports = musicCategory;
module.exports.getMusic = getMusic;
