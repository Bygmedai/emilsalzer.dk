# Sådan passer du dit site

Alt foregår ét sted: **emilsalzer.dk/admin/**. Log ind med GitHub. Du behøver
aldrig røre kode, og du kan ikke ødelægge noget, der ikke kan rulles tilbage.

Når du trykker **Publish**, går ændringen live på cirka et minut.

---

## Bøger

I menuen til venstre hedder den **Bøger**. Hver bog er én post. Opretter du en
bog, får den både sin egen side *og* sin plads i oversigten på `/boeger/` — du
skriver den altså kun ét sted.

### Sådan opretter du en bog

1. Klik **Bøger** → **New bog**.
2. Udfyld felterne. De fleste forklarer sig selv; disse fire er værd at kende:

   | Felt | Hvad du skriver |
   |---|---|
   | **Bogens titel** | Kun navnet — «Kaosviol». Ikke «Kaosviol — Emil Salzer». Sitet sætter selv halen på i Google. |
   | **År** | Som det skal stå på bogsiden. Må gerne være et spænd: «2020–2022». |
   | **År i oversigten** | Ét tal. Det bestemmer hvor bogen står i rækken — højeste år øverst. |
   | **Pris i kroner** | Lad feltet være tomt, hvis bogen ikke sælges via MobilePay. Så skrives hele købsafsnittet slet ikke. Porto på 60 kr. lægges til automatisk. |

3. **Kladde**-fluebenet er sat på fra start. Så længe det står der, kan ingen
   besøgende se bogen. Skriv teksten i ro, og fjern fluebenet når du er klar.
4. **Publish**.

### Sådan ændrer du en bog

**Bøger** → klik på bogen → ret → **Publish**. Vil du midlertidigt tage en bog
af sitet, sætter du bare Kladde-fluebenet på igen.

### Bogens tekst

Ét afsnit ad gangen. `*stjerner om et ord*` giver *skråskrift*. Et link skrives
`[teksten der skal kunne klikkes](https://adressen.dk)`.

---

## Digte

I menuen hedder den **Digte**.

### Årstallet er en overskrift, ikke et mærkat

Årstallet står kun **én gang** på siden — over det første digt fra det år.
Alle digte derunder hører til samme årstal, uden at du skriver noget.

Så i praksis:

- Skriver du årets **første** digt: udfyld **År**.
- Skriver du et digt mere fra samme år: **lad År stå tomt.**

Feltet må gerne være tomt. Digtet arver så årstallet fra digtet ovenover.

### Rækkefølge

**Rækkefølge** styrer hvad der står øverst — højeste tal først. Feltet står på
99 fra start, så et nyt digt lander automatisk i toppen. Vil du flytte et digt
ned, giver du det et lavere tal.

### Links i noten

Noten under digtet kan indeholde links. Skriv dem sådan:

```
Trykt i [Modstommen](https://modstommen.dk) og i *Berlingske*.
```

Det bliver til: Trykt i [Modstommen](https://modstommen.dk) og i *Berlingske*.

Firkantede parenteser om teksten der skal kunne klikkes, runde parenteser om
adressen. Ingen mellemrum imellem dem.

---

## Hvis noget ser forkert ud

Siden bygges automatisk, hver gang du trykker Publish. Går der noget galt i
bygningen, **bliver den gamle udgave stående** — sitet går aldrig i sort af en
skrivefejl. Du kan altid åbne posten igen i `/admin/` og rette.

Hver ændring gemmes med tidspunkt, så alt kan rulles tilbage.
