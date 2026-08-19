# AGENTS.md

<!--
  Denne fil er standarden 60.000+ projekter bruger og som Codex, Jules, Copilot,
  Cursor, Amp og Claude alle læser. Vercel Agent læser den FØRST når den anmelder.
  Den er doneret til Agentic AI Foundation (Linux Foundation) af OpenAI.

  DISCIPLIN — læs før du tilføjer noget:
  Anthropic fjernede 80% af Claude Codes systemprompt uden målbart tab på kode-evals
  (24. juli 2026). Målt over 1.867 repoer vokser den slags filer +226% i deres levetid,
  og fixet var IKKE at skrive mere: det var at give hver regel en begrundelse.
  Begrundelser fjernede 99,3% af det overflødige og gav +23,1% bedre efterlevelse.

  Derfor: hver regel her har et «fordi». En regel uden et fordi bliver slettet ved
  næste gennemgang. Hvis du ikke kan skrive begrundelsen, har du ikke en regel —
  du har en vane.

  Og: en fejlende test er en bedre specifikation end et afsnit prosa.
  Skriv testen i stedet for at skrive reglen, hvor du kan.
-->

## Hvad dette er

<!-- ÉN linje. Agenten kan læse resten af repoet selv. -->

## Kommandoer

```bash
npm ci
npm run build
npm test
npm run typecheck
```

## Faldgruber i netop dette repo

<!--
  Kun ting der har kostet os tid. Ikke generelle råd — modellen kender dem allerede.
  Format: regel — fordi <den konkrete hændelse>.
  Eksempler fra vores egne fejl:

  - react, react-dom, @types/react og @types/react-dom skal have EKSAKT samme version,
    ikke bare samme major — fordi `npm ci` var brudt på main i otte dage (S564) på præcis
    den fejl, og fejlmeddelelsen peger et helt andet sted hen.

  - Ethvert job der installerer browsere skal have `timeout-minutes` — fordi
    `playwright install --with-deps` hang fire gange på én dag, én gang i 148 minutter,
    og GitHubs standardgrænse er seks timer.
-->

## Grænser

- Rør aldrig `.github/workflows/`, `supabase/migrations/`, `CODEOWNERS` eller denne fil — fordi det er forsyningskæden, og en agent der kan ændre sin egen port har ingen port. Porten spærrer automatisk hvis du prøver.
- Læs aldrig produktionsdatabasen. Brug en branch — fordi en agent med `service_role` plus en supportsag fra en fremmed plus en udgående kanal er den fulde opskrift på datalæk (dokumenteret 6. juli 2025).
- Sig «det ved jeg ikke» frem for at gætte — fordi et gæt der lyder sikkert koster mere end et spørgsmål.

## Bevis før du melder færdig, og bevis det rigtige

Et fanget undtagelse er ikke et bevis på at noget er nægtet.
<!--
  S564: jeg testede om `anon` kunne kalde `is_admin()` ved at kalde den og fange fejlen.
  Den fejlede — men fordi funktionen refererede en tabel der ikke fandtes, ikke fordi
  adgangen var lukket. Jeg meldte grønt på en funktion der var vidåben.
  Spørg systemet om tilstanden (`has_function_privilege`, `row_count`, exit-koder),
  aldrig om det gjorde ondt at prøve.

  Og: RLS afviser ikke en UPDATE med en fejl. Den rammer nul rækker og lykkes.
  Tæl rækker, ikke undtagelser.
-->

## Kør det, inden du melder færdig

Kør buildet. Kør testene. Kør siden.
<!--
  Fordi Anthropics egen måling af langtidskørende agenter siger det direkte:
  agenten ændrer koden og undlader at opdage at funktionen ikke virker ende-til-ende.
  Og fordi en sprogmodel der bedømmer kode rammer Cohens κ = 0,159 — tæt på ren tilfældighed.
  Udførelse er det eneste orakel vi har.
-->
