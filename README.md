# www.runepiper.de

This repository contains my personal website.

## Use with Docker

Start a node container and log into the container in order to install dependencies and build the CSS.

```bash
docker run -it --rm --name runepi-website -v $(pwd):/var/www/html -w /var/www/html node:latest bash
```

Build the production CSS file

```bash
docker run -it --rm -v ./:/var/www/html -w /var/www/html node:latest \
    npx @tailwindcss/cli -i ./assets/stylesheets/app.css -o ./assets/stylesheets/main.css --minify --watch
```
