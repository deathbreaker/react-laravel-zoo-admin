<?php

use Illuminate\Http\Request;


Route::group(['middleware' => ['web']], function () {

    /* User API */
   Route::prefix('user')->group(function () {
        Route::post('login', 'Auth\User\UserLoginController@login');
        Route::post('register', 'Auth\User\RegisterController@register');
        Route::post('logout', 'Auth\User\UserLoginController@logout');
        Route::post('password/email', 'Auth\User\ForgotPasswordController@sendResetLinkEmail');
        Route::post('password/reset', 'Auth\User\ResetPasswordController@reset');
   });

    /* Admin API */
   Route::prefix('admin')->group(function () {
        Route::post('login','Auth\Admin\AdminLoginController@login');
        Route::post('logout','Auth\Admin\AdminLoginController@logout');
   });

});
  

