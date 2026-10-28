const { buildCategory } = require('./builder');

const data = {
  // Tier 1 ($100 / Easy) - Everyday tech, household gadgets, popular tech brands
  d1: [
    ['He co-founded Apple Inc. alongside Steve Wozniak and introduced the original iPhone in 2007', 'Steve Jobs', 'Steve Jobs revealed the revolutionary iPhone on January 9, 2007.'],
    ['This search engine giant founded by Larry Page and Sergey Brin began as a research project at Stanford', 'Google', 'Google was incorporated in September 1998.'],
    ['What does the acronym "PC" typically stand for in computing?', 'Personal Computer', 'The term became widespread with the IBM PC in 1981.'],
    ['Short for "wireless fidelity", this technology allows devices to connect to local networks wirelessly', 'Wi-Fi', 'Wi-Fi standards are maintained by the IEEE 802.11 group.'],
    ['This short-range wireless technology named after a 10th-century Scandinavian king connects earbuds and keyboards', 'Bluetooth', 'Named after King Harald Bluetooth who united Scandinavian tribes.'],
    ['This company created the Windows operating system and was founded by Bill Gates and Paul Allen', 'Microsoft', 'Microsoft was founded in Albuquerque, New Mexico in 1975.'],
    ['What does the abbreviation "URL" stand for when browsing the web?', 'Uniform Resource Locator', 'A URL specifies the address of a resource on the internet.'],
    ['This handheld e-reader device was launched by Amazon in November 2007', 'Kindle', 'The first Kindle sold out within five and a half hours.'],
    ['In computer terminology, what does "RAM" stand for?', 'Random Access Memory', 'RAM serves as the fast volatile temporary memory for running processes.'],
    ['This American social media network was founded in 2004 by Mark Zuckerberg at Harvard University', 'Facebook', 'Now owned by parent company Meta Platforms.'],
    ['What popular video sharing platform was acquired by Google in 2006 for $1.65 billion?', 'YouTube', 'YouTube was created by former PayPal employees Chad Hurley, Steve Chen, and Jawed Karim.'],
    ['What does "USB" stand for in hardware connection cables?', 'Universal Serial Bus', 'USB was standardized in 1996 to replace multiple legacy serial and parallel ports.'],
    ['What tiny blinking symbol on a screen marks the position where typed characters will appear?', 'Cursor', 'Also sometimes called the caret in text editing.'],
    ['Which mobile operating system features an iconic green robot mascot?', 'Android', 'Android was acquired by Google in 2005.'],
    ['What does "SMS" stand for in cellular mobile messaging?', 'Short Message Service', 'The first SMS text message was sent in December 1992.'],
    ['This electric car and aerospace pioneer founded Tesla, SpaceX, and Neuralink', 'Elon Musk', 'Musk joined Tesla in 2004 and became CEO in 2008.'],
    ['What common input device was invented by Douglas Engelbart in the 1960s using a wooden shell and wheels?', 'Computer Mouse', 'Engelbart demonstrated the mouse in "The Mother of All Demos" in 1968.'],
    ['What keyboard shortcut is universally used to copy highlighted text on Windows PCs?', 'Ctrl + C', 'Ctrl + C copies, while Ctrl + V pastes.'],
    ['This online retail store started in 1994 primarily as an online bookstore operating out of Jeff Bezos\'s garage', 'Amazon', 'Amazon was originally incorporated as Cadabra before rebranding.'],
    ['What does "CPU" stand for in computing architecture?', 'Central Processing Unit', 'The CPU is often referred to as the brain of the computer.']
  ],

  // Tier 2 ($200 / Moderate) - Notable internet history, hardware components, foundational tech
  d2: [
    ['British scientist Tim Berners-Lee invented this information sharing system at CERN in 1989', 'World Wide Web', 'Berners-Lee authored HTML, HTTP, and the first web client and server.'],
    ['What open-source operating system kernel was created by Finnish student Linus Torvalds in 1991?', 'Linux', 'Linux powers Android, supercomputers, cloud servers, and IoT devices worldwide.'],
    ['What does the abbreviation "SSD" stand for in modern storage drives?', 'Solid State Drive', 'SSDs use flash memory without spinning magnetic platters.'],
    ['This company introduced the iconic Walkman portable cassette player in 1979', 'Sony', 'The Walkman transformed personal music consumption on the go.'],
    ['In 1997, this IBM supercomputer defeated World Chess Champion Garry Kasparov in a six-game match', 'Deep Blue', 'Deep Blue became the first computer system to defeat a reigning world champion under tournament conditions.'],
    ['What does "GPU" stand for, specialized in rendering 3D graphics and training AI neural networks?', 'Graphics Processing Unit', 'Nvidia popularized the term GPU with the release of the GeForce 256 in 1999.'],
    ['This programming language designed by James Gosling at Sun Microsystems features the slogan "Write once, run anywhere"', 'Java', 'Java debuted in 1995 with its JVM (Java Virtual Machine) cross-platform model.'],
    ['What does "HTML" stand for in web markup development?', 'Hypertext Markup Language', 'HTML provides the structural skeleton of web documents.'],
    ['In networking, what does "IP" stand for in IP address?', 'Internet Protocol', 'IP addresses uniquely identify devices on local or global networks.'],
    ['Which video game home console released by Nintendo in 2006 popularized motion-controlled gaming?', 'Nintendo Wii', 'The Wii sold over 101 million units worldwide.'],
    ['What does "PDF" stand for, the cross-platform document format developed by Adobe?', 'Portable Document Format', 'Adobe introduced the PDF format in 1993.'],
    ['This company was founded by Gordon Moore and Robert Noyce and dominates microprocessors for PCs', 'Intel', 'Intel introduced the world’s first commercial microprocessor, the 4004, in 1971.'],
    ['What popular file format for digital audio was developed by the Fraunhofer Society and released in 1993?', 'MP3', 'MP3 uses lossy data compression based on psychoacoustic modeling.'],
    ['What does "VPN" stand for, creating an encrypted tunnel across public networks?', 'Virtual Private Network', 'VPNs protect user privacy and secure enterprise remote connections.'],
    ['What web browser launched by Netscape in 1994 kicked off the first browser war against Internet Explorer?', 'Netscape Navigator', 'Netscape was based on the earlier NCSA Mosaic browser.'],
    ['What digital camera component converts optical images into electrical signals, abbreviated "CMOS" or "CCD"?', 'Image Sensor', 'Complementary Metal-Oxide Semiconductor (CMOS) sensors dominate modern phones and cameras.'],
    ['What does "LAN" stand for in local telecommunications and computer setups?', 'Local Area Network', 'A LAN connects computers within a limited area such as a school, office, or residence.'],
    ['This popular open-source version control system was designed by Linus Torvalds in 2005 to manage Linux kernel code', 'Git', 'Git revolutionized distributed source code collaboration.'],
    ['What does "SaaS" stand for in cloud computing business models?', 'Software as a Service', 'SaaS delivers software applications over the internet on a subscription basis.'],
    ['What high-definition optical disc format won the formats war against HD DVD in 2008?', 'Blu-ray', 'Blu-ray was backed by Sony and utilizes a 405nm blue-violet laser.']
  ],

  // Tier 3 ($300 / Intermediate) - Telecom, cybersecurity, system architecture, programming origins
  d3: [
    ['He is widely regarded as the "father of computer science" and cracked the Enigma code at Bletchley Park', 'Alan Turing', 'Turing formalized the concepts of algorithm and computation with the Turing machine.'],
    ['What high-level programming language created by Guido van Rossum in 1991 is named after a British comedy troupe?', 'Python', 'Named after Monty Python\'s Flying Circus.'],
    ['What predecessor network created by the US Department of Defense in 1969 became the technical foundation of the internet?', 'ARPANET', 'ARPANET transmitted its first message between UCLA and Stanford in October 1969.'],
    ['What does the cybersecurity acronym "DDoS" stand for in cyber attacks?', 'Distributed Denial of Service', 'DDoS attacks overwhelm network servers with flood traffic from thousands of compromised nodes.'],
    ['Which pioneer developed the compiler for programming languages and popularized the term "debugging"?', 'Grace Hopper', 'Rear Admiral Grace Hopper worked on the Harvard Mark I and developed FLOW-MATIC, leading to COBOL.'],
    ['In typography and text encoding, what does "ASCII" stand for?', 'American Standard Code for Information Interchange', 'ASCII was published in 1963 using 7-bit encoding for 128 characters.'],
    ['What optical transmission medium uses glass or plastic strands to transmit data as pulses of light at high speed?', 'Fiber Optic Cable', 'Fiber optics enable terabits per second across transoceanic submarine cables.'],
    ['What semiconductor device invented at Bell Labs in 1947 by Bardeen, Brattain, and Shockley replaced bulky vacuum tubes?', 'Transistor', 'The transistor is hailed as one of the greatest inventions of the 20th century.'],
    ['What cryptographic concept allows two parties to encrypt messages using a public key and private key pair?', 'Asymmetric Encryption', 'Also known as public-key cryptography, pioneered by Diffie, Hellman, Rivest, Shamir, and Adleman.'],
    ['What was the name of the first electronic general-purpose digital computer, completed at the University of Pennsylvania in 1945?', 'ENIAC', 'Electronic Numerical Integrator and Computer occupied 1,800 square feet.'],
    ['What database query language was developed at IBM by Donald D. Chamberlin and Raymond F. Boyce in the early 1970s?', 'SQL', 'Structured Query Language (originally SEQUEL) manages relational databases.'],
    ['What breakthrough deep learning architecture introduced in the 2017 paper "Attention Is All You Need" powers GPT and modern LLMs?', 'Transformer', 'Transformers replaced recurrent neural networks through self-attention mechanisms.'],
    ['What wireless networking frequency band was introduced alongside 2.4 GHz to reduce congestion in modern Wi-Fi routers?', '5 GHz', '5 GHz offers higher bandwidth with shorter physical range than 2.4 GHz.'],
    ['What programming language created by Dennis Ritchie at Bell Labs between 1972 and 1973 was used to write the Unix operating system?', 'C', 'C remains one of the most influential programming languages in history.'],
    ['What standard character encoding system supports over 150,000 characters covering all modern and historic world scripts?', 'Unicode', 'UTF-8 is the dominant web encoding for Unicode.'],
    ['What mobile telecommunications standard introduced in the late 2010s offers gigabit peak download speeds and ultra-low latency?', '5G', '5G uses millimeter-wave frequencies and massive MIMO.'],
    ['What open-source software containerization platform was introduced by Solomon Hykes and launched in 2013?', 'Docker', 'Docker packages applications and dependencies into isolated lightweight containers.'],
    ['What mathematical principle states that the number of transistors on a microchip doubles roughly every two years?', 'Moore\'s Law', 'Gordon Moore made this observation in 1965.'],
    ['What device converts analog electrical signals from telephone or cable lines into digital data for home routers?', 'Modem', 'Modem is short for Modulator-Demodulator.'],
    ['What security protocol succeeded SSL (Secure Sockets Layer) to encrypt web traffic on HTTPS connections?', 'TLS', 'Transport Layer Security ensures privacy and data integrity between clients and servers.']
  ],

  // Tier 4 ($400 / Advanced) - Hardware engineering, computing milestones, algorithms, tech pioneers
  d4: [
    ['Considered the world\'s first computer programmer, she wrote an algorithm for Charles Babbage\'s Analytical Engine in 1843', 'Ada Lovelace', 'Lovelace translated and annotated Menabrea\'s paper, envisioning computers processing beyond mere numbers.'],
    ['Which Bell Labs researcher created the C++ programming language in 1979 as an extension of C with classes?', 'Bjarne Stroustrup', 'C++ added object-oriented programming paradigms, memory control, and strong typing.'],
    ['What 19th-century mechanical computing engine designed by Charles Babbage was designed to tabulate polynomial functions?', 'Difference Engine', 'Babbage designed the Difference Engine and later the Turing-complete Analytical Engine.'],
    ['In computer memory hierarchy, what small, ultra-fast static memory integrated on CPU silicon bridges registers and RAM?', 'Cache', 'Modern CPUs feature L1, L2, and L3 cache hierarchies.'],
    ['What consensus mechanism is used by the Bitcoin network to validate transactions and secure the blockchain ledger?', 'Proof of Work', 'Proof of Work requires miners to solve computationally intensive SHA-256 puzzles.'],
    ['What Unix command-line text editor was originally written by Bill Joy in 1976 and later evolved into Vim?', 'vi', 'Bill Joy wrote vi for early BSD releases.'],
    ['What lithography technique using 13.5 nanometer wavelength light is essential for manufacturing chips below 7 nanometers?', 'EUV', 'Extreme Ultraviolet (EUV) lithography machines are manufactured by ASML in the Netherlands.'],
    ['Who invented the relational database model while working at IBM in his landmark 1970 paper?', 'Edgar F. Codd', 'E.F. Codd formulated relational algebra and database normalization.'],
    ['What protocol assigns dynamic IP addresses automatically to devices when they join a local network?', 'DHCP', 'Dynamic Host Configuration Protocol handles automatic IP, gateway, and DNS configuration.'],
    ['In 1973, which Xerox research center developed the Alto, featuring the first GUI, desktop metaphor, and Ethernet?', 'PARC', 'Palo Alto Research Center (Xerox PARC) pioneered the modern GUI, mouse, and laser printing.'],
    ['What type of non-volatile flash memory architecture is used for bulk solid-state storage due to high density and lower cost?', 'NAND', 'NAND flash contrasts with NOR flash which supports random byte access for firmware execution.'],
    ['Which algorithm developed by Ronald Rivest in 1991 produces a 128-bit cryptographic hash digest, now considered insecure for security?', 'MD5', 'MD5 was widely used for file checksum verification before collision vulnerabilities were found.'],
    ['What theoretical limit in computer science describes a problem whose solution can be verified in polynomial time?', 'NP', 'Nondeterministic Polynomial time; the P versus NP problem remains a Millennium Prize Problem.'],
    ['Who developed the RSA public-key cryptosystem in 1977 alongside Adi Shamir and Leonard Adleman?', 'Ron Rivest', 'The RSA initials represent Rivest, Shamir, and Adleman.'],
    ['What high-performance in-memory key-value data store was created by Salvatore Sanfilippo in 2009?', 'Redis', 'Redis stands for Remote Dictionary Server and supports pub/sub, sets, and caching.'],
    ['What optical sensor technology emits pulsed laser beams to measure distances and create 3D maps for autonomous vehicles?', 'LiDAR', 'Light Detection and Ranging is widely deployed in self-driving cars, drones, and robotics.'],
    ['What mathematical function compresses input data of arbitrary size into a fixed-length string of characters?', 'Hash Function', 'Cryptographic hash functions include SHA-256 and BLAKE3.'],
    ['What 1982 protocol standard defines how electronic musical instruments and synthesizers communicate with computers?', 'MIDI', 'Musical Instrument Digital Interface standardized music digital messaging.'],
    ['What semiconductor material is being adopted in power electronics and EV chargers to operate at higher voltages and temperatures than silicon?', 'Gallium Nitride', 'Gallium Nitride (GaN) and Silicon Carbide (SiC) are wide bandgap semiconductors.'],
    ['What machine learning technique trains a generator and a discriminator network in competition, introduced by Ian Goodfellow in 2014?', 'GAN', 'Generative Adversarial Networks (GANs) revolutionized photorealistic synthetic media generation.']
  ],

  // Tier 5 ($500 / Expert) - Obscure breakthroughs, low-level mechanics, deep tech milestones
  d5: [
    ['What electromechanical calculating machine built by Konrad Zuse in Berlin in 1941 was the world\'s first working programmable, fully automatic digital computer?', 'Z3', 'The Z3 used 2,000 telephone relays and operated on binary floating-point numbers.'],
    ['What low-level instruction set architecture developed at UC Berkeley in 2010 is royalty-free and open-source?', 'RISC-V', 'RISC-V provides an open alternative to proprietary x86 and ARM architectures.'],
    ['What atomic physics effect involving quantum tunneling is exploited by modern scanning tunneling microscopes (STM)?', 'Quantum Tunneling', 'Gerd Binnig and Heinrich Rohrer won the 1986 Nobel Prize for inventing the STM.'],
    ['Who authored the seminal 1948 paper "A Mathematical Theory of Communication", founding the field of Information Theory?', 'Claude Shannon', 'Shannon introduced the concept of the "bit" as the fundamental unit of information.'],
    ['What was the codename of the groundbreaking 64-bit microprocessor architecture jointly developed by HP and Intel, known as IA-64?', 'Itanium', 'Itanium utilized Explicitly Parallel Instruction Computing (EPIC) but faced commercial struggles against AMD64.'],
    ['In distributed systems, what theorem formulated by Eric Brewer states that a distributed data store can simultaneously provide at most two out of Consistency, Availability, and Partition tolerance?', 'CAP Theorem', 'Brewer proposed the CAP conjecture in 2000, which was formally proven by Lynch and Gilbert in 2002.'],
    ['What breakthrough error-detecting code algorithm invented by Richard Hamming in 1950 can detect and correct single-bit memory errors?', 'Hamming Code', 'Hamming codes use parity bits mapped to powers of two to detect and pinpoint errors.'],
    ['What was the name of the first computer worm distributed over the internet, unleashed in November 1988 by a Cornell graduate student?', 'Morris Worm', 'Robert Tappan Morris created the worm, which inadvertently crashed thousands of Unix systems.'],
    ['What is the name of the superconducting quantum computer processor unveiled by Google in 2019 that claimed quantum supremacy with 53 qubits?', 'Sycamore', 'Sycamore completed a target calculation in 200 seconds that would take supercomputers days or years.'],
    ['What is the name of the magnetic storage effect discovered by Albert Fert and Peter Grünberg that enabled multi-gigabyte hard drives in the late 1990s?', 'Giant Magnetoresistance', 'Fert and Grünberg shared the 2007 Nobel Prize in Physics for discovering Giant Magnetoresistance (GMR).'],
    ['Which Finnish computer scientist created the SSH (Secure Shell) protocol in 1995 after a password-sniffing attack at Helsinki University?', 'Tatu Ylönen', 'Ylönen created SSH-1 to replace insecure telnet and rlogin services.'],
    ['What fundamental routing protocol of the internet uses Autonomous System Numbers (ASNs) to exchange core routing information between ISPs?', 'BGP', 'Border Gateway Protocol (BGP) is the routing glue connecting global autonomous systems.'],
    ['What early computing device built by Blaise Pascal in 1642 used geared wheels to assist with tax auditing calculations?', 'Pascaline', 'The Pascaline was one of the earliest mechanical calculators.'],
    ['What concurrent, garbage-collected programming language created at Xerox PARC in the 1970s was designed by Alan Kay, Dan Ingalls, and Adele Goldberg?', 'Smalltalk', 'Smalltalk pioneered pure object-oriented design and modern windowed GUI interfaces.'],
    ['What was the name of the 8-bit home microcomputer released by Commodore International in 1982 that became the best-selling single computer model of all time?', 'Commodore 64', 'The Commodore 64 sold an estimated 12.5 to 17 million units worldwide.'],
    ['What cryptographic standard was selected by NIST in 2001 to replace DES, based on the Belgian Rijndael cipher?', 'AES', 'Advanced Encryption Standard (AES) encrypts electronic data with 128, 192, or 256-bit symmetric keys.'],
    ['What mathematical data structure invented by Burton Howard Bloom in 1970 test set membership with zero false negatives but possible false positives?', 'Bloom Filter', 'Bloom filters provide space-efficient probabilistic set queries in databases and caches.'],
    ['What is the name of the first digital stored-program computer to run a program, operating at the University of Manchester in June 1948?', 'Manchester Baby', 'Officially called the Small-Scale Experimental Machine (SSEM).'],
    ['In CPU microarchitecture, what speculative execution vulnerability disclosed in 2018 exploits branch prediction to leak secret data across privilege boundaries?', 'Spectre', 'Spectre (CVE-2017-5753 / CVE-2017-5715) affected modern high-performance microprocessors alongside Meltdown.'],
    ['What deep learning reinforcement algorithm developed by DeepMind taught itself superhuman play in Chess, Shogi, and Go from scratch without human data?', 'AlphaZero', 'AlphaZero generalized AlphaGo Zero using Monte Carlo Tree Search and deep neural networks.']
  ]
};

module.exports = buildCategory('tech', 'Inventions & Technology', data);
