namespace Binary
{
    class BinarySeach
    {
        public static bool Search(int[] array, int value)
        {
            int lo = 0;
            int hi = array.Length - 1;

            do
            {
                int middle = (int)Math.Floor((hi + lo) / 2.0);
                if (array[middle] == value) return true;
                else if (array[middle] > value)
                {
                    hi = middle - 1;
                }
                else
                {
                    lo = middle + 1;
                }
            } while (lo <= hi);
            return false;
        }
    }
}