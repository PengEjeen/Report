from fastapi import FastAPI
import reportDEV
import os

app = FastAPI()

ip = reportDEV.getIPreport()
cpu = reportDEV.getCPUreport()
ram = reportDEV.getRAMreport()
disk = reportDEV.getDISKreport()

@app.get("/reports")
async def getDEV():
    return{"ip": ip ,"cpu": cpu, "ram": ram, "disk": disk}

inner_ip = os.popen("hostname -I").read() 

if __name__ == "__main__": 
    port = str(input("insert port: "))
    run = "sudo uvicorn send_api:app --reload --host=" + inner_ip + "--port=" + port + "&"
    os.system(run.replace("\n",""))
