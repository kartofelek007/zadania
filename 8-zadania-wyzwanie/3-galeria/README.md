# Zadania - galeria
==========================


Małe zadanko dla ciebie. Tym razem nie będzie prowadzenia za rączkę. Zrób je samodzielnie.
Na stronie masz przygotowany formularz, galerię oraz mikro paginację w postaci przycisków prev/next.
Po wyszukaniu w formularzu zadanej frazy powinieneś dynamicznie wyświetlić w galerii miniaturki pasujących zdjęć.
Dodatkową funkcjonalnością będzie stronicowanie z przyciskami Prev/Next.
Na koniec dodaj do zdjęć możliwość podglądu dużego rozmiaru za pomocą tak zwanego lightboxa.


## Kilka wytycznych:
--------------------------
1. Zdjęcia pobierzesz dynamicznie ze strony https://pixabay.com/service/about/api/. Musisz się tam zalogować, oraz pobrać klucz, który będziesz przekazywał do API. Po zalogowaniu spójrz na opis api na stronie https://pixabay.com/api/docs/

2. Wyszukując coś w formularzu, ty powinieneś zrobić zapytanie na powyższe API, a następnie wrzucić do galerii zdjęcia. Wygenerowane elementy galerii powinny mieć postać:
    ```html
    <a href="duże-zdjęcie.jpg" class="gallery-element">
        <img src="duże-zdjęcie.jpg" class="gallery-image" alt="tutaj-cokolwiek-ze-zwracanych-danych">
    </a>
    ```
    Do takich elementów możesz też dodać klasę `is-loaded`, która pokaże ikonkę wczytywania danego zdjęcia. Musisz ją wtedy usunąć, kiedy dane zdjęcie się wczyta.

3. Po wyświetleniu miniaturek dodaj stronicowanie. Do elementu `.gallery-bottom` dodaj ręcznie dwa przyciski:
    ```html
    <button class="gallery-bottom-btn" id="prev">Poprzednie</button>
    <button class="gallery-bottom-btn" id="next">Następne</button>
    ```
    a następnie je zaprogramuj. Zakładamy, że przycisk prev powinien być nieaktywny, jeżeli jesteśmy na pierwszej stronie. Przycisk next powinien być nieaktywny jeżeli jesteśmy na ostatniej stronie. API zwraca wraz z listą grafik ilość wszystkich zdjęć. Możesz to wykorzystać do obliczenia ile jest maksymalnie stron.

4. Po zaprogramowaniu paginacji spróbuj dodać lightbox do miniaturek. Może to być np. https://fslightbox.com/