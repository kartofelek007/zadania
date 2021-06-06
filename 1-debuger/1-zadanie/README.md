# Zadania - debuger
==========================


Te zadania będziemy wykonywać razem.
Otwórz stronę w przeglądarce i otwórz debugera klawiszem F12.


### Zadanie 1
--------------------------
Otwórz zakładkę Network w debugerze i odśwież stronę. W zakładcę tej powinieneś zobaczyć 2 czerwone błędy. Oznacza to, że danych plików nie udało się wczytać. Są to obrazki użyte w html. Popraw je w html na prawidłowe.


### Zadanie 1
--------------------------
Nasza strona wczytała się bez stylowania. Aby to sprawdzić, będąc dalej w zakładce Network odśwież stronę. Jeżeli wśród wczytywanych zasobów nie pojawią się żadne pliki CSS, oznacza to, że nie zostały dołączone do strony. Możesz użyć filtrowania na górze tej zakładki by pokazywało tylko CSS.

Jeżeli tak jest, dodaj je do html.


### Zadanie 2
--------------------------
Po dodaniu stylowania, po odświeżeniu strony pojawi się przysłaniający ją popup informujący o AdBlocku. Żeby pracować dalej musimy się go pozbyć.

Kliknij prawym przyciskiem na popup i wybierz Zbadaj.
W zakładce Elements po lewej stronie (tam gdzie html) dany element powinien zostać zaznaczony. Sprawdź, czy jest to element .popup. Z prawej strony tej zakładki powinieneś widzieć stylowanie tego elementu i numer linii gdzie ono się znajduje w html.

Kliknij prawym przyciskiem na `.popup` w zakładce Element i z menu wybierz **Delete element**.
Jeżeli chcesz, ukryj go też dodając w pliku ze stylami `display:none` dla popupa.

Autorzy strony niestety wyłączyli na niej przewijanie. W zakładce Element wybierz element `body`. Z prawej strony będziesz miał stylowanie tego elementu. Odznacz w nim `overflow:hidden`.


### Zadanie 3
--------------------------
Przyciski pod artykułem źle się wyświetlają. Zbadaj je za pomocą debugera. Z prawej strony w stylowaniu powinieneś widzieć przekreślone style tła i koloru oraz linijkę, gdzie się znajdują w pliku ze stylami. Usuń niepotrzebne stylowanie z pliku ze stylami.

Po najechaniu na przycisk robi się on bardzo ciemny, ale nie wygląda to za dobrze. Wymuś mu stan najechania klikając na ikonkę :hov i wybierając stan :hover. Dodaj mu background: `dodgerblu`e` wpisując je w części oznaczonej jako `element.style {}` (na górze prawej strony). Dodatkowo zmień mu kolor tekstu na jakiś jasny.


### Zadanie 4
--------------------------
Chcielibyśmy sprawdzić, czy nasze artykuły będą dobrze wyglądały z różną treścią.
Kliknij prawym przyciskiem na dowolny tytuł i kliknij `Edit as html`. Dopisz z 2 słowa i sprawdź efekt. To samo zrób z treścią artykułu.


## Materiały:
--------------------------
https://kursjs.pl/kurs/debuger/debuger.php
