 $found = Get-ChildItem -Path 'C:\Users\Owner\Downloads' -Filter *.mp4 -File | Where-Object { $_.Name -like '*Watermark*' } | Select-Object -First 1
 if ($found -eq $null) {
   Write-Output 'NO_MATCH'
   exit 1
 }
 $src = $found.FullName
 New-Item -ItemType Directory -Force -Path 'public\videos' | Out-Null
 Copy-Item -LiteralPath $src -Destination 'public\videos\hero.mp4' -Force
 if (Test-Path 'public\videos\hero.mp4') { Write-Output 'COPIED' } else { Write-Output 'FAILED' }

