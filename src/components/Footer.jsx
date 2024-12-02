export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <section className="footer-section">
          <div className="logo">
            <a>Sanad Assara</a>
          </div>
          <p>
            Your company's mission statement or a brief description goes here.
          </p>
        </section>

        <section className="footer-section">
          <ul>
            <li>
              <a href="https://facebook.com/yourpage" target="_blank">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://twitter.com/yourpage" target="_blank">
                Twitter
              </a>
            </li>
            <li>
              <a href="https://instagram.com/yourpage" target="_blank">
                Instagram
              </a>
            </li>
          </ul>
        </section>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Sanad Asara. All rights reserved.</p>
      </div>
    </footer>
  );
}
