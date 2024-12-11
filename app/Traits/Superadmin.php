<?php

namespace App\Traits;

/**
 * We have this in a trait, instead of a separate model, because the database structure we inherited attaches superadmin data to the organization relationship. If we ever come to a point of being able to re-factor the database structure, this should be moved to it's own model/relationship.
 */
trait Superadmin
{
    /**
     * Is this user a superadmin?
     *
     * @return boolean
     */
    public function isSuperadmin()
    {
        return $this->organizations()->lists('superadmin')->contains(1);
    }

    /**
     * Add superadmin role for user.
     *
     * We inherited an odd system that stores superadmin permissions on the `organization_affiliations` table
     * so we specify the IssueLab organization to store it in a consistent place
     *
     * return void
     */
    public function addSuperadmin()
    {
        // Set superadmin on issuelab organization
        $issuelab = $this->organizations()->firstOrCreate(['organization' => 'IssueLab']);
        $this->organizations()->sync([$issuelab->id => ['superadmin' => 1]], false);
    }

    /**
     * Remove superadmin role for user.
     *
     * Because this role is stored on the `organization_affiliations` table and could be registered on multiple
     * organizations, we look for all rows where `superadmin === 1`
     *
     * @return void
     */
    public function removeSuperadmin()
    {
        // Remove superadmin on all related organizations
        $related_organizations = $this->organizations()
            ->wherePivot('superadmin', '=', 1)
            ->lists('superadmin', 'org_id')
            ->map(function () {
                return ['superadmin' => 0];
            });

        if (!$related_organizations->isEmpty()) {
            $this->organizations()->sync($related_organizations->toArray(), false);
        }
    }

    public function setSuperadmin($isSuperadmin = false)
    {
        if (true === $isSuperadmin) {
            return $this->addSuperadmin();
        }

        return $this->removeSuperadmin();
    }
}
