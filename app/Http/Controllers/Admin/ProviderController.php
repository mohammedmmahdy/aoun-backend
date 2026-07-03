<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreProviderRequest;
use App\Http\Requests\UpdateProviderRequest;
use App\Models\Provider;
use App\Repositories\ProviderRepository;
use App\Services\ProviderService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProviderController extends Controller
{
    public function __construct(
        private ProviderService $providerService,
        private ProviderRepository $providerRepository
    ) {}

    public function index(Request $request)
    {
        $search = $request->string('search')->toString();
        $providers = $this->providerService->index($search, $request->input('per_page', 10));

        return Inertia::render('Admin/Providers/Index', [
            'providers' => $providers,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Providers/Create', [
            'types' => Provider::types(),
        ]);
    }

    public function store(StoreProviderRequest $request)
    {
        $this->providerService->store($request->validated());

        return redirect()
            ->route('providers.index')
            ->with('success', 'Provider created successfully.');
    }

    public function show(Provider $provider)
    {
        return Inertia::render('Admin/Providers/Show', [
            'provider' => $this->providerRepository->formatForShow($provider),
        ]);
    }

    public function edit(Provider $provider)
    {
        return Inertia::render('Admin/Providers/Edit', [
            'provider' => $this->providerRepository->formatForEdit($provider),
            'types' => Provider::types(),
        ]);
    }

    public function update(UpdateProviderRequest $request, Provider $provider)
    {
        $this->providerService->update($provider, $request->validated());

        return redirect()
            ->route('providers.index')
            ->with('success', 'Provider updated successfully.');
    }

    public function destroy(Provider $provider)
    {
        $provider->delete();

        return redirect()
            ->route('providers.index')
            ->with('success', 'Provider deleted successfully.');
    }
}
