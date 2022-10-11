console.log("Let's get this party started!");
let searchButton = document.getElementById('search-button')
let searchForm = document.getElementById('giphy-form')
searchButton.style.background = 'red'
let gifSpot = document.querySelector('#gifArena')

// searchForm.style.background = 'green'

let searchTerm = 'pirate'
let URL = `https://api.giphy.com/v1/gifs/search?api_key=k2QS5BBPl76suXTonPcutCIc0IoFxJi0&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`

 async function getGifs(){
let fArray = []
     await axios.get(URL).then((res)=>{
         newData = res.data.data
         console.log(newData)
         for(let data of newData){
             fArray.push(data.embed_url)
         }
     })
  console.log(fArray)
for (let arr of fArray){
    let newDiv = document.createElement('div')
    let newImg = document.createElement('iframe')
    let deleteButton = document.createElement('button')
    newImg.setAttribute('src', arr)
    newDiv.append(newImg)
    deleteButton.innerText = 'Delete'
    newDiv.append(deleteButton)
    gifSpot.append(newDiv)
}
 return fArray
 }
// getGifs()
searchForm.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log(e.target)
    searchTerm = e.target[0].value
    URL = `https://api.giphy.com/v1/gifs/search?api_key=k2QS5BBPl76suXTonPcutCIc0IoFxJi0&q=${searchTerm}&limit=25&offset=0&rating=g&lang=en`
    let fArray = []
    getGifs(searchTerm)
    })

gifSpot.addEventListener('click', (e)=>{
    e.preventDefault()
    if(e.target.innerText === 'Delete')
    {e.target.parentElement.remove()}

})

let clearAll = document.querySelector('#clear-all')
clearAll.addEventListener('click', (e)=>{
    e.preventDefault()
for (let i of Array.from(gifSpot.children)){
i.remove()
}

})

// You need to find the real image 
// So far you haven't figured out how to grab the actual image, just different URLs 
// to giphy's page with it on it. You may be able to use the ID on the images to find 
// the source image but that needs further exploration. 

   
