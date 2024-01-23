
var pictures = ["a&w.jpg", "bus159.jpg", "busnight.jpg", "cactus.jpg", "cafe1.jpg", "cafe2.jpg", "christmas.jpg",
    "dallahorse.jpg", "dead.jpg", "dinner.jpg", "elevator.jpg", "gay.jpg", "moose1.jpg", "moose2.jpg",
    "nook1.jpg", "nook2.jpg", "parkroyal.jpg", "patio.jpg", "popeyes1.jpg", "popeyes2.jpg", "screw.jpg",
    "seabus.jpg", "starbucks.jpg", "tat1.jpg", "tat2.jpg", "tatpost.jpg", "tatpre.jpg", "turtle1.jpg",
    "turtle2.jpg"];

var fbox = document.getElementById("flexbox");

createColumns();
createNums();

function createNums() {

    var columns = fbox.children;

    for (var i = 0; i < pictures.length;) {

        for (var x = 0; x < columns.length; x++) {

            var img = document.createElement("img");
            img.src = "pics/" + pictures[i];
            columns[x].appendChild(img);

            i++;
            if (i == pictures.length) {
                break;
            }
        }
    }
    
    for (var x = 0; x < columns.length; x++) {

        var column = columns[x].children;
        var counter = column.length;

        for (var y = 0; y < counter; y++) {
            var div = document.createElement("div");
            div.className = "imageBox";

            var para = document.createElement("p");
            para.className = "names";

            var src = column[y].src;
            var name = src.substring(src.lastIndexOf("/")+1, src.indexOf("."));

            var txt = document.createTextNode(name);
            para.appendChild(txt);

            div.appendChild(column[y]);
            div.appendChild(para);

            columns[x].insertBefore(div, column[y]);
        }
    }
}

function createColumns() {

    var counter = 2;

    if (window.innerWidth > 800) {
        counter = 4;
    }

    for (var j = 0; j < counter; j++) {

        var div = document.createElement("div");
        div.className = "column";
        fbox.appendChild(div);
    }
}