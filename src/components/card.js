const Card = (article) => {

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  
let arr =[];
for (var key in article){
  arr.push(article[key])
}
let arr2 =[]
arr.forEach(mobile => {
  for (let key in mobile) {
    arr2.push(mobile[key])
  }
})



        const cardWrapper = document.createElement('div');

        const headline = document.createElement('div')
        const author = document.createElement('div')
        const imgContainer = document.createElement('div')
        const authorPhoto = document.createElement('img')
        const authorName = document.createElement('span')
        headline.classList.add('headline');
         author.classList.add('author')
       imgContainer.classList.add('img-container')
          cardWrapper.classList.add('card')
       headline.textContent = article.headline
       authorPhoto.src = article.authorPhoto;
       authorName.textContent = `By ${article.authorName}`
       
       cardWrapper.appendChild(headline);
       cardWrapper.appendChild(author)
       imgContainer.appendChild(authorPhoto)
       author.appendChild(imgContainer)
       author.appendChild(authorName)  
       
      
      
  
          console.log()
    return cardWrapper;
   
    }
    
const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const end =  document.querySelector(selector)

  axios.get('http://localhost:5001/api/articles')
  .then( resp => {
    let arr =[];

    for (var key in resp.data){
      arr.push(resp.data[key])
    }
    let arr2 =[]
    arr.forEach(mobile => {
      for (let key in mobile) {
        arr2.push(mobile[key])
      }
    })
  for (let i =0 ; i < arr2.length; i++){
    for (let j=0; j < arr2[i].length; j++){
      var kid = Card(arr2[i][j])
      end.appendChild(kid)
    }
  }
  })
  .catch(err => console.error(err))
  }


export { Card, cardAppender }
