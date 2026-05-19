import { useEffect } from 'react'
import Head from 'next/head'

export default function Home() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, i) => {
          if (e.isIntersecting) {
            setTimeout(() => e.target.classList.add('in'), i * 80)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.05 }
    )
    document.querySelectorAll('.fade').forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])

  return (
    <>
      <Head>
        <title>Ali Qumail</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="wrap">
        <nav>
          <a className="nav-name" href="#">Ali Qumail</a>
          <ul className="nav-links">
            <li><a href="#work">Work</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        <div className="intro fade">
          <h1>
            Senior Software Engineer,<br />
            <span style={{whiteSpace: 'nowrap'}}>full-stack and cloud.</span>
          </h1>
          <p>
            3+ years building enterprise systems across Industrial IoT and large-scale US retail.
            Currently at <a className="inline" href="#">Xavor Corporation</a>, shipping React and .NET Core systems
            for a leading pro-audio and sound solutions provider in the US, supporting 200+ physical stores nationwide. AWS for data pipelines.
          </p>
        </div>

        <div className="currently fade">
          <strong>Right now &mdash;</strong> actively exploring RAG pipelines, LLMs, and AI agents. Using Claude to 10x development and push what&apos;s possible with AI-assisted engineering.
        </div>

        <section id="work" className="fade">
          <h2>Experience</h2>

          <div className="exp-item">
            <div className="exp-period">2026 &ndash; now</div>
            <div>
              <div className="exp-role">Full Stack Engineer</div>
              <div className="exp-company">Xavor Corporation</div>
              <p className="exp-desc">Building retail systems for Guitar Center &mdash; POS, logistics, inventory. .NET Core services, React frontends, Azure infrastructure.</p>
            </div>
          </div>

          <div className="exp-item">
            <div className="exp-period">2023 &ndash; 2026</div>
            <div>
              <div className="exp-role">Full Stack Engineer &mdash; IIoT</div>
              <div className="exp-company">Octopus Digital / Avanceon</div>
              <p className="exp-desc">Developed OmniConnect, an industrial IoT platform. Angular dashboards with real-time SignalR streams, MQTT pipelines via Azure Functions, .NET Core APIs.</p>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section id="projects" className="fade">
          <h2>Projects</h2>

          <div className="project-item">
            <a className="project-name" href="#">SensorMind <span className="arr">↗</span></a>
            <p className="project-desc">IIoT sensor intelligence platform &mdash; RAG pipeline over sensor data using Qdrant vector search, LangChain orchestration, and Three.js 3D visualisation.</p>
            <div className="tags">
              <span className="tag tag-o">RAG</span>
              <span className="tag">Qdrant</span>
              <span className="tag">LangChain</span>
              <span className="tag">Three.js</span>
              <span className="tag">Next.js</span>
            </div>
          </div>

          <div className="project-item">
            <a className="project-name" href="#">Financial Intelligence Platform <span className="arr">↗</span></a>
            <p className="project-desc">LLM-powered Q&amp;A over financial documents. Upload PDFs, ask questions, get structured extractions. Built with Next.js and the Anthropic API.</p>
            <div className="tags">
              <span className="tag tag-o">LLM</span>
              <span className="tag">Next.js</span>
              <span className="tag">Node.js</span>
              <span className="tag">Anthropic API</span>
            </div>
          </div>

          <div className="project-item">
            <a className="project-name" href="#">OffVault <span className="arr">↗</span></a>
            <p className="project-desc">Offline-first encrypted password manager using the Web Crypto API with AES-GCM. Zero network dependency &mdash; all encryption happens client-side.</p>
            <div className="tags">
              <span className="tag tag-o">Web Crypto</span>
              <span className="tag">AES-GCM</span>
              <span className="tag">PWA</span>
            </div>
          </div>

          <div className="project-item">
            <a className="project-name" href="#">Purana Subcontinent <span className="arr">↗</span></a>
            <p className="project-desc">Instagram brand restoring 1970s South Asian archival photography &mdash; AI colorisation and motion added to historical stills.</p>
            <div className="tags">
              <span className="tag tag-o">AI Colorisation</span>
              <span className="tag">Motion</span>
              <span className="tag">Instagram</span>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section className="fade">
          <h2>Stack</h2>
          <div className="skills-list">
            <div className="skill-row">
              <span className="skill-label">Backend</span>
              <span className="skill-value"><strong>.NET Core</strong>, Node.js, REST, EF Core</span>
            </div>
            <div className="skill-row">
              <span className="skill-label">Frontend</span>
              <span className="skill-value"><strong>React</strong>, Next.js, Angular, TypeScript</span>
            </div>
            <div className="skill-row">
              <span className="skill-label">Cloud</span>
              <span className="skill-value"><strong>Azure</strong> &middot; AZ-900 certified, AZ-204 in progress</span>
            </div>
            <div className="skill-row">
              <span className="skill-label">Data</span>
              <span className="skill-value"><strong>SQL Server</strong>, PostgreSQL, MongoDB, Qdrant</span>
            </div>
            <div className="skill-row">
              <span className="skill-label">AI / LLM</span>
              <span className="skill-value"><strong>LangChain</strong>, RAG pipelines, Anthropic API</span>
            </div>
            <div className="skill-row">
              <span className="skill-label">DevOps</span>
              <span className="skill-value"><strong>Docker</strong>, GitHub Actions, Azure DevOps</span>
            </div>
          </div>
        </section>

        <div className="divider"></div>

        <section id="contact" className="fade">
          <h2>Get in touch</h2>
          <p className="contact-line">
            <a className="inline" href="mailto:aliqumail8@gmail.com">aliqumail8@gmail.com</a>
            {' '}&nbsp;&middot;&nbsp;{' '}
            <a className="inline" href="https://github.com/AliQumail">GitHub</a>
            {' '}&nbsp;&middot;&nbsp;{' '}
            <a className="inline" href="https://www.linkedin.com/in/ali-qumail-330b4334a/">LinkedIn</a>
          </p>
        </section>

        <footer>
          <span>Ali Qumail &middot; Lahore, Pakistan</span>
          <span>2026</span>
        </footer>
      </div>
    </>
  )
}
