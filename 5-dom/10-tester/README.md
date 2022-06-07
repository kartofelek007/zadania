# Zadania - DOM
==========================


## Zadanie 1
--------------------------
Strona źle się wyświetla, ponieważ wychodzi poziomo poza ekran (pojawił się poziomy pasek przewijania).
Za pomocą JS stwórz i dodaj na początku strony przycisk z tekstem "mark all elements".
Napisz funkcję, która pobierze wszystkie elementy z BODY, a następnie nada każdemu z nich obramowanie (najlepiej za pomocą właściwości outline) z losowym kolorem. Po naciśnięciu przycisku odpal tą funkcję.


## Zadanie 2
--------------------------
Stwórzmy z powyższego kodu bookmarklet (https://www.freecodecamp.org/news/what-are-bookmarklets/ i https://pl.wikipedia.org/wiki/Skryptozak%C5%82adka).

Przejdź na stronę https://closure-compiler.appspot.com/home a następnie zminimalizuj kod swojej funkcji.
Okryj go funkcją tak aby uzyskać kod w postaci:
```js
javascript: (() => { tutaj_wklej_swoj_zminimalizowany_kod })();
```
Utwórz w przeglądarce na pasku zakładek nową zakładkę, a następnie jako adres wklej cały uzyskany kod.
Przejdź na dowolną stronę i sprawdź czy twój nowy bookmarklet działa.


## Materiały:
--------------------------
https://kursjs.pl/kurs/dom/dom.php
https://kursjs.pl/kurs/super-podstawy/number-math#randomColor