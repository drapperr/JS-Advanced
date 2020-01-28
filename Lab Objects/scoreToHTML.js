function generateHTML(json) {
    let arr = JSON.parse(json);

    let outputArr = ["<table>"];

    outputArr.push(makeKeyRow(arr));

    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));

    outputArr.push("</table>");

    function makeKeyRow(arr) {return '  <tr><th>name</th><th>score</th></tr>' }

    function makeValueRow(obj) {return `   <tr><td>${escapeHtml(obj.name)}</td><td>${obj.score}</td></tr>` };

    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#39;");
    }

    console.log(outputArr.join('\n'));
}

generateHTML(['[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]']);




