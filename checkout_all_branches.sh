#!/bin/bash

# 检出所有远程分支的脚本
# 使用方法: ./checkout_all_branches.sh

echo "=== 开始检出所有远程分支 ==="
echo ""

# 首先确保远程信息是最新的
echo "正在更新远程分支信息..."
git fetch --all

echo ""
echo "发现以下远程分支:"
git branch -r | grep -v '\->' | sed 's/origin\///' | while read branch; do
    echo "  - $branch"
done

echo ""
echo "开始创建本地分支..."

# 遍历所有远程分支（排除 HEAD 指针）
for branch in $(git branch -r | grep -v '\->' | sed 's/origin\///'); do
    # 检查本地是否已存在该分支
    if git show-ref --verify --quiet refs/heads/$branch; then
        echo "✓ 分支 '$branch' 已存在，跳过"
    else
        echo "→ 创建分支 '$branch'"
        git branch --track $branch origin/$branch
    fi
done

echo ""
echo "=== 完成！==="
echo ""
echo "当前所有本地分支:"
git branch -a

echo ""
echo "切换分支使用: git checkout <branch-name>"