<?php

namespace App\Http\Controllers\Auth\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Contracts\Auth\Guard;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */


    protected function login(Guard $auth, Request $request)
    {
        $isVerified = $auth->attempt($request->only('email', 'password'), true);
        if ($isVerified) {
            $user = $auth->user()->toArray();
            $responseToReturn = [
                'message' => 'User Logged-in Successfully!',
                'dataArray' => $user
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

    protected function sendLoginResponse(Request $request)
    {
        $request->session()->regenerate();

        $user = $this->guard()->user();

        $this->authenticated($request, $user) ? $this->sendSuccessLoginResponse($user) : $this->sendFailedLoginResponse($request);
    }

    public function sendSuccessLoginResponse(Request $request, $user){
        return response()->json([
            'success' => true,
            'user' => $user
        ], 200);
    }

    protected function sendFailedLoginResponse($request)
    {
        return response()->json([
            'success' => false,
            'auth' => trans('auth.failed')
        ], 422);
    }
    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
