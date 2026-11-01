---
title: 'W środku symulatora rozmów kwalifikacyjnych AI: ogólny zarys architektury'
date: 2026-05-19
summary: 'Co jest potrzebne, by osoba prowadząca rozmowę z AI była wymagająca i konsekwentna, zamiast zamieniać produkt w zbiór niezależnych wywołań modelu.'
locale: pl
---

Z zewnątrz produkt do rozmów kwalifikacyjnych z AI wydaje się prosty: użytkownik mówi, model odpowiada, pojawia się ocena, a później raport.

W praktyce jakość produktu zależy od tego, czy te etapy tworzą jeden spójny system, czy tylko zbiór niezależnych wywołań API.

Ostrożnie dzielimy się publicznie szczegółami implementacji, ale ogólny zarys architektury jest istotny, bo wyjaśnia założenia stojące za produktem.

## System musi robić więcej niż „czatować”

Aby system sprawiał wrażenie osoby prowadzącej rozmowę, a nie ogólnego asystenta, musi zachować kilka niezmiennych zasad w trakcie całej sesji:

- osoba prowadząca rozmowę musi zachować spójną rolę,
- trudność pytań musi zależeć od kandydata,
- podpowiedzi nie mogą natychmiast odbierać ćwiczeniu trudności,
- ocenianie nie może blokować głównej rozmowy,
- a końcowy raport musi opisywać rzeczywistą sesję, a nie inną.

To przemawia za wyspecjalizowanymi komponentami zamiast jednego ogromnego promptu.

## Na jakim kształcie produktu nam zależy

Ogólnie myślimy o kilku warstwach:

- pętli rozmowy na żywo, która obsługuje dialog w czasie rzeczywistym,
- osobnych etapach oceny, które nie przerywają kandydatowi,
- oraz finalizacji sesji, która zamienia całą transkrypcję w praktyczne wnioski.

Brzmi to oczywiście, ale wpływa na wiele decyzji inżynierskich. W jednej warstwie liczą się opóźnienia, w innej spójność, a kontrola kosztów jest ważna wszędzie.

## Dlaczego nie chcemy „magicznej czarnej skrzynki”

Produkty AI łatwo zamienić w tajemnicze maszyny: bez widocznej struktury, jasnych oczekiwań i wyjaśnienia, dlaczego zmieniła się ocena albo pojawiło się pytanie uzupełniające.

Uważamy, że to niewłaściwy kierunek w przypadku produktu, który ma przygotowywać do rozmów o wysokiej stawce.

Kandydat powinien odbierać doświadczenie jako:

- wymagające,
- wystarczająco przewidywalne, by mu zaufać,
- i na tyle konkretne, by móc robić postępy.

Architektura musi więc umożliwiać śledzenie działania, a nie tylko tworzenie błyskotliwych odpowiedzi.

## Co to oznacza dla użytkownika

Nie musisz wiedzieć, który wewnętrzny komponent obsługiwał poszczególne elementy sesji. Powinieneś natomiast zauważyć, że:

- osoba prowadząca rozmowę nie gubi wątku,
- presja jest celowa,
- raport odpowiada przebiegowi sesji,
- a każda próba podpowiada, co zrobić dalej.

Na tym poziomie architektura staje się częścią produktu.

Nadal będziemy dzielić się informacjami o budowie systemu, ale bardziej zależy nam na tym, by działał sprawnie, niż na publikacji efektownego diagramu. Jeśli ten kierunek Ci odpowiada, zobacz [szczegóły uruchomienia Mentariki](/#waitlist).
