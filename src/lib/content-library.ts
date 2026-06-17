import type { ModuleContent } from "@/types";

// ============================================
// FINANCE MODULES
// ============================================
const FINANCE_MODULES: ModuleContent[] = [
  {
    pillar: "finance",
    title: "The Power of Compound Interest",
    read: `Albert Einstein reportedly called compound interest "the eighth wonder of the world." Whether he said it or not, the math is undeniable. Compound interest means you earn returns not just on your original investment, but on all the returns that came before.\n\nHere's the mechanism: if you invest $10,000 at 8% annual return, after year one you have $10,800. But year two, you earn 8% on $10,800 — that's $864, not $800. By year 30, that single $10,000 becomes $100,627. You earned $90,627 in returns on a $10,000 investment.\n\nWarren Buffett made 99.7% of his $100+ billion fortune after age 52. Not because he became a better investor in his 50s, but because compounding needs time. His actual average annual return (~20%) is impressive but not unique — what's unique is he started at age 11 and never stopped.\n\nThe real enemy of compounding is interruption. Every time you withdraw, panic-sell, or skip a year of investing, you reset the clock. The math favors the patient and the consistent, not the clever. This is why systematic investing — putting money in every month regardless of market conditions — outperforms most active trading strategies. The boring approach wins because it lets compounding do the work.`,
    flashcards: [
      { question: "Why did Warren Buffett make 99.7% of his wealth after age 52?", answer: "Because compound interest needs time to work. His returns weren't unusually higher later — the compounding snowball just got massive after decades." },
      { question: "What is the main enemy of compound interest?", answer: "Interruption. Withdrawing, panic-selling, or skipping years of investing resets the compounding clock and destroys the exponential growth." },
      { question: "How much does $10,000 become at 8% over 30 years?", answer: "$100,627 — over 10x the original, with $90,627 being pure returns on returns." }
    ],
    reflectionQuestion: "If compounding rewards patience above all else, how does that change the way you think about your financial decisions in your 20s versus trying to 'get rich quick'?"
  },
  {
    pillar: "finance",
    title: "Index Funds: Why Most Experts Lose",
    read: `Between 2001 and 2020, over 90% of actively managed funds underperformed the S&P 500 index. That means 9 out of 10 professional fund managers — people with MBAs, Bloomberg terminals, and research teams — lost to a simple strategy: buy everything and hold.\n\nJohn Bogle founded Vanguard in 1975 and created the first index fund for retail investors. Wall Street laughed and called it "Bogle's Folly." His idea was radical: instead of trying to pick winning stocks, just buy a tiny piece of every stock in the market. You get the average return — and the average beats almost everyone trying to be above average.\n\nWhy do experts fail? Three reasons: (1) Fees — active funds charge 1-2% annually, which compounds against you. (2) Trading costs — buying and selling frequently creates friction. (3) Behavioral errors — even professionals panic-sell and chase trends. An index fund charges ~0.03%, trades rarely, and has no emotions.\n\nThe math is devastating. If you invest $500/month for 40 years at 10% (market average) minus 1.5% in fees (active fund), you get $1.1 million. The same investment in an index fund at 0.03% fees gives you $2.5 million. The fee difference alone costs you $1.4 million. That's not money your fund manager earned — it's money they took while underperforming.`,
    flashcards: [
      { question: "What percentage of active fund managers underperformed the S&P 500 between 2001-2020?", answer: "Over 90%. Only about 1 in 10 professionals beat the simple strategy of buying and holding an index fund." },
      { question: "What are the 3 reasons professional fund managers typically lose to index funds?", answer: "1) Higher fees (1-2% vs 0.03%), 2) Trading costs from frequent buying/selling, 3) Behavioral errors like panic-selling and trend-chasing." }
    ],
    reflectionQuestion: "If 90% of experts can't beat the market, what does that tell you about financial 'gurus' selling courses and stock picks on social media?"
  },
  {
    pillar: "finance",
    title: "How Money Actually Works: The Banking System",
    read: `Most people think banks lend out money that other people deposited. That's not how it works. Banks create new money when they make loans — this is called fractional reserve banking.\n\nWhen you deposit $1,000, the bank doesn't put it in a vault. It keeps a small fraction (say 10%) as reserves and lends $900 to someone else. That $900 gets deposited in another bank, which keeps $90 and lends $810. This cascade means your original $1,000 can create up to $10,000 in total money supply. Money is literally created by lending.\n\nThis has massive implications. First, most "money" isn't physical — it's entries in databases. Only about 8% of the world's money exists as cash. Second, the entire system depends on confidence. If everyone tried to withdraw their deposits simultaneously (a bank run), the money simply doesn't exist. Third, this is why central banks matter — they control the reserve ratio and interest rates, which determines how much new money banks can create.\n\nInflation isn't random. When central banks lower interest rates, banks create more loans (more money), prices rise. When they raise rates, lending slows, money supply tightens. Understanding this mechanism means you can anticipate how policy changes affect your savings, investments, and purchasing power — instead of being surprised by them.`,
    flashcards: [
      { question: "What is fractional reserve banking?", answer: "Banks keep only a fraction of deposits as reserves and lend the rest. Through cascading deposits and loans, $1,000 can create up to $10,000 in total money supply." },
      { question: "What percentage of the world's money exists as physical cash?", answer: "About 8%. The rest is digital entries in banking databases, created through the lending process." },
      { question: "How do central bank interest rate changes affect money supply?", answer: "Lower rates → more lending → more money created → prices rise (inflation). Higher rates → less lending → tighter money → prices stabilize." }
    ],
    reflectionQuestion: "Now that you know money is created through debt, how does that change your view of the financial system and who actually benefits from it?"
  },
  {
    pillar: "finance",
    title: "The Psychology of Money: Why Smart People Go Broke",
    read: `Morgan Housel's core insight is that financial success is more about behavior than intelligence. Ronald Read was a janitor who amassed $8 million by living frugally and investing consistently for decades. Richard Fuscone was a Harvard-educated Merrill Lynch executive who went bankrupt. The difference wasn't knowledge — it was temperament.\n\nThree psychological traps destroy wealth: (1) Lifestyle inflation — when your income doubles, your spending triples. You adapt to every raise within months, a phenomenon psychologists call the "hedonic treadmill." (2) Social comparison — you don't actually want a Porsche; you want to be the person others see driving a Porsche. Wealth spent on status signals is wealth destroyed. (3) The narrative fallacy — you convince yourself your risky bet is actually well-researched because you spent 20 minutes reading about it.\n\nReal wealth is invisible. The millionaire next door drives a Toyota and maxes out their retirement accounts. The person in the luxury car may have a negative net worth — the car is leased, the watch is financed. Wealth is what you don't see: the money NOT spent, the investments quietly compounding.\n\nThe most powerful financial skill isn't analysis or timing — it's patience combined with a savings rate high enough to give you options. A 50% savings rate means you can survive 1 year for every year you work. That's freedom, not the car.`,
    flashcards: [
      { question: "What is the 'hedonic treadmill' in personal finance?", answer: "The psychological phenomenon where you adapt to every income increase within months, always raising your spending to match — so you never feel wealthier despite earning more." },
      { question: "Why is real wealth 'invisible'?", answer: "Because wealth is money NOT spent. The person flashing luxury items may be in debt. True wealth is in investments and savings you can't see from the outside." }
    ],
    reflectionQuestion: "Think about your own spending — how much of it is driven by what you genuinely need versus what you want others to see?"
  },
  {
    pillar: "finance",
    title: "Assets vs Liabilities: Rich Dad's Core Framework",
    read: `Robert Kiyosaki's most important idea from Rich Dad Poor Dad isn't about real estate or starting businesses — it's a simple mental model: assets put money in your pocket, liabilities take money out.\n\nYour house? If you're paying a mortgage, insurance, taxes, and maintenance every month, it's a liability — money flows out. Your car loses 20% of its value the moment you drive it off the lot, costs insurance, fuel, and repairs — pure liability. That expensive degree? A liability if it didn't increase your earning power enough to justify the debt.\n\nThe rich, according to Kiyosaki, focus on acquiring assets: rental properties that generate monthly income, stocks that pay dividends, businesses that run without their daily involvement, intellectual property that earns royalties. The middle class buys liabilities they think are assets — the bigger house, the nicer car — and wonders why they never get ahead.\n\nThe cash flow pattern tells the story. Poor: income → expenses (all money goes to bills). Middle class: income → liabilities (mortgage, car payments, credit cards). Rich: income → assets → more income. The difference isn't how much you earn but where your money flows. A doctor earning $300K with $280K in lifestyle expenses is poorer than a plumber earning $80K who puts $30K into dividend stocks every year. After 20 years, the plumber is free. The doctor is still on the treadmill.`,
    flashcards: [
      { question: "What is the simple definition of an asset vs a liability according to Kiyosaki?", answer: "An asset puts money IN your pocket (rental income, dividends, royalties). A liability takes money OUT (mortgage, car payment, subscriptions)." },
      { question: "Why might a plumber earning $80K be wealthier than a doctor earning $300K?", answer: "If the plumber invests $30K/year in assets while the doctor spends $280K on lifestyle (liabilities), the plumber builds wealth and the doctor stays trapped in expenses." }
    ],
    reflectionQuestion: "Look at your own spending this month — what percentage went to things that put money back in your pocket versus things that only take money out?"
  },
  {
    pillar: "finance",
    title: "Dollar-Cost Averaging: The Boring Strategy That Wins",
    read: `Dollar-cost averaging (DCA) means investing a fixed amount at regular intervals regardless of market conditions. $500 every month, rain or shine, boom or crash. It sounds too simple to be powerful — but that's exactly why it works.\n\nWhen prices are high, your $500 buys fewer shares. When prices drop, your $500 buys more shares. Over time, this automatically lowers your average purchase price. You're buying more when things are cheap and less when things are expensive — without needing to predict anything.\n\nA study by Vanguard compared DCA to lump-sum investing (putting everything in at once). Lump-sum won about 68% of the time — because markets trend upward. But here's the thing: that study assumes you have a lump sum to invest and the emotional discipline to invest it all at once. Most people don't. They have monthly income and psychological barriers. DCA solves both.\n\nThe real superpower of DCA isn't mathematical — it's psychological. It removes every decision point where you could sabotage yourself. "Should I wait for a dip?" "Is the market too high?" "What if there's a crash?" DCA answers all of these with: "It's the 15th of the month, the money goes in." Automation eliminates emotion, and in investing, emotion is the enemy. Set up an automatic transfer, forget about it, and let decades do the work.`,
    flashcards: [
      { question: "How does dollar-cost averaging automatically lower your average purchase price?", answer: "By investing a fixed amount regularly, you buy more shares when prices are low and fewer when prices are high, mathematically lowering your average cost per share." },
      { question: "What is the real advantage of DCA over lump-sum investing?", answer: "Psychological, not mathematical. It eliminates every decision point where emotions (fear, greed, timing) can sabotage your investing discipline." }
    ],
    reflectionQuestion: "What's stopping you from setting up an automatic monthly investment right now — is it a real obstacle or a psychological one?"
  }
];

// ============================================
// POLITICS MODULES
// ============================================
const POLITICS_MODULES: ModuleContent[] = [
  {
    pillar: "politics",
    title: "How Power Really Works: The Selectorate Theory",
    read: `Bruce Bueno de Mesquita's selectorate theory explains why dictators and democrats behave differently — and it's not about morality. It's about math.\n\nEvery leader needs supporters to stay in power. The "selectorate" is everyone who has a say in choosing the leader. The "winning coalition" is the minimum group whose support keeps the leader in power. In a democracy, the winning coalition is large (millions of voters). In a dictatorship, it's small (a few hundred generals, oligarchs, or tribal leaders).\n\nThis explains everything. When your coalition is small, you keep them loyal with private goods — mansions, contracts, Swiss bank accounts. Keeping 200 generals happy is cheap. When your coalition is large, you can't bribe millions of people individually, so you provide public goods — roads, schools, healthcare, rule of law. Democracy doesn't produce better leaders; it produces leaders who must provide public goods to survive.\n\nThis also explains why resource-rich countries often become dictatorships. Oil revenue means the leader doesn't need to tax citizens — and if you don't need their tax money, you don't need their consent. Saudi Arabia has no income tax and no democracy. That's not a coincidence. The leader can fund the small coalition directly from oil revenue. Foreign aid works the same way — it gives leaders money that doesn't come from citizens, reducing the incentive to serve them.`,
    flashcards: [
      { question: "What is the 'winning coalition' in selectorate theory?", answer: "The minimum group of supporters a leader needs to stay in power. Small in dictatorships (generals, oligarchs), large in democracies (millions of voters)." },
      { question: "Why do resource-rich countries often become dictatorships?", answer: "Oil/resource revenue means leaders don't need to tax citizens. Without needing their money, leaders don't need their consent — they can fund a small coalition directly." }
    ],
    reflectionQuestion: "Think about a country you know well — can you identify who actually forms the 'winning coalition' that keeps the current leader in power?"
  },
  {
    pillar: "politics",
    title: "Left vs Right: What the Divide Actually Means",
    read: `The left-right political spectrum originated in the French Revolution. Supporters of the king sat on the right of the assembly; revolutionaries sat on the left. The core divide hasn't changed: right = preserve existing hierarchies; left = flatten them.\n\nBut the modern divide is more nuanced and operates on multiple axes. Economic: the left favors redistribution and regulation; the right favors free markets and lower taxes. Social: the left pushes for progressive change on identity and culture; the right emphasizes tradition, religion, and social stability. Authority: some on the left want a strong state to enforce equality; some on the right want a strong state to enforce order. Libertarians on both sides want less state power.\n\nThe key insight most people miss: left and right are not coherent philosophies — they're coalitions. The American right contains both free-market libertarians and religious social conservatives who fundamentally disagree on issues like drug legalization. The American left contains both corporate progressives and anti-capitalist socialists who disagree on economic structure.\n\nWhy does this matter? Because when you identify as "left" or "right," you're often adopting a package of positions that don't logically follow from each other. You can favor universal healthcare (left economic) and strict immigration enforcement (right social) without being contradictory. The spectrum is a tool for politicians to build coalitions, not a tool for you to build a worldview.`,
    flashcards: [
      { question: "Where does the left-right political divide originate?", answer: "The French Revolution — supporters of the king sat on the right, revolutionaries on the left. Core divide: right preserves hierarchies, left flattens them." },
      { question: "Why are 'left' and 'right' described as coalitions rather than philosophies?", answer: "Each side contains groups that disagree internally (libertarians vs social conservatives on the right; corporate progressives vs anti-capitalists on the left). The labels are political alliances, not logical systems." }
    ],
    reflectionQuestion: "List 5 political positions you hold — do they all consistently fall on one side, or have you been unconsciously adopting a 'package deal'?"
  },
  {
    pillar: "politics",
    title: "Soft Power: How Nations Win Without Firing a Shot",
    read: `Joseph Nye coined "soft power" in 1990 to describe a nation's ability to influence others through attraction rather than coercion. Hard power is military threats and economic sanctions. Soft power is Hollywood, universities, and cultural exports.\n\nThe United States won the Cold War partly through soft power. Blue jeans, rock music, and the promise of consumer abundance undermined Soviet ideology more effectively than nuclear deterrence. Young people behind the Iron Curtain didn't dream of American missiles — they dreamed of American freedom and culture.\n\nToday, soft power operates through multiple channels: (1) Cultural exports — K-pop made South Korea a global brand; Bollywood extends India's influence across Asia and Africa. (2) Education — 1 million international students in American universities become informal ambassadors who understand and often admire the US. (3) Technology platforms — whoever controls the platforms controls the narrative. TikTok's Chinese ownership is a geopolitical concern precisely because of soft power. (4) Development aid — China's Belt and Road Initiative buys influence across Africa and Asia without military presence.\n\nThe most sophisticated players combine hard and soft power into "smart power." China builds ports in Sri Lanka (economic hard power) while flooding Africa with Confucius Institutes (cultural soft power). Understanding this distinction is crucial: when a country is spreading its culture aggressively, it's not a coincidence or just entertainment — it's strategy.`,
    flashcards: [
      { question: "What is the difference between hard power and soft power?", answer: "Hard power = coercion through military force or economic sanctions. Soft power = influence through attraction: culture, education, values, technology." },
      { question: "How did soft power help win the Cold War?", answer: "American cultural exports (music, jeans, consumer culture) undermined Soviet ideology by making young people behind the Iron Curtain desire Western freedom and lifestyle." }
    ],
    reflectionQuestion: "What country's soft power influences YOU most in your daily life (music, tech, food, media) — and were you aware of it before now?"
  },
  {
    pillar: "politics",
    title: "The Deep State: Myth vs Mechanism",
    read: `The term "deep state" is used loosely in media, but the underlying concept is real and well-studied in political science. Every government has a permanent bureaucracy that outlasts elected officials. In the US, there are roughly 2 million federal employees who keep their jobs regardless of which president is elected. The president appoints about 4,000 political positions. That's 0.2% of the federal workforce.\n\nThis creates a structural tension. Elected leaders come and go every 4-8 years. Career bureaucrats, intelligence officers, and military leaders serve for decades. They have institutional knowledge, established networks, and their own policy preferences. When a new president's agenda conflicts with the bureaucracy's institutional interests, the bureaucracy has tools to resist: slow-walking implementation, leaking information, strictly interpreting regulations, or burying proposals in process.\n\nThis isn't conspiracy — it's organizational behavior. Any large institution develops self-preservation instincts. The Pentagon doesn't want budget cuts regardless of who's president. The intelligence community resists oversight because secrecy is their operational model. Regulatory agencies develop relationships with the industries they regulate (regulatory capture).\n\nThe real question isn't whether a deep state exists — it's whether unelected institutional power is a bug or a feature. It provides continuity and expertise that prevents radical swings. But it also means certain policies (military spending, surveillance programs, financial deregulation) persist across administrations regardless of what voters chose.`,
    flashcards: [
      { question: "How many federal employees does a US president actually appoint out of the total?", answer: "About 4,000 out of 2 million — roughly 0.2%. The other 99.8% are career bureaucrats who stay across administrations." },
      { question: "What is 'regulatory capture'?", answer: "When regulatory agencies develop close relationships with the industries they're supposed to regulate, effectively serving industry interests rather than public interests." }
    ],
    reflectionQuestion: "Is an unelected permanent bureaucracy a safeguard against radical leaders or a threat to democratic accountability? Can it be both?"
  },
  {
    pillar: "politics",
    title: "Why Nations Fail: Inclusive vs Extractive Institutions",
    read: `Daron Acemoglu and James Robinson's thesis is that the wealth gap between nations isn't caused by geography, culture, or ignorance — it's caused by institutions. Specifically, the difference between inclusive and extractive institutions.\n\nInclusive institutions distribute power and opportunity broadly: property rights, rule of law, fair courts, competitive markets, public education. They allow anyone to participate in economic activity and benefit from it. Extractive institutions concentrate power and wealth in a narrow elite: rigged courts, monopolies, land seizures, corruption as a system.\n\nNogales, Arizona and Nogales, Sonora sit on the same border. Same geography, same culture, same climate, same people (families live on both sides). Yet the American side has 3x the income, better schools, and longer life expectancy. The difference? Institutions. The US side has property rights and rule of law. The Mexican side historically had extractive institutions benefiting connected elites.\n\nThe key mechanism is "creative destruction" — new ideas and businesses displacing old ones. Inclusive institutions allow this (that's how Amazon displaced Sears). Extractive institutions prevent it because existing elites block threats to their power. This is why authoritarian regimes can grow fast initially (China) but face long-term limits — without creative destruction, innovation stagnates. The Soviet Union industrialized rapidly but couldn't innovate its way past the 1970s.`,
    flashcards: [
      { question: "What is the difference between inclusive and extractive institutions?", answer: "Inclusive: distribute power/opportunity broadly (property rights, rule of law, competitive markets). Extractive: concentrate wealth in a narrow elite (rigged courts, monopolies, corruption)." },
      { question: "Why is Nogales used as evidence for institutional theory?", answer: "Nogales, AZ and Nogales, Sonora share geography, culture, and climate but have vastly different outcomes — proving institutions, not geography, determine prosperity." }
    ],
    reflectionQuestion: "Can you identify extractive institutional features in your own country — areas where the rules are designed to benefit connected insiders rather than the general public?"
  },
  {
    pillar: "politics",
    title: "Intelligence Agencies: How They Shape History",
    read: `Intelligence agencies operate in a space most citizens never see, yet their actions shape the world we live in. The CIA's 1953 coup in Iran (Operation Ajax) overthrew a democratically elected prime minister to protect British oil interests. The blowback? The 1979 Iranian Revolution, the hostage crisis, and decades of US-Iran hostility — all traceable to one covert operation.\n\nIntelligence work has four functions: collection (gathering information), analysis (making sense of it), counterintelligence (protecting your own secrets), and covert action (secretly influencing events). The first two are legitimate and essential. The last one is where things get dangerous — because covert actions have consequences that unfold over decades.\n\nThe pattern repeats: CIA-backed coups in Guatemala (1954), Congo (1961), Chile (1973), and Afghanistan's mujahideen funding in the 1980s all achieved short-term objectives while creating long-term disasters. The mujahideen fighters the US armed against the Soviets included groups that later became the Taliban and Al-Qaeda.\n\nEvery major power runs intelligence operations. Russia's FSB, China's MSS, Israel's Mossad, the UK's MI6 — they all conduct covert actions. The lesson isn't that intelligence agencies are evil — it's that secret power without accountability produces predictable pathologies: short-term thinking, blowback, mission creep, and the corruption that comes from operating beyond public scrutiny.`,
    flashcards: [
      { question: "What was Operation Ajax and what was its long-term blowback?", answer: "The CIA's 1953 coup overthrowing Iran's democratic PM to protect oil interests. Blowback: the 1979 Iranian Revolution, hostage crisis, and decades of US-Iran conflict." },
      { question: "What are the four functions of intelligence agencies?", answer: "Collection (gathering info), analysis (making sense of it), counterintelligence (protecting secrets), and covert action (secretly influencing events)." }
    ],
    reflectionQuestion: "Should democracies be allowed to conduct covert operations that undermine other democracies? Where do you draw the line between national security and international morality?"
  }
];

// ============================================
// GEOGRAPHY MODULES
// ============================================
const GEOGRAPHY_MODULES: ModuleContent[] = [
  {
    pillar: "geography",
    title: "The Strait of Malacca: The World's Most Important Waterway",
    read: `Between Malaysia and Indonesia lies a 550-mile strait that carries 25% of all global trade. The Strait of Malacca connects the Indian Ocean to the Pacific, and through it flows roughly 16 million barrels of oil per day — three times the volume of the Suez Canal.\n\nChina's greatest strategic vulnerability runs through this strait. Over 80% of China's oil imports pass through Malacca. If the US Navy — which has bases in Singapore, Japan, and Guam — blockaded this chokepoint, China's economy would suffocate within weeks. This single geographic fact explains much of China's foreign policy.\n\nChina's Belt and Road Initiative is, in large part, an attempt to solve the "Malacca Dilemma." The China-Pakistan Economic Corridor builds a road and pipeline from Pakistan's Gwadar Port directly to western China, bypassing Malacca entirely. China's port-building across the Indian Ocean (Sri Lanka, Myanmar, Djibouti) creates alternative routes and naval resupply points.\n\nSingapore owes its existence to Malacca. A tiny city-state with no natural resources became one of the world's richest countries because it sits at the narrowest point of the world's most important shipping lane. Geography made Singapore indispensable — and Lee Kuan Yew was smart enough to build institutions worthy of that geographic lottery. Location isn't just destiny; it's leverage.`,
    flashcards: [
      { question: "What percentage of global trade passes through the Strait of Malacca?", answer: "About 25%, including 16 million barrels of oil daily — more than 80% of China's oil imports." },
      { question: "How is China trying to solve its 'Malacca Dilemma'?", answer: "The Belt and Road Initiative: building alternative routes like the China-Pakistan Economic Corridor and port networks across the Indian Ocean to bypass Malacca." }
    ],
    reflectionQuestion: "If one geographic chokepoint can determine a superpower's foreign policy, what does that tell you about the real drivers of international relations versus what we see in the news?"
  },
  {
    pillar: "geography",
    title: "Why Russia Keeps Expanding: The Geography of Insecurity",
    read: `Russia's foreign policy makes little sense until you look at a topographic map. The country sits on the vast European Plain — flat, open terrain stretching from France to the Urals. There are no mountains, no rivers wide enough to stop an army. Every major invasion of Russia (Napoleon 1812, Germany 1941) came across this plain.\n\nThis geographic vulnerability created a strategic doctrine: buffer states. Russia doesn't want NATO on its borders not because of ideology but because flat terrain plus a hostile military alliance equals existential threat. Ukraine specifically matters because it contains the only defensible line between Western Europe and Moscow — the Carpathian Mountains in western Ukraine and the Dnieper River.\n\nRussia's obsession with warm-water ports follows the same logic. Most Russian ports freeze in winter. Sevastopol in Crimea is Russia's only reliable year-round naval base with access to the Mediterranean. Losing Crimea would mean losing the ability to project naval power beyond the Black Sea. This is why Crimea's annexation in 2014 was predictable to anyone who studied geography.\n\nThe pattern repeats across centuries and political systems. The Tsars, the Soviets, and modern Russia all pursue the same goals: buffer states on the European Plain, warm-water ports, and control of the Caucasus mountain passes. Geography doesn't change, and neither does the behavior it produces.`,
    flashcards: [
      { question: "Why does Russia view NATO expansion as an existential threat?", answer: "Russia sits on the flat European Plain with no natural defenses. NATO forces on its borders means hostile military power on open terrain — the same path every major invasion has taken." },
      { question: "Why is Crimea strategically vital to Russia?", answer: "Sevastopol is Russia's only reliable warm-water naval port with Mediterranean access. Without it, Russia loses the ability to project naval power beyond the Black Sea." }
    ],
    reflectionQuestion: "Does understanding Russia's geographic insecurity change how you evaluate its foreign policy decisions — even the ones you disagree with?"
  },
  {
    pillar: "geography",
    title: "Africa's Curse: How Geography Created the Wealth Gap",
    read: `Africa is the second-largest continent but produces only about 3% of global GDP. Many explanations focus on colonialism, corruption, or culture. But Jared Diamond and others point to deeper geographic factors that shaped Africa's trajectory long before Europeans arrived.\n\nFirst, Africa's axis problem. The Americas and Africa run north-south, while Eurasia runs east-west. This matters because climate zones run east-west. A crop or technology that works in France also works in China — same latitude, similar climate. But something that works in Egypt cannot easily spread to South Africa — you'd cross deserts, rainforests, and completely different climate zones. Eurasia's east-west axis allowed rapid spread of agriculture, livestock, and ideas. Africa's north-south axis created barriers.\n\nSecond, the disease environment. Tropical diseases (malaria, sleeping sickness, yellow fever) killed livestock and people at rates that prevented the kind of population density needed for complex states. The tsetse fly alone made horse and cattle raising impossible across a vast belt of sub-Saharan Africa, preventing both agriculture intensification and cavalry-based military expansion.\n\nThird, coastline. Africa has the smoothest coastline of any continent relative to its size — few natural harbors, bays, or navigable river systems reaching the interior. Europe's jagged coastline created natural ports every few miles. This made Africa harder to connect internally and easier to exploit externally by powers who controlled the sea.`,
    flashcards: [
      { question: "Why does the north-south axis of Africa create a development disadvantage?", answer: "Climate zones run east-west, so crops/technology can't spread easily north-to-south across different climate zones. Eurasia's east-west axis allowed rapid spread of agriculture and ideas." },
      { question: "How did Africa's coastline shape its development?", answer: "Africa has the smoothest coastline relative to its size — few natural harbors or navigable rivers inland. This made internal trade difficult and the continent vulnerable to external exploitation from sea powers." }
    ],
    reflectionQuestion: "If geography explains much of the global wealth gap, what responsibility do wealthy nations have — and does understanding the root cause change your view of foreign aid?"
  },
  {
    pillar: "geography",
    title: "Water Wars: The Coming Geopolitical Crisis",
    read: `The next major geopolitical conflicts may not be about oil but about water. Only 2.5% of Earth's water is fresh, and most of that is locked in ice caps and glaciers. The accessible freshwater for 8 billion people comes from rivers, lakes, and underground aquifers — many of which are shared between countries that don't get along.\n\nThe Nile is the clearest flashpoint. Ethiopia is building the Grand Ethiopian Renaissance Dam (GERD) on the Blue Nile, which provides 85% of Egypt's water. Egypt, a country of 100+ million that is 95% desert, has called this an existential threat. Ethiopia says it needs the dam for electricity for its 120 million people. Sudan sits in between. There is no binding agreement, and Egypt has historically threatened military action over Nile diversions.\n\nIndia and Pakistan share the Indus River system through the 1960 Indus Waters Treaty — one of the few agreements that survived three wars. But as glaciers feeding these rivers shrink due to climate change, the treaty faces unprecedented stress. India controls the upstream position, giving it leverage Pakistan cannot counter.\n\nThe pattern is global: Turkey controls the Euphrates headwaters (leverage over Syria and Iraq), China controls the Mekong headwaters (leverage over Vietnam, Laos, Cambodia). The country upstream always holds the power. Unlike oil, there is no substitute for water. You can switch energy sources, but you cannot replace water in agriculture, which uses 70% of global freshwater.`,
    flashcards: [
      { question: "Why is Ethiopia's GERD dam an existential threat to Egypt?", answer: "85% of Egypt's water comes from the Blue Nile. Egypt is 95% desert with 100M+ people — any significant reduction in Nile flow threatens the entire country's survival." },
      { question: "Why are water conflicts potentially more dangerous than oil conflicts?", answer: "There is no substitute for water. You can switch energy sources, but agriculture (70% of freshwater use) and human survival have no alternative to freshwater." }
    ],
    reflectionQuestion: "In a world where water becomes the most contested resource, how should international law handle rivers that cross multiple borders?"
  },
  {
    pillar: "geography",
    title: "Why Islands Build Empires: Britain, Japan, and Geography",
    read: `The two most successful non-continental powers in history — Britain and Japan — share a geographic feature: they're islands just off the coast of a major continent. This position gave them three decisive advantages.\n\nFirst, natural defense. The English Channel is only 21 miles wide, but it stopped Napoleon and Hitler. Japan's 120-mile sea buffer from Korea saved it from Mongol invasions (with help from typhoons the Japanese called "kamikaze" — divine wind). Island nations don't need large standing armies for border defense, freeing resources for naval power and trade.\n\nSecond, forced naval orientation. If you're an island, everything comes by sea. This makes you develop shipbuilding, navigation, and maritime trade centuries before continental powers prioritize these skills. Britain's Royal Navy didn't just protect the homeland — it controlled global trade routes, which is the real source of the British Empire's power.\n\nThird, selective engagement. Island nations can participate in continental politics when it benefits them and withdraw when it doesn't. Britain's centuries-long strategy of "balance of power" — supporting whoever was second-strongest on the continent to prevent any single power from dominating — only works if you have a moat. Continental powers don't get to choose their fights; their neighbors are always there.\n\nThe US inherited this advantage on a continental scale. Protected by two oceans, it could industrialize in peace, intervene in world wars at chosen moments, and retreat to hemispheric security when desired.`,
    flashcards: [
      { question: "What three advantages does island geography give to nations?", answer: "1) Natural defense (no land borders to defend), 2) Forced naval orientation (develops maritime power early), 3) Selective engagement (can choose when to get involved in continental conflicts)." },
      { question: "What was Britain's 'balance of power' strategy?", answer: "Supporting whoever was second-strongest on the European continent to prevent any single power from dominating — a strategy only possible because the English Channel gave Britain the option to disengage." }
    ],
    reflectionQuestion: "The US has 'island advantages' on a continental scale (two ocean buffers). How has this shaped American foreign policy — and is that advantage shrinking in the age of missiles and cyber warfare?"
  },
  {
    pillar: "geography",
    title: "Trade Routes Made the Modern World",
    read: `Before there were stock exchanges, there were trade routes. And the geography of those routes determined which cities, nations, and civilizations rose or fell.\n\nThe Silk Road wasn't a single road but a network of paths connecting China to the Mediterranean through Central Asia. Cities like Samarkand, Baghdad, and Constantinople grew powerful not because they produced goods but because they sat at crossroads where goods, ideas, and cultures intersected. When the Ottoman Empire blocked direct European access to these routes in 1453, Europe was forced to find sea routes — triggering the Age of Exploration and ultimately colonialism.\n\nThe Suez Canal (1869) and Panama Canal (1914) reshaped global power by creating shortcuts. Before Suez, ships from London to Mumbai sailed around all of Africa — 12,000 miles. After Suez, 6,000 miles. Britain didn't control Egypt out of cultural interest; it controlled Egypt to control Suez to control trade to India. Geography dictated imperialism.\n\nToday's trade routes are still geographic: 90% of global trade moves by sea, and it passes through a handful of chokepoints. The Strait of Hormuz (20% of world oil), Malacca (25% of trade), Suez Canal, Panama Canal, and the Turkish Straits. Controlling or threatening any of these points gives disproportionate geopolitical leverage. This is why the US maintains 11 aircraft carrier groups — they're not for fighting wars on land; they're for keeping sea lanes open.`,
    flashcards: [
      { question: "How did the Ottoman blocking of trade routes in 1453 change world history?", answer: "Europeans could no longer access Silk Road routes to Asia, forcing them to find sea routes — triggering the Age of Exploration and ultimately European colonialism." },
      { question: "Why does the US maintain 11 aircraft carrier groups?", answer: "Not primarily for land wars — but to control sea lanes. 90% of global trade moves by sea through a handful of chokepoints, and carrier groups ensure those routes stay open." }
    ],
    reflectionQuestion: "If 90% of trade still moves by sea in the internet age, what would happen to the global economy if even one major chokepoint was blocked for 6 months?"
  }
];

// ============================================
// MINDSET MODULES
// ============================================
const MINDSET_MODULES: ModuleContent[] = [
  {
    pillar: "mindset",
    title: "The Dichotomy of Control: Epictetus's Most Powerful Idea",
    read: `Epictetus was born a slave in Rome around 50 AD. Despite having no freedom over his external circumstances, he developed one of the most liberating philosophical frameworks ever articulated: the dichotomy of control.\n\nThe idea is brutally simple. Everything in life falls into two categories: things within your control and things outside it. Within your control: your opinions, desires, aversions, and actions. Outside your control: your body (it can get sick), your reputation (others decide it), your wealth (markets crash), other people's actions, the weather, the past.\n\nMost human suffering comes from trying to control what you can't. You stress about a job interview result (their decision, not yours). You rage at traffic (you can't control other drivers). You obsess over what someone thinks of you (their mind, not yours). Epictetus argued that the moment you internalize this distinction, anxiety drops dramatically — because you stop fighting reality.\n\nThis isn't passivity. You still prepare intensely for the interview — preparation is within your control. You still leave early to avoid traffic — your departure time is within your control. But once you've done everything in your power, you release attachment to the outcome. The Stoic doesn't stop caring; they stop demanding that the universe comply with their wishes.\n\nModern cognitive behavioral therapy (CBT) — the most evidence-based psychological treatment — is built on this same framework. What you can change: your interpretation of events. What you can't: the events themselves.`,
    flashcards: [
      { question: "What is Epictetus's dichotomy of control?", answer: "Everything falls into two categories: what you can control (your opinions, actions, desires) and what you can't (others' actions, health, reputation, outcomes). Focus only on the first." },
      { question: "How does the dichotomy of control relate to modern psychology?", answer: "CBT (cognitive behavioral therapy), the most evidence-based psychological treatment, is built on the same principle: change your interpretation of events (controllable), not the events themselves (uncontrollable)." }
    ],
    reflectionQuestion: "Think about your biggest source of stress right now — is it something within your control, or are you suffering because you're trying to control something you can't?"
  },
  {
    pillar: "mindset",
    title: "Inversion Thinking: Solve Problems Backwards",
    read: `Charlie Munger, Warren Buffett's partner, says: "Invert, always invert." Instead of asking "How do I succeed?", ask "How would I guarantee failure?" — then avoid those things.\n\nThe mathematician Carl Jacobi used this method to solve problems that stumped his peers. When a problem is too complex to approach directly, flip it. Want to build a great relationship? Instead of listing what makes relationships great, list everything that would destroy one: lying, taking the other person for granted, keeping score, never listening. Now avoid those. You'll get further faster.\n\nInversion works because our brains are better at identifying problems than imagining perfection. It's hard to describe the perfect company, but easy to list what would ruin one: hire badly, ignore customers, burn cash, play politics, resist change. Now you have a checklist of what NOT to do — which is often more actionable than a vision statement.\n\nHistorical example: before John Snow discovered how cholera spread, he didn't know the cause. But by mapping deaths in London's 1854 outbreak, he found what they had in common — a single water pump. He didn't solve cholera; he inverted: instead of finding the cure, he found the source and removed it. The epidemic stopped.\n\nApply this to your 20s. Don't ask "How do I have an amazing decade?" Ask: "What would guarantee I waste my 20s?" — not learning any marketable skill, spending beyond your means, surrounding yourself with unmotivated people, never reading, avoiding discomfort. The path to a great life often becomes obvious when you simply identify and eliminate the clearly bad choices.`,
    flashcards: [
      { question: "What is inversion thinking and who popularized it in investing?", answer: "Instead of asking 'How do I succeed?', ask 'How would I guarantee failure?' and avoid those things. Charlie Munger uses this as a core mental model." },
      { question: "How did John Snow use inversion to stop London's cholera epidemic?", answer: "He didn't find the cure — he mapped deaths, found they shared a water pump, and removed the source. Instead of solving the disease, he eliminated the cause." }
    ],
    reflectionQuestion: "Apply inversion now: what are 3 things that would guarantee you waste the next 5 years of your life?"
  },
  {
    pillar: "mindset",
    title: "System 1 vs System 2: Why Your Brain Lies to You",
    read: `Daniel Kahneman won the Nobel Prize for demonstrating that humans have two thinking systems — and the fast one is in charge most of the time.\n\nSystem 1 is automatic, instant, and emotional. It's the part of your brain that flinches at a loud noise, judges someone's trustworthiness in milliseconds, and "just knows" the answer. It's incredibly efficient but riddled with systematic errors (cognitive biases). System 2 is slow, deliberate, and rational. It's what you use for math, complex arguments, and careful decisions. It's accurate but lazy — it requires effort, and your brain defaults to System 1 whenever possible.\n\nThis explains most bad decisions. The "anchoring effect": in negotiations, the first number mentioned disproportionately influences the outcome because System 1 latches onto it. "Availability bias": you think plane crashes are common because they're memorable, while car accidents (far more deadly) are mundane. "Confirmation bias": System 1 seeks information that confirms what you already believe, making it nearly impossible to change your mind through argument alone.\n\nKahneman's devastating finding: even knowing about these biases doesn't prevent them. System 1 fires before System 2 can intervene. The solution isn't awareness — it's building systems. Checklists force System 2 to verify System 1's conclusions. Waiting 24 hours before big decisions gives System 2 time to catch up. Seeking opposing viewpoints compensates for confirmation bias. You can't fix the hardware, but you can build better software.`,
    flashcards: [
      { question: "What is the difference between System 1 and System 2 thinking?", answer: "System 1: automatic, fast, emotional, always on but error-prone (biases). System 2: deliberate, slow, rational, accurate but lazy and requires effort." },
      { question: "Why doesn't simply knowing about cognitive biases prevent them?", answer: "System 1 fires before System 2 can intervene — biases happen automatically. The solution is external systems (checklists, waiting periods, opposing viewpoints) not just awareness." }
    ],
    reflectionQuestion: "Think of a strong opinion you hold — is it something System 2 carefully analyzed, or did System 1 decide it emotionally and System 2 just built the justification afterwards?"
  },
  {
    pillar: "mindset",
    title: "Identity-Based Habits: Become, Don't Just Do",
    read: `James Clear's Atomic Habits makes a crucial distinction that most habit advice misses: there are three layers of behavior change, and most people focus on the wrong one.\n\nThe outer layer is outcomes — "I want to lose 10kg." The middle layer is processes — "I will go to the gym 4x per week." The inner layer is identity — "I am someone who moves their body daily." Most people start from the outside in. Clear argues you should start from the inside out.\n\nWhy? Because every action you take is a vote for the type of person you want to become. When you read for 15 minutes, you're casting a vote for "I am a reader." When you skip the gym but tell yourself "I'll go tomorrow," you're casting a vote for "I am someone who breaks promises to themselves." Enough votes in either direction and the identity solidifies.\n\nThis reframes discipline entirely. You're not using willpower to force yourself to do hard things. You're asking: "What would the person I want to become do right now?" A reader reads. A fit person exercises. A learner studies. The action becomes obvious once the identity is clear.\n\nThe practical mechanism: start impossibly small. Don't commit to reading 50 books — commit to reading one page before bed. The point isn't the page; it's proving to yourself that you are someone who reads. Once the identity takes hold, scaling up is natural. You don't need motivation to do things that are simply part of who you are. You don't "motivate" yourself to brush your teeth — it's just what you do.`,
    flashcards: [
      { question: "What are the three layers of behavior change according to James Clear?", answer: "Outcomes (what you get), Processes (what you do), and Identity (what you believe about yourself). Most people start with outcomes; Clear says start with identity." },
      { question: "Why does 'start impossibly small' work for building habits?", answer: "The goal isn't the small action itself — it's casting votes for your new identity. Reading one page proves 'I am a reader.' Once the identity solidifies, scaling up becomes natural." }
    ],
    reflectionQuestion: "What identity are your daily habits currently voting for — and is it the person you actually want to become?"
  },
  {
    pillar: "mindset",
    title: "Negative Visualization: The Stoic Antidote to Entitlement",
    read: `The Stoic practice of premeditatio malorum — negative visualization — asks you to regularly imagine losing everything you have. Your health, your relationships, your comfort, your life itself. Modern culture says this is morbid. The Stoics argued it's the key to gratitude and resilience.\n\nSeneca, one of Rome's richest men, practiced sleeping on a hard floor and eating simple meals periodically. Not as punishment, but as preparation. "Set aside a number of days during which you shall be content with the scantiest fare," he wrote. The purpose: to realize that the worst case isn't as unbearable as you imagine, and to stop taking comfort for granted.\n\nThe psychological mechanism is real. Hedonic adaptation means we quickly adjust to improvements and stop appreciating them. You were thrilled with your first apartment; now it feels cramped. You were excited about your job; now it's routine. Negative visualization resets the baseline. When you genuinely imagine losing your health, the mere absence of illness becomes a gift rather than a default.\n\nThis isn't pessimism — it's anti-fragility training for the mind. When you've pre-lived setbacks mentally, they lose their power to devastate you when they actually occur. Marcus Aurelius, while emperor of Rome, wrote every morning about the frustrations he'd face that day — ungrateful people, liars, the incompetent. Not to create negativity, but to remove the element of surprise. He was never blindsided because he'd already processed it.\n\nModern research confirms this: studies show that people who mentally rehearse obstacles are more likely to achieve goals than those who only visualize success.`,
    flashcards: [
      { question: "What is premeditatio malorum and why did Stoics practice it?", answer: "Negative visualization — imagining losing what you have. It combats hedonic adaptation (taking things for granted) and builds resilience by removing the element of surprise from setbacks." },
      { question: "What does research say about visualizing obstacles vs only visualizing success?", answer: "People who mentally rehearse obstacles are MORE likely to achieve goals than those who only visualize positive outcomes." }
    ],
    reflectionQuestion: "Try it now: imagine losing one thing you currently take for granted. How does it change your appreciation of what you have?"
  },
  {
    pillar: "mindset",
    title: "The Map is Not the Territory: Thinking About Thinking",
    read: `Alfred Korzybski's insight — "the map is not the territory" — is perhaps the most important mental model for clear thinking. Every belief you hold, every model of reality you carry, is a simplification. The map is useful, but it is never reality itself.\n\nYour mental model of your friend is not your friend. It's a compressed, biased summary based on limited interactions filtered through your own psychology. This is why people say "I never expected that from them" — their map didn't match the territory. Your understanding of economics, politics, or religion is a map. It highlights some features and ignores others.\n\nThe practical danger: people confuse their maps for territory and then fight anyone who has a different map. Political arguments are often two people with different maps insisting their simplification is "the truth." Both maps highlight real features. Both maps omit real features. Neither is the territory.\n\nGood thinkers hold multiple maps simultaneously. They can use a Marxist lens to analyze class dynamics AND a free-market lens to understand incentive structures — without being committed to either as "the truth." This isn't relativism; it's sophistication. A pilot uses an altitude map AND a weather map AND a fuel-range map. Using one doesn't mean the others are wrong.\n\nThe operational rule: whenever you feel certain about something complex, you've probably confused your map for the territory. Certainty about simple facts (water boils at 100°C) is fine. Certainty about complex systems (the economy, human motivation, foreign policy) is a signal that your map has become a prison.`,
    flashcards: [
      { question: "What does 'the map is not the territory' mean in practice?", answer: "Every belief and mental model is a simplification of reality. It's useful but incomplete. Confusing your model for reality itself leads to closed-mindedness and poor decisions." },
      { question: "Why is certainty about complex topics a warning sign?", answer: "Complex systems (economics, politics, human behavior) can't be fully captured by any single model. Feeling certain means you've confused your simplified map for the complex territory." }
    ],
    reflectionQuestion: "What is one strong belief you hold that might be 'your map' rather than 'the territory'? What features of reality might your map be omitting?"
  }
];

// ============================================
// ISLAM MODULES
// ============================================
const ISLAM_MODULES: ModuleContent[] = [
  {
    pillar: "islam",
    title: "Tawakkul: Trust in Allah After Tying Your Camel",
    read: `A man asked the Prophet ﷺ: "Should I tie my camel and trust in Allah, or leave it untied and trust in Allah?" The Prophet replied: "Tie your camel, then trust in Allah." (Tirmidhi)\n\nThis hadith encapsulates tawakkul — one of the most misunderstood concepts in Islam. Tawakkul is not passive resignation. It is active trust. You do everything within your power — plan, prepare, work, strategize — and then surrender the outcome to Allah. The action is your responsibility; the result is His domain.\n\nIbn al-Qayyim explained tawakkul as having three components: (1) Knowledge — knowing that Allah's decree will prevail regardless. (2) Action — taking all available means, because neglecting means is not trust but negligence. (3) Heart — your inner state rests in Allah's wisdom, not in anxiety about outcomes.\n\nThis intersects powerfully with the Stoic dichotomy of control, but goes deeper. The Stoics say: control what you can, accept what you can't. Islam says: control what you can, entrust what you can't to the One who knows what you don't. There's a relational element — you're not surrendering to an indifferent universe but to a Merciful, All-Knowing Creator.\n\nThe practical application for a young person: study hard for the exam (your camel), then don't lose sleep over the result (tawakkul). Apply for the job thoroughly, then trust the process. This isn't spiritual bypassing — it's the most psychologically healthy relationship with uncertainty.`,
    flashcards: [
      { question: "What is tawakkul and how does the hadith of the camel explain it?", answer: "Tawakkul is active trust in Allah — taking all necessary action (tie your camel) then surrendering the outcome to Allah. It's not passive resignation but action + trust." },
      { question: "What are Ibn al-Qayyim's three components of tawakkul?", answer: "1) Knowledge (Allah's decree will prevail), 2) Action (take all available means — neglecting them is negligence, not trust), 3) Heart (inner peace rests in Allah's wisdom, not anxiety)." }
    ],
    reflectionQuestion: "In what area of your life are you either 'not tying the camel' (being passive and calling it trust) or 'not trusting Allah' (doing everything but still anxious about results)?",
    dhikr: "حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ — Hasbunallahu wa ni'mal wakeel — Allah is sufficient for us, and He is the best Disposer of affairs.",
    ayah: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ — And whoever puts their trust in Allah, He will be enough for them. (At-Talaq 65:3)"
  },
  {
    pillar: "islam",
    title: "Ibn Khaldun: The Father of Sociology Was Muslim",
    read: `In 1377, a North African scholar named Ibn Khaldun wrote the Muqaddimah — a work so far ahead of its time that Western scholars wouldn't match its insights for another 400 years. He is considered the father of sociology, historiography, and economics, though most Western textbooks don't mention him.\n\nHis central concept is 'asabiyyah — social cohesion or group solidarity. Ibn Khaldun observed that civilizations follow a cycle: a group with strong 'asabiyyah (often desert or nomadic tribes) conquers a settled civilization. They establish a dynasty and enjoy the fruits of power. But luxury and comfort erode their 'asabiyyah over 3-4 generations. They become soft, dependent on mercenaries, and lose the solidarity that brought them to power. A new group with stronger 'asabiyyah conquers them, and the cycle repeats.\n\nHe applied this framework across centuries of Islamic, Roman, and Persian history with remarkable consistency. He also made pioneering economic observations: he argued that low taxes stimulate economic growth (anticipating the Laffer Curve by 600 years) and that government intervention in markets leads to corruption and economic decline.\n\nThe Muqaddimah also critiques historians who accept miraculous claims uncritically, insisting on rational analysis of causes and effects — a methodology that wouldn't become standard in Europe until the Enlightenment. Ibn Khaldun represents a period when Islamic civilization was the world's intellectual leader — a fact worth knowing not for nostalgia, but to understand that intellectual leadership is not permanent and must be actively maintained.`,
    flashcards: [
      { question: "What is 'asabiyyah and how does it drive Ibn Khaldun's cycle of civilizations?", answer: "Social cohesion/group solidarity. Groups with strong 'asabiyyah conquer settled civilizations, but luxury erodes it over 3-4 generations. A new cohesive group conquers them, and the cycle repeats." },
      { question: "What economic insight did Ibn Khaldun articulate 600 years before Western economists?", answer: "That low taxes stimulate economic growth and generate more total revenue than high taxes — anticipating the Laffer Curve by six centuries." }
    ],
    reflectionQuestion: "Ibn Khaldun says comfort erodes the qualities that built success. Can you see this pattern in your own life, family, or community?",
    dhikr: "رَبِّ زِدْنِي عِلْمًا — Rabbi zidni 'ilma — My Lord, increase me in knowledge. (Ta-Ha 20:114)",
    ayah: "إِنَّ اللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُوا مَا بِأَنفُسِهِمْ — Indeed, Allah will not change the condition of a people until they change what is in themselves. (Ar-Ra'd 13:11)"
  },
  {
    pillar: "islam",
    title: "Riba: Why Islam Prohibits Interest and What It Means for You",
    read: `The prohibition of riba (interest/usury) is one of the most emphasized prohibitions in the Quran — mentioned alongside war against Allah and His Messenger (2:279). But understanding WHY reveals deep economic wisdom, not arbitrary restriction.\n\nRiba means "increase" — specifically, guaranteed increase without shared risk. When a bank lends you $100,000 for a house, they earn interest regardless of whether your house gains or loses value. You bear all the risk; they get guaranteed return. Islam says this is unjust: profit must come with risk.\n\nThe Islamic alternative is equity-based financing. In a murabaha (cost-plus sale), the bank buys the house and sells it to you at a markup with installments — they own the asset and share the risk. In a musharakah (partnership), you and the financier jointly own the property and share profits/losses proportionally. The principle: money should be tied to real economic activity, not generate returns from nothing.\n\nThis isn't just theology — it's prescient economics. The 2008 financial crisis was caused by interest-based instruments (mortgage-backed securities, CDOs) that disconnected risk from reward. Banks packaged risky loans, collected their fees, and passed the risk to investors. When the bubble burst, taxpayers paid. Islamic financial principles would have prevented this by requiring risk-sharing at every level.\n\nPractical implications for you: seek Islamic banking products for savings and financing, understand that halal wealth comes from adding real value (trade, work, equity investment) not from money generating money. This shapes career choices, investment decisions, and your relationship with debt.`,
    flashcards: [
      { question: "What is the fundamental principle behind riba's prohibition?", answer: "Profit must come with risk. Riba guarantees returns to the lender regardless of outcome, placing all risk on the borrower. Islam requires risk-sharing (equity-based financing)." },
      { question: "How do Islamic financial principles relate to the 2008 financial crisis?", answer: "The crisis was caused by instruments that disconnected risk from reward. Islamic finance requires risk-sharing at every level, which would have prevented the toxic bundling of risky loans." }
    ],
    reflectionQuestion: "How would your financial decisions change if you committed to only halal income streams — avoiding interest on both the earning and paying side?",
    dhikr: "اللَّهُمَّ اكْفِنِي بِحَلَالِكَ عَنْ حَرَامِكَ وَأَغْنِنِي بِفَضْلِكَ عَمَّنْ سِوَاكَ — Allahummak-fini bi halaalika 'an haraamika wa aghnini bi fadlika 'amman siwaak — O Allah, suffice me with what is halal over what is haram, and make me independent of all others besides You.",
    ayah: "يَمْحَقُ اللَّهُ الرِّبَا وَيُرْبِي الصَّدَقَاتِ — Allah destroys riba and gives increase for charity. (Al-Baqarah 2:276)"
  },
  {
    pillar: "islam",
    title: "Sabr: Patience as a Strategic Advantage",
    read: `Sabr in the Quran is not passive endurance — it's one of the most active, powerful qualities a person can develop. The word appears over 90 times in the Quran, more than almost any other quality. Allah promises that He is "with the patient" (2:153) — a level of divine companionship not mentioned with many other qualities.\n\nIslamic scholars identify three types of sabr: (1) Patience in obedience — continuing to pray, fast, and do good even when it's difficult or results aren't visible. (2) Patience in avoiding sin — resisting temptation when the haram option is easier or more immediately gratifying. (3) Patience with Allah's decree — accepting what you cannot change without bitterness or despair.\n\nImam al-Ghazali in Ihya Ulum al-Din explains sabr as the victory of the rational soul (nafs al-mutma'innah) over the lower self (nafs al-ammara). Every moment of patience strengthens the rational soul; every moment of impulsive surrender weakens it. Sabr is essentially training your nafs — it's the Islamic framework for what modern psychology calls delayed gratification and emotional regulation.\n\nThe famous Stanford Marshmallow Experiment showed that children who could delay gratification had better life outcomes decades later — better grades, lower substance abuse, higher income. Islam arrived at this principle 1400 years earlier and embedded it into daily practice. Fasting in Ramadan is essentially 30 days of sabr training — systematically strengthening your ability to resist immediate desires for a greater purpose.\n\nSabr isn't about suffering quietly. It's about having the strategic vision to endure short-term difficulty for long-term reward — in this life and the next.`,
    flashcards: [
      { question: "What are the three types of sabr according to Islamic scholars?", answer: "1) Patience in obedience (continuing good deeds when hard), 2) Patience in avoiding sin (resisting temptation), 3) Patience with Allah's decree (accepting what you can't change)." },
      { question: "How does Ramadan fasting relate to the concept of sabr?", answer: "It's 30 days of systematic sabr training — strengthening your ability to resist immediate desires for a greater purpose. This mirrors the delayed gratification research from the Stanford Marshmallow Experiment." }
    ],
    reflectionQuestion: "Which of the three types of sabr do you struggle with most right now — and what is one concrete way you could train that specific type this week?",
    dhikr: "إِنَّا لِلَّهِ وَإِنَّا إِلَيْهِ رَاجِعُونَ — Inna lillahi wa inna ilayhi raji'un — Indeed, to Allah we belong and to Him we shall return.",
    ayah: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ إِنَّ اللَّهَ مَعَ الصَّابِرِينَ — O you who believe, seek help through patience and prayer. Indeed, Allah is with the patient. (Al-Baqarah 2:153)"
  },
  {
    pillar: "islam",
    title: "Al-Ghazali's Revival: The Scholar Who Saved Islam",
    read: `Abu Hamid al-Ghazali (1058-1111) is often called the most influential Muslim after the Prophet ﷺ. His masterwork, Ihya Ulum al-Din (Revival of the Religious Sciences), systematically rebuilt Islamic practice from the ground up — integrating law, theology, and spirituality into a unified framework.\n\nAl-Ghazali was the most prestigious professor at Baghdad's Nizamiyyah University — the Harvard of the medieval world. At the peak of his career, he had a spiritual crisis. He realized he was teaching Islam for reputation and status, not for Allah. He abandoned his position, wealth, and fame — and spent 11 years in solitude, traveling, and spiritual practice.\n\nFrom this crisis came his greatest insight: knowledge without spiritual transformation is not real knowledge. He criticized scholars who memorized fiqh rulings but whose hearts were untouched. He critiqued philosophers who relied purely on reason while ignoring revelation. He challenged Sufis who pursued spiritual experience while neglecting Sharia.\n\nHis balanced framework: Sharia (Islamic law) provides the structure. Ilm (knowledge) provides understanding. Tasawwuf (spiritual purification) provides sincerity and presence of heart. Remove any one, and the practice becomes hollow — legalism without soul, intellectualism without humility, or mysticism without discipline.\n\nFor a young Muslim today, al-Ghazali's message is urgent: don't separate knowledge from practice, don't pursue worldly success at the expense of your soul, and don't follow Islam superficially. The external forms (prayer, fasting, hijab) are essential — but they are doors, not destinations. What matters is the state of the heart behind them.`,
    flashcards: [
      { question: "Why did al-Ghazali abandon his prestigious position at the Nizamiyyah University?", answer: "He had a spiritual crisis — realized he was teaching Islam for reputation and status, not for Allah. He spent 11 years in solitude rediscovering authentic spiritual practice." },
      { question: "What is al-Ghazali's three-part framework for complete Islamic practice?", answer: "Sharia (law/structure) + Ilm (knowledge/understanding) + Tasawwuf (spiritual purification/sincerity). Remove any one and practice becomes hollow." }
    ],
    reflectionQuestion: "Al-Ghazali gave up worldly prestige because it was corrupting his intention. In your own life, where might success or recognition be subtly corrupting your sincerity?",
    dhikr: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ — SubhanAllahi wa bihamdihi, SubhanAllahil Adheem — Glory be to Allah and His praise, Glory be to Allah the Magnificent.",
    ayah: "قَدْ أَفْلَحَ مَن زَكَّاهَا وَقَدْ خَابَ مَن دَسَّاهَا — He has succeeded who purifies it, and he has failed who corrupts it. (Ash-Shams 91:9-10)"
  },
  {
    pillar: "islam",
    title: "Justice in Islam: Beyond Charity to Systemic Fairness",
    read: `Islam doesn't just encourage generosity — it builds justice into the economic system itself. Zakat isn't a suggestion; it's a pillar. 2.5% of wealth above nisab is redistributed annually. This isn't charity (sadaqah) — it's the right of the poor upon the wealth of the rich. The Quran uses the word "haqq" (right) not "favor."\n\nThe Prophet ﷺ said: "The best of people are the most beneficial to people." (Daraqutni). This hadith reframes success entirely. In a capitalist framework, success is accumulation. In Islam, success is measured by benefit to others. The wealthy person isn't admired for their wealth but for how that wealth serves the community.\n\nUmar ibn al-Khattab (RA), the second Caliph, demonstrated systemic justice at scale. He established the Bayt al-Mal (public treasury), created stipends for all citizens (including non-Muslims), implemented price controls during famine, and personally patrolled Medina at night to find anyone going hungry. His famous statement: "If a mule stumbles in Iraq, I fear Allah will ask me why I did not pave the road for it."\n\nThis vision of justice extends to governance. The concept of shura (consultation) predates Western democracy by centuries. The ruler is accountable — to Allah and to the people. Ibn Taymiyyah wrote that a just non-Muslim government is better than an unjust Muslim one, because justice is a universal divine principle, not a tribal privilege.\n\nFor young Muslims: justice isn't just activism or posting — it starts with how you treat the people you have power over: younger siblings, employees, classmates who are less popular. Adl (justice) begins at the personal level.`,
    flashcards: [
      { question: "Why is Zakat described as a 'right' (haqq) and not a 'favor'?", answer: "Zakat isn't optional charity — it's the divinely mandated right of the poor upon the wealth of those above nisab. The Quran frames it as justice, not generosity." },
      { question: "What did Ibn Taymiyyah say about just non-Muslim government vs unjust Muslim government?", answer: "A just non-Muslim government is better than an unjust Muslim one — because justice is a universal divine principle, not limited to Muslim identity." }
    ],
    reflectionQuestion: "Justice starts small — think about the people you have even a little power over (siblings, peers, anyone). Are you just in how you treat them, or only concerned with justice on a grand scale?",
    dhikr: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الظُّلْمِ — Allahumma inni a'udhu bika min adh-dhulm — O Allah, I seek refuge in You from injustice.",
    ayah: "يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ — O you who believe, be persistently standing firm in justice. (An-Nisa 4:135)"
  }
];

// ============================================
// BOOKS MODULES
// ============================================
const BOOKS_MODULES: ModuleContent[] = [
  {
    pillar: "books",
    title: "Book: The Psychology of Money by Morgan Housel",
    read: `Morgan Housel's The Psychology of Money argues that financial success is not about intelligence — it's about behavior. Through 19 short stories, he demonstrates that how you think about money matters more than what you know about it.\n\nThe book's power lies in its simplicity. Housel shows that a janitor named Ronald Read accumulated $8 million through patience and consistency, while a Merrill Lynch executive went bankrupt through overconfidence and lifestyle inflation. Technical knowledge is useless if your behavior undermines it.\n\nHousel introduces the concept of "reasonable vs rational" — you don't need the mathematically optimal strategy, you need one you can actually stick with during market crashes, job losses, and emotional turmoil. A reasonable strategy you follow beats a rational one you abandon. This single idea could change how you invest, save, and think about money for the rest of your life.`,
    flashcards: [
      { question: "What is Housel's main argument in The Psychology of Money?", answer: "Financial success depends more on behavior and temperament than intelligence or technical knowledge." },
      { question: "What is the difference between 'reasonable' and 'rational' in investing?", answer: "Rational = mathematically optimal. Reasonable = what you can actually stick with during stress. A reasonable strategy you follow beats a rational one you abandon." }
    ],
    reflectionQuestion: "What is one 'rational' financial decision you've avoided because it felt emotionally unreasonable — and was your gut right or wrong?",
    bookTitle: "The Psychology of Money",
    bookAuthor: "Morgan Housel",
    bookWhy: "This book strips away the complexity of finance and reveals that your relationship with money is a psychological game, not a mathematical one. It will change how you think about saving, spending, and investing — not through formulas but through stories of real people whose temperament mattered more than their IQ.",
    bookKeyIdeas: [
      "No one is crazy with money — everyone makes decisions based on their unique life experience, which means your financial worldview is valid but incomplete.",
      "Compounding works best when you give it decades. Buffett made 99.7% of his wealth after age 52 — patience is the real investing skill.",
      "Wealth is what you DON'T see — the cars not bought, the upgrades skipped. True financial freedom means having options, not showing off."
    ],
    bookReflection: "As you read, ask yourself: which of my financial behaviors are driven by real analysis, and which are emotional responses I've rationalized?"
  },
  {
    pillar: "books",
    title: "Book: Meditations by Marcus Aurelius",
    read: `Marcus Aurelius was the most powerful man in the world — Emperor of Rome at its peak. His private journal, never intended for publication, became one of the most influential philosophical works in history. Meditations is raw, honest self-talk from a man trying to be good while commanding an empire.\n\nWhat makes it extraordinary is its accessibility. There's no system to learn, no jargon to decode. It's a man reminding himself: don't get angry at things you can't control, remember that you'll die, treat people with justice even when they don't deserve it, focus on what's in front of you. These aren't abstract ideas — they're daily, practical tools for living.\n\nThe book is proof that wisdom doesn't require comfort. Marcus wrote much of it during military campaigns, battling plagues, betrayals, and the constant temptation to abuse unlimited power. If Stoic philosophy works for a man with the weight of an empire, it can work for anyone.`,
    flashcards: [
      { question: "What was unique about how Meditations was written?", answer: "It was Marcus Aurelius's private journal — personal notes to himself, never intended for publication. This makes it unusually honest and raw compared to other philosophical texts." },
      { question: "Why is Marcus Aurelius's context important for the book's credibility?", answer: "He wrote it while ruling Rome, fighting wars, battling plagues, and facing betrayals. If Stoic principles held up under those pressures, they can work for anyone." }
    ],
    reflectionQuestion: "Marcus Aurelius reminded himself of these principles daily despite being emperor. What principles do YOU need to remind yourself of, and how often?",
    bookTitle: "Meditations",
    bookAuthor: "Marcus Aurelius",
    bookWhy: "This is the most practical philosophy book ever written. No theories, no systems — just a powerful man's honest attempts to live well. Every page contains something you can apply immediately. It's been a handbook for leaders, soldiers, and thinkers for nearly 2000 years because its truths don't expire.",
    bookKeyIdeas: [
      "You have power over your mind, not outside events. Realize this, and you will find strength. The obstacle isn't in your way — it IS the way.",
      "Everything is temporary — your life, your problems, your successes. Memento mori (remember death) isn't morbid; it's clarifying. It strips away what doesn't matter.",
      "Other people's actions are their business, not yours. You can't control them, only your response. Justice and patience are always the right response."
    ],
    bookReflection: "While reading, notice which passages make you uncomfortable — those are usually the ones you most need to hear."
  },
  {
    pillar: "books",
    title: "Book: Prisoners of Geography by Tim Marshall",
    read: `Tim Marshall's Prisoners of Geography reveals a truth most people ignore: the physical features of our planet — mountains, rivers, plains, oceans — determine the fate of nations more than any leader, ideology, or cultural trait. Maps don't just describe the world; they explain it.\n\nIn ten chapters covering ten regions, Marshall shows how Russia's lack of natural borders creates perpetual insecurity, how China's geography limits its naval ambitions, why Africa's smooth coastline hindered its development, and how America's two-ocean buffer made it a superpower. Every foreign policy decision that seems irrational becomes logical when you look at the map.\n\nThe book is essential because it provides a permanent analytical framework. Leaders come and go, ideologies shift, but mountains don't move and rivers don't change course. Once you understand geographic constraints, you can predict a nation's behavior across centuries — not because leaders are robots, but because geography limits their options to a surprisingly narrow range.`,
    flashcards: [
      { question: "What is the core thesis of Prisoners of Geography?", answer: "Physical geography — mountains, rivers, plains, oceans — determines nations' behavior more than leaders, culture, or ideology. Geography constrains options so tightly that patterns repeat across centuries." },
      { question: "Why does the book provide a 'permanent analytical framework'?", answer: "Leaders and ideologies change, but geography doesn't. Mountains don't move, rivers don't change course. Understanding geographic constraints lets you predict national behavior across eras." }
    ],
    reflectionQuestion: "After reading this, look at a world map and pick any ongoing conflict — can you now see the geographic factors behind it?",
    bookTitle: "Prisoners of Geography",
    bookAuthor: "Tim Marshall",
    bookWhy: "This book gives you X-ray vision for geopolitics. After reading it, you'll never watch the news the same way. Every territorial dispute, every alliance, every military base makes sense when you understand the geography underneath. It's the most efficient way to understand why the world works the way it does.",
    bookKeyIdeas: [
      "Russia's foreign policy is driven by the flat European Plain — no natural barriers means perpetual insecurity and a need for buffer states between Moscow and potential invaders.",
      "China is hemmed in by the Himalayas, jungle to the south, Siberia to the north, and the Pacific to the east — where US allies (Japan, Philippines, Taiwan) form a containment arc.",
      "America's geography is almost unfairly advantageous: two ocean buffers, navigable river systems, fertile plains, and friendly/weak neighbors. No other nation has this combination."
    ],
    bookReflection: "As you read, ask: how much of what I attributed to 'culture' or 'leadership' is actually geography in disguise?"
  },
  {
    pillar: "books",
    title: "Book: The Muqaddimah by Ibn Khaldun",
    read: `Written in 1377, Ibn Khaldun's Muqaddimah (Introduction to History) is arguably the most important work of social science ever produced — and it came from the Islamic intellectual tradition. It predates modern sociology, economics, and historiography by centuries.\n\nIbn Khaldun didn't just record history — he asked WHY civilizations rise and fall. His answer centers on 'asabiyyah (social cohesion). Groups with strong internal bonds build empires. Success brings luxury, which erodes those bonds over 3-4 generations. The weakened dynasty falls to a new group with stronger cohesion. This cycle, he argued, is as predictable as the seasons.\n\nThe Muqaddimah covers everything from economics (low taxes generate more revenue than high taxes) to education (rote memorization kills understanding) to climate's effect on character. It's a complete theory of human civilization from an Islamic perspective — one that modern academics are still catching up to.`,
    flashcards: [
      { question: "When was the Muqaddimah written and why is it significant?", answer: "Written in 1377 by Ibn Khaldun. It predates Western sociology, economics, and scientific historiography by centuries — arguably the first comprehensive work of social science." },
      { question: "What is the cycle of civilization according to Ibn Khaldun?", answer: "Groups with strong 'asabiyyah (social cohesion) build power → success brings luxury → luxury erodes cohesion over 3-4 generations → a new cohesive group replaces them. Repeat." }
    ],
    reflectionQuestion: "Ibn Khaldun wrote this 650 years ago and it still explains modern politics. What does that tell you about human nature and whether it actually changes?",
    bookTitle: "The Muqaddimah",
    bookAuthor: "Ibn Khaldun",
    bookWhy: "This is one of the most important books in human intellectual history, written by a Muslim scholar 600 years before Western academia reached similar conclusions. Reading it connects you to the Islamic intellectual tradition and gives you a framework for understanding civilizational rise and fall that is still unmatched in its scope.",
    bookKeyIdeas: [
      "'Asabiyyah (social cohesion) is the engine of civilization. When it's strong, groups conquer and build. When luxury erodes it, they fall. This explains dynastic cycles across all civilizations.",
      "Economics is not just about money — it's about incentive structures. High taxes initially increase revenue but eventually destroy the tax base as people stop producing.",
      "Blind acceptance of historical claims without rational analysis is intellectual failure. Ibn Khaldun demanded evidence-based historiography centuries before it became Western practice."
    ],
    bookReflection: "While reading, consider: where do you see the erosion of 'asabiyyah in modern Muslim communities, and what would rebuilding it look like?"
  },
  {
    pillar: "books",
    title: "Book: Thinking, Fast and Slow by Daniel Kahneman",
    read: `Daniel Kahneman spent decades researching how humans actually make decisions — and the answer is humbling. Thinking, Fast and Slow presents his life's work: we have two thinking systems, and the one in charge most of the time is unreliable.\n\nSystem 1 (fast) handles most of your life — snap judgments, intuitions, first impressions. It's efficient but systematically biased. System 2 (slow) handles complex reasoning — math, careful analysis, deliberate choices. It's accurate but lazy and tires easily. The problem: System 1 generates answers automatically, and System 2 usually just endorses them without checking.\n\nThis book is uncomfortable because it proves you can't trust your own thinking in predictable ways. But it's also empowering — once you understand the specific biases (anchoring, loss aversion, the planning fallacy), you can build systems and habits that compensate. You can't fix the hardware, but you can write better software.`,
    flashcards: [
      { question: "What is the core finding of Kahneman's research?", answer: "Humans have two thinking systems: System 1 (fast, automatic, biased) handles most decisions, while System 2 (slow, rational, accurate) is lazy and usually just endorses System 1's conclusions without checking." },
      { question: "Why is knowing about biases not enough to prevent them?", answer: "Biases are System 1 — they fire automatically before System 2 can intervene. You need external systems (checklists, waiting periods, accountability) to compensate, not just awareness." }
    ],
    reflectionQuestion: "Think about the last big decision you made — was it really a System 2 deliberate choice, or a System 1 gut feeling that System 2 rationalized after the fact?",
    bookTitle: "Thinking, Fast and Slow",
    bookAuthor: "Daniel Kahneman",
    bookWhy: "This Nobel Prize-winning work fundamentally changes how you understand your own mind. After reading it, you'll catch yourself in cognitive biases daily. It's dense but transformative — the most important book on human judgment ever written, and essential for anyone who wants to make better decisions.",
    bookKeyIdeas: [
      "Loss aversion: losing $100 feels about twice as painful as gaining $100 feels good. This asymmetry drives most irrational financial and personal decisions.",
      "The planning fallacy: we systematically underestimate how long things take and how much they cost. The fix: use reference class data (how long did SIMILAR projects take?) not inside-view estimates.",
      "What You See Is All There Is (WYSIATI): System 1 builds the best story from available information without checking what information is MISSING. This is why first impressions feel so convincing — they're built from limited data."
    ],
    bookReflection: "As you read, keep a notebook of decisions you make that week. At the end, review: which ones were System 1 and which were genuinely System 2?"
  },
  {
    pillar: "books",
    title: "Book: Man's Search for Meaning by Viktor Frankl",
    read: `Viktor Frankl survived Auschwitz. His wife, parents, and brother did not. From this unimaginable suffering, he developed logotherapy — a psychological framework built on one insight: the primary human drive is not pleasure (Freud) or power (Adler), but meaning.\n\nThe first half of the book describes concentration camp life with clinical precision. Frankl observed that prisoners who had something to live for — a loved one waiting, a manuscript to finish, a purpose beyond survival — endured conditions that broke others. "He who has a WHY to live can bear almost any HOW," he wrote, quoting Nietzsche.\n\nThe second half presents his therapeutic framework. Suffering without meaning is unbearable. Suffering WITH meaning becomes endurance, even growth. This doesn't romanticize suffering — it acknowledges that since suffering is unavoidable, our only choice is how we respond. The book has sold 16 million copies because this message resonates across all cultures, religions, and circumstances.`,
    flashcards: [
      { question: "What is the core insight of Frankl's logotherapy?", answer: "The primary human drive is meaning — not pleasure (Freud) or power (Adler). People can endure almost any suffering if they find meaning in it." },
      { question: "What did Frankl observe about which prisoners survived the camps?", answer: "Those who had something to live for — a loved one, an unfinished purpose, a future goal — endured conditions that broke prisoners who had lost all sense of meaning." }
    ],
    reflectionQuestion: "Frankl says we can't avoid suffering, only choose our response. What meaning do you assign to the difficulties in your life right now?",
    bookTitle: "Man's Search for Meaning",
    bookAuthor: "Viktor Frankl",
    bookWhy: "This is the most important book on human resilience ever written — forged in the worst conditions humanity has produced. It's short (under 200 pages), devastating, and life-changing. Every person in their 20s should read it, because it answers the question that haunts this decade: 'What is my life actually for?'",
    bookKeyIdeas: [
      "Between stimulus and response, there is a space. In that space is our freedom to choose our response. In our response lies our growth and freedom.",
      "Meaning can be found in three ways: through work (creating something), through love (connecting with someone), and through suffering (choosing our attitude in unavoidable hardship).",
      "The 'existential vacuum' — a feeling of emptiness and meaninglessness — is the root cause of depression, aggression, and addiction in modern society. Filling it requires purpose, not pleasure."
    ],
    bookReflection: "While reading, ask yourself: if everything comfortable was stripped away tomorrow, what would give your life meaning?"
  }
];

// ============================================
// CONTENT LIBRARY EXPORT
// ============================================
const CONTENT_LIBRARY: Record<string, ModuleContent[]> = {
  finance: FINANCE_MODULES,
  politics: POLITICS_MODULES,
  geography: GEOGRAPHY_MODULES,
  mindset: MINDSET_MODULES,
  islam: ISLAM_MODULES,
  books: BOOKS_MODULES,
};

export function getModuleContent(pillar: string, usedIndices: number[] = []): ModuleContent {
  const modules = CONTENT_LIBRARY[pillar];
  if (!modules || modules.length === 0) {
    throw new Error(`No content for pillar: ${pillar}`);
  }

  // Find unused index
  const available = modules.map((_, i) => i).filter((i) => !usedIndices.includes(i));
  const index = available.length > 0
    ? available[Math.floor(Math.random() * available.length)]
    : Math.floor(Math.random() * modules.length);

  return modules[index];
}

export function getConversationPoints(topic: string): { points: { headline: string; detail: string; angle: string }[] } {
  return {
    points: [
      {
        headline: `The structural forces behind "${topic}"`,
        detail: `Most commentary on ${topic} focuses on surface events. The deeper dynamic involves structural incentives — who benefits from the current arrangement, who loses, and why the status quo persists despite criticism. Follow the money and the institutional interests.`,
        angle: `Instead of picking a side, ask: who designed the rules of this game, and did they design them to win?`
      },
      {
        headline: `The historical pattern most people miss`,
        detail: `${topic} isn't new. Similar dynamics played out in different contexts throughout history. Understanding the historical precedent reveals which outcomes are likely and which "solutions" have already been tried and failed. The specifics change; the human patterns don't.`,
        angle: `When someone presents this as unprecedented, ask them: what's the closest historical parallel, and what happened then?`
      },
      {
        headline: `The second-order effects nobody's discussing`,
        detail: `The obvious impacts of ${topic} are well-covered. The interesting question is: what happens NEXT? Every action creates reactions. Every policy creates incentives. The people who see second-order effects before they happen are the ones who navigate change successfully.`,
        angle: `Don't just ask what will happen — ask what will people DO in response to what happens, and what does THAT cause?`
      }
    ]
  };
}
