import React, { useMemo, useState } from "react";

const nav = [
  ["Home", "home"],
  ["Call for Papers", "cfp"],
  ["Submission", "submission"],
  ["Committees", "committees"],
  ["Program", "program"],
  ["Previous Editions", "history"],
];

const importantDates = [
  { label: "Paper Submission", date: "August 31, 2026", note: "Submission deadline" },
  { label: "Camera Ready", date: "September 30, 2026", note: "Final version due" },
  { label: "Workshop Event", date: "November 26, 2026", note: "Workshop day" },
];

const topics = [
  "New design and implementation for cybersecurity in mission-critical mobile networks",
  "Network science for embedding cybersecurity in mission-critical mobile networks",
  "Security and information assurance in mission-critical mobile networks",
  "Foundation models and LLMs for cybersecurity in mission-critical mobile networks",
  "Federated and decentralized learning for cybersecurity in mission-critical mobile networks",
  "Edge intelligence and on-device AI for cybersecurity in mission-critical mobile networks",
  "Cross-layer security architectures and technologies for mission-critical mobile networks",
  "Trustworthy, explainable, and robust AI for mission-critical mobile network security",
  "Game-theoretic security approaches for mission-critical mobile networks",
  "Public key infrastructure, trust, and authentication for mission-critical mobile networks",
  "Lightweight and resource-aware AI for cybersecurity in mobile and edge environments",
  "Blockchain-based security and privacy applications for mission-critical mobile networks",
  "Intrusion detection, prevention, and response for mission-critical mobile networks",
  "Programmable and intent-driven security for software-defined mobile networks",
  "Named Data Networking for cybersecurity in mission-critical mobile networks",
  "Digital twins for AI-driven cybersecurity analysis in mission-critical mobile networks",
  "Cross-layer optimizations for cybersecurity provisioning in mission-critical mobile networks",
  "Knowledge fusion for cybersecurity in mission-critical mobile networks",
  "Multi-agent and distributed systems for cybersecurity in mission-critical mobile networks",
  "Cognitive modelling for cybersecurity provisioning in mission-critical mobile networks",
  "Other smart applications for cybersecurity in mission-critical mobile networks",
];

const organizers = [
  { name: "Sahil Garg", affiliation: "Canadian University Dubai, UAE", email: "sahil.garg@cud.ac.ae" },
  { name: "Ranga Rao Venkatesha Prasad", affiliation: "Delft University of Technology, The Netherlands", email: "r.r.venkateshaprasad@tudelft.nl" },
  { name: "Bong Jun Choi", affiliation: "Soongsil University, South Korea", email: "davidchoi@soongsil.ac.kr" },
];

const tpcCoChairs = [
  { name: "Kuljeet Kaur", affiliation: "École de Technologie Supérieure, Montreal, Canada" },
  { name: "Sherif Moussa", affiliation: "Canadian University Dubai, UAE" },
];

const previousEditions = [
  {
    edition: "1st International Workshop",
    title: "CyberNet: Cyber-Physical Security in Mission-Critical Tactical Networks",
    venue: "IEEE MILCOM 2022",
    location: "National Capital Region, USA",
    date: "28 November – 2 December 2022",
    link: "https://milcom2022.milcom.org/workshop/ws-3-workshop-cyber-physical-security-mission-critical-tactical-networks",
  },
  {
    edition: "2nd International Workshop",
    title: "CyberNet: Next-Gen Cybersecurity for Mission-Critical Networks",
    venue: "IEEE PIMRC 2025",
    location: "Istanbul, Türkiye",
    date: "1–4 September 2025",
    link: "https://pimrc2025.ieee-pimrc.org/workshop/ws-05-cybernet-next-gen-cybersecurity-mission-critical-networks",
  },
];

const programItems = [
  { time: "09:00", title: "Opening Remarks", speaker: "Workshop Organizers", status: "Planned" },
  { time: "09:30", title: "Technical Session I", speaker: "Accepted papers", status: "TBA" },
  { time: "11:00", title: "Invited Talk", speaker: "Speaker to be announced", status: "TBA" },
  { time: "12:00", title: "Lunch Break", speaker: "Conference schedule", status: "Planned" },
  { time: "13:30", title: "Technical Session II", speaker: "Accepted papers", status: "TBA" },
  { time: "15:30", title: "Panel Discussion", speaker: "Researchers and practitioners", status: "TBA" },
  { time: "16:30", title: "Closing Remarks", speaker: "Workshop Organizers", status: "Planned" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeScope, setActiveScope] = useState("motivation");
  const [topicQuery, setTopicQuery] = useState("");
  const [activeProgram, setActiveProgram] = useState("All");
  const [openEdition, setOpenEdition] = useState(0);

  const filteredTopics = useMemo(
    () => topics.filter((topic) => topic.toLowerCase().includes(topicQuery.toLowerCase())),
    [topicQuery]
  );

  const filteredProgram = useMemo(() => {
    if (activeProgram === "All") return programItems;
    if (activeProgram === "Morning") return programItems.filter((item) => Number(item.time.split(":")[0]) < 12);
    if (activeProgram === "Afternoon") return programItems.filter((item) => Number(item.time.split(":")[0]) >= 12);
    return programItems;
  }, [activeProgram]);

  return (
    <div className="site">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <section id="home" className="hero">
          <div className="heroBg">
            <span className="gridOne" />
            <span className="cyberOrb orbOne" />
            <span className="cyberOrb orbTwo" />
            <span className="networkLine lineOne" />
            <span className="networkLine lineTwo" />
            <span className="networkLine lineThree" />
          </div>

          <div className="heroInner">
            <div className="heroText">
              <p className="eyebrow light">3rd International Workshop</p>
              <h1>
                CyberNet: Next-Gen Cybersecurity for <span>Mission-Critical Mobile Networks</span>
              </h1>
              <p className="heroSubtitle">In conjunction with ACM MobiHoc 2026</p>

              <div className="heroMeta">
                <div><strong>Location</strong><span>Tokyo, Japan</span></div>
                <div><strong>Conference Dates</strong><span>23–26 November 2026</span></div>
                <div><strong>Workshop Date</strong><span>November 26, 2026</span></div>
              </div>

              <div className="heroActions">
                <a href="#cfp" className="primaryBtn">View Call for Papers</a>
                <a href="#submission" className="secondaryBtn">Submission Details</a>
              </div>
            </div>

            <div className="heroCard">
              <p>Next Deadline</p>
              <h2>August 31, 2026</h2>
              <span>Paper Submission</span>
              <div className="miniTimeline">
                {importantDates.map((item, index) => (
                  <div key={item.label}>
                    <b>0{index + 1}</b>
                    <span>{item.label}<small>{item.date}</small></span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="statsStrip">
          <div><strong>3rd</strong><span>Workshop Edition</span></div>
          <div><strong>ACM</strong><span>MobiHoc 2026</span></div>
          <div><strong>21+</strong><span>Technical Topics</span></div>
          <div><strong>Tokyo</strong><span>Japan</span></div>
        </section>

        <section id="cfp" className="section">
          <div className="sectionHeader center">
            <p className="eyebrow">Call for Papers</p>
            <h2>CyberNet 2026 Scope</h2>
            <p>
              CyberNet 2026 focuses on next-generation cybersecurity for mission-critical mobile networks,
              covering AI-driven security, mobile systems, wireless networks, edge computing, IoT, and resilient cyber-physical infrastructures.
            </p>
          </div>

          <div className="scopeTabs">
            {["motivation", "challenge", "goal"].map((scope) => (
              <button key={scope} className={activeScope === scope ? "active" : ""} onClick={() => setActiveScope(scope)}>
                {scope === "motivation" ? "Motivation" : scope === "challenge" ? "Challenges" : "Workshop Goal"}
              </button>
            ))}
          </div>

          <div className="scopePanel">
            {activeScope === "motivation" && (
              <>
                <h3>Why CyberNet?</h3>
                <p>Advances in information and communications technology have become essential for critical operations across public safety, defense, transportation, emergency response, industrial systems, and large-scale infrastructure.</p>
                <p>Traditional communication systems are increasingly being complemented or replaced by rapidly deployable mission-critical mobile networks.</p>
              </>
            )}
            {activeScope === "challenge" && (
              <>
                <h3>Cybersecurity in mobile critical systems</h3>
                <p>Mission-critical mobile networks face evolving security threats, heterogeneous IoT integration, intermittent connectivity, strict latency requirements, and resource limitations.</p>
                <p>AI-based cybersecurity methods are promising, but their dependability, robustness, and resilience remain major research challenges in mobile and edge environments.</p>
              </>
            )}
            {activeScope === "goal" && (
              <>
                <h3>Workshop objective</h3>
                <p>CyberNet 2026 aims to provide a focused platform for researchers and practitioners from academia, industry, and government to exchange ideas and develop innovative approaches for cybersecurity in mission-critical mobile networks.</p>
                <p>The workshop emphasizes system-oriented contributions, including prototype implementations, measurement studies, testbeds, deployment experiences, cross-layer security designs, mobile networking protocols, edge orchestration, and software-defined control.</p>
              </>
            )}
          </div>

          <div className="topicSection">
            <div className="topicIntro">
              <p className="eyebrow light">Topics of Interest</p>
              <h3>Searchable Cybersecurity Areas</h3>
              <p>Authors are invited to submit work related to AI-driven cybersecurity, mission-critical systems, mobile networks, edge computing, IoT, and resilient networked infrastructure.</p>
            </div>

            <div className="topicBox">
              <input value={topicQuery} onChange={(e) => setTopicQuery(e.target.value)} placeholder="Search topics, e.g. LLM, edge, IoT, trust..." />
              <div className="topicList">
                {filteredTopics.map((topic) => (
                  <div className="topicItem" key={topic}><span>✓</span><p>{topic}</p></div>
                ))}
                {filteredTopics.length === 0 && <div className="emptyState">No topics matched your search.</div>}
              </div>
            </div>
          </div>
        </section>

        <section id="submission" className="section alt">
          <div className="sectionHeader center">
            <p className="eyebrow">Submission</p>
            <h2>Submission Information</h2>
            <p>Papers should be submitted via the official HotCRP submission website. The submission link will be updated shortly.</p>
          </div>

          <div className="submissionInstructions">
            <h3>Submission Instructions</h3>
            <ul>
              <li>Submissions must report original, previously unpublished research findings.</li>
              <li>Papers should clearly articulate their connection to prior work and their expected contributions to future research directions.</li>
              <li>Manuscripts should be submitted in PDF format following the ACM two-column template, using a 10-point font on US Letter paper (8.5 × 11 inches).</li>
              <li>Technical papers are limited to a maximum of 6 pages, including references.</li>
              <li>Appendices may be included as long as the complete submission does not exceed the six-page limit.</li>
              <li>For single-blind review, submissions must include the names and affiliations of all authors.</li>
              <li>At least one author of each accepted paper is expected to attend the workshop and present the work.</li>
            </ul>
          </div>

          <div className="dateGrid">
            {importantDates.map((item, index) => (
              <div className="dateCard" key={item.label}>
                <div className="dateNumber">0{index + 1}</div>
                <small>{item.note}</small>
                <h3>{item.label}</h3>
                <p>{item.date}</p>
              </div>
            ))}
          </div>

          <div className="submissionPanel">
            <div>
              <p className="eyebrow light">Submission Link</p>
              <h3>HotCRP Submission Portal</h3>
              <p>Papers should be submitted via the HotCRP submission website. The link will be updated shortly.</p>
            </div>
            <a className="submitButton" href="#submission">Link Coming Soon</a>
          </div>
        </section>

        <section id="committees" className="section">
          <div className="sectionHeader center">
            <p className="eyebrow">Committees</p>
            <h2>Workshop Committees</h2>
            <p>CyberNet 2026 is organized by researchers from Canadian University Dubai, Delft University of Technology, and Soongsil University.</p>
          </div>

          <div className="committeeBlock">
            <h3>Workshop Organizers</h3>
            <div className="organizerGrid">
              {organizers.map((person) => (
                <div className="organizerCard" key={person.email}>
                  <div className="avatar">{person.name.split(" ").map((part) => part[0]).join("").slice(0, 2)}</div>
                  <h4>{person.name}</h4>
                  <p>{person.affiliation}</p>
                  <a href={`mailto:${person.email}`}>{person.email}</a>
                </div>
              ))}
            </div>
          </div>

          <div className="committeeBlock">
            <h3>TPC Co-Chairs</h3>
            <div className="simpleCommitteeGrid">
              {tpcCoChairs.map((person) => (
                <div className="simpleCommitteeCard" key={person.name}><h4>{person.name}</h4><p>{person.affiliation}</p></div>
              ))}
            </div>
          </div>

          <div className="committeeBlock">
            <h3>TPC Committee</h3>
            <div className="simpleCommitteeGrid"><div className="simpleCommitteeCard"><h4>To be updated shortly</h4><p>The Technical Program Committee will be announced after final confirmation.</p></div></div>
          </div>
        </section>

        <section id="program" className="section alt">
          <div className="sectionHeader center">
            <p className="eyebrow">Program</p>
            <h2>Workshop Program</h2>
            <p>The detailed program will be announced after paper acceptance and camera-ready submission.</p>
          </div>
          <div className="programControls">
            {["All", "Morning", "Afternoon"].map((item) => (
              <button key={item} className={activeProgram === item ? "active" : ""} onClick={() => setActiveProgram(item)}>{item}</button>
            ))}
          </div>
          <div className="programList">
            {filteredProgram.map((item) => (
              <div className="programItem" key={`${item.time}-${item.title}`}>
                <div className="programTime">{item.time}</div><div><h3>{item.title}</h3><p>{item.speaker}</p></div><span>{item.status}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="history" className="section">
          <div className="sectionHeader center">
            <p className="eyebrow">Previous Editions</p>
            <h2>CyberNet Workshop History</h2>
            <p>CyberNet has previously been organized in conjunction with IEEE MILCOM and IEEE PIMRC.</p>
          </div>
          <div className="historyGrid">
            {previousEditions.map((item, index) => (
              <div className={openEdition === index ? "editionCard open" : "editionCard"} key={item.edition}>
                <button onClick={() => setOpenEdition(openEdition === index ? -1 : index)}><span>{item.edition}</span><b>{openEdition === index ? "−" : "+"}</b></button>
                <div className="editionBody"><h3>{item.title}</h3><p><strong>{item.venue}</strong></p><p>{item.date}</p><p>{item.location}</p><a href={item.link} target="_blank" rel="noreferrer">Visit previous edition</a></div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div><strong>CyberNet 2026</strong><p>3rd International Workshop on CyberNet: Next-Gen Cybersecurity for Mission-Critical Mobile Networks.</p></div>
        <div className="footerLinks">{nav.map(([label, id]) => (<a key={id} href={`#${id}`}>{label}</a>))}</div>
      </footer>
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="navbar">
      <a href="#home" className="brand"><div className="brandMark">CN</div><span><strong>CyberNet 2026</strong><small>ACM MobiHoc Workshop</small></span></a>
      <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen ? "✕" : "☰"}</button>
      <nav className={menuOpen ? "navLinks open" : "navLinks"}>{nav.map(([label, id]) => (<a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>{label}</a>))}</nav>
    </header>
  );
}

export default App;
