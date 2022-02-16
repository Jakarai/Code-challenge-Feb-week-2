/*
Create a function that takes the memory size (ms is a string type) as an argument and returns the actual memory size.

Examples
actualMemorySize("32GB") --> "29.76GB"

actualMemorySize("2GB") --> "1.86GB"

actualMemorySize("512MB") --> "476MB"

Notes
-The actual storage loss on a USB device is 7% of the overall memory size!
-If the actual memory size was greater than 1 GB, round your result to two decimal places.
-If the memory size after adjustment is smaller then 1 GB, return the result in MB.

*/

public static String actualMemorySize(String storage){

        String[] storageSplit = storage.split("(?<=\\D)(?=\\d)|(?<=\\d)(?=\\D)");

        int num = Integer.parseInt(storageSplit[0]);
        String size = storageSplit[1];

        Double memory = num * .93;

        if (size.equals("GB")) {

            Double rounded = Math.ceil(memory * 100.0) / 100.0;
            System.out.println(rounded+size);
            return rounded+size;
        }
        System.out.println(Math.round(memory)+size);

        return Math.round(memory)+size;
    }
