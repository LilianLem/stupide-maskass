export function checkGame(){
    let pointsArray = [3, 5, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let pointsToWin = pointsArray.reduce(reducer);
}