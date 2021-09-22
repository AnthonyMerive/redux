
export const obtenerLocalStorage = () => {
        const citasStorage = localStorage.getItem('citas');
        if(citasStorage === null){
            return undefined
        }
        return JSON.parse(citasStorage)
}

export const guardarLocalStorage = (state) => {
    const citasState = JSON.stringify(state);
    localStorage.setItem('citas', citasState)
}
