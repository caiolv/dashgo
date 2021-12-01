import React from 'react'
import { Avatar, Box, Flex, Text } from '@chakra-ui/react';

interface ProfileProps {
    showProfileData: boolean;
}

export default function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex align="center">  
            { showProfileData && (
                <Box mr="4" textAlign="right">
                    <Text>Caio Oliveira</Text>
                    <Text color="gray.300" fontSize="small">caiolv@me.com</Text>
                </Box>
            )}
            
            <Avatar size="md" name="Caio Oliveira" src="http://github.com/caiolv.png" />
        </Flex>
    )
}
