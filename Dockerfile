# production environment
FROM nginx:stable-alpine
COPY /build /usr/share/nginx/html

# replaceing default nginx config
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf