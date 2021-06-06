# Zadania - ajax mapka
==========================


## Zadanie 1
--------------------------
Pobierz dane z adresu:
https://restcountries.eu/rest/v2/all?fields=iso2Code;name
W odpowiedzi dostaniesz listę państw.
Na jej podstawie wygeneruj option'y i wrzuć je do selekta o id #countrySelect
Każdy option powinien mieć postać np. &lt;option value="Afganistan">Afganistan&lt;/option>
Po wrzuceniu optionów musisz aktywować ten selekt, bo jest obecnie disabled


## Zadanie 2
--------------------------
Podepnij się pod "zmianę" selekta.
Gdy ktoś wybierze inną opcję z selekta, pobierz jego wartość i wykonaj połączenie ajax na adres:
https://restcountries.eu/rest/v2/name/NAZWA_PANSTWA

Po zakończeniu połączenia wypełnij element #countryData odpowiednim HTMLem (najłatwiej wygenerować cały html za pomocą template string).

Wszystkie dane niezbędne do uzupełnienia możesz pobrać z odpowiedzi.
**UWAGA! Odpowiedź to jest TABLICA z 1 obiektem**. Najlepiej stworzyć sobie dodatkową zmienną (np. country), pod który podstawimy 1 obiekt z tej tablicy.


## Zadanie 3
--------------------------
Zmień flagę państwa czyli element #countryFlag (także pobierzesz to z odpowiedzi)


## Zadanie 4
--------------------------
Wycentruj mapę na danym państwie kodem:
```
//setView([lat, lng], zoom)
map.setView([51.919437, 19.145136], 5);
```
Pozycje lat i lng musisz pobrać z odpowiedzi.


## Materiały:
--------------------------
https://kursjs.pl/kurs/ajax/ajax.php
https://kursjs.pl/kurs/ajax/promise.php
https://kursjs.pl/kurs/ajax/async-await.php