new Vue({
        el: '#desafio',
        data: {
            nome: 'Leonardo',
            idade: 25,
            imagem: 'https://ateliedocarro.com.br/wp-content/uploads/2019/06/Fusca-1600-76-Amarelo-Imperial-21.jpeg'
        },
        methods: {
            idadeVezes3(){
                return this.idade * 3
            },
            numeroAleatorio(){
                return Math.random()
            }
        }
    })