FROM centos:7

RUN yum update httpd
RUN yum install httpd -y

ADD miweb /var/www/html

CMD ["apachectl", "-DFOREGROUND"]
