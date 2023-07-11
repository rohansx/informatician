import ebk1 from "@/public/assets/ebooks/ebk1.webp";
import ebk2 from "@/public/assets/ebooks/ebk2.webp";
import ebk3 from "@/public/assets/ebooks/ebk3.webp";
import ebk4 from "@/public/assets/ebooks/ebk4.webp";
import ebk5 from "@/public/assets/ebooks/ebk5.webp";
import ebk6 from "@/public/assets/ebooks/ebk6.webp";
import ebk7 from "@/public/assets/ebooks/ebk7.webp";
import ebk8 from "@/public/assets/ebooks/ebk8.webp";
import abk1 from "@/public/assets/audiobks/abk1.webp";
import abk3 from "@/public/assets/audiobks/abk3.webp";
import abk4 from "@/public/assets/audiobks/abk4.webp";
import alchemist from "@/public/assets/selfHelp/alchemist.jpg";
import money from "@/public/assets/career/money.jpeg";
import monk from "@/public/assets/career/monk.webp";

const Books = [
  {
    id: 1,
    type: "eBook",
    title:
      "The Perfect Marriage: A Completely Gripping Psychological Suspense ",
    imageSrc: "@/public/assets/ebooks/ebk1.webp",
    img: ebk1,
    author: "Jeneva Rose",
    authorPage: "/author/jeneva-rose",
    ratings: 1454,
    aboutBook: `New York Times The bestselling thriller with “a tantalizing
                premise and twists at every turn . . . a sizzling, masterful
                debut about betrayal and justice`,
    bookSynapsis: `Would you defend your husband if he was accused of killing his
                  mistress? Sarah Morgan is a successful and powerful defense
                  attorney in Washington D.C. At 33 years old, she is a named
                  partner at her firm and life is going exactly how she planned.
                  The same cannot be said for her husband, Adam. He is a
                  struggling writer who has had little success in his career. He
                  begins to tire of his and Sarah's relationship as she is
                  constantly working. Out in the secluded woods, at Adam and
                  Sarah's second home, Adam engages in a passionate affair with
                  Kelly Summers. Then, one morning everything changes. Adam is
                  arrested for Kelly's murder. She had been found stabbed to death
                  in Adam and Sarah's second home. Sarah soon finds herself
                  playing the defender for her own husband, a man accused of
                  murdering his mistress. But is Adam guilty or is he innocent?`,
    description:
      "A gripping psychological suspense unveiling the dark secrets of a perfect marriage.",
    isbn: 13950395,
    releaseDate: "29-11-2013",
    language: "English",
  },
  {
    id: 2,
    type: "Audio Book",
    title: "The Last Mrs Parrish",
    imageSrc: "@/public/asstes/ebooks/abk1.webp",
    img: abk1,
    author: "Lynne Constantine and Valerie Constantine",
    authorPage: "/author/lynee-constantine",
    ratings: 1103,
    aboutBook: `A REESE WITHERSPOON HELLO SUNSHINE BOOK CLUB PICK WITH
                OVER ONE MILLION COPIES SOLD! "Filled with envy,
                deception, and power, it's a great reading escape. And
                there is a thrilling twist at the end!!" —Reese
                Witherspoon “Will keep you up. In a 'can't put it down'
                way. It's 'The Talented Mr. Ripley' with XX
                chromosomes.”—The Skimm “Deliciously duplicitous. . . .
                equally as twisty, spellbinding, and addictive as
                Gillian Flynn's Gone Girl or Paula Hawkins's The Girl on
                the Train.”—Library Journal (starred review) Amber
                Patterson is fed up. She's tired of being a nobody: a
                plain, invisible woman who blends into the background.
                She deserves more—a life of money and power like the one
                blond-haired, blue-eyed goddess Daphne Parrish takes for
                granted. To everyone in the exclusive town of Bishops
                Harbor, Connecticut, Daphne—a socialite and
                philanthropist—and her real-estate mogul husband,
                Jackson, are a couple straight out of a fairy tale.
                Amber's envy could eat her alive . . . if she didn't
                have a plan. Amber uses Daphne's compassion and caring
                to insinuate herself into the family's life—the first
                step in a meticulous scheme to undermine her. Before
                long, Amber is Daphne's closest confidante, traveling to
                Europe with the Parrishes and their lovely young
                daughters, and growing closer to Jackson. But a skeleton
                from her past may undermine everything that Amber has
                worked towards, and if it is discovered, her well-laid
                plan may fall to pieces. With shocking turns and dark
                secrets that will keep you guessing until the very end,
                The Last Mrs. Parrish is a fresh, juicy, and utterly
                addictive thriller from a diabolically imaginative
                talent.`,
    description:
      "A gripping tale of manipulation and revenge in The Last Mrs. Parrish: A Novel.",
    isbn: 9780718074326,
    releaseDate: "Oct 17, 2017",
    language: "English",
  },
  {
    id: 3,
    type: "Audio Book",
    title: "The Guest List: YOU'D KILL TO BE ON IT",
    imageSrc: "@/public/assets/ebooks/ebk3.webp",
    img: ebk3,
    author: "Lucy Foley",
    authorPage: "/author/lucy-foley",
    ratings: 1103,
    aboutBook: `Winner for Best Mystery & Thriller (2020)`,
    bookSynapsis: `A wedding celebration turns dark and deadly in this
                  deliciously wicked and atmospheric thriller reminiscent
                  of Agatha Christie from the New York Times bestselling
                  author of The Hunting Party. The bride – The plus one –
                  The best man – The wedding planner – The bridesmaid –
                  The body On an island off the coast of Ireland, guests
                  gather to celebrate two people joining their lives
                  together as one. The groom: handsome and charming, a
                  rising television star. The bride: smart and ambitious,
                  a magazine publisher. It's a wedding for a magazine, or
                  for a celebrity: the designer dress, the remote
                  location, the luxe party favors, the boutique whiskey.
                  The cell phone service may be spotty and the waves may
                  be rough, but every detail has been expertly planned and
                  will be expertly executed. But perfection is for plans,
                  and people are all too human. As the champagne is popped
                  and the festivities begin, resentments and petty
                  jealousies begin to mingle with the reminiscences and
                  well wishes. The groomsmen begin the drinking game from
                  their school days. The bridesmaid not-so-accidentally
                  ruins her dress. The bride's oldest (male) friend gives
                  an uncomfortably caring toast. And then someone turns up
                  dead. Who didn't wish the happy couple well? And perhaps
                  more important, why?`,
    description:
      "A deadly wedding celebration unfolds on a remote island in The Guest List: A Novel.",
    isbn: 9780062868930,
    releaseDate: "Oct 17, 2001",
    language: "English",
  },
  {
    id: 4,
    type: "Audio Book",
    title: "The Subtle Art of Not Giving a F*ck",
    imageSrc: "@/public/assets/audiobks/abk3.webp",
    img: abk3,
    author: "Mark Manson",
    authorPage: "/author/mark-manson",
    ratings: 1103,
    aboutBook: `# 1 New York Times Bestseller. Over 2 million copies sold.
                The Subtle Art of Not Giving a F*ck: A
                Counterintuitive Approach to Living a Good Life is a
                2016 nonfiction self-help book by American blogger and
                author Mark Manson. `,
    bookSynapsis: `For decades, we've been told that positive thinking is
                the key to a happy, rich life. “Fuck positivity,” Mark
                Manson says. “Let's be honest, shit is fucked and we
                have to live with it.” In his wildly popular Internet
                blog, Manson doesn't sugar-coat or equivocate. He tells
                it like it is—a dose of raw, refreshing, honest truth
                that is sorely lacking today. The Subtle Art of Not
                Giving a F**k is his antidote to the coddling,
                let's-all-feel-good mind-set that has infected American
                society and spoiled a generation, rewarding them with
                gold medals just for showing up.`,
    description:
      "Embracing the liberating philosophy of prioritizing what truly matters in life.",
    isbn: 9780718074326,
    releaseDate: "Oct 17, 2001",
    language: "English",
  },
  {
    id: 5,
    type: "Audio Book",
    title:
      "Building a StoryBrand: Clarify Your Message So Customers Will Listen",
    imageSrc: "@/public/assets/audiobks/abk4.webp",
    img: abk4,
    author: "Harper Collins",
    authorPage: "/author/harper-collins",
    ratings: 1103,
    aboutBook: `<em>New York Times </em>
                bestselling author Donald Miller uses the seven
                universal elements of powerful stories to teach
                readers how to dramatically improve how they connect
                with customers and grow their businesses.`,
    bookSynapsis: `Donald Miller's StoryBrand process is a proven solution
                  to the struggle business leaders face when talking about
                  their businesses. This revolutionary method for
                  connecting with customers provides readers with the
                  ultimate competitive advantage, revealing the secret for
                  helping their customers understand the compelling
                  benefits of using their products, ideas, or services.
                  does this by teaching readers the seven universal story
                  points all humans respond to; the real reason customers
                  make purchases; how to simplify a brand message so
                  people understand it; and how to create the most
                  effective messaging for websites, brochures, and social
                  media. Whether you are the marketing director of a
                  multibillion dollar company, the owner of a small
                  business, a politician running for office, or the lead
                  singer of a rock band, will forever transform the way
                  you talk about who you are, what you do, and the unique
                  value you bring to your customers.`,
    description: "Clarify Your Message So Customers Will Listen.",
    isbn: 9780718074326,
    releaseDate: "Oct 17, 2001",
    language: "English",
  },
  {
    id: 6,
    type: "eBook",
    title: "An Ugly Truth: Inside Facebook's Battle for Domination",
    imageSrc: "@/public/assets/ebooks/ebk2.webp",
    img: ebk2,
    author: "Sheera Frenkel, Cecilia Kang",
    authorPage: "/author/sheera-frenkel",
    ratings: 1103,
    aboutBook: `<em>INSTANT NEW YORK TIMES </em>
                BESTSELLER // WINNER OF THE SABEW BEST IN BUSINESS
                AWARDA Book of the Year: Fortune, Foreign Affairs, The
                Times (London), Cosmopolitan, TechCrunch, WIRED“`,
    bookSynapsis: `On Jan. 6, after monitoring the messages domestic
                  extremists were posting on Facebook, the company's
                  security experts became increasingly worried there might
                  be violence in Washington, D.C. The team warned top
                  executives, who even mulled asking their C.E.O., Mark
                  Zuckerberg, to call Donald Trump and find out what the
                  president was intending to tell his mob of supporters
                  then gathering to protest the election results. But the
                  executives scrapped that plan, worried the media would
                  find out about such a phone call and Facebook would be
                  implicated in whatever happened next. Instead, they sat
                  at home and watched as Trump stirred up the furious
                  crowd, and as threats in Facebook posts escalated into
                  real-world attacks on the Capitol. Days later, in a
                  video interview with Reuters, Sheryl Sandberg, the
                  company's chief operating officer, blamed the riots on
                  far-right niche social media sites, such as Gab and
                  Parler, “that don't have our abilities to stop hate,
                  don't have our standards and don't have our
                  transparency.”`,
    description: "Inside Facebook's Battle for Domination.",
    isbn: 9780718074326,
    releaseDate: "Oct 17, 2001",
    language: "English",
  },
  {
    id: 7,
    type: "eBook",
    title:
      "Never Split the Difference: Negotiating as if Your Life Depended on It",
    imageSrc: "@/public/assets/ebooks/ebk3.webp",
    img: ebk3,
    author: "Chris Voss,Tahl Raz",
    authorPage: "/author/chris-voss",
    ratings: 1103,
    aboutBook: `Life is a series of negotiations you should be
                prepared for: buying a car; negotiating a pay hike;
                buying a home; renegotiating rent; deliberating with
                your partner. Taking emotional intelligence and
                intuition to the next level, Never Split the
                Difference by Chris Voss and Tahl Raz aims to give you
                the competitive edge in any discussion.`,
    bookSynapsis: `A former international hostage negotiator for the FBI
                  offers a new, field-tested approach to high-stakes
                  negotiations—whether in the boardroom or at home. After
                  a stint policing the rough streets of Kansas City,
                  Missouri, Chris Voss joined the FBI, where his career as
                  a hostage negotiator brought him face-to-face with a
                  range of criminals, including bank robbers and
                  terrorists. Reaching the pinnacle of his profession, he
                  became the FBI's lead international kidnapping
                  negotiator. Never Split the Difference takes you inside
                  the world of high-stakes negotiations and into Voss's
                  head, revealing the skills that helped him and his
                  colleagues succeed where it mattered most: saving lives.
                  In this practical guide, he shares the nine effective
                  principles—counterintuitive tactics and strategies—you
                  too can use to become more persuasive in both your
                  professional and personal life. Life is a series of
                  negotiations you should be prepared for: buying a car,
                  negotiating a salary, buying a home, renegotiating rent,
                  deliberating with your partner. Taking emotional
                  intelligence and intuition to the next level, Never
                  Split the Difference gives you the competitive edge in
                  any discussion.`,
    description:
      "Negotiating as if Your Life Depended on It. Mastering the Art of Persuasion.",
    isbn: 9780718074326,
    releaseDate: "Oct 17, 2001",
    language: "English",
  },
  {
    id: 8,
    type: "eBook",
    title: "Everything Is F*cked: A Book About Hope",
    imageSrc: "@/public/assets/ebooks/ebk4.webp",
    img: ebk4,
    author: "Mark Manson",
    authorPage: "/author/mark-manson",
    ratings: 1103,
    aboutBook: `<em>NEW YORK TIMES BESTSELLER</em>
                From the author of the international mega-bestseller
                The Subtle Art of Not Giving A F*ck comes a
                counterintuitive guide to the problems of hope.`,
    bookSynapsis: `We live in an interesting time. Materially, everything
                  is the best it's ever been—we are freer, healthier and
                  wealthier than any people in human history. Yet, somehow
                  everything seems to be irreparably and horribly
                  f*cked—the planet is warming, governments are failing,
                  economies are collapsing, and everyone is perpetually
                  offended on Twitter. At this moment in history, when we
                  have access to technology, education and communication
                  our ancestors couldn't even dream of, so many of us come
                  back to an overriding feeling of hopelessness. What's
                  going on? If anyone can put a name to our current
                  malaise and help fix it, it's Mark Manson. In 2016,
                  Manson published The Subtle Art of Not Giving A F*ck, a
                  book that brilliantly gave shape to the ever-present,
                  low-level hum of anxiety that permeates modern living.
                  He showed us that technology had made it too easy to
                  care about the wrong things, that our culture had
                  convinced us that the world owed us something when it
                  didn't—and worst of all, that our modern and maddening
                  urge to always find happiness only served to make us
                  unhappier. Instead, the “subtle art” of that title
                  turned out to be a bold challenge: to choose your
                  struggle; to narrow and focus and find the pain you want
                  to sustain. The result was a book that became an
                  international phenomenon, selling millions of copies
                  worldwide while becoming the #1 bestseller in 13
                  different countries.`,
    description:
      "A Book About Hope. A Counterintuitive Approach to Living a Good Life.",
    isbn: 9780718074326,
    releaseDate: "Oct 17, 2001",
    language: "English",
  },
  {
    id: 9,
    type: "eBook",
    title: "The Intelligent Investor: The Definitive Book on Value Investing",
    imageSrc: "@/public/assets/ebooks/ebk5.webp",
    img: ebk5,
    author: "Benjamin Graham",
    authorPage: "/author/benjamin-graham",
    ratings: 1103,
    aboutBook: `<em>New York Times Bestseller</em>
                The Intelligent Investor by Benjamin Graham, first
                published in 1949, is a widely acclaimed book on value
                investing. The book provides strategies on how to
                successfully use value investing in the stock market.
                Historically, the book has been one of the most
                popular books on investing and Graham's legacy remains`,
    bookSynapsis: `The thing that I have been emphasizing in my own work
                for the last few years has been the group approach. To
                try to buy groups of stocks that meet some simple
                criterion for being undervalued -- regardless of the
                industry and with very little attention to the
                individual company... I found the results were very good
                for 50 years. They certainly did twice as well as the
                Dow Jones. And so my enthusiasm has been transferred
                from the selective to the group approach. What I want is
                an earnings ratio twice as good as the bond interest
                ratio typically for most years. One can also apply a
                dividend criterion or an asset value criterion and get
                good results. My research indicates the best results
                come from simple earnings criterions`,
    description:
      "The Definitive Book on Value Investing. A Book of Practical Counsel.",
    isbn: 9780718074326,
    releaseDate: "Oct 17, 2001",
    language: "English",
  },
  {
    id: 10,
    type: "eBook",
    title: "Vanderbilt: The Rise and Fall of an American Dynasty",
    imageSrc: "@/public/assets/ebooks/ebk6.webp",
    img: ebk6,
    author: "Anderson Cooper, Katherine Howe",
    authorPage: "/author/anerson-cooper",
    ratings: 1103,
    aboutBook: `<em>New York Times </em>
                bestselling author and journalist Anderson Cooper
                teams with New York Times bestselling historian and
                novelist Katherine Howe to chronicle the rise and fall
                of a legendary American dynasty—his mother's family,
                the Vanderbilts.`,
    bookSynapsis: `One of the Washington Post's Notable Works of Nonfiction
                  of 2021When eleven-year-old Cornelius Vanderbilt began
                  to work on his father's small boat ferrying supplies in
                  New York Harbor at the beginning of the nineteenth
                  century, no one could have imagined that one day he
                  would, through ruthlessness, cunning, and a pathological
                  desire for money, build two empires—one in shipping and
                  another in railroads—that would make him the richest man
                  in America. His staggering fortune was fought over by
                  his heirs after his death in 1877, sowing familial
                  discord that would never fully heal. Though his son
                  Billy doubled the money left by “the Commodore,”
                  subsequent generations competed to find new and ever
                  more extraordinary ways of spending it. By 2018, when
                  the last Vanderbilt was forced out of The Breakers—the
                  seventy-room summer estate in Newport, Rhode Island,
                  that Cornelius's grandson and namesake had built—the
                  family would have been unrecognizable to the tycoon who
                  started it all.Now, the Commodore's
                  great-great-great-grandson Anderson Cooper, joins with
                  historian Katherine Howe to explore the story of his
                  legendary family and their outsized influence. Cooper
                  and Howe breathe life into the ancestors who built the
                  family's empire, basked in the Commodore's wealth,
                  hosted lavish galas, and became synonymous with
                  unfettered American capitalism and high society.`,
    description:
      "The Rise and Fall of an American Dynasty. A Book of Practical Counsel.",
    isbn: 9780718074326,
    releaseDate: "Oct 17, 2001",
    language: "English",
  },
  {
    id: 11,
    type: "Self Help",
    title: "The Alchemist",
    imageSrc: "@/public/assets/selfHelp/alchemist.jpg",
    img: alchemist,
    author: "Paulo Coelho",
    authorPage: "/author/paulo-coelho",
    ratings: 1103,
    aboutBook: `
      Paulo Coelho, a Brazilian author, originally released his book The 
      Alchemist in 1988. It was initially written in Portuguese, but it 
      has since been widely translated into other languages. The Alchemist 
      is an allegorical book that centres on a young Andalusian shepherd who 
      dreams repeatedly of discovering a treasure at the Egyptian pyramids.
    `,
    bookSynapsis: `
      A recurring dream troubles Santiago, a young and adventurous 
      Andalusian shepherd. He has the dream every time he sleeps under 
      a sycamore tree that grows out of the ruins of a church. During 
      the dream, a child tells him to seek treasure at the foot of the 
      Egyptian pyramids. Santiago consults a gypsy woman to interpret 
      the dream, and to his surprise she tells him to go to Egypt. A 
      strange, magical old man named Melchizedek, who claims to be the 
      King of Salem, echoes the gypsy's advice and tells Santiago that 
      it is his Personal Legend to journey to the pyramids. Melchizedek 
      convinces Santiago to sell his flock and set off to Tangier. When 
      Santiago arrives in Tangier, a thief robs him, forcing him to find 
      work with a local crystal merchant. The conservative and kindly 
      merchant teaches Santiago several lessons, and Santiago encourages 
      the merchant to take risks with his business. The risks pay off, 
      and Santiago becomes a rich man in just a year.
    `,
    description:
      "A Fable About Following Your Dream. A Book of Practical Counsel.",
    isbn: 9780718074326,
    releaseDate: "Oct 17, 2001",
    language: "English",
  },
  {
    id: 12,
    type: "eBook",
    title: "Atomic Habits",
    imageSrc: "@/public/assets/ebooks/ebk8.webp",
    img: ebk8,
    author: "James Clear",
    authorPage: "/author/james-clear",
    ratings: 1103,
    aboutBook: `Atomic Habits by James Clear is a comprehensive,
                practical guide on how to change your habits and get
                1% better every day. Using a framework called the Four
                Laws of Behavior Change, Atomic Habits teaches readers
                a simple set of rules for creating good habits and
                breaking bad ones. An atomic habit is a regular
                practice or routine that is not only small and easy to
                do but is also the source of incredible power; a
                component of the system of compound growth.`,
    bookSynapsis: `"Atomic Habits" by James Clear is a game-changing book
                  that explores the profound impact of our habits on
                  personal and professional success. Clear unravels the
                  underlying mechanisms of habit formation and presents a
                  compelling argument for the significance of small,
                  incremental changes in shaping our behavior. By focusing
                  on the concept of identity-based habits, he encourages
                  readers to align their actions with the type of person
                  they aspire to be. Clear provides practical strategies
                  to make habit formation attractive, easy, and rewarding,
                  emphasizing the importance of tracking progress and
                  maintaining consistency. With engaging stories,
                  practical examples, and actionable advice, "Atomic
                  Habits" empowers individuals to take control of their
                  habits, rewrite their narrative, and unleash their full
                  potential for long-lasting transformation.`,
    description:
      "A Fable About Following Your Dream. A Book of Practical Counsel. A Book of Practical Counsel.",
    isbn: 9780718074326,
    releaseDate: "Oct 17, 2001",
    language: "English",
  },
  {
    id: 13,
    type: "eBook",
    title: "It Starts with Us",
    imageSrc: "@/public/assets/ebooks/ebk7.webp",
    img: ebk7,
    author: "Colleen Hoover",
    authorPage: "/author/coleen-hoover",
    ratings: 1103,
    aboutBook: `"It Starts with Us" by Colleen Hoover is a captivating
                and emotionally charged novel that explores themes of
                love, forgiveness, and the impact of our choices on
                ourselves and those around us. The story follows the
                lives of three interconnected characters, each dealing
                with their own personal struggles and secrets. As
                their lives intertwine, they are faced with difficult
                decisions that have far-reaching consequences. Hoover
                skillfully weaves together a tale of heartache,
                redemption, and the power of human connection.`,
    bookSynapsis: `With her signature blend of compelling storytelling and
                  thought-provoking and compelling read that reminds us of
                  complex characters, "It Starts with Us" is a
                  the profound influence we have on the lives of others
                  and the potential for personal growth and
                  transformation. As the narrative unfolds, readers are
                  drawn deeper into the intricacies of the characters'
                  lives, their relationships, and the hidden truths they
                  must confront. Colleen Hoover's evocative prose and
                  ability to delve into the complexities of human emotions
                  make "It Starts with Us" a compelling and immersive
                  reading experience. The novel tackles themes of love,
                  sacrifice, and the enduring power of hope, urging
                  readers to reflect on their own lives and the impact
                  they can have on shaping the world around them`,
    description:
      "A Fable About Following Your Dream. A Book of Practical Counsel.",
    isbn: 9780718074326,
    releaseDate: "Oct 17, 2001",
    language: "English",
  },
  {
    id: 14,
    type: "Career",
    title: "The Psychology of Money",
    imageSrc: "@/public/assets/career/money.jpeg",
    img: money,
    author: "Morgan Housel",
    authorPage: "/author/morgan-housel",
    ratings: 1103,
    aboutBook: `"The Psychology of Money" by Morgan Housel is an
                enlightening exploration of the complex relationship
                between money and human behavior. Housel delves into
                the psychological and behavioral aspects that drive
                our financial decisions, debunking common
                misconceptions and providing valuable insights.
                Drawing on real-life examples and research, he
                illustrates how our attitudes, biases, and emotions
                shape our financial choices and outcomes.`,
    bookSynapsis: `Housel emphasizes the importance of understanding the
                role of time, risk, and uncertainty in building wealth
                and achieving financial well-being. With a blend of
                storytelling and practical wisdom, "The Psychology of
                Money" offers a fresh perspective on money management,
                encouraging readers to redefine their relationship with
                money and adopt a more thoughtful and balanced approach
                to achieving financial success and happiness.`,
    description: `Money is one of the most powerful tools in our lives. 
                  It is the means by which we buy our food, pay our bills, 
                  and provide for our families. Yet, many of us have a complicated 
                  relationship with money. We may feel guilty about spending it, 
                  anxious about losing it, or resentful when we don't have enough 
                  of it. In this book, Morgan Housel explores the psychology of 
                  money and how our emotions can influence our financial decisions. 
                  He also offers practical advice on how to manage your money better
                  so that you can live a happier life.`,
    isbn: 9780718074326,
    releaseDate: "Oct 17, 2001",
    language: "English",
  },
  {
    id: 15,
    type: "career",
    title: "Think like a Monk",
    imageSrc: "@/public/assets/career/monk.webp",
    img: monk,
    author: "Jay Shetty",
    authorPage: "/author/jay-shetty",
    ratings: 1103,
    aboutBook: `"Think Like a Monk" by Jay Shetty is a transformative
                guide that takes readers on a journey of
                self-discovery and personal growth. Drawing from his
                own experiences as a monk, Shetty shares powerful
                insights and practical wisdom to help readers
                cultivate a monk-like mindset in their everyday lives.
                Through a combination of ancient wisdom and modern-day
                practices, Shetty teaches readers how to overcome
                negative thoughts, find purpose, and create a life of
                fulfillment and inner peace.`,
    bookSynapsis: `In the book, Shetty explores various aspects of monk
                  philosophy, such as mindfulness, gratitude, and service,
                  and demonstrates how these principles can be applied to
                  enhance relationships, navigate challenges, and find
                  clarity amidst the chaos of the modern world. He offers
                  practical exercises and techniques that enable readers
                  to develop resilience, improve focus, and create a life
                  aligned with their values and aspirations. With his
                  relatable storytelling and accessible writing style,
                  Shetty empowers readers to embrace a monk-like mindset
                  characterized by intention, discipline, and
                  self-awareness. "Think Like a Monk" is a compelling
                  invitation to break free from societal pressures,
                  discover one's true purpose, and live a more meaningful
                  and fulfilling life.`,
    description: `In this book, Jay Shetty shares his own journey to a monk`,
    isbn: 9780718074326,
    releaseDate: "Oct 17, 2001",
    language: "English",
  },
  // {
  //   type: "",
  //   title: "",
  //   imageSrc: "",
  //   author: "",
  //   authorPage: "/author/",
  //   ratings: 1103,
  //   aboutBook: ``,
  //   bookSynapsis: ``,
  //   isbn: 9780718074326,
  //   releaseDate: "Oct 17, 2001",
  //   language: "English",
  // },
];

export default Books;
