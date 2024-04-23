# 소수점 1자리에서 반올림 후 AS문으로 컬럼명 'AVERAGE_FEE'로 지정
SELECT ROUND(AVG(daily_fee)) AS AVERAGE_FEE
# 테이블 선택
FROM CAR_RENTAL_COMPANY_CAR
# 조건:자동차 종류가 'SUV'인 자동차
WHERE CAR_TYPE = 'SUV' ;