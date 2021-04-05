import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import FolderIcon from '@material-ui/icons/Folder';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import API from '../services/Api';
import PropTypes from "prop-types";
import { withRouter } from "react-router";

function unpackProducts(res) {
    var result = res.data.result;
    console.log('olha o format_result: ', result);
    return result;
}

class Category extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      };

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
        const query = {
            selector: {
                '@assetType': 'category'
            }
        };
        API.post('/query/search', { query }).then(
            (res) => {
                var result = unpackProducts(res);
                this.setState({
                    isLoaded: true,
                    items: result
                });
            },
            (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
            }
        )
    }

    render() {

        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <Grid container spacing={2}
                        alignItems="center"
                        justify="center" >
                        <Grid item xs={12} md={6} >
                            <Typography variant="h6" >Categoria</Typography>
                            <div>
                                <List>
                                    {
                                        items.map((item, idx) => <ListItem key={idx}>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <FolderIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={item.name}
                                            />
                                            <ListItemSecondaryAction>
                                                <IconButton edge="start" aria-label="edit">
                                                    <EditRoundedIcon />
                                                </IconButton>
                                                <IconButton edge="end" aria-label="delete">
                                                    <DeleteIcon />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>)
                                    }
                                </List>
                            </div>
                        </Grid>
                    </Grid>
                </div>

            );
        }


    }
}

export default withRouter(Category);