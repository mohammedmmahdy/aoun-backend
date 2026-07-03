<?php

namespace App\Services;

use App\Models\Provider;
use App\Repositories\ProviderRepository;

class ProviderService
{
    public function __construct(
        private ProviderRepository $providerRepository
    ) {}

    public function index(string $search = '', int $perPage = 10)
    {
        $providers = $this->providerRepository->search($search, $perPage);

        return $providers->through(
            fn(Provider $provider) => $this->providerRepository->formatForDisplay($provider)
        );
    }

    public function store(array $validated): Provider
    {
        return $this->providerRepository->create($validated);
    }

    public function update(Provider $provider, array $validated): bool
    {
        return $this->providerRepository->update($provider, $validated);
    }
}
