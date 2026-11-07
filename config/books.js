/* =====================================================================
   ✏️ MY BOOKS — the little bookshelf at the top of the Blog page.

   Each { ... } is one book on the shelf (left to right).
   title    → shown on the spine and in the journal page
   author   → shown in the journal page
   thoughts → your short write-up. Use \n\n between paragraphs.
              Leave it "" and the page says "thoughts coming soon..."
   current  → true = "currently reading" (gets a star + arrow note)
   finished → optional, e.g. "Summer 2025" (shown in the journal page)

   To add a book: copy a line, change the text, keep the commas.
   ===================================================================== */
window.BOOKS = {
  shelfTitle: "my books",
  currentNote: "currently reading!",

  books: [
    { title: "Freakonomics",                     author: "Steven D. Levitt & Stephen J. Dubner", thoughts: "" },
    { title: "The Penelopiad",                   author: "Margaret Atwood",                      thoughts: "" },
    { title: "Pride and Prejudice",              author: "Jane Austen",                          thoughts: "" },
    { title: "The Second Kind of Impossible",    author: "Paul J. Steinhardt",                   thoughts: "" },
    { title: "The Dawn of Everything",           author: "David Graeber & David Wengrow",        thoughts: "" },
    { title: "I Must Betray You",                author: "Ruta Sepetys",                         thoughts: "" },
    { title: "Death by Black Hole",              author: "Neil deGrasse Tyson",                  thoughts: "" },
    { title: "The Disappearing Spoon",           author: "Sam Kean",                             thoughts: "" },
    { title: "Notes from Underground",           author: "Fyodor Dostoevsky",                    thoughts: "" },
    { title: "On the Shortness of Life",         author: "Seneca",                               thoughts: "" },
    { title: "Life of Pi",                       author: "Yann Martel",                          thoughts: "" },
    { title: "The Alchemist",                    author: "Paulo Coelho",                         thoughts: "" },
    { title: "The Picture of Dorian Gray",       author: "Oscar Wilde",                          thoughts: "" },
    { title: "The Vegetarian",                   author: "Han Kang",                             thoughts: "", current: true }
  ]
};
