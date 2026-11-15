# MSX Zoetermeer

Nederlandstalige website van de MSX-gebruikersgroep in Zoetermeer. GitHub Pages publiceert de map `docs/` vanaf `main`. Voor lokaal gebruik is geen build of installatie nodig.

```sh
python3 -m http.server 8765 --directory docs
```

## Volgende editie

De datum is zaterdag 30 januari 2027. De locatie en tijden in de aangeleverde uitnodiging golden voor de vorige editie. Vul de bevestigde gegevens in bij **Praktisch** in `docs/index.html`. Pas bij een volgende editie ook de datum in de mailtekst in `docs/signup.js` aan.

## Aanmeldingen via de groepsmail

Het formulier opent een ingevulde mail aan `msxzoetermeer@gmail.com`. De bezoeker verstuurt die zelf. Het formulier toont ook kopieerbare tekst voor webmail. Alle keuzes beginnen uitgevinkt. Een tafelplek en bijdrage horen bij een bezoek, terwijl updates ook los kunnen worden aangevraagd.

1. Stuur bij een nieuwe aanvraag een bevestigingsverzoek **naar het ingevulde adres**. Herhaal de gemaakte keuzes en vraag de bezoeker om rechtstreeks op dat bericht te antwoorden met akkoord.
2. Registreer het bezoek en eventuele toestemming voor updates pas nadat het antwoord uit die mailbox is gekomen. Bewaar de bevestiging bij de betreffende keuzes.
3. Beantwoord aanvragen voor tafelruimte en bijdragen apart. Bevestiging van het e-mailadres geeft nog geen tafelplek of spreektijd.
4. Verwerk afmeldingen via de groepsmail. Bewaar evenementgegevens alleen zolang ze nodig zijn voor die editie.

## Voorstel voor automatische bevestiging per e-mail

Laat de site op GitHub Pages staan. Koppel het formulier aan een klein HTTPS-eindpunt en gebruik de [Brevo-API voor dubbele opt-in](https://developers.brevo.com/reference/create-doi-contact). Het eindpunt valideert de gegevens en roept Brevo aan met een API-sleutel die alleen aan de serverkant beschikbaar is. Beperk inzendingen per adres en per IP om misbruik van bevestigingsmails tegen te gaan.

- Maak een lijst per editie en een lijst voor terugkerende updates. Geef aan Brevo alleen de lijst-ID's door die de bezoeker heeft gekozen. Een aanvraag voor een tafel of bijdrage is onderdeel van het bezoek en krijgt een tekstveld voor de omschrijving.
- Activeer een Nederlandstalig bevestigingssjabloon met een link. Laat het eindpunt op de website alleen melden dat de bezoeker diens inbox moet bekijken. Verwerk het bezoek en de gekozen updates zodra de link is aangeklikt. Meld bij de bevestiging dat de organisatie een tafelplek of bijdrage afzonderlijk beoordeelt.
- Bewaar het moment van bevestigen en de gemaakte keuzes. Geef elke update een afmeldlink en verwijder evenementdetails na de afgesproken bewaartermijn. Test herhaalde aanmeldingen met een bestaand adres zodat een nieuwe aanmelding de eerdere toestemming voor updates alleen wijzigt bij een expliciete keuze.
- Voor ingebruikname zijn een Brevo-account, een geverifieerde afzender, het bevestigingssjabloon, de lijsten en het HTTPS-eindpunt nodig. Test daarna de volledige ontvangst en bevestigingslink met een testadres.

## Bronnen

- Bijeenkomstfoto's en verslagen van [oktober 2026](https://www.jeroenderwort.nl/msx-meetup-zoetermeer-oktober-2026/), [juni 2026](https://www.jeroenderwort.nl/msx-zoetermeer-editie-2026/) en [december 2025](https://www.jeroenderwort.nl/msx-bijeenkomst-zoetermeer/) via het weblog van Jeroen Derwort.
- Portret van [Jeroen Derwort](https://www.jeroenderwort.nl/over-mij-jeroen/) via zijn weblog. Het portret van Jeroen Taverne is een uitsnede uit het [interview van Conexión MSX in Nijmegen](https://www.youtube.com/watch?v=ogYD6qCQdlw). Zijn hardwareprojecten staan op [GitHub](https://github.com/jeroentaverne/msx_keyboard_interface) en bij [MSXdev](https://www.msxdev.org/2024/04/27/msxdev24-sponsoring-msx-pico/).
- Informatie over Steven van der Kwartel via [zijn openbare profiel](https://nl.linkedin.com/in/steven-van-der-kwartel-272a207).
- [MSX-logo](https://commons.wikimedia.org/wiki/File:MSX-Logo.svg) via Wikimedia Commons. De licenties voor de lettertypen staan bij de lokale fontbestanden.
