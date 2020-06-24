const storageKey = 'post-engine-12876'

export const setState = (state)=>{
    localStorage.setItem(storageKey,JSON.stringify(state))
}

export const getState = ()=>{
    let state = localStorage.getItem(storageKey) 
    if(!state){
        state = {
            posts:[],
            categories:[]
        }
        setState(state)
    }

    return state
}

