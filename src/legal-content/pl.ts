import { LEGAL_CONTACT, type LegalContent } from './shared';

// Translation of en.ts, section for section. The English text prevails where they differ.
export const pl: LegalContent = {
  privacy: [
    {
      heading: '1. Zakres',
      body: [
        'Niniejsza polityka wyjaśnia, jakie dane zbiera Mentarika („my”), gdy korzystasz z aplikacji internetowej Mentarika i z tej strony, oraz jak są one wykorzystywane. Mentarika to narzędzie do ćwiczenia rozmów rekrutacyjnych z AI dla programistów.',
        `Mentarika jest prywatnym, niekomercyjnym projektem: jest bezpłatna i nie przyjmuje żadnych płatności. Jej operatorem oraz administratorem danych osobowych opisanych w tej polityce jest Pavel Piatrovich, osoba fizyczna mieszkająca w Polsce. Kontakt: ${LEGAL_CONTACT}.`,
      ],
    },
    {
      heading: '2. Jakie dane zbieramy',
      body: [
        'Konto: Twój adres e-mail i identyfikatory uwierzytelniania, za pośrednictwem naszego dostawcy uwierzytelniania.',
        'Treść rozmów: transkrypcje, kod i odpowiedzi, które tworzysz podczas sesji, oraz wygenerowane na ich podstawie oceny i raporty.',
        'Kod: kod, który uruchamiasz lub przesyłasz w zadaniu programistycznym, trafia do dostawcy uruchamiania kodu, który wykonuje go w odizolowanym środowisku. Jest wysyłany bez Twojego imienia i nazwiska, adresu e-mail ani identyfikatora konta.',
        'Głos: jeśli odpowiadasz na głos, nagranie odpowiedzi jest wysyłane do naszego dostawcy AI w celu transkrypcji do Twojej sesji; nie przechowujemy nagrania. Jeśli rozmówca odczytuje swoje odpowiedzi na głos, ich tekst jest wysyłany do dostawcy syntezy mowy.',
        'Przeglądarka: subskrypcja powiadomień push (jeśli je włączysz), abyśmy mogli poinformować Cię, że raport jest gotowy.',
        'Ustawienia strony i analityka: strona zapamiętuje Twój język i wybór dotyczący analityki w pamięci lokalnej tej przeglądarki, a nie w plikach cookie. Analityka jest wyłączona, dopóki jej nie włączysz. Po wyrażeniu zgody strona rejestruje odsłony, wybrane kliknięcia linków, aktywność w produkcie i otwarcia artykułów, bez identyfikatora konta, a dostawca analityki może otrzymać techniczne dane żądania, takie jak Twój adres IP i informacje o stronie. Zgodę na analitykę możesz odrzucić lub wycofać w Ustawieniach prywatności.',
        'Diagnostyka: raporty o błędach i ograniczone dane diagnostyczne sesji, służące do znajdowania i naprawiania błędów – za pośrednictwem dostawcy monitorowania błędów, z aplikacji internetowej i z naszych serwerów. Raporty te mogą zawierać Twój identyfikator użytkownika.',
        'E-mail: jeśli organizacja zaprosi Cię e-mailem, Twój adres i zaproszenie są wysyłane przez naszego dostawcę poczty.',
      ],
    },
    {
      heading: '3. Jak wykorzystujemy dane',
      body: [
        'Aby prowadzić rozmowy i zadania programistyczne, generować Twoje oceny i raporty, śledzić Twoje postępy, wysyłać powiadomienia, na które wyraziłeś(-aś) zgodę, oraz zapewniać bezpieczeństwo i działanie usługi.',
        'Zgodnie z RODO opieramy się na następujących podstawach prawnych: wykonanie umowy z Tobą (Twoje konto, rozmowy, głos, kod, raporty i postępy), nasz prawnie uzasadniony interes polegający na zapewnieniu bezpieczeństwa i działania usługi (diagnostyka i zapobieganie nadużyciom) oraz Twoja zgoda (powiadomienia push i opcjonalna analityka strony). Zgodę możesz wycofać w każdej chwili.',
      ],
    },
    {
      heading: '4. Przetwarzanie przez AI',
      body: [
        'Aby przygotować odpowiedzi rozmówcy i Twoją ocenę, treść sesji jest wysyłana do zewnętrznego dostawcy modeli AI, który działa jako nasz podmiot przetwarzający. Służy ona do wygenerowania Twoich wyników, a nie do trenowania jego modeli. Oceny i raporty są generowane automatycznie na potrzeby Twojej własnej praktyki i nie wywołują wobec Ciebie skutków prawnych.',
        'Tekst Twoich odpowiedzi jest wysyłany do dostawcy modeli AI bez Twojego imienia i nazwiska, adresu e-mail ani identyfikatora konta. Zgodnie z jego warunkami dane przesyłane przez API nie są wykorzystywane do trenowania modeli i mogą być przechowywane do 30 dni w celu wykrywania nadużyć. Nagrania wysyłane do transkrypcji podlegają tym samym warunkom i nie są przechowywane przez dostawcę po wykonaniu transkrypcji.',
        'Zanim Twoje odpowiedzi trafią do jakiegokolwiek modelu AI, usuwamy z nich adresy e-mail, numery telefonów i linki. Nie jesteśmy w stanie wykryć wszystkiego, dlatego prosimy, aby nie podawać imion i nazwisk osób, nazw pracodawców ani klientów, ani niczego innego, co Cię identyfikuje. Kod przesyłany w zadaniu programistycznym jest wysyłany bez zmian.',
      ],
    },
    {
      heading: '5. Udostępnianie i miejsce przetwarzania danych',
      body: [
        'Udostępniamy dane wyłącznie podmiotom przetwarzającym, które obsługują usługę: dostawcom hostingu, uwierzytelniania, modeli AI, rozpoznawania i syntezy mowy, uruchamiania kodu, opcjonalnej analityki strony (tylko po wyrażeniu zgody), monitorowania błędów, dostarczania poczty oraz bezpieczeństwa i dostarczania treści. Edytor kodu w zadaniach pobiera swoje pliki z publicznej sieci dostarczania treści, która przy ich udostępnianiu otrzymuje Twój adres IP. Nie sprzedajemy Twoich danych.',
        'Nasze serwery, baza danych i raporty o błędach są hostowane w Unii Europejskiej, a dostawca uruchamiania kodu wykonuje Twój kod na serwerach w Unii Europejskiej. Kilku naszych dostawców to firmy z siedzibą w Stanach Zjednoczonych: hosting, uwierzytelnianie, modele AI, monitorowanie błędów, uruchamianie kodu, dostarczanie poczty oraz bezpieczeństwo i dostarczanie treści. Gdy Twoje dane trafiają do nich poza Europejski Obszar Gospodarczy, przekazanie opiera się na standardowych klauzulach umownych UE lub na Ramach ochrony danych UE–USA, zgodnie z warunkami przetwarzania danych każdego dostawcy.',
        'Organizacje: jeśli dołączysz do organizacji w Mentarice (na przykład przez pracodawcę), widzi ona tylko datę Twojego dołączenia, liczbę rozmów z ostatnich 30 dni oraz Twoją ostatnią aktywność. Średnie umiejętności zespołu są pokazywane dopiero wtedy, gdy złożyło się na nie co najmniej pięć osób. Nikt w organizacji nie może czytać Twoich transkrypcji ani indywidualnych raportów.',
        'Zadania dla kandydatów: jeśli przyjmiesz rozmowę lub zadanie wysłane przez firmę, przed rozpoczęciem zobaczysz, co zostanie udostępnione. Firma widzi wynikowy raport albo wyniki testów i oceny – nie widzi Twojej transkrypcji ani przesłanego kodu.',
      ],
    },
    {
      heading: '6. Przechowywanie i usuwanie',
      body: [
        'Przechowujemy dane Twojego konta i rozmów tak długo, jak istnieje Twoje konto. Konto możesz usunąć w aplikacji w dowolnym momencie (Profil → Usuń konto); trwale usuwa to Twoje dane i tożsamość z naszych systemów. Szczegółowe logi żądań do AI są usuwane po 90 dniach, a historia dostarczania powiadomień po 90 dniach.',
        'Liczniki zdarzeń na stronie są zapisywane dla każdego dnia bez żadnego identyfikatora i usuwane po 31 dniach.',
        'Nasi dostawcy przechowują część danych przez własne, stałe okresy. Dostawca modeli AI może przechowywać żądania do 30 dni w celu wykrywania nadużyć. Dostawca uruchamiania kodu przechowuje kod, dane wejściowe i wynik każdego uruchomienia do 365 dni, bez powiązania z Twoim kontem. Dostawcy hostingu i monitorowania błędów przechowują logi serwera i raporty o błędach nie dłużej niż 90 dni. Jeśli włączysz analitykę strony, dostawca analityki przechowuje własne dane zgodnie ze swoimi warunkami.',
      ],
    },
    {
      heading: '7. Twoje prawa',
      body: [
        'Masz prawo dostępu do swoich danych, ich sprostowania, przeniesienia i usunięcia, a także prawo do sprzeciwu wobec niektórych form przetwarzania lub do ich ograniczenia. Aby skorzystać z tych praw, skontaktuj się z nami; odpowiadamy w ciągu miesiąca. Możesz też wnieść skargę do Prezesa Urzędu Ochrony Danych Osobowych (uodo.gov.pl) albo do organu ochrony danych w kraju UE, w którym mieszkasz.',
      ],
    },
    {
      heading: '8. Dzieci',
      body: [
        'Mentarika nie jest skierowana do dzieci i jest przeznaczona dla osób od 16. roku życia.',
      ],
    },
    {
      heading: '9. Zmiany i kontakt',
      body: [
        `Będziemy aktualizować tę politykę wraz z rozwojem produktu i podawać poniżej datę zmiany. Pytania i wnioski dotyczące prywatności: ${LEGAL_CONTACT}.`,
      ],
    },
  ],
  terms: [
    {
      heading: '1. Akceptacja',
      body: [
        'Mentarika jest prywatnym, niekomercyjnym projektem prowadzonym przez Pavla Piatrovicha, osobę fizyczną („my”). Korzystając z Mentariki, akceptujesz niniejszy regulamin. Jeśli się z nim nie zgadzasz, nie korzystaj z usługi.',
      ],
    },
    {
      heading: '2. Usługa',
      body: [
        'Mentarika umożliwia ćwiczenie technicznych rozmów rekrutacyjnych z AI, zadania programistyczne, raporty z informacją zwrotną i śledzenie postępów. Jest narzędziem do ćwiczeń. Usługa jest aktywnie rozwijana, a jej funkcje mogą się zmieniać lub być niedostępne.',
      ],
    },
    {
      heading: '3. Konta',
      body: [
        'Odpowiadasz za swoje konto i za poprawność podanych informacji. Chroń swoje dane logowania.',
      ],
    },
    {
      heading: '4. Cena',
      body: [
        'Mentarika jest obecnie bezpłatna, w granicach limitów użycia pokazanych w aplikacji. Nie zbieramy danych płatniczych. Jeśli wprowadzimy płatne plany, najpierw zaktualizujemy ten regulamin.',
      ],
    },
    {
      heading: '5. Dozwolone korzystanie',
      body: [
        'Nie nadużywaj usługi, nie dokonuj inżynierii wstecznej, nie pobieraj z niej masowo danych, nie przeciążaj jej ani nie korzystaj z niej niezgodnie z prawem, a także nie przesyłaj treści, do których nie masz prawa.',
      ],
    },
    {
      heading: '6. Wyniki pracy AI',
      body: [
        'Pytania, informacja zwrotna i oceny są generowane przez AI w sposób heurystyczny, na potrzeby ćwiczeń. Nie stanowią profesjonalnej porady i nie gwarantują żadnego wyniku rozmowy rekrutacyjnej.',
      ],
    },
    {
      heading: '7. Twoje treści',
      body: [
        'Zachowujesz prawa do przesyłanych treści. Udzielasz nam licencji niezbędnej do świadczenia usługi na Twoją rzecz (np. do generowania i przechowywania Twoich raportów).',
      ],
    },
    {
      heading: '8. Wyłączenia i odpowiedzialność',
      body: [
        'Usługa jest świadczona w stanie „takim, jaki jest”, bez gwarancji. W zakresie dozwolonym przez prawo nasza odpowiedzialność jest ograniczona; nie odpowiadamy za szkody pośrednie ani następcze.',
      ],
    },
    {
      heading: '9. Zakończenie korzystania',
      body: [
        'W każdej chwili możesz przestać korzystać z usługi i usunąć konto. Możemy zawiesić konta, które naruszają ten regulamin.',
      ],
    },
    {
      heading: '10. Prawo właściwe, zmiany i kontakt',
      body: [
        `Regulamin podlega prawu polskiemu. Ten wybór nie pozbawia Cię ochrony, którą zapewniają bezwzględnie obowiązujące przepisy prawa konsumenckiego kraju, w którym mieszkasz. Spory rozstrzygają sądy w Polsce, chyba że bezwzględnie obowiązujące przepisy pozwalają Ci wnieść sprawę do sądu w Twoim kraju. Możemy aktualizować ten regulamin i podamy poniżej datę zmiany. Pytania: ${LEGAL_CONTACT}.`,
      ],
    },
  ],
};
