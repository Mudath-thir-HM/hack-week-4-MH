@echo off
rem One-time setup: put a desktop shortcut that launches run.bat
set "HERE=%~dp0"
powershell -NoProfile -ExecutionPolicy Bypass -Command "$s=(New-Object -COM WScript.Shell).CreateShortcut([Environment]::GetFolderPath('Desktop') + '\DAW Instructors.lnk'); $s.TargetPath='%HERE%run.bat'; $s.WorkingDirectory='%HERE%'; $s.IconLocation='%HERE%assets\icons\app.ico'; $s.Save()"
echo Shortcut created on the Desktop.
pause
