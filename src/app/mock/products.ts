import { Product } from "../interfaces/product.interface";

export const Products: Product[] = [
  {
    id: 1,
    name: 'Super Nintendo',
    price: 100,
    description: `
    <p>O Super Nintendo Entertainment System (Super NES, SNES ou Super Nintendo) é um console de videogame de 16 bits desenvolvido pela Nintendo que foi lançado em 1990 no Japão, 1991 nos Estados Unidos, 1992 na Europa e Australásia (Oceania) e América do Sul em 1993. No Japão, o sistema é chamado de Super Famicom (em japonês: スーパーファミコン, transl. Sūpā Famikon), oficialmente, adotando o nome abreviado do seu antecessor, o Famicom), ou SFC para breve. Na Coreia do Sul, é conhecido como Super Comboy e foi distribuído pela Hyundai Electronics. Embora cada versão seja essencialmente as mesmas, várias formas de bloqueio regional impedem que as diferentes versões sejam compatíveis entre si.</p>`,
    image: 'assets/images/product-001.jpg'
  },
  {
    id: 2,
    name: 'Playstation 4',
    price: 10,
    description: 'Foi anunciada em Fevereiro de 2013 durante uma conferência de imprensa da Sony em Nova Iorque, no evento "PlayStation Meeting 2013" cujo tema foi "O Futuro da PlayStation". Foi lançada na América do Norte a 15 de Novembro de 2013, na Europa e América do Sul a 29 de Novembro de 2013 e no Japão a 22 de Fevereiro de 2014. A PlayStation 4 é a primeira consola da Sony a ser oficialmente e legalmente editada na China desde a PlayStation 2, depois do levantamento da proibição que durou 14 anos.',
    image: 'assets/images/product-002.jpg'
  },
  {
    id: 3,
    name: 'Atari',
    price: 1.5,
    description: 'Atari 2600, originalmente vendido como Atari Video Computer System ou Atari VCS até novembro de 1982, é um videogame projetado por Jay Miner e lançado em 11 de setembro de 1977 nos Estados Unidos e em 1983 no Brasil. Considerado um símbolo cultural dos anos 80, foi um fenômeno de vendas no Brasil entre os anos de 1984 a 1986 e seus jogos permanecem na memória de muitos que viveram a juventude naquela época.',
    image: 'assets/images/product-003.jpg'
  }
]
