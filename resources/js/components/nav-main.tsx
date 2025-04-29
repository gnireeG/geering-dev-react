import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItemGroup } from '@/types';
import { Link } from '@inertiajs/react';

export function NavMain({ groups = [] }: { groups: NavItemGroup[] }) {
    return (
        <>
            {groups.map((group) => (
                <SidebarGroup className="px-2 py-0" key={group.title + Math.random().toString()}>
                    {group.title && <SidebarGroupLabel>{group.title}</SidebarGroupLabel>}
                    <SidebarMenu>
                        {group.items.map((item) => (
                            <SidebarMenuItem key={item.title}>
                                <SidebarMenuButton
                                    asChild isActive={route().current() === item.href}
                                    tooltip={{ children: item.title }}
                                >
                                    <Link href={route(item.href)} prefetch>
                                        {item.icon && <item.icon />}
                                        <span>{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroup>
            ))}
        </>
    );
}
