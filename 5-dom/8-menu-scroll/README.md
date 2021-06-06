# Zadania - DOM
==========================


## Zadanie 1
--------------------------
Po kliknięciu na A przełącz klasę `.nav-li-active` z obecnie zaznaczonego elementu na kliknięty element.

Po kliknięciu na A przewiń stronę do odpowiedniego elementu na który wskazuje link

Zwróć uwagę że klasa `.nav-li-active` jest nadawana na element LI a nie na A.

Dla przewinięcia skorzystaj z:
https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView

Jak pobrać element na który wskazuje link?
Wystarczy pobrać atrybut href linka i wykorzystać go w querySelector.
Dla przykładu gdy link ma `<a href="#section1"></a>` to by pobrać element na który wskazuje link trzeba użyć instrukcji `document.querySelector("#section1")`


## Materiały:
--------------------------
https://kursjs.pl/kurs/dom/dom.php
https://kursjs.pl/kurs/events/events.php
