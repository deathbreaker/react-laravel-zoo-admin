<?php

Route::group(['middleware' => ['web']], function () {

    /* User API */
   Route::prefix('user')->group(function () {
       /*
       * AUTH routes
       */
       Route::get('auth', 'Auth\AuthController@auth');
       Route::get('/token/refresh', 'Auth\AuthController@refresh');
       Route::post('login', 'Auth\AuthController@login');
       Route::post('register','Auth\AuthController@register');
       Route::post('logout', 'Auth\AuthController@logout');
       Route::post('password/email', 'Auth\AuthController@sendResetLinkEmail');
       Route::post('password/reset', 'Auth\AuthController@reset');


       /*
       * Animals CRUD routes
       */
       Route::get('animals/{id}', 'Resource\AnimalController@get');
       Route::get('animals', 'Resource\AnimalController@index');
       Route::post('animals','Resource\AnimalController@store');
       Route::patch('animals/{id}','Resource\AnimalController@update');
       Route::delete('animals/{id}', 'Resource\AnimalController@destroy');
   });

});
  

