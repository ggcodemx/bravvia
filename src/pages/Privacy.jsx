import { useEffect, useRef } from 'react';

/**
 * PrivacyPolicyPage
 * Editorial dark-mode privacy page matching Bravvia's aesthetic.
 * Drop-in replacement – just add the route in your router.
 */
export default function PrivacyPolicyPage() {
  const sectionsRef = useRef([]);

  useEffect(() => {
    document.title = 'Privacy Policy | Bravvia';

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pp-visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    sectionsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const addRef = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  const sections = [
    {
      number: '01',
      title: 'Information we collect',
      body: `We collect personal information that you voluntarily provide when you interact with our website or services. This includes contact form submissions (name, email address, company name, phone number, and any information you include in your message), email correspondence when you contact us directly at privacy@bravviaa.com or any other Bravvia email address, and information provided during the course of a professional engagement, including business information, project briefs, and related documentation.

We also collect certain information automatically when you visit our website: pages visited, time spent on pages, referring URLs, browser type, device type, and operating system. We use cookies, Google Analytics, and tracking pixels to understand how visitors use our website and to improve the experience. Details are provided in Section 05 below.`,
    },
    {
      number: '02',
      title: 'How we use your information',
      body: `We use the information we collect to respond to inquiries submitted through our contact form or by email, to deliver and manage professional services for our clients, to analyze website traffic and improve the functionality and content of our website, to send relevant communications about our services only when you have provided consent or when we have a legitimate interest in doing so, and to comply with applicable legal obligations.

We do not sell, rent, or trade your personal information to third parties.`,
    },
    {
      number: '03',
      title: 'Legal basis for processing',
      body: `Depending on your location, we process personal data under one or more of the following legal bases:

Consent — when you voluntarily submit information through our contact form or subscribe to communications. Contractual necessity — when processing is required to deliver services under a client engagement. Legitimate interest — when we analyze website usage to improve our services, provided this does not override your fundamental rights. Legal obligation — when we are required to retain or disclose information under applicable law.`,
    },
    {
      number: '04',
      title: 'Data sharing & third parties',
      body: `We share personal data only with service providers including website hosting, email services, and analytics platforms that process data on our behalf and under our instructions, and with legal and regulatory authorities when required by applicable law, regulation, or legal process.

We require all third-party service providers to respect the security of your personal data and to treat it in accordance with applicable law. We currently use Google Analytics for website traffic analysis and tracking pixels for understanding user engagement and improving communications.`,
    },
    {
      number: '05',
      title: 'Cookies & tracking technologies',
      body: `Our website uses cookies and similar technologies to enhance your browsing experience and to collect usage data.

Essential cookies are required for the website to function properly and cannot be disabled. Analytics cookies are used by Google Analytics to collect anonymized information about how visitors interact with our website. Tracking pixels are small image files embedded in pages or emails that allow us to measure engagement.

You can manage your cookie preferences through your browser settings. Please note that disabling cookies may affect the functionality of certain parts of our website.`,
    },
    {
      number: '06',
      title: 'International data transfers',
      body: `Bravvia is based in Mexico and serves clients internationally. Your personal data may be transferred to and processed in countries other than your country of residence, including Mexico and other jurisdictions where our service providers operate.

When we transfer personal data internationally, we take appropriate measures to ensure that your data is protected in accordance with this Privacy Policy and applicable data protection laws, including the European General Data Protection Regulation (GDPR) where applicable.`,
    },
    {
      number: '07',
      title: 'Data retention',
      body: `We retain personal data only for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law.

Contact form submissions and email correspondence are retained for up to 24 months after the last interaction, unless an ongoing client relationship exists. Client engagement records are retained for the duration of the professional relationship and for a reasonable period thereafter. Website analytics data is retained in anonymized form and is not linked to identifiable individuals.`,
    },
    {
      number: '08',
      title: 'Your rights',
      body: `Under Mexican law (LFPDPPP), you have ARCO rights: the right to Access your personal data in our possession, the right to Rectification of inaccurate or incomplete data, the right to Cancellation (deletion) of your data when it is no longer necessary, and the right to Opposition to the processing of your data for specific purposes.

Under the European General Data Protection Regulation (GDPR), if applicable, you have the right to access, rectify, erase, restrict processing, data portability, and object to processing of your personal data. You also have the right to withdraw consent at any time and to lodge a complaint with a supervisory authority.

To exercise any of these rights, please contact us at privacy@bravviaa.com. We will respond to your request within the timeframes required by applicable law.`,
    },
    {
      number: '09',
      title: 'Security',
      body: `We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. While we take reasonable precautions, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.`,
    },
    {
      number: '10',
      title: "Children's privacy",
      body: `Our website and services are not directed to individuals under the age of 16. We do not knowingly collect personal data from children. If we become aware that we have collected personal data from a child without appropriate consent, we will take steps to delete that information.`,
    },
    {
      number: '11',
      title: 'Changes to this policy',
      body: `We may update this Privacy Policy from time to time to reflect changes in our practices, technologies, or applicable laws. When we make material changes, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically.`,
    },
    {
      number: '12',
      title: 'Contact',
      body: `If you have questions about this Privacy Policy, wish to exercise your rights, or have concerns about how your data is handled, please contact us at privacy@bravviaa.com`,
    },
  ];

  return (
    <>
      <style>{`
        /* ── Reset / base ── */
        .pp-root {
          background: #000;
          color: #fff;
          min-height: 100vh;
          padding-bottom: 8rem;
        }

        /* ── Hero ── */
        .pp-hero {
        padding: clamp(1.5rem, 3.1rem, 12rem);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          max-width: 90rem;
         padding-top: 12rem;
        }

        .pp-eyebrow {
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          
          color: rgba(255,255,255,0.35);
          margin-bottom: 2.5rem;
        }

        .pp-hero-title {
          font-size: clamp(3.5rem, 9vw, 8rem);
          font-weight: 300;
          letter-spacing: -0.04em;
          line-height: 0.95;
          
         
        }

        .pp-hero-meta {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin-top: 3rem;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .pp-hero-date {
          font-size: 0.75rem;
          letter-spacing: 0.1em;
         
         
        }

        .pp-hero-desc {
          max-width: 28rem;
          font-size: 0.9rem;
          
          line-height: 1.7;
          text-align: right;
        }

        /* ── Content layout ── */
        .pp-body {
          max-width: 90rem;
          margin: 0 auto;
          padding: 0 2rem;
        }

        /* ── Section row ── */
        .pp-section {
          display: grid;
          grid-template-columns: 12rem 1fr;
          gap: 3rem;
          padding: 4rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.07);
          opacity: 0;
          transform: translateY(2rem);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }

        .pp-section.pp-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Left column ── */
        .pp-left {
          padding-top: 0.2rem;
        }

        .pp-num {
          font-size: 0.65rem;
          letter-spacing: 0.18em;
          
          color: rgba(255,255,255,0.2);
          display: block;
          margin-bottom: 0.75rem;
        }

        .pp-section-title {
          font-size: 0.85rem;
          font-weight: 400;
          letter-spacing: 0.04em;
          
          color: rgba(255,255,255,0.55);
          line-height: 1.4;
          margin: 0;
        }

        /* ── Right column ── */
        .pp-right {
          font-size: clamp(0.95rem, 1.1vw, 1.05rem);
          line-height: 1.8;
          color: rgba(255,255,255,0.75);
          letter-spacing: 0.01em;
        }

        .pp-right p {
          margin: 0 0 1.25rem;
        }

        .pp-right p:last-child {
          margin-bottom: 0;
        }

        /* ── Email link ── */
        .pp-link {
          color: #fff;
          text-decoration: underline;
          text-underline-offset: 3px;
          text-decoration-color: rgba(255,255,255,0.3);
          transition: text-decoration-color 0.2s;
        }

        .pp-link:hover {
          text-decoration-color: #fff;
        }

        /* ── Footer strip ── */
        .pp-footer {
          max-width: 90rem;
          margin: 6rem auto 0;
          padding: 2rem 2rem 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          font-size: 0.7rem;
          
          color: rgba(255,255,255,0.25);
        }

        /* ── Mobile ── */
        @media (max-width: 700px) {
          .pp-section {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .pp-hero-desc {
            text-align: left;
          }

          .pp-hero-meta {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <div className="pp-root">
        {/* Hero */}
        <div className="pp-hero">
          <p className="pp-eyebrow">Bravvia — Legal</p>
          <h1 className="pp-hero-title">Privacy<br />Policy</h1>
          <div className="pp-hero-meta">
            <span className="pp-hero-date">Last updated: April 2026</span>
            <p className="pp-hero-desc">
              Bravvia is an independent brand consultancy, committed to protecting your privacy and handling your personal data with transparency.
            </p>
          </div>
        </div>

        {/* Sections */}
        <div className="pp-body">
          {sections.map((sec) => {
            // Split text by double newline into paragraphs
            const paragraphs = sec.body.split('\n\n').filter(Boolean);

            return (
              <div className="pp-section" key={sec.number} ref={addRef}>
                {/* Left */}
                <div className="pp-left">
                  <span className="pp-num">{sec.number}</span>
                  <h2 className="pp-section-title">{sec.title}</h2>
                </div>

                {/* Right */}
                <div className="pp-right">
                  {paragraphs.map((p, i) => {
                    // Render email as link
                    const withLinks = p.replace(
                      /privacy@bravviaa\.com/g,
                      `<a href="mailto:privacy@bravviaa.com" class="pp-link">privacy@bravviaa.com</a>`
                    );
                    return (
                      <p key={i} dangerouslySetInnerHTML={{ __html: withLinks }} />
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      
      </div>
    </>
  );
}