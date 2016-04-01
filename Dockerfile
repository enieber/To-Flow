FROM mhart/alpine-node

WORKDIR /src
ADD . .

# RUN npm install hapi joi boom

EXPOSE 3000
ENTRYPOINT ["node"]
