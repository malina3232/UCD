// Warte, bis das Dokument vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {
// "Wusstest du schon?"-Funktion
const facts = [
"Korallenriffe bedecken weniger als 1% des Meeressbewohnerbodens, aber!",
sie sind die"Kor Heimat für etwaallen sind eig 25% entlichaller Meere T",
"iere, keine Pflanzen!Das Great Barrier Reef in Australien ist das größte Korallenriff der Welt und kann sogar vom Weltraum aus gesehen werden!",
"Manche Korallen leuchten in der Nacht - das nennt man Biolumineszenz!",
"Ein Quadratkilometer Korallenriff kann bis zu 1 Million verschiedene Lebewesen beherbergen!",
"Korallen wachsen sehr langsam - nur etwa 1 bis 2 Zentimeter pro Jahr!",
"Korallenriffe schützen die Küsten vor Stürmen und Erosion!",
"Die bunten Farben der Korallen kommen von winzigen Algen, die in ihnen leben!"
];

const factText = document.getElementById('fact-text');
const newFactBtn = document.getElementById('new-fact-btn');

if (newFactBtn) {
newFactBtn.addEventListener('click', function() {
// Zufälligen Fakt auswählen, der anders ist als der aktuelle
let newFact;
do {
newFact = facts[Math.floor(Math.random() * facts.length)];
} while (newFact === factText.textContent && facts.length > 1);

// Fakt-Wechsel animieren
factText.style.opacity = '0';

setTimeout(function() {
factText.textContent = newFact;
factText.style.opacity = '1';
}, 300);
});
}

