import React from 'react'
import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

export default function Profile() {
    return (
        <Flex align="center">  
            <Box mr="4" textAlign="right">
                <Text>Caio Oliveira</Text>
                <Text color="gray.300" fontSize="small">caiolv@me.com</Text>
            </Box>

            <Avatar size="md" name="Caio Oliveira" src="http://github.com/caiolv.png" />
        </Flex>
    )
}
