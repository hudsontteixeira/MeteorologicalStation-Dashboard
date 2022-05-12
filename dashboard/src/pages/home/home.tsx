import React from "react";
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import SidebarWithHeader from '../../components/DashboardHeader'
ReactDOM.render(
    <React.StrictMode>
        <ChakraProvider>
            <SidebarWithHeader>
                <h1>ona</h1>
            </SidebarWithHeader>
        </ChakraProvider>
    </React.StrictMode>,
    document.getElementById('root')
)