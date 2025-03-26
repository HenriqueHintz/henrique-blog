# Correção para o Erro de Rollup no Netlify

## Problema Identificado

O erro ocorreu durante o build no Netlify:
```
[vite]: Rollup failed to resolve import "/src/main.tsx" from "/opt/build/repo/index.html"
```

Esse erro indica que o Rollup não conseguiu resolver a importação do arquivo `/src/main.tsx` a partir do `index.html`.

## Solução Implementada

1. **Modificação do vite.config.ts**
   - Foi adicionada a configuração `build.rollupOptions.external` para excluir a importação problemática do processo de bundle.
   ```js
   build: {
     rollupOptions: {
       external: ['/src/main.tsx']
     }
   }
   ```

2. **Verificação do index.html**
   - Certifique-se que o arquivo `index.html` tenha a importação correta:
   ```html
   <script type="module" src="/src/main.tsx"></script>
   ```

## Como testar localmente

Antes de fazer o deploy no Netlify, você pode testar localmente com:
```bash
npm run build
```

Verifique se a build é gerada corretamente na pasta `dist`.

## Próximos passos para o Netlify

1. Após implementar estas mudanças, faça commit e push para o GitHub
2. No Netlify, vá para "Deploys" e clique em "Trigger deploy" > "Deploy site"
3. Monitore os logs de build para confirmar que o erro foi resolvido

## Alternativas (se a solução acima não funcionar)

1. Tente modificar o `index.html` para usar um caminho relativo:
   ```html
   <script type="module" src="./src/main.tsx"></script>
   ```

2. Ou use uma abordagem mais direta no `vite.config.ts`:
   ```js
   build: {
     rollupOptions: {
       input: 'index.html'
     }
   }
   ``` 