const { buildCategory } = require('./builder');

function getSports() {
  const d1 = [
    ['The worldwide multi-sport event held every four years, originating in ancient Greece', 'Olympic Games', 'The modern Olympics debuted in Athens in 1896.'],
    ['Global soccer tournament held every four years organized by FIFA', 'FIFA World Cup', 'First held in Uruguay in 1930.'],
    ['Legendary basketball player known as "His Airness" who won six NBA titles with the Chicago Bulls', 'Michael Jordan', 'Widely regarded as the greatest basketball player of all time.'],
    ['The sport in which athletes compete for the Stanley Cup', 'Ice Hockey', 'The oldest existing trophy awarded to professional sports franchises in North America.'],
    ['Famous boxer who declared "I am the greatest" and "Float like a butterfly, sting like a bee"', 'Muhammad Ali (Cassius Clay)', 'Won the world heavyweight championship three times.'],
    ['The annual championship game of the National Football League (NFL)', 'Super Bowl', 'Watched by over 100 million viewers annually in the United States.'],
    ['Jamaican sprinter widely considered the fastest human of all time with a 9.58s 100m world record', 'Usain Bolt', 'Won eight Olympic gold medals across three Olympic Games.'],
    ['The prestigious tennis tournament played on grass courts in London', 'Wimbledon (The Championships, Wimbledon)', 'Founded in 1877, the oldest tennis tournament in the world.'],
    ['Argentine soccer superstar who led his country to victory in the 2022 FIFA World Cup', 'Lionel Messi', 'Won an unprecedented eight Ballon d\'Or awards.'],
    ['The sport in which competitors hit a small white ball with clubs into 18 holes', 'Golf', 'The four major championships include The Masters and the PGA Championship.'],
    ['Legendary Brazilian soccer player who won three World Cups (1958, 1962, 1970)', 'Pele (Edson Arantes do Nascimento)', 'Scored over 1,000 career goals.'],
    ['Famous American swimmer who won an all-time record 23 Olympic gold medals', 'Michael Phelps', 'Total of 28 Olympic medals across four games.'],
    ['The sport played on a diamond with bases, a bat, and home runs', 'Baseball', 'Known as "America\'s national pastime".'],
    ['Portuguese soccer superstar who has scored over 850 career goals and won 5 Ballon d\'Or awards', 'Cristiano Ronaldo', 'Starred for Manchester United, Real Madrid, Juventus, and Al Nassr.'],
    ['American tennis legend who won 23 Grand Slam singles titles in the Open Era', 'Serena Williams', 'Dominant force in women\'s tennis alongside her sister Venus.'],
    ['The annual multi-stage bicycle race held primarily in France each July', 'Tour de France', 'First organized in 1903.'],
    ['Number of players on the court for one team in a standard basketball game', '5 players', '10 players total on the court simultaneously.'],
    ['The prestigious golf tournament where the winner receives a famous Green Jacket', 'The Masters Tournament', 'Held annually at Augusta National Golf Club in Georgia.'],
    ['Sport that uses a shuttlecock (or "birdie") hit back and forth across a net', 'Badminton', 'One of the fastest racquet sports in the world.'],
    ['The premier open-wheel single-seater motorsport championship sanctioned by the FIA', 'Formula One (F1)', 'Inaugural season took place in 1950.']
  ];

  const d2 = [
    ['The country that has won the most FIFA World Cup titles in men\'s soccer (5 titles)', 'Brazil', 'Won in 1958, 1962, 1970, 1994, and 2002.'],
    ['The four Grand Slam tennis tournaments', 'Australian Open, French Open (Roland Garros), Wimbledon, US Open', 'Winning all four in a single calendar year is a "Calendar Slam".'],
    ['The NBA player who scored 100 points in a single game in 1962 for the Philadelphia Warriors', 'Wilt Chamberlain', 'Achieved against the New York Knicks on March 2, 1962.'],
    ['The legendary New York Yankees baseball player nicknamed "The Sultan of Swat"', 'Babe Ruth (George Herman Ruth)', 'Hit 714 career home runs.'],
    ['The NFL quarterback who won seven Super Bowl titles with the New England Patriots and Tampa Bay Buccaneers', 'Tom Brady', 'Widely regarded as the greatest quarterback in NFL history.'],
    ['The martial art that originated in Japan whose name translates to "the gentle way"', 'Judo', 'Founded in 1882 by Kano Jigoro.'],
    ['The Canadian ice hockey legend nicknamed "The Great One" who scored 2,857 career NHL points', 'Wayne Gretzky', 'His jersey number 99 was retired league-wide by the NHL.'],
    ['The national sport of Japan, featuring heavyweight wrestlers grappling inside a ring called a dohyo', 'Sumo Wrestling', 'Roots dating back centuries to Shinto rituals.'],
    ['The seven-time Formula One World Champion who drove for Ferrari during a dominant 2000-2004 stretch', 'Michael Schumacher', 'Shares the record of seven titles with Lewis Hamilton.'],
    ['The distance of an official marathon race in miles and yards (or kilometers)', '26 miles 385 yards (42.195 km)', 'Standardized at the 1908 London Olympics.'],
    ['The basketball superstar who broke Kareem Abdul-Jabbar\'s all-time NBA scoring record in 2023', 'LeBron James', 'Has won four NBA championships with three different franchises.'],
    ['The international team cricket match format that lasts up to five days', 'Test Cricket', 'Played in traditional white attire with a red ball.'],
    ['The French tennis stadium and Grand Slam tournament played entirely on red clay courts', 'Roland Garros (French Open)', 'Named after pioneering French aviator Roland Garros.'],
    ['The sport that features terms like "spare", "strike", "turkey", and "gutter ball"', 'Ten-pin Bowling', 'A perfect game is 300 points from 12 consecutive strikes.'],
    ['The legendary Swiss tennis player who won 20 Grand Slam singles titles and 8 Wimbledon crowns', 'Roger Federer', 'Known for effortless footwork and an elegant single-handed backhand.'],
    ['The team that won the first two Super Bowls (I and II), coached by Vince Lombardi', 'Green Bay Packers', 'The Super Bowl trophy is named in Vince Lombardi\'s honor.'],
    ['The sport governed by World Rugby where teams score tries and conversions', 'Rugby (Rugby Union / League)', 'Origin legend attributes the sport to William Webb Ellis at Rugby School.'],
    ['The country that won the inaugural FIFA World Cup in 1930, defeating Argentina in the final', 'Uruguay', 'Hosted the tournament in Montevideo.'],
    ['The legendary heavyweight boxing fight between Muhammad Ali and George Foreman in 1974 in Zaire', 'Rumble in the Jungle', 'Ali famously deployed his "rope-a-dope" strategy.'],
    ['The Davis Cup is the premier international men\'s team tournament in which racquet sport?', 'Tennis', 'Founded in 1900 by Dwight F. Davis, the competition is governed by the ITF.']
  ];

  const d3 = [
    ['The only athlete to win Olympic gold medals in the 100m, 200m, and long jump at the same Olympics (1936)', 'Jesse Owens', 'Disproved Nazi racial supremacy theories at the Berlin Games.'],
    ['The Formula One driver who won three world championships before tragically dying at Imola in 1994', 'Ayrton Senna', 'Renowned for unmatched wet-weather mastery and qualifying speed.'],
    ['The baseball player who broke Major League Baseball\'s color barrier in 1947 with the Brooklyn Dodgers', 'Jackie Robinson', 'His uniform number 42 was retired across all MLB teams.'],
    ['The Spanish tennis legend nicknamed the "King of Clay" who won 14 French Open titles', 'Rafael Nadal', 'Boasts an astounding 112-4 win-loss match record at Roland Garros.'],
    ['The English Premier League football club that went an entire 38-game season undefeated in 2003-2004 ("The Invincibles")', 'Arsenal F.C.', 'Managed by Arsene Wenger.'],
    ['The legendary Czech long-distance runner who won the 5,000m, 10,000m, and Marathon at the 1952 Helsinki Olympics', 'Emil Zatopek', 'Nicknamed the "Czech Locomotive".'],
    ['The only player in NBA history to average a triple-double across four complete seasons', 'Russell Westbrook', 'Broke Oscar Robertson\'s all-time triple-double record.'],
    ['The cricket batsman from Australia widely regarded as the greatest of all time with a 99.94 Test batting average', 'Sir Donald Bradman (The Don)', 'Needed just four runs in his final innings to finish with an average of 100.'],
    ['The cyclist who won five consecutive Tour de France titles from 1991 to 1995 without doping disqualification', 'Miguel Indurain', 'Spanish powerhouse known for dominant time-trial performances.'],
    ['The term used in baseball when a batter hits a single, double, triple, and home run in the same game', 'Hitting for the Cycle', 'One of the rarest individual batting achievements in baseball.'],
    ['The American gymnast who has won an all-time record 37 Olympic and World Championship medals', 'Simone Biles', 'Has five gymnastics skills officially named after her in the Code of Points.'],
    ['The legendary boxer who retired with a perfect 49-0 record as heavyweight champion in 1956', 'Rocky Marciano', 'The only heavyweight champion to finish his career undefeated.'],
    ['The country that won the women\'s FIFA World Cup in 1991, 1999, 2015, and 2019', 'United States (USWNT)', 'The most successful national team in women\'s soccer history.'],
    ['The iconic Australian sailor and skipper who won the 1983 America\'s Cup, ending the NYYC\'s 132-year winning streak', 'John Bertrand (Australia II)', 'Featured the innovative winged keel designed by Ben Lexcen.'],
    ['The basketball coach who won 10 NCAA national championships with the UCLA Bruins in a 12-year span', 'John Wooden', 'Known as the "Wizard of Westwood".'],
    ['The Roman stadium capable of seating 150,000 spectators that was used primarily for chariot races', 'Circus Maximus', 'Situated in the valley between the Aventine and Palatine hills.'],
    ['The legendary Kenyan runner who became the first person to run a marathon in under two hours (1:59:40) in 2019', 'Eliud Kipchoge', 'Accomplished in Vienna under controlled experimental conditions.'],
    ['The Boston Celtics center who won 11 NBA championships in 13 seasons as player and player-coach', 'Bill Russell', 'The NBA Finals MVP Award is named in his honor.'],
    ['The legendary 1975 boxing trilogy finale between Muhammad Ali and Joe Frazier in the Philippines', 'Thrilla in Manila', 'Ali won by corner retirement after the 14th brutal round.'],
    ['The South American club football competition equivalent to the European UEFA Champions League', 'Copa Libertadores (Copa CONMEBOL Libertadores)', 'Named in honor of the leaders of the South American wars of independence.']
  ];

  const d4 = [
    ['The first modern Summer Olympic Games in 1896 featured how many participating nations', '14 nations', '241 male athletes competed across 43 events.'],
    ['The Formula One team that has competed in every single Formula One World Championship season since 1950', 'Scuderia Ferrari', 'Has won 16 Constructors\' Championships and 15 Drivers\' Championships.'],
    ['The legendary Soviet goalkeeper nicknamed the "Black Spider" who is the only goalkeeper to win the Ballon d\'Or (1963)', 'Lev Yashin', 'Saved an estimated 150 penalty kicks during his career.'],
    ['The baseball pitcher who threw a 1970 no-hitter while reportedly under the influence of LSD', 'Dock Ellis', 'Pitched the Pittsburgh Pirates to a 2-0 victory over the San Diego Padres.'],
    ['The yacht that won the inaugural 1851 race around the Isle of Wight that established the America\'s Cup', 'America (The Schooner America)', 'Represented the New York Yacht Club.'],
    ['The first driver in NASCAR Cup Series history to win seven championships, nicknamed "The King"', 'Richard Petty', 'Won a record 200 premier series races.'],
    ['The legendary Hungarian football team of the early 1950s led by Ferenc Puskas was known by this moniker', 'The Mighty Magyars (Golden Team)', 'Went undefeated in 31 consecutive matches before the 1954 World Cup final.'],
    ['The African-American tennis pioneer who became the first Black player selected to the US Davis Cup team, winning 3 Grand Slams', 'Arthur Ashe', 'The main stadium at the US Open is named in his honor.'],
    ['The 1954 World Cup final in Switzerland where West Germany upset the seemingly unbeatable Hungarian "Golden Team"', 'Miracle of Bern (Das Wunder von Bern)', 'West Germany won 3-2 after trailing 2-0 in eight minutes.'],
    ['The legendary heavyweight champion who scored 44 knockouts in 50 wins and was known as "Iron Mike"', 'Mike Tyson', 'Became the youngest heavyweight champion in history at age 20 in 1986.'],
    ['The Scottish football manager who managed Manchester United from 1986 to 2013, winning 38 trophies', 'Sir Alex Ferguson', 'Won 13 Premier League titles and 2 UEFA Champions Leagues.'],
    ['The only player to have won the European Golden Shoe with three different clubs', 'Cristiano Ronaldo (or Mario Jardel / Luis Suarez in 2 leagues)', 'Luis Suarez won with Ajax, Liverpool, and Barcelona.'],
    ['The Finnish distance runner nicknamed the "Flying Finn" who won nine Olympic gold medals in the 1920s', 'Paavo Nurmi', 'Set 22 official world records during his legendary career.'],
    ['The NBA player nicknamed "The Answer" who won the 2001 MVP award and four scoring titles with the 76ers', 'Allen Iverson', 'Known for his crossover dribble and cultural impact.'],
    ['The traditional Maori ceremonial dance performed by New Zealand\'s All Blacks rugby team before international matches', 'Ka Mate (The Haka)', 'Composed by Te Rauparaha, war leader of the Ngati Toa.'],
    ['The Canadian sprinter who was stripped of his 1988 Seoul Olympic 100m gold medal and world record after testing positive for stanozolol', 'Ben Johnson', 'Awarded subsequently to Carl Lewis.'],
    ['The only goalkeeper in football history to have scored over 100 competitive goals in official matches', 'Rogerio Ceni', 'Brazilian goalkeeper for Sao Paulo scored 131 goals from free kicks and penalties.'],
    ['The high jumper who revolutionized the sport at the 1968 Mexico City Olympics by jumping backward over the bar', 'Dick Fosbury (The Fosbury Flop)', 'Won gold and transformed high-jumping technique permanently.'],
    ['The chess grandmaster who became the 11th World Chess Champion in 1972 after defeating Boris Spassky in Reykjavik', 'Bobby Fischer', 'Broke a 24-year streak of Soviet World Chess Championship dominance.'],
    ['The famous 1982 football play where Cal used five lateral passes through the Stanford band to score the winning touchdown', 'The Play', 'Cal defeated Stanford 25-20 as the band celebrated prematurely.']
  ];

  const d5 = [
    ['The first unassisted triple play in a World Series game was executed in 1920 by this Cleveland second baseman', 'Bill Wambsganss', 'Accomplished in Game 5 against the Brooklyn Robins.'],
    ['The legendary Italian racing driver who won both the 1950 Mille Miglia and Formula One\'s first-ever official race at Silverstone', 'Giuseppe "Nino" Farina', 'Became the first official Formula One World Drivers\' Champion in 1950.'],
    ['The only football club to have won the European Treble (Domestic League, Cup, and Champions League) twice', 'FC Barcelona and Bayern Munich', 'Barcelona won in 2009 and 2015; Bayern won in 2013 and 2020.'],
    ['The Scottish racing driver who won three Formula One World Championships (1969, 1971, 1973) and pioneered motorsport safety reforms', 'Sir Jackie Stewart (The Flying Scot)', 'Campaigned for full-face helmets, seatbelts, and medical facilities.'],
    ['The historic 1956 Summer Olympics water polo match between Hungary and the USSR that ended in violence and blood', 'Blood in the Water Match (Melbourne 1956)', 'Took place shortly after the Soviet military crushed the Hungarian Revolution.'],
    ['The American track and field athlete who held the world record in the long jump (8.90m) for nearly 23 years from 1968 to 1991', 'Bob Beamon', 'Smashed the previous world record by 55 cm (21.7 inches) in Mexico City.'],
    ['The cricket bowler from Sri Lanka who holds the all-time world record with 800 Test wickets', 'Muttiah Muralitharan', 'Took his 800th wicket with the final ball of his final Test match in 2010.'],
    ['The legendary German footballer nicknamed "Der Kaiser" who invented the modern sweeper / libero role', 'Franz Beckenbauer', 'Won the World Cup as captain in 1974 and as manager in 1990.'],
    ['The 1938 tennis Grand Slam winner who was the first tennis player to win all four major titles in a single calendar year', 'Don Budge', 'Achieved the men\'s singles Grand Slam in 1938.'],
    ['The Japanese judo master who won 203 consecutive matches between 1977 and 1985 before retiring undefeated', 'Yasuhiro Yamashita', 'Won gold at the 1984 Los Angeles Olympics despite a torn calf muscle.'],
    ['The only player in NBA history to lead the league in points, assists, and steals in the same season (1973)', 'Nate "Tiny" Archibald', 'Achieved with the Kansas City-Omaha Kings.'],
    ['The ancient Greek pankratiast who famously died during his final Olympic bout in 564 BC but was crowned champion posthumously', 'Arrhichion of Phigalia', 'His opponent conceded defeat from a dislocated toe as Arrhichion died of strangulation.'],
    ['The 1950 World Cup match known as the "Maracanazo" where Uruguay stunned host Brazil 2-1 before 200,000 spectators', 'The Maracanazo', 'Alcides Ghiggia scored the winning goal in the 79th minute.'],
    ['The 1904 Olympic marathon winner who was nearly killed by his trainers administering him strychnine and brandy as stimulants', 'Thomas Hicks', 'Collapsed after crossing the finish line in Saint Louis.'],
    ['The legendary Romanian gymnast who scored the first-ever perfect 10.0 in modern Olympic gymnastics history at Montreal 1976', 'Nadia Comaneci', 'The scoreboard could only display 1.00 because it lacked four digits.'],
    ['The only baseball player in MLB history to play in a World Series and an NFL Super Bowl', 'Deion Sanders', 'Won two Super Bowls (49ers, Cowboys) and played in the 1992 World Series (Braves).'],
    ['The Australian rules football competition\'s highest individual honor awarded annually to the fairest and best player', 'Brownlow Medal', 'Named in honor of Charles Brownlow.'],
    ['The 1972 Olympic basketball final where the USSR defeated the USA 51-50 on a controversial last-second basket by this player', 'Alexander Belov', 'The final three seconds were controversially replayed twice by officials.'],
    ['The heavyweight boxing champion from 1908 to 1915 who was the first African-American world heavyweight champion', 'Jack Johnson', 'Defeated James J. Jeffries in the 1910 "Fight of the Century".'],
    ['The distance of the famous 1954 "Miracle Mile" race in Vancouver where Roger Bannister and John Landy both broke four minutes', 'One Mile (1,609.34 meters)', 'Bannister won in 3:58.8 as Landy looked over his left shoulder.']
  ];

  return buildCategory('spt', 'Sports & Champions', { d1, d2, d3, d4, d5 });
}

const sportsCategory = getSports();
module.exports = sportsCategory;
module.exports.getSports = getSports;
