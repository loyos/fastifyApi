Now_hourly=$(date +%d-%b-%H-%M)
curl -X POST -H "Content-Type: application/json" -d '{ "ip": "Z5", "dateTime": "'$Now_hourly'"}' http://localhost/api/ip