fee = 0

for i in range(0,1441,30):
	if i<(0.5*60):
		fee += 0
	elif i<(5*60):
		fee += 20
	else:
		fee += 30
	print '"%d": %d,' %(i,fee)