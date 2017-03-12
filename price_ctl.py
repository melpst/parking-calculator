fee = 0

for i in range(0,1441,30):
	if i<(1.5*60):
		fee = 0
	elif i<(3.5*60):
		fee = 20
	elif i<(4.5*60):
		fee = 40
	else:
		fee += 50
	print '"%d": %d' %(i,fee)