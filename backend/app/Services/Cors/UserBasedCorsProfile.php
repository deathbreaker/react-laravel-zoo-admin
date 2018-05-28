<?php
/**
 * Created by PhpStorm.
 * User: Derid
 * Date: 28.05.2018
 * Time: 9:29
 */

namespace App\Services\Cors;

use Illuminate\Support\Facades\Auth;
use Spatie\Cors\CorsProfile\DefaultProfile;

class UserBasedCorsProfile
{
    public function allowOrigins(): array
    {
        return Auth::user()->allowed_domains;
    }
}