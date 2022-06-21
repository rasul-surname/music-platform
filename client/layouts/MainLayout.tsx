import React from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@mui/material";

interface InterfaceMainLayout {
    children: any;
}

const MainLayout: React.FC<InterfaceMainLayout> = ({children}) => {

    return (
        <>
            <Navbar />
            <Container style={{margin: '90px auto'}}>
                {children}
            </Container>
        </>
    )
}

export default MainLayout;