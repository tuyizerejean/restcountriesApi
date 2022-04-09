import 'regenerator-runtime/runtime';
import axios from 'axios';
axios.get('https://restcountries.com/v2/all').then(resp => {
 const  data=resp.data
 console.log(data)
data.forEach(function(data) {
    console.log(data.flags.png)
    const countryName=document.getElementById("country")
    const div=document.createElement("div")
    div.setAttribute("class","font-bold bg-blue-100 text-xl mb-2")
    const p=document.createElement("p")
    p.innerHTML=data.name;
    div.appendChild(p)
    
});
})
