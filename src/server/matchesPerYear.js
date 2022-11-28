const matches = [];
const { Console } = require('console');
const csv = require('csv-parser')
const fs = require('fs');
const { mainModule } = require('process');
const { finished } = require('stream');

fs.createReadStream('../data/matches.csv')
    .pipe(csv({})).on('data', (data) => matches.push(data))
    .on('end', () => {
        matchesPerYear(matches);

    });


let findMatchesPlayerPerYear = new Map();

function matchesPerYear(matches) {

    for (var index = 0; index < matches.length; index++) {
        let storeValue = 1;
        if (findMatchesPlayerPerYear.has(matches[index].season)) {
            storeValue = findMatchesPlayerPerYear.get(matches[index].season) + 1;
            findMatchesPlayerPerYear.set(matches[index].season, storeValue);
        }
        else findMatchesPlayerPerYear.set(matches[index].season, storeValue);
    }

    var data = JSON.stringify(Object.fromEntries(findMatchesPlayerPerYear));
    fs.writeFile('../public/output/matchesPerYear.json', data, finished)
    function finished(err) {
        console.log('File Uploaded');
    }
}




