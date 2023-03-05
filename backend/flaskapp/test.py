from sqlalchemy import create_engine
from sqlalchemy.orm import Session
from models import Food
import pandas as pd

engine = create_engine("sqlite:////Users/ryanlee/Desktop/Repos/healthyUC/backend/flaskapp/database.db")


# df = pd.read_csv('dataset.csv')
# print(df)

# df.to_sql('Food', engine)

# from sqlalchemy import select
# stmt = select(Food).where(Food.Calorie > 300)
# print(stmt)
# conn = engine.connect()
# s = Food.select().where(Food.c.Meal == 2)
# result = conn.execute(s)

# for row in result:
#    print (row)

calorie_goal = int(input('Calorie Goal: '))
day_of_week = input('Day of Week: ')
meal = input('Meal (Breakfast/Lunch/Dinner): ')

# calorie_goal = 2000
# day_of_week = 'Sunday'
# meal = 'Breakfast'

meal_dict = {
    'Breakfast': 0,
    'Lunch': 1,
    'Dinner': 2
}

days_dict = {
    'Sunday': 0,
    'Monday': 1,
    'Tuesday': 2,
    'Wednesday': 3,
    'Thursday': 4,
    'Friday': 5,
    'Saturday': 6,
}

data_struct = []

def findPair(nums, target):
    temp = [0]
    # sort the list in ascending order
    nums.sort()
 
    # maintain two indices pointing to endpoints of the list
    (low, high) = (0, len(nums) - 1)
 
    # reduce the search space `nums[low…high]` at each iteration of the loop
 
    # loop till the search space is exhausted
    while low < high:
        
        if nums[low] + nums[high] <= target and nums[low] + nums[high] > sum(temp):
            temp = [nums[low], nums[high]]
            # print('Pair found', (nums[low], nums[high]))
            # return
 
        # increment `low` index if the total is less than the desired sum;
        # decrement `high` index if the total is more than the desired sum
        if nums[low] + nums[high] < target:
            low = low + 1
        else:
            high = high - 1
 
    # No pair with the given sum exists
    # print('Pair not found')
    return temp


with Session(engine) as session:

    result = session.query(Food).filter(Food.Meal == meal_dict[meal], Food.Dayofweek == days_dict[day_of_week])

    for row in result:
        data_struct.append(row.Calorie)
        # print(row.Name)

# print(data_struct)
# print(calorie_goal)
answer = findPair(data_struct, calorie_goal)
# print(answer)
# print('fdsfds')

outputarr = []

lower = True

with Session(engine) as session:
    try:
        result = session.query(Food).filter(Food.Meal == meal_dict[meal], Food.Dayofweek == days_dict[day_of_week], Food.Calorie == answer[0])
        result2 = session.query(Food).filter(Food.Meal == meal_dict[meal], Food.Dayofweek == days_dict[day_of_week], Food.Calorie == answer[1])

        for row in result2:
            # data_struct.append(row.Calorie)
            outputarr.append(f"{row.Name} with ({row.Calorie} calories)")
            outputarr.append(row.Description)
            break

        for row in result:
            # data_struct.append(row.Calorie)
            # print(row.Name)
            # print(row.Calorie)
            outputarr.append(f"{row.Name} with ({row.Calorie} calories)")
            outputarr.append(row.Description)
            break
    except Exception as e:
        lower = False
        print('Sorry, your calorie amount is too low')

# print(data_struct)
# print(findPair(data_struct, calorie_goal))
if(lower):
    print()
    print(f"Based on your calorie instake, we recommend: ")
    # for i in outputarr:
    #     print(i)
    print()
    print(outputarr[0])
    print('Description:')
    print(outputarr[1])
    print()
    print(outputarr[2])
    print('Description:')
    print(outputarr[3])