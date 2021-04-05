import React from 'react';
import Typography from '@material-ui/core/Typography';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    render() {

        return (
            <div>
                <Typography variant="h6" > Home </Typography>
            </div>

        );

    }
}

export default Home;