function Storage()
{

}

Storage.prototype.addFilmToStorage = function(newFilm)
{
    let films = this.getFilmsFromStorage();

    films.push(newFilm);

    //array to string
    localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.getFilmsFromStorage = function()
{
    let film;

    if(localStorage.getItem("films") === null)
    {
        films = [];
    }
    else
    {
        films = JSON.parse(localStorage.getItem("films"));  //string to array
    }

    return films;
}

Storage.prototype.deleteFilmFromStorage = function(filmTitle)
{
    let films = this.getFilmsFromStorage();

    films.forEach(function(film,index){
        if(film.title === filmTitle)
        {
            films.splice(index,1);
        }
    });

    localStorage.setItem("films",JSON.stringify(films));
}

Storage.prototype.clearAllFilmsFromStorage = function()
{
    localStorage.removeItem("films");
}