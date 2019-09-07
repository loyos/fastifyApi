docker stop mongo
docker stop node
docker rmi -f mongo
docker rmi -f node
docker-compose up -d