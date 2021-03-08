FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY index.html /usr/share/nginx/html/

COPY .htpasswd /etc/nginx/

EXPOSE 80
