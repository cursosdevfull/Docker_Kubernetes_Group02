FROM centos:7

RUN yum install httpd -y

WORKDIR /var/www/html

COPY run.sh ./run.sh

EXPOSE 80

CMD ["sh", "./run.sh"]