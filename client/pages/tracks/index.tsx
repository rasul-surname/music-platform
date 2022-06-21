import React from 'react';
import {useRouter} from "next/router";
import MainLayout from "../../layouts/MainLayout";
import {Button, Card, Grid, Box} from '../../node_modules/@mui/material/index';
import {InterfaceTrack} from "../../types/tracks";

const Index = () => {
    const route = useRouter();
    const tracks: InterfaceTrack[] = [
        {_id: '1', name: "Трек 1", artist: "Исполнитель 1", text: "Какой-то текст", listens: 5, audio: "", picture: "", comments: ""}
    ]

    return (
        <MainLayout>
            <Grid container justifyContent='center'>
                <Card style={{width: 900}}>
                    <Box p={3}>
                        <Grid container justifyContent='space-between'>
                            <h1>Список товаров</h1>
                            <Button onClick={() => route.push('/tracks/create')}>Загрузить</Button>
                        </Grid>
                    </Box>
                </Card>
            </Grid>
        </MainLayout>
    )
}

export default Index;