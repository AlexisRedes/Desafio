import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Popover, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    typography: {
        padding: theme.spacing(2),
    },
}));

export default function SimplePopover({ generos }) {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const openPopover = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <div>
            <button type="button" className="btn btn-dark" onClick={openPopover}>Generos</button>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Typography className={classes.typography}>
                    {
                        generos?.map(genero =>
                            <p>{genero}</p>
                        )
                    }
                </Typography>
            </Popover>
        </div>
    );
}