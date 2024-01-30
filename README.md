# Work-Day-Scheduler

## User Story

```md
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```md
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours of 9am&ndash;5pm
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Description and Future Implementations

This project was created to store information for the current day in a planner that saves entered text locally. At the top of the page, the current day and time are dynamically updated every second using Dayjs. Each time block is color coded as gray, red, or green depending upon what time it is currently. Time that has already passed is gray, the current time is red, and green is time that hasn't happened yet for the day, using an if statement to compare current time, vs the time listed in the time-block.

This project has a lot of room for improvements in the future depending on personal preferences
of the user, including:
* Adding a button to clear each individual time block
    * Potentially allow for the clearing of the local storage at the end of the day so a fresh block is present the next day
* Adding a button to clear the entire page from local storage
* Giving each box a list section with check boxes to add multiple entries per box so that checking one entry completes that task for the hour
* Providing either a scroll bar in each text box, or allowing the text box to expand as necessary depending on the numbers added to the list
* Use Javascript more to automate the creation of time blocks for user's personal schedules
* Have a date picker to switch between days and select coding for each day rather than for just a day's worth of tasks at a time

## Access

To acces this site, please visit: https://avilwock.github.io/Work-Day-Scheduler/
    
## Usage

To use this document, click into the time-block where you wish to enter the tasks for the hour. Once entered, click the save button to the right of the time block. The text will be stored to local storage and, upon closing and reopening the webpage, will display on the screen again.

![Alt text](<assets/images/Work-Day Scheduler Image.jpeg>)

## Credits

With thanks to:

https://fonts.google.com/specimen/Kalam

https://day.js.org/docs/en/display/format

https://fontawesome.com/v5/icons/save?f=classic&s=duotone

https://day.js.org/docs/en/get-set/hour

Xpert Learning Assistant

Logan Garland, Coding Bootcamp, University of Irvine California

## License

MIT License