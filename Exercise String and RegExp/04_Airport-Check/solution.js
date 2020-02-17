function solve() {
    let input=document.querySelector('#string').value;
    let output=document.querySelector('#result');

    output.textContent=extractInfo(input);

    function extractInfo(input) {
        let args=input.split(',').filter(x=>x!=='');
        let line=args[0];
        let part=args[1].trim();
        let namePattern = / [A-Z][A-Za-z]*-[A-Z][A-Za-z]*( |\.-[A-Z][A-Za-z]* )/;
        let airportPattern = / [A-Z]{3}\/[A-Z]{3} /;
        let numberPattern = / [A-Z]{1,3}[\d]{1,5} /;
        let companyPattern = /- [A-Z][A-Za-z]*\*[A-Z][A-Za-z]* /;
    
        let name = line.match(namePattern)[0].trim().replace(/-/g, " ");
        let [fromAirport, toAirport] = line.match(airportPattern)[0].trim().split("/");
        let number = line.match(numberPattern)[0].trim();
        let company = line.match(companyPattern)[0].replace("- ", "").replace(/\*/g, " ").trim();
    
        let output;
        switch (part) {
            case "name":
                output=`Mr/Ms, ${name}, have a nice flight!`;
                break;
            case "flight":
                output=`Your flight number ${number} is from ${fromAirport} to ${toAirport}.`;
                break;
            case "company":
                output=`Have a nice flight with ${company}.`;
                break;
            case "all":
                output=`Mr/Ms, ${name}, your flight number ${number} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${company}.`;
                break;
        }
        return output;
    }
}
