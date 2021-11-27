# Zadania - tablice
==========================


## Zadanie 1
--------------------------
Stwórz tablicę z 6 losowymi zwierzakami.
Napisz funkcję `showArray(arr)`, która wypisze kolejne elementy przekazanej tablicy. Zrób to na trzy sposoby za pomocą pętli `for`, `for of` oraz metody `forEach`.
Dodatkowo wypisz długość każdego słowa a na końcu sumę wszystkich liter występujących w tablicy.


## Zadanie 2
--------------------------
Napisz funkcję `checkPalindrom(txt)`, która zwróci prawdę/fałsz w zależności od tego, czy przekazane słowo jest palindromem.
Przykładem palindromu jest słowo `kajak`.


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

Stwórz funkcję `unifyNames(names)`, do której przekażesz powyższą tablicę. Funkcja powinna zwrócić nową tablicę z imionami pisanymi małymi literami. Dla utrudnienia możesz zwrócić nową tablicę z imionami pisanymi z dużej litery.

Wykorzystaj powyższą funkcję aby uzyskać nową tablicę.
Stwórz kolejną funkcję `countDifferentNames(names)`, do której przekażesz nowo uzyskaną tablicę. Funkcja powinna zwrócić liczby występowania danego imienia.
Idealnym rozwiązaniem będzie, gdy funkcja zwróci te informacje pod postacią obiektu.


## Zadanie 4
--------------------------
Stwórz funkcję `random(max)`, która będzie zwracać losową liczbę z zakresu `0 - max`. Wykorzystaj tą funkcję do wygenerowania 20-elementowej tablicy. Posortuj tą tablicę,  a następnie wypisz sumę oraz średnią wszystkich liczb z tej tablicy.


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
Jeżeli ich nie ma, wypisz w konsoli tekst `same małolaty`. Jeżeli jednak tacy są, stwórz nową tablicę zawierającą tylko pełnoletnie osoby, posortuj ją, a następnie wypisz w konsoli.


## Zadanie 7
--------------------------
Napisz funkcję `generateArray()`, która za pomocą pętli oraz funkcji `String.fromCharCode()` stworzy i zwróci tablicę składającą się z kolejnych dużych liter. Litera A to kod 65, natomiast Z to 90.

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


## Zadanie 8
--------------------------
Jako poszukiwacz przygód, doszedłeś do tajemniczej komnaty, na ścianie której znajduje się tajemniczy zapis:

```
const arr = [
	[ 66,  97, 114, 100,   4,   2, 110,  11,   1,   6,  20, ],
	[ 99,   3,  10, 122,  76, 101, 111,   3,  32, 100,   0, ],
	[  6,  22,   1, 111,  32,  10, 110,   7,  97,  97,  67, ],
	[ 60,  97, 116,  32, 100,  23,  97, 114, 100,  32,  34, ],
	[  2, 106,  15,   6, 111,  56,  80,  20,  10,  86,  10, ],
	[ 20, 110,  121, 32, 107,  55,  50,  99, 110, 105,   8, ],
	[ 12,   9,  22, 102,  66, 100,  12, 105,  50,  76, 110, ],
	[ 42,  81, 123,  92,  26,  98,  20,   1,  20,  11,  10, ],
]
```

W starych notatkach znajdujesz tylko krótki ciąg, który ponoć wskazuje kierunek poruszania się po powyższym zapisie.

```
const str = "rrrdddllddrrruuuurrddrruurddddlld";
```

Twoim zadaniem jest zdekodować ukrytą informację. Dekodowanie rozpoczynasz w lewym górnym rogu, a następnie powinieneś się poruszać zgodnie z literami, gdzie `r` oznacza prawo, `d` dół, `l` lewo, a `u` górę.

Po pobraniu kodów z odpowiednich miejsc zamień je na litery za pomocą `String.fromCharCode(x)`.
Wynikiem powinien być wypisane w konsoli hasło.



## Materiały:
--------------------------
https://kursjs.pl/kurs/super-podstawy/tablice.php
https://kursjs.pl/kurs/super-podstawy/funkcje.php



