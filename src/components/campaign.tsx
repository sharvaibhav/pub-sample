import clsx from 'clsx';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, LinearProgress, makeStyles, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { red } from '@material-ui/core/colors';
import React, { useEffect, useState } from 'react'
import { ApiClient, Campaign } from '../api-client'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    loader: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Campaigns({ apiClient }: { apiClient: ApiClient }) {
    const [campaigns, setCampaigns] = useState<Campaign[]>([]);
    const classes = useStyles();
    useEffect(() => {
        apiClient.requestCampaigns().then((data: Campaign[]) => setCampaigns(data))
    })
    return <div className="campaign-section">
        {campaigns.length > 0 && campaigns.map(campaign => <div className="camp-card"><CampaignCard campaign={campaign} /></div>)}
        {!campaigns.length && (<div className={classes.loader}>
            <LinearProgress />
        </div>)}
    </div>
}


export function CampaignCard({ campaign }: { campaign: Campaign }) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        console.log(campaign, expanded)
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label={campaign.name} className={classes.avatar}>
                        {campaign.name.charAt(0)}
                    </Avatar>
                }
                title={campaign.name}
                subheader={`${campaign.startDate} - ${campaign.endDate}`}
            />
            <CardMedia
                className={classes.media}
                image={campaign.client.image}
                title={campaign.client.name}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    This is a campaign for the Brand {campaign.client.name}. The budget of this campaign is {campaign.budget}.
            </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph> <strong>Campaign Manager </strong>: {campaign.campaignManager.name}</Typography>
                    <Typography paragraph>
                        Here we wil find the details about the campaign:
                </Typography>
                </CardContent>
            </Collapse>
        </Card>)
}