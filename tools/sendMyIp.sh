MyIp=$(curl ipinfo.io/ip)
Now_hourly=$(date +%d-%b-%H-%M)
curl -X POST -H "Content-Type: application/json" -d '{ "ip": "'$MyIp'", "dateTime": "'$Now_hourly'"}' http://localhost/api/ip
