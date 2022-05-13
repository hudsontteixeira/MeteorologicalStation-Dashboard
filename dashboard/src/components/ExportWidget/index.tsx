import React, { useState } from "react";
import { Center, Select, VStack, Input, Text } from '@chakra-ui/react'

export function ExportWidget() {
    const [dataType, setDataType] = useState('All');
    const OptionsOfDataType = [
        { name: "Umidity", value: "Umidity" },
        { name: "Radiance", value: "Radiance" },
        { name: "Global Radiance", value: "Global Radiance" },
        { name: "Wind Velocity", value: "Wind Velocity" },
        { name: "Temperature", value: "Temperature" },
        { name: "Rain", value: "Rain" },
        { name: "All", value: "All" },
    ]

    const [startDate, setStartDate] = useState(new Date());

    return (
        <Center w="100%">
            <VStack w="70%" bg={'whiteAlpha.700'}
                pt='4'
                pl='4'
                pr='4'
                pb='60px'>
                <Text fontSize='30px' m='4' justifyItems={'center'} fontWeight="bold" color={'blue.400'}>
                    Choose Your Data!
                </Text>
                <Select w="90%" placeholder='Select option'
                    value={dataType}
                    onChange={(e) => { setDataType(e.target.value) }}>
                    {OptionsOfDataType.map((option, key) => {
                        return (
                            <option value={option.value}>{option.name}</option>
                        )
                    })}
                </Select>
                <Center w="90%">
                    <Input
                        name='dateStart'
                        type='date'
                        isRequired
                        placeholder='Start day'
                        w="50%"
                    />
                    <Input
                        name='timeStart'
                        isRequired
                        type='time'
                        w="50%"
                    />
                </Center>
                <Center w="90%">
                    <Input
                        name='dateEnd'
                        type='date'
                        isRequired
                        placeholder='End day'
                        w="50%"
                    />
                    <Input
                        name='timeEnd'
                        isRequired
                        type='time'
                        w="50%"
                    />
                </Center>

            </VStack>
        </Center>
    );
}