import React from 'react';
import Grid from '@material-ui/core/Grid';
import API from '../services/Api';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



class EditProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            item: null,
            itemName: '',
            itemPrice: 0
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({ [nam]: val });
    }

    sendData(){
        const update = {
            '@assetType': 'product',
            'id': this.props.match.params.id,
            'code': this.props.match.params.code,
            'name': this.state.itemName
        }
        API.put('invoke/updateAsset', { update }).then(
            (res) => {
                console.log('Recebi response: ', res);
            }
        )
    }

    handleSubmit(event) {
        console.log('Um nome foi enviado: ', this.state);
        const update = {
            '@assetType': 'product',
            'id': this.props.match.params.id,
            'code': this.props.match.params.code,
            'name': this.state.itemName
        }
        API.put('invoke/updateAsset', { update }).then(
            (res) => {
                console.log('Recebi response: ', res);
            }
        )
    }

    componentDidMount() {
        const key = {
            '@assetType': 'product',
            'id': this.props.match.params.id,
            'code': this.props.match.params.code
        };
        API.post('/query/readAsset', { key }).then(
            (res) => {
                console.log('OLha ai: ', res);
                var result = res.data;
                this.setState({
                    isLoaded: true,
                    item: result,
                    itemName: result.name,
                    itemPrice: result.price
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

        const { error, isLoaded, item, itemName, itemPrice } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>

                    <Grid container item
                        alignItems="center"
                        justify="center"
                        style={{ marginTop: 20 }} >
                        <form noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                            <Typography variant="h6" >{item.name}</Typography>
                            <Grid item xs={12} style={{ marginBottom: 10 }}>
                                <TextField name='itemName' value={itemName}
                                    onChange={this.handleChange} id="product-name" label="Name" variant="outlined" />
                            </Grid>
                            <Grid item xs={12} style={{ marginBottom: 10 }}>
                                <TextField name='itemPrice' value={itemPrice}
                                    onChange={this.handleChange} id="product-price" label="Price" variant="outlined" />
                            </Grid>
                            <Button type="submit" variant="contained" color="primary">
                                Salvar
                            </Button>
                        </form>
                    </Grid>
                </div>

            );
        }

    }
}

export default EditProduct;