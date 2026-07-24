<?php

namespace App\Repositories;

use App\Models\ServiceCategory;
use Illuminate\Pagination\LengthAwarePaginator;

class ServiceCategoryRepository
{
    public function search(string $search = '', int $perPage = 10): LengthAwarePaginator
    {
        return ServiceCategory::query()
            ->withCount('services')
            ->search($search)
            ->latest()
            ->paginate($perPage)
            ->withQueryString();
    }

    public function findById(int $id): ServiceCategory
    {
        return ServiceCategory::findOrFail($id);
    }

    public function create(array $data): ServiceCategory
    {
        return ServiceCategory::create($data);
    }

    public function update(ServiceCategory $serviceCategory, array $data): bool
    {
        return $serviceCategory->update($data);
    }

    public function formatForDisplay(ServiceCategory $serviceCategory): array
    {
        return [
            'id' => $serviceCategory->id,
            'name' => $serviceCategory->name,
            'service_count' => $serviceCategory->services_count,
            'created_at' => $serviceCategory->created_at?->format('M j, Y'),
            'updated_at' => $serviceCategory->updated_at?->format('M j, Y'),
        ];
    }

    public function formatForShow(ServiceCategory $serviceCategory): array
    {
        return [
            'id' => $serviceCategory->id,
            'name' => $serviceCategory->name,
            'created_at' => $serviceCategory->created_at?->format('M j, Y'),
            'updated_at' => $serviceCategory->updated_at?->format('M j, Y'),
        ];
    }

    public function formatForEdit(ServiceCategory $serviceCategory): array
    {
        return [
            'id' => $serviceCategory->id,
            'name' => $serviceCategory->name,
            'created_at' => $serviceCategory->created_at?->format('M j, Y'),
            'updated_at' => $serviceCategory->updated_at?->format('M j, Y'),
        ];
    }
}
