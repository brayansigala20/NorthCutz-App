
export const generarID = ()=> {
    const sufijo = Math.random().toString(36).substring(2, 8);
    const prefijo = Date.now().toString(36);
    return prefijo + sufijo;
  }

export const initialData = {
  start:"",
  end:"",
  allDay:false,
  title:"",
  color:"#2025A2",
  usuario:"",
  id:""

}
export const dateForDateTimeInputValue = date => new Date(date.getTime() + new Date().getTimezoneOffset() * -60 * 1000).toISOString().slice(0, 19)
  