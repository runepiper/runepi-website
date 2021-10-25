# www.runepiper.de

This repository contains my personal website.

## Use with Docker

Start a node container and log into the container in order to install dependencies and build the CSS. Keep in mind to enter `/var/www/html` directory.

```bash
docker run -it --rm --name runepi-website -v $(pwd):/var/www/html node:12 bash
```

Build the production CSS file

```bash
cd /var/www/html && NODE_ENV=production npx tailwindcss -o assets/stylesheets/main.css --minify
```
