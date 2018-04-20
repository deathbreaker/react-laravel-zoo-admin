<?php
/**
 * Created by PhpStorm.
 * User: Derid
 * Date: 09.04.2018
 * Time: 19:03
 */

namespace App;
use \Illuminate\Routing\Router as VendorRouter;

class Router extends VendorRouter
{

    public function auth()
    {
        // Authentication Routes...
        $this->get('user/login', 'Auth\Admin\UserLoginController@showLoginForm')->name('login');
        $this->post('user/login', 'Auth\Admin\UserLoginController@login');
        $this->post('user/logout', 'Auth\Admin\UserLoginController@logout')->name('logout');

        // Registration Routes...
        $this->get('register', 'Auth\RegisterController@showRegistrationForm')->name('register');
        $this->post('register', 'Auth\RegisterController@register');

        // Password Reset Routes...
        $this->get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
        $this->post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');
        $this->get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
        $this->post('password/reset', 'Auth\ResetPasswordController@reset');
    }

}