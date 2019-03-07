<?php

//Route::get('{slug}', function() {
//    return view('index');
//})
//->where('slug', '(?!api)([A-z\d-\/_.]+)?');

Route::get('{slug}', function() {
    return view('index');})->where('slug', '(?!api)([A-z\d-\/_.]+)?');


    
    