simulando backend com json-server:

- criar diretório do backend.
- criar projeto node nesse diretório: `npm init -y`
- instalar json-server: `npm i json-server`
- criar arquivo que armazenará os dados: `touch db.json`
- configurar execução do backend:
  - no arquivo package.json, substituir/adicionar "start" ao contexto "scripts" com o conteúdo `json-server --watch db.json --port 3000`
  - modernamente: `json-server db.json` pois o resto é padrão.
- para iniciar backend, executar `npm start` no dir.
