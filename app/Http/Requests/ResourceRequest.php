<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;
use App\Repositories\ResourceRepositoryInterface;

class ResourceRequest extends Request
{
    protected $repository;

    public function __construct(ResourceRepositoryInterface $repository)
    {
        $this->repository = $repository;
    }

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
//        $user = $this->user();
//
//        $rules = [
//            'organizations' => 'required|repeater',
//        ];
//
//        // Add additional rules for superadmin form
//        if ($user->isSuperadmin()) {
//            $rules = array_merge($rules, [
//                'doctypes'    => 'required',
//                'languages'   => 'required',
//                'issue_areas' => 'required|max:3',
//            ]);
//        }
//
//        return array_merge($this->repository->newModel($user)->getRules('identifier'), $rules);
        return array();
    }
}
