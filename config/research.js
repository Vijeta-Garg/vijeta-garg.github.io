/* =====================================================================
   ✏️ MY RESEARCH page (research.html)

   Each { ... } block is one topic. The ORDER here = the order in the left index.

   id         → must match the folder name in content/research/<id>/
                (that folder has images/ videos/ files/ slides/ — just drop files in)
   shortTitle → the label in the left index (optional; title is used if missing)
   awards     → shown as 🏆 badges
   tags       → small grey chips
   links      → shown as [ Label ] links, e.g. a paper or poster online
   youtube    → YouTube links, shown with the videos
   captions   → optional nicer captions: { "photo1.jpg": "Testing rig" }
                (otherwise the file name is used: "01-testing-rig.jpg" → "testing rig")
   related    → ids of other topics to link to
   ===================================================================== */
window.RESEARCH = {
  pageTitle: "My Research",
  indexTitle: "Research topics",
  intro: "Soft robotics, e-textiles and low-cost sensing, mostly aimed at health and sustainability. Pick a topic on the left to see details, photos, videos, papers and slides.",

  items: [
    {
      id: "soft-actuators",
      shortTitle: "Soft Actuators for Breast Cancer Survivors",
      title: "Optimizing Soft Actuators for Breast Cancer Survivor Late-Effects Management",
      where: "Independent research",
      when: "2025 – present",
      awards: [
        "1st Place Overall, Sigma Xi Student Research Showcase (1/300)",
        "1st Place, Design & Manufacturing, Sigma Xi (1/300)",
        "Honorable Mention, North Terra Jersey Fair, March 2026"
      ],
      tags: ["Soft robotics", "Electropneumatics", "Force & pressure sensing", "Computer vision"],
      summary: "I designed soft actuators that imitate the massage motions needed to help mitigate the late effects of breast cancer treatment, varying their geometry and material and controlling them with an attached electropneumatic circuit. I also designed an original, accessible testing rig to validate these actuators using force sensors, a pressure sensor and camera-vision object tracking.",
      highlights: [
        "Accepted as a poster presenter at <b>E-Textiles 2026</b>: International Conference on the Challenges, Opportunities, Innovations and Applications in Electronic Textiles (Czech Republic, November 2026), alongside professionals and graduate students in the field.",
        "Conference paper under review for the <b>IEEE proceedings</b>, as sole first author.",
        "Won 1st place overall across the high school, undergraduate and graduate divisions of the Sigma Xi Student Research Showcase, plus the Design and Manufacturing category - 2025."
      ],
      links: [
        // { label: "Paper", url: "https://..." },
      ],
      youtube: [
        // "https://youtu.be/XXXXXXXXXXX",
      ],
      captions: {},
      related: ["bwsi-etextiles"]
    },

    {
      id: "e-waste-sorting",
      shortTitle: "Autonomous E-Waste Sorting",
      title: "Low-Cost Autonomous E-Waste Sorting System",
      where: "NJ Governor's School of Engineering & Technology, Rutgers University",
      when: "June 2026",
      awards: [
        "Best Poster Presentation (1/141), MIT Undergraduate Research Technology Conference 2026"
      ],
      tags: ["Sensor fusion", "YOLO", "Load sensing", "Signal filtering", "Gaussian discriminant analysis"],
      summary: "As 1 of 60 students statewide in a month-long residential program at Rutgers University, I took intensive STEM classes and helped build an autonomous e-waste sorting system. I worked on fusing YOLO camera vision with low-cost sensors, including a voltage-sensing circuit and a load sensor, to identify e-waste objects.",
      highlights: [
        "Worked on signal-noise filtering, Gaussian discriminant analysis for the load sensors, and validating the voltage-sensing circuit.",
        "Co-authored a paper published in the Governor's School forum, sponsored by Lockheed Martin.",
        "Won Best Poster Presentation (1 of 141) at MIT's 2026 Undergraduate Research Technology Conference."
      ],
      links: [],
      youtube: [],
      captions: {},
      related: []
    },

    {
      id: "bwsi-etextiles",
      shortTitle: "MIT BWSI: E-Textiles & Wearables",
      title: "E-Textiles and Wearable Technology",
      where: "Beaver Works Summer Institute (BWSI) at MIT",
      when: "June 2025",
      awards: [
        "Bob Berman Award for Disruptive Innovation (one student per course)"
      ],
      tags: ["E-textiles", "Wearables", "Prototyping"],
      summary: "In the E-Textiles and Wearable Technology course at MIT's Beaver Works Summer Institute, I built the first prototype of a soft-actuator vest to help breast cancer survivors manage late effects. This is where my independent soft actuator research began.",
      highlights: [
        "Built the first prototype of a soft-actuator vest for breast cancer survivors.",
        "Received the Bob Berman Award for Disruptive Innovation, given to one student with outstanding contributions in each course."
      ],
      links: [],
      youtube: [],
      captions: {},
      related: ["soft-actuators"]
    },

    {
      id: "etextile-cardio",
      shortTitle: "E-Textiles for Heart Health",
      title: "E-Textiles for Monitoring Cardiovascular Health",
      where: "Literature review",
      when: "2025",
      awards: [
        "1st Place, Literature Review, 2025 North Terra Jersey Fair (1/12)"
      ],
      tags: ["E-textiles", "Cardiovascular health", "Literature review"],
      summary: "A literature review of how electronic textiles can be used to monitor cardiovascular health, presented as a poster at the regional science fair.",
      highlights: [
        "Won 1st place in the Literature Review category (1 of 12) for the poster presentation at the 2025 regional science fair."
      ],
      links: [],
      youtube: [],
      captions: {},
      related: []
    }
  ]
};
