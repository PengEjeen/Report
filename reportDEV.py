import os
import sys

linux_command_IP = "curl ifconfig.me"
# mpstat idle
linux_command_CPU = "mpstat |tail -1 | awk '{print 100-$NF}'"
#free -h free memory 
linux_command_RAM = "free -h |awk '{if($1 ==\"Mem:\") print($3/$2)}'"
linux_command_DISK = "df |sed -n '2,$p' |awk '{if($3/$2>=0.7) print $0}'"


def getIPreport():
    try:
        return os.popen(linux_command_IP).read()

    except Exception as e:
        return e

def getCPUreport():
    try:
        return os.popen(linux_command_CPU).read()
    
    except Exception as e:
        return e

def getRAMreport():
    try:        
        return os.popen(linux_command_RAM).read()
    
    except Exception as e:
        return e

def getDISKreport():
    try:
        return os.popen(linux_command_DISK).read()
   
    except Exception as e:
        return e
