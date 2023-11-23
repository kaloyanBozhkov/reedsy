FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=mindtrace

VOLUME /var/lib/mysql

EXPOSE 3308

CMD ["mysqld"]

