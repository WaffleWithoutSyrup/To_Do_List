const personal_tab =getElementById('personal_tab')
const familia_tab =getElementById('familia_tab')
const trabajo_tab =getElementById('trabajo_tab')
const casa_tab =getElementById('casa_tab')
const otros_tab =getElementById('otros_tab')

const personal_cont =getElementById('personal_cont')
const familia_cont =getElementById('familia_cont') 
const trabajo_cont =getElementById('trabajo_cont')
const casa_cont =getElementById('casa_cont')
const otros_cont =getElementById('otros_cont')

let cambio = 1

const cambiar_pestana = () => {
    cambio == 1 ? {
        personal_tab.classList.value = 'personal_tab opcion_active',
        personal_cont.classList.value = 'personal_cont content_active'
    }
    : {
        personal_tab.classList.value = 'personal_tab',
        personal_cont.classList.value = 'personal_cont'
    }
    cambio == 2 ? {
        familia_tab.classList.value = 'familia_tab opcion_active',
        familia_cont.classList.value = 'familia_cont content_active'
    }
    : {
        familia_tab.classList.value = 'familia_tab',
        familia_cont.classList.value = 'familia_cont'
    }
}