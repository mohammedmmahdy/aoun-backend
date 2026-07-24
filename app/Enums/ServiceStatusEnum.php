<?php

namespace App\Enums;

enum ServiceStatusEnum: int
{
    case ACTIVE   = 1;
    case INACTIVE = 0;

    public function label(): string
    {
        return match ($this) {
            self::ACTIVE => 'Active',
            self::INACTIVE => 'Inactive',
        };
    }

    public function color(): string
    {
        return match ($this) {
            self::ACTIVE => 'emerald-500',
            self::INACTIVE => 'rose-900',
        };
    }

}
