<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as BaseVerifier;

class VerifyCsrfToken extends BaseVerifier
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        'api/*'

    ];
}



/*'api/user/login',
'api/user/register',
'api/user/logout',
'api/user/password/email',
'api/user/password/reset',
'api/user/animals',
'api/user/animals/*',*/