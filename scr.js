var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i = 0; i < names.length; i++) {
    var lett = names[i].charAt(0).toLocaleLowerCase();
    //console.log(lett);
    if (lett == "j") {
        speakG(names[i]);
    }
    else {
        speakH(names[i]);
    }
    //console.log(a);
    //console.log("Hello " + names[i]);
}


function speakG(name) {
    var speek = "Good Bye";
    console.log(speek + " " + name);
}

function speakH(name) {
    var speekword = "Hello";
    console.log(speekword + " " + name);
}