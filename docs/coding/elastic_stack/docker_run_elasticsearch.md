# 使用docker启动elasticsearch
docker启动elasticsearch 7.3.1：  
1. 下载elasticsearch镜像：```docker pull elasticsearch:7.3.1```
2. 启动elasticsearch，docker命令, docker里面的数据目录为默认elasticsearch目录下面的data目录。：```docker run -p 9205:9200 -p 9305:9300 -e "discovery.type=single-node" -d --name=test_es -v /home/thomas/Documents/tmp/es_data/:/usr/share/elasticsearch/data/ elasticsearch:7.3.1```
3. 下载kibana镜像：```docker pull kibana:7.3.1```
4. 启动kibana，并把kibana链接到es，需要挂载kibana.yml，修改elasticsearch的地址：```docker run -d -p 5606:5601 -v /home/thomas/Documents/tmp/kibana_config/kibana.yml:/usr/share/kibana/config/kibana.yml --name kibana --link test_es kibana:7.3.1```，或者``````