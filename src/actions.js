export const dec = () => ({ type: 'DEC' });
export const inc = () => ({ type: 'INC' });
export const mult = () => ({ type: 'MULT' });
export const div = () => {
    return ({ 
        type: 'DIV', 
        payload: Math.floor(Math.random()*10+2) 
    })
};