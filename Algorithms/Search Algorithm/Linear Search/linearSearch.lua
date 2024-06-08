local function linkearSearch(array, value)
	for i in pairs(array) do
		if array[i] == value then
			return true
		end
	end
	return false
end
