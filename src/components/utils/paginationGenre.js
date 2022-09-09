function PaginateGenre (list,currentGenre){
   let newList =
   list.filter(movie => {
        if(movie.genre === currentGenre)return movie
        else if (currentGenre === `All Genre's`) return movie
        else return 
    })

    return newList.filter(movie => movie !== undefined)
 

}
export default PaginateGenre

