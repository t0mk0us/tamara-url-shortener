package com.tamara.url.shorten.util;

import java.util.Random;

public class RandomStringGenerator {

    public static String randomAlphaNumeric(int length) {
        String characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        StringBuilder sb = new StringBuilder();
        Random random = new Random();

        for (int i = 0; i < length; i++) {
            int index = random.nextInt(characters.length());
            sb.append(characters.charAt(index));
        }
        return sb.toString();
    }

	/*
	 * public static void main(String[] args) { int desiredLength = 10; // Specify
	 * the desired length of the string String randomString =
	 * randomAlphaNumeric(desiredLength);
	 * System.out.println("Random Alphanumeric String: " + randomString); }
	 */
}
