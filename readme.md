# Date Lib

| function | description | return type | example |
| -------- | ----------- | ----------- | ----------- |
| getMonthName | Gets name of the month | string | `date.getMonthName()` -> december |
| getDayName | Gets name of the day | string | `date.getDayName()` -> friday |
| getSecondsSince | Gets time difference in seconds | number | `date.getSecondsSince('December 17, 1995 03:24:00')` -> 24 |
| getMinutesSince | Gets time difference in minutes | number | `date.getMinutesSince('December 17, 1995 03:24:00')` -> 24 |
| getHoursSince | Gets time difference in hours | number | `date.getHoursSince('December 17, 1995 03:24:00')` -> 24 |
| getDaysSince | Gets time difference in days | number | `date.getDaysSince('December 17, 1995 03:24:00')` -> 24 |
| getMonthsSince | Gets time difference in months | number | `date.getMonthsSince('December 17, 1995 03:24:00')` -> 24 |
| getYearsSince | Gets time difference in years | number | `date.getYearsSince('December 17, 1995 03:24:00')` -> 24 |
| getRoundedTimeSince | Gets time difference in largest unit of time (year > months > days > hours > etc) | string | `date.getYearsSince('December 17, 1995 03:24:00')` -> 24 days |

| property | description | return type | example |
| -------- | ----------- | ----------- | ----------- |
| day | Gets day of the month | number | `date.day` -> 17 |
| month | Gets month of the year | number | `date.month` -> 12 |
| year | Gets full year | number | `date.year` -> 1995 |
| time | Gets time | string | `date.time` -> 3:24:00 AM |
