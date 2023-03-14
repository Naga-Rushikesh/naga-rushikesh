def funclogin(ev):
    print("hello world")
from browser import document
f=open("css/database.json")
f=f.read()
database=eval(f)
database["userdata"]["key"]="map"
print(database)
database=str(database)
df=open("css/database.json","r")
df.write(database)
loginbutton=document["loginbutton"]
loginbutton.bind("click",funclogin)