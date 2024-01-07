var nome = "";

nome = "Caio";

console.log(this.nome);

var $nome = "Tatu";

console.log(this.$nome);

pato = 3;

console.log(this.pato);

var number = 5;
console.log(this.number);

console.log(typeof this.number); //typeof Informa o tipo da vatiavel

document.write("Olá" + " " + this.$nome);
