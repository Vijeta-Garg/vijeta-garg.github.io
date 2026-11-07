# Vijeta Garg — Portfolio website

Hi this is my vibe-coded personal website : ) 

at **https://vijeta-garg.github.io**

Plain HTML + CSS + JavaScript. No build tools are needed: edit text files, push, done.

---

## 1. One-time setup (after the first push)

1. On GitHub, open the repo → **Settings** → **Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.
3. Open the **Actions** tab and wait for the green check (about 1 minute). The site is live.

From then on, **every push publishes the site automatically.**

---

## 2. Where things are

| I want to change… | Edit this file |
|---|---|
| Name, tagline, menu, GitHub/LinkedIn links, resume PDF | `config/site.js` |
| About Me text, GPA, highlights | `config/about.js` |
| Research topics (left index + details) | `config/research.js` |
| Projects (left index + details) | `config/projects.js` |
| Community activities | `config/community.js` |
| Blog page title | `config/blog.js` |
| Colors and fonts | top of `assets/css/style.css` |
| My photo | replace `assets/img/avatar.jpg` (square photo) |

You can use simple HTML inside config text, like `<b>bold</b>` or `<a href="https://...">a link</a>`.
**Keep the quotes, commas and brackets.** If a page goes blank after an edit, a comma or quote is usually missing.

---

## 3. Adding photos, videos, papers and slides

Each research topic and project has its own folder with four subfolders:

```
content/research/soft-actuators/
├── images/   → photo gallery     (.jpg .png .gif .webp)
├── videos/   → video players     (.mp4 .webm .mov)
├── files/    → documents         (.pdf .docx .xlsx … anything)
└── slides/   → slide viewer      (.pptx or .pdf)
```

**Just drop the files in and push.** GitHub scans the folders and updates the site.

- **Order:** files are sorted by name, so start names with numbers to control order: `01-rig.jpg`, `02-vest.jpg`.
- **Captions:** come from the file name (`01-testing-rig.jpg` → "testing rig"). For custom captions, add them in the config:
  `captions: { "01-testing-rig.jpg": "Validating the actuator on my test rig" }`
- **Big videos:** GitHub won't accept files over 100 MB. Upload big videos to YouTube (unlisted is fine) and add the link:
  `youtube: ["https://youtu.be/XXXXXXXXXXX"]`
- **PowerPoint:** `.pptx` files show in Microsoft's online viewer once the site is live (and always have a Download button). Exporting slides as PDF works too.
- **Community photos:** go in `content/community/<id>/images/`.
- **Empty sections** show a dashed "add files here" box. When you're done adding media, set
  `showEmptyMediaPlaceholders: false` in `config/site.js` to hide empty sections.

### Adding a new research topic or project
1. Copy one `{ ... }` block in `config/research.js` (or `projects.js`) and change the text. Give it a new `id`, like `id: "my-new-topic"`.
2. Create the folder `content/research/my-new-topic/` with `images/ videos/ files/ slides/` inside.

---

## 4. Writing a blog post

Add a `.md` file to `content/blog/` (copy `2026-11-01-welcome.md`, which explains the format), then push.
Start a file name with `_` to keep it as an unpublished draft.

---

## 5. Previewing on your computer

Double-click `index.html` to open it in your browser.

The list of uploaded files is only updated by GitHub, so **new photos and posts won't show locally** until you run:

```
node scripts/build-manifest.js
```

(Or ask Claude Code: *"rebuild the media manifest"*.) This needs Node.js installed. It's optional, because GitHub always does it when you push.

---

## 6. Publishing changes

```powershell
git add .
git commit -m "Describe what you changed"
git push
```

Or, in Claude Code: *"commit and push my changes"*.

---

Design inspired by [Shruti Garg's site](https://shrutigarg914.github.io) and João Franco's open-source (MIT) portfolio template.
