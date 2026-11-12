# LP VIVIANE BONDI

Implementação local do Figma de Viviane Bondi, com página inicial, catálogo, avaliações e versões próprias para desktop e celular.

## Abrir

Abra **index.html** no navegador. Todas as imagens e fontes estão nesta pasta; as páginas funcionam sem depender do Figma ou de serviços externos de fontes.

Para a prévia local, dentro desta pasta execute:

```sh
npm start
```

Acesse **http://127.0.0.1:4173**. Encerre com `Ctrl+C`.

## Páginas e arquivos

- `index.html`: página inicial.
- `catalogo.html`: catálogo dos procedimentos.
- `avaliacoes.html`: avaliações de clientes.
- `styles.css`: estilos compilados e adaptações responsivas.
- `app.js`: menu, navegação, janelas de detalhes, galeria e perguntas expansíveis.
- `assets/`: fotografias, logo, ícones e fontes locais.
- `src/screens/`: estrutura editável de cada tela do Figma.
- `src/components/`: avaliações da página inicial e galeria compartilhadas entre desktop e celular.
- `src/gallery.json`: lista das 12 imagens da galeria e suas dimensões originais.
- `src/base.css`: regras complementares e responsividade.
- `src/app.js`: comportamentos editáveis.
- `src/prototype.json`: destinos, estados e tempos de transição do Figma.

## Atualizar o código

As páginas entregues já estão prontas para abrir. Para recompilar depois de editar os arquivos de `src/`:

```sh
npm install
npm run build
```

React e esbuild são usados apenas para gerar o HTML; o site entregue não carrega React, Tailwind ou bibliotecas externas no navegador.

## Fidelidade e conteúdo

Referência: arquivo Figma `YXw76aSKMp8AVe57Osr7xp`, página LP, estado consultado em 12/11/2026. Tamanhos principais de conferência: **1440 px** no desktop e **390 px** no celular. Layouts intermediários são adaptados para evitar rolagem horizontal.

Mantidos os textos, fotos, recortes e fontes do arquivo: DM Sans, Inter Display e Playfair Display. O estado atual da LP usa essas fontes; o padrão Billie Eilish dos carrosséis não foi aplicado a esta página.

As avaliações principais receberam o estilo da referência enviada: cartões claros com borda fina, marca Google, nota, autor e origem. A galeria inclui as oito fotos adicionais da pasta VIVIANE FOTOS, além das quatro anteriores, com setas, arrasto e deslize. As imagens da galeria aparecem inteiras, preservando sua proporção; as demais fotos mantêm recorte proporcional sem esticar.

Interações implementadas: menu compacto, seis procedimentos e destaque, fechamento por botão, fundo ou Esc, perguntas expansíveis, galeria por deslize ou arrasto, navegação entre páginas, âncoras e links de telefone e Google já existentes. Transições do protótipo: 180 ms no menu e hover, 220 ms nos detalhes, 250–280 ms nas perguntas e 320 ms na navegação desktop. A preferência por movimento reduzido é respeitada.

Fios Aptos recebeu, a pedido do usuário, uma foto de rosto ainda não usada na página: `IMG_3757.JPG`, do quinto álbum compartilhado. A foto preenche todo o bloco, com recorte proporcional e foco nos rostos, na home, no catálogo e nas janelas de detalhes. A escolha visual não confirma qual procedimento está retratado. O texto “Instagram” foi mantido sem destino porque não possui link no arquivo de origem.

O projeto foi salvo localmente, sem publicação ou alteração no Figma.

## GitHub e publicação

Envie o **conteúdo desta pasta** para a raiz do repositório, incluindo `index.html`, as outras páginas, `assets/`, `styles.css`, `app.js` e `.nojekyll`. O site já está compilado e pode ser hospedado como arquivos estáticos; não exige servidor Node em produção. O código editável e o arquivo `package-lock.json` também estão incluídos.

Para GitHub Pages, selecione a publicação pela branch que recebeu os arquivos e a pasta `/ (root)` em **Settings → Pages**. Referência: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

O `.gitignore` exclui dependências, referências do Figma, conferências visuais, arquivos temporários, logs e arquivos de ambiente. Evite enviar `node_modules/`, `.figma/`, `.build/` e `qa/` manualmente pela interface do GitHub. O ZIP de entrega já exclui essas pastas.

## Vercel

O arquivo `vercel.json` configura a instalação com `npm ci`, a compilação com `npm run build` e a pasta de publicação `dist`. O build gera essa pasta com as três páginas, imagens, fontes, estilos e JavaScript. Código-fonte, dependências e arquivos de conferência ficam fora da publicação.

Envie `vercel.json` e a versão atual de `scripts/build.mjs` junto com os demais arquivos do projeto para o GitHub. Na Vercel, a pasta raiz do projeto deve ser a que contém `package.json` e `vercel.json`; o preset é **Other**. Depois, execute um novo deploy. Não é necessário enviar `dist/` ao GitHub: ela é gerada durante o build. Referência: https://vercel.com/docs/project-configuration/vercel-json

## Otimização

- Fotos em WebP, preservando a proporção, orientação e os recortes aprovados. Fotos acima de 2560 px foram reduzidas proporcionalmente para evitar downloads desnecessários. Logos com transparência recebem compressão sem perda.
- Fontes locais em WOFF2, mantendo os mesmos caracteres e estilos.
- Galeria e fotos fora da primeira área visível com carregamento sob demanda.
- A foto principal carregada corresponde ao tamanho da tela; a outra versão não é baixada na entrada.
- CSS e JavaScript de produção compactados. React fica apenas na geração dos arquivos.

As fotos originais foram preservadas fora da pasta do site, em `../tmp/viviane-lp-original-assets-2026-11-12/`, e não fazem parte do envio ao GitHub.
