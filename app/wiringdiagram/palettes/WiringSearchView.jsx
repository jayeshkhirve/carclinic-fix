import Storage from "@/src/utils/Storage";
import Utils from "@/src/utils/Utils";
import { Autocomplete, ListItemButton, ListItemText, TextField, styled } from "@mui/material";
import { useEffect, useState } from "react";

const WiringSearchView = () => {

    const [options, setOptions] = useState([]);
    const [value, setValue] = useState(null);

    const StyledAutocomplete = styled(Autocomplete)({
        '& .MuiOutlinedInput-root': {
            //   border: '1px solid white',
            backgroundColor: '#fff',
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: 'white',
            },
        },
    });

    const onOptionChange = (e, v) => {
        setValue(v)

        if(Utils.tmpCompSelected){

            
            Utils.tmpCompSelected.unSelect()
        }
        if(v){
            v.value.select()
        }
       
    }

    useEffect(() => {
        const arr = [];
        setTimeout(() => {
            for (const component of Storage.components) {
                const name = component.name.split('-')[0].trim()
                if (!arr.find(nObj => nObj.label === component.compCode + ' - ' + name)) {
                    const obj = {
                        label: component.compCode + ' - ' + name,
                        value: component
                    }

                    arr.push(obj);
                }

            }

            setOptions(arr);
        }, 500)

    }, []);



    return (
        <>
            <StyledAutocomplete value={value} onChange={onOptionChange} sx={{ width: '20%', minWidth: 480, ml: 6, borderColor: '#fff', height: 40 }} size="small" options={options} renderInput={(params) => <TextField sx={{ color: '#fff' }} hiddenLabel placeholder="Search Components or Dtc" {...params} />} />
        </>
    )
}

export default WiringSearchView;