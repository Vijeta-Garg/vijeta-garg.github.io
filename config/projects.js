/* =====================================================================
   ✏️ MY PROJECTS@HACKATHONS page (projects.html)

   Same format as config/research.js:
   id → must match the folder in content/projects/<id>/ (images/ videos/ files/ slides/)
   The ORDER here = the order in the left index.
   ===================================================================== */
window.PROJECTS = {
  pageTitle: "My Projects@Hackathons",
  indexTitle: "Projects",
  intro: "Things I've built at hackathons and challenges, from AI apps to robot hands. Pick a project on the left.",

  items: [
    {
      id: "annotateher",
      title: "AnnotateHER",
      where: "MIT Blueprint Hackathon",
      when: "March 2026",
      awards: ["3rd Place, Advanced Division, MIT Blueprint 2026"],
      tags: ["Knowledge graphs", "Hybrid GraphRAG", "Database curation"],
      summary: "An app that annotates textbooks with visual graphs of women in STEM whose contributions are connected to the work being discussed, to help combat the well-known “Matilda effect.”",
      highlights: [
        "Worked on knowledge graphs, hybrid GraphRAG and curating a database of 500 women in STEM fields.",
        "The early prototype won 3rd Place in the Advanced Division at MIT Blueprint Hackathon (March 2026).",
        "Currently redeveloping the app with a hybrid GraphRAG structure, with plans to pilot it in December."
      ],
      links: [], youtube: [], captions: {}
    },
    {
      id: "orwell",
      title: "Orwell",
      where: "Congressional App Challenge (NJ-06)",
      awards: ["3rd Place, NJ-06 Congressional App Challenge"],
      tags: ["Sentiment analysis", "Gamification", "UX design"],
      summary: "An app that breaks down long Congressional legislation for young people and gamifies understanding how laws work, aiming to address low youth voter turnout.",
      highlights: [
        "Worked on the sentiment-analysis pipeline and the overall user design.",
        "Won 3rd Place in the NJ-06 Congressional App Challenge and was acknowledged by Representative Frank Pallone."
      ],
      links: [], youtube: [], captions: {}
    },
    {
      id: "sleepsprout",
      title: "SleepSprout",
      where: "Hack Club Parthenon",
      awards: ["Voted Top 5 (5/60), Hack Club Parthenon"],
      tags: ["E-textiles", "Accelerometer", "Bluetooth", "Wearables"],
      summary: "A textile-based sleep monitor that encourages teenagers to sleep by connecting to a virtual “pet plant” that reflects their sleep health.",
      highlights: [
        "Combined a speaker, an accelerometer and textile buttons on a glove, with real-time Bluetooth communication to the software side.",
        "Voted Top 5 at Hack Club's Parthenon, the largest global all-girls hackathon."
      ],
      links: [], youtube: [], captions: {}
    },
    {
      id: "nothole",
      title: "Nothole",
      where: "MIT Blueprint Hackathon",
      when: "2025",
      awards: ["1st Place, Beginner Track, MIT Blueprint 2025"],
      tags: ["Pothole detection", "Civic tech"],
      summary: "A system that detects potholes and reports them to a central system that municipal officials can use to prioritize repaving.",
      highlights: ["Won 1st Place in the Beginner Track at MIT Blueprint 2025."],
      links: [], youtube: [], captions: {}
    },
    {
      id: "soup-hands",
      title: "Soup-Hands",
      where: "Hack Club Fallout",
      awards: ["Fallout certificate (recognized by GitHub, MIT & NASA)"],
      tags: ["Robotics", "PCB design", "Hardware"],
      summary: "Dual robotic hands that record and replay hand holds, built in response to the prompt “What would you build if the world was ending?”",
      highlights: [
        "Learned PCB design and printing.",
        "Earned the Fallout certificate, recognized by GitHub, MIT and NASA, by logging 67 hours of hardware building.",
        "Invited by Hack Club to the free 7-day Fallout hackathon and maker convention in Shenzhen, China."
      ],
      links: [], youtube: [], captions: {}
    },
    {
      id: "date-sensei",
      title: "Date-sensei",
      where: "Hack Club",
      tags: ["LeRobot", "Robot arms", "Teleoperation"],
      summary: "A robot that reacts to social cues to support human interaction.",
      highlights: [
        "Learned how to train LeRobot arms using teleoperation.",
        "Invited by Hack Club to the Prototype hackathon in San Jose."
      ],
      links: [], youtube: [], captions: {}
    },
    {
      id: "soliss",
      title: "Soliss",
      where: "PennApps (University of Pennsylvania)",
      when: "2025",
      tags: ["Wearable", "UV sensing"],
      summary: "A wearable that detects UV rays and reminds users to reapply sunscreen. It's helpful for people who spend a lot of time in the sun but have sensitive skin.",
      highlights: ["Built at PennApps 2025, a collegiate hackathon at UPenn."],
      links: [], youtube: [], captions: {}
    }
  ]
};
