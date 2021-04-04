import React from 'react';

class ListaAtivos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://ec2-54-173-117-139.compute-1.amazonaws.com/api/query/getSchema")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log('olha o result: ', result);
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
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.tag}>
                            {item.tag}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default ListaAtivos;