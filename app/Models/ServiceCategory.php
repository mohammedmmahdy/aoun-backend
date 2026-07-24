<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name'])]
class ServiceCategory extends Model
{
    /** @use HasFactory<\Database\Factories\ServiceCategoryFactory> */
    use HasFactory;

    public function services()
    {
        return $this->hasMany(Service::class);
    }

    public function scopeSearch($query, string $search = '')
    {
        if (blank($search)) {
            return $query;
        }

        return $query->where('name', 'like', "%{$search}%");
    }
}
