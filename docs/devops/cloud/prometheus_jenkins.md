# 用prometheus监控jenkins

1. docker启动prometheus  
   docker run -d --name prometheus -p 9090:9090 -v /$HOME/Documents/tools/prometheus/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus  
2. docker启动grafana  
   docker run -d --name grafana -p 3000:3000 grafana/grafana

   