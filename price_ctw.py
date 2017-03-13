fee = 0

for i in range(30,1441,30):
	if i<=(0.5*60):
		fee += 0
	else:
		if i%30 == 0 and i%60 != 0 or i == 60:
			if i<=(5*60):
			  fee += 20
			else:
				fee += 50
	if i!=1440:
	  print '"%d": %d,' %(i,fee)
	else:
	  print '"%d": %d' %(i,fee)