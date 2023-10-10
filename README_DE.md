# Arrays | Teil 2

- Arbeite in der Datei `solution.js`, die du in diesem Repository findest.
  
**1. Die Größeren Zahlen.**

Erstelle eine Funktion mit dem Namen `findGreatest`, die zwei Argumente akzeptiert: Das erste Argument ist ein Array mit Zahlen und das zweite Argument ist eine Zahl. Die Funktion soll die Zahlen aus dem Array zurückgeben, die größer als das zweite Argument sind.

d.h.:

`findGreatest([3, 4, 5], 4)` ➞ 5

`findGreatest([10, 20, 30], 12)` ➞ 20, 30

`findGreatest([0, 10, 3], 4)` ➞ 10

**2. Das längste Wort.**
Erstelle eine Funktion namens `getLongestWord`, um das längste Wort in einem gegebenen String zu finden.

z.B. `getLongestWord("this is a web development course")` ➞  "development"

**3. Umkehren.**
Erstelle eine Funktion namens `reverseNum`, um eine Zahl umzukehren.

d.h. `reverseNum(34532)` ➞ 23543
d.h. `reverseNum(-34532)` ➞ -23543

Tipp: `Math.sign()` gibt das positive oder negative Vorzeichen der Ganzzahl zurück
[MDN für Math.sign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sign)

**4. "AEIOU": Vokale.**
Erstelle eine Funktion namens `vowelCounter`, die einen String als Parameter annimmt und die Anzahl der Vokale (z.B. im Englischen "a, e, i, o, u") in der Zeichenkette zählt.

z.B.: `vowelCounter("this is a string")` ➞ 4


**5. Fehlende Zahl.**
Erstelle eine Funktion namens `findMissingNum`:
- Als Argument nimmt sie ein Array mit einer Folge von ganzen Zahlen zwischen 1 und N (N ≤ 10). Dabei wird eine Zahl aus dieser Reihe ausgelassen.
- Die Funktion gibt die ausgelassene Zahl zurück.

Beispiele:
* `findMissingNum([1, 2, 3, 4, 6, 7, 8, 9, 10])` ➞ 5
* `findMissingNum([7, 2, 3, 6, 5, 9, 1, 4, 8])` ➞ 10
* `findMissingNum([[2, 1, 3, 4, 6, 7, 8]])` ➞ 5

**6. Cubed.**
Erstelle eine Funktion namens `sumOfCubes`, die eine Reihe von Zahlen aufnimmt und die Summe der Kubikzahlen zurückgibt.

Beispiele:
* `sumOfCubes([1, 5, 9])` ➞ 855 // Da 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855
* `sumOfCubes([2])` ➞ 8
* `sumOfCubes([])` ➞ 0

**7. Wörterbuch.**
Erstelle eine Funktion namens `dictionary`, die eine Anfangszeichenkette und ein Array mit Wörtern annimmt und ein gefiltertes Array mit den Wörtern zurückgibt, die mit denselben Buchstaben beginnen wie die Anfangszeichenkette.

Anmerkungen:
* Wenn keines der Wörter übereinstimmt, wird ein leeres Array zurückgegeben.
* Behalte das gefilterte Array in der gleichen relativen Reihenfolge wie das ursprüngliche Array der Wörter.

Beispiele:
* `dictionary("bu", ["button", "breakfast", "border"])` ➞ ["button"]
* `dictionary("tri", ["triplet", "tries", "trip", "piano", "tree"])` ➞ ["triplet", "tries", trip"]
* `dictionary("beau", ["pastry", "delicious", "name", "boring"])` ➞ []

**8. Generator für gerade Zahlen.**
Erstelle eine Funktion namens `getEvenNums`, die alle geraden Zahlen von 1 bis zur angegebenen Zahl findet.

Beispiele:
* `getEvenNums(8)` ➞ [2, 4, 6, 8]
* `getEvenNums(4)` ➞ [2, 4]
* `getEvenNums(2)` ➞ [2]
**Anmerkungen:**
* Wenn es keine geraden Zahlen gibt, wird ein leeres Array zurückgegeben.
* Nimm keine 0 auf.

**9: Alphabetische Reihenfolge**.
Erstelle eine Funktion namens `alphabetise`, um eine Zeichenkette in alphabetischer Reihenfolge zu sortieren. **BEACHTE:** Gehe davon aus, dass Zahlen, Symbole und Satzzeichen nicht in der Zeichenkette enthalten sind.

z.B.: `alphabetise("webdev")` ➞ "bdeevw"
