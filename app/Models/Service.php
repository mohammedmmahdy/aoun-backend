<?php

namespace App\Models;

use App\Enums\ServiceStatusEnum;
use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

#[Fillable(['name', 'service_category_id', 'provider_id', 'description', 'image', 'price', 'duration', 'status'])]
class Service extends Model
{
    /** @use HasFactory<\Database\Factories\ServiceFactory> */
    use HasFactory;

    public function category()
    {
        return $this->belongsTo(ServiceCategory::class, 'service_category_id');
    }

    public function provider()
    {
        return $this->belongsTo(Provider::class);
    }

    public function scopeSearch( Builder $query, string $search)
    {
        if ($search) {
            $query->where('name', 'like', "%{$search}%");
        }
    }

    // get status label
    public function getStatusLabelAttribute(): string
    {
        return ServiceStatusEnum::from($this->status)->label();
    }

    // get status color
    public function getStatusColorAttribute(): string
    {
        return ServiceStatusEnum::from($this->status)->color();
    }
}
