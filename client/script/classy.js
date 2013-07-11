
window.CLSY = {

    addClassesToList: function(data, list) {
        // variable declaration
        var listItems = "";

        // input audits
        if (!data.classes || data.classes.length < 1) { return; }
        
        list = $(list);
        if (!list.length) { return; }

        // build list item HTML...
        data.classes.forEach(function(cls) {
            listItems += "<li class='class-offering'><a href='classes.html#" + cls.id + "'>" + cls.name + "</a></li>";
        });
        // ...and add it to the DOM
        list.append(listItems);
    }

};

