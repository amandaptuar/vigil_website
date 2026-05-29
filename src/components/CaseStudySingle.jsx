import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './CaseStudy.css';

// SVG Icons
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
    title: 'Sextortion & Coercion',
    category: 'Sextortion',
    date: 'May 24, 2026',
    author: 'Vigil Safety Team',
    readTime: '6 min read',
    summary: 'A critical rising trend where predators threaten to release explicit images unless the victim sends money or more content.',
    checklist: [
      "Never share intimate photos online",
      "Block and report blackmailers immediately",
      "Talk to a trusted adult or parent",
      "Report to CyberTipline.org"
    ],
    content: `
      <h2>The Rise of Financial Sextortion</h2>
      <p>Financial sextortion is a growing crisis. Offenders often use fake social media accounts to convince their targets, mostly teenage boys, to send them sexually explicit images, then immediately begin demanding money. They threaten to post their images on the internet if they don't comply. There have been devastating consequences, including teens taking their own lives as a result of being victimized by this crime.</p>
      
      <h2>Generative AI and Coercion</h2>
      <p>With the increasing use of generative artificial intelligence (GAI) to create content, enticement is not always necessary. Offenders are increasingly using GAI tools to create explicit images using the child's face from public social media or school postings, then blackmail them. Furthermore, sadistic online exploitation is emerging, where violent groups target kids on messaging platforms, befriend them, and force them to record or live stream acts of harm.</p>
      
      <h2>What Parents Can Do</h2>
      <p>Parents need to talk openly with their children about online risks, monitor the apps they use, and assure them that if they ever make a mistake or feel threatened, they can come forward without fear of punishment. Utilizing parental control tools and reporting suspicious activity to authorities is critical in combating this rising threat.</p>
    `
  },
  'gaming-scams': {
    title: 'Gaming Scams',
    category: 'Gaming Fraud',
    date: 'May 22, 2026',
    author: 'Vigil Safety Team',
    readTime: '5 min read',
    summary: 'Fraudsters offer fake in-game currency (e.g., free V-Bucks or Robux) to trick kids into sharing login credentials or parent credit card details.',
    checklist: [
      "Never share passwords or verification codes",
      "Avoid offers for 'free' V-Bucks or Robux",
      "Enable Two-Factor Authentication (2FA)",
      "Keep credit cards unlinked from game stores"
    ],
    content: `
      <h2>Exploiting In-Game Economies</h2>
      <p>Online gaming is more popular than ever among children, but scammers have turned these virtual playgrounds into hunting grounds. By promising free in-game currency like V-Bucks, Robux, or Minecoins, fraudsters lure young players into clicking malicious links or downloading third-party software.</p>
      
      <h2>The True Cost of "Free" Currency</h2>
      <p>Once a child falls for the trap, they are often prompted to enter their login credentials or their parents' credit card information. This can lead to hijacked accounts, stolen personal data, and unauthorized financial charges. In some cases, scammers also install malware on the device to track keystrokes and gather even more sensitive information.</p>
      
      <h2>Protecting Young Gamers</h2>
      <p>Educate children that if an offer for free currency seems too good to be true, it likely is. Enable two-factor authentication on all gaming accounts, never link credit cards directly without requiring a password for purchases, and closely monitor bank statements for any suspicious micro-transactions.</p>
    `
  },
  'identity-theft': {
    title: 'Identity Theft',
    category: 'Identity Theft',
    date: 'May 20, 2026',
    author: 'Vigil Safety Team',
    readTime: '5 min read',
    summary: 'Because children have "clean" credit histories and their credit is rarely monitored, they are 50 times more likely to be targets for long-term identity fraud.',
    checklist: [
      "Freeze your child's credit file proactively",
      "Monitor for unsolicited mail in child's name",
      "Minimise sharing of full name/DOB online",
      "Run annual checks on your child's SSN"
    ],
    content: `
      <h2>The Invisible Crime</h2>
      <p>Children are prime targets for identity theft because their Social Security numbers have no credit history. Fraudsters can use these "clean" numbers to open credit card accounts, apply for loans, or even secure employment. The crime often goes undetected for years, usually until the child applies for student loans or a first car loan.</p>
      
      <h2>How Scammers Access Data</h2>
      <p>Scammers exploit children's active digital presence, tricking them into revealing personal information through quizzes, online forms, or fake social media interactions. Additionally, data breaches at schools or pediatricians' offices can expose hundreds of children's identities to the dark web.</p>
      
      <h2>Safeguarding Your Child's Future</h2>
      <p>Parents should check to see if their child has a credit report (they shouldn't, unless someone is using their identity) and consider placing a freeze on their child's credit file. Additionally, minimize the amount of personal information shared online and teach children to never give out their full name, birthdate, or Social Security number.</p>
    `
  },
  'cyber-kidnapping': {
    title: 'Cyber Kidnapping',
    category: 'Cyber Kidnapping',
    date: 'May 18, 2026',
    author: 'Vigil Safety Team',
    readTime: '7 min read',
    summary: 'A sophisticated scam where perpetrators convince a child to isolate themselves and then send fake ransom demands and photos to parents.',
    checklist: [
      "Establish a family secret word/phrase",
      "Always verify whereabouts of family members",
      "Never isolate yourself under a stranger's request",
      "Call police/FBI immediately if threatened"
    ],
    content: `
      <h2>The Mechanics of Cyber Kidnapping</h2>
      <p>Cyber kidnapping is a terrifying and growing crime trend. Scammers manipulate a victim—often an exchange student or young adult—into believing they or their family are in danger. The victim is coerced into isolating themselves in a remote location and taking photos or videos that make it look like they are being held captive.</p>
      
      <h2>Extorting the Family</h2>
      <p>While the victim is isolated and instructed not to contact anyone, the scammers send the staged photos to the victim's family, demanding a hefty ransom. They use fear and urgency to prevent the family from verifying the situation with authorities. Because the scammers can use technology to spoof phone numbers, the threat appears incredibly real.</p>
      
      <h2>Prevention and Response</h2>
      <p>Awareness is the first line of defense. Families should establish a secret "safe word" that can be used to verify identities in emergency situations. If you receive a ransom demand, try to reach the loved one independently, do not pay the ransom immediately, and contact law enforcement or the FBI right away.</p>
    `
  },
  'social-media-deception': {
    title: 'Social Media Deception',
    category: 'Social Media Risks',
    date: 'May 15, 2026',
    author: 'Vigil Safety Team',
    readTime: '6 min read',
    summary: 'Scammers use fake friend requests or AI-cloned voices to impersonate peers or relatives, often leading to phishing or financial extortion.',
    checklist: [
      "Set social profiles to strictly private",
      "Don't accept unknown friend requests",
      "Verify caller identity before sending funds",
      "Be cautious of urgent, unexpected voice calls"
    ],
    content: `
      <h2>The Art of Impersonation</h2>
      <p>Social media is a common hunting ground for scammers who use fake profiles to befriend children and teens. They may impersonate a classmate, a favorite influencer, or even a relative. Once trust is established, the scammer manipulates the child into sharing private information, clicking on phishing links, or transferring money.</p>
      
      <h2>The Rise of AI Voice Cloning</h2>
      <p>Technology has made deception even more sophisticated. Scammers are now using AI to clone voices based on short audio clips pulled from public social media posts. They can then call a child or a grandparent, sounding exactly like a loved one in distress, to urgently demand money for a fake emergency.</p>
      
      <h2>Staying Safe on Social Networks</h2>
      <p>Encourage children to set their profiles to private and only accept friend requests from people they know in real life. Advise them to verify any unusual requests for money or information, even if it seems to come from a friend. If a phone call sounds urgent or suspicious, hang up and call the person back directly on their known number.</p>
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
            
            {/* Breadcrumb */}
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
            
            {/* Metadata */}
            <div className="cs-single-meta">
              <div className="cs-meta-item">
                <UserIcon />
                <span>By {study.author}</span>
              </div>
              <div className="cs-meta-item">
                <CalendarIcon />
                <span>{study.date}</span>
              </div>
              <div className="cs-meta-item">
                <ClockIcon />
                <span>{study.readTime}</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="cs-split-section" style={{ padding: '60px 0 100px' }}>
        <div className="container-fluid px-4 px-xl-5">
          <div className="cs-split-layout" style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Left Column (Sticky Image & Sidebar) */}
            <div className="cs-split-image-col">
              <div className="cs-detail-image-wrapper">
                <img 
                  src="/demotxts/casestudyherobg.png" 
                  alt={study.title} 
                  className="cs-detail-image"
                />
              </div>

              {/* Sidebar Checklist */}
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
                      If you or your child are targeted by this scam, file a report immediately at <a href="https://report.cybertip.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#4F46E5', fontWeight: 600, textDecoration: 'underline' }}>cybertipline.org</a> or contact the <strong>NCMEC hotline</strong> at <strong>1-800-843-5678</strong>.
                    </p>
                  </div>

                  <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #E5E7EB' }}>
                    <h5 style={{ fontSize: '15px', fontWeight: '700', color: '#111827', marginBottom: '10px' }}>
                      How Vigil Protects
                    </h5>
                    <p style={{ fontSize: '13px', color: '#4B5563', lineHeight: '1.5', margin: 0 }}>
                      Vigil's AI scans for grooming attempts, suspicious media transfers, and spoofed contact numbers, notifying parents immediately through active push alerts.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column (Content) */}
            <div className="cs-split-content-col">
              <div className="cs-single-content" dangerouslySetInnerHTML={{ __html: study.content }}>
              </div>
              
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
