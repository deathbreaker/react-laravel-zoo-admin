<?php

use Illuminate\Http\Request;


Route::group(['middleware' => ['web']], function () {

    /* User API */
    Route::post('user-login','Auth\User\LoginController@login');
    Route::post('user-register','Auth\User\RegisterController@register');
    Route::post('user-logout','Auth\User\LoginController@logout');
    Route::post('user-password/email','Auth\User\ForgotPasswordController@sendResetLinkEmail');
    Route::post('user-password/reset','Auth\User\ResetPasswordController@reset');

    /* TODO:  Zoo Records API */

    /* Admin API */
    Route::post('admin-login','Auth\Admin\LoginController@login');
    Route::post('logout','Auth\Admin\LoginController@logout');

    //Route::post('register','Auth\Admin\RegisterController@register');
    //Route::post('password/email','Auth\Admin\ForgotPasswordController@sendResetLinkEmail');
    //Route::post('password/reset','Auth\Admin\ResetPasswordController@reset');
       
});
  

