# Zadania - obiekty
==========================


## Zadanie 1
--------------------------
Stwórz 2 obiekty: `rectangle` i `circle`.
Obiekt rectangle powinien mieć właściwości `height`, `width`, natomiast circle właściwość `radius`.
Oba obiekty powinny mieć metodę `showArea()`, która zwróci pole danej figury.

Wypisz oba obiekty w konsoli.
Wypisz w konsoli teksty podstawiając odpowiednie dane w miejsce kropek:

```
Kwadrat ma szerokość ... i wysokość ...
Jego pole to ...

Koło ma promień ...
Jego pole to ...
```


## Zadanie 2
--------------------------
Stwórz obiekt **currentUser**. Obiekt niech ma właściwości:
`name`, `surname`, `email`, `www`, `userType`, `isActive`.

oraz metodę `show()`, która wypisze wszystkie te właściwości w konsoli.

Dodatkowo stwórz metodę `setActive(active)`, która przestawi właściwość `isActive` na przekazaną wartość, która
może być true/false.



## Zadanie 3
--------------------------
Stwórz obiekt book, który będzie miał właściwości:
`title`, `author`, `pageCount`, `publisher`.

oraz metodę: `showDetails()`, która zrobi pętlę po tym obiekcie wypisując wszystkie
jego klucze oraz ich wartości. Metoda ta nie powinna wypisywać tylko funkcji `showDetails()`.

Wypisywanie właściwości wykonaj za pomocą pętli `for in`, oraz pętli po kolekcjach `Object.keys()`, `Object.values()`, `Object.entries()`.


## Zadanie 4
--------------------------
Stwórz prosty obiekt **spaceShip**, który będzie miał:

#### Właściwości:
- **name** ustawioną na Enterprise
- **currentLocation** ustawioną na Earth
- **flyDistance** ustawione na 0

#### Metody:
- **flyTo(place, distance)**, która ustawi obiektowi właściwość `currentLocation` na odpowiednie miejsce podane w parametrze `place` oraz doliczy przebyty dystans do `flyDistance`.

- Metodę **showInfo()**, która wypisze w konsoli tekst:

    ```
    Informacje o statku:
    ----
    Statek ....
    doleciał do miejsca .....
    Statek przeleciał już całkowity dystans ....
    ```

- Metodę **meetClingon()**, która wykona 100 losowań 0-1. Jeżeli minimum połowa będzie pozytywna (większa niż połowa), wtedy powinna wypisać w konsoli:

    ```Statek .... będący w okolicy .... zwycięsko wyszedł ze spotkania z Klingonami```

    jeżeli jednak mniej niż połowa będzie pozytywna, powinien pojawić się żółty tekst w konsoli (console.alert)

    ```Statek .... będący w okolicy .... został pokonany przez Klingonów```


## Zadanie 5
--------------------------
Stwórz obiekt **book**, który będzie miał:

#### Właściwości:
- **users**
    która będzie tablicą użytkowników (na początku pusta)

#### Metody:
- **addUser(name, age, phone)**

    która doda to tablicy `users` nowy obiekt, który będzie miał klucze:
    name, age, phone z przekazanymi do tej funkcji danymi

- **showUsers()**

    która po odpaleniu wypisze w konsoli tekst:
    `Wszyscy użytkownicy w książce` a następnie w pętli wypisze wszystkich użytkowników

- **findByName(name)**

    która wypisze w konsoli pierwszego użytkownika, który ma szukane imię
    lub `false` jeżeli nie znajdzie.

- **findByPhone(phone)**

    która wypisze w konsoli pierwszego użytkownika, który ma szukany telefon
    lub `false` jeżeli nie znajdzie

- **getCount()**

    która wypisze ile jest użytkowników w tabeli


## Zadanie 6
--------------------------
Stwórz obiekt o nazwie **tableGenerator**.
Obiekt ten powinien mieć tylko metody:

1. **randomNumber(min, max)**

    zwraca losową liczbę z przedziału `min`-`max`

2. **generateIncTable(nr)**

    zwraca nową tablicę z liczbami od 0 do `nr`

3. **generateRandomTable(lng, min, max)**

    zwraca nową tablice o długości `lng` z losowymi liczbami z przedziału `min`-`max`

4. **generateTableFromText(str)**

    generuje nową tablicę ze słowami z tekstu `str`
    Jeżeli przekazany tekst nie jest tekstem, wtedy powinna być zwrócona pusta tablica
    Wykorzystaj odpowiednią metodę dla String

5. **getMaxFromTable(arr)**

    zwraca największą liczbę z tablicy `arr`

6. **getMinFromTable(arr)**

    zwraca najmniejszą liczbę z tablicy `arr`

7. **delete(arr, index)**
    usuwa z tablicy `arr` element o indexie `index`


## Zadanie 7
--------------------------
Stwórz obiekt o nazwie **text**. Obiekt ten powinien mieć metody:

1. **check(txt, word)**

    która zwraca `true/false` jeżeli w tekście `txt` znajduje się szukane słowo `word`

    ```
    check("ala ma kota", "kota")
    ---> true
    ```

2. **getCount(txt)**

    Zwraca liczbę liter w tekście `txt`. Uwaga znaki interpunkcyjne też traktujmy jako litery

    ```
    getCount("ala ma kota")
    ---> 11
    ```

3. **getWordsCount(txt)**

    zwraca liczbę słów w przekazanym tekście

    ```
    getWordsCount("Ala ma kota")
    ---> 3
    ```

4. **setCapitalize(txt)**

    zwraca nowy tekst tak zamieniony, że każde słowo zaczyna się z dużej litery

    ```
    setCapitalize("ala ma kota")
    ---> "Ala Ma Kota"
    ```

5. **setMix(txt)**

    zwraca nowy tekst z naprzemiennie dużymi/małymi literami. Spację i znaki interpunkcyjne traktujemy jako litery.

    ```
    setMix("ala ma kota")
    ---> "aLa mA KoTa"
    ```

6. **generateRandom(lng)**

    Generuje tekst o długości `lng`, który składa się z losowych liter

    ```
    generateRandom(10)
    ---> "dkjiuhtjox"
    ```


## Materiały:
--------------------------
https://kursjs.pl/kurs/obiekty/obiekty.php