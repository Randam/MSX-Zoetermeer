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

## Voorstel voor automatische aanmeldingen zonder eigen backend

Laat de site op GitHub Pages staan en gebruik twee [Brevo-formulieren](https://help.brevo.com/hc/en-us/articles/208771869-Create-a-sign-up-form-in-Brevo). Brevo Free heeft een limiet van [300 e-mails per dag](https://help.brevo.com/hc/en-us/articles/208580669-FAQs-What-are-the-limits-of-the-Free-plan). Deel de openbare formulierlinks via de website. Brevo beheert de formulieren, bevestigingen en contactgegevens.

1. Maak de lijst **MSX-updates**. Koppel hieraan een formulier met e-mailadres, toestemming voor updates en dubbele bevestiging. Verstuur uitnodigingen als campagne naar deze lijst en laat de afmeldlink in iedere nieuwsbrief staan.
2. Maak **Deelnemers 30 januari 2027** en koppel hieraan een eigen formulier met dubbele bevestiging. Vraag naam, e-mailadres, tafelplek (ja/nee), bijdrage (ja/nee) en een korte omschrijving van de bijdrage. Dit formulier heeft eigen bevestigingstekst en is alleen gekoppeld aan de deelnemerslijst.
3. Open de deelnemerslijst onder **CRM → Contacts** en toon de velden voor tafelplek, bijdrage en omschrijving als kolommen. Die gegevens kunnen ook mee in een [CSV-export](https://help.brevo.com/hc/en-us/articles/5310065850642-Export-your-contacts-from-Brevo). Een aanvraag voor tafelplek of spreektijd beoordeelt de organisatie zelf.
4. Test voor ingebruikname een nieuw adres, een bestaande abonnee die zich voor de bijeenkomst aanmeldt en iemand die na afmelding voor updates een bezoek aanvraagt. Controleer de bevestigingsmails, beide lijstlidmaatschappen en de afmeldlink. Maak bij een volgende editie een eigen deelnemerslijst en formulier. Exporteer de benodigde gegevens van de vorige editie voordat je dezelfde contactvelden opnieuw gebruikt.

Gebruik bij voorkeur een afzender op een [geverifieerd eigen domein](https://help.brevo.com/hc/en-us/articles/12163873383186-Authenticate-your-domain-with-Brevo-Brevo-code-DKIM-DMARC). De groepsmail kan het antwoordadres zijn.

## Bronnen

- Bijeenkomstfoto's en verslagen van [oktober 2026](https://www.jeroenderwort.nl/msx-meetup-zoetermeer-oktober-2026/), [juni 2026](https://www.jeroenderwort.nl/msx-zoetermeer-editie-2026/) en [december 2025](https://www.jeroenderwort.nl/msx-bijeenkomst-zoetermeer/) via het weblog van Jeroen Derwort.
- Portret van [Jeroen Derwort](https://www.jeroenderwort.nl/over-mij-jeroen/) via zijn weblog. Het portret van Jeroen Taverne is een uitsnede uit het [interview van Conexión MSX in Nijmegen](https://www.youtube.com/watch?v=ogYD6qCQdlw). Zijn hardwareprojecten staan op [GitHub](https://github.com/jeroentaverne/msx_keyboard_interface) en bij [MSXdev](https://www.msxdev.org/2024/04/27/msxdev24-sponsoring-msx-pico/).
- De organisatie leverde het portret van Steven van der Kwartel aan. Achtergrondinformatie via [zijn openbare profiel](https://nl.linkedin.com/in/steven-van-der-kwartel-272a207).
- [MSX-logo](https://commons.wikimedia.org/wiki/File:MSX-Logo.svg) via Wikimedia Commons. De licenties voor de lettertypen staan bij de lokale fontbestanden.
