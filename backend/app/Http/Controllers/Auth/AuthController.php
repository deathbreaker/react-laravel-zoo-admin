<?php

namespace App\Http\Controllers\Auth;

use App\Http\Requests\RegisterRequest;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Session\Session;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;


class AuthController extends Controller
{

    use AuthenticatesUsers;

    public function __construct()
    {
        $this->middleware('auth')->except(['login', 'register', 'auth', 'logout']);
    }


    protected function register(RegisterRequest $request)
    {
        $user = new User();
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->name = $request->name;
        $user->age = $request->age;
        $user->phonenumber = null;
        $user->role = "user";
        $user->save();
        return $this->login($request);
    }

    public function logout(Request $request)
    {
        Auth::logout();

    }



    protected function sendFailedLoginResponse(Request $request)
    {
        return response('', 500);
    }

    public function auth()
    {
        if (Auth::check()) {
            $role = Auth::user()->role;
            return response()->json(["auth" => $role ], 200);
        }

        return response()->json(["auth" => null], 403);

    }


    protected function authenticated(Request $request, $user)
    {

        $request->session()->put('name', $user->name);
        $request->session()->save();
        return response('', 200);
    }

}
