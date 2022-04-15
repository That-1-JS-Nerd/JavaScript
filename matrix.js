'use-strict';

const Matrix = {

    transpose: function(matrix) {
        if (!this.isValidMatrix(matrix)) return "Invalid matrix";

        let transposed = [];
        let row;

        for (let i = 0; i <= matrix.length; i++) {
            row = [];
            for (let j = 0; j < matrix.length; j++) {
                if (matrix[j][i]) row.push(matrix[j][i]);
            }
            transposed.push(row);
        }
        return transposed.filter((arr) => arr.length);
    },

    isValidMatrix: function(matrix) {
        const length = matrix[0].length;

        return matrix.every((el) => el.length === length);
    },

    isValidMatrices: function(arr1, arr2) {
        let validRows, validCols;
    
        if (!this.isValidMatrix(arr1) || !this.isValidMatrix(arr2)) return [];
        if (arr1.length === arr2[0].length) validRows = true;
        if (arr1[0].length === arr2.length) validCols = true;

        return validRows && validCols || false;
    },

    matrixMultByInt: function(matrix, int) {
        return matrix.map((x) => x.map((r) => r * int));
    },

    matrixMultiply: function (matrix1, matrix2) {
        if (!this.isValidMatrices(matrix1, matrix2)) return null;

        const resultMatrix = [];

        for (let j = 0; j < matrix1.length; j++) {
            let res = [];
            for (let k = 0; k < matrix1.length; k++) {
                let ct = 0;
                for (let n = 0; n < matrix1[j].length; n++) {
                    ct += matrix1[j][n] * matrix2[n][k];
                }
                res.push(ct);
            }
            resultMatrix.push(res);
        }
        return resultMatrix;
    }
};

module.exports = Matrix;
