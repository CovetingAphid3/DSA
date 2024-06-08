local function binarySearch(array, needle)
	local first = 1
	local last = #array
	while first <= last do
		local middle = math.floor((first + last) / 2)
		if array[middle] == needle then
			return middle
		elseif array[middle] < needle then
			first = middle + 1
		else
			last = middle - 1
		end
	end
	return nil
end

print(binarySearch({1, 2, 3, 4, 5, 6, 7, 8, 9, 10}, 5))
