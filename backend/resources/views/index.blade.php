<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet"  href="{{mix('/dist/bundle.css')}}">>
    <title>Zoo App</title>
</head>
<body>
<div id="app"></div>

<script src="{{mix('/dist/bundle.js')}}"></script>
{{--<script src="{{ mix('dist/app.js')}}"></script>--}}

</body>
</html>