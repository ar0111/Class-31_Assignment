function loadKanye(){
    fetch('https://api.kanye.rest')
    .then(res => res.json())
    .then(data => displayData(data))
}

function displayData(dataObj){
    document.getElementById("quote").innerText = dataObj.quote;
}

const loadFriends = ()=>{
    fetch('https://randomuser.me/api/?results=50')
    .then(res => res.json())
    .then(data => displayFriends(data.results))
}

const displayFriends = (dataArray) =>{
    const div = document.getElementById('html-friends');
    // console.log(data);
    for(const friend of dataArray){
        // console.log(friend.picture.thumbnail);
        const divItem = document.createElement('div');
        const img = document.createElement('img');
        img.setAttribute('src', `${friend.picture.thumbnail}`)
        const h2 = document.createElement('h2');

        h2.innerText = `${friend.name.title} ${friend.name.first} ${friend.name.last}`;

        // console.log(h2, img);

        divItem.appendChild(img);
        divItem.appendChild(h2);

        div.appendChild(divItem);
    }
}

loadFriends();

const loadCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayOurTours(data))
}

const displayOurTours = (countries) =>{
    const countryDiv = document.getElementById('country');
    countries.forEach((country)=>{
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('country-info');
        div.innerHTML = `
            <h3>${country.name.common}</h3>
            <p>${country?.capital}</p>
            <button onclick=loadCountryByName('${country.name.common}')>Show Details</button>
        `

        countryDiv.appendChild(div);
    })
}

loadCountries();

const loadCountryByName = (name) =>{
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res => res.json())
    .then(data => countryShow(data[0]))
}

const countryShow = (country) =>{
    // console.log(country);
    // console.log(country.capital);
    const countryDetails = document.getElementById('country-details');
    countryDetails.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital}</p>
        <p>Population: ${country.population}</p>
        <img src=${country.flags.png} alt=${country.flags.alt}>
    `
}

// loadCountryByName('Ukraine')