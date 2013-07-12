
window.CLSY = {

    addCoursesToList: function(data, list) {
        // variable declaration
        var listItems = "";

        // input audits
        if (!data.courses || data.courses.length < 1) { return; }
        
        list = $(list);
        if (!list.length) { return; }

        // build list item HTML...
        data.courses.forEach(function(course) {
            listItems += "<li class='course'><a href='courses.html#" + course.id + "'>" + course.name + "</a></li>";
        });
        // ...and add it to the DOM
        list.append(listItems);
    }

};

