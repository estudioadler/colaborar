import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { ChevronDown, CircleUserIcon } from 'lucide-react'

export const DropProfile = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar className='size-8'>
                    <AvatarImage src="https://github.com/estudioadler.png" alt="avatar" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Adler Gabriel</DropdownMenuLabel>
                    <div className='px-2 pb-1.5 text-xs'>adler.gabriel20@gmail.com</div>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='gap-2'>
                    <CircleUserIcon size={18}/>
                    Profile
                </DropdownMenuItem>
                <DropdownMenuItem className='gap-2'>
                    <CircleUserIcon size={18}/>
                    Account
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className='gap-2'>
                    <CircleUserIcon size={18}/>
                    Your Team
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
