SELECT ID, LENGTH
FROM FISH_INFO

# 조건 : NULL 값 제외처리
WHERE NOT LENGTH IS NULL

# 정렬 : 길이에 대해 내림차순, 물고기 ID에 대해 오름차순
ORDER BY LENGTH DESC, ID

# 상위 10개만 출력
LIMIT 10