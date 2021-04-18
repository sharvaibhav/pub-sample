import React, { useEffect, useState } from 'react'
import { ApiClient, Client } from '../api-client'
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Card, CardActionArea, CardMedia, CardContent, Typography, CardActions, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    loader: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Clients({ apiClient }: { apiClient: ApiClient }) {
    const [clients, setClients] = useState<Client[]>([]);
    const classes = useStyles();
    useEffect(() => {
        apiClient.requestClients().then((data: any) => setClients(data))
    })
    return (
        <div className={classes.container}>
            {
                !clients.length && (<div className={classes.loader}>
                    <LinearProgress />
                </div>)
            }
            {clients.length > 0 && clients.map((card) => (
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={card.image}
                            title={card.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Client Name: {card.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Here goes basic information about the client {card.name} and the campaign manager is {card.defaultCampaignManager.name}.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            ))}

        </div>
    )

}