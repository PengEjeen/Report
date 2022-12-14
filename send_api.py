from fastapi import FastAPI
from pydantic import BaseModel
from enum import Enum
import reportDEV
import reportERROR

app = FastAPI()

ip = reportDEV.getIPreport()
cpu = reportDEV.getCPUreport()
ram = reportDEV.getRAMreport()
disk = reportDEV.getDISKreport()

@app.get("/reports")
async def getDEV():
    return{"ip": ip ,"cpu": cpu, "ram": ram, "disk": disk}
#d
