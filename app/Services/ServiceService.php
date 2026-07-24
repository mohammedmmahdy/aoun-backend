<?php

namespace App\Services;

use App\Models\Service;
use App\Repositories\ServiceRepository;

class ServiceService
{
    public function __construct(
        private ServiceRepository $serviceRepository
    ) {}

    public function index(string $search = '', int $perPage = 10)
    {
        $services = $this->serviceRepository->search($search, $perPage);

        return $services->through(
            fn(Service $service) => $this->serviceRepository->formatForDisplay($service)
        );
    }

    public function store(array $validated): Service
    {
        return $this->serviceRepository->create($validated);
    }

    public function update(Service $service, array $validated): bool
    {
        return $this->serviceRepository->update($service, $validated);
    }
}
