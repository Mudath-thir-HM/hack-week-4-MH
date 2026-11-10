# Instructors — Department of Air Warfare

Hall of Fame kiosk screen for the DAW, AFCSC Jaji. Landscape, offline, no build step.

## Run

- `run.bat` — opens index.html in Edge kiosk (fullscreen, no chrome) and starts the close watcher.
- `prepare.bat` — once, puts a desktop shortcut on the Desktop.
- Or open `index.html` directly in any browser.
- Close the kiosk with the X (top right). The watcher ends the Edge kiosk window;
  opened as an ordinary tab, the X shows an operator hint instead.

## Screens

1. Threshold — touch to enter the corridor.
2. Corridor — 3D tube of nameplates, each with its rank epaulette; gates lead to each office chronicle.
3. Chamber — full roll in order of service; DS grouped by decade; current holder in gold; each card carries its rank epaulette.
4. Person — nameplate with full rank epaulette on a dark panel, name, tenure, roll position.
5. Search — on-screen keyboard across all 554 records; results carry rank epaulettes.

## Data

Everything lives in `data/data.js`. portrait-free entries render their rank slide.
Rank epaulette images live in `assets/img/epaulettes/` (transparent PNGs shown on dark chips),
mapped by rank in `RANKIMG` in `js/app.js`.
Flags for the client (also in the file header): DIR Sunmonu '21→91; DIR Audu '21→23;
Excel serials converted for JC CIs Mohammed/Mamman/Ezekiel and 9 DS entries; remarks column dropped per instruction.

## Dev flags

`?static` skips the threshold (design review / screenshots).
