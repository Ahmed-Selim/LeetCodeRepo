class Solution:
    def minPartitions(self, n: str) -> int:
        maxDigit = 0
        for c in n:
            digit = int(c) - 0
            if digit > maxDigit:
                maxDigit = digit
        return maxDigit