import React, { useMemo, useState } from "react";
import {
  ShieldCheck,
  Network,
  Cpu,
  Radio,
  LockKeyhole,
  CalendarDays,
  MapPin,
  FileText,
  Menu,
  X,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

const nav = [
  ["Home", "home"],
  ["Scope", "scope"],
  ["Topics", "topics"],
  ["Submission", "submission"],
  ["Committees", "committees"],
  ["Program", "program"],
  ["History", "history"],
];

const dates = [
  ["Paper Submission", "August 31, 2026", "Deadline"],
  ["Camera Ready", "September 30, 2026", "Final version"],
  ["Workshop Event", "November 26, 2026", "Tokyo, Japan"],
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
  ["Sahil Garg", "Canadian University Dubai, UAE", "sahil.garg@cud.ac.ae"],
  [
    "Ranga Rao Venkatesha Prasad",
    "Delft University of Technology, The Netherlands",
    "r.r.venkateshaprasad@tudelft.nl",
  ],
  ["Bong Jun Choi", "Soongsil University, South Korea", "davidchoi@soongsil.ac.kr"],
];

const coChairs = [
  ["Kuljeet Kaur", "École de Technologie Supérieure, Montreal, Canada"],
  ["Sherif Moussa", "Canadian University Dubai, UAE"],
];

const webTeam = [
  ["Nathan Kahsay", "Web Coordinator", "Canadian University Dubai, UAE"],
];

const editions = [
  {
    title:
      "CyberNet: Cyber-Physical Security in Mission-Critical Tactical Networks",
    venue: "IEEE MILCOM 2022",
    date: "28 November – 2 December 2022",
    place: "National Capital Region, USA",
    link:
      "https://milcom2022.milcom.org/workshop/ws-3-workshop-cyber-physical-security-mission-critical-tactical-networks",
  },
  {
    title: "CyberNet: Next-Gen Cybersecurity for Mission-Critical Networks",
    venue: "IEEE PIMRC 2025",
    date: "1–4 September 2025",
    place: "Istanbul, Türkiye",
    link:
      "https://pimrc2025.ieee-pimrc.org/workshop/ws-05-cybernet-next-gen-cybersecurity-mission-critical-networks",
  },
];

const program = [
  ["09:00", "Opening Remarks", "Workshop Organizers"],
  ["09:30", "Technical Session I", "Accepted papers"],
  ["11:00", "Invited Talk", "Speaker to be announced"],
  ["12:00", "Lunch Break", "Conference schedule"],
  ["13:30", "Technical Session II", "Accepted papers"],
  ["15:30", "Panel Discussion", "Researchers and practitioners"],
  ["16:30", "Closing Remarks", "Workshop Organizers"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [openEdition, setOpenEdition] = useState(0);

  const filteredTopics = useMemo(
    () =>
      topics.filter((topic) =>
        topic.toLowerCase().includes(query.toLowerCase())
      ),
    [query]
  );

  return (
    <div className="site">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <section id="home" className="hero">
          <div className="heroGrid" />
          <div className="scan scanA" />
          <div className="scan scanB" />

          <div className="heroShell">
            <div className="heroLeft">
              <div className="statusPill">
                <span />
                3rd International Workshop · ACM MobiHoc 2026
              </div>

              <h1>
                CyberNet:
                <br />
                Next-Gen Cybersecurity for
                <em> Mission-Critical Mobile Networks</em>
              </h1>

              <p className="heroLead">
                A focused workshop on trustworthy AI, resilient mobile systems,
                edge security, IoT protection, and mission-critical network
                defense.
              </p>

              <div className="heroFacts">
                <Fact icon={<MapPin />} label="Location" value="Tokyo, Japan" />
                <Fact
                  icon={<CalendarDays />}
                  label="Dates"
                  value="23–26 November 2026"
                />
                <Fact
                  icon={<ShieldCheck />}
                  label="Workshop"
                  value="November 26, 2026"
                />
              </div>

              <div className="heroButtons">
                <a className="primaryBtn" href="#submission">
                  Submission Details
                </a>
                <a className="ghostBtn" href="#topics">
                  Explore Topics
                </a>
              </div>
            </div>

            <div className="commandCard">
              <div className="terminalTop">
                <span />
                <span />
                <span />
              </div>

              <p className="terminalLabel">CYBERNET_STATUS</p>

              <h2>Call for Papers</h2>

              <div className="deadlineBox">
                <small>Next Deadline</small>
                <strong>August 31, 2026</strong>
                <span>Workshop paper submission</span>
              </div>

              <div className="terminalRows">
                {dates.map(([name, date, tag]) => (
                  <div key={name}>
                    <b>{tag}</b>
                    <span>{name}</span>
                    <strong>{date}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="metricStrip">
          <Metric number="3rd" label="International Workshop" />
          <Metric number="ACM" label="MobiHoc 2026" />
          <Metric number="21+" label="Research Topics" />
          <Metric number="Tokyo" label="Japan" />
        </section>

        <section id="scope" className="section">
          <SectionHeader
            eyebrow="Workshop Scope"
            title="Security for the next generation of mobile critical infrastructure"
            text="CyberNet 2026 addresses the cybersecurity challenges of rapidly deployable, dependable, mobile, edge-enabled, and mission-critical networks."
          />

          <div className="scopeGrid">
            <Feature
              icon={<Radio />}
              title="Mission-critical connectivity"
              text="Rapidly deployable networks support situational awareness, autonomous systems, video-based communication, and remote-controlled devices."
            />
            <Feature
              icon={<Cpu />}
              title="Edge intelligence"
              text="Edge computing delivers compute, caching, sensing, control, and IoT services near mission-critical operations."
            />
            <Feature
              icon={<LockKeyhole />}
              title="Trustworthy AI security"
              text="AI-based security must become dependable, robust, resilient, explainable, and resistant to adversarial and backdoor attacks."
            />
            <Feature
              icon={<Network />}
              title="System-aware defenses"
              text="The workshop prioritizes prototypes, testbeds, measurement studies, deployment experiences, and cross-layer security designs."
            />
          </div>

          <div className="objectivePanel">
            <div>
              <p className="eyebrow">Objective</p>
              <h3>Focused platform for academia, industry, and government</h3>
            </div>

            <p>
              CyberNet 2026 brings together researchers and practitioners to
              exchange ideas and develop innovative approaches spanning mobile
              systems, wireless networks, edge computing, large-scale IoT
              environments, and mission-critical cybersecurity.
            </p>
          </div>
        </section>

        <section id="topics" className="section darkSection">
          <SectionHeader
            eyebrow="Topics of Interest"
            title="Search the technical scope"
            text="CyberNet welcomes system-oriented contributions across AI security, mobile networking, IoT, edge orchestration, authentication, resilience, and software-defined control."
            light
          />

          <div className="topicSearch">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search: LLM, IoT, edge, blockchain, intrusion, trust..."
            />
          </div>

          <div className="topicGrid">
            {filteredTopics.map((topic) => (
              <article key={topic} className="topicCard">
                <ShieldCheck />
                <p>{topic}</p>
              </article>
            ))}
          </div>

          {filteredTopics.length === 0 && (
            <p className="empty">No topics matched your search.</p>
          )}
        </section>

        <section id="submission" className="section">
          <SectionHeader
            eyebrow="Submission"
            title="Submission Information"
            text="Papers should be submitted via the HotCRP submission website. The submission link will be updated shortly."
          />

          <div className="submissionLayout">
            <div className="instructionCard">
              <FileText />

              <h3>Submission Instructions</h3>

              <ul>
                <li>
                  Submissions must report original, previously unpublished
                  research findings.
                </li>
                <li>
                  Papers should clearly articulate their connection to prior work
                  and their expected contributions to future research directions.
                </li>
                <li>
                  Manuscripts should be submitted in PDF format following the
                  ACM two-column template, using a 10-point font on US Letter
                  paper (8.5 × 11 inches).
                </li>
                <li>
                  Technical papers are limited to a maximum of 6 pages, including
                  references.
                </li>
                <li>
                  Appendices may be included as long as the complete submission
                  does not exceed the six-page limit.
                </li>
                <li>
                  For single-blind review, submissions must include the names
                  and affiliations of all authors.
                </li>
                <li>
                  At least one author of each accepted paper is expected to
                  attend the workshop and present the work.
                </li>
              </ul>
            </div>

            <div className="dateStack">
              {dates.map(([name, date, tag], index) => (
                <div className="dateCard" key={name}>
                  <span>0{index + 1}</span>
                  <small>{tag}</small>
                  <h3>{name}</h3>
                  <p>{date}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="submissionBanner">
            <div>
              <p className="eyebrow light">Submission Link</p>
              <h3>HotCRP Submission Portal</h3>
              <p>The HotCRP submission link will be updated shortly.</p>
            </div>

            <a href="#submission">Link Coming Soon</a>
          </div>
        </section>

        <section id="committees" className="section muted">
          <SectionHeader
            eyebrow="Committees"
            title="Workshop Committees"
            text="CyberNet 2026 is organized by researchers from Canadian University Dubai, Delft University of Technology, and Soongsil University."
          />

          <h3 className="blockTitle">Workshop Organizers</h3>

          <div className="peopleGrid">
            {organizers.map(([name, affiliation, email]) => (
              <Person
                key={email}
                name={name}
                affiliation={affiliation}
                email={email}
              />
            ))}
          </div>

          <h3 className="blockTitle">TPC Co-Chairs</h3>

          <div className="peopleGrid two">
            {coChairs.map(([name, affiliation]) => (
              <Person key={name} name={name} affiliation={affiliation} />
            ))}
          </div>

          <h3 className="blockTitle">Web Coordination</h3>

          <div className="peopleGrid two">
            {webTeam.map(([name, role, email]) => (
              <Person
                key={email}
                name={name}
                affiliation={`${role} · ${email}`}
              />
            ))}
          </div>

          <h3 className="blockTitle">TPC Committee</h3>

          <div className="noticeCard">
            The Technical Program Committee will be updated shortly.
          </div>
        </section>

        <section id="program" className="section">
          <SectionHeader
            eyebrow="Program"
            title="Workshop Program"
            text="The detailed technical program will be announced after acceptance and camera-ready submission."
          />

          <div className="programList">
            {program.map(([time, title, speaker]) => (
              <div className="programItem" key={`${time}-${title}`}>
                <time>{time}</time>

                <div>
                  <h3>{title}</h3>
                  <p>{speaker}</p>
                </div>

                <span>TBA</span>
              </div>
            ))}
          </div>
        </section>

        <section id="history" className="section darkSection">
          <SectionHeader
            eyebrow="Previous Editions"
            title="CyberNet workshop history"
            text="CyberNet has previously been organized with IEEE MILCOM and IEEE PIMRC."
            light
          />

          <div className="editionGrid">
            {editions.map((item, index) => (
              <article className="editionCard" key={item.title}>
                <button
                  onClick={() =>
                    setOpenEdition(openEdition === index ? -1 : index)
                  }
                >
                  <span>{item.venue}</span>
                  <ChevronDown
                    className={openEdition === index ? "rotate" : ""}
                  />
                </button>

                {openEdition === index && (
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.date}</p>
                    <p>{item.place}</p>

                    <a href={item.link} target="_blank" rel="noreferrer">
                      Visit previous edition <ExternalLink />
                    </a>
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <strong>CyberNet 2026</strong>
          <p>Next-Gen Cybersecurity for Mission-Critical Mobile Networks.</p>
        </div>

        <div>
          {nav.map(([label, id]) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}

function Header({ menuOpen, setMenuOpen }) {
  return (
    <header className="navbar">
      <a className="brand" href="#home">
        <span className="brandIcon">
          <ShieldCheck />
        </span>

        <span>
          <strong>CyberNet 2026</strong>
          <small>ACM MobiHoc Workshop</small>
        </span>
      </a>

      <button
        className="menuBtn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation"
      >
        {menuOpen ? <X /> : <Menu />}
      </button>

      <nav className={menuOpen ? "nav open" : "nav"}>
        {nav.map(([label, id]) => (
          <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function SectionHeader({ eyebrow, title, text, light = false }) {
  return (
    <div className={light ? "sectionHeader light" : "sectionHeader"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
}

function Fact({ icon, label, value }) {
  return (
    <div>
      {icon}
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Metric({ number, label }) {
  return (
    <div>
      <strong>{number}</strong>
      <span>{label}</span>
    </div>
  );
}

function Feature({ icon, title, text }) {
  return (
    <article className="featureCard">
      {icon}
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function Person({ name, affiliation, email }) {
  return (
    <article className="personCard">
      <div className="personAvatar">
        {name
          .split(" ")
          .map((part) => part[0])
          .join("")
          .slice(0, 2)}
      </div>

      <h3>{name}</h3>

      <p>{affiliation}</p>

      {email && <a href={`mailto:${email}`}>{email}</a>}
    </article>
  );
}

export default App;
