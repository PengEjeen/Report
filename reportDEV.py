import os
import sys


linux_command_CPU = "mpstat"
linux_command_RAM = "free"
linux_command_DISK = "sudo fdisk -l"



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
