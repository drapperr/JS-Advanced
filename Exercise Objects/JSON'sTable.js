function generateHTML(arr){
    const html=[];
    html.push('<table>');
    for (const element of arr) {
        const obj=JSON.parse(element);
        html.push('	<tr>');

        for (const key in obj) {
            html.push(`		<td>${obj[key]}</td>`);
        }
        html.push('	</tr>');
    }
    html.push('</table>\n');

    console.log(html.join('\n'))
}

generateHTML(['{"name":"Pesho","position":"Promenliva","salary":100000}',
'{"name":"Teo","position":"Lecturer","salary":1000}',
'{"name":"Georgi","position":"Lecturer","salary":1000}']
)