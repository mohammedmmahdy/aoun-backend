<?php

namespace App\Services;

use App\Models\ServiceCategory;
use App\Repositories\ServiceCategoryRepository;

class ServiceCategoryService
{
    public function __construct(
        private ServiceCategoryRepository $serviceCategoryRepository
    ) {}

    public function index(string $search = '', int $perPage = 10)
    {
        $serviceCategories = $this->serviceCategoryRepository->search($search, $perPage);

        return $serviceCategories->through(
            fn($serviceCategory) => $this->serviceCategoryRepository->formatForDisplay($serviceCategory)
        );
    }

    public function store(array $validated): ServiceCategory
    {
        return $this->serviceCategoryRepository->create($validated);
    }

    public function update(ServiceCategory $serviceCategory, array $validated): bool
    {
        return $this->serviceCategoryRepository->update($serviceCategory, $validated);
    }
}
