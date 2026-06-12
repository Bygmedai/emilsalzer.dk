# NIGHT-READY JOB — BYG-59
opgave: |
  Adresser picomatch ReDoS-advisories (CVE-2026-33671/33672) ved at loefte
  picomatch i 2.x-linjen til >=2.3.2 i package-lock.json. picomatch 4.x roeres ikke.
fremgang: |
  1. Find picomatch 2.3.1 i package-lock.json (under anymatch + readdirp)
  2. Brug 'npm install' til at opdatere lockfilen saa 2.x >= 2.3.2
  3. Verificer: 'npm ci' derefter 'npm run build' skal vaere groenne
  4. Hvis det ikke kan loeses inden for allowed_path_prefixes: STOP og forklar
graenser: kun package.json + package-lock.json. Ingen kildekode, ingen .github, ingen push/deploy.
