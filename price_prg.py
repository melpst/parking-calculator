fee = 0

for i in range(0,1441,30):
	if i<(2.5*60):
		fee += 0
	elif i<(6.5*60):
		fee += 30
	else:
		fee += 60
	print '"%d": %d' %(i,fee)