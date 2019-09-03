import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBox from '@material-ui/core/Checkbox';
class SecondPanel extends React.Component {

    render() {
        return (
            <div>
                <br />
                SecondPanel
                <div>
                <br/>
                    <FormGroup row>
                        <FormControlLabel control={<Switch />} label="Hola" />
                        <FormControlLabel control={<Switch />} label="Mundo" />

                    </FormGroup>

                </div>
                <div>
                <br/>
                    <CheckBox />
                </div>
            </div>
        );
    }
}
export default SecondPanel;