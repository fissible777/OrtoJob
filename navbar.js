class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background-color: white;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .logo {
          color: #1a365d;
          font-weight: 700;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
        }
        .logo-icon {
          color: #4299e1;
        }
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }
        a {
          color: #4a5568;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }
        a:hover {
          color: #2b6cb0;
        }
        .active {
          color: #2b6cb0;
          font-weight: 600;
        }
        .sign-in-btn {
          background-color: #4299e1;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 0.375rem;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        .sign-in-btn:hover {
          background-color: #3182ce;
          color: white;
        }
        @media (max-width: 768px) {
          nav {
            padding: 1rem;
            flex-direction: column;
            gap: 1rem;
          }
          ul {
            width: 100%;
            justify-content: center;
          }
        }
      </style>
      <nav>
        <div class="logo-container">
          <a href="/" class="logo">
            <i data-feather="clipboard" class="logo-icon"></i>
            <span>OrtoJob</span>
          </a>
        </div>
        <ul>
          <li><a href="/" class="active"><i data-feather="home"></i> Home</a></li>
          <li><a href="/orders.html"><i data-feather="list"></i> Orders</a></li>
          <li><a href="/new-order.html"><i data-feather="plus-circle"></i> New Order</a></li>
          <li><a href="#" class="sign-in-btn" id="signInBtn"><i data-feather="log-in"></i> Sign In</a></li>
        </ul>
      </nav>
    `;
    
    // Add event listener for sign in button
    this.shadowRoot.getElementById('signInBtn').addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = '/login.html';
    });
    
    // Replace feather icons
    setTimeout(() => {
      if (window.feather) {
        window.feather.replace();
      }
    }, 100);
  }
}

customElements.define('custom-navbar', CustomNavbar);