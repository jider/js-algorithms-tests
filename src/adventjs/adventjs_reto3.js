export const findNaughtyStep = (original, modified) => {
    if(original === undefined || modified === undefined)
        throw new Error('No original or modified steps')
    
    if(original === modified) return ''

    const moreStepsChain = original.length > modified.length
        ? original
        : modified;

    for(let x=0; x < moreStepsChain.length; x++) {
        if (original[x] !== modified [x])
            return moreStepsChain[x];
    }
}