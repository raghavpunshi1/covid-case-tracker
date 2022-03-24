fetch('https://api.covid19api.com/summary').
    then((apidata) => {
        return apidata.json();
    }).then((actualdata) => {
        console.log(actualdata);


        document.getElementById("date").innerHTML = `Updated on: ${actualdata.Countries[0].Date}`


        var text = `<div class="row">`;
        for (let i = 0; i < actualdata.Countries.length; i++) {
            var imgsrc = `https://flagcdn.com/${actualdata.Countries[i].CountryCode.toLowerCase()}.svg`
            text += `<div class="card col-3" id="cardid">
            <div class="card-body">
            <img class="flag" src="${imgsrc}">
            <h3 class="card-title">${actualdata.Countries[i].Country}</h3><br>
            <h6 class="card-subtitle mb-2 text-muted">New Confirmed: ${actualdata.Countries[i].NewConfirmed}</h6>
            <h6 class="card-subtitle mb-2 text-muted">New Deaths: ${actualdata.Countries[i].NewDeaths}</h6>
            <h6 class="card-subtitle mb-2 text-muted">New recovered: ${actualdata.Countries[i].NewRecovered}</h6> 
            <h6 class="card-subtitle mb-2 text-muted">Total Confirmed: ${actualdata.Countries[i].TotalConfirmed}</h6> 
            </div>
            </div>`
        }
        text += `</div>`

        document.getElementById("demo").innerHTML = text;

    }).catch((error) => {
        console.log(error);
    });
