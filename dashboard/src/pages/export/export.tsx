import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from 'react-dom'
import SidebarWithHeader from "../../components/DashboardHeader";
import { ExportWidget } from '../../components/ExportWidget'
ReactDOM.render(

    <React.StrictMode>
        <ChakraProvider>
            <SidebarWithHeader>
                <ExportWidget />
            </SidebarWithHeader>
        </ChakraProvider>
    </React.StrictMode>
    ,
    document.getElementById('root')
)