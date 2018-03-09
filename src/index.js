module.exports = function solveSudoku(matrix) {

    findPossibleValue(matrix);
    return matrix;

    function findPossibleValue(matrix) {
        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                if(matrix[i][j]===0){
                    let possibleValue = [1,2,3,4,5,6,7,8,9];
                    possibleValue = checkRowsColls(i,j,possibleValue);
                    matrix[i][j]=(possibleValue.length === 1)?possibleValue[0]:[0,possibleValue];
                }
            }
        }
    }
    function checkRowsColls(i,j,possibleValue) {
        for(let k = 0; k < 9; k++){
            if (possibleValue.includes(matrix[i][k])){
                possibleValue.splice(possibleValue.indexOf(matrix[i][k]), 1);
            }
            if (possibleValue.includes(matrix[k][j])){
                possibleValue.splice(possibleValue.indexOf(matrix[k][j]), 1);
            }
        }
        return possibleValue;

    }


}

