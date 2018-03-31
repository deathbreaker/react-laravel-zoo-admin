# react-laravel-auth
A basic authentication application with Reactjs frontend + Laravel api.This application covers basic auth flows like login , register, reset password, forgot password and include API authentication with Laravel Passport.

Please follow the below steps to run the project.This steps are for those who have laravel , composer and node installed in your local machine.If not, please proceed with the steps after installing the same.

1) Run composer install to install your php dependencies.
2) Run yarn to instal the node packages.
3) Create a database of your own choice in mysql and configure your db in the .env file.
4) Run php artisan migrate to scaffold your db with the required tables for your application
5) Run php artisan passport:install
6) Run npm run hot
7) Run php artisan serve

Whenever you want deploy your app, run that command: php artisan passport:keys