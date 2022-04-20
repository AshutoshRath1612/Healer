

let covidActive = document.getElementById('covidActive');
let covidRecovered = document.getElementById('covidRecovered');
let covidDeath = document.getElementById('covidDeath');

let load1 = false;
let load2 = false;

let fetchData = fetch('https://coronavirus-19-api.herokuapp.com/all');

fetchData.then(res => res.json()).then(data => {
    console.log(data);
    covidActive.innerHTML = data.cases;
    covidDeath.innerHTML = data.deaths;
    covidRecovered.innerHTML = data.recovered;
})


let covidcountryActive = document.getElementById('covidcountryActive');
let covidcountryRecovered = document.getElementById('covidcountryRecovered');
let covidcountryDeath = document.getElementById('covidcountryDeath');
let covidcountryCases = document.getElementById('covidcountryCases');

let fetchcoundata = (countryName)=>{
    let fetchcountryData = fetch(`https://coronavirus-19-api.herokuapp.com/countries/${countryName}`);
    fetchcountryData.then(res => res.json()).then(data => {
        console.log(data);
        covidcountryActive.innerHTML = data.active;
        covidcountryDeath.innerHTML = data.deaths;
        covidcountryRecovered.innerHTML = data.recovered;
        covidcountryCases.innerHTML = data.cases;
    })
}

let countryName = 'india';
fetchcoundata(countryName);

let btnSubmit = document.getElementById('countrySearch').addEventListener("click" , (e)=>{
    e.preventDefault();
    countryName = document.getElementById('inputCountry').value;
    console.log(countryName);
    fetchcoundata(countryName);
});

//news

let newsHtml= "";
let fetchnews = fetch('https://saurav.tech/NewsAPI/top-headlines/category/health/in.json')
                .then(res=> res.json()).then(data =>{
                    console.log(data);
                    data.articles.forEach((element,index) =>{
                        let newss = `<div class="card mb-3">
                        <div class="row g-0" style="margin-top: 10px;">
                            <div class="col-md-4">
                                <img src="${element.urlToImage}" class="img-fluid rounded-start" alt="...">
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h3 class="card-title" id="newsHead">${element.title}</h3>
                                    <p class="card-text">${element.description}</p>
                                    <a href="${element.url}" class="card-link btn btn-primary">Know More...</a>
                                </div>
                            </div>
                        </div>
                    </div>`

                    newsHtml += newss;
                    console.log(newsHtml)
                    });
                    let neww = document.getElementById('news');
                    neww.innerHTML = newsHtml;
                })

