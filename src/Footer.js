import React from "react";

export default function Footer() {
  return (
    <footer className="Footer">
      Open-source code by{" "}
      <a
        href="https://www.linkedin.com/in/elizabeth-waylett-6ab21274/"
        target="_blank"
        class="footerLink"
        rel="noopener noreferrer"
      >
        Beth Waylett Ryan
      </a>
      🐳 on{" "}
      <a
        href="https://github.com/BethRyan"
        target="_blank"
        class="footerLink"
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      and hosted on{" "}
      <a
        href="https://app.netlify.com/"
        target="_blank"
        rel="noopener noreferrer"
        class="footerLink"
      >
        Netlify
      </a>
    </footer>
  );
}
