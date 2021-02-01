FROM centos:7

RUN yum install httpd -y

ENV puerto=9050
ENV host=0.0.0.0
ENV env=develop

WORKDIR /var/www/html

RUN echo "$puerto" > ./test.html

RUN echo "<h1>PORT: $puerto </h1>" > ./test2.html

EXPOSE 80

CMD ["apachectl", "-DFOREGROUND"]