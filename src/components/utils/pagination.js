function paginate (list,currentPage,pageLength){
    let movieList = []
        let previousPage = currentPage-1
        let endingMovieIndex = ((currentPage*pageLength)-1)
        let startingMovieIndex = (previousPage*pageLength)
       
        for(let i= startingMovieIndex;i<=endingMovieIndex;i++){
           movieList.push(list[i])
           
        }
         return movieList.filter(movie => movie!== undefined)
        
   
    
}

export default paginate;