# This is built as assigments for possible internship
in order to start Node.js is required to be installed on your device
# node app.js





# example of result in console
Ucesnici druge runde: 32 
      C.Norrie (30)   D.Koepfer (57)   S.Wawrinka (29)   Y.Nishioka (55)   L.Sonego (26)   F.Fognini (31)   C.Garin (19)   A.Bedene (58)   L.Musetti (61)   B.Coric (33)   A.Ramos-Vinolas (43)   T.Fritz (37)   D.Goffin (20)   G.Dimitrov (21)   G.Monfils (18)   U.Humbert (28)   R.Opelka (32)   R.Nadal (3)   M.Berrettini (8)   N.Djokovic (1)   M.Raonic (22)   N.Basilashvili (42)   A.Davidovich (35)   N.Kyrgios (56)   A.Rublev (7)   F.Delbonis (46)   D.Evans (27)   F.Coria (62)   J.Sinner (23)   F.Krajinovic (34)   J.Millman (44)   R.Bautista (16)
Ucesnici trece runde: 16 
       D.Koepfer (57)    S.Wawrinka (29)    L.Sonego (26)    C.Garin (19)    L.Musetti (61)    A.Ramos-Vinolas (43)    G.Dimitrov (21)    G.Monfils (18)    R.Opelka (32)    N.Djokovic (1)    N.Basilashvili (42)    A.Davidovich (35)    A.Rublev (7)    F.Coria (62)    J.Sinner (23)    R.Bautista (16)
Ucesnici cetvrt finala: 8
                      S.Wawrinka (29)   L.Sonego (26)   A.Ramos-Vinolas (43)   G.Dimitrov (21)   R.Opelka (32)   A.Davidovich (35)   A.Rublev (7)   J.Sinner (23)
Ucesnici polu finala: 4   L.Sonego (26)   G.Dimitrov (21)   A.Davidovich (35)   A.Rublev (7)
Ucesnici finala   L.Sonego (26)    A.Rublev (7)
Pobednik Internship2021 turnira je: Andrey Rublev(7)
original requiremnts:
# Assignment

```
Napisati javascript program generisanja žreba za turnir u tenisu.
Broj tenisera koji učestvuju na turniru je definisan parametrom N koji ne sme biti veći od 64.
Svakog tenisera definišu 4 parametra: Ime(name), Prezime(lastName), Zemlja porekla(country), Ranking(ranking)
Teniseri ne mogu deliti isti ranking.
Teniseri u prvoj rundi ne mogu igrati protiv igrača koji je direktno ispred ili ispod njih na rang listi.
Nakon generisanog žreba, napisati simulaciju turnira i u output ispisati svaki krug turnira i, naravno, pobednika.
Za simulaciju pobednika dovoljno je nasumično izabrati jednog tenisera.

Nije dozvoljeno korišćenje dodatnih third party biblioteka (koje već nisu uključene u projekat).

Primer input-a:
Unesite broj tenisera N: 8
Unesite tenisera u obliku [ime],[prezime],[drzava],[ranking]:Novak,Djokovic,SRB,1
Unesite tenisera u obliku [ime],[prezime],[drzava],[ranking]:Rafael,Nadal,ESP,2
...
N redova

Primer output-a za turnir od 8 igrača:

Round 1:
1. N. Djokovic (SRB, 1) - P. Busta (ESP, 11)
2. D. Thiem (AU, 6) - H. Hurkacz (PL, 12)
3. D. Medvedev (RUS, 2) - A. Zverev (GER, 5)
4. R. Nadal (ESP, 3) - A. Rublev (RUS, 7)
Round 2 / Semifinals:
1. N. Djokovic (SRB, 1) - D. Thiem (AU, 6)
2. D. Zverev (GER, 5) - R. Nadal (ESP, 3)
Final:
1. N. Djokovic (SRB, 1) - R. Nadal (ESP, 3)
Winner:
  !!! N. Djokovic (SRB, 1) !!!

Bonus (opciono):
1. Unos tenisera iz fajla (u bilo kojoj željenoj strukturi - json, csv, plain, ...)
2. U simulaciji i std output-u dodati rezultat svakog meča
3. Validacija input grešaka
```

### Prerequisites

Installed NODE.js on your system. Refer to https://nodejs.org/en/download/

### Steps to run application (run in command line or terminal):

```
npm install
npm start
```


