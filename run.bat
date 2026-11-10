@echo off
rem DAW Instructors kiosk launcher
rem Starts the close-watcher, then opens index.html in Edge kiosk mode.
set "HERE=%~dp0"
start "" /b powershell.exe -NoProfile -WindowStyle Hidden -ExecutionPolicy Bypass -File "%HERE%tools\kiosk-watch.ps1" "%HERE%index.html"
start "" msedge --kiosk "%HERE%index.html" --user-data-dir="%LOCALAPPDATA%\DAWInstructorsKiosk" --no-first-run --disable-session-crashed-bubble --overscroll-history-navigation=0
