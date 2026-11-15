const form = document.querySelector("#signup-form");
const attend = document.querySelector("#attend");
const updates = document.querySelector("#updates");
const speak = document.querySelector("#speak");
const eventOptions = document.querySelector("#event-options");
const topicField = document.querySelector("#topic-field");
const topic = form.elements.namedItem("topic");
const feedback = document.querySelector("#feedback");
const manualCopy = document.querySelector("#manual-copy");
const draft = document.querySelector("#draft");

function syncChoices() {
  eventOptions.hidden = !attend.checked;
  for (const checkbox of eventOptions.querySelectorAll("input")) {
    checkbox.disabled = !attend.checked;
  }

  const asksToSpeak = attend.checked && speak.checked;
  topicField.hidden = !asksToSpeak;
  topic.disabled = !asksToSpeak;
  topic.required = asksToSpeak;
  topic.setCustomValidity(asksToSpeak && topic.value && !topic.value.trim()
    ? "Beschrijf kort je bijdrage."
    : "");
}

form.addEventListener("input", () => {
  syncChoices();
  feedback.hidden = true;
  manualCopy.hidden = true;
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!attend.checked && !updates.checked) {
    feedback.textContent = "Kies of je naar de bijeenkomst wilt komen, updates wilt ontvangen, of allebei.";
    feedback.hidden = false;
    attend.focus();
    return;
  }

  const data = new FormData(form);
  const lines = [
    "Hallo MSX Zoetermeer,",
    "",
    `Naam: ${data.get("name").trim() || "—"}`,
    `E-mailadres voor bevestiging: ${data.get("email").trim()}`,
    `Ik kom op 30 januari 2027: ${attend.checked ? "ja" : "nee"}`,
    `Ik wil updates over volgende edities ontvangen: ${updates.checked ? "ja" : "nee"}`,
  ];

  if (attend.checked) {
    lines.push(`Ik vraag een tafelplek aan: ${data.has("setup") ? "ja" : "nee"}`);
    lines.push(`Ik stel een bijdrage voor: ${data.has("speak") ? "ja" : "nee"}`);
    if (data.has("speak")) lines.push(`Mijn bijdrage: ${data.get("topic").trim()}`);
  }

  lines.push("", "Stuur mij een e-mail om mijn adres en keuzes te bevestigen.");
  const message = lines.join("\r\n");
  const subject = attend.checked ? "Aanmelding MSX Zoetermeer — 30 januari 2027" : "Updates MSX Zoetermeer";
  draft.value = message;
  manualCopy.hidden = false;
  feedback.textContent = "Verstuur de aanmeldmail vanuit je e-mailprogramma. Opent er geen bericht? Gebruik dan de tekst hieronder.";
  feedback.hidden = false;
  window.location.href = `mailto:msxzoetermeer@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
});

syncChoices();
form.hidden = false;
