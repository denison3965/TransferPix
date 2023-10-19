# Use uma imagem base do Node.js
FROM node:16  

# Atualize o sistema e instale as dependências necessárias
RUN apt-get update && apt-get install -y \
    libz-dev \
    libssl-dev \
    libpq-dev \
    librdkafka-dev

# Instale as dependências do Node.js (se necessário)
# Os módulos gRPC, rdkafka e o driver PostgreSQL
 #RUN npm install grpc rdkafka-node pg

# Copie seu código Node.js e outros arquivos necessários
COPY . /app

# Configure o diretório de trabalho
WORKDIR /app

# Comando de execução da aplicação Node.js
# CMD ["node", "seu_arquivo_node.js"]
CMD ["tail", "-f", "/dev/null"]