# Write your MySQL query statement below
with calc_table as (
    select stock_name, 
        case
            when operation = 'Buy' then -1 * price
            else price
        end as price
    from stocks
)
select stock_name, sum(price) as capital_gain_loss
from calc_table
group by stock_name