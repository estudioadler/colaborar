import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '../ui/breadcrumb'

interface BreadcrumbProps {
    link1: string
    text1: string
    link2: string
    text2: string
    page: string
}

export const BreadCrumb = ({ link1, text1, link2, text2, page }: BreadcrumbProps) => {
    return (
        <Breadcrumb>
            <BreadcrumbList className='text-xs'>
                <BreadcrumbItem>
                    <BreadcrumbLink href={link1}>{text1}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink href={link2}>{text2}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbPage>{page}</BreadcrumbPage>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    )
}

