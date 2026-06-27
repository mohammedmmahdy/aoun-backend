<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function show(Request $request)
    {
        return Inertia::render('Admin/Profile/Show', [
            'admin' => $this->adminData($request),
        ]);
    }

    public function edit(Request $request)
    {
        return Inertia::render('Admin/Profile/Edit', [
            'admin' => $this->adminData($request),
        ]);
    }

    public function settings()
    {
        return Inertia::render('Admin/Settings/Index');
    }

    public function update(Request $request)
    {
        $admin = $request->user('admin');

        $validated = $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'email', 'max:255', Rule::unique(Admin::class, 'email')->ignore($admin)],
            'password' => ['nullable', 'string', 'min:8', 'confirmed'],
        ]);

        if (blank($validated['password'])) {
            unset($validated['password']);
        }

        $admin->update($validated);

        return redirect()
            ->route('admin.profile.show')
            ->with('success', 'Profile updated successfully.');
    }

    private function adminData(Request $request): array
    {
        $admin = $request->user('admin');

        return [
            'id' => $admin->id,
            'name' => $admin->name,
            'email' => $admin->email,
            'created_at' => $admin->created_at?->format('M j, Y'),
            'updated_at' => $admin->updated_at?->format('M j, Y'),
        ];
    }
}
