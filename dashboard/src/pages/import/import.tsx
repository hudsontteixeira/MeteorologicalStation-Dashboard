import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from 'react-dom'
import SidebarWithHeader from "../../components/DashboardHeader";
import { ImportWidget } from '../../components/ImportWidget'
ReactDOM.render(

    <React.StrictMode>
        <ChakraProvider>
            <SidebarWithHeader>
                <ImportWidget />
            </SidebarWithHeader>
        </ChakraProvider>
    </React.StrictMode>
    ,
    document.getElementById('root')
)