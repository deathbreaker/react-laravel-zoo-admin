<?php

//Route::get('{slug}', function() {
//    return view('index');
//})
//->where('slug', '(?!api)([A-z\d-\/_.]+)?');

Route::get('/', function() {
    return view('index');
});
Route::get('/login', function() {
    return view('index');
});

//Auth::routes();

//Route::get('/home', 'HomeController@index')->name('home');
