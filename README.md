# Basic zoo admin app
A basic authentication application with Reactjs frontend + Laravel api.This application covers basic auth flows like login , register, reset password, forgot password and include API authentication with Laravel Passport..

Please follow the below steps to run the project.This steps are for those who have laravel , composer and node installed in your local machine.If not, please proceed with the steps after installing the same.

1) Go to backend folder and run: composer install, to install your php dependencies.
2) Run: yarn, to instal the node packages.
3) Create a database of your own choice in mysql and configure your db in the .env file.
        a) If you are try using SQLite database, in root folder run: touch backend/database/database.sqlite
        b) After run: cp backend/.env.example backend/.env
        c) And then change in .env file that line - DB_CONNECTION= to DB_CONNECTION=sqlite, and remove that lines -
                DB_DATABASE= 
                DB_USERNAME= 
                DB_PASSWORD=
4) Run: php artisan migrate to scaffold your db with the required tables for your application
5) Run: php artisan passport:install
6) Run: yarn run hot
7) Run: php artisan serve

Whenever you want deploy your app, run that command: php artisan passport:keys