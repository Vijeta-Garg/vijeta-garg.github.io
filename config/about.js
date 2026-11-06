/* =====================================================================
   ✏️ ABOUT ME page (index.html)
   You can use simple HTML inside the text, e.g. <b>bold</b> or <a href="...">link</a>.
   ===================================================================== */
window.ABOUT = {
  // Put your photo at assets/img/avatar.png (square works best). Until then your initials show.
  photo: "assets/img/avatar.png",

  greeting: "Hi, I'm Vijeta!",

  interests: ["Soft robotics", "E-textiles", "Wearable tech", "Hardware", "Accessible Solutions", "Society",  "AI for good"],

  // Each item is one paragraph.
  bio: [
    "I'm a high school student at the <b>Edison High School STEM Academy</b> in New Jersey. I love building things that sit right where technology meets people & society: soft robots, smart textiles and wearables that help with real health challenges or social challenges.",
    "My main research designs <b>soft actuators that mimic massage motions</b> to help breast cancer survivors manage late effects, and I'll be presenting it at the E-Textiles 2026 international conference in the Czech Republic. Outside the lab you'll find me at hackathons, playing tennis, mentoring girls in hardware through Hack Club, and running our school's Model UN conferences."
  ],

  highlightsTitle: "Highlights",
  highlights: [
    "<b>1st Place Overall</b>, Sigma Xi Student Research Showcase (1 of 300, across high school, undergraduate and graduate divisions) - 2026",
    "<b>Best Poster Presentation</b> (1 of 141), MIT Undergraduate Research Technology Conference - 2026",
    "<b>Accepted poster presenter</b>, E-Textiles 2026 International Conference (Czech Republic), with a sole-first-author paper under IEEE review",
    "<b>Bob Berman Award for Disruptive Innovation</b>, MIT Beaver Works Summer Institute - 2025",
    "<b>3rd Place</b>, NJ-06 Congressional App Challenge - 2025"
  ],

  exploreTitle: "Explore",
  // mediaFrom: uses the first photo you upload in that section as the card picture
  explore: [
    { caption: "my research",   href: "research.html",  emoji: "🔬", mediaFrom: "research" },
    { caption: "my projects",   href: "projects.html",  emoji: "🛠️", mediaFrom: "projects" },
    { caption: "community",     href: "community.html", emoji: "🤝", mediaFrom: "community" }
  ]
};
