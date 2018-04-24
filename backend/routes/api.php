<?php

use Illuminate\Http\Request;


Route::group(['middleware' => ['web']], function () {

    /* User API */
   Route::prefix('user')->group(function () {
       /*
       * AUTH routes
       */
       Route::post('login', 'Auth\User\UserLoginController@login');
       Route::post('register', 'Auth\User\RegisterController@register');
       Route::post('logout', 'Auth\User\UserLoginController@logout');
       Route::post('password/email', 'Auth\User\ForgotPasswordController@sendResetLinkEmail');
       Route::post('password/reset', 'Auth\User\ResetPasswordController@reset');

       /*
       * Animals CRUD routes
       */
       Route::get('animals', 'AnimalsController@index');
       Route::get('animals/{id}', 'AnimalsController@show');
       Route::post('animals','AnimalsController@store');
       Route::put('animals/{id}','AnimalsController@update');
       Route::delete('animals/{id}', 'AnimalsController@delete');
   });

    /* Admin API */
   Route::prefix('admin')->group(function () {
       Route::post('login','Auth\Admin\AdminLoginController@login');
       Route::post('logout','Auth\Admin\AdminLoginController@logout');
   });

});
  

