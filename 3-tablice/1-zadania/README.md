# Zadania - tablice
==========================


## Zadanie 1
--------------------------
Stwórz tablicę z 6 losowymi zwierzakami.
Napisz konsolę `showArray(arr)`, która wypisze kolejne elementy przekazanej tablicy. Zrób to na trzy sposoby za pomocą pętli `for`, `for of` oraz metody `forEach`.
Dodatkowo wypisz długość każdego słowa oraz sumę wszystkich liter występujących w tablicy.


## Zadanie 2
--------------------------
Napisz funkcję `checkPalindrom(txt)`, która zwróci prawdę/fałsz w zależności od tego, czy przekazane słowo jest palindromem.
Palindrom to słowo, które brzmi tak samo czytane normalnie i wspak. Przykładem palindromu jest słowo `kajak`.


## Zadanie 3
--------------------------
Mamy przykładową tablicę imion:

```
const names = [
    "Marcin",
    "Ania",
    "Monika",
    "Piotr",
    "Beata",
    "ania",
    "marcin",
    "piotr",
    "PIOTR",
    "ANIA",
    "MONIKA"
]
```

Stwórz funkcję `unifyNames(names)`, do której przekażesz powyższą tablicę. Funkcja powinna zwrócić nową tablicę z imionami pisanymi małymi literami.

Wykorzystaj tą funkcję by uzyskać nową tablicę.
Stwórz kolejną funkcję `countDifferentNames(names)`, która wypisze ile występuje każde z imion w przekazanej tablicy.
Idealnym rozwiązaniem będzie to, gdy funkcja zwróci te informacje pod postacią obiektu.


## Zadanie 4
--------------------------
Stwórz funkcję `random(max)`, która będzie zwracać losową liczbę z zakresu `0 - max`. Za pomocą pętli i korzystając z tej funkcji wygeneruj tablicę z 20 losowymi liczbami. Następnie ją posortuj, wypisz jej elementy w konsoli, a następnie wypisz sumę oraz średnią wszystkich liczb z tej tablicy.


## Zadanie 5
--------------------------
Mamy tablicę:

```
const tab = [
    "xloremipsumdolor",
    "kloremipsum",
    "aloremipsumdol",
    "blor",
    "cloremipsu",
    "gloremip",
]
```

Posortuj ją po długościach kolejnych elementów. Na początku powinien być najkrótszy tekst, na końcu najdłuższy.
Następnie wypisz w konsoli, ile liter mają wszystkie elementy razem.


## Zadanie 6
--------------------------
Mamy tablicę:

```
const tabUsers = [
    {name : "Marcin", age: 14},
    {name : "Piotr", age: 18},
    {name : "Weronika", age: 20},
    {name : "Ania", age: 19},
    {name : "Agnieszka", age: 13},
    {name : "Magda", age: 30},
]
```

Sprawdź, czy w tablicy znajdują się pełnoletni użytkownicy.
Jeżeli ich nie ma, wypisz w konsoli tekst `same małolaty`. Jeżeli jednak tacy się tam znajdują, stwórz nową tablicę zawierającą tylko pełnoletnie osoby, posortuj ją a następnie wypisz w konsoli.


## Zadanie 7
--------------------------
Napisz funkcję `generateArray()`, która za pomocą pętli oraz funkcji `String.fromCharCode()` stwórzy i zwróci tablicę składającą się z kolejnych dużych liter. Litera A to kod 65, natomiast Z to 90.

Napisz funkcję `splitArray(tab, nr)`, do której przekażesz powyższą tablicę oraz liczbę `nr`. Funkcja powinna zwrócić tablicę tablic, gdzie każda podtablica będzie składać się z `nr` kolejnych liter. Możesz tutaj wykorzystać metodę `slice()` dostępną dla tablic.


```
input: splitArray(tab, 6)
wynik:
[
    ["A", "B", "C", "D", "E", "F"],
    ["G", "H", "I", "J", "K", "L"],
    ["M", "N", "O", "P", "Q", "R"],
    ["S", "T", "U", "V", "W", "X"],
    ["Y", "Z"]
]
```




## Materiały:
--------------------------
https://kursjs.pl/kurs/super-podstawy/tablice.php
https://kursjs.pl/kurs/super-podstawy/funkcje.php



