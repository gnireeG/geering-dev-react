import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import type Curriculum from '@/types/models/curriculum';
import { Pencil, Trash2 } from 'lucide-react';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

import { Separator } from "@/components/ui/separator"
import { Button } from '@/components/ui/button';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Curriculum',
        href: '/',
    },
    {
        title: 'Education',
        href: route('app.curriculum.education'),
    }
];

export default function Education( { curricula } : { curricula: Curriculum[] }) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Education" />
            <div>I bi d Education site</div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {curricula.map((curriculum) => (
                    <Card key={curriculum.id}>
                        <CardHeader>
                            <CardTitle>{curriculum.title}</CardTitle>
                            <CardDescription>{curriculum.institution}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{curriculum.description}</p>
                            <Separator />
                            <p>{curriculum.from.toString()} - {curriculum.to.toString()}</p>
                        </CardContent>
                        <CardFooter className="flex justify-end">
                            <Button variant="secondary" onClick={() => console.log('Edit curriculum', curriculum.id)} className="hover:cursor-pointer">
                                <Pencil />
                            </Button>
                            <Button variant="destructive" onClick={() => console.log('Delete curriculum', curriculum.id)} className="hover:cursor-pointer ml-2">
                                <Trash2 />
                            </Button>
                        </CardFooter>
                    </Card>
            ))}
            </div>
        </AppLayout>
    );
}