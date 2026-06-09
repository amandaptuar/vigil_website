import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './CaseStudy.css';

const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
  </svg>
);
const ClockIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);
const CalendarIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);
const ChevronLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '8px' }}>
    <polyline points="15 18 9 12 15 6"></polyline>
  </svg>
);
const UserIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const caseStudyData = {
  'sextortion': {
    title: "McKenna's Story: Sextortion & Coercion",
    category: 'Sextortion',
    date: 'May 24, 2026',
    author: 'Vigil Safety Team',
    readTime: '7 min read',
    source: 'Source: FBI Video Repository — McKenna\'s Story',
    sourceUrl: 'https://www.fbi.gov/video-repository/mckennas-story/view',
    summary: 'A real story documented by the FBI showing how a teenage girl became a victim of financial sextortion — and how it nearly destroyed her life.',
    checklist: [
      "Never share intimate photos online — even with people you trust",
      "Block and report blackmailers immediately, do not pay",
      "Talk to a trusted adult or parent without fear of judgment",
      "Report to CyberTipline.org or FBI IC3 immediately",
      "Know: paying never stops the demands"
    ],
    content: `
      <div class="cs-realstory-banner">
        <span class="cs-realstory-label">📋 Real Case — Documented by the FBI</span>
      </div>

      <h2>McKenna's Story</h2>
      <p>McKenna was a normal 15-year-old girl from a small American town — active on social media, chatting with friends, living a typical teenage life online. One day, she received a friend request from someone who seemed friendly, her age, and interested in her. The conversation quickly turned personal, and the stranger convinced her to share an intimate photo "just between them."</p>
      <p>Within minutes, the tone changed. The person revealed they had screenshotted the image and threatened to send it to all her followers, her school, and her parents — unless she paid $500 immediately. Then $1,000. Then more.</p>

      <h2>The Spiral of Extortion</h2>
      <p>McKenna felt completely trapped. She was terrified of what her parents would think. She secretly drained her savings account and even borrowed money from friends, making up excuses. But the demands never stopped. Every payment was met with a new threat. The FBI's documentation of McKenna's case highlights a cruel reality: <strong>paying the ransom almost never ends the abuse.</strong></p>
      <p>McKenna's mental health deteriorated rapidly. She stopped sleeping, withdrew from friends and family, and began to spiral into severe depression. It was only when her mother noticed the signs and asked the right questions that McKenna finally broke down and told the truth.</p>

      <h2>The FBI's Response</h2>
      <p>McKenna's parents filed a report with the FBI's Internet Crime Complaint Center (IC3). Investigators traced the account and identified the perpetrator as part of a criminal network operating from overseas — a common pattern in financial sextortion cases targeting US minors. The FBI confirmed that financial sextortion has become one of the fastest-growing online crimes against teenagers, with hundreds of cases reported each week.</p>
      <p>"These criminals don't care about the child," an FBI spokesperson stated in the case video. "They only care about money. And they count on shame and fear to keep victims silent."</p>

      <h2>The Devastating Statistics Behind McKenna's Case</h2>
      <p>McKenna is not alone. The FBI reports that financial sextortion of minors surged dramatically in recent years. The National Center for Missing & Exploited Children (NCMEC) has received tens of thousands of CyberTipline reports related to sextortion. The NCMEC has documented over three dozen cases where teenage boys took their own lives after being victimized by this crime.</p>
      <p>Now, with generative AI tools becoming widely available, predators no longer even need the child to send an image. They can create realistic fake explicit images using publicly posted school photos or social media pictures — then use those as leverage.</p>

      <h2>What Parents Can Do</h2>
      <p>McKenna's mother says her biggest regret is not having an open, judgment-free conversation about online risks before it happened. She now advocates for parents to proactively talk to their children — assuring them that no matter what happens online, they can always come forward without fear of punishment. Early conversation, combined with parental monitoring tools, can dramatically reduce the risk and severity of these situations.</p>
    `
  },
  'gaming-scams': {
    title: 'The V-Bucks Trap: Gaming Scams Targeting Kids',
    category: 'Gaming Fraud',
    date: 'May 22, 2026',
    author: 'Vigil Safety Team',
    readTime: '5 min read',
    source: 'Source: FBI IC3 Report 2025 & NCMEC CyberTipline Data',
    sourceUrl: 'https://www.missingkids.org/blog/2025/spike-in-online-crimes-against-children-a-wake-up-call',
    summary: 'Fraudsters offer fake in-game currency to trick kids into sharing login credentials or parent credit card details — a scam costing US families millions annually.',
    checklist: [
      "Never share passwords or verification codes — even for 'free' rewards",
      "Avoid all third-party offers for free V-Bucks, Robux, or Minecoins",
      "Enable Two-Factor Authentication (2FA) on all gaming accounts",
      "Keep credit cards unlinked from game stores by default",
      "Set up spending alerts on any linked payment method"
    ],
    content: `
      <div class="cs-realstory-banner">
        <span class="cs-realstory-label">📋 Real Case — Composite of FBI IC3 Reported Incidents</span>
      </div>

      <h2>The Free V-Bucks Promise</h2>
      <p>Eleven-year-old Tyler from Ohio was an avid Fortnite player. Like millions of kids, he desperately wanted V-Bucks — the in-game currency — to buy new skins and emotes. One afternoon, a player in a match told him about a website that gave out "10,000 free V-Bucks in minutes." The site looked professional, even showing a counter of how many people had already claimed theirs.</p>
      <p>Tyler entered his Epic Games username and, when prompted, his password. He was then shown a "verification" screen that asked him to complete an offer — which led to entering his mom's credit card number to "confirm his age." Tyler thought nothing of it. Within 24 hours, his family's credit card had $340 in fraudulent charges, his Epic Games account had been hijacked, and all his earned progress had been wiped.</p>

      <h2>The Scale of the Problem</h2>
      <p>Tyler's story is one of thousands. The FBI's Internet Crime Complaint Center received over 13,000 complaints from minors in 2025, with gaming-related fraud accounting for a significant portion of cases involving children under 13. Scammers have industrialized the process — creating hundreds of fake "free currency" websites, running YouTube tutorials showing kids how to get "free" items, and even infiltrating in-game chat to recruit victims.</p>
      <p>In-game economies have real monetary value. The global gaming industry generates over $180 billion annually, and fraudsters have taken notice. Children are uniquely vulnerable: they don't have the same financial literacy or skepticism that adults have developed, and they are highly motivated by in-game social status.</p>

      <h2>Beyond Stolen Credits: Malware and Identity Theft</h2>
      <p>Many of these scam sites don't just steal credentials — they prompt children to download "currency generator" software that is actually spyware. Once installed, this malware can log keystrokes, capture screenshots, and transmit sensitive information including saved passwords, banking details from autofill, and family emails. In several documented cases, a single child's compromised device led to the family's bank accounts being drained.</p>

      <h2>Protecting Young Gamers</h2>
      <p>The FBI and cybersecurity experts recommend that parents sit down with their children and establish a simple rule: <strong>if someone online promises something for free, it is a scam.</strong> Legitimate game publishers like Epic Games and Roblox Corporation never distribute currency through third-party websites. Enable two-factor authentication on every gaming account, never link credit cards without a purchase password, and monitor bank statements weekly for micro-transactions.</p>
    `
  },
  'identity-theft': {
    title: "The Silent Crime: Children's Identity Theft",
    category: 'Identity Theft',
    date: 'May 20, 2026',
    author: 'Vigil Safety Team',
    readTime: '6 min read',
    source: 'Source: FBI IC3 2025 & NCMEC Reports',
    sourceUrl: 'https://www.missingkids.org/blog/2025/spike-in-online-crimes-against-children-a-wake-up-call',
    summary: "Because children have 'clean' credit histories that are rarely monitored, they are 50 times more likely to be targets for long-term identity fraud — often not discovered until they turn 18.",
    checklist: [
      "Proactively freeze your child's credit file at all three bureaus",
      "Monitor for any unsolicited mail arriving in your child's name",
      "Minimize sharing of full name, date of birth, and address online",
      "Run an annual check on your child's Social Security Number",
      "Never share your child's SSN in online forms unless legally required"
    ],
    content: `
      <div class="cs-realstory-banner">
        <span class="cs-realstory-label">📋 Real Case — Documented by FBI & FTC Consumer Reports</span>
      </div>

      <h2>The Crime No One Noticed for 15 Years</h2>
      <p>When 18-year-old Aisha from New Jersey applied for her first student loan, the bank came back with a shocking result: she already had $34,000 in outstanding debt across three credit cards and a personal loan — all opened in her name while she was still in middle school. Someone had been using her Social Security Number since she was 8 years old.</p>
      <p>The fraud had gone completely undetected because no one monitors a child's credit. There were no bills mailed to the house, no declined cards, nothing. By the time Aisha turned 18 and her own financial life was about to begin, a criminal had already spent years destroying it.</p>

      <h2>Why Children Are the Perfect Target</h2>
      <p>Children have what fraudsters call a "clean" SSN — no credit history, no debt, no red flags. Because parents rarely check their child's credit file (most don't even know children can have one), the fraud goes undiscovered for years, sometimes a decade or more. The FBI reports that children are <strong>51 times more likely</strong> to be victims of identity theft than adults.</p>
      <p>Data breaches at schools, pediatric healthcare providers, and children's apps are common entry points. A single breach at a school district can expose tens of thousands of children's Social Security Numbers to the dark web, where they are sold for as little as $1 each. The NCMEC's CyberTipline has also documented cases where children were tricked directly — through online quizzes, fake prize claim forms, and social media challenges — into providing their full names, birthdays, and even partial SSN digits.</p>

      <h2>The Ripple Effect on Young Adults</h2>
      <p>For many victims, like Aisha, the damage surfaces precisely when it is most harmful — at the start of adult life, when they need credit for college, a car, or their first apartment. Clearing fraudulent debt from a child's identity can take years of legal battles, cost thousands of dollars in legal fees, and cause enormous emotional distress.</p>

      <h2>How to Protect Your Child's Financial Future</h2>
      <p>The FTC and FBI recommend that all parents place a <strong>security freeze</strong> on their child's credit file at Equifax, Experian, and TransUnion. This is free and prevents anyone from opening new credit in the child's name. Additionally, parents should regularly search their child's name in combination with their address in data broker databases and request removal of any listings found.</p>
    `
  },
  'cyber-kidnapping': {
    title: "Kai Zhuang: The $80,000 Cyber Kidnapping",
    category: 'Cyber Kidnapping',
    date: 'May 18, 2026',
    author: 'Vigil Safety Team',
    readTime: '7 min read',
    source: 'Source: BBC News — Kai Zhuang Case (Jan 2024)',
    sourceUrl: 'https://www.bbc.com/news/world-us-canada-67869517',
    summary: "A 17-year-old Chinese exchange student was found alone and terrified in a tent in rural Utah after scammers coerced him into staging his own kidnapping — extorting $80,000 from his family in China.",
    checklist: [
      "Establish a family secret word/phrase for emergencies",
      "Always independently verify a loved one's location before taking action",
      "Never isolate yourself under a stranger's request — tell a trusted adult",
      "Contact the FBI IC3 immediately if threatened",
      "Do not pay ransom before calling law enforcement"
    ],
    content: `
      <div class="cs-realstory-banner">
        <span class="cs-realstory-label">📋 Real Case — Reported by BBC News, January 2024 (Utah, USA)</span>
      </div>

      <h2>Found Alone in the Wilderness</h2>
      <p>On a cold January morning in rural Utah, police officers found 17-year-old Kai Zhuang huddled inside a tent, shivering and terrified. He had been living alone in the wilderness for days. His high school in Utah had reported him missing after he stopped attending classes. But Kai wasn't missing — he had been manipulated into hiding there by online scammers halfway around the world.</p>
      <p>Kai was a Chinese foreign exchange student studying in the United States. Scammers had begun contacting him weeks earlier, posing as Chinese law enforcement officials. They told Kai he was implicated in a financial crime investigation in China and that his family was in danger. To "protect" his family, they told him he needed to completely cut off contact with everyone, travel to a remote location, and follow their instructions precisely.</p>

      <h2>The Staged Abduction</h2>
      <p>Once Kai was isolated in the Utah wilderness with camping equipment he'd bought himself, the scammers instructed him to take photographs of himself that made it look as though he had been kidnapped — bound, scared, alone. These photos were then sent to Kai's family in China, along with a ransom demand.</p>
      <p>His family, thousands of miles away and with no way to quickly verify his safety, were terrified. They paid <strong>$80,000 USD</strong> to the scammers, believing it was the only way to save their son. The entire time, Kai was voluntarily (though unknowingly) complicit — completely unaware that his own actions were being used to extort his parents.</p>

      <h2>A Growing International Crime Pattern</h2>
      <p>The BBC reported that cybersecurity expert Joseph Steinberg confirmed this is not an isolated case. Chinese foreign exchange students in the USA, Canada, and Australia have all been targeted in similar schemes. The criminals exploit the distance between student and family, the cultural pressure to protect family honor, and the fear of authority figures.</p>
      <p>Dr. Marie-Helen Maras of the Center for Cybercrime Studies at John Jay College explained: <em>"They will do anything to keep you on the phone. They'll threaten to cause harm if you hang up or if you try to contact anyone — to frighten their targets into making rushed decisions."</em> Scammers also use technology to spoof phone numbers, making calls appear to come from official Chinese government agencies.</p>

      <h2>The Role of AI in Future Kidnapping Scams</h2>
      <p>Experts warn the threat is evolving. AI voice cloning technology now allows scammers to replicate a family member's voice from just a few seconds of audio pulled from social media. Future cyber kidnapping schemes may involve parents hearing what sounds exactly like their child's voice in distress — making these already terrifying scams even harder to identify and resist.</p>

      <h2>Prevention: The "Safe Word" Strategy</h2>
      <p>Law enforcement agencies worldwide now recommend that all families — especially those with children studying or traveling abroad — establish a secret "safe word." This is a pre-agreed word or phrase that, when spoken or texted, confirms the person is safe and speaking freely. Criminals would not know this word. If a family member cannot produce the safe word, treat any emergency claim with extreme suspicion and contact local law enforcement immediately before taking any action.</p>
    `
  },
  'social-media-deception': {
    title: "Targeted Online: The NCMEC Mother's Account",
    category: 'Social Media Risks',
    date: 'May 15, 2026',
    author: 'Vigil Safety Team',
    readTime: '6 min read',
    source: 'Source: NCMEC CyberTipline Report 2025 & eSafety Commissioner Stories',
    sourceUrl: 'https://www.missingkids.org/blog/2025/spike-in-online-crimes-against-children-a-wake-up-call',
    summary: "A mother describes how violent online predators infiltrated her daughter's world through gaming platforms, ultimately coercing self-harm — a documented case from the NCMEC's CyberTipline.",
    checklist: [
      "Set all social profiles to strictly private — review regularly",
      "Do not accept unknown friend requests on any platform",
      "Have open, judgment-free conversations about who your child talks to online",
      "Monitor platforms like Discord, Roblox, and gaming chat for unknown contacts",
      "Know the warning signs: withdrawal, secrecy, unexplained distress"
    ],
    content: `
      <div class="cs-realstory-banner">
        <span class="cs-realstory-label">📋 Real Case — Documented by NCMEC CyberTipline, 2025</span>
      </div>

      <h2>"Just the power they have over my daughter is mind blowing"</h2>
      <p>These were the words of a desperate mother who reached out to the National Center for Missing & Exploited Children (NCMEC) after discovering that her teenage daughter had been targeted by a violent online exploitation group. The case, documented in NCMEC's landmark mid-year 2025 report, illustrates a new and deeply disturbing category of online predation.</p>
      <p>Her daughter had been playing on a publicly accessible gaming platform — one of the popular ones teenagers use every day — when a group of users began chatting with her. They seemed friendly at first. Over weeks, they built what felt to the girl like a genuine online friendship. They knew her username, her interests, her schedule. They made her feel understood and accepted.</p>

      <h2>The Moment Everything Changed</h2>
      <p>Then the demands began. The group — which the NCMEC identified as part of a pattern of "sadistic online exploitation" networks — instructed the girl to cut the group's screen name into her arm with a razor blade. They told her it would "prove her loyalty." When she did it and showed them, they responded: <em>"You're a good girl. We love you."</em> Her response — <em>"I love you, too"</em> — horrified her mother when she later saw the chat logs.</p>
      <p>"These guys are very scary," the mother told NCMEC. "Please help us." Her daughter was not being groomed for sex — she was being groomed for psychological control and violence, which NCMEC has identified as a new and rapidly growing threat category.</p>

      <h2>The Alarming Scale: NCMEC's 2025 Data</h2>
      <p>The NCMEC released unprecedented mid-year statistics for 2025, revealing the scale of this crisis. Online enticement reports to the CyberTipline <strong>jumped from 292,951 in the first half of 2024 to 518,720 in the same period of 2025</strong> — a near doubling in just one year. Financial sextortion reports rose from 13,842 to 23,593 in the same timeframe.</p>
      <p>Most shockingly, reports involving generative AI used in child sexual exploitation soared from just 6,835 to <strong>440,419</strong> — a staggering 6,340% increase. Predators are now using AI to create explicit images from children's school photos and social media posts, then using those images as blackmail material without the child ever having sent anything inappropriate.</p>

      <h2>How These Groups Operate</h2>
      <p>John Shehan, Senior Vice President of NCMEC's Exploited Children Division, stated: <em>"These statistics are not just numbers — they represent children experiencing unthinkable harm. We need parents, caregivers, educators and communities to stay alert and talk openly with children about online risks."</em></p>
      <p>These groups — operating on Discord, Roblox, gaming sites, and other publicly available messaging platforms — are sophisticated. They identify vulnerable children, build trust over weeks or months, and then exploit that emotional connection to coerce increasingly harmful acts. They use a cult-like reward system of praise and "love" to reinforce compliance.</p>

      <h2>What Every Parent Must Know</h2>
      <p>The mother's case is a reminder that online danger does not always look the way we expect. It doesn't always start with explicit content requests. It can start with friendship, praise, and belonging — the exact things teenagers are searching for. Parents are advised to check in regularly about who their child speaks to online, monitor for sudden behavioral changes, and create a home environment where a child feels safe disclosing uncomfortable situations without fear of their devices being taken away as punishment.</p>
    `
  }
};

function CaseStudySingle() {
  const { id } = useParams();
  const study = caseStudyData[id];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!study) {
    return (
      <div className="casestudy-modern-wrapper" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', backgroundColor: '#FFFFFF' }}>
        <h2 className="cs-headline-40" style={{ color: '#111827' }}>Case study not found.</h2>
        <Link to="/casestudy" className="cs-btn-primary" style={{ marginTop: '20px' }}>Go Back</Link>
      </div>
    );
  }

  return (
    <div className="casestudy-modern-wrapper" style={{ backgroundColor: '#FFFFFF' }}>
      <Helmet>
        <title>{study.title} | Vigil Case Studies</title>
        <meta name="description" content={study.summary} />
      </Helmet>

      {/* HERO SECTION */}
      <section className="cs-single-hero">
        <div className="container-fluid px-4 px-xl-5" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <nav className="cs-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/casestudy">Case Studies</Link>
              <span>›</span>
              <span style={{ color: '#6B7280' }}>{study.title}</span>
            </nav>
            <span className="cs-hero-badge">{study.category}</span>
            <h1 className="cs-headline-64" style={{ marginBottom: '20px', fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800 }}>
              {study.title}
            </h1>
            <div className="cs-single-meta">
              <div className="cs-meta-item"><UserIcon /><span>By {study.author}</span></div>
              <div className="cs-meta-item"><CalendarIcon /><span>{study.date}</span></div>
              <div className="cs-meta-item"><ClockIcon /><span>{study.readTime}</span></div>
            </div>
            {study.sourceUrl && (
              <div style={{ marginTop: '16px' }}>
                <a href={study.sourceUrl} target="_blank" rel="noopener noreferrer" className="cs-source-link">
                  🔗 {study.source}
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="cs-split-section" style={{ padding: '60px 0 100px' }}>
        <div className="container-fluid px-4 px-xl-5">
          <div className="cs-split-layout" style={{ maxWidth: '1200px', margin: '0 auto' }}>

            {/* Left Column */}
            <div className="cs-split-image-col">
              <div className="cs-detail-image-wrapper">
                <img
                  src="/demotxts/casestudyherobg.png"
                  alt={study.title}
                  className="cs-detail-image"
                />
              </div>

              {study.checklist && (
                <div className="cs-sidebar-card">
                  <h4 className="cs-sidebar-title">
                    <ShieldIcon /> Key Prevention Tips
                  </h4>
                  <ul className="cs-sidebar-list">
                    {study.checklist.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid #E5E7EB' }}>
                    <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#111827', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ color: '#EF4444' }}>●</span> How to Report This Threat
                    </h5>
                    <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: '1.5', margin: 0 }}>
                      If you or your child are targeted, file a report at{' '}
                      <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#4F46E5', fontWeight: 600, textDecoration: 'underline' }}>cybertipline.org</a>{' '}
                      or contact the <strong>NCMEC hotline</strong> at <strong>1-800-843-5678</strong>.
                    </p>
                  </div>

                  <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #E5E7EB' }}>
                    <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>
                      How Vigil Protects
                    </h5>
                    <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: '1.5', margin: 0 }}>
                      Vigil's AI scans for grooming attempts, suspicious media transfers, and coercive language patterns — notifying parents immediately through real-time push alerts.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div className="cs-split-content-col">
              <div className="cs-single-content" dangerouslySetInnerHTML={{ __html: study.content }}></div>
              <Link to="/casestudy" className="cs-back-btn">
                <ChevronLeftIcon /> Back to Case Studies
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default CaseStudySingle;
