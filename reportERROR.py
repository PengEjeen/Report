import os
import sys

apache2_error_command = "tail /var/log/apache2/error.log.1"

def getApache2Error():
    try:
        report = os.popen(apache2_error_command).read()
        return report

    except Exception as e:
        return e

    
