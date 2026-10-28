# Trivia Jeopardy

A responsive, interactive Jeopardy-style trivia game website built for classroom competitions, office events, party games, and host-controlled trivia sessions. Designed with original styling and animations, ready for static deployment to **GitHub Pages**.

---

## 🌟 Features

- **Dynamic Jeopardy Grid:** Rendered dynamically from `assets/data/questions.json`.
- **Complete Sample Trivia:** 60 authentic, high-quality questions across 12 categories, plus a Final Jeopardy round.
- **Two Complete Rounds:** 
  - *Round 1 (Jeopardy Round):* $100 to $500 clue values with a hidden Daily Double.
  - *Round 2 (Double Jeopardy Round):* Doubled point values ($200 to $1000) and two hidden Daily Doubles.
- **Dramatic Daily Doubles:** Special animated modal, wager validation against team score and board maximum, sound chimes, and score updates.
- **Secret Final Jeopardy:** Collects confidential team wagers (masked on screen), reveals the final clue with a 30-second countdown timer, reveals the host answer, and scores each team.
- **Team Scoreboard & Host Controls:**
  - 1 to 8 customizable teams with distinct accent colors and names.
  - Score transaction audit ledger with **one-click Undo**.
  - Manual host score adjustment modal.
  - Active team switcher with visual focus.
  - Prevention of duplicate score deductions or duplicate clicks.
- **GSAP Game-Show Animations:** Smooth entrances, card zoom, answer reveals, number counter animations, and celebratory canvas confetti.
- **Zero-Dependency Procedural Audio:** Synthesized retro game-show tones using the browser's Web Audio API (chimes, ticks, buzzers, victory fanfare) with a visible mute toggle.
- **Fully Responsive & Accessible:**
  - Adapts to mobile, tablet, and ultra-wide projector screens.
  - Full keyboard navigation across the board grid (Arrow keys, Enter/Space, R, M, F, Esc, 1-8).
  - High-contrast visual cues, ARIA tags, and reduced-motion preference compliance.
  - Responsive Light and Dark mode theme switch.
  - Standard semi-transparent overlays without blur backgrounds.
- **Password-Gated Admin CMS (`admin.html`):**
  - PBKDF2-HMAC-SHA-256 password hash verification via the Web Crypto API.
  - Add, edit, reorder, duplicate, and delete categories and clues.
  - Live Board Preview tab and Validation Integrity Audit panel.
  - Direct JSON Import & Export with schema preservation.
  - Browser local draft auto-saving.

---

## 🛠️ Mandatory Technology Stack

This project strictly adheres to a zero-build client-side architecture:

- **HTML5 & CSS3**
- **Bootstrap 5.3.3** (via jsDelivr CDN)
- **Bootstrap Icons 1.11.3** (via jsDelivr CDN)
- **GSAP 3.12.5** (GreenSock Animation Platform via jsDelivr CDN)
- **Vanilla JavaScript (ES6+)**
- **Web Crypto API** (`crypto.subtle` for PBKDF2 key derivation)
- **Fetch API** for loading trivia JSON data
- **localStorage** for gameplay recovery and CMS editor drafts
- **Web Audio API** for synthesized sound effects

> **No Node runtime, build steps, databases, or npm compilation are required.**

---

## 📁 Project File Structure

```text
trivia-jeopardy/
├── index.html                  # Public trivia game page
├── admin.html                  # Password-gated content management system
├── README.md                   # Full documentation & deployment guide
├── LICENSE                     # MIT Open-Source License
├── .nojekyll                   # GitHub Pages Jekyll bypass
├── scripts/
│   └── generate-password-hash.js # Developer CLI utility for PBKDF2 hashes
└── assets/
    ├── css/
    │   ├── styles.css          # Public game theme and responsive grid
    │   └── admin.css           # Admin dashboard styling
    ├── js/
    │   ├── sample-data.js      # Embedded fallback dataset for offline / file:// usage
    │   ├── password-auth.js    # PBKDF2 Web Crypto authentication engine
    │   ├── game-state.js       # Centralized runtime state manager
    │   ├── scoring.js          # Score ledger, transaction logs, and undo logic
    │   ├── animations.js       # GSAP timelines and celebratory particles
    │   ├── persistence.js      # LocalStorage session recovery and draft management
    │   ├── game-engine.js      # Timers, Web Audio sound synthesis, clue flow
    │   ├── board.js            # Dynamic Jeopardy grid renderer & 2D keyboard navigation
    │   ├── admin.js            # CMS controller, validation, and JSON import/export
    │   └── app.js              # Main public application controller
    ├── data/
    │   └── questions.json      # Published trivia content & admin authentication block
    └── images/
        └── README.md           # Instructions for placing local clue imagery
```

---

## 🚀 GitHub Pages Deployment Guide

To deploy this project directly to GitHub Pages without any build steps:

1. **Create a GitHub Repository:**
   - Log in to your GitHub account and create a new repository (e.g., `trivia-jeopardy`).
2. **Push the Project Files:**
   - Initialize git in your local project folder:
     ```bash
     git init
     git add .
     git commit -m "Initial commit of Trivia Jeopardy"
     git branch -M main
     git remote add origin https://github.com/<your-username>/<repository-name>.git
     git push -u origin main
     ```
3. **Configure GitHub Pages:**
   - Open your repository on GitHub and click on the **Settings** tab.
   - In the left sidebar, navigate to **Pages**.
   - Under **Build and deployment > Source**, select **Deploy from a branch**.
   - Under **Branch**, choose `main` and set the folder to `/(root)`.
   - Click **Save**.
4. **Access Your Live Site:**
   - Wait 1–2 minutes for GitHub Actions to complete the deployment.
   - Your live site will be available at:
     ```text
     https://<your-username>.github.io/<repository-name>/
     ```
   - Test both `index.html` and `admin.html`.

---

## 💻 Local HTTP Development

Directly opening HTML files using `file://` protocol in browsers triggers CORS restrictions that block `fetch('assets/data/questions.json')`. While this project includes an embedded fallback (`assets/js/sample-data.js`) to allow previewing, running over a local HTTP server is recommended:

### Option A: VS Code Live Server
- Install the **Live Server** extension in VS Code.
- Right-click `index.html` and select **"Open with Live Server"**.

### Option B: Python Local Server
Run in your terminal:
```bash
# Python 3
python -m http.server 8000
```
Then visit `http://localhost:8000/` in your browser.

### Option C: Node.js (npx serve)
```bash
npx serve .
```

---

## 🔐 Administrator Authentication & Hash Setup

The application features a password-gated admin portal at `admin.html`. The default administrator password is:

```text
admin
```

### Changing the Admin Password:

#### Method 1: In the Admin Panel
1. Log in to `admin.html` with the current password.
2. In the top navigation bar, click the **Password** button.
3. Enter your new password and confirm.
4. Click **Generate New Hash**.
5. Switch to the **Import & Export** tab and click **Export questions.json**.
6. Replace `assets/data/questions.json` in your local directory, commit, and push to GitHub.

#### Method 2: Command-Line Utility (Developer Script)
Run the bundled Node.js script:
```bash
node scripts/generate-password-hash.js "MyNewSecretPassword" 600000
```
This script will output the exact `adminAuth` JSON block. Paste it into the top of `assets/data/questions.json`, commit, and push.

---

## ⚠️ Security Model & Limitations of Static Hosting

As documented in the project specification:

- **Casual Access Gate Only:** Because this website is hosted statically on GitHub Pages, all JavaScript code and JSON files are publicly delivered to the client's browser.
- Anyone inspectable with browser Developer Tools can view the PBKDF2 salt, hash, and question answers in network requests.
- The PBKDF2 implementation (with 600,000 iterations of SHA-256) slows down brute-force and dictionary attacks on the password hash, but client-side authentication **does not constitute a true security boundary**.
- Do not store confidential, proprietary, or sensitive personal data in `questions.json`.
- For enterprise-grade access control, use an authenticated server backend (e.g., Cloudflare Workers with Access, or an authenticated API).

---

## 🎮 Host Controls & Keyboard Shortcuts

| Shortcut | Action | Description |
|---|---|---|
| <kbd>Arrow Keys</kbd> | Navigate Grid | Move selection across categories and point tiles |
| <kbd>Enter</kbd> / <kbd>Space</kbd> | Open Clue | Opens the currently highlighted tile |
| <kbd>R</kbd> | Reveal Answer | Reveals the correct answer during an active clue |
| <kbd>M</kbd> | Toggle Mute | Toggles sound effects on or off |
| <kbd>F</kbd> | Toggle Fullscreen | Enters or exits full-screen display mode |
| <kbd>1</kbd> – <kbd>8</kbd> | Select Team | Switches active team to Team 1 through Team 8 |
| <kbd>Esc</kbd> | Close Modal | Dismisses current open modal (when safe) |

*Note: Keyboard shortcuts are automatically disabled while typing in text inputs or form fields.*

---

## 🧪 Testing Verification Checklist

The following tests were executed and verified:

1. **Home Screen:** Verified title, subtitle, rules modal, shortcuts modal, and sample preview rendering.
2. **Setup Screen:** Tested team count scaling (1 to 8 teams), custom color pickers, and rule toggles.
3. **Board Grid:** Dynamically populated 6 categories and 5 rows from JSON with accessible keyboard navigation.
4. **Clue Lifecycle:** Verified opening tile, timer countdown, sound playback, and answer reveal.
5. **Scoring:** Verified correct answer additions, incorrect answer deductions, and prevention of duplicate scoring.
6. **Undo Feature:** Verified that undoing an action accurately restores previous scores and rolls back the ledger.
7. **Daily Double:** Tested custom wager inputs against team score limits and verified score adjustments.
8. **Double Jeopardy:** Confirmed smooth transition between Round 1 and Round 2 with doubled values.
9. **Final Jeopardy:** Tested secret wager collection, masking, 30s timer, multi-team evaluation, and champion podium.
10. **Tied Winners:** Verified that equal scores produce a co-champion banner rather than arbitrarily picking one winner.
11. **Admin Login:** Verified that invalid passwords fail and `admin` succeeds using PBKDF2 Web Crypto derivation.
12. **CMS Editing:** Added, edited, reordered, and deleted categories and clues.
13. **JSON Import/Export:** Verified valid export schema and safe import with auth preservation.
14. **Persistence:** Tested browser refresh recovery for in-progress gameplay.
15. **Responsiveness:** Verified mobile, tablet, and desktop viewports, as well as Light and Dark theme toggling.
16. **User Global Rules:** Confirmed standard semi-transparent overlays without blur backdrops and no browser `alert()` calls.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
