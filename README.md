# js-ipl-data-project

A javascript project on IPL data.



### Directory structure

- src/
  - server/
    - 1-matches-per-year.js
    - 2-matches-won-per-team-per-year.js
  - public/
    - output
        - matchesPerYear.json
        - ...
  - data/
    - matches.csv
    - deliveries.csv
- package.json
- package-lock.json
- .gitignore


### Project questions

**Downloaded the data from:** [https://www.kaggle.com/manasgarg/ipl](https://www.kaggle.com/manasgarg/ipl)

There should be 2 files:
- deliveries.csv
- matches.csv

In this data assignment you will transform raw data of IPL to calculate the following stats:
1. Number of matches played per year for all the years in IPL.
2. Number of matches won per team per year in IPL.
3. Extra runs conceded per team in the year 2016
4. Top 10 economical bowlers in the year 2015

Implemented the functions, **one for each task**.
Use the results of the functions to dump JSON files in the output folder
