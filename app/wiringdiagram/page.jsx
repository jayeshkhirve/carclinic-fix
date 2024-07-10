import ApiHelper from "@/src/helpers/ApiHelper";
import WiringDiagramViewer from "./WiringDiagramViewer";
import { Backdrop, Box, CircularProgress } from "@mui/material";


const WiringDiagram = async () => {
    // let data = await ApiHelper.get('http://localhost:4000/load-wiring-diagram?id=' + 1,)
    let data = {}

    return (
        <>
            <Box sx={{backgroundColor: 'white'}}>
                <WiringDiagramViewer data={data} />

            </Box>

            {/* <Backdrop
                sx={{ color: 'primary', zIndex: 1201, backgroundColor: '#fff' }}
                open={true}

            >
                <CircularProgress color="inherit" />
            </Backdrop> */}


        </>
    )
}

export default WiringDiagram;