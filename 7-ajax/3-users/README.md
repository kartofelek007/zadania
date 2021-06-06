# Zadania - ajax
==========================


## Zadanie 1
--------------------------
Połącz sie z https://jsonplaceholder.typicode.com/ i pobierz użytkowników wykonując zapytanie na odpowiedni EndPoint

Wypisz w konsoli to co dostałeś.

Robiąc pętlę po danych z odpowiedzi wygeneruj dla każdego użytkownika element wypełniając go odpowiednimi danymi.

```
<article class="user-cnt" data-id="1">
    <h2 class="user-name">Przykładowy user</h2>

    <div class="user-address">
        Phone: <span class="user-phone">500 600 600</span><br>
        email: <a href="mailto: email@wp.pl" class="user-email">email@wp.pl</a>
    </div>

    <button type="button" class="btn user-show-posts">
        Show posts
    </button>

    <ul class="user-posts">
        <!-- tutaj będą posty użytkownika -->
    </ul>
</article>
```


## Zadanie 2
--------------------------
W każdym elemencie jest przycisk `.show-posts`.
Po kliknięciu w taki przycisk, pobierz posty dla danego usera (id usera pobierz z atrybutu data-id powyższego artykułu) i wrzuć je do tego kontenera do elementu `.user-posts`. Każdy taki post powinien mieć postać:

```
<li class="post">
    <h3 class="post-title">Lorem ipsum dolor sit amet, consectetur</h3>
    <div class="post-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum mollitia pariatur debitis asperiores, natus impedit nostrum voluptatum architecto iste modi. Iusto voluptatem sequi iste voluptatum rem eaque, atque eum. Error.
    </div>
</li>
```

Po wrzuceniu postów rozwiń element `.user-posts` i zmień tekst na buttonie na "Hide posts".

Po ponownym kliknięciu w ten sam button, zwiń listę postów i zmień przycisk na "Show posts"


## Materiały:
--------------------------
https://kursjs.pl/kurs/ajax/ajax.php
https://kursjs.pl/kurs/ajax/promise.php
https://kursjs.pl/kurs/ajax/async-await.php