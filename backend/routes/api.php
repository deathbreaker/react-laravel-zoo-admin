<?php



Route::group(['middleware' => ['web']], function () {

    /* User API */
   Route::prefix('user')->group(function () {
       /*
       * AUTH routes
       */
       Route::get('auth', 'Auth\User\UserAuthController@auth');
       Route::get('/token/refresh', 'Auth\User\UserAuthController@refresh');
       Route::post('login', 'Auth\User\UserAuthController@login');
       Route::post('register','Auth\User\UserAuthController@register');
       Route::post('logout', 'Auth\User\UserAuthController@logout');
       Route::post('password/email', 'Auth\User\UserAuthController@sendResetLinkEmail');
       Route::post('password/reset', 'Auth\User\UserAuthController@reset');


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
       Route::post('login','Auth\Admin\AdminAuthController@login');
       Route::post('logout','Auth\Admin\AdminAuthController@logout');
   });

});
  

