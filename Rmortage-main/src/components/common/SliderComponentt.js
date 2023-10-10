import React from 'react'
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
const SliderComponentt = (props) => {
    return (
        <div className=''>
            <Stack spacing={1}>
                <Typography variant="subtitle1">{props.label}</Typography>
                <Typography variant="h5">{props.unit}{props.amount}</Typography>
            </Stack>

            <Slider
                defaultValue={props.defaultValue}
                min={props.min} max={props.max}
                marks step={props.step}
                onChange={props.onChange}
                value={props.value}
                aria-label="Default"
                valueLabelDisplay="auto"
            />
            <Stack direction="row" justifyContent="space-between">
                <Typography variant='caption' color="text.secondary">{props.unit}{props.min}</Typography>
                <Typography variant ="caption"color="text.secondary">{props.unit}{props.max}</Typography>
            </Stack>

        </div>

    )
}

export default SliderComponentt