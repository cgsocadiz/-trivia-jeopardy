# COMPLETE PROJECT SPECIFICATION: TRIVIA JEOPARDY WEBSITE

## 1. Project Overview

Build a complete, responsive, interactive Jeopardy-style trivia game website called **Trivia Jeopardy**.

The website should take inspiration from the gameplay concepts of:

- JeopardyLabs: https://jeopardylabs.com/
- JeopardyLabs Game Builder: https://jeopardylabs.com/build/
- Official Jeopardy Play Page: https://www.jeopardy.com/play

Use these websites only as functional references. Create an original interface, visual identity, animations, and sample questions. Do not copy proprietary logos, copyrighted theme music, branded graphics, or exact website layouts.

The application is intended for classroom activities, office competitions, educational activities, events, and host-controlled trivia sessions.

The website must be fully functional, visually polished, and ready for direct deployment to GitHub Pages.

## 2. Mandatory Technology Stack

Use only:

- HTML5
- CSS3
- Bootstrap 5 via CDN
- Vanilla JavaScript ES6+
- GSAP via CDN
- Bootstrap Icons via CDN, if needed
- Web Crypto API for client-side password verification
- Fetch API for loading JSON data
- localStorage for optional gameplay recovery and editor drafts

Do not use:

- PHP
- React
- Vue
- Angular
- jQuery
- TypeScript
- Node.js runtime
- A database server
- A backend server
- A build system
- npm packages requiring compilation
- WebSockets
- Real-time multiplayer services
- Online player accounts

The application must not require a build command or package installation.

Use a local HTTP development server, such as VS Code Live Server, when testing features that load JSON using `fetch()`. Explain that directly opening HTML files through `file://` may prevent JSON requests from working.

## 3. Core Architecture

Build two separate pages:

1. `index.html` — public trivia game.
2. `admin.html` — password-gated game content management interface.

Both pages must load shared game content from:

`assets/data/questions.json`

The JSON file must contain both the published trivia content and the admin authentication configuration.

The application must separate:

- Published game content.
- Temporary gameplay state.
- Admin editor state.
- Password verification.
- Score management.
- Animation behavior.
- Browser persistence.

The game engine must never depend on the admin page being opened.

## 4. Project File Structure

Create the following project structure:

```text
trivia-jeopardy/
├── index.html
├── admin.html
├── README.md
├── LICENSE
├── .nojekyll
└── assets/
    ├── css/
    │   ├── styles.css
    │   └── admin.css
    ├── js/
    │   ├── app.js
    │   ├── game-state.js
    │   ├── game-engine.js
    │   ├── board.js
    │   ├── scoring.js
    │   ├── admin.js
    │   ├── password-auth.js
    │   ├── animations.js
    │   ├── persistence.js
    │   └── sample-data.js
    ├── data/
    │   └── questions.json
    └── images/
        └── README.md
```

Keep the project organized and avoid unnecessary files.

Use relative paths for all local assets, JavaScript files, stylesheets, and JSON requests. The website must work when hosted under a GitHub Pages repository subpath.

Use ordinary browser-compatible JavaScript. If ES modules are used, test the application over HTTP and document the requirement.

## 5. Visual Design and User Experience

Create a premium game-show visual style.

### Design direction

- Deep navy background.
- Royal-blue and cyan board accents.
- Gold or warm-yellow point values.
- White and light-gray text.
- Subtle gradients.
- Controlled glow effects.
- Clear typography.
- High-contrast interactive elements.
- Smooth transitions.
- Minimal unnecessary containers.
- Responsive layouts.
- Large, readable text for projector use.

Use CSS custom properties for colors, spacing, typography, and animation durations.

Use a modern sans-serif font with system font fallbacks.

The board should feel like a real trivia game rather than an administrative dashboard.

Avoid excessive rounded cards, tiny text, oversized empty spaces, and unnecessary perpetual animations.

Support desktop, tablet, and mobile layouts.

Respect `prefers-reduced-motion`.

## 6. Public Game Website

### 6.1 Home Screen

Display:

- Original game title: Trivia Jeopardy.
- Subtitle: "Pick a category. Choose your points. Prove your knowledge."
- Play Game button.
- Game Rules button.
- Sound toggle.
- Settings button.
- A sample board preview.
- An understated footer with an unofficial-game disclaimer.

Add GSAP animations for the title, buttons, and board preview.

Do not display an obvious admin dashboard or admin password on the public home screen.

An unobtrusive footer link to `admin.html` is acceptable.

### 6.2 Game Setup

Before starting, allow the host to configure:

- Team count, from 1 to 8.
- Team names.
- Team accent colors.
- Optional game title override for the current session.
- Incorrect-answer scoring rules.
- Whether answers must be phrased as questions.
- Timer enabled or disabled.
- Timer duration.
- Sound enabled or disabled.

Use sensible defaults and avoid making setup unnecessarily complicated.

Default configuration:

- 2 teams.
- 6 categories.
- 5 clues per category.
- Point values of 100, 200, 300, 400, and 500.
- Manual answer evaluation.
- No incorrect-answer deduction unless enabled.

Provide Start Game, Load Sample Game, and Back buttons.

### 6.3 Main Jeopardy Board

Create a responsive category-and-clue grid.

Display:

- Game title.
- Current round.
- Category headers.
- Point-value tiles.
- Team scoreboard.
- Active team indicator.
- Number of remaining clues.
- Optional timer.
- Host controls.

Each category should contain a configurable list of clues.

Each clue tile must:

- Display its point value.
- Be clickable while available.
- Open the corresponding clue.
- Become visually disabled after the clue is completed.
- Never allow a completed clue to be scored again.
- Provide hover and press animations.
- Support keyboard navigation.
- Have a clear focus indicator.

The board must be generated dynamically from `questions.json`.

Do not hard-code categories or clue values directly into the rendering logic.

On mobile, preserve usable tile dimensions and readable text through a responsive layout or horizontal scrolling.

### 6.4 Clue Presentation

When a clue is selected, display a dedicated clue view.

Initially display:

- Category name.
- Point value.
- Clue text.
- Optional explanation or media.
- Reveal Answer button.
- Return to Board button.
- Optional countdown timer.

Keep the correct response hidden until the host chooses to reveal it.

After revealing the answer, display:

- Correct.
- Incorrect.
- Skip.
- Team selection.
- Award or deduct points.
- Return to Board.

If the game requires question-form responses, show a reminder.

Answer evaluation must be host-controlled. Do not automatically judge a typed answer unless an optional checking feature is explicitly implemented.

Do not expose the correct response in the visible interface before it is revealed.

Mark the clue as completed only after the host commits the evaluation or skip action.

Prevent repeated clicks from producing duplicate score changes.

Use GSAP transitions for opening clues and revealing answers.

### 6.5 Team Scoreboard

Display all participating teams and their current scores.

Each team entry must include:

- Team name.
- Score.
- Team accent color.
- Optional active-team indicator.

Provide host controls to:

- Award points.
- Deduct points.
- Change the active team.
- Manually adjust a score.
- Review score history.
- Undo the most recent score transaction.

Use the selected clue's value as the default score adjustment.

Allow negative scores when permitted by the rules.

Centralize all score changes in `scoring.js`.

Each score transaction should record:

- Transaction ID.
- Team ID.
- Previous score.
- Score change.
- New score.
- Reason.
- Associated clue ID, if applicable.
- Timestamp.

Use score history to support accurate undo behavior.

Prevent duplicate transactions caused by repeated button clicks.

### 6.6 Daily Double

Support optional Daily Double clues.

When a Daily Double is selected:

1. Display a dramatic but brief event animation.
2. Identify the eligible team.
3. Allow the team to enter a wager.
4. Validate the wager.
5. Reveal the clue.
6. Reveal the correct response.
7. Evaluate the response.
8. Apply the wager to the score.
9. Record the result in score history.

A Daily Double clue's special status should not be displayed on the board before selection.

Use a configurable maximum wager and enforce the chosen rules consistently.

Prevent invalid wagers and duplicate score transactions.

### 6.7 Double Jeopardy

Support a second round with separate categories and clues.

Requirements:

- Independent clue completion tracking.
- Independent categories.
- Configurable point values.
- Default point values may be doubled.
- Shared team scores between rounds.
- Clear round transition.
- Host-controlled progression.

Allow the host to advance after completing the first round or manually advance if appropriate.

### 6.8 Final Jeopardy

Support an optional Final Jeopardy round.

Workflow:

1. Display the final category.
2. Collect each eligible team's wager.
3. Validate the wagers.
4. Keep wagers hidden from the visible interface until the reveal stage.
5. Reveal the final clue.
6. Allow the host to reveal the correct response.
7. Evaluate each team's answer.
8. Apply the wagers.
9. Display the final standings.

Use browser state to keep unrevealed wagers out of the visible interface.

Document that client-side data is not truly secret because it can be inspected through developer tools.

### 6.9 Results Screen

Display:

- Final rankings.
- Team names.
- Final scores.
- Winning team or tied winners.
- Number of completed clues.
- Total points awarded.
- Optional duration.
- Score history access.
- Play Again button.
- Return Home button.

Use a restrained GSAP celebration animation.

Do not arbitrarily select one winner when scores are tied.

## 7. Admin Page and Fixed Password Authentication

The admin interface must be located at:

`admin.html`

It must have a login screen before the content editor becomes visible.

### 7.1 Fixed Admin Password

The administrator chooses one fixed password during project setup.

Store only the authentication configuration in `assets/data/questions.json`. Never store the plaintext password.

Use a structure similar to:

```json
{
  "adminAuth": {
    "algorithm": "PBKDF2",
    "hashAlgorithm": "SHA-256",
    "iterations": 600000,
    "salt": "GENERATED_RANDOM_SALT_HEX",
    "passwordHash": "GENERATED_PASSWORD_HASH_HEX"
  },
  "game": {
    "title": "Trivia Jeopardy",
    "rounds": []
  }
}
```

The values shown are placeholders. Generate a real salt and password hash during development.

Requirements:

- Use PBKDF2-HMAC-SHA-256.
- Use the browser Web Crypto API.
- Generate a unique random salt using `crypto.getRandomValues()`.
- Derive a 256-bit hash.
- Store the salt and derived hash as hexadecimal strings.
- Configure an appropriate PBKDF2 iteration count, initially 600,000.
- Validate configuration before using it.
- Never embed the actual password in JavaScript or HTML.
- Never log the entered password.
- Never store the plaintext password in browser storage.

Provide a documented developer setup procedure or standalone local utility to generate the hash from a password selected by the project owner.

The utility must not silently insert a real password into the committed source code.

### 7.2 Login Workflow

When the admin opens `admin.html`:

1. Display a password input.
2. Provide a show/hide password control.
3. Load `questions.json` through a relative URL.
4. Read the authentication parameters.
5. Derive the entered password's PBKDF2 hash.
6. Compare it with the stored hash using a consistent byte representation.
7. Grant access to the editor only after successful verification.
8. Display a generic error when the password is incorrect.
9. Handle unavailable Web Crypto, malformed JSON, and failed requests.
10. Prevent the editor from rendering as accessible content before successful login.

Avoid timing leaks where practical, but do not describe client-side comparison as a security boundary.

### 7.3 Session Handling

- Maintain the authentication flag in memory.
- Do not store a reusable authentication token.
- Provide a Logout button.
- On logout, clear the in-memory authentication state.
- Hide the editor after logout.
- Require login again after a fresh page load.
- Avoid persistent login unless explicitly requested.

### 7.4 Important Security Limitation

This password mechanism is only a casual-access barrier.

GitHub Pages serves the authentication JavaScript and JSON publicly. Anyone can inspect the hash, salt, iteration count, and client-side verification logic. A visitor can also bypass the login by modifying JavaScript.

PBKDF2 slows password guessing but cannot make client-side authentication secure.

Do not claim that this system protects confidential information or provides true authorization.

If genuine protection is required, implement server-side authentication or a service that enforces authorization.

## 8. Admin Content Management Dashboard

After login, display a dedicated admin dashboard.

Design it as a practical content management interface, not a public-facing game screen.

Include:

- Dashboard overview.
- Game title editor.
- Round manager.
- Category manager.
- Clue editor.
- Point-value editor.
- Daily Double settings.
- Final Jeopardy editor.
- JSON import.
- JSON export.
- Preview board.
- Validation panel.
- Logout button.

### 8.1 Category Management

Allow the administrator to:

- Add categories.
- Rename categories.
- Delete categories.
- Reorder categories.
- View the number of clues in each category.
- Edit category descriptions if supported.

Ask for confirmation before deleting a category containing clues.

### 8.2 Clue Management

Each clue must support editing:

- Unique clue ID.
- Point value.
- Clue text.
- Correct response.
- Optional explanation.
- Optional image path.
- Daily Double flag.

Provide actions to add, edit, delete, duplicate, and reorder clues.

Use form validation and clear error messages.

Do not use unsafe HTML injection for user-entered content.

### 8.3 Round Management

Allow administrators to:

- Create a round.
- Rename a round.
- Reorder rounds.
- Edit point-value sequences.
- Add categories.
- Remove categories.
- Configure optional Daily Double clues.
- Configure Final Jeopardy.

### 8.4 JSON Export

Provide a prominent "Export questions.json" button.

When clicked:

1. Validate the entire game data structure.
2. Validate IDs and required fields.
3. Ensure each clue has a valid point value, clue text, and correct response.
4. Ensure the admin authentication configuration remains intact.
5. Serialize valid data as formatted JSON.
6. Download the result as `questions.json`.

Provide a separate "Export Backup" option if desired.

### 8.5 JSON Import

Allow the administrator to import an existing JSON file.

Requirements:

- Validate the JSON syntax.
- Validate the expected schema.
- Check for duplicate IDs.
- Check for missing categories and clues.
- Validate point values.
- Validate the authentication configuration.
- Preserve the current configuration if the imported file omits `adminAuth`.
- Never silently replace valid data with invalid data.
- Show a summary before applying the import.
- Provide a confirmation step.
- Offer an error report with field-specific details.

Do not allow a routine game-content import to silently change the admin password configuration.

### 8.6 Saving and Publishing Changes

Because GitHub Pages cannot write directly to the repository, the admin page must not pretend that exporting JSON updates the deployed site.

Use this workflow:

1. Load the published JSON.
2. Edit the content in browser memory.
3. Optionally save an unfinished editor draft in localStorage.
4. Export the updated JSON.
5. Replace `assets/data/questions.json` in the local project.
6. Commit and push the updated file.
7. Allow GitHub Pages to deploy the new version.

Display a brief note in the admin dashboard explaining this publishing process.

Local editor drafts must not be confused with published source data.

## 9. JSON Data Structure

Use a clear, documented schema.

A suggested structure is:

```json
{
  "schemaVersion": 1,
  "adminAuth": {
    "algorithm": "PBKDF2",
    "hashAlgorithm": "SHA-256",
    "iterations": 600000,
    "salt": "GENERATED_RANDOM_SALT_HEX",
    "passwordHash": "GENERATED_PASSWORD_HASH_HEX"
  },
  "game": {
    "id": "trivia-jeopardy",
    "title": "Trivia Jeopardy",
    "settings": {
      "incorrectAnswerDeduction": false,
      "requireQuestionForm": false,
      "dailyDoubleEnabled": true,
      "finalJeopardyEnabled": true
    },
    "rounds": [
      {
        "id": "round-1",
        "title": "Jeopardy Round",
        "categories": [
          {
            "id": "science",
            "name": "Science",
            "clues": [
              {
                "id": "science-100",
                "points": 100,
                "clue": "This planet is known as the Red Planet.",
                "answer": "Mars",
                "explanation": "Iron oxide gives its surface a reddish appearance.",
                "dailyDouble": false
              }
            ]
          }
        ]
      }
    ],
    "finalJeopardy": {
      "enabled": true,
      "category": "World Knowledge",
      "clue": "This is the largest ocean on Earth.",
      "answer": "The Pacific Ocean",
      "explanation": "It covers more area than any other ocean."
    }
  }
}
```

This is an illustrative schema. Implement and document the final schema consistently throughout the application.

Important:

- `adminAuth` belongs at the top level.
- All trivia content belongs under `game`.
- Keep scoring logic out of the JSON content.
- Use stable IDs rather than array indexes to identify entities.
- Preserve unknown optional fields where safe.
- Validate imported JSON before applying it.
- Do not put gameplay state into the published content file.

## 10. Sample Trivia Content

Provide a complete sample game containing at least 30 original trivia clues.

Include six categories:

1. General Knowledge.
2. Science and Nature.
3. World Geography.
4. History.
5. Technology.
6. Movies and Entertainment.

Each category must have five clues with point values of 100, 200, 300, 400, and 500.

Difficulty should generally increase with point value.

Include accurate answers and useful explanations where appropriate.

The game must be immediately playable after deployment.

Do not use empty placeholders, repeated questions, or fabricated factual claims.

Provide separate data for the optional Double Jeopardy round and Final Jeopardy if those modes are enabled.

## 11. Game State and Persistence

Keep the runtime state separate from published trivia data.

A suggested runtime state includes:

- Current game status.
- Current round ID.
- Current clue ID.
- Used clue IDs.
- Team list.
- Team scores.
- Score transaction history.
- Active team.
- Daily Double wager.
- Final Jeopardy wagers.
- Final results.
- Game start and end times.

Use localStorage only for optional runtime recovery, user preferences, and editor drafts.

Requirements:

- Validate saved state before restoring it.
- Handle corrupted storage gracefully.
- Include a clear saved-state reset action.
- Ask for confirmation before discarding progress.
- Avoid overwriting a valid game with invalid data.
- Ensure published questions are not silently modified by runtime scoring.

If a user refreshes during a game, offer to resume the saved session or start a new one.

## 12. GSAP Animation System

Use GSAP through a pinned CDN version.

Create a dedicated `animations.js` file.

Implement:

- Home screen entrance.
- Board entrance.
- Tile hover and press animations.
- Clue opening transitions.
- Answer reveal transitions.
- Score changes.
- Daily Double reveal.
- Round transitions.
- Final Jeopardy reveal.
- Results screen.
- Winner announcement.
- Modal transitions.
- Admin dashboard entrance.

Use timelines where they improve coordination.

Requirements:

- Do not accumulate duplicate event handlers.
- Clean up animations when changing views.
- Avoid animations blocking gameplay.
- Respect reduced-motion preferences.
- Avoid excessive perpetual animations.
- Use CSS transitions for simple effects.
- Ensure score changes remain correct even if an animation is interrupted.

If GSAP fails to load, essential gameplay must remain usable.

## 13. Audio and Visual Effects

Optionally implement original sound effects using Web Audio API or self-created assets.

Possible events:

- Tile selection.
- Clue reveal.
- Correct answer.
- Incorrect answer.
- Score update.
- Daily Double.
- Final winner.

Requirements:

- Sound disabled or unobtrusive by default.
- Visible mute toggle.
- Respect browser autoplay restrictions.
- Never copy proprietary Jeopardy! theme music.
- Do not make audio essential to gameplay.
- Do not let audio errors crash the game.

Use restrained celebratory effects for the final winner.

## 14. Keyboard and Host Controls

Support:

- Arrow keys for board navigation.
- Enter or Space to activate focused controls.
- R to reveal an answer during an active clue.
- Escape to close a modal or return when safe.
- M to toggle sound.
- F to request fullscreen.
- Number keys for optional team selection.

Do not trigger game shortcuts while the user is typing in an input, textarea, select, or editable field.

Provide a keyboard shortcut reference.

Use the Fullscreen API when supported, and handle browser restrictions gracefully.

## 15. Accessibility

Implement:

- Semantic HTML.
- Proper heading hierarchy.
- Keyboard accessibility.
- Visible focus indicators.
- Sufficient color contrast.
- Appropriate ARIA attributes for dialogs.
- Live announcements for score changes.
- Accessible error messages.
- Focus management for modals.
- Reduced-motion support.
- Usable layouts at different zoom levels.

Do not communicate state using color alone.

## 16. Error Handling and Validation

Handle:

- Failed JSON requests.
- Missing or malformed JSON.
- Missing authentication configuration.
- Invalid password hashes.
- Unavailable Web Crypto.
- Invalid category data.
- Duplicate IDs.
- Missing clues or answers.
- Invalid point values.
- Invalid wagers.
- Empty team names.
- Negative scores.
- Tied winners.
- Completed boards.
- Repeated score transactions.
- Invalid JSON imports.
- Corrupted localStorage.
- Storage quota errors.
- Interrupted animations.
- Unavailable CDN resources.
- Unsupported fullscreen functionality.

Display clear error messages and avoid silently corrupting data.

Use safe DOM APIs such as `textContent` when rendering user-controlled content.

Never use `eval()`.

## 17. GitHub Pages Deployment

Prepare the project for direct static deployment.

Requirements:

- `index.html` at the repository root.
- `admin.html` at the repository root.
- `questions.json` included in the repository.
- Correct relative asset paths.
- No server-side routes.
- No PHP.
- No database.
- No build command.
- No exposed API keys.
- No dependency on a GitHub username or repository name.
- HTTPS-compatible Web Crypto usage.

Provide README.md instructions:

1. Create a GitHub repository.
2. Add the project files.
3. Commit and push the code.
4. Open repository Settings.
5. Open Pages.
6. Configure deployment from the main branch and root directory.
7. Save the settings.
8. Wait for deployment.
9. Open the published URL.
10. Test the home page, JSON loading, gameplay, and admin page.

Also document:

- How to run the project locally using VS Code Live Server.
- How to generate the admin password hash.
- How to edit the trivia data.
- How to import and export JSON.
- How to publish updated questions.
- How to reset a saved game.
- The limitations of client-side authentication.

## 18. Testing Requirements

Test the following before declaring the project complete:

1. Open the home screen.
2. Load the sample game.
3. Configure teams.
4. Start gameplay.
5. Open a clue.
6. Reveal its answer.
7. Award points.
8. Deduct points when enabled.
9. Prevent duplicate scoring.
10. Undo a score transaction.
11. Complete the first round.
12. Complete Double Jeopardy if enabled.
13. Test Daily Double wagers.
14. Complete Final Jeopardy.
15. Confirm correct final rankings and tie handling.
16. Open the admin page.
17. Confirm a wrong password is rejected.
18. Confirm the configured password is accepted.
19. Confirm logout hides the editor.
20. Edit a category and clue.
21. Export the JSON file.
22. Import a valid JSON file.
23. Reject malformed JSON.
24. Preserve `adminAuth` during routine content editing.
25. Refresh and recover a saved game.
26. Test desktop, tablet, and mobile layouts.
27. Test keyboard navigation.
28. Test reduced-motion behavior.
29. Test GitHub Pages repository-subpath deployment.
30. Verify no browser console errors occur during normal gameplay.

Do not claim a test passed unless it was actually performed.

## 19. Implementation Workflow

Complete the project in this order:

Phase 1: Inspect the project directory and existing files.

Phase 2: Define the JSON schema, runtime state, and scoring rules.

Phase 3: Create the HTML structure and visual design.

Phase 4: Implement JSON loading and sample game data.

Phase 5: Implement the board, clue presentation, scoring, and round progression.

Phase 6: Implement Daily Double and Final Jeopardy.

Phase 7: Implement the admin login and PBKDF2 verification.

Phase 8: Implement category and clue editing, validation, and JSON import/export.

Phase 9: Implement local persistence and recovery.

Phase 10: Add GSAP animations, audio options, keyboard shortcuts, and accessibility.

Phase 11: Test gameplay, security limitations, and error handling.

Phase 12: Prepare README.md and verify GitHub Pages compatibility.

Do not stop after generating a visual prototype. Finish the essential gameplay and administration functionality.

If working in an existing project, inspect its current files and preserve unrelated user work.

Make reasonable implementation decisions without requesting confirmation after every phase.

## 20. Final Deliverables

Deliver:

- Complete `index.html`.
- Complete `admin.html`.
- All required CSS and JavaScript files.
- A valid `assets/data/questions.json`.
- At least 30 playable sample clues.
- A working host-controlled game.
- Team scoring and score history.
- Optional Daily Double and Final Jeopardy.
- A password-gated admin editor.
- PBKDF2 password hash verification using Web Crypto API.
- Category, clue, and round management.
- JSON import and export.
- Local gameplay recovery.
- GSAP animations.
- Responsive design.
- Keyboard accessibility.
- GitHub Pages deployment instructions.
- Admin password setup instructions.
- A summary of actual tests performed.
- A list of known limitations.

## Final Acceptance Criteria

The project is complete only when:

- The public game works without a backend.
- There is no real-time multiplayer functionality.
- The game loads trivia content from JSON.
- The admin page requires the configured password check.
- The administrator can edit categories, clues, and point values.
- Updated trivia data can be exported as valid JSON.
- The published JSON can be replaced through Git and redeployed.
- Gameplay scoring remains separate from published content.
- No clue can be scored twice in the same game.
- The application is responsive and animated.
- The project deploys directly to GitHub Pages without a build process.
- Security limitations of the static admin gate are documented accurately.

Begin by inspecting the project files, then build the complete working application.
