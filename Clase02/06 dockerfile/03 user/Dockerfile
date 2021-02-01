FROM centos:7

RUN yum install httpd -y

WORKDIR /var/www/html

RUN echo "$(whoami)" > ./user1.html

RUN useradd sergio
RUN chown -R sergio .

USER sergio

RUN echo "$(whoami)" > ./user2.html

EXPOSE 80

USER root

CMD ["apachectl", "-DFOREGROUND"]