class Solution {
public:
    
    bool isOdd (int x) {
        return x&1;
    }
    
    int countOdds(int low, int high) {
        int range = (high - low)/2;
        return range + (isOdd(low) || isOdd(high));
    }
};