<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'fname',
        'lname',
        'email',
        'password',
        'national_Id',
        'username'
    ];
    public static $rules = [
        'fname' => 'required|regex:/^[A-Za-z]+$/',
        'lname' => 'required|regex:/^[A-Za-z]+$/',
        'email' => 'required|email',
        'username' => 'required|min:8|regex:/^[a-zA-Z][a-zA-Z0-9]*$/',
        'national_Id' => 'required|min:14|max:14|regex:/^[0-9]+$/',
        'password' => 'required|min:8',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

      public function user_asset()
    {
        return $this->hasMany(UserAsset::class);
    }
}
