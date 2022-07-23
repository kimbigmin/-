import { useSelector } from 'react-redux';
import { StoreStateType } from '../types/store';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loading() {
    let { showLoadingName, showLoadingOptions } = useSelector((state: StoreStateType) => {
        return {
            showLoadingName: state.view.showLoadingName,
            showLoadingOptions: state.view.showLoadingOptions
        }
    })

    const style = {
        position: 'absolute',
        top: '60%',
        left: '45%',
    };

    return (
        <>
            {
                (['', 'hide'].includes(showLoadingName)) ? 
                '' : 
                <Box sx={style}>
                    <CircularProgress
                        color={showLoadingOptions.color}
                        disableShrink={showLoadingOptions.disableShrink}
                        size={showLoadingOptions.size}
                        thickness={showLoadingOptions.thickness}
                    />
                </Box>
            }
        </>
    )
}

export default Loading;
