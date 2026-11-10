param([string]$IndexPath = "index.html")
# Closes the kiosk window when the app flags itself via document.title.
# Only ever targets windows whose title carries the marker, in the kiosk profile.
$marker = "__CLOSE_KIOSK__"
while ($true) {
    Start-Sleep -Milliseconds 500
    $procs = Get-Process msedge -ErrorAction SilentlyContinue | Where-Object { $_.MainWindowTitle -like "*$marker*" }
    foreach ($p in $procs) { Stop-Process -Id $p.Id -Force -ErrorAction SilentlyContinue }
}
