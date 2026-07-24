<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use App\Models\Service;
use App\Repositories\ServiceRepository;
use App\Services\ServiceService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceController extends Controller
{
    public function __construct(
        private ServiceService $serviceService,
        private ServiceRepository $serviceRepository
    ) {}

    public function index(Request $request)
    {
        $search = $request->string('search')->toString();
        $services = $this->serviceService->index($search, $request->input('per_page', 10));

        return Inertia::render('Admin/Services/Index', [
            'services' => $services,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/Services/Create');
    }

    public function store(StoreServiceRequest $request)
    {
        $this->serviceService->store($request->validated());

        return redirect()
            ->route('services.index')
            ->with('success', 'Service created successfully.');
    }

    public function show(Service $service)
    {
        return Inertia::render('Admin/Services/Show', [
            'service' => $this->serviceRepository->formatForShow($service),
        ]);
    }

    public function edit(Service $service)
    {
        return Inertia::render('Admin/Services/Edit', [
            'service' => $this->serviceRepository->formatForEdit($service),
        ]);
    }

    public function update(UpdateServiceRequest $request, Service $service)
    {
        $this->serviceService->update($service, $request->validated());

        return redirect()
            ->route('services.index')
            ->with('success', 'Service updated successfully.');
    }

    public function destroy(Service $service)
    {
        // check if the service category has any associated services
        $service->delete();

        return redirect()
            ->route('services.index')
            ->with('success', 'Service deleted successfully.');
    }
}
