# Stage 1 - the build process
FROM node:16.13 as build-deps
WORKDIR /usr/src/app
COPY . ./
RUN yarn install --immutable --immutable-cache
RUN yarn build

# Stage 2 - the production environment
FROM nginx:1.21-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]