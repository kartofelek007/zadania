# Zadania - DOM
==========================


## Zadanie 1
--------------------------
1) pobierz ze strony element `#menu` i dodaj do niego klasę `.menu`
2) Pobierz z tego menu wszystkie elementy A i LI
3) Po wjechaniu kursorem na każde LI dodaj temu LI klasę `.active`, a wszystkim pozostałym LI usuń klasę `.active`
4) Po kliknięciu na każdy link w menu zrób następujące czynności:
    - zatrzymaj domyślną akcję
    - wszystkim LI poza tym w którym znajduje się kliknięty link dodaj klasę `.collased`
    - rodzicowi klikniętego linka (LI) dodaj klasę `.expand` (nie powinien mieć klasy `.collapsed`)
    - rodzicowi klikniętego linka dodaj event "transitionend", w którym podepniesz funkcję przez nazwę (nie anonimową). Funkcja ta może się dla przykładu nazywać elementTransitionEnd.

    W funkcji tej:
    - usuń zdarzenie "transitionend" który właśnie dodałeś http://kursjs.pl/kurs/events/events.php#addEventListener
    - wypisz w konsoli href linka w tym LI (alternatywnie użyj `location.href = pobranyHref`)

5) Dla chętnych:
    W powyższej funkcji:
    - stwórz dodatkowo nowy element który jest buttononem z klasą `.close` i tekstem "Zamknij"
    - element ten dodaj do tego LI

    Po kliknięciu na przycisk `.close` wszystkim LI usuń klasę `.expand` oraz klasę `.collapsed`
    Usuń kliknięty przycisk `.close`


## Materiały:
--------------------------
https://kursjs.pl/kurs/dom/dom.php
https://kursjs.pl/kurs/events/events.php
