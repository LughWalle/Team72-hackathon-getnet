const msg = document.querySelector('.chat-field');

const msgChat = () => {
  const msgs = {
    saudacao: 'Olá, eu sou Lugh, atendente virtual da GetNet.\nComo posso ajudar?',
      pergunta: 'Qual a sua duvida?',
      resposta: 'Ok, você está com problema na maquininha, certo?\nDigite "1" para solicitar troca de aparelho;\nDigite "2" para Outros'
    }
    setTimeout(() => {
      const saud = document.createElement('div');
      saud.className = 'msg msg-received';
      saud.innerText = msgs.saudacao;
      msg.appendChild(saud);
    }, 1000);
    
    setTimeout(() => {
      const lastChild = msg.lastElementChild;
      const perg = document.createElement('div');
      perg.className = 'msg msg-received';
      perg.innerText = msgs.pergunta;
      lastChild.insertAdjacentElement('afterend', perg);
    }, 2000);
  }
  
const txt = document.querySelector('.msg-field');
const btn = document.querySelector('.btn-send');
btn.addEventListener('click', function() {
  const send = document.createElement('div');
  const lastChild = msg.lastElementChild;
  send.className = 'msg msg-sent';
  send.innerText = txt.value;
  lastChild.insertAdjacentElement('afterend', send);
  txt.value = '';
});

  const btnChat = document.querySelector('.btn-chat');
  const popUP = document.querySelector('.pop-up');
  btnChat.addEventListener('click', () => {
    msgChat();
    popUP.className += ' show';
  });

