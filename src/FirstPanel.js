import React from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
class FirstPanel extends React.Component {

    render() {
        return (
            <div>
                <div>
                    Primer Panel
                </div>
                <br />

                <Button variant="contained" color="primary">
                    <AddIcon />
                </Button>
                <br />
                <div>
                <br/>
                    <TextField variant="outlined" />
                </div>
                <br />
                <div>
                    <Select>
                        <MenuItem>Uno</MenuItem>
                        <MenuItem>Dos</MenuItem>
                        <MenuItem>Treh!</MenuItem>
                    </Select>
                </div>
            </div>
        );
    }

}
export default FirstPanel;