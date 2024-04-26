# 조건 : 
# 1. '통풍시트', '열선시트', '가죽시트' 중 하나 이상의 옵션이 포함된 자동차가 자동차 종류 별로 몇 대인지 출력 (O)
# 2. 자동차 수에 대한 컬럼명은 CARS로 지정 (O)
# 3. 자동차 종류를 기준으로 오름차순 정렬 (O)

SELECT CAR_TYPE, COUNT(CAR_ID) AS CARS
FROM CAR_RENTAL_COMPANY_CAR
WHERE OPTIONS REGEXP ('통풍시트|열선시트|가죽시트' )
GROUP BY CAR_TYPE
ORDER BY CAR_TYPE