<?php

namespace App\Http\Controllers\Frontend;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\News;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {

        $categories = Category::query()->take(10)->get();

        $mainPosts = News::query()
            ->with('category')
            ->where('main_material', 1)
            ->take(10)
            ->get();

        $posts = News::query()
            ->with('category')
            ->where('main_material', 0)
            ->take(6)
            ->orderBy('id', 'desc')
            ->get();

        return Inertia::render('Welcome', [
            'posts' => $posts,
            'categories' => $categories,
            'mainPosts' => $mainPosts
        ]);
    }
}
