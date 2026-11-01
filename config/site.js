/* =====================================================================
   ✏️ SITE SETTINGS — name, tagline, menu and footer links.
   Edit the text between the quotes. Keep the commas and brackets.
   ===================================================================== */
window.SITE = {
  name: "Vijeta Garg",
  brand: "...",                      // the little text at the top-left (reference site uses "...")
  tagline: "High school researcher · Soft robotics, e-textiles & hardware for good",

  // Top menu. "page" must match the data-page="" on each .html file.
  nav: [
    { label: "About Me",               href: "index.html",     page: "about" },
    { label: "My Research",            href: "research.html",  page: "research" },
    { label: "My Projects@Hackathons", href: "projects.html",  page: "projects" },
    { label: "Blog",                   href: "blog.html",      page: "blog" },
    { label: "Community",              href: "community.html", page: "community" }
  ],

  // Optional: put your resume PDF in assets/docs/ and write its path here,
  // e.g. "assets/docs/Vijeta_Garg_Resume.pdf". Leave "" to hide the menu item.
  resumePdf: "",

  // Footer icons
  social: {
    github:   "https://github.com/Vijeta-Garg",
    linkedin: "https://www.linkedin.com/in/vijeta-garg-90991b298/"
  },

  footerNote: "Design inspired by João Franco's open-source portfolio template.",

  // true  = show dashed "add files here" boxes for empty galleries/videos/files/slides
  // false = hide empty sections (switch to false once you've added your media)
  showEmptyMediaPlaceholders: true
};
