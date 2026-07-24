<?php

namespace App\Http\Requests;

use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required', 'string', 'max:255'],
            'service_category_id' => ['required', 'exists:service_categories,id'],
            'description' => ['nullable', 'string'],
            'image' => ['nullable', 'string'],
            'price' => ['nullable', 'string'],
            'duration' => ['nullable', 'string'],
            'status' => ['nullable', 'in:0,1'],
        ];
    }
}
