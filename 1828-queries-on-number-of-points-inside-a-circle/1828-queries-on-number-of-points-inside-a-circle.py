class Solution:
    def countPoints(self, points: List[List[int]], queries: List[List[int]]) -> List[int]:
        ans = []
        for c in queries:
            count = 0
            for p in points:
                if self.satisfyCircleEquation(c, p):
                    count += 1
            ans.append(count)
        return ans
    
    
    def satisfyCircleEquation(self, circle: list[int], point: list[int]) -> bool:
        return (point[0]-circle[0]) ** 2 + (point[1]-circle[1]) ** 2 <= circle[2] ** 2