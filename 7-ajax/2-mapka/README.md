# Zadania - ajax mapka
==========================


## Zadanie 1
--------------------------
Pobierz dane z adresu:
https://restcountries.com/v3.1/all
W odpowiedzi dostaniesz listę państw.
Na jej podstawie wygeneruj option'y i wrzuć je do selekta o id #countrySelect
Każdy option powinien mieć postać np. &lt;option value="Afganistan">Afganistan&lt;/option>
Po wrzuceniu optionów musisz aktywować ten selekt, bo jest obecnie wyłączony


## Zadanie 2
--------------------------
Podepnij się pod "zmianę" selekta.
Gdy ktoś wybierze inną opcję z selekta, pobierz jego wartość i wykonaj połączenie ajax na adres:
https://restcountries.com/v3.1/name/{name}

gdzie `name` to przekazana z selekta nazwa państwa.

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