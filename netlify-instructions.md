# Instruções para Corrigir o Deploy no Netlify

Se você estiver tendo problemas com o deploy no Netlify, siga estas etapas:

## 1. Verifique as configurações do site no Netlify

- Acesse [app.netlify.com/teams/henriquehintz/sites](https://app.netlify.com/teams/henriquehintz/sites)
- Clique no site que está com erro
- Vá em "Site settings" > "Build & deploy"
- Verifique as seguintes configurações:
  - Base directory: (deixe em branco)
  - Build command: `npm run netlify-build`
  - Publish directory: `dist`
  - Node version: `18`

## 2. Forçar um novo deploy

- Após fazer as alterações nos arquivos `package.json` e `netlify.toml`
- Faça commit e push para o GitHub
- No Netlify, vá em "Deploys" e clique em "Trigger deploy" > "Deploy site"

## 3. Verifique os logs de build

- Depois de iniciar o deploy, clique em "Deploy in progress" para ver os logs em tempo real
- Procure por mensagens de erro específicas

## 4. Considerações adicionais

- As versões das dependências foram ajustadas para serem mais compatíveis com o ambiente do Netlify
- O comando `netlify-build` foi criado para garantir que todas as dependências sejam instaladas antes do build
- A configuração do Node.js foi fixada na versão 18, que é estável e compatível com todas as dependências 