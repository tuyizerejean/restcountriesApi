// import 'regenerator-runtime/runtime';
import axios from 'axios';
axios.get('https://restcountries.com/v2/all').then(resp => {
 const  data=resp.data
//  console.log(data)
data.forEach(function(data) {
  // console.log(data)
    const cardContainer= document.getElementById("card-container")
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
    countryDetails.innerHTML= data.name


    const countryPopulation=document.createElement("p")
    countryPopulation.innerHTML=`Population:`

    const countryRegion=document.createElement("p")
    countryRegion.innerHTML=`Region:${data.region}`

    const countryCapital=document.createElement("p")
    countryCapital.innerHTML=`Capital:${data.region}`

    const countryCurrency=document.createElement("p")
    countryCurrency.innerHTML=`Currency:${data.region}`

    const countryMianLanguage=document.createElement("p")
    countryMianLanguage.innerHTML=`Main Language:`
    countryInfos.appendChild(countryDetails)
    countryInfos.appendChild(countryPopulation)
    countryInfos.appendChild(countryRegion)
    countryInfos.appendChild(countryCapital)
    countryInfos.appendChild(countryCurrency)
    countryInfos.appendChild(countryMianLanguage)

    countryCard.appendChild(countryImage)
    countryCard.appendChild(countryInfos)
    cardContainer.appendChild(countryCard)

});

const navBar=document.getElementById("form")
navBar.addEventListener("submit",function(event){
  event.preventDefault();
  const countryTosearch= event.target.elements.countrysearch.value;
  // console.log(countryTosearch)
  // console.log(data)
  const searchCountry=data.filter((data)=>{
    return data.name===countryTosearch
  })

})
})


