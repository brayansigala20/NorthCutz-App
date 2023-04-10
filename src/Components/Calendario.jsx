import React,{useEffect,useCallback,useMemo,useState,useContext} from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Eventcalendar, Popup, localeEs } from '@mobiscroll/react';
import ModalAgenda from './ModalAgenda';
import { firebaseContext } from '../Firebase';
import { dateForDateTimeInputValue } from '../Helpers';


const responsivePopup = {
    medium: {
        display: 'anchored',
        width: 400,
        fullScreen: false,
        touchUi: false
    }
}
const Calendario = ({docs})=> {
    const {handleUpdateCita} = useContext(firebaseContext)
    const [isOpen, setOpen] = useState(false);
    const [anchor, setAnchor] = useState(null)
    const [myEvents, setEvents] = useState([]);
    const [dataEvent, setDataEvent] = useState({})
    useEffect(()=>{
        setEvents(docs)
    },[docs])

    const handleClose = ()=>{
        setOpen(!isOpen)
    }
    
    const onEventClick = useCallback((e) => {
        setDataEvent(e.event)
        setAnchor(e.domEvent.target);
        setOpen(true);
    });

    const onEventUpdate = useCallback((e) => {
         handleUpdateCita({...e.event,
            start:dateForDateTimeInputValue(e.event.start),
            end:dateForDateTimeInputValue(e.event.end)
        })
    }) 
     
    const view = useMemo(() => {
        return {
            schedule: { 
                type: 'week',
                startTime: '09:00',
                endTime: '19:00',
        }
        };
    }, []);
    return (
        <>
        <Eventcalendar
            theme="ios" 
            themeVariant="dark"
            clickToCreate={true}
            dragToCreate={true}
            dragToMove={true}
            dragToResize={true}
            eventDelete={true}
            locale={localeEs}
            data={myEvents}
            view={view}
            onEventClick={onEventClick}
            onEventUpdate={onEventUpdate}
       />
         <Popup
            display="bottom"
            fullScreen={true}
            contentPadding={false}
            anchor={anchor}
            isOpen={isOpen}
            onClose={handleClose}
            responsive={responsivePopup}
        >   
            <ModalAgenda 
                dataEvent={dataEvent}
                handleClose={handleClose}
                /> 
        </Popup>
        </>
    ); 
}
export default Calendario;