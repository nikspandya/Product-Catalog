# Product-Catalog App

The product catalog app is built with Django backend and React frontend

# Installation

## Using docker

Install [docker](https://docs.docker.com) and [docker compose](https://docs.docker.com/compose)

Then run the following cmd from the root folder to start the application

     docker-compose up

or to start the app in the background

     docker-compose -d

This will start the [backend api](http://localhost:8000/api/product/) and
[forntend app](http://localhost:8080)

## Manually

### backend

Please do the following steps to install and run the backend manually

1. Install [python 3.11](https://www.python.org/downloads) or higher
2. From the [backend](/backend/) run cmd `pipenv install` to install all dependencies
3. Then start pipenv by running `pipenv shell`
4. Then from the [backend](/backend/) directory run cmd `python manage.py runserver` or `python3 manage.py runserver` (for mac and Linux users) to start the backed
5. Then the backend api should be up and running at [http://localhost:8000/api/product/](http://localhost:8000/api/product/)

### Frontend

Please do the following steps to install and run frontend manually

1. Install [Node.js](https://nodejs.org/en/download/) for your operating system
2. From [frontend](/frontend/) run following commands to install dependencies and start the frontend

```bash
yarn install
```

```bash
yarn dev
```

3. Then frontend should be running at [http://localhost:8080](http://localhost:8080)

- [developer guide](/frontend/README.md)

## Usage

- Once both frontend and backend are up and running then the user can go to
  [backend api](http://localhost:8000/api/product/) to see all products and can create, update, and delete existing products

- User can go to [forntend](http://localhost:8080) to see the all products catalog

- User can add new products to the catalog

- User can edit or delete the existing product from the catalog

- User can click on the product name to go to the product detail page

- User can sort products by name, price and active status

- User can filter/search products by product name

Note: All products price are reduce by 10% disccount if the time of the day is between 10:00 to 15:00

## Enjoy the App
