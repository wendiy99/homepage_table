(function(){

var HIGHLIGHTS = [
  "26.8.29–11.1|New York","26.7.17-9.20|Eindhoven","26.7.9","26.6.23","26.6.18|New York","26.6.12|New York","26.5.26","26.4.28|Geneva","26.4.20|San Francisco","26.3.17–29|Hong Kong",
  "26.3.16","26.3.21-8.16|Singapore","26.3|New York","26.2.28","26.2.19",
  "26.1.20|Singapore","26.1.9|Shanghai","25.12–26.1|New York","25.11|Buenos Aires",
  "25.10","25.10–11|France","25.10.30","25.10.28","25.10.3–26.2.1|Warsaw",
  "25.9.12–26.1.4|Berlin","25.8|New York","25.8.6","25.7.24|Beijing",
  "25.7.16","25.7.2","25.6.19","25.6.18","25.6.16–8.31|Beijing",
  "25.6.16–22|Basel","25.6.6|New York","25.5.3–8.23|San Francisco",
  "25.3.11","25.2.3|New York","25.1.20","24.9.14|San Francisco",
  "24–25|New York","24.9–12|New York","24.8.26|Seoul","24.5|San Francisco",
  "24.4.9","24.3.28","23.9.18",
  "23.7","23.5|Princeton NJ","22.7–8|New York","22.6|Svalbard"
];

// Format: ["YY.M.D|City", '<description HTML>', "TYPE", ["category"]]
// Categories: "exhibition" "talk" "publication" "interview" "press" "residency" "initiatives"
var D = [
  ["26.8.29–11.1|New York",    '<a href="https://www.harvestworks.org/event/in-other-forms/"><b>Harvestworks</b>, "In Other Forms"</a>', "EXHIBITION", ["exhibition"], "26.8.29_Harvestworks.jpg"],
  ["26.7.17-9.20|Eindhoven",        '<a href="https://mu.nl/event/opening-night-metabolising-time"><b>MU Hybrid Art House</b>, "Rhythms Beyond Linearity"</a>', "EXHIBITION", ["exhibition"], "26.7.17_MU Hybrid Art House.png"],
  ["26.7.9",                   '<a href="https://www.koozarch.com/interviews/m-design-trust-research-fellowship-with-flora-weil-and-wendi-yan"><b>KoozArch</b>, "M+ / Design Trust Research Fellowship: Thinking in Parallel with Flora Weil and Wendi Yan"</a>', "INTERVIEW", ["interview"], "26.7.9_KoozArch.png"],
  ["26.6.23",                  '<a href="https://analogue.press/p/the-revival-funds-inaugural-cohort"><b>The Revival Fund</b>, Announcing our inaugural cohort of grantees </a>',"INITIATIVE", ["initiatives"], "26.6.23_Revival Fund.png"],
  ["26.6.18|New York",         '<b>Office of Applied Strategy</b>, Practical Aesthetic Service, Panel with Sarah Hromack-Chan, Justin Morris-Marano, and Xandra Beverlin', "TALK", ["talk"], "26.6.18_Office of Applied Strategy.jpg"],
  ["26.6.12|New York",         '<a href="https://www.biodesignchallenge.org/summit-2026"><b>Biodesign Summit</b>, MoMA</a>', "TALK", ["talk"]],
  ["26.6.11|New York",         '<a href="https://www.instagram.com/p/DZc6QOolagR/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="><b>Hyundai Artlab</b>, Guest Editor, June Editor Pick</a>', "PUBLICATION", ["publication", "initiatives"], "26.6.11_Hyundai.png"],
  ["26.6.5-8.9|Melbourne",         '<a href="https://ncm.org.au/exhibitions/stigmergy#6"><b>NCM Melbourne</b>, "Stigmergy"</a>', "EXHIBITION", ["exhibition"], "26.6.5_NCM Stigmergy.png"],
  ["26.6.4|New York",          '<a href="https://www.onx.studio/onx-programming/onxscreens"><b>Onassis Foundation</b>, ONX Screens</a>', "EXHIBITION", ["exhibition"]],
  ["26.5.26",                  '<a href="https://www.artandmarket.net/conversation/2026/05/22/conversation-with-wendi-yan-h7z2r"><b>Art & Market</b>, "Conversation with Wendi Yan"</a>', "INTERVIEW", ["interview"], "26.5.26_Art&Market.png"],
  ["26.5.12|Berlin",           '<a href="https://diffrakt.space/events/trees-and-termites-ghosts-and-goddesses/"><b>diffrakt</b>, "Trees and Termites, Ghosts and Goddesses", Screening</a>', "EXHIBITION", ["exhibition"]],
  ["26.5.8|Venice",            '<a href="https://www.cyfest.art/cyfest-17-venice"><b>CYFEST 17</b>, International Media Art Festival</a>', "EXHIBITION", ["exhibition"], "26.5.9_CYFEST.png"],
  ["26.4.28|Geneva",           '<a href="https://arts.cern/artist/wendi-yan/"><b>CERN Collide Stockholm</b>, Honorary Mention</a>', "RESIDENCY", ["residency"], "26.4.28_CERN.png"],
  ["26.4.20|San Francisco",    '<a href="https://newaesthetics.art/grants"><b>New Aesthetics Grant</b></a>', "GRANT", ["residency"]],
  ["26.3.25|Hong Kong",        '<a href="https://www.kaitaksportspark.com.hk/events-tickets/kai-tak-art-week-2026"><b>K11 | Kai Tak Art Week</b>, Panel with Jiabao Li and Connie Butler, Panel with Sougwen Chung and Scott Moore</a>', "TALK", ["talk"], "26.3.25_Kai Tak Art Week.jpg"],
  ["26.3.24|Hong Kong",        '<a href="https://mc2.art/events/lacma-digital-leaders-digital-art-conversations"><b>LACMA</b>, Digital Art Conversation</a>', "TALK", ["talk"], "26.3.24_LACMA.jpg"],
  ["26.3.21-8.16|Singapore",        '<a href="https://www.marinabaysands.com/museum/programmes/talks/expanded-anatomies.html"><b>ArtScience Museum Singapore</b>, "Flesh and Bones: The Art of Anatomy", Opening Symposium</a>', "EXHIBITION<br>TALK", ["exhibition","talk"], "26.3.21_ArtScience Museum.jpg"],
  ["26.3.17–29|Hong Kong",     '<a href="https://www.kaitaksportspark.com.hk/event/kai-tak-art-week-2026"><b>Kai Tak Art Week</b>, 脊石循息 The Cosmos Breathes through a Porous Body</a>', "EXHIBITION<br>TALK ✦", ["exhibition"], "26.3.17_Kai Tak Art Week.jpg"],
  ["26.3.16",                  '<a href="https://www.lerandom.art/editorial/wendi-yan-karyn-nakamura-on-the-artifice-of-knowledge"><b>Le Random</b>, "Wendi Yan & Karyn Nakamura on the Artifice of Knowledge"</a>', "INTERVIEW", ["interview"], "26.3.16_Le Random.jpg"],
  ["26.3.10|New York",         '"XTRTRRSTRLS", The Wythe', "EXHIBITION", ["exhibition"]],
  ["26.3.8|Berkeley CA",       '<b>120710</b>, "One Molecule Said Yes to Another"', "EXHIBITION", ["exhibition"]],
  ["26.3.6|New York",          '<b>Projekt Blank</b>, "Unstable Systems", conversation with Ivana Dama and Ben Shirken', "TALK", ["talk"]],
  ["26.3|Los Angeles",         '<b>LA Central Library</b>', "EXHIBITION", ["exhibition"]],
  ["26.3|New York",            '<b>Google</b>, Flow Session Artist', "RESIDENCY", ["residency"]],
  ["26.3|online",              '<b>University of Pennsylvania</b>, Guest artist talk', "TALK", ["talk"]],
  ["26.2.28",                  '<a href="https://titles.substack.com/p/do-ais-long-for-a-self-generating"><b>TITLES</b>, "Do AIs Long for a Self-Generating World?"</a>', "PUBLICATION", ["publication"], "26.2.28_TITLES.png"],
  ["26.2.28|Los Angeles",      '"Code Name: Doll House"', "EXHIBITION", ["exhibition"]],
  ["26.2.19",                  '<a href="https://therevivalfund.com/"><b>The Revival Fund</b></a>, Open Call Launches', "INITIATIVE", ["initiatives"]],
  ["26.2.7|online",            '<b>Future Finds</b>, "Beyond a thermodynamic energy future", conversation with Kelsey Chen', "TALK", ["talk"]],
  ["26.2.5",                   '<a href="https://interactfellowship.substack.com/p/in-conversation-with-wendi-yan"><b>Interact Fellowship</b>, Interview</a>', "INTERVIEW", ["interview"]],
  ["26.1.20|Singapore",        '<b>Artspace @ Helutrans Gallery 1</b>, "The 6th VH Award", Singapore Art Week', "EXHIBITION", ["exhibition"], "26.1.20_Artspace Helutrans.png"],
  ["26.1.9|Shanghai",          '<b>BANK</b>, "New Earth"', "EXHIBITION", ["exhibition"], "26.1.9_BANK.png"],
  ["25.12.4",                  '<b>China Academy of Art</b>, Guest artist talk, Open Media Department, online', "TALK", ["talk"]],
  ["25.12–26.1|New York",      '<b>A24 Labs</b>, Storyhacking Resident', "RESIDENCY", ["residency"]],
  ["25.11|Buenos Aires",       '<b>Valerie\'s Factory</b>, "Cafe.exe", curated by Alice Scope, co-presented with Serpentine FAE and Artdao', "EXHIBITION", ["exhibition"]],
  ["25.10.30",                 '<a href="https://artlab.hyundai.com/editorial/letter-from-the-editors-reimagining-the-archive"><b>Hyundai Artlab</b>, "Letter From the Editors: Reimagining the Archive"</a>', "EDITORIAL", ["interview"], "25.10.30_Hyundai Artlab.png"],
  ["25.10.28",                 '<a href="https://www.youtube.com/watch?v=mhyY2SWZlro"><b>CIFRA TV</b>, "Wendi Yan on Worldbuilding, Extinction & Feeling Things for Mammoths."</a>', "INTERVIEW", ["interview"], "25.10.28_CIFRA TV.jpg"],
  ["25.10.21|New York",        '<b>Lux AI Summit</b>, Spring Studios', "EXHIBITION", ["exhibition"]],
  ["25.10.17–30|Shanghai",     '<b>TANK Art Center</b>, "The Electrified Kids", The 8th International Intermedia Festival', "EXHIBITION", ["exhibition"]],
  ["25.10.11|Los Angeles",     '<b>SV Studios</b>, "New Syntax", curated by Alice Scope', "EXHIBITION", ["exhibition"], "25.10.11_SV Studios.jpg"],
  ["25.10.3–26.2.1|Warsaw",    '<a href="https://u-jazdowski.pl/en/programme/exhibitions/if-then"><b>Ujazdowski Castle Center for Contemporary Art</b>, "If/then", curated by Sara Szostak, Marta Grytczuk</a>', "EXHIBITION", ["exhibition"], "25.10.3_Ujazdowski.jpg"],
  ["25.10",                    '<a href="https://www.britishcouncil.org/research-insight/arts-and-technologies-china"><b>British Council</b>, "China Art and Technology Report"</a>', "PRESS", ["press"], "25.10_British Council.png"],
  ["25.10",                    '<a href="https://mp.weixin.qq.com/s/KYRMpUNSQL713dZtU6lMBw"><b>Numero Magazine (China)</b>, "会见空腔"</a>', "INTERVIEW", ["interview"], "25.10_Numero.jpg"],
  ["25.10",                    '<a href="https://berggruen.org/library/proxima-kosmos-volume-2"><b>Berggruen Press</b>, "Science in the Unhomely Clouds", in <i>Proxima Kósmos: Volume II</i>, ed. Claire Webb</a>', "PUBLICATION", ["publication"], "25.10_Berggruen Press_Proxima Kosmos.jpg"],
  ["25.10–11|France",          '<b>Château du Feÿ</b>, Glitch art/tech residency', "RESIDENCY", ["residency"]],
  ["25.9.12–26.1.4|Berlin",    '<a href="https://stiftung-stmatthaeus.de/ausstellungen/lichtan-lichtaus/"><b>Stiftung St. Matthäus</b>, "Lights Off Lights On", curated by Anna-Catharina Gebbers</a>', "EXHIBITION", ["exhibition"]],
  ["25.9.12|Berlin",           '<b>Hamburger Bahnhof</b>, "Videoart at Midnight," Berlin Art Week Garten', "SCREENING", ["exhibition"]],
  ["25.9.11–10.31|Shanghai",   '<b>BAM</b>, "Cosmic Arclight", curated by Iris Long', "EXHIBITION", ["exhibition"]],
  ["25.9.5|Spain",             '<a href="https://soloaiaward.com/">SOLO AI Award, Finalist, Onkaos</a>', "AWARD", ["residency"]],
  ["25.9.3–7|Linz, Austria",   '<a href="https://ars.electronica.art/panic/en/view/artists-perspective-23038ddb450c80e7a1a0e59cda51d5dc/"><b>Ars Electronica Festival</b>, Artist talk at the Expanded Conference, VH Award Presentation, Deep Space</a>', "EXHIBITION<br>TALK", ["exhibition","talk"], "25.9.3_Ars Electronica.jpg"],
  ["25.9",                     '<a href="https://www.monopol-magazin.de/wendi-yan-verschiedene-versionen-der-realitaet"><b>Monopol Magazine</b>, "Watchlist", written by Elke Buhr</a>', "INTERVIEW", ["interview"], "25.9_Monopol.jpeg"],
  ["25.8.23|San Francisco",    '"Visions of Phosphine Earth", Slash', "EXHIBITION", ["exhibition"]],
  ["25.8.6",                   '<a href="https://ars.electronica.art/aeblog/en/2025/08/06/the-6th-vh-award-a-dream-that-wanders-as-if-it-were-real/"><b>Ars Electronica Blog</b>, Son Hyerim, "The 6th VH Award: A Dream That Wanders as If It Were Real"</a>', "INTERVIEW", ["interview"], "25.8.6_Ars Electronica.jpg"],
  ["25.8.1|Idyllwild CA",      '"Visions of Phosphine Earth", FWB Fest, with Berggruen Institute', "EXHIBITION", ["exhibition"]],
  ["25.8|New York",            '<a href="https://www.newinc.org/members"><b>NEW INC</b>, Y12 Extended Realities Track</a>', "RESIDENCY", ["residency"]],
  ["25.7.24|Beijing",          '<b>VH AWARD Salon</b>, Speculative Worldbuilding with AI, conversation with Robin Mallick, Beichen Yang and Ziyang Wu, Hyundai Motorstudio', "TALK", ["talk"]],
  ["25.7.16",                  '<a href="https://mp.weixin.qq.com/s/sDBtWj2yWVAmLdLee4FpOA"><b>艺术商业</b>, "《胡桃宫梦志》：当我们在思考&#x2018;假如&#x2019;的时候，我们究竟在思考什么？"</a>', "INTERVIEW", ["interview"], "25.7.16_Art&Business.png"],
  ["25.7.12",                  '<a href="https://www.sursuma.com/magazine/wendi-yan"><b>Sursuma Magazine</b>, "Wendi Yan"</a>', "INTERVIEW", ["interview"]],
  ["25.7.11",                  '<a href="https://mp.weixin.qq.com/s/x0GajegDsM7AY68qLqvJMA"><b>新周刊</b>, "这些创作者，并不惧怕AI的到来"</a>', "INTERVIEW", ["interview"], "25.7.11_NewWeekly.png"],
  ["25.7.9",                   '<a href="https://futurerelics.berggruen.org/daoist-alchemy"><b>Berggruen Institute</b>, "Daoist Diagram for Carbon Alchemy", in <i>Future Wunderkammer</i>, ed. Claire Webb</a>', "COMMISSION<br>WRITING ✦", ["exhibition","publication"], "25.7.9_Berggruen Institute_Daoist Alchemy.png"],
  ["25.7.9",                   '<a href="https://mp.weixin.qq.com/s/Uw-lW3vDbosYPJ57Z1od-Q"><b>Artisle 艺术岛屿</b>, "VH AWARD —— 新媒体艺术的悖论与可能"</a>', "INTERVIEW", ["interview"], "25.7.9_Artisle.png"],
  ["25.7.2",                   '<a href="https://mp.weixin.qq.com/s/bXCfkiTY7CWhFmoB2zA9KQ"><b>Meta Eye</b>, "颜文笛 | 当一位道士改写现代科学"</a>', "INTERVIEW", ["interview"], "25.7.2_Meta Eye.png"],
  ["25.6.29",                  '<b>Xiamen University</b>, Guest artist talk, "Bodies of Water" by Giulia Colletti', "TALK", ["talk"]],
  ["25.6.25",                  '<a href="https://www.spikeartmagazine.com/articles/sixth-vh-award-hek-basel"><b>Spike Art Magazine</b>, "The 6th VH Award at HEK"</a>', "PRESS", ["press"], "25.6.25_Spike.png"],
  ["25.6.20",                  '<a href="https://ocula.com/magazine/art-news/the-art-world-this-week-20-june-2025/"><b>Ocula</b>, "The Art World This Week: 20 June 2025"</a>', "PRESS", ["press"], "25.6.20_Ocula.png"],
  ["25.6.19",                  '<a href="https://reader.futureartecosystems.org/briefing/fae5/05-artist"><b>Serpentine</b>, Future Art Ecosystems 5: Art x Creative R&D, Contributor</a>', "EDITORIAL", ["interview"], "25.6.19_Serpentine.jpg"],
  ["25.6.18",                  '<a href="https://www.artasiapacific.com/shows/the-vh-award-announces-grand-prix-recipient-and-exhibitions-of-the-6th-vh-award/"><b>ArtAsiaPacific</b>, "The VH Award Announced Grand Prix Recipient and Exhibitions of the 6th VH Award"</a>', "PRESS", ["press"], "25.6.18_ArtAsiaPacific.png"],
  ["25.6.18",                  '<a href="https://www.e-flux.com/announcements/659673/sixth-vh-award-grand-prix-recipient-and-exhibitions/"><b>e-flux</b>, "Sixth VH AWARD Grand Prix recipient and exhibitions"</a>', "PRESS", ["press"], "25.6.18_E-Flux.png"],
  ["25.6.18",                  '<b>Hyundai Motor Group, The Sixth VH Award, Grand Prix</b>, Press: <a href="https://www.e-flux.com/announcements/659673/sixth-vh-award-grand-prix-recipient-and-exhibitions/">e-flux</a>, <a href="https://www.artasiapacific.com/shows/the-vh-award-announces-grand-prix-recipient-and-exhibitions-of-the-6th-vh-award/">ArtAsiaPacific</a>, <a href="https://www.monopol-magazin.de/vh-award-2025-geht-wendi-yan-fuer-dream-walnut-palaces">Monopol</a>, <a href="https://www.spikeartmagazine.com/articles/sixth-vh-award-hek-basel">Spike</a>', "AWARD<br>PRESS", ["residency","press"], "25.6.18_Vision Hall.jpg"],
  ["25.6.16–8.31|Beijing",     '<a href="https://motorstudio.hyundai.com.cn/english/list-45.html"><b>Hyundai Motorstudio</b>, The 6th VH Award Exhibition</a>', "EXHIBITION", ["exhibition"], "25.6.18_Hyundai Motorstudio.jpg"],
  ["25.6.16–22|Basel",         '<a href="https://hek.ch/programm/ausstellungen/6th-vh-award"><b>House of Electronic Arts (HEK)</b>, The 6th VH Award</a>', "EXHIBITION", ["exhibition"], "25.6.16_HEK.jpeg"],
  ["25.6.6",                   '<a href="https://artlab.hyundai.com/editorial/q-and-a-with-dawn-chan-and-the-6th-vh-award-finalists-technological-mythmaking-part-1"><b>Hyundai Artlab</b>, "Q&A with Dawn Chan and the 6th VH AWARD Finalists: Technological Mythmaking", written by Dawn Chan</a>', "INTERVIEW", ["interview"], "25.6.6_Hyundai Artlab.png"],
  ["25.6.6|New York",          '<b><a href="https://www.demofestival.org/">NEW INC DEMO 2025</a></b>, conversation with Darren Zhu', "TALK", ["talk"], "25.6.6 NEW INC DEMO.jpg"],
  ["25.6",                     '<b>South Park Commons</b>, Member Residency', "RESIDENCY", ["residency"]],
  ["25.5.4|New York",          '<a href="https://rhizome.org/events/survival-strategies/"><b>Rhizome World</b>, Survival Strategies: The Dao of Planetary Breath, conversation with Yunuen Rhi, Banyi Huang and Zandie Brockett</a>', "TALK", ["talk"]],
  ["25.5.3–8.23|San Francisco",'<a href="https://www.slashart.org/lagrange-point/"><b>Slash</b>, "Lagrange Point", curated by Ninth Planet</a>', "EXHIBITION", ["exhibition"], "25.5.3_Slash.jpg"],
  ["25.4.29",                  '<b>Princeton University</b>, Visual Arts Panel, Alumni Day', "TALK", ["talk"]],
  ["25.4.22",                  '<b>Rutgers Design Lecture Series</b>, Artist talk, New Brunswick NJ', "TALK", ["talk"]],
  ["25.4–5",                   '<b>Fuser Residency</b>', "RESIDENCY", ["residency"]],
  ["25.3.19",                  '<b>NYU Shanghai</b>, Guest artist talk, "Baby by Design" by Flora Weil', "TALK", ["talk"]],
  ["25.3.11",                  '<a href="https://www.youtube.com/watch?v=QZvPNSwk3Gk"><b>Steve Jobs Archive Fellowship</b>, Year-end talk, recorded at Skywalker Ranch, October 2024</a>', "TALK", ["talk"], "25.3.11_Steve Jobs Archive Fellowship.jpg"],
  ["25.3.9|Austin",            '<b>SeedAI House at SXSW</b>, "Bio-Digital Play", conversation with Will Freudenheim', "TALK", ["talk"], "25.3.9_SeedAI.jpeg"],
  ["25.3.2|Los Angeles",       '<b>Now Instant Image Hall</b>, "Kevin Peter He, Wendi Yan, Alice Bucknell: Cinematic Engine"', "EXHIBITION", ["exhibition"]],
  ["25.2.8",                   '<b>M+ Museum and Design Trust</b>, Design in Rising Winds, research atlas by Flora Weil', "EXHIBITION", ["exhibition"]],
  ["25.2.3|New York",          '<a href="https://apossible.com/interviews/wendi-yan-is-an-artist"><b>APOSSIBLE</b>, "Wendi Yan, Artist"</a>', "INTERVIEW", ["interview"], "25.2.3_Apossible.png"],
  ["25.1.20",                  '<a href="https://history.princeton.edu/undergraduate/alumni-journeys/wendi-yan-23"><b>Princeton History Department</b>, Alum interview</a>', "INTERVIEW", ["interview"], "25.1.20_Princeton.png"],
  ["25|Shanghai",              '<b>BAM</b>, Cosmic Arclight Residency', "RESIDENCY", ["residency"]],
  ["24.12.31|Shanghai",        '<b>TANK Art Center</b>, "GAME OM"', "EXHIBITION", ["exhibition"]],
  ["24.11.15",                 '<a href="https://caldo-worldwide.com/collections/books/products/interplay-will-freudenheim-william-morgan"><b>Caldo Worldwide</b>, Essay on Biotopy, in <i>Interplay</i></a>', "PUBLICATION", ["publication"], "24.11.14_Caldo Worldwide.png"],
  ["24.11.2|Beijing (virtual)",'<a href="https://mp.weixin.qq.com/s/sTZgw613TbX-s_8Cyat_6A"><b>Assembly 拆东西研究所</b>, "Labour, Choices, and Intention: AI & Art Through Two Texts", conversation with Yilun Li, Ziyang Wu, Gary Zhexi Zhang, Tinghao Zhou and Iris Long</a>', "TALK", ["talk"]],
  ["24.10.26|New York",        '<b>NEW INC Creative Science Dinner #4: Rewilding</b>, Biotopy (game)', "EXHIBITION", ["exhibition"]],
  ["24.10.25|New York",        '<b>HEART 442 Broadway</b>, Lavender Town', "EXHIBITION", ["exhibition"]],
  ["24.10.19|New York",        '"Tale of the Mammoth Goddess", Cinema Village, Science New Wave Festival', "EXHIBITION", ["exhibition"]],
  ["24.9.22|Spain",            '<b>Evaristo Valle Museum</b>, "Cyborg Horizons"', "EXHIBITION", ["exhibition"]],
  ["24.9.14|San Francisco",    '<a href="https://2024.grayareafestival.io/"><b>Gray Area Festival 10</b></a>, "Putting History into the Future"', "TALK", ["talk"], "24.9.14_Gray Area Festival 10.jpg"],
  ["24.9–12|New York",         '<a href="https://eyebeam.org/"><b>Eyebeam Residency</b></a>', "RESIDENCY", ["residency"]],
  ["24.9|Tokyo",               '<b>MESH Studio</b>, Digital Architecture Lab', "GRANT", ["residency"]],
  ["24.8.26|Seoul",            '<a href="https://vhaward.com/6th-award/">The 6th VH Award, Finalist, Hyundai Motor Group</a>', "AWARD", ["residency"]],
  ["24.6.8|New York",          '<b>Artifice</b>, "Deus, Sex, Machina"', "EXHIBITION", ["exhibition"]],
  ["24.5.28",                  '<a href="https://www.instagram.com/p/C7RMvg9oIOt/"><b>Trust</b>, "Mammoth Technology: Worlding R&D Aesthetics"</a>', "TALK", ["talk"]],
  ["24.5|San Francisco",       '<a href="https://cosmos-institute.org/"><b>Cosmos Ventures</b>, Prototypes for the Philosophy of Technology Grant</a>', "GRANT", ["residency"]],
  ["24.5",                     '<b>Ethereum Foundation</b>, Summer of Protocols', "GRANT", ["residency"]],
  ["24.4.9",                   '<a href="https://press.asimon.com/articles/antimalarial-drug"><b>Asimov Press</b>, "Discovering an Antimalarial Drug in Mao\'s China"</a>', "PUBLICATION", ["publication"], "24.4.9_Asimov Press.png"],
  ["24.3.28",                  '<a href="https://wetransfer.com/blog/story/wetransfer-launches-networked-worlds-memo/"><b>WeTransfer and Co-Matter</b>, "Networked Worlds: Research Memo"</a>', "WRITING<br>EDITORIAL", ["publication","interview"], "24.3.28_WeTransfer and Co-Matter.png"],
  ["24.3.22|Cambridge",        '<b>Harvard University</b>, Unfiguring: Experiments in Art and Science', "TALK", ["talk"]],
  ["24.3.15|Los Angeles",      '<b>Last Projects</b>, "Dear Beings"', "EXHIBITION", ["exhibition"]],
  ["24–25|New York",           '<a href="https://www.newinc.org/members"><b>NEW INC</b>, Y11 Creative Science Track</a>', "RESIDENCY", ["residency"]],
  ["23.11.4|Beijing (virtual)",'<a href="https://xvirtual.org/"><b>X Virtual</b>, "A Mammoth Gathering", X Museum</a>', "TALK", ["talk"]],
  ["23|Brooklyn NY",           '<b>Interact Symposium</b>, "Mammoths and the Post-Anthropocene"', "TALK", ["talk"]],
  ["23|online",                '<b>Stanford HAI Generative AI Working Group</b>, "Beyond Imitation: Alien Worldbuilding with AI"', "TALK", ["talk"]],
  ["23.9.18",                  '<a href="https://www.wallpaper.com/tech/the-steve-jobs-archive-announces-the-first-recipients-of-its-creative-fellowship"><b>Wallpaper</b>, "The Steve Jobs Archive announces the first recipients of its creative fellowship"</a>', "PRESS", ["press"], "23.9.18_Wallpaper.png"],
  ["23.7",                     '<a href="https://www.coeval-magazine.com/coeval/wendi-yan"><b>Coeval Magazine</b>, "Wendi Yan", written by Oscar Salguero</a>', "INTERVIEW", ["interview"], "23.7_Coeval.png"],
  ["23.5|Princeton NJ",        '<a href="https://vimeo.com/829835865"><b>Lewis Center for the Arts, Princeton University</b>, "A Tiny Museum of Mammoth Technologies"</a>', "SOLO EXHIBITION ✦<br>EDITORIAL", ["exhibition","interview"], "23.5_Lewis Center for the Arts.png"],
  ["23.5.1|Princeton NJ",      '<b>Friend Center for Engineering Education, Princeton University</b>, "Art of Science"', "EXHIBITION", ["exhibition"]],
  ["22.7–8|New York",          '<b>Interact Residency</b>', "RESIDENCY", ["residency"]],
  ["22.6|Svalbard",            '<b>The Arctic Circle</b>, Art & Science Expedition', "RESIDENCY", ["residency"]],
  ["21|virtual",               '<b>EyeJack Gallery</b>, "Prosthetic Reality V.2"', "EXHIBITION", ["exhibition"]]
];

function filterRows(f) {
  document.querySelectorAll('.wy-table tr').forEach(function(tr) {
    var c = tr.dataset.cats || '';
    var show = false;
    if      (f === 'all')         show = true;
    else if (f === 'highlight')   show = tr.dataset.hi === '1';
    else if (f === 'exhibition')  show = c.indexOf('exhibition') > -1;
    else if (f === 'talk')        show = c.indexOf('talk') > -1;
    else if (f === 'publication') show = c.indexOf('publication') > -1;
    else if (f === 'editorial')   show = c.indexOf('interview') > -1 || c.indexOf('press') > -1;
    else if (f === 'residency')   show = c.indexOf('residency') > -1;
    else if (f === 'initiatives') show = c.indexOf('initiatives') > -1;
    tr.classList.toggle('hidden', !show);
  });
}

function initTable() {
  var table  = document.querySelector('.wy-table');
  var tabsEl = document.getElementById('wy-tabs');
  if (!table || !tabsEl) {
    document.addEventListener('DOMContentLoaded', initTable, { once: true });
    return;
  }

  // Detect where the script is hosted to support both local testing and production absolute URL
  var scriptSrc = document.currentScript ? document.currentScript.src : '';
  var imageBase = 'https://wendiy99.github.io/homepage_table/images/';
  if (scriptSrc) {
    var lastSlash = scriptSrc.lastIndexOf('/');
    if (lastSlash > -1) {
      imageBase = scriptSrc.substring(0, lastSlash) + '/images/';
    }
  }

  // Inject styles for the hover preview container if not already present
  if (!document.getElementById('wy-table-injected-style')) {
    var style = document.createElement('style');
    style.id = 'wy-table-injected-style';
    style.textContent = [
      '.wy-hover-preview {',
      '  position: fixed;',
      '  pointer-events: none;',
      '  z-index: 10000;',
      '  opacity: 0;',
      '  transform: translate(15px, -50%) scale(0.95);',
      '  transition: opacity 0.2s cubic-bezier(0.16, 1, 0.3, 1), transform 0.2s cubic-bezier(0.16, 1, 0.3, 1);',
      '  box-shadow: 0 10px 30px rgba(0,0,0,0.12);',
      '  border-radius: 0px;',
      '  overflow: hidden;',
      '  background: #ffffff;',
      '  border: 1px solid rgba(0,0,0,0.08);',
      '  width: 240px;',
      '  height: auto;',
      '  display: none;',
      '}',
      'html body [id="T3057851291"] .wy-table td.wy-type {',
      '  white-space: nowrap !important;',
      '}',
      'html body [id="T3057851291"] .wy-table .c-date {',
      '  width: 135px !important;',
      '}',
      'html body [id="T3057851291"] .wy-table td.wy-date {',
      '  width: 135px !important;',
      '  min-width: 135px !important;',
      '}',
      'html body [id="T3057851291"] .wy-table .c-type {',
      '  width: 110px !important;',
      '}',
      'html body [id="T3057851291"] .wy-table td.wy-type {',
      '  width: 110px !important;',
      '  min-width: 110px !important;',
      '}',
      'html body [id="T3057851291"] .wy-tabs {',
      '  display: flex !important;',
      '  flex-direction: column !important;',
      '  gap: 0.5rem !important;',
      '  border-bottom: 1px solid #e8e8e8 !important;',
      '  padding: 0.6rem 0 0.7rem !important;',
      '  background: #ffffff !important;',
      '}',
      'html body [id="T3057851291"] .wy-tabs-row {',
      '  display: flex !important;',
      '  gap: 0.35rem !important;',
      '  flex-wrap: wrap !important;',
      '}',
      'html body [id="T3057851291"] .wy-tab {',
      '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;',
      '  font-size: 0.65em !important;',
      '  padding: 4px 8px !important;',
      '  flex-shrink: 0 !important;',
      '}',
      '.wy-hover-preview.active {',
      '  opacity: 1;',
      '  transform: translate(15px, -50%) scale(1);',
      '}',
      '.wy-hover-preview img {',
      '  display: block;',
      '  width: 100%;',
      '  height: auto;',
      '  transition: opacity 0.15s ease-in-out;',
      '}',
      '@media screen and (max-width: 768px), (hover: none) {',
      '  .wy-hover-preview {',
      '    display: none !important;',
      '  }',
      '}',
      '@media screen and (max-width: 768px) {',
      '  html body [id="T3057851291"] .wy-table .c-date {',
      '    width: 80px !important;',
      '  }',
      '  html body [id="T3057851291"] .wy-table td.wy-date {',
      '    width: 80px !important;',
      '    min-width: 80px !important;',
      '  }',
      '  html body [id="T3057851291"] .wy-table td.wy-date span,',
      '  html body [id="T3057851291"] .wy-table td.wy-date span span {',
      '    font-size: 0.58em !important;',
      '  }',
      '  html body [id="T3057851291"] .wy-table .c-type {',
      '    width: 70px !important;',
      '  }',
      '  html body [id="T3057851291"] .wy-table td.wy-type {',
      '    width: 70px !important;',
      '    min-width: 70px !important;',
      '  }',
      '  html body [id="T3057851291"] .wy-table td.wy-type span {',
      '    font-size: 0.58em !important;',
      '  }',
      '  html body [id="T3057851291"] .wy-table td {',
      '    padding: 5px 4px 5px 0 !important;',
      '  }',
      '}'
    ].join('\n');
    document.head.appendChild(style);
  }

  // Create hover preview container in document.body if it doesn't exist
  var previewEl = document.getElementById('wy-hover-preview');
  if (!previewEl) {
    previewEl = document.createElement('div');
    previewEl.id = 'wy-hover-preview';
    previewEl.className = 'wy-hover-preview';
    
    var previewImg = document.createElement('img');
    previewImg.id = 'wy-hover-preview-img';
    previewEl.appendChild(previewImg);
    
    document.body.appendChild(previewEl);
  }

  if (!tabsEl.querySelector('[data-f="initiatives"]')) {
    var initBtn = document.createElement('button');
    initBtn.className = 'wy-tab';
    initBtn.dataset.f = 'initiatives';
    initBtn.textContent = 'Initiatives';
    tabsEl.appendChild(initBtn);
  }

  // Split tabs into two rows: Row 1 (Selected & All), Row 2 (Categories)
  if (!tabsEl.querySelector('.wy-tabs-row')) {
    var row1 = document.createElement('div');
    row1.className = 'wy-tabs-row wy-tabs-row-1';
    var row2 = document.createElement('div');
    row2.className = 'wy-tabs-row wy-tabs-row-2';
    
    var btnHighlight = tabsEl.querySelector('[data-f="highlight"]');
    var btnAll = tabsEl.querySelector('[data-f="all"]');
    
    if (btnHighlight) row1.appendChild(btnHighlight);
    if (btnAll) row1.appendChild(btnAll);
    
    var remainingBtns = Array.from(tabsEl.querySelectorAll('.wy-tab'));
    remainingBtns.forEach(function(btn) {
      if (btn !== btnHighlight && btn !== btnAll) {
        row2.appendChild(btn);
      }
    });
    
    tabsEl.innerHTML = '';
    tabsEl.appendChild(row1);
    tabsEl.appendChild(row2);
  }

  document.querySelectorAll('.wy-tab').forEach(function(btn) {
    btn.removeAttribute('style');
  });

  var old = table.querySelector('tbody');
  if (old) old.remove();

  // Dynamic chronological sort (most recent first) to keep entries always ordered
  D.sort(function(a, b) {
    function getSortScore(datePart) {
      var dateStr = datePart.split('|')[0].trim();
      if (dateStr.indexOf('–') > -1) {
        dateStr = dateStr.split('–')[0].trim();
      }
      var parts = dateStr.split('.');
      var y = parseInt(parts[0], 10) || 0;
      var m = parseInt(parts[1], 10) || 0;
      var d = parseInt(parts[2], 10) || 0;
      return (y * 10000) + (m * 100) + d;
    }
    return getSortScore(b[0]) - getSortScore(a[0]);
  });

  var tbody = document.createElement('tbody');
  var frag = document.createDocumentFragment();
  
  D.forEach(function(r) {
    var tr = document.createElement('tr');
    tr.dataset.cats = r[3].join(',');
    tr.dataset.hi   = HIGHLIGHTS.indexOf(r[0]) > -1 ? '1' : '0';
    
    if (r[4]) {
      tr.dataset.img = r[4];
      tr.classList.add('wy-has-preview');
    }

    if (r[1].indexOf('Grand Prix') > -1) {
      tr.classList.add('wy-grand-prix');
    }
    
    var dp = r[0].split('|');
    var dateHtml = dp[0] + (dp[1] ? '<br><span style="color:#bbb">' + dp[1] + '</span>' : '');
    
    var typeText = r[2];
    if (typeText.indexOf('✦') > -1) {
      typeText = typeText.replace(/✦/g, '<span class="wy-solo-marker">✦</span>');
    }

    tr.innerHTML =
      '<td class="wy-date"><span class="navigation">' + dateHtml + '</span></td>' +
      '<td class="wy-desc"><span class="bodycopy-2">' + r[1] + '</span></td>' +
      '<td class="wy-type"><span class="navigation">' + typeText + '</span></td>';
    
    frag.appendChild(tr);
  });
  
  tbody.appendChild(frag);
  table.appendChild(tbody);

  // Setup hover event listeners on tbody (delegated)
  var previewTimeout = null;

  tbody.addEventListener('mouseover', function(e) {
    var tr = e.target.closest('tr');
    if (!tr || !tr.dataset.img) return;
    
    var previewEl = document.getElementById('wy-hover-preview');
    var previewImg = document.getElementById('wy-hover-preview-img');
    if (!previewEl || !previewImg) return;
    
    if (previewTimeout) {
      clearTimeout(previewTimeout);
      previewTimeout = null;
    }
    
    var newSrc = imageBase + tr.dataset.img;
    previewImg.dataset.targetSrc = newSrc;
    
    // Avoid showing old image while new image loads
    if (previewImg.getAttribute('src') !== newSrc) {
      previewImg.style.opacity = '0';
      previewImg.onload = function() {
        if (previewImg.dataset.targetSrc === newSrc) {
          previewImg.style.opacity = '1';
        }
      };
      previewImg.src = newSrc;
    } else if (previewImg.complete) {
      previewImg.style.opacity = '1';
    } else {
      previewImg.style.opacity = '0';
      previewImg.onload = function() {
        if (previewImg.dataset.targetSrc === newSrc) {
          previewImg.style.opacity = '1';
        }
      };
    }
    
    previewEl.style.display = 'block';
    void previewEl.offsetWidth;
    previewEl.classList.add('active');
  });

  tbody.addEventListener('mouseout', function(e) {
    var tr = e.target.closest('tr');
    if (!tr || !tr.dataset.img) return;
    
    var related = e.relatedTarget;
    if (related && tr.contains(related)) return;
    
    var previewEl = document.getElementById('wy-hover-preview');
    if (previewEl) {
      previewEl.classList.remove('active');
      if (previewTimeout) clearTimeout(previewTimeout);
      previewTimeout = setTimeout(function() {
        previewEl.style.display = 'none';
        
        // Hide and reset target image when fully closed
        var previewImg = document.getElementById('wy-hover-preview-img');
        if (previewImg) {
          previewImg.style.opacity = '0';
          previewImg.dataset.targetSrc = '';
        }
      }, 200);
    }
  });

  tbody.addEventListener('mousemove', function(e) {
    var previewEl = document.getElementById('wy-hover-preview');
    if (!previewEl || !previewEl.classList.contains('active')) return;
    
    var x = e.clientX;
    var y = e.clientY;
    var width = previewEl.offsetWidth || 240;
    var height = previewEl.offsetHeight || 150;
    
    var posX = x + 15;
    var posY = y - height / 2;
    
    // Boundary check so preview stays in viewport
    if (posX + width > window.innerWidth) {
      posX = x - width - 15;
    }
    if (posY < 10) {
      posY = 10;
    } else if (posY + height > window.innerHeight) {
      posY = window.innerHeight - height - 10;
    }
    
    previewEl.style.left = posX + 'px';
    previewEl.style.top = posY + 'px';
  });

  var activeTab = tabsEl.querySelector('.wy-tab.active');
  var initialFilter = activeTab ? activeTab.dataset.f : 'all';
  filterRows(initialFilter);

  tabsEl.onclick = function(e) {
    var btn = e.target.closest('.wy-tab');
    if (!btn) return;
    document.querySelectorAll('.wy-tab').forEach(function(t) {
      t.classList.remove('active');
    });
    btn.classList.add('active');
    filterRows(btn.dataset.f);
  };
}

initTable();

})();
