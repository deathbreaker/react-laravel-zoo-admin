<?php

namespace App\Http\Controllers\Auth\User;

use App\Http\Requests\RegisterRequest;
use App\Http\Requests\LoginRequest;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Requests\CustomRequest;
use Illuminate\Support\Facades\Session;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Contracts\Auth\Guard;


class UserAuthController extends Controller
{

    //use AuthenticatesUsers;

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }


//    public function __construct()
//    {
//        $this->middleware('auth:api', ['except' => ['login', 'register']]);
//    }


    public function login(Request $request)
    {


//        $credentials= $registerRequest === null ? : $registerRequest ;

        //$request = $registerRequest !== null ? $registerRequest : new LoginRequest();
//        $user = User::where($request->only('email', 'password'))->first();

        $credentials = $request->only('email', 'password');

        //$isVerified = $user !== null ? true : false;
        $isVerified =  auth()->attempt($credentials);
        $request->session()->regenerate();
        if ($isVerified) {
            $responseToReturn = [
                'success' => 'true',
                'message' => 'User Logged-in Successfully!',
            ];
            return response()->json($responseToReturn, 200);
        } else {
            $responseToReturn = [
                'success' => 'false',
                'message' => 'Invalid Email / Password',
            ];
            return response()->json($responseToReturn, 200);
        }


    }



    protected function register(RegisterRequest $request)
    {
        $user = new User();
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->name = $request->name;
        $user->age = $request->age;
        $user->save();
        return $this->login($request);
    }

    public function logout(Request $request)
    {
        $request->session()->invalidate();
        auth()->logout();
        return response()->json(['message' => 'Successfully log out!'], 200);

    }

    public function verifyAuth()
    {
        return response()->json(['message' => auth()->check()], 200);

    }


}
