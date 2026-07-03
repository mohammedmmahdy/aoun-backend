import { queryParams, type RouteQueryOptions, type RouteDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ProviderController::index
* @see app/Http/Controllers/Admin/ProviderController.php:21
* @route '/providers'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/providers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ProviderController::index
* @see app/Http/Controllers/Admin/ProviderController.php:21
* @route '/providers'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProviderController::index
* @see app/Http/Controllers/Admin/ProviderController.php:21
* @route '/providers'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ProviderController::index
* @see app/Http/Controllers/Admin/ProviderController.php:21
* @route '/providers'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ProviderController::create
* @see app/Http/Controllers/Admin/ProviderController.php:34
* @route '/providers/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/providers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ProviderController::create
* @see app/Http/Controllers/Admin/ProviderController.php:34
* @route '/providers/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProviderController::create
* @see app/Http/Controllers/Admin/ProviderController.php:34
* @route '/providers/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ProviderController::create
* @see app/Http/Controllers/Admin/ProviderController.php:34
* @route '/providers/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ProviderController::store
* @see app/Http/Controllers/Admin/ProviderController.php:41
* @route '/providers'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/providers',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\ProviderController::store
* @see app/Http/Controllers/Admin/ProviderController.php:41
* @route '/providers'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProviderController::store
* @see app/Http/Controllers/Admin/ProviderController.php:41
* @route '/providers'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \App\Http\Controllers\Admin\ProviderController::show
* @see app/Http/Controllers/Admin/ProviderController.php:50
* @route '/providers/{provider}'
*/
export const show = (args: { provider: number | { id: number } } | [provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/providers/{provider}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ProviderController::show
* @see app/Http/Controllers/Admin/ProviderController.php:50
* @route '/providers/{provider}'
*/
show.url = (args: { provider: number | { id: number } } | [provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { provider: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { provider: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            provider: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        provider: typeof args.provider === 'object'
        ? args.provider.id
        : args.provider,
    }

    return show.definition.url
            .replace('{provider}', parsedArgs.provider.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProviderController::show
* @see app/Http/Controllers/Admin/ProviderController.php:50
* @route '/providers/{provider}'
*/
show.get = (args: { provider: number | { id: number } } | [provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ProviderController::show
* @see app/Http/Controllers/Admin/ProviderController.php:50
* @route '/providers/{provider}'
*/
show.head = (args: { provider: number | { id: number } } | [provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ProviderController::edit
* @see app/Http/Controllers/Admin/ProviderController.php:57
* @route '/providers/{provider}/edit'
*/
export const edit = (args: { provider: number | { id: number } } | [provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/providers/{provider}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ProviderController::edit
* @see app/Http/Controllers/Admin/ProviderController.php:57
* @route '/providers/{provider}/edit'
*/
edit.url = (args: { provider: number | { id: number } } | [provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { provider: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { provider: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            provider: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        provider: typeof args.provider === 'object'
        ? args.provider.id
        : args.provider,
    }

    return edit.definition.url
            .replace('{provider}', parsedArgs.provider.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProviderController::edit
* @see app/Http/Controllers/Admin/ProviderController.php:57
* @route '/providers/{provider}/edit'
*/
edit.get = (args: { provider: number | { id: number } } | [provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\Admin\ProviderController::edit
* @see app/Http/Controllers/Admin/ProviderController.php:57
* @route '/providers/{provider}/edit'
*/
edit.head = (args: { provider: number | { id: number } } | [provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\Admin\ProviderController::update
* @see app/Http/Controllers/Admin/ProviderController.php:65
* @route '/providers/{provider}'
*/
export const update = (args: { provider: number | { id: number } } | [provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/providers/{provider}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\ProviderController::update
* @see app/Http/Controllers/Admin/ProviderController.php:65
* @route '/providers/{provider}'
*/
update.url = (args: { provider: number | { id: number } } | [provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { provider: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { provider: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            provider: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        provider: typeof args.provider === 'object'
        ? args.provider.id
        : args.provider,
    }

    return update.definition.url
            .replace('{provider}', parsedArgs.provider.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProviderController::update
* @see app/Http/Controllers/Admin/ProviderController.php:65
* @route '/providers/{provider}'
*/
update.put = (args: { provider: number | { id: number } } | [provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \App\Http\Controllers\Admin\ProviderController::update
* @see app/Http/Controllers/Admin/ProviderController.php:65
* @route '/providers/{provider}'
*/
update.patch = (args: { provider: number | { id: number } } | [provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \App\Http\Controllers\Admin\ProviderController::destroy
* @see app/Http/Controllers/Admin/ProviderController.php:74
* @route '/providers/{provider}'
*/
export const destroy = (args: { provider: number | { id: number } } | [provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/providers/{provider}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\ProviderController::destroy
* @see app/Http/Controllers/Admin/ProviderController.php:74
* @route '/providers/{provider}'
*/
destroy.url = (args: { provider: number | { id: number } } | [provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { provider: args }
    }

    if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
        args = { provider: args.id }
    }

    if (Array.isArray(args)) {
        args = {
            provider: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        provider: typeof args.provider === 'object'
        ? args.provider.id
        : args.provider,
    }

    return destroy.definition.url
            .replace('{provider}', parsedArgs.provider.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ProviderController::destroy
* @see app/Http/Controllers/Admin/ProviderController.php:74
* @route '/providers/{provider}'
*/
destroy.delete = (args: { provider: number | { id: number } } | [provider: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

const providers = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default providers