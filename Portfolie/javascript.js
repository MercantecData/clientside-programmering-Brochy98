function UpdateTitle(){
    var titles = ["Aspiring Game Developer", "Dungeon-Master", "Map maker", "Programmer", "Dane", "Gamer", "Student"];

    if(typeof UpdateTitle.counter == 'undefined')
    {
        UpdateTitle.counter = 0;
    }

    document.getElementById("undertitle").innerText = titles[UpdateTitle.counter %titles.length];

    UpdateTitle.counter++;

    setTimeout(UpdateTitle, 2000);
}




