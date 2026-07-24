<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreServiceCategoryRequest;
use App\Http\Requests\UpdateServiceCategoryRequest;
use App\Models\ServiceCategory;
use App\Repositories\ServiceCategoryRepository;
use App\Services\ServiceCategoryService;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServiceCategoryController extends Controller
{
    public function __construct(
        private ServiceCategoryService $serviceCategoryService,
        private ServiceCategoryRepository $serviceCategoryRepository
    ) {}

    public function index(Request $request)
    {
        $search = $request->string('search')->toString();
        $serviceCategories = $this->serviceCategoryService->index($search, $request->input('per_page', 10));

        return Inertia::render('Admin/ServiceCategories/Index', [
            'serviceCategories' => $serviceCategories,
            'filters' => [
                'search' => $search,
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('Admin/ServiceCategories/Create');
    }

    public function store(StoreServiceCategoryRequest $request)
    {
        $this->serviceCategoryService->store($request->validated());

        return redirect()
            ->route('service-categories.index')
            ->with('success', 'ServiceCategory created successfully.');
    }

    public function show(ServiceCategory $serviceCategory)
    {
        return Inertia::render('Admin/ServiceCategories/Show', [
            'serviceCategory' => $this->serviceCategoryRepository->formatForShow($serviceCategory),
        ]);
    }

    public function edit(ServiceCategory $serviceCategory)
    {
        return Inertia::render('Admin/ServiceCategories/Edit', [
            'serviceCategory' => $this->serviceCategoryRepository->formatForEdit($serviceCategory),
        ]);
    }

    public function update(UpdateServiceCategoryRequest $request, ServiceCategory $serviceCategory)
    {
        $this->serviceCategoryService->update($serviceCategory, $request->validated());

        return redirect()
            ->route('service-categories.index')
            ->with('success', 'ServiceCategory updated successfully.');
    }

    public function destroy(ServiceCategory $serviceCategory)
    {
        // check if the service category has any associated services
        if ($serviceCategory->services()->exists()) {
            return redirect()
                ->route('service-categories.index')
                ->with('error', 'Cannot delete ServiceCategory with associated services.');
        }

        $serviceCategory->delete();

        return redirect()
            ->route('service-categories.index')
            ->with('success', 'ServiceCategory deleted successfully.');
    }
}
