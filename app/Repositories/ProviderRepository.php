<?php

namespace App\Repositories;

use App\Models\Provider;
use Illuminate\Pagination\LengthAwarePaginator;

class ProviderRepository
{
    public function search(string $search = '', int $perPage = 10): LengthAwarePaginator
    {
        return Provider::query()
            ->search($search)
            ->latest()
            ->paginate($perPage)
            ->withQueryString();
    }

    public function findById(int $id): Provider
    {
        return Provider::findOrFail($id);
    }

    public function create(array $data): Provider
    {
        return Provider::create($data);
    }

    public function update(Provider $provider, array $data): bool
    {
        return $provider->update($data);
    }

    public function formatForDisplay(Provider $provider): array
    {
        return [
            'id' => $provider->id,
            'name' => $provider->name,
            'email' => $provider->email,
            'type' => $provider->type,
            'type_label' => $provider->type_label,
            'created_at' => $provider->created_at?->format('M j, Y'),
        ];
    }

    public function formatForShow(Provider $provider): array
    {
        return [
            'id' => $provider->id,
            'name' => $provider->name,
            'email' => $provider->email,
            'type' => $provider->type,
            'type_label' => $provider->type_label,
            'phone' => $provider->phone,
            'address' => $provider->address,
            'created_at' => $provider->created_at?->format('M j, Y'),
            'updated_at' => $provider->updated_at?->format('M j, Y'),
        ];
    }

    public function formatForEdit(Provider $provider): array
    {
        return [
            'id' => $provider->id,
            'name' => $provider->name,
            'email' => $provider->email,
            'type' => $provider->type,
            'phone' => $provider->phone,
            'address' => $provider->address,
        ];
    }
}
