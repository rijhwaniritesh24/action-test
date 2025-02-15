const fs = require('fs');

function parseCSV(data) {
    const lines = data.split('\n').slice(1); // Skip header
    const table = [];

    lines.forEach(line => {
        if (line.trim() === '') return;
        const values = line.split(',');
        const className = values[2];
        const lineMissed = parseInt(values[8], 10);
        const lineCovered = parseInt(values[9], 10);
        const totalLines = lineMissed + lineCovered;
        const coverage = totalLines === 0 ? 0 : ((lineCovered / totalLines) * 100).toFixed(2);
        
        table.push({ Class: className, "Lines Covered": lineCovered, "Lines Missed": lineMissed, "Coverage (%)": coverage });
    });

    return table;
}

module.exports = ({ github, context }) => {
    try {
        const csvData = fs.readFileSync('./build/reports/jacoco/test/jacocoTestReport.csv', 'utf8');
        const coverageTable = parseCSV(csvData);
        console.table(coverageTable);
        return coverageTable;
    } catch (err) {
        console.error('Error reading the coverage report:', err);
        return { error: err.message };
    }
};

