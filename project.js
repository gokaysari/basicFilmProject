
const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

//ui object started
const ui = new UI();

const storage = new Storage();

//all events
eventListeners();

function eventListeners()
{
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmsFromStorage();
        ui.loadAllFilms(films);
    });

    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e)
{
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if(title === "" || director === "" || url === "")
    {
        ui.displayMessage("Fill all the blanks..!","danger");
    }
    else
    {
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm);
        storage.addFilmToStorage(newFilm);
        ui.displayMessage("Added..!","success")
    }


    ui.clearInputs(titleElement,directorElement,urlElement);

    e.preventDefault();
}

function deleteFilm(e)
{
    if(e.target.id === "delete-film")
    {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessage("Deleted..!","success");
    }
}

function clearAllFilms()
{
    if(confirm("RU sure?"))
    {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
        ui.displayMessage("All movies deleted..!!","success");
    }

}