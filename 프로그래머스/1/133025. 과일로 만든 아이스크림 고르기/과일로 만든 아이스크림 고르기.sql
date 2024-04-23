SELECT fh.FLAVOR
FROM FIRST_HALF AS fh
JOIN ICECREAM_INFO AS ii

# 두 테이블이 결합하는 조건 (INNER JOIN) : FLAVOR
ON fh.FLAVOR = ii.FLAVOR

# 조건 : 상반기 아이스크림 총주문량이 3,000보다 높으면서 아이스크림 주 성분이 과일인 아이스크림의 맛
WHERE fh.TOTAL_ORDER >= 3000 AND ii.INGREDIENT_TYPE = 'fruit_based'

# 정렬 : 총주문량이 큰 순서대로 조회
ORDER By fh.TOTAL_ORDER DESC