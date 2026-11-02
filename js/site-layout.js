(() => {
  const pages = [
    ["index", "Home"],
    ["research", "Research"],
    ["publications", "Publications"],
    ["experience", "Experience"],
    ["vitae", "Vitae"],
    ["contact", "Contact"]
  ];

  const currentPage = location.pathname.split("/").pop().replace(/\.html$/, "") || "index";
  const links = pages.map(([page, label]) => {
    const active = page === currentPage;
    return `<li class="nav-item">
      <a href="${page}.html" class="px-lg-3 nav-link${active ? " active" : ""}"${active ? ' aria-current="page"' : ""}>
        <span data-hover="${label}">${label}</span>
      </a>
    </li>`;
  }).join("\n");

  document.getElementById("site-navbar").outerHTML = `
    <nav class="navbar navbar-expand-lg navbar-light" aria-label="Main navigation">
      <div class="container" style="position:fixed;top:0;right:0;left:0;z-index:1030;background-color:white;border-bottom:1px solid black;">
        <a class="navbar-brand" href="index.html"><img src="images/logo.png" alt="Sushant Bhattarai home"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">${links}</ul>
        </div>
      </div>
    </nav>`;

  const footer = document.getElementById("site-footer");
  const positionClass = footer.hasAttribute("data-fixed") ? " fixed-bottom" : "";
  footer.outerHTML = `
    <footer class="footer py-5">
      <div class="container">
        <p class="copyright-text text-center${positionClass}">Copyright &copy; ${new Date().getFullYear()} Sushant Bhattarai | All rights reserved</p>
      </div>
    </footer>`;
})();
