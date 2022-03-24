
const wrapper = document.querySelector(".wrapper");
form = wrapper.querySelectorAll('.form');
submitInput = form[0].querySelector('input[type="submit"]');

function getCountryName(e) {
    e.preventDefault();
    var formdata = new FormData(form[0]);
    countrySearch = formdata.get("getCountryName");
    console.log(countrySearch);

    fetch('https://api.covid19api.com/summary').
        then((apidata) => {
            return apidata.json();
        }).then((actualdata) => {
            console.log(actualdata);
            // console.log(countrySearch);
            var flag = 0;
            for (let i = 0; i < 194; i++) {
                if (actualdata.Countries[i].Country.toLowerCase() == countrySearch.toLowerCase()) {
                    flag = 1;
                    console.log("success");
                    const d = new Date()
                    var date = d.getDate();
                    var text = `<div class="row">`;
                    var imgsrc = `https://flagcdn.com/${actualdata.Countries[i].CountryCode.toLowerCase()}.svg`
                    text += `<div class="card col" id="cardid">
                             <div class="card-body">
                             <img class="flag" src="${imgsrc}">
                             <h3 class="card-title"><b>${actualdata.Countries[i].Country}</b></h3><br>
                             <h6 class="card-subtitle mb-2 text-muted" style="font-size:12px">Updated on: <b>${actualdata.Countries[i].Date}</b></h6> 
                             <h6 class="card-subtitle mb-2 text-muted">New Confirmed: <b>${actualdata.Countries[i].NewConfirmed}</b></h6>
                             <h6 class="card-subtitle mb-2 text-muted">New Deaths: <b>${actualdata.Countries[i].NewDeaths}</b></h6>
                             <h6 class="card-subtitle mb-2 text-muted">New recovered:<b> ${actualdata.Countries[i].NewRecovered}</b></h6> 
                             <h6 class="card-subtitle mb-2 text-muted">Total Confirmed: <b>${actualdata.Countries[i].TotalConfirmed}</b></h6> 
                             <h6 class="card-subtitle mb-2 text-muted">Total Deaths: <b>${actualdata.Countries[i].TotalDeaths}</b></h6> 
                             <h6 class="card-subtitle mb-2 text-muted">Total Recovered: <b>${actualdata.Countries[i].TotalRecovered}</b></h6> 
                             </div>
                             `

                    text += `</div>`;
                    document.getElementById("searchboximg").style.display="none";
                    document.getElementById("searchresult").innerHTML = text;
                }
            }
            if (flag == 0) {
                document.getElementById("searchresult").innerHTML = "<h5>Country not found....</h5>";
            }
        }).catch((error) => {
            console.log(error);
        });

}

document.addEventListener('DOMContentLoaded', function () {
    submitInput.addEventListener('click', getCountryName, false);

}, false);


function homepagecontent() {
    fetch('https://api.covid19api.com/summary').
        then((apidata) => {
            return apidata.json();
        }).then((actualdata) => {
            console.log("raghav");
            console.log(actualdata);
            const d = new Date()
            var date = d.getDate();
            console.log(d);

            var text = "";
            text += `<div class="card col" id="cardidmain">
                             <div class="card-body">
                             <div>
                             <h2 class="card-title"><b>Global Covid Data</b></h2><br>
                             <img src="./icons/COVID-Icons-26.png" alt="icon" class="covid_icon"> 
                             </div>
                             <h4 class="card-subtitle mb-2 text-muted">Updated on: <b>${actualdata.Global.Date}</b></h4>
                             <br>
                             <h3 class="card-subtitle mb-2 text-muted">New Confirmed: <b>${actualdata.Global.NewConfirmed}</b></h3>
                             <h3 class="card-subtitle mb-2 text-muted">New Deaths: <b>${actualdata.Global.NewDeaths}</b></h3>
                             <h3 class="card-subtitle mb-2 text-muted">New recovered:<b> ${actualdata.Global.NewRecovered}</b></h3> 
                             <h3 class="card-subtitle mb-2 text-muted">Total Confirmed: <b>${actualdata.Global.TotalConfirmed}</b></h3> 
                             <h3 class="card-subtitle mb-2 text-muted">Total Deaths: <b>${actualdata.Global.TotalDeaths}</b></h3> 
                             <h3 class="card-subtitle mb-2 text-muted">Total Recovered: <b>${actualdata.Global.TotalRecovered}</b></h3> 
                             </div>
                             `
            text += `</div>`;
            document.getElementById("homepagediv").innerHTML = text;

        }).catch((error) => {
            console.log(error);
        });
}

homepagecontent();
