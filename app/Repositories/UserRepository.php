<?php

namespace App\Repositories;

use App\Models\User;
use Illuminate\Pagination\LengthAwarePaginator;

class UserRepository
{
    public function search(string $search = '', int $perPage = 10): LengthAwarePaginator
    {
        return User::query()
            ->search($search)
            ->latest()
            ->paginate($perPage)
            ->withQueryString();
    }

    public function findById(int $id): User
    {
        return User::findOrFail($id);
    }

    public function create(array $data): User
    {
        return User::create($data);
    }

    public function update(User $user, array $data): bool
    {
        return $user->update($data);
    }

    public function formatForDisplay(User $user): array
    {
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'created_at' => $user->created_at?->format('M j, Y'),
        ];
    }

    public function formatForShow(User $user): array
    {
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
            'email_verified_at' => $user->email_verified_at?->format('M j, Y'),
            'created_at' => $user->created_at?->format('M j, Y'),
            'updated_at' => $user->updated_at?->format('M j, Y'),
        ];
    }

    public function formatForEdit(User $user): array
    {
        return [
            'id' => $user->id,
            'name' => $user->name,
            'email' => $user->email,
        ];
    }
}
