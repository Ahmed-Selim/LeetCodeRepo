# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def deepestLeavesSum(self, root: Optional[TreeNode]) -> int:
        currentLevel = [root]
        while currentLevel:
            pre = currentLevel
            current = []
            for parent in currentLevel:
                for child in [parent.left, parent.right] :
                    if child:
                        current.append(child)
            currentLevel = current
        return sum(node.val for node in pre)