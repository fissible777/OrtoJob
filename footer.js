class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #1a202c;
          color: white;
          padding: 3rem 2rem;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }
        .footer-section h3 {
          font-size: 1.125rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          color: #e2e8f0;
        }
        .footer-section p, .footer-section a {
          color: #a0aec0;
          line-height: 1.6;
          margin-bottom: 0.75rem;
          display: block;
        }
        .footer-section a:hover {
          color: #4299e1;
          text-decoration: none;
        }
        .footer-bottom {
          max-width: 1200px;
          margin: 2rem auto 0;
          padding-top: 2rem;
          border-top: 1px solid #2d3748;
          text-align: center;
          color: #718096;
          font-size: 0.875rem;
        }
        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }
        .social-links a {
          color: #a0aec0;
          transition: color 0.2s;
        }
        .social-links a:hover {
          color: #4299e1;
        }
        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="footer-section">
            <h3>OrtoJob</h3>
            <p>Streamlining orthodontic work orders between clinics and labs with secure, digital workflows.</p>
            <div class="social-links">
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="linkedin"></i></a>
              <a href="#"><i data-feather="facebook"></i></a>
            </div>
          </div>
          <div class="footer-section">
            <h3>Quick Links</h3>
            <a href="/">Home</a>
            <a href="/orders.html">My Orders</a>
            <a href="/new-order.html">Create Order</a>
            <a href="/privacy.html">Privacy Policy</a>
          </div>
          <div class="footer-section">
            <h3>Contact</h3>
            <a href="mailto:hello@ortojob.com"><i data-feather="mail"></i> hello@ortojob.com</a>
            <a href="tel:+1234567890"><i data-feather="phone"></i> +1 (234) 567-890</a>
            <p><i data-feather="map-pin"></i> 123 Dental St, Suite 100</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; ${new Date().getFullYear()} OrtoJob. All rights reserved. GDPR compliant.</p>
        </div>
      </footer>
    `;
    
    // Replace feather icons
    setTimeout(() => {
      if (window.feather) {
        window.feather.replace();
      }
    }, 100);
  }
}

customElements.define('custom-footer', CustomFooter);