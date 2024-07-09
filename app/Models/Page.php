<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Page extends Model
{
    use HasFactory;
    protected $fillable = ['title', 'url', 'content', 'user_id', 'agency_id'];

    public  function user() {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function agency()
    {
        return $this->belongsTo(Agency::class, 'agency_id', 'id');
    }

    public function setTitleAttribute($value)
    {
        $this->attributes['title'] = $value;
        $this->attributes['url'] = Str::slug($value); // Генерация slug'а на основе названия
    }
}
