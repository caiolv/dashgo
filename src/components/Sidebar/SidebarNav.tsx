import { Stack } from '@chakra-ui/react'
import React from 'react'
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from 'react-icons/ri'
import NavLink from './NavLink'
import NavSection from './NavSection'

export default function SidebarNav() {
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
                <NavLink icon={RiContactsLine}>Usuários</NavLink>
            </NavSection>
            <NavSection title="AUTOMAÇÃO">
                <NavLink icon={RiInputMethodLine}>Formulários</NavLink>
                <NavLink icon={RiGitMergeLine}>Automação</NavLink>
            </NavSection>
        </Stack>
    )
}
