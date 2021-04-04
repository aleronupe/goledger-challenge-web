import React from 'react';
import { DataGrid } from '@material-ui/data-grid';

class ListaAtivos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            columns: [
                { field: 'tag', headerName: 'Tag', width: 150 },
                { field: 'label', headerName: 'Label', width: 150 },
                { field: 'description', headerName: 'Description', width: 200 },
                { field: 'writers', headerName: 'Writers', width: 200 },
            ],
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
                        return {id: cont, ...item};
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
        const { error, isLoaded, items, columns } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid rows={items} columns={columns} checkboxSelection />
                    </div>
                </div>
            );
        }
    }
}

export default ListaAtivos;