<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
#[Fillable(['name','email','type','phone','address'])]
class Provider extends Model
{
    use HasFactory;

    const TYPE_FREELANCER = 1;
    const TYPE_OFFICE = 2;


    function getTypeLabelAttribute() : string {
        return match($this->attributes['type']) {
            self::TYPE_FREELANCER => 'Freelancer',
            self::TYPE_OFFICE => 'Office',
            default => 'Unknown',
        };
    }

    static function types() : array {
        return [
            self::TYPE_FREELANCER => 'Freelancer',
            self::TYPE_OFFICE => 'Office',
        ];
    }
    public function scopeSearch($query, string $search = '')
    {
        if (blank($search)) {
            return $query;
        }

        return $query->where('name', 'like', "%{$search}%")
            ->orWhere('email', 'like', "%{$search}%");
    }
}
