# fastifyApi
basic api template using nodemon, fastify and swagger

 # UPDATED
 
 Just run docker-compose up -d
 
 All info about docker images and project config is in docker-compose.yml
 
 For swagger go to /documentation
 
 **All info below is not being used**
 
  # General
 
 winpty docker exec -it mongodb bash  **to go inside container in git for Windows**

  # Node
  
 - docker build -t <your username>/node-web-app .
 - docker run -p 49160:8080 -d <your username>/node-web-app
 - docker exec -it <container id> /bin/bash
 
 
 # Mongo
 
 - docker pull mongo:4.0.4
 - docker run -d -p 27017-27019:27017-27019 --name mongodb mongo:4.0.4   **to run mongo docker container** 
 

