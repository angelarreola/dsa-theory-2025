class Solution {
    public void reverseString(char[] s) {
        int middleLetterIndex = s.length % 2 == 0 ? s.length / 2 : s.length / 2 + 1;
        char aux;
        for (int i = 0, j = s.length - 1; i < middleLetterIndex; i++, j--) {
            aux = s[i];
            s[i] = s[j];
            s[j] = aux;
        }
    }
}