// All messages that the robot sends to the user
let sentences = {
  wellcome: `Olá, eu sou o assistente virtual do Gabriel, vou te auxiliar na comunicação.
  Como posso te ajudar?`,
  menu:
    `Você é:  
    *1* - Parente
    *2* - Amigo
    *3* - Cliente
    *4* - Desconhecido

    Responda com o número da opção correspondente.
    `,
  respFamily:
    `Antes que pergunte, sim eu estou bem. 
    O Rafael provavelmente está dormindo ou jogando.
    Estou ocupado agora, deixe sua mensagem que logo irei responder.`,
  respFriend:
    `Não, não vou jogar lol com você, eu tenho mais coisas pra fazer.
    Não quero saber do que aconteceu, não me interessa.
    Seu projeto não é revolucionário e não vai me dar muito dinhero, não quero saber.
    Se for algo importante, me chama no telegram.`,
  respClient:
    `Nesse momento estou trabalhando em algum projeto, por favor informe sua necessidade que logo irei visualiza-la.`,
  respStrange:
    `Como não te conheço, informe:
    Seu nome, como conseguiu meu contato e o que quer.
    Seja objetivo em suas respostas.`,
  farewell:
    `Obrigado por deixar sua mensagem, em breve ela será respondida.
    Lembrando que isso tudo é um teste, nada aqui é sério.`,
  misunderstood:
    `Desculpe, não entendi. Pode tentar novamente?`,
  ended:
    `Até a proxima!`
}

module.exports = sentences
