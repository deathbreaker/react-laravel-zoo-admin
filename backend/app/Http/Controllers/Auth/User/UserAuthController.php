<?php

namespace App\Http\Controllers\Auth\User;

use App\Http\Requests\RegisterRequest;
use App\Http\Controllers\Controller;
use Illuminate\Contracts\Session\Session;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Response;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Foundation\Auth\AuthenticatesUsers;


class UserAuthController extends Controller
{

    use AuthenticatesUsers;

    public function __construct()
    {
        $this->middleware('auth')->except(['login', 'register', 'auth']);
    }


//    public function __construct()
//    {
//        $this->middleware('auth:api', ['except' => ['login', 'register']]);
//    }


//    public function login(Request $request)
//    {
//
//
////        $credentials= $registerRequest === null ? : $registerRequest ;
//
//        //$request = $registerRequest !== null ? $registerRequest : new LoginRequest();
////        $user = User::where($request->only('email', 'password'))->first();
//
//        $credentials = $request->only('email', 'password');
//
//        if (Auth::attempt($credentials)) {
//            Auth::guard()->
//            return response(null, 200);
//        } else {
//            $responseToReturn = [
//                'message' => 'Invalid Email / Password',
//            ];
//            return response()->json($responseToReturn, 403);
//        }
//
//
//    }


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

//    public function logout(Request $request)
//    {
//
//        Auth::logout();
//        //return response()->json(['message' => 'Successfully log out!'], 200);
//
//    }
    protected function authenticated(Request $request, $user)
    {

        $request->session()->put('name', $user->name);
        $request->session()->save();
        return response('', 200);
    }


    protected function sendFailedLoginResponse(Request $request)
    {
        return response('', 500);
    }


    public function auth()
    {
        if (Auth::check()) {
            return response()->json(["auth" => true], 200);
        }

        return response()->json(["auth" => false], 403);
    }


}
