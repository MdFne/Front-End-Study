/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let nextStep = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let m = matrix.length;
    let n = matrix[0].length;
    let footage = new Array(m).fill(false).map(() => new Array(n).fill(false));
    let res = [];
    let pos = [0, 0];
    let curDir = 0;
    while (res.length < m * n) {
        res.push(matrix[pos[0]][pos[1]]);
        footage[pos[0]][pos[1]] = true;
        if (pos[0] + nextStep[curDir][0] >= m || pos[1] + nextStep[curDir][1] >= n ||
            pos[0] + nextStep[curDir][0] < 0 || pos[1] + nextStep[curDir][1] < 0 ||
            footage[pos[0] + nextStep[curDir][0]][pos[1] + nextStep[curDir][1]]
        ) {
            curDir = (curDir + 1) % 4;
            pos[0] = pos[0] + nextStep[curDir][0];
            pos[1] = pos[1] + nextStep[curDir][1];

        } else {
            pos[0] = pos[0] + nextStep[curDir][0];
            pos[1] = pos[1] + nextStep[curDir][1];
        }
    }
    return res;
};

console.log(spiralOrder(matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

/*
class Solution {
public:
    vector<int> spiralOrder(vector<vector<int>>& matrix) {
        int n=matrix.size(), m=matrix[0].size();
        vector<int> ans;
        int left=0,top=0,right=m-1,bottom=n-1;
        
        while(ans.size()<n*m)
        {
            for(int j=left;j<=right && ans.size()<n*m;j++)
                ans.push_back(matrix[top][j]);
            top++;

            for(int i=top;i<=bottom && ans.size()<n*m;i++)
                ans.push_back(matrix[i][right]);
            right--;

            for(int j=right;j>=left && ans.size()<n*m;j--)
                ans.push_back(matrix[bottom][j]);
            bottom--;

            for(int i=bottom;i>=top && ans.size()<n*m;i--)
                ans.push_back(matrix[i][left]);
            left++;
        }
        return ans;
    }
};
*/