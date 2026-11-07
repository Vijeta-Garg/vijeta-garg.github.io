/* =====================================================================
   ✏️ COMMUNITY page (community.html)
   id → photos dropped in content/community/<id>/images/ appear under that card.
   note → optional scribbled tag pinned to a corner of the card:
          { corner: "top-right" or "bottom-right", text: "..." }
   ===================================================================== */
window.COMMUNITY = {
  pageTitle: "Community",
  intro: "Service, leadership and the communities I'm part of.",

  items: [
    {
      id: "model-un",
      note: { corner: "bottom-right", text: "★ Also created and maintain the <a href=\"https://ehsmun.onrender.com/\" target=\"_blank\" rel=\"noopener\">EHSMUN website</a> ↗" },
      title: "Model United Nations",
      role: "Secretary General, school Model UN Club",
      awards: ["Verbal Commendation, Princeton MUN", "2× Outstanding & Verbal, UPenn MUN"],
      highlights: [
        "Organize our school's conference EHSMUN every year, attended by students in our region! Chaired committees on the Outer Space Treaty and the Bangladesh Liberation War.",
        "Run meetings during the school year and manage fundraising and registration logistics for regional and national conferences.",
        "Won awards at national conferences, including a Verbal Commendation at Princeton MUN and two Outstanding and Verbal awards at UPenn MUN."
      ]
    },
    {
      id: "omid",
      note: { corner: "top-right", text: "★ you can learn more about Omid and see our chapter mentioned <a href=\"https://www.omidforgirls.org/chapters\" target=\"_blank\" rel=\"noopener\">here</a> ↗" },
      title: "OMID: Tutoring Afghan Girls",
      role: "Founder & President, Edison High School chapter · Tutor",
      highlights: [
        "Founded our school's OMID chapter, which now has 28 active members and 12 current tutors.",
        "Tutor in math and English; I've tutored two Afghan girls online for the past year."
      ]
    },
    {
      id: "hack-club",
      title: "Hack Club",
      role: "Stasis Sidekick · Program organizer",
      highlights: [
        "Was a “Stasis sidekick” for the Stasis hardware program for girls, mentoring girls through their hardware projects and answering questions on Slack.",
        "Currently organizing a soft robotics “You Ship, We Ship” program with Hack Club to get more girls into hardware."
      ]
    },
    {
      id: "edison-tour-guide",
      title: "Thomas Edison Center at Menlo Park",
      role: "Tour Guide · 3 years",
      highlights: [
        "Tell visitors from around the world the story of Thomas Edison and his work on the phonograph and the light bulb at the Menlo Park lab.",
        "Also help manage the front desk and gift shop."
      ]
    },
    {
      id: "tennis",
      title: "Tennis",
      role: "Captain · 4× Varsity Player",
      awards: ["Coach's Award, Fall 2026"],
      highlights: [
        "Team captain and four-time varsity player.",
        "Won the Coach's Award in Fall 2026.",
        "Semifinalist at 1st Doubles in the Greater Middlesex County Conference (2025)."
      ]
    },
    {
      id: "piano",
      title: "Piano",
      role: "Pianist · 7 years",
      awards: ["3× Carnegie Hall Pianist", "2× 1st Place, International Crescendo Music Competition", "2nd Place, International Crescendo Music Competition"],
      highlights: [
        "Pianist for 7 years, playing everything from <i>Dance of the Sugar Plum Fairy</i> by Tchaikovsky to <i>Italian Polka</i> by Rachmaninoff.",
        "Performed at Carnegie Hall three times and at Zankel Hall once.",
        "Placed 1st twice and 2nd once at the International Crescendo Music Competition.",
        "Have played multiple times for the annual national language honors induction ceremony at my school."
      ]
    }
  ]
};
