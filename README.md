
## Стартува на проектот (back-end)
Отвараме Intelij, избираме Import project и навигираме во фолдерот backend каде што го бараме суб-фолдерот demo. Го избираме и кликаме OK. 

Backend-от е сега импортиран и можеме да го стартуваме.

ВАЖНО: Бидејќи за базата на податоци се решив да користам Postgres, битно е да биде инсталирана на вашиот систем. Конфигурарајте ја датабазата При инсталација и соодветно сменете ги поставките во application.properties да бидат идентични на тие кои ги избравте.

## Стартување на проектот (front-end)
 За да се стартува frontend-oт, треба најпрвин глобално да инсталираме serve. Тоа го правиме со
помош на следната команда:
```
npm install -g serve
```
## Како да го отворам проектот на прелистувач?
```
serve -s build
```
Многу битно е при повикување на командата погоре да се наоѓаме во локација на front-end проектот (фолдер frontend).

Проектот би требало да се стартува на порта 5000. Доколку се стартува на различна порта, потребно е да ја промениме портата во анотацијата 
```
@CrossOrigin(origins = "http://localhost:5000") која се наоѓа во АPI контролер на backend-от.
```

## Што е MODEUM?
Модеум е платформа во стилот на Medium.com, каде секој корисник може да направи свој профил и да објавува артикли. 

## Функционалости на MODEUM
Додавање артикли, оставање коментари на артикал, едитирање, сортирање по категорија, најчитан артикал, регистрација и најава...

## Технологии искористени
Backend: Spring Boot и Postgres за базата од податоци.
Frontend: React, Redux за управување со глобален стејт, React-Redux за управување со редуцерите и акциите, Sweetalert за иницирање custom алерти, Bootstrap за грид системот и некои ситни компоненти (пр. buttons).


