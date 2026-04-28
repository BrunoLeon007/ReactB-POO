class Carro {
    constructor (nome){
        this.nomeMarca = nome;
    }
apresentarDadosCarro(){
    return 'A cor do carro do Bruno é azul e o preço é R$50 mil reais'
}
}
const carroBruno = new Carro("Ford")
const carroLeonardo = new Carro ("BMW")
const carroDan = new Carro ("Jeep")

console.log("O carro de Bruno é: " + carroBruno.nomeMarca)
console.log("O carro de Leonardo é:" + carroLeonardo.nomeMarca)
console.log("O carro de Dan é:"+ carroDan.nomeMarca)
console.log(carroBruno.apresentarDadosCarro())