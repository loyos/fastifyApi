# fastifyApi
basic api template using nodemon, fastify and swagger

# To put on Swagger

Json Example to create a Car

{
	"title": "Z5",
	"brand": "blablacarrobonito",
	"price": "8 000",
	"age": 10,
	"services": {
		"BmW HK": "21/04/2016"
	}
}

 # UPDATED
 
 Just run docker-compose up -d

 docker exec -it fe284ea437ef /bin/sh ---> to go inside container on digitalOcean
 
 All info about docker images and project config is in docker-compose.yml
 
 For swagger go to /documentation
 
 To Use sh commands inside ci folder, run like this **sudo bash destroy.sh**
 
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
 

