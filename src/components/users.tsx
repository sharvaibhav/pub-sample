import { makeStyles, List, ListItem, ListItemAvatar, Avatar, ListItemText, Typography, Divider, LinearProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { ApiClient, User } from '../api-client'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: '36ch',
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: 'inline',
    },
    loader: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Users({ apiClient }: { apiClient: ApiClient }) {
    const [users, setUsers] = useState<User[]>([]);
    const classes = useStyles();
    useEffect(() => {
        apiClient.requestUsers().then((data: any) => setUsers(data))
    })
    return (
        <React.Fragment>
            {
                !users.length && (<div className={classes.loader}>
                    <LinearProgress />
                </div>)
            }
            <List className={classes.root}>
                {users.map((user: User) => {
                    return <React.Fragment>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Avatar alt={user.name} src={user.image} />
                            </ListItemAvatar>
                            <ListItemText
                                primary={user.name}
                                secondary={
                                    <React.Fragment>
                                        <Typography
                                            component="span"
                                            variant="body2"
                                            className={classes.inline}
                                            color="textPrimary"
                                        >
                                            {user.email}
                                        </Typography>
                                    </React.Fragment>
                                }
                            />
                        </ListItem>
                        <Divider variant="inset" component="li" /></React.Fragment>
                })}
            </List>

        </React.Fragment>
    )
}