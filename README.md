# skyblock-discord-bot

Bot Discord para Skyblock desenvolvido em Node.js com discord.js

## 📋 Descrição

Este é um bot Discord básico para servidores de Skyblock. O bot fornece comandos úteis e funcionalidades personalizáveis para melhorar a experiência dos jogadores.

## 🚀 Instalação

### Pré-requisitos

- Node.js (versão 16.9.0 ou superior)
- npm (Node Package Manager)
- Conta Discord Developer com bot criado

### Passos de Instalação

1. Clone o repositório:
```bash
git clone https://github.com/FabioPT07/skyblock-discord-bot.git
cd skyblock-discord-bot
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o token do bot:
   - Crie um ficheiro `.env` na raiz do projeto
   - Adicione o seu token do bot Discord:
   ```
   DISCORD_TOKEN=seu_token_aqui
   ```

4. Execute o bot:
```bash
npm start
```

## 📝 Configuração

### Obter Token do Bot Discord

1. Aceda ao [Discord Developer Portal](https://discord.com/developers/applications)
2. Crie uma nova aplicação ou selecione uma existente
3. Vá para a secção "Bot"
4. Copie o token do bot
5. **IMPORTANTE**: Nunca partilhe o seu token publicamente!

### Permissões Necessárias

O bot requer as seguintes permissões:
- Ler Mensagens/Ver Canais
- Enviar Mensagens
- Gerir Mensagens (opcional)

## 🎮 Comandos

- `!ping` - Testa se o bot está ativo e responde com "Pong!"

*Mais comandos podem ser adicionados no ficheiro `index.js`*

## 📂 Estrutura do Projeto

```
skyblock-discord-bot/
├── index.js          # Ficheiro principal do bot
├── package.json      # Dependências e configurações do projeto
└── README.md         # Este ficheiro
```

## 🛠️ Desenvolvimento

Para adicionar novos comandos, edite o ficheiro `index.js` e adicione mais condições no evento `messageCreate`.

Exemplo:
```javascript
if (message.content === '!comando') {
  message.reply('Resposta do comando');
}
```

## 📦 Dependências

- [discord.js](https://discord.js.org/) - Biblioteca para interagir com a API do Discord

## 📄 Licença

Este projeto está sob a licença MIT.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para fazer fork do projeto e submeter pull requests.

## ⚠️ Avisos

- Mantenha o seu token do bot seguro
- Não faça commit do ficheiro `.env` para o repositório
- Adicione `.env` ao ficheiro `.gitignore`

## 📞 Suporte

Se encontrar problemas ou tiver dúvidas, por favor abra uma issue neste repositório.
