/* Question 8
Given an array of meeting time intervals where intervals[i] = [starti, endi],
determine if a person could attend all meetings.

Example 1:
Input: intervals = [[0,30],[5,10],[15,20]]
Output: false */
import java.util.Arrays;

public class MeetingScheduler {
    public static boolean canAttendMeetings(int[][] intervals) {
        // Sort the intervals based on the start time
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

        // Check for any overlapping intervals
        for (int i = 1; i < intervals.length; i++) {
            // If the start time of the current interval is less than or equal to
            // the end time of the previous interval, there is an overlap
            if (intervals[i][0] <= intervals[i - 1][1]) {
                return false;
            }
        }

        // No overlapping intervals found
        return true;
    }

    public static void main(String[] args) {
        int[][] intervals = {{0, 30}, {5, 10}, {15, 20}};

        boolean canAttend = canAttendMeetings(intervals);
        System.out.println(canAttend);
    }
}

