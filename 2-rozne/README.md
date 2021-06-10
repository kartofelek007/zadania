# Zadania - różne
==========================


## Zadanie 1
--------------------------
Napisz funkcję `countWord(txt)`, która wymagać będzie tekstu.
Funkcja powinna zwrócić liczbę słów z ilu składa się przekazany tekst.
Następnie użyj jej do wypisania tekstu:
`"Tekst 'tutaj twój przykładowy tekst' składa się z 4 wyrazów"`
Przykładowy tekst pobierz od użytkownika za pomocą funkcji `prompt()`.
Jeżeli użytkownik nic nie wpisze, wypisz w konsoli tekst `nie mam co liczyć`.

```
input: "Koty to fajne zwierzaki"
wynik:
Tekst "Koty to fajne zwierzaki" składa się z 4 wyrazów"
```


## Zadanie 2
--------------------------
Za pomocą funkcji `prompt()` pobierz od użytkownika jego imię.
Napisz funkcję `fixName(name)`, do której przekażesz przekazane imię.
Funkcja powinna zwrócić poprawione imię, które będzie pisane małymi literami i rozpoczynało się od dużej litery.
Wykorzystaj tą funkcję do wypisania w konsoli tekstu `"Imię Piotr rozpoczyna się od litery P"`.
Jeżeli użytkownik nic nie wpisze, w konsoli wpisz tylko tekst `"nic nie wpisano"`.
```
input: "ania"
wynik:
Imię Ania rozpoczyna się od litery A
```


## Zadanie 3
--------------------------
Napisz funkcję `fileInfo(file)`, która będzie przyjmować pełną nazwę pliku (wraz z rozszerzeniem).
Funkcja powinna zwracać obiekt, z właściwościami `name` oraz `extension`. Pod name podstaw nazwę przekazanego pliku, a pod extension jego rozszerzenie.
Jeżeli przekazany plik nie będzie w formacie `nazwa.rozszerzenie` (np. nie będzie miał nazwy plik.jpg), wtedy funkcja powinna zwróć false.


## Zadanie 4
--------------------------
Napisz funkcję `generateID()`, która po odpaleniu będzie zwracać losowy ciąg 20 znaków (liczb, cyfr i innych). Dowolna metoda kombinacji.


## Zadanie 5
--------------------------
Napisz funkcję `printNumbers(nr)`, która wymagać będzie liczby.
Funkcja powinna zwrócić tekst, który będzie składał się z kolejnych liczb.

```
input: printNumbers(12)
wynik: "123456789101112"
```


## Zadanie 6
--------------------------
Napisz funkcje, która przyjmuje 2 parametry:
1) imię - np: Ala
2) miesiąc - np: styczeń

Funkcja ma zwracać:
* jeżeli miesiąc to grudzien, styczen, luty: `"Ala jezdzi na sankach"`
* jeżeli miesiąc to marzec, kwiecien, maj: `"Ala chodzi po kaluzach"`
* jeżeli miesiąc to czerwiec, lipiec, sierpien: `"Ala sie opala"`
* jeżeli miesiąc to wrzesień, pazdzietnik, listopad: `"Ala zbiera liscie"`

Wywołaj funkcje przekazując do niej zmienne: twoje imię i dowolny miesiąc.

Dopisz w funkcji zabezpieczenie, które pozwoli wpisać miesiąc małymi lub dużymi literami. Jeżeli miesiąc jest "innym słowem", funkcja niech zwraca `"Ala uczy się JS"`


## Zadanie 7
--------------------------
Stwórz funkcję `generateRandom(min, max)`, która będzie przyjmować dwie wartości - min i max. Funkcja powinna zwrócić losową liczbę z podanego przedziału.
Do generowania losowej liczby możesz użyć wzoru: `Math.floor(Math.random()*(max-min+1)+min)`.

Wykorzystaj ją do utworzenia 10 liczb z przedziału `1 - 20`. Jeżeli połowa z nich będzie większa od `10`, wypisz tekst `udało się`, w przeciwnym razie wypisz w konsoli tekst `niestety nie`.


## Zadanie 8
--------------------------
Napisz kolejną funkcję `generateRandomTable(min, max, count)`, która korzystając w powyższej funkcji zwróci nową tablicę o długości `count`, która będzie zawierać losowe liczby. Możesz tutaj posłużyć się funkcją z poprzedniego zadania.

Wygeneruj nową tablicę o długości 10 z liczbami z zakresu 10-100000. Następnie robiąc pętlę po tej tablicy wypisz te liczby tak, by były pisane w jednej kolumnie - przykładowo:

```
_________10
________102
__________1
_______1002
______92020
```

Do wyrównania liczb możesz wykorzystać funkcję `padStart()`. Zakładamy, że pojedyncza linia powinna mieć długość maksymalnie 10 znaków.


## Zadanie 9
--------------------------
Mamy przykładowy tekst:

```
const str = "Ania|Marcin|Bartek|Piotr|Kuba|Beata|Agnieszka";
```

Napisz funkcję, która przyjmie 2 atrybuty:
- tekst
- znak rozdziału (np. `|`)

Skorzystaj z odpowiedniej metody, tak aby rozdzielić przekazany do funkcji tekst na części za pomocą przekazanego znaku rozdziału. W wyniku rozdzielenia powinieneś dostać tablicę. Funkcja niech posegreguje tą tablicę alfabetycznie. Następnie funkcja niech połączy tą tablicę w nowy tekst wstawiając między imiona znak wcześniejszego rozdziału. Skorzystaj tutaj z innej odpowiedniej metody js.

```
input: "Ania|Marcin|Bartek"
wynik:
"Ania|Bartek|Marcin"
```


## Zadanie 10
--------------------------
Napisz funkcję `printBorderText(txt)`, do której przekażesz przykładowy tekst.
Funkcja powinna wypisać w konsoli tekst obejmując go ramką (odpowiednie znaki skopiuj z poniższego przykładu):

```
╔═══════════════════════╗
║  To jest jakiś tekst  ║
╚═══════════════════════╝
```

Dodaj do funkcji kolejny parametr `max`. Będzie on określał maksymalną długość przekazanego tekstu. Jeżeli tekst będzie dłuższy, przytnij go do maksymalnej długości i dodaj do niego `...`. Przycięcie możesz dokonać za pomocą `slice()`.


## Zadanie 11
--------------------------
Mamy dwie zmienne:
```
const min = 1;
const max = 1000;
```
Za pomocą `prompt()` pobierz od użytkownika liczbę z przedziału `min-max`. Pamiętaj, że `prompt()` zwraca zawsze tekst, więc skonwertuj go na liczbę.
Jeżeli użytkownik poda liczbę spoza przedziału lub podana wartość nie będzie liczbą, wypisz w konsoli `podana wartość jest błędna`.

Wewnątrz pętli while generuj losową liczbę z przedziału `min-max` (możesz wykorzystać funkcję z poprzedniego zadania).
Wypisz w konsoli ile wykonało się iteracji, aż wylosowana liczba była równa tej, którą podał użytkownik. Pętlę while możesz przerwać warunkiem w jej nawiasach albo słowem `break`.


## Zadanie 12
--------------------------
Napisz funkcję `checkFemale(name)`, która sprawdza przekazane do niej imię.
Funkcja powinna zwracać prawdę lub fałsz w zależności od tego czy przekazane imię kończy się na literę `"a"`.
Przykładowo:

```
checkFemale("Ania") === true
checkFemale("Marcin") === false
```

Napisz funkcję `countWomanInTable(arr)`, do której przekażesz tablicę użytkowników, którą masz poniżej.
Funkcja powinna sprawdzić każdego użytkownika w tablicy i zwrócić ile jest kobiet.
Wykorzystaj tutaj powyższą funkcję. Do pobrania imienia możesz wykorzystać funkcję `split()`.

```
const users = [
    "Ania Nowak",
    "Piotr Kowalski",
    "Bartek Kosecki",
    "Natalia Nowak",
    "Weronika Piotrowska",
    "Agata Karolak",
    "Tomasz Nowak",
    "Mateusz Kowalski",
    "Marcin Kotecki",
    "Beata Lecka",
    "Katarzyna Małecka"
]
```


## Zadanie 13
--------------------------
Stwórz funkcję `monthName(nr)`, która będzie przyjmować tylko jeden atrybut - numer miesiąca. Funkcja powinna sprawdzić czy numer miesiąca jest prawidłowy (1-12). Jeżeli tak jest powinna zwrócić nazwę miesiąca w języku polskim. Wykorzystaj tutaj tablicę miesięcy. Jeżeli przekazana wartość jest spoza zakresu albo nie jest liczbą, funkcja powinna zwrócić false.

```
input : monthName(10)
wynik : październik

input : monthName("ala")
wynik : false
```


## Zadanie 14
--------------------------
Napisz funkcję `checkPalindrom(txt)`, która zwróci true/false w zależności od tego, czy przekazane słowo jest palindromem.
Przykładowo słowo `kajak` to palindrom, ale już `pies` nim nie jest.


## Zadanie 15
--------------------------
Napisz funkcję `mix(txt)`, która przyjmie dowolny tekst. Funkcja niech zwraca tekst, który ma zmiksowana wielkość liter np:

```
input -> Ala ma kota
output -> AlA Ma kOtA
```

Napisz dodatkowo 3 funkcje `smallNames(arr)`, `bigNames(arr)` i `mixNames(arr)`.
Każda z nich niech przyjmuje tablicę imion.
Pierwsza funkcja niech zwraca nową tablicę, w której imiona są zapisane małymi literami, druga dużymi, a trzecia zmiksowanymi literami.

```
input -> ["Ania" , "Marcin" , "Bartek" , "Piotr"]
output1 -> ["ania", "marcin", "bartek", "piotr"]
output2 -> ["ANIA" , "MARCIN" , "BARTEK" , "PIOTR"]
output3 -> ["AnIa" , "MaRcIn" , "BaRtEk" , "PiOtR"]
```


## Zadanie 16
--------------------------
Mamy przykładową tablicę:
```
const tab = [1,3,5,7,3,5,5,1,7,8,4,3,4,2,2,1];
```
Stwórz funkcję `arraySummary(arr)`, która zwróci obiekt zawierający dane na temat przekazanej tablicy.
Obiekt ten powinien mieć klucz `sum`, w którym zapiszesz sumę wszystkich liczb z tablicy.
Dodatkowo powinien mieć klucze odpowiadające liczbom z tablicy. Pod każdym takim kluczem powinieneś zachować liczbę wystąpień danej liczby.

```
Input:
const tab = [1,1,1,2,2,1,3,3,5,7,5]
Wynik:
const ob = {
    1 : 4,
    2 : 2
    3 : 2,
    5 : 2,
    7 : 1,
    sum : 31
}
```

## Zadanie 17
--------------------------
Napisz funkcję `log(txt)`, która będzie służyć do wypisywania tekstu w konsoli. Tekst powinien być poprzedzony numerem np. `1. To jest przykładowy tekst`. Numer powinien się automatycznie zwiększać przy każdorazowym użyciu tej funkcji. Nie wolno ci tutaj użyć zmiennej globalnej, a zamiast niej odpowiednich domknięć.
