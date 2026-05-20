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
  ServerCog,
  Fingerprint,
  Satellite,
  DatabaseZap,
} from "lucide-react";

const nav = [
  ["Home", "home"],
  ["Mission", "mission"],
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
          <div className="cyberGrid" />
          <div className="pulseNode nodeA" />
          <div className="pulseNode nodeB" />
          <div className="pulseNode nodeC" />
          <div className="beam beamA" />
          <div className="beam beamB" />

          <div className="heroShell">
            <div className="heroCopy">
              <div className="statusPill">
                <span />
                3rd International Workshop · In conjunction with ACM MobiHoc 2026
              </div>

              <h1>
                CyberNet:
                <br />
                Next-Gen Cybersecurity for{" "}
                <em>Mission-Critical Mobile Networks</em>
              </h1>

              <p className="heroLead">
                A research forum for trustworthy AI, resilient edge systems,
                tactical mobile networks, IoT security, and cyber defense for
                mission-critical operations.
              </p>

              <div className="heroFacts">
                <Fact icon={<MapPin />} label="Location" value="Tokyo, Japan" />

                <Fact
                  icon={<CalendarDays />}
                  label="Conference Dates"
                  value="23–26 November 2026"
                />

                <Fact
                  icon={<ShieldCheck />}
                  label="Workshop Date"
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

            <div className="cyberOpsCard">
              <div className="cyberOpsTop">
                <span className="windowDot red"></span>
                <span className="windowDot yellow"></span>
                <span className="windowDot green"></span>
              </div>

              <div className="cyberOpsHeader">
                <p>SECURE_NETWORK_STATUS</p>
                <h2>Call for Papers</h2>
              </div>

              <div className="radarModule">
                <div className="radarCircle">
                  <div className="radarSweep"></div>

                  <span className="radarNode nodeOne"></span>
                  <span className="radarNode nodeTwo"></span>
                  <span className="radarNode nodeThree"></span>

                  <div className="shieldCore">
                    <svg viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 3L19 6V11.5C19 16.2 16.1 20 12 21C7.9 20 5 16.2 5 11.5V6L12 3Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.8 12.1L10.9 14.2L15.4 9.7"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="deadlineSecureBox">
                <small>Next Deadline</small>
                <strong>August 31, 2026</strong>
                <span>Workshop paper submission</span>
              </div>

              <div className="secureTimeline">
                <div>
                  <span>01</span>
                  <div>
                    <small>Deadline</small>
                    <strong>Paper Submission</strong>
                    <p>August 31, 2026</p>
                  </div>
                </div>

                <div>
                  <span>02</span>
                  <div>
                    <small>Final Version</small>
                    <strong>Camera Ready</strong>
                    <p>September 30, 2026</p>
                  </div>
                </div>

                <div>
                  <span>03</span>
                  <div>
                    <small>Tokyo, Japan</small>
                    <strong>Workshop Event</strong>
                    <p>November 26, 2026</p>
                  </div>
                </div>
              </div>

              <div className="securityTags">
                <span>Trustworthy AI</span>
                <span>Secure Edge</span>
                <span>Mobile Defense</span>
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

        <section id="mission" className="section missionSection">
          <SectionHeader
            eyebrow="Mission"
            title="Cyber defense for critical, mobile, edge-enabled infrastructure"
            text="CyberNet 2026 focuses on mission-critical mobile networks where cybersecurity must operate under mobility, intermittent connectivity, strict latency, reliability requirements, and limited resources."
          />

          <div className="missionGrid">
            <Feature
              icon={<Radio />}
              title="Mission-critical connectivity"
              text="Rapidly deployable networks support emergency response, tactical operations, situational awareness, autonomous systems, and remote-controlled devices."
            />

            <Feature
              icon={<Cpu />}
              title="Edge intelligence"
              text="Edge computing brings compute, caching, sensing, and control near critical IoT devices and mobile network operations."
            />

            <Feature
              icon={<LockKeyhole />}
              title="AI-resilient security"
              text="The workshop targets trustworthy, explainable, robust, and adversarially resilient AI for cybersecurity in mobile and edge networks."
            />

            <Feature
              icon={<Network />}
              title="System-aware defense"
              text="CyberNet prioritizes prototypes, testbeds, measurement studies, deployments, and cross-layer security architectures."
            />
          </div>

          <div className="operationsPanel">
            <div>
              <p className="eyebrow light">Workshop Objective</p>
              <h3>Connecting cybersecurity research with real mission constraints</h3>
            </div>

            <p>
              CyberNet 2026 provides a focused platform for researchers and
              practitioners from academia, industry, and government to exchange
              ideas and develop innovative approaches across mobile systems,
              wireless networks, edge computing, large-scale IoT environments,
              and mission-critical cybersecurity.
            </p>
          </div>
        </section>

        <section className="section darkSection">
          <SectionHeader
            eyebrow="Cybersecurity Focus"
            title="A workshop for resilient network defense"
            text="The workshop emphasizes practical, system-oriented security research for mobile networks that must remain dependable even under cyberattack, infrastructure stress, and changing operational conditions."
            light
          />

          <div className="focusGrid">
            <FocusCard
              icon={<Fingerprint />}
              title="Trust & Authentication"
              text="PKI, identity, authentication, access control, and trust management for mobile mission-critical environments."
            />

            <FocusCard
              icon={<DatabaseZap />}
              title="Threat Intelligence"
              text="AI-driven detection, knowledge fusion, intrusion response, digital twins, and situational cyber awareness."
            />

            <FocusCard
              icon={<ServerCog />}
              title="Edge & SDN Security"
              text="Programmable defenses, edge orchestration, software-defined control, and resource-aware cyber protection."
            />

            <FocusCard
              icon={<Satellite />}
              title="Mobile Network Resilience"
              text="Security designs for mobility, intermittent connectivity, latency-sensitive systems, IoT, and cross-layer operations."
            />
          </div>
        </section>

        <section id="topics" className="section topicsSection">
          <SectionHeader
            eyebrow="Topics of Interest"
            title="Search the technical scope"
            text="CyberNet welcomes work across AI-driven cybersecurity, mission-critical networks, mobile systems, edge intelligence, IoT, authentication, digital twins, and resilient networked infrastructure."
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

        <section id="submission" className="section submissionSection">
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

        <section id="committees" className="section committeesSection">
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
            {webTeam.map(([name, role, affiliation]) => (
              <Person
                key={name}
                name={name}
                affiliation={`${role} · ${affiliation}`}
              />
            ))}
          </div>

          <h3 className="blockTitle">TPC Committee</h3>

          <div className="noticeCard">
            The Technical Program Committee will be updated shortly.
          </div>
        </section>

        <section id="program" className="section programSection">
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

        <section id="history" className="section historySection darkSection">
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

function FocusCard({ icon, title, text }) {
  return (
    <article className="focusCard">
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
