'use client'

import Config from "@/src/utils/Config";
import Utils from "@/src/utils/Utils";
import DiagramViewer from "@/src/viewer/DiagramViewer";
import { Box, Divider, Fab, IconButton, Paper, Tooltip, } from "@mui/material";
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { setDrawer } from "@/src/store/slice/viewer.sclice"
import WiringDiagramComponentSidebar from "./palettes/WiringDiagramComponentSidebar";
import ComponentPopper from "./palettes/ComponentPopper";
import { ZoomIn, ZoomOut } from "@mui/icons-material";
import WiringDiagramAppBar from "./palettes/WiringDiagramAppBar";

const WiringDiagramViewer = (props) => {
    const [canvasHelper, setCanvasHelper] = useState(null);
    const dispatch = useDispatch();


    Utils.dispatch = dispatch;


    const CustomTooltip = () => {
        const tooltipInfo = useSelector(state => state.connectionSlice.wireTooltipInfo);
        return (
            <Tooltip placement={tooltipInfo.placement} title={tooltipInfo.title} arrow style={{ position: 'absolute', left: tooltipInfo.left, top: tooltipInfo.top, backgroundColor: 'rgba(0, 0, 0, 0.6)' }} open={tooltipInfo.isOpen} />
        )
    }



    useEffect(() => {
        Config.canvasWidth = Config.getExactNum(window.innerWidth)
        Config.canvasHeight = Config.getExactNum(window.innerHeight - 58)


        Utils.dispatch = dispatch;
        if (canvasHelper === null) {
            const canvasHelper = new DiagramViewer(props.data);
            setCanvasHelper(canvasHelper);
        }
    }, [])

    return (<>
        <div>
            <Box sx={{ overflow: 'hidden' }}>


                <WiringDiagramAppBar />
                <canvas id="canvas" style={{marginTop: 2}}  />


                <CustomTooltip />
                <ComponentPopper />


                <Paper style={{ position: 'absolute', bottom: 48, right: 56, borderRadius: 100, display: "flex" }}>
                    <IconButton onClick={() => Utils.diagramViewer.zoomIn()}>
                        <ZoomIn />
                    </IconButton>
                    <Divider orientation="vertical" flexItem variant="middle" sx={{ mx: 1 }} />
                    <IconButton>
                        <ZoomOut onClick={() => Utils.diagramViewer.zoomOut()} />
                    </IconButton>
                </Paper>

            </Box>

        </div>

    </>)
}

export default WiringDiagramViewer