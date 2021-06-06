# Zadania - debugger
==========================


## Zadanie 1
--------------------------
W pliku users.js jest tablica użytkowników. Naszym zadaniem będzie za pomocą pętli podliczenie zarobków wszystkich użytkowników.

W pliku app.js programista przygotował prosty kod, który robi pętlę po tej tablicy i liczy zarobki, następnie wypisuje odpowiedni komunikat w konsoli. Niestety rezultat nie jest prawidłowy.

Będąc w konsoli debugera kliknij na nr. linię po prawej stronie (app.js:7).
Zostaniesz przeniesiony do zakładki Sources do odpowiedniej linii.

Postaw breakpoint w linii 7 i jeszcze raz odśwież stronę. Skrypt zatrzyma się we wskazanym miejscu. Zbadaj jak wygląda zmienna sum najeżdżając na nią kursorem. Jakiego jest typu i skąd to może wyglądać?

Dzieje się tak, gdy do liczby dodasz string. Prawdopodobnie w którymś z użytkowników wartość payment jest podana w formacie string.

Spróbujmy to zbadać za pomocą debugera.
Postaw breakpoint wewnątrz naszej pętli (linia nr. 4). Gdy teraz odświeżysz stronę będziesz musiał przeklikiwać się przez 100 rekordów. Nie dobrze.
Kliknij w ten breakpoint prawym klawiszem myszki i wybierz opcję `Edit breakpoint...`.
Wstawmy tam warunek, który sprawi, że dany breakpoint zadziała:

```
typeof user.payment !== "number"
```

Wznów wykonywanie skryptu przez kliknięcie klawisza F8 lub ikonki Resume.
Breakpoint powinien zatrzymać się na użytkowniku "Edie Goodger". Gdy najedziesz kursorem na zmienną user, zobaczysz, że faktycznie wartość podana we właściwości payment dla tego użytkownika jest stringiem.

Jak to naprawić? Albo zmienimy tą wartość ręcznie w tablicy users, albo przy liczeniu zabezpieczymy się dodając dodatkową konwersję na liczbę.


## Materiały:
--------------------------
https://kursjs.pl/kurs/debuger/debuger.php
