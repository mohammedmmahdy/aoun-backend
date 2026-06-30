<?php

namespace App\Services;

use App\Models\User;
use App\Repositories\UserRepository;

class UserService
{
    public function __construct(
        private UserRepository $userRepository
    ) {}

    public function index(string $search = '', int $perPage = 10)
    {
        $users = $this->userRepository->search($search, $perPage);

        return $users->through(
            fn(User $user) => $this->userRepository->formatForDisplay($user)
        );
    }

    public function store(array $validated): User
    {
        return $this->userRepository->create($validated);
    }

    public function update(User $user, array $validated): bool
    {
        if (blank($validated['password'] ?? null)) {
            unset($validated['password']);
        }

        return $this->userRepository->update($user, $validated);
    }
}
