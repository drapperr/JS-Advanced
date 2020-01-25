function generateHTML(json) {
    let arr = JSON.parse(json);

    let outputArr = ["<table>"];

    outputArr.push(makeKeyRow(arr));

    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));

    outputArr.push("</table>");

    function makeKeyRow(arr) {
        let line='   <tr>';

        for (const key in arr[0]) {
            line+=`<th>${key}</th>`;
        }
        line+='</tr>';

        return line; 
    }

    function makeValueRow(obj) {
        let line='   <tr>';

        for (const key in obj) {
            let el= typeof(obj[key]) == 'string' ? escapeHtml(obj[key]) : obj[key];
            line+=`<td>${el}</td>`;
        }

        line+='</tr>';

        return line;
    };

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

generateHTML(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);