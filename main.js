let person = {
    name: 'Jovi',
    age: 13,
    civility: 'M.',
    infos: function(){
        return person.civility + " " + person.name + " is " + person.age + " years old"
    }
}

console.log(person.infos())

