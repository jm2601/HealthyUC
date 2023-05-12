# HealthyUC - 1st Place winner at HackMerced 2023 🎉

Devpost: https://devpost.com/software/healthy-uc     
Hackathon: https://hackmerced-viii.devpost.com/

## Inspiration 💡

When faced with an abundance of options at the Pavilion and YWDC, we faced a challenge: identifying a healthy and nutritious meal demanded a lengthy procedure. Realizing the importance of time, we endeavored to streamline this process, and so, Healthy UC was born.

## What it does 🦾

Boasting a comprehensive database of the Pavilion and YWDC's menu, this app guarantees to revolutionize the way you select your meals. With just a few taps, you'll be presented with a personalized meal suggestion tailored to your specific requirements - whether it's dietary restrictions, BMI, or target goals. The app even offers alternative options and shows you the nearest location to grab your healthy meal. Say goodbye to lengthy decision-making processes and hello to a simplified, efficient, and healthy lifestyle with our iOS app. 

## How we built it ⚙️

We engaged in a brainstorming session to generate ideas, drawing from our observations of common everyday struggles. As we delved into the process, one recurring idea that emerged was the challenge of maintaining healthy nutritional diets amidst busy schedules. This inspired us to explore the intersection of nutrition and accessibility, ultimately shaping the direction of our project.

Next, we utilized Figma and Canva to outline our project and guide the design of our front-end, brainstorming ideas to ensure that our app's functionality was well-aligned with the chosen tools.

In parallel, we set up the React-Native environment, researching documentation to create screens for our app and implementing button navigation to connect them. Meanwhile, our teammate worked on the back-end, maintaining open communication with the front-end team to ensure a cohesive product.

Regarding data retrieval, we initially attempted to source necessary information from the UC Merced dining center website. After organizing and filtering the data, we stored it in our SQL Lite databases. Subsequently, we employed the Flask framework in Python to set up the back-end server and establish routes for sending and receiving information. We developed an algorithm that incorporated user parameters, such as BMI, fitness goals, and calorie targets, to create personalized meal plans based on the retrieved data.

## Challenges we ran into 🚧

We obtain all of our data for the app from the UC Merced Dining Center's Website, including upcoming food items. We faced a challenge while attempting to retrieve the data because the website's API parameters were dynamically produced, making API usage inconsistent. Therefore, we abandoned the idea of using an API and opted to extract the data by collecting all the html from the website and using a python package to scrape through it and locate the necessary information, which we then stored in our SQL database. 

Our team members had varying schedules, which could have potentially caused scheduling conflicts. However, we successfully overcame this challenge by proactively communicating our individual time availabilities and working together to find common slots where we could collaborate effectively. This enabled us to work seamlessly as a team towards achieving our project goals.

## Accomplishments that we're proud of 🎉

Our team was clever enough to bypass the engineers that created the UC Merced Dining website.

Our team created an SQL Lite database containing all the food:calorie information and we were able to successfully scrape the UC Merced Pavilion / YWDC Website. 

Our team made a back-end server with flask with routing that could communicate with the front-end.

Our team successfully developed an initial version of our mobile app's front-end using React-Native. 

## What we learned 📚

When encountering large obstacles, we learned the importance of pivoting between different strategies, for instance: pivoting to a solution that involved scraping data from the website's HTML rather than using an API that was difficult to work with, or switching to React-Native from React-JS to better suit mobile users rather than a responsive browser.

## What's next for UC Healthy? 🔮

Next, we plan to add a notification system to remind users of their meal times, include meal plans from food trucks, and even incorporate ChatGPT to suggest healthy meal alternatives when there are no suitable options available.

Big picture wise, we plan to bring UC Healthy to all UC campuses, providing healthy meal choices for all students.
