import axios from 'axios';

function renderCountry(countries){
const mainContainer=document.getElementById("main-card")
mainContainer.innerHTML="";
  countries.forEach(function(data) {
    // console.log(data)
      const cardContainer= document.createElement("div")
      cardContainer.classList.add("grid","m-5","grid-cols-4")
      // cardInfos
      const countryCard=document.createElement("div")
       countryCard.classList.add("w-64", "rounded", "shadow-lg", "m-5")
  // countryImage
      const countryImage=document.createElement("img")
      countryImage.classList.add("w-full")
      countryImage.setAttribute("alt","Sunset in the mountains")
      countryImage.setAttribute("src",data.flags.png)
      // countryInfos
      const countryInfos=document.createElement("div")
      countryInfos.classList.add("px-6", "py-4")
      // country Details
      const countryDetails=document.createElement("div")
      countryDetails.classList.add("font-bold", "text-xl","mb-2")
      countryDetails.innerHTML= data.name.common
  
  
      const countryPopulation=document.createElement("p")
      countryPopulation.innerHTML=`<b>Population</b>:${data.population}`
  
      const countryRegion=document.createElement("p")
      countryRegion.innerHTML=`<b>Region</b>:${data.region}`
  
      const countryCapital=document.createElement("p")
      countryCapital.innerHTML=`<b>Capital</b>:${data.capital}`
  
      const countryStartWeek=document.createElement("p")
      countryStartWeek.innerHTML=`<b>Currency</b>:${data.startOfWeek}`
  
      const countryArea=document.createElement("p")
      countryArea.innerHTML=`<b>Country Area</b>:${data.area}`
// appending child Node to parent Node
      countryInfos.appendChild(countryDetails)
      countryInfos.appendChild(countryPopulation)
      countryInfos.appendChild(countryRegion)
      countryInfos.appendChild(countryCapital)
      countryInfos.appendChild(countryStartWeek)
      countryInfos.appendChild(countryArea)
      countryCard.appendChild(countryImage)
      countryCard.appendChild(countryInfos)
      cardContainer.appendChild(countryCard)
      mainContainer.appendChild(cardContainer)
  
  });

}
//  Accessing country API using axios
axios.get('https://restcountries.com/v3.1/all').then(resp => {
    const  data=resp.data
    renderCountry(data);
// listining search button to retrieve country searched
 const search=document.getElementById("form")
 search.addEventListener("submit", (e) => {
      e.preventDefault();
      const searchTerm = e.target.elements.countrysearch.value;
      const found = data.filter((country) => {
        const condition = country.name.common
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
        return condition;
      });
      
      renderCountry(found);
    });
    // filtering countries information based on Region like asia,amerca,africa ,europ
    const regionFilter=document.getElementById("region")
    regionFilter.addEventListener("change", (event) => {
      const found = data.filter((country) => {
        const condition =
          country.region.toLowerCase() === event.target.value.toLowerCase();
        return condition;
      });
      if (found.length === 0 || event.target.value === "All") {
        renderCountry(data);
      } else {
        renderCountry(found);
      }
    });

  })
  // displaying message in case server is not respondig
  .catch((err) => {
    console.log("Internal server Error");
  });


