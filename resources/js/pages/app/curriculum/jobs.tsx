import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Curriculum',
        href: '/',
    },
    {
        title: 'Jobs',
        href: route('app.curriculum.jobs'),
    }
];

export default function Jobs(){
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Jobs" />
            <div>I bi d Jobs site</div>
        </AppLayout>
    );
}