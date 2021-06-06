# Zadania - DOM
==========================


## Zadanie 1
--------------------------
W pliku html mamy mapę. Dołączone są też 2 skrypty: cities.js i app.js
W tym pierwszym jest tablica z miastami - nie musisz go ruszać, ale przejrzeć powinieneś.

1) Zrób pętlę po tej tablicy i wygeneruj dla każdego miasta w tablicy element w html:

```
<a
    href="http://www.poznan.pl/"
    class="map-marker"
    data-name="Poznań"
    data-population="542689"
    style="left: 180px; top: 270px;"
>Poznań</a>
```

Wykorzystaj tutaj dataset, classList, style itp.
Wygenerowany element **wrzuć do mapy**. Wszystkie dane potrzebne do wygenerowania takiego elementu są w tablicy.

2) Wygeneruj nowy element o właściwościach:
```
<div class="map-tooltip" style="left: -9999px; top: -9999px"></div>
```

3) Złap wygenerowane wcześniej markery (`.map-marker`)

Dla każdego takiego markera podepnijmy zdarzenia:
a) mouseover:
    - niech wypełnia tooltipa htmlem:
        ```
        <h2>Nazwa miasta</h2>
        <div>Population: <strong>Populacja miasta</strong></div>
        ```
    - niech ustawia go w pozycji kursora myszki (dodaj +30 do x i y)
    - niech pokazuje tooltipa
b) mousemove:
    - niech ustawia tooltipa w pozycji kursora myszki (dodaj +30 do x i y)
c) mouseout:
    - niech ukrywa toolip
    - niech czyści html tooltipa


## Materiały:
--------------------------
https://kursjs.pl/kurs/dom/dom.php
https://kursjs.pl/kurs/events/events.php
