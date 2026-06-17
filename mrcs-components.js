/* ==========================================================
   mrcs-components.js
   Shared wireframe components for Mount Rogers Community Services.
   Include on every page: <script src="mrcs-components.js"></script>

   Each page uses placeholder divs to receive injected HTML:
     <div id="mrcs-header"></div>   — utility bar + nav
     <div id="mrcs-crisis"></div>   — crisis support banner (dark)
     <div id="mrcs-work-cta"></div> — work at mount rogers CTA
     <div id="mrcs-footer"></div>   — footer + copyright bar

   To update any of these globally, edit this file only.
   ========================================================== */

(function () {

  var C = {};

  /* ----------------------------------------------------------
     HEADER: Utility bar + Nav
     Util bar bg #999, nav order per Figma: Careers, Services,
     Donate, About, News & Events, ESS, Contact
  ---------------------------------------------------------- */
  C.header = `
    <div class="util-bar">
      <div class="util-bar-inner">
        <a href="mrcs-wf-careers-v5.html" class="util-gethelp">Join Our Team</a>
        <a href="mrcs-wf-getting-help-now-v5.html" class="util-phone">Are you in crisis? (866) 589-0265</a>
      </div>
    </div>

    <nav class="site-nav">
      <div class="nav-inner">
        <a href="mrcs-wf-home-v5.html" class="nav-logo">
          <div class="nav-logo-mark"></div>
          <span class="nav-logo-text">Mount Rogers<br>Community Services</span>
        </a>
        <div class="nav-links">

          <div class="nav-item">
            <a href="mrcs-wf-careers-v5.html">Careers &#9662;</a>
            <div class="nav-dropdown">
              <a href="mrcs-wf-why-mount-rogers-v5.html">Why Mount Rogers</a>
              <a href="mrcs-wf-benefits-v5.html">Benefits</a>
              <a href="mrcs-wf-open-positions-v5.html">Open Positions</a>
              <a href="mrcs-wf-internships-v5.html">Internships</a>
            </div>
          </div>

          <div class="nav-item">
            <a href="mrcs-wf-services-v5.html">Get Help &#9662;</a>
            <div class="nav-dropdown">
              <a href="mrcs-wf-crisis-v5.html">Crisis Management</a>
              <a href="mrcs-wf-counseling-v5.html">Counseling &amp; Psychiatry</a>
              <a href="mrcs-wf-wellness-v5.html">Wellness &amp; Community Engagement</a>
              <a href="mrcs-wf-dev-disability-v5.html">Developmental Disability</a>
              <a href="mrcs-wf-residential-v5.html">Residential</a>
              <a href="mrcs-wf-case-management-v5.html">Case Management</a>
              <a href="mrcs-wf-community-based-v5.html">Community-Based Services</a>
              <a href="mrcs-wf-ess-v5.html">Employment Support Services</a>
            </div>
          </div>

          <div class="nav-item">
            <a href="mrcs-wf-donate-v5.html">Donate &#9662;</a>
            <div class="nav-dropdown">
              <a href="mrcs-wf-why-give-v5.html">Why Give</a>
              <a href="mrcs-wf-ways-to-give-v5.html">Ways to Give</a>
              <a href="mrcs-wf-foundation-v5.html">Foundation &amp; Grants</a>
              <a href="mrcs-wf-our-impact-v5.html">Our Impact</a>
            </div>
          </div>

          <div class="nav-item">
            <a href="mrcs-wf-about-v5.html">About &#9662;</a>
            <div class="nav-dropdown">
              <a href="mrcs-wf-mission-v5.html">Mission &amp; Story</a>
              <a href="mrcs-wf-board-v5.html">Board &amp; CEO</a>
              <a href="mrcs-wf-locations-v5.html">Locations</a>
              <a href="mrcs-wf-your-rights-v5.html">Your Rights</a>
              <a href="mrcs-wf-foia-v5.html">FOIA Requests</a>
              <a href="mrcs-wf-privacy-v5.html">Privacy Statement</a>
            </div>
          </div>

          <div class="nav-item">
            <a href="mrcs-wf-news-events-v5.html">News &amp; Events &#9662;</a>
            <div class="nav-dropdown">
              <a href="mrcs-wf-news-v5.html">News / Articles Archive</a>
              <a href="mrcs-wf-events-v5.html">Events Listing</a>
              <a href="mrcs-wf-procurement-v5.html">Procurement Opportunities</a>
            </div>
          </div>

          <div class="nav-item">
            <a href="mrcs-wf-ess-v5.html">ESS &#9662;</a>
            <div class="nav-dropdown">
              <a href="mrcs-wf-employment-services-v5.html">Employment Services</a>
              <a href="mrcs-wf-manufacturing-v5.html">Manufacturing</a>
              <a href="mrcs-wf-sample-work-v5.html">Sample Work &amp; Clients</a>
            </div>
          </div>

          <div class="nav-item">
            <a href="mrcs-wf-contact-v5.html">Contact &#9662;</a>
            <div class="nav-dropdown">
              <a href="mrcs-wf-getting-help-now-v5.html">Getting Help Now</a>
              <a href="mrcs-wf-faq-v5.html">FAQ</a>
              <a href="mrcs-wf-records-request-v5.html">Records Request</a>
            </div>
          </div>

          <button class="nav-search-btn" aria-label="Search">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>

        </div>
      </div>
    </nav>
  `;

  /* ----------------------------------------------------------
     SERVICES CARDS GRID
     4×2 grid of service cards — white cards on gray bg.
     "Services" label, no heading. Used on Careers and any
     page that needs the full service card grid.
  ---------------------------------------------------------- */
  C.services = `
    <section id="services" class="services-section">
      <div class="container">
        <div class="section-label">Services</div>
        <div class="services-grid">
          <div class="service-card">
            <h4>Crisis Management</h4>
            <p>Locations, phone numbers &amp; hours for all crisis sites.</p>
          </div>
          <div class="service-card">
            <h4>Counseling &amp; Psychiatry</h4>
            <p>Outpatient mental health &amp; psychiatric services.</p>
          </div>
          <div class="service-card">
            <h4>Wellness &amp; Community Engagement</h4>
            <p>Community engagement and wellness programs.</p>
          </div>
          <div class="service-card">
            <h4>Developmental Disability</h4>
            <p>Support for individuals &amp; families.</p>
          </div>
          <div class="service-card">
            <h4>Residential</h4>
            <p>Supervised residential living programs.</p>
          </div>
          <div class="service-card">
            <h4>Community-Based</h4>
            <p>In-home and community support services.</p>
          </div>
          <div class="service-card">
            <h4>Case Management</h4>
            <p>Coordinated care &amp; community support.</p>
          </div>
          <div class="service-card">
            <h4>Employment Support Services</h4>
            <p>Competitive, enriching employment opportunities.</p>
          </div>
        </div>
      </div>
    </section>
  `;

  /* ----------------------------------------------------------
     HOME SERVICES GRID
     Simple cards: H4 + one-line description only.
     No body paragraph, no "Learn more" link.
     (Get Help page uses a richer card variant inline.)
  ---------------------------------------------------------- */
  C.homeServices = `
    <section id="services" class="services">
      <div class="container">
        <div class="section-label">Services</div>
        <div class="services-grid">
          <a href="mrcs-wf-crisis-v5.html" class="service-card">
            <h4>Crisis Management</h4>
            <p>Locations, phone numbers &amp; hours for all crisis sites.</p>
          </a>
          <a href="mrcs-wf-counseling-v5.html" class="service-card">
            <h4>Counseling &amp; Psychiatry</h4>
            <p>Outpatient mental health &amp; psychiatric services.</p>
          </a>
          <a href="mrcs-wf-wellness-v5.html" class="service-card">
            <h4>Wellness &amp; Community Engagement</h4>
            <p>Community engagement and wellness programs.</p>
          </a>
          <a href="mrcs-wf-dev-disability-v5.html" class="service-card">
            <h4>Developmental Disability</h4>
            <p>Support for individuals &amp; families.</p>
          </a>
          <a href="mrcs-wf-residential-v5.html" class="service-card">
            <h4>Residential</h4>
            <p>Supported residential living programs.</p>
          </a>
          <a href="mrcs-wf-community-based-v5.html" class="service-card">
            <h4>Community Based</h4>
            <p>In-home and community support services.</p>
          </a>
          <a href="mrcs-wf-case-management-v5.html" class="service-card">
            <h4>Case Management</h4>
            <p>Coordinated care &amp; community supports.</p>
          </a>
          <a href="mrcs-wf-ess-v5.html" class="service-card">
            <h4>Employment Support Services</h4>
            <p>Competitive, customized employment support.</p>
          </a>
        </div>
      </div>
    </section>
  `;

  /* ----------------------------------------------------------
     CRISIS BANNER
  ---------------------------------------------------------- */
  C.crisis = `
    <section id="crisis" class="crisis">
      <div class="container">
        <div class="section-label">Crisis Support</div>
        <h2>If you or someone you know is in crisis, we're here 24/7.</h2>
        <p class="crisis-subcopy">Our crisis team is available around the clock.<br>You don't have to face this alone.</p>
        <a href="tel:8665890265" class="crisis-phone">(866) 589-0265</a>
        <a href="mrcs-wf-getting-help-now-v5.html" class="btn btn-primary">Call Now</a>
      </div>
    </section>
  `;

  /* ----------------------------------------------------------
     WORK AT MOUNT ROGERS CTA
  ---------------------------------------------------------- */
  C.workCta = `
    <section id="work-cta" class="work-cta">
      <div class="container">
        <div class="section-label">Work at Mount Rogers</div>
        <h2>Looking for a job with purpose and meaning?</h2>
        <p>Review our job listings to find an opportunity<br>to join our family.</p>
        <a href="mrcs-wf-careers-v5.html" class="btn btn-secondary">Find a job. Join our team.</a>
      </div>
    </section>
  `;

  /* ----------------------------------------------------------
     FOOTER
  ---------------------------------------------------------- */
  C.footer = `
    <footer class="footer">
      <div class="container">

        <a href="mrcs-wf-home-v5.html" class="footer-logo-name">Mount Rogers Community Services</a>

        <div class="footer-grid">

          <div>
            <div class="footer-address">
              123 Headquarters Street<br>
              City Name, Virginia
            </div>
            <a href="mrcs-wf-locations-v5.html" class="footer-see-locations">See all locations --&gt;</a>
            <a href="tel:8665890265" class="footer-phone">(866) 589-0265</a>
            <p class="footer-crisis-note">Crisis line - always available</p>
            <div class="footer-social">
              <a href="#" class="social-link"><span class="social-icon">f</span> Facebook</a>
              <a href="#" class="social-link"><span class="social-icon">in</span> LinkedIn</a>
            </div>
            <a href="#" class="footer-newsletter-btn">Newsletter signup --&gt;</a>
          </div>

          <div>
            <div class="footer-link-rows">
              <div class="footer-link-row">
                <span class="footer-link-row-head">Get Help</span>
                <div class="footer-link-row-links">
                  <a href="mrcs-wf-crisis-v5.html">Crisis Management</a>
                  <a href="mrcs-wf-counseling-v5.html">Counseling</a>
                  <a href="mrcs-wf-residential-v5.html">Residential</a>
                  <a href="mrcs-wf-services-v5.html">All Services --&gt;</a>
                </div>
              </div>
              <div class="footer-link-row">
                <span class="footer-link-row-head">About</span>
                <div class="footer-link-row-links">
                  <a href="mrcs-wf-mission-v5.html">Mission &amp; Story</a>
                  <a href="mrcs-wf-board-v5.html">Board &amp; CEO</a>
                  <a href="mrcs-wf-locations-v5.html">Locations</a>
                  <a href="mrcs-wf-your-rights-v5.html">Your Rights</a>
                  <a href="mrcs-wf-foia-v5.html">FOIA Requests</a>
                </div>
              </div>
              <div class="footer-link-row">
                <span class="footer-link-row-head">Connect</span>
                <div class="footer-link-row-links">
                  <a href="mrcs-wf-news-events-v5.html">News &amp; Events</a>
                  <a href="mrcs-wf-donate-v5.html">Donate</a>
                  <a href="mrcs-wf-careers-v5.html">Careers</a>
                  <a href="mrcs-wf-contact-v5.html">Contact</a>
                </div>
              </div>
            </div>
            <div class="footer-bottom-row">
              <p class="footer-subsidiary">
                Mount Rogers Community Services is a subsidiary of the<br>
                State of Virginia Department of Behavioral Health.
              </p>
              <div class="footer-badges">
                <div class="badge-circle"></div>
                <div class="badge-circle"></div>
                <div class="badge-circle"></div>
                <div class="badge-circle"></div>
                <div class="badge-circle"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="footer-bar">
        <div class="footer-bar-inner">
          <p>&copy; 2026 Mount Rogers Community Services</p>
          <div class="footer-bar-links">
            <a href="mrcs-wf-privacy-v5.html">Privacy Statement</a>
            <a href="mrcs-wf-foia-v5.html">FOIA</a>
            <a href="mrcs-wf-your-rights-v5.html">Your Rights</a>
          </div>
        </div>
      </div>
    </footer>
  `;

  /* ----------------------------------------------------------
     Inject all components on DOM ready
  ---------------------------------------------------------- */
  function inject(id, html) {
    var el = document.getElementById(id);
    if (el) el.outerHTML = html;
  }

  function run() {
    inject('mrcs-header',        C.header);
    inject('mrcs-services',      C.services);
    inject('mrcs-home-services', C.homeServices);
    inject('mrcs-crisis',        C.crisis);
    inject('mrcs-work-cta',      C.workCta);
    inject('mrcs-footer',        C.footer);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', run);
  } else {
    run();
  }

})();
