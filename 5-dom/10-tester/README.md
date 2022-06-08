# Zadania - DOM
==========================


## Zadanie 1
--------------------------
Strona źle się wyświetla, ponieważ wychodzi poziomo poza ekran (pojawił się poziomy pasek przewijania).

Stwórz funkcję, która:
- pobierze wszystkie elementy z BODY,
- dla każdego elementu wylosuje losową liczbę z zakresu 0-360
- wylosowaną liczbę zapisze w atrybucie data-my-debug-color
- za pomocą właściwości outline lub box-shadow ustawi dla każdego elementu obramowanie na kolor `hsl(wartosc_atrybutu_data_my_debug_color, 100% 60%)`


## Zadanie 1b
--------------------------
Rozbuduj powyższą funkcję.
Po najechaniu kursorem na dowolny element w BODY, dodaj mu tło w kolorze `hsla(wartosc_atrybutu_data_my_debug_color, 100% 60%, 0.2)`, oraz wyświetl w prawym rogu ekranu tooltip z informacją o wymiarach najechanego elementu. Tooltip dodaj bezpośrednio do body i ustaw go za pomocą position fixed. Do pobrania rozmiarów najechanego elementu możesz użyć [getBoundingClientRect](https://developer.mozilla.org/pl/docs/Web/API/Element/getBoundingClientRect). Po zjechaniu kursorem z danego elementu ukryj tooltip ustawiając go poza ekranem (np. top: -99999px). Jeżeli masz problem z tym zadaniem, wróć do 7 zadania z mapą.


## Zadanie 2
--------------------------
Stwórzmy z powyższego kodu bookmarklet (https://www.freecodecamp.org/news/what-are-bookmarklets/ i https://pl.wikipedia.org/wiki/Skryptozak%C5%82adka).

Przejdź na stronę https://closure-compiler.appspot.com/home a następnie zminimalizuj kod funkcji z pierwszego zadania (tylko jej wnętrze).
Okryj go funkcją IIFE tak aby uzyskać kod w postaci:

```js
javascript: (() => { zminimalizowany_kod_wnętrza_funkcji_z_1_zadania })();
```

Utwórz w przeglądarce na pasku zakładek nową zakładkę, a następnie jako adres wklej cały uzyskany kod.
Przejdź na dowolną stronę i sprawdź czy twój nowy bookmarklet działa.


## Zadanie 3
--------------------------
W podobny sposób stwórz 2 dodatkowe bookmarklety.

Pierwszy z nich o kliknięciu powinien usunąć ze strony wszystkie style (czyli usunąć wszystkie elementy LINK, ale tylko te, które prowadzą do plików CSS), wszystkie elementy `<style>` oraz atrybuty style dla wszystkich elementów.

Drugi po kliknięciu powinien wypisać w konsoli debugera dodatkowe informacje:
- liczbę wszystkich elementów z body
- liczbę linków z podziałem na wewnętrzne i zewnętrzne (czyli zaczynające się od http)
- liczbę grafik img bez alt
- liczbę nagłówków
- wszystkie nagłówki po kolei w postaci "Hx -> tutaj tekst danego nagłówka"


## Materiały:
--------------------------
https://kursjs.pl/kurs/dom/dom.php
https://kursjs.pl/kurs/super-podstawy/number-math#randomColor