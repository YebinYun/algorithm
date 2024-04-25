# RANK()로 대장균 개체의 크기를 내림차순
WITH TOTAL_DATA AS (
SELECT 
    ID, 
    RANK() OVER(ORDER BY SIZE_OF_COLONY DESC) AS RANKING, 
    MAX(id) OVER() AS TOTAL
FROM ECOLI_DATA 
)

# 전체 데이터의 갯수
SELECT ID,
    CASE 
        # (상위 0% ~ 25%)
        WHEN RANKING <= (TOTAL / 4) THEN 'CRITICAL'
        
        # (상위 26% ~ 50%)
        WHEN RANKING <= (TOTAL / 2) THEN 'HIGH'
        
        # (상위 51% ~ 75%)
        WHEN RANKING <= (TOTAL / 4 * 3) THEN 'MEDIUM'
        
        # 그 외 : (상위 76% ~ 100%)
        ELSE 'LOW'
    END AS COLONY_NAME
FROM TOTAL_DATA
ORDER BY ID;