<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Animal;

class AnimalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
//        return Animal::limit(30)->get();
        return Animal::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|unique:animals',
            'latinname' => 'required',
            'count' => 'integer',
        ]);
        $animal = new Animal();
        $animal->name = $request->name;
        $animal->latinname = $request->latinname;
        $animal->count = $request->count;
        $animal->imageurl = '/fassets/images/seznam-zvirat/empty.jpg';
        $animal->save();

        return response()->json($animal, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function get($id)
    {
        return Animal::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {

        $animal = Animal::find($id);
        $animal->name = $request->name;
        $animal->latinname = $request->latinname;
        $animal->count = $request->count;
        $animal->save();
        return response()->json($animal, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        Animal::find($id)->delete();

        return response()->json(["message" => "Animal was successfully deleted"], 204);
    }
}
