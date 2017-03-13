fee = 0

for i in range(30,1441,30):
  if i%60 == 0:
  	if i<(1.5*60):
  		fee = 0
  	elif i<(3.5*60):
  		fee = 20
  	elif i<(4.5*60):
  		fee = 40
  	else:
  		fee += 50
  if i!=1440:
    print '"%d": %d,' %(i,fee)
  else:
    print '"%d": %d' %(i,fee)