<?php
namespace App\Http\Controllers;
use Illuminate\Routing\Controller as BaseController;
use View;
class WelcomeController extends BaseController
{
	public function index()
    {
        //return view('welcome.index');
        return View::make('welcome.index');
    }
}