//Creation d'un objet
let person = {
    name: 'Jovi',
    age: 13,
    civility: 'M.',
    infos: function(){
        return person.civility + " " + person.name + " is " + person.age + " years old"
    }
}

console.log(person.infos())

//Creation d'un objet grace a une fonction
function human(name, weight, gender) {
    this.name = name;
    this.weight = weight;
    this.gender = gender;
    this.infos = function(){
        return 'I\'m ' + this.gender + ' ' + this.name
    }
}

console.log(new human("Jean", 14, 'M').infos());


