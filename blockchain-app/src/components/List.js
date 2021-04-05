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
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import PersonIcon from '@material-ui/icons/Person';
import EditRoundedIcon from '@material-ui/icons/EditRounded';

class ListaAtivos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
        fetch("http://ec2-54-173-117-139.compute-1.amazonaws.com/api/query/getSchema")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('olha o result: ', result);
                    var cont = 0;
                    result = result.map(item => {
                        cont++;
                        return { id: cont, ...item };
                    });
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Nota: É importante lidar com os erros aqui
                // em vez de um bloco catch() para não recebermos
                // exceções de erros dos componentes.
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

        // function generate(element) {
        //     return items.map((value) =>
        //         React.cloneElement(element, {
        //             key: value,
        //         }),
        //     );
        // };

        function decideIcon(tag) {
            switch (tag) {
                case "product":
                    return (<LocalOfferIcon />);
                case "seller":
                    return (<PersonIcon />);
                case "category":
                    return (<FolderIcon />);
                default:
                    return (<FolderIcon />);
            };
        }

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
                        <Grid item xs={12} md={6} alignItems="center" >
                            <Typography variant="h6" >Ativos</Typography>
                            <div>
                                <List>
                                    {
                                        items.map((item, idx) => <ListItem key={idx}>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    {decideIcon(item.tag)}
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={item.label}
                                                secondary={item.description}
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

export default ListaAtivos;