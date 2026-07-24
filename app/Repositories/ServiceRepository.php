<?php

namespace App\Repositories;

use App\Models\Service;
use Illuminate\Pagination\LengthAwarePaginator;

class ServiceRepository
{
    public function search(string $search = '', int $perPage = 10): LengthAwarePaginator
    {
        return Service::query()
            ->with(['category', 'provider'])
            ->search($search)
            ->latest()
            ->paginate($perPage)
            ->withQueryString();
    }

    public function findById(int $id): Service
    {
        return Service::findOrFail($id);
    }

    public function create(array $data): Service
    {
        return Service::create($data);
    }

    public function update(Service $service, array $data): bool
    {
        return $service->update($data);
    }

    public function formatForDisplay(Service $service): array
    {
        return [
            'id' => $service->id,
            'name' => $service->name,
            'description' => $service->description,
            'image' => $service->image,
            'price' => $service->price,
            'duration' => $service->duration,
            'category' => $service->category?->name,
            'provider' => $service->provider?->name,
            'status_label' => $service->status_label,
            'status_color' => $service->status_color,
            'status' => $service->status,
            'created_at' => $service->created_at?->format('M j, Y'),
            'updated_at' => $service->updated_at?->format('M j, Y'),
        ];
    }

    public function formatForShow(Service $service): array
    {
        return [
            'id' => $service->id,
            'name' => $service->name,
            'description' => $service->description,
            'image' => $service->image,
            'price' => $service->price,
            'duration' => $service->duration,
            'category' => $service->category->name,
            'provider' => $service->provider->name,
            'status_label' => $service->status_label,
            'status_color' => $service->status_color,
            'status' => $service->status,
            'created_at' => $service->created_at?->format('M j, Y'),
            'updated_at' => $service->updated_at?->format('M j, Y'),
        ];
    }

    public function formatForEdit(Service $service): array
    {
        return [
            'id' => $service->id,
            'name' => $service->name,
            'description' => $service->description,
            'image' => $service->image,
            'price' => $service->price,
            'duration' => $service->duration,
            'category_id' => $service->category_id,
            'provider_id' => $service->provider_id,
            'status' => $service->status,
            'created_at' => $service->created_at?->format('M j, Y'),
            'updated_at' => $service->updated_at?->format('M j, Y'),
        ];
    }
}
