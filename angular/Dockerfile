# Build using:
#   docker build -t ksahnine/store-app .
# Run with:
#   docker run -p 4200:4200 ksahnine/store-app

FROM trion/ng-cli:1.7.3 
USER root
WORKDIR /app
COPY . .
RUN chown -R node:node /app
USER node
RUN npm install

EXPOSE 4200

CMD ["ng", "serve", "--host", "0.0.0.0"]
