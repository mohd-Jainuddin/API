const item = document.querySelector("#item");
const btn = document.querySelector("#btn");
const box = document.querySelector("#box");

btn.addEventListener("click",()=>{
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=chicken")
    .then((response)=> response.json())
    .then((data)=>{
        console.log(data)
        data["meals"].forEach(element=>{
            let {strMeal,strInstructions,strMealThumb,strYoutube} = element;
            box.innerHTML += `<div><hi>${strMeal}</h1><img src"${strMealThumb}"><p>${strInstructions}</p><a href"${strYoutube}"></a></div>`
        })

    })
})